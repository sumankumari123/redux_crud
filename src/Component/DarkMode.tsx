import React, { useState, useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
// import { Tooltip, Button } from "@material-tailwind/react";
import Tooltip from "@mui/material/Tooltip";

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  console.log(isDarkMode);

  return (
    <div onClick={toggleDarkMode}>
      {isDarkMode ? (
        <Tooltip title="Toggle Light Mode" placement="top">
          <span>
            <MdOutlineDarkMode />
          </span>
        </Tooltip>
      ) : (
        <Tooltip title="Toggle Dark Mode" placement="top">
          <span>
            <IoSunnyOutline />
          </span>
        </Tooltip>
      )}
    </div>
  );
};

export default DarkMode;
