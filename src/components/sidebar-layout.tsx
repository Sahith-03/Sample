import React from "react"
import { SidebarProvider, SidebarTrigger } from "./sidebar"
import AppSidebar from "./app-sidebar"

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
