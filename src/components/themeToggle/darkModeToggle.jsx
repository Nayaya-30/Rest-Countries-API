import { motion } from "motion/react";
import { useDarkMode } from "../../context/darkModeContext";

export default function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className="w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 relative"
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className="w-6 h-6 rounded-full flex items-center justify-center bg-yellow-400 dark:bg-blue-500 text-lg"
            >
                {darkMode ? "🌙" : "☀️"}
            </motion.div>
        </button>
    );
}
