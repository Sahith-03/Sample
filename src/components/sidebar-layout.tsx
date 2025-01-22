import React, { useState } from "react"
import { SidebarProvider, SidebarTrigger } from "./sidebar"
import AppSidebar from "./app-sidebar"
import Breadcrumbs from "./breadcrumbs"

export default function Navbar({ children }: { children: React.ReactNode}) {

  // const [Page, setPage] = useState("Home")

  return (
    <>
    <header className="bg-gray-800 text-3xl w-auto text-white p-4 items-center flex">
      <div className="flex-1 flex justify-center">
        <h1 className="text-5xl font-bold">
          HTS
        </h1>
      </div>
    </header>
    
    <SidebarProvider>
      <AppSidebar />
      <main>
      <SidebarTrigger />
      </main>
      
      {children}
    </SidebarProvider>

    

    <footer className="bg-gray-800 text-2xl w-auto text-white p-4 items-center flex justify-center">
      Thank You for visiting Cobuild.Tech
    </footer>
    </>
  )
}
