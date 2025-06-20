import { ReactNode } from "react";
import { Header } from "./header";

export default function HomeLayout({ children }: { children: ReactNode}){
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}