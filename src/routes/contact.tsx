import Breadcrumbs from "../components/breadcrumbs"
import Navbar from "../components/sidebar-layout"
import React from "react"

export default function Contact() {
  return (
    <>
      <Navbar>
        <div className="flex flex-col items-center justify-center min-h-screen p-6 md:p-10 bg-gray-200 w-full relative">
          <div className="absolute top-2 right-2">
            <Breadcrumbs Page='Contact' />
          </div>
          <div className="flex-1 flex items-center justify-center flex-col gap-2">
            {/* <div className="flex -z-10 items-center justify-center p-6 md:p-10 bg-gray-200 w-full flex-col"> */}
              <h1 className="text-6xl text-center">For further information</h1>
              <h1 className="text-5xl text-center"> Contact Us</h1>
            {/* </div> */}
          </div>
        </div>
      </Navbar>
    </>
  )
}
