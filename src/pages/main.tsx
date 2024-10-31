import { MainPage } from "@/components/MainPage"; 
import { SessionProvider } from "next-auth/react";

const Page = () => {
  return (
    <SessionProvider>
      <MainPage/>
    </SessionProvider>
  );
};

export default  Page