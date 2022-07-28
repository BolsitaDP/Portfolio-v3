import React, { useState } from "react";
import "../styles/themes.css";

const Themes = ({ children }) => {
  const [color, setColor] = useState("#f2f2f2");
  return (
    <div>
      <div className="themesPalette">
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
      </div>
      <div style={{ backgroundColor: color }}>{children}</div>
    </div>
  );
};

export default Themes;
