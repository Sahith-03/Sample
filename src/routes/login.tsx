import { LoginForm } from "../components/login-form"
import React, { useState } from "react"

export default function Login() {
  const [auth,setauth] = useState(false)
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gray-200">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
