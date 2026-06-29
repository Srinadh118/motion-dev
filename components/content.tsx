"use client";

import { useState } from "react";
import Navbar from "./navbar";

import { COMPONENTS } from "@/data/components";

const Content = () => {
  const [selectedComponent, setSelectedComponent] = useState(
    COMPONENTS[0]?.name || "",
  );

  return (
    <div
      className="perspective-distant transform-3d h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
        backgroundSize: "24px 24px",
        backgroundRepeat: "repeat",
      }}
    >
      <Navbar
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      />

      {COMPONENTS.map(
        (component) =>
          selectedComponent == component.name && (
            <div key={component.name}>{component.componentJsx}</div>
          ),
      )}
    </div>
  );
};

export default Content;
