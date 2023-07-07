import React from "react";

import CustomLink from "../custom-link";

export const LegacyInfo = () => {
  return (
    <div className="w-full mt-6 grid place-content-center">
      <div className="flex gap-6">
        <CustomLink label={"Terms"} href={"/"} />{" "}
        <CustomLink label={"Privacy"} href={"/"} />{" "}
        <CustomLink label={"Contact ticku"} href={"/"} />{" "}
      </div>
    </div>
  );
};
