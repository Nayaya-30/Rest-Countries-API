import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { geoPath } from "d3-geo";
import { useSpring, animated } from "@react-spring/web";
import * as topojson from "topojson-client";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const AnimatedZoomableGroup = animated(ZoomableGroup);

const CountryMap = ({ country, borders, hoveredBorder, onClick, onHover }) => {
  const [targetCenter, setTargetCenter] = useState([0, 20]);
  const [targetZoom, setTargetZoom] = useState(1);

  // helper: compute bounds & return [center, zoom]
  const computeView = (geoFeature) => {
    const path = geoPath();
    const bounds = path.bounds(geoFeature);

    const dx = bounds[1][0] - bounds[0][0];
    const dy = bounds[1][1] - bounds[0][1];
    const x = (bounds[0][0] + bounds[1][0]) / 2;
    const y = (bounds[0][1] + bounds[1][1]) / 2;

    const zoom = Math.min(Math.min(800 / dx, 400 / dy) * 0.8, 5); 
    return [[x, y], zoom];
  };

  useEffect(() => {
  if (!country) return;

  fetch(geoUrl)
    .then((res) => res.json())
    .then((geo) => {
      const geographies = geo.objects
        ? topojson.feature(geo, geo.objects.countries).features
        : geo.features;

      // Determine which country to focus on: hoveredBorder or the main country
      const targetName = country.name.common;
      const target = geographies.find((g) => g.properties.name === targetName);

      if (target) {
        const [center, zoom] = computeView(target);

        setTargetCenter((prev) =>
          prev[0] !== center[0] || prev[1] !== center[1] ? center : prev
        );
        setTargetZoom((prev) => (prev !== zoom ? zoom : prev));
      }
    });
  }, [country]);

  // Smooth transition
  const springProps = useSpring({
        center: targetCenter,
        zoom: targetZoom,
        config: { tension: 200, friction: 28 },
  });

  return (
    <ComposableMap 
        projection="geoMercator" 
        style={{ 
            width: "600px", 
            height: "350px", 
            borderRadius: 4, 
            boxShadow: "0 0 5px 7px rgba(0,0,0,0.1)", 
            backgroundColor: "bgcolor.elements" 
        }}
        onClick={onClick}
    >
      <AnimatedZoomableGroup
        center={springProps.center}
        zoom={springProps.zoom}
        // disablepanning='true'
        >

        <Geographies geography={geoUrl}>
            {({ geographies }) =>
                geographies.map((geo) => {
                const border = geo.properties.name;
                const isCurrent = border === country.name.common;
                const isHovered = border === hoveredBorder;
                const isBorder = borders.includes(border);

                return (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={
                            isCurrent
                            ? "#55ce55ff"
                            : isHovered
                            ? "#74a6bdff"
                            : isBorder
                            ? "#cec787ff"
                            : "#E0E0E0"
                        }
                        stroke="#553e3eff"
                        style={{
                            default: { outline: "none" },
                            hover: { outline: "none" },
                            pressed: { outline: "none" },
                        }}
                        onMouseEnter={() => onHover(border)}
                        onMouseLeave={() => onHover(null)} 
                    />
                );
                })
            }
        </Geographies>
      </AnimatedZoomableGroup>
    </ComposableMap>
  );
};

export default CountryMap;