import { MainPage } from "@/components/MainPage"; 
import { SessionProvider } from "next-auth/react";
import { NoSsr } from "@mui/material";
const Page = () => {
  return (
    <SessionProvider>
      <NoSsr>
      <MainPage/>
      </NoSsr>
    </SessionProvider>
  );
};

export default  Page