import Navbar from "../components/sidebar-layout"
import React from "react"

export default function Login() {
  return (
    <>
      <Navbar Page = "Home">
        <div className="flex -z-10 items-center justify-center p-6 md:p-10 bg-gray-200 w-full">
          <h1 className="text-6xl text-center">Welcome to the Home Page</h1>
        </div>
      </Navbar>
    </>
  )
}
