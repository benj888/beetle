
import { SignIn } from "./loginPage";
import { SessionProvider } from "next-auth/react";

const Page = () => {
  return (
    <SessionProvider>
      <SignIn/>
    </SessionProvider>
  );
};

export default  Page