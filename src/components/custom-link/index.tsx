import React from "react";
import Link from "next/link";

import { ICustomLink } from "@/interfaces";

const CustomLink = ({ label, href, styles }: ICustomLink) => {
  return (
    <Link
      href={href}
      className={`${styles} cursor-pointer text-primary-purple hover:text-primary-purple/[0.8] hover:underline hover:underline-offset-2`}
    >
      {label}
    </Link>
  );
};

export default CustomLink;
