import React from "react";
import { useRouter } from "next/router";

import CustomLink from "../custom-link";
import MainUICard from "../ui-cards/main-ui-card";

const UserCallOuts = () => {
  const router = useRouter();
  const isSignIn = router.pathname === "/sign-in";

  return (
    <MainUICard styles="h-14 grid place-content-center mt-6">
      <p className="w-full font-normal select-none">
        {isSignIn ? "New to ticku?" : "Already have an account?"}{" "}
        <CustomLink label={isSignIn ? "Create an Account." : "Sign In."} href={isSignIn ? "/sign-up" : "/sign-in"}/>
      </p>
    </MainUICard>
  );
};

export default UserCallOuts;
