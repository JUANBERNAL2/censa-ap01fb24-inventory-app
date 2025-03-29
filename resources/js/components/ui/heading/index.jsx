import React from "react";
export default function Heading({ children, level = 1, ...props }) {
    if (level < 1 || typeof level !== "number") {
        level = 1;
    } else if (level > 6) {
        level = 6;
    }
    level = Math.floor(level);
    return React.createElement(`h${level}`, props, children);
}
