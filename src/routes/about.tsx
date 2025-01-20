import Navbar from "../components/sidebar-layout"
import React from "react"

export default function About() {
  return (
    <>
      <Navbar Page="About">
      <div className="flex -z-10 items-center justify-center p-6 md:p-10 bg-gray-200 w-full">
          <h1 className="text-6xl text-center">About</h1>
        </div>
      </Navbar>
    </>
  )
}
