import Navbar from "../components/sidebar-layout"
import React from "react"

export default function Contact() {
  return (
    <>
      <Navbar Page="Contact">
      <div className="flex -z-10 items-center justify-center p-6 md:p-10 bg-gray-200 w-full flex-col">
          <h1 className="text-6xl text-center">For further information</h1>
          <h1 className="text-5xl text-center"> Contact Us</h1>
        </div>
      </Navbar>
    </>
  )
}
