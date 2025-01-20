import React, { useState } from "react"
import { SidebarProvider, SidebarTrigger } from "./sidebar"
import AppSidebar from "./app-sidebar"

export default function Navbar({ children,Page }: { children: React.ReactNode,Page: string }) {

  // const [Page, setPage] = useState("Home")

  return (
    <>
    <header className="bg-gray-800 text-3xl w-auto text-white p-4 items-center flex justify-center flex-col">
      
      <nav className="text-sm text-gray-400 left-0">
        <ol className="list-reset flex">
          <li><a href="/" className="text-white">Login</a></li>
          <li><span className="mx-2">/</span></li>
          <li><a href="/home" className="text-white">{Page}</a></li>
        </ol>
      </nav>

      Cobuild.Tech
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
