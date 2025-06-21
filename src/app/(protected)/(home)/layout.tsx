import { ReactNode } from "react";
import { Header } from "./header";

export default function HomeLayout({ children }: { children: ReactNode}){
  return (
    <>
      <Header />
      <main className="flex w-full min-h-[50vh] px-4 md:px-8 lg:px-32 py-4 md:py-8 lg:py-12">
        {children}
      </main>
    </>
  )
}