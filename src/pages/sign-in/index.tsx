import React from "react";

import SignInForm from "@/components/forms/sign-in";
import { LegacyInfo } from "@/components/legacy-info";
import UserCallOuts from "@/components/user-call-outs";
import MainUICard from "@/components/ui-cards/main-ui-card";

function SignIn() {
  return (
    <main className="w-screen h-auto flex mb-10 overflow-hidden">
      <div className="flex-1"></div>
      <div className="sm:w-[28rem] w-[90vw] min-w-[20rem] mb-10 overflow-hidden mt-12">
        <MainUICard styles="h-auto p-10">
          <SignInForm />
        </MainUICard>
        <UserCallOuts />
        <LegacyInfo />
      </div>
      <div className="flex-1"></div>
    </main>
  );
}

export default SignIn;
