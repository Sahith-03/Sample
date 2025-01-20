import Navbar from "../components/sidebar-layout"
import React from "react"

export default function About() {
  return (
    <>
      <Navbar>
        <div className="flex min-h-svh w-screen fixed items-center justify-center bg-gray-200">
          <h1 className="text-6xl text-center">About</h1>
        </div>
      </Navbar>
    </>
  )
}
