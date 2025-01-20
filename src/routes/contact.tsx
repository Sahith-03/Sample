import Navbar from "../components/sidebar-layout"
import React from "react"

export default function Contact() {
  return (
    <>
      <Navbar>
        <div className="flex flex-col min-h-svh w-screen fixed items-center justify-center bg-gray-200 gap-2">
          <h1 className="text-6xl text-center">For further information</h1>
          <h1 className="text-5xl text-center"> Contact Us</h1>
        </div>
      </Navbar>
    </>
  )
}
