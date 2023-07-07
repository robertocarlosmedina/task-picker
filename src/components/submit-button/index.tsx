import React from "react";

import { ISubmitButton } from "@/interfaces";

export default function SubmitButton({
  label,
  isLoading,
  styles,
  onClick,
}: ISubmitButton) {
  return (
    <button
      type="submit"
      className={`p-1 h-11 rounded-lg ${styles}`}
      onClick={onClick}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
}
