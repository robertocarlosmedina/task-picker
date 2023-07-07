import React from "react";

import { IMainUICard } from "@/interfaces";

const MainUICard = ({ styles, children }: IMainUICard) => {
  return (
    <div
      className={`${styles} bg-primary-darkGunmetal rounded-xl border-[0.05rem] border-primary-stormyGray/[0.7]`}
    >
      {children}
    </div>
  );
};

export default MainUICard;
