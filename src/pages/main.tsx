import { MainPage } from "@/components/MainPage"; 
import { SessionProvider } from "next-auth/react";
import { NoSsr } from "@mui/material";

interface Props{
  category : number
}

const Page = (prop:Props) => {


  return (
    <SessionProvider>
      <NoSsr>
      <MainPage category={prop.category}/>
      </NoSsr>
    </SessionProvider>
  );
};

export default  Page