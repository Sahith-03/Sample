import React, { Dispatch, SetStateAction } from "react"
import {  Home, Contact,User,Fingerprint } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Contact,
  },
  {
    title: "About",
    url: "/about",
    icon: User,
  },
  {
    title: "Login",
    url: "/",
    icon: Fingerprint,
  },
]

export default function AppSidebar() {

  // const changePage = (title: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   // event.preventDefault()
  //   setPage(title)
  // }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupLabel>Cobuild.tech</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
