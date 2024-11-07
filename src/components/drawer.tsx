import { useDrawerStore } from "@/store/drawer";
import { useState } from "react";

export const Draw = () => {
  const visible = useDrawerStore((state) => state.visible);
  const handleSetVisible = useDrawerStore((state) => state.handleSetVisible);

  return (
    <div
      className={`fixed top-0 right-0 min-w-60 bg-white h-full z-[1051] duration-200 shadow-md
${visible ? "translate-x-0" : "translate-x-full"}
 `}
      onClick={() => {
        handleSetVisible(false);
      }}
    >
      123
    </div>
  );
};
