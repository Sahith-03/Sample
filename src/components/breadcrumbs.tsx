import React from "react";

export default function Breadcrumbs({Page}:{Page:string}) {
  return(
    <nav className="text-sm left-0 font-semibold bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-md shadow-lg border-2 border-pink-100 hover:shadow-xl transition-shadow duration-300">
      <ol className="list-reset flex items-center">
      <li><a href="/" className="text-purple-700 font-bold text-base hover:text-pink-900 transition-colors duration-300 hover:underline rounded-lg">Login</a></li>
      <li><span className="mx-2 text-pink-400 font-medium">›</span></li>
      <li><a href={`/${Page}`} className="text-purple-700 font-bold text-base hover:text-pink-900 transition-colors duration-300 hover:underline rounded-lg">{Page}</a></li>
      </ol>
    </nav>
  )
}