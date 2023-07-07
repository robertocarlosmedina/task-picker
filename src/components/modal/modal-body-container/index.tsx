import React from "react";

interface ModalBodyContainerProps {
  children: JSX.Element;
  styles: string;
  allowYScroll: boolean;
}

function ModalBodyContainer({
  children,
  styles,
  allowYScroll,
}: ModalBodyContainerProps) {
  return (
    <div
      className={`relative ${styles} p-6 pl-14 pr-14 flex-auto ${
        allowYScroll ? "overflow-y-auto" : "overflow-y-hidden"
      } overflow-x-hidden w-full`}
    >
      {children}
    </div>
  );
}

export default ModalBodyContainer;
