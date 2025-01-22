import Breadcrumbs from "../components/breadcrumbs"
import Navbar from "../components/sidebar-layout"
import React from "react"

export default function Login() {
  return (
    <>
      <Navbar>
        <div className="flex flex-col items-center justify-center min-h-screen p-6 md:p-10 bg-gray-200 w-full relative">
          <div className="absolute top-2 right-2">
            <Breadcrumbs Page='Home' />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-6xl text-center">Home Page</h1>
          </div>
        </div>
      </Navbar>
    </>
  )
}
