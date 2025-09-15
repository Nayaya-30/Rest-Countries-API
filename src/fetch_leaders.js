import fs from "fs";

// Convert Wikidata image URL into Special:FilePath format
function toFilePathUrl(imageUrl) {
  if (!imageUrl) return null;
  const filename = decodeURIComponent(imageUrl.split("/").pop());
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${filename}`;
}

// Define priority of roles (higher = more important)
function getRoleRank(role = "") {
  const r = role.toLowerCase();
  if (r.includes("monarch") || r.includes("king") || r.includes("queen") || r.includes("emperor") || r.includes("sultan") || r.includes("pope") || r.includes("emir"))
    return 6; // Monarchs highest
  if (r.includes("president")) return 5;
  if (r.includes("chancellor")) return 4;
  if (r.includes("prime minister")) return 3;
  if (r.includes("minister")) return 2;
  return 1; // fallback
}

const query = `
SELECT ?countryLabel ?leaderLabel ?image ?prop WHERE {
  ?country wdt:P31 wd:Q6256.

  {
    ?country wdt:P35 ?leader.
    ?leader wdt:P39 ?pos.
    ?pos wdt:P279* ?type.
    VALUES ?type { wd:Q43229 wd:Q11696 wd:Q48349 wd:Q30185 }
    BIND("Monarch" AS ?prop)
  }
  UNION
  {
    ?country wdt:P35 ?leader.
    FILTER NOT EXISTS { ?leader wdt:P39/wdt:P279* wd:Q43229 }
    BIND("President" AS ?prop)
  }
  UNION
  {
    ?country wdt:P6 ?leader.
    ?leader wdt:P39 ?pos.
    ?pos wdt:P279* wd:Q14212.
    BIND("Prime Minister" AS ?prop)
  }
  UNION
  {
    ?country wdt:P6 ?leader.
    ?leader wdt:P39 ?pos.
    ?pos wdt:P279* wd:Q30185.
    BIND("Chancellor" AS ?prop)
  }

  OPTIONAL { ?leader wdt:P18 ?image. }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
`;

const url = "https://query.wikidata.org/sparql";

async function fetchLeaders() {
  const response = await fetch(url + "?query=" + encodeURIComponent(query), {
    headers: {
      Accept: "application/json",
      "User-Agent": "world-leaders-scraper/1.0 (https://example.com)",
    },
  });

  if (!response.ok) {
    throw new Error(`❌ SPARQL query failed: ${response.statusText}`);
  }

  const data = await response.json();
  const grouped = {};

  data.results.bindings.forEach((item) => {
    const country = item.countryLabel.value;
    const leader = item.leaderLabel.value;
    const role = item.prop ? item.prop.value.trim() : "";
    const imageUrl = item.image ? toFilePathUrl(item.image.value) : null;

    const leaderObj = { leader, role, image_url: imageUrl };

    if (!grouped[country]) {
      grouped[country] = {};
    }

    if (!grouped[country][leader]) {
      grouped[country][leader] = leaderObj;
    } else {
      const existing = grouped[country][leader];
      if (getRoleRank(role) > getRoleRank(existing.role)) {
        grouped[country][leader] = leaderObj;
      }
    }
  });

  // Convert inner objects to arrays
  const finalResult = {};
  for (const country in grouped) {
    finalResult[country] = Object.values(grouped[country]);
  }

  return finalResult;
}

(async () => {
  try {
    const leadersData = await fetchLeaders();
    fs.writeFileSync(
      "world_leaders.json",
      JSON.stringify(leadersData, null, 2),
      "utf-8"
    );
    console.log("✅ JSON file created with Presidents, PMs, Chancellors, and Monarchs: world_leaders.json");
  } catch (err) {
    console.error(err);
  }
})();
