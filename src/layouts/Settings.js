import { useContext, useEffect, useState } from "react";
import { context } from "../context/context";
import Image from "next/image";

const colors = [
  "#4169e1",
  "#66B95C",
  "#ff9800",
  "#ff5e94",
  "#fa5b0f",
  "#f39977",
  "#9200ee",
  "#00D4BD",
  "#5e9e9f",
  "#EB4A4C",
  "#666d41",
  "#fe0000",
];

const Settings = () => {
  const [toggle, setToggle] = useState(false);
  const colorContext = useContext(context);
  const { colorChange, getColor, changeCursor, getMagicCursor, megicCursor } =
    colorContext;
  useEffect(() => {
    getColor("#eb4a4c");
    getMagicCursor("hide");
  }, []);
  return (
    <div className={`edrea_tm_settings ${toggle ? "opened" : ""}`}>
      <div className="icon">
        <i className="icon-cog"></i>
        <a className="link" href="#" onClick={() => setToggle(!toggle)} />
      </div>
      <div className="wrapper">
        <span className="title">Colors Setting</span>
        <ul className="colors">
          {colors.map((color, i) => (
            <li key={i}>
              <a
                key={i}
                href="#"
                data-color={color}
                style={{ backgroundColor: color, marginRight: `5px` }}
                onClick={() => colorChange(color)}
              />
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};
export default Settings;