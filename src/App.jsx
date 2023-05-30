import React, { useState } from 'react'
import logo from './logo.png'
import style from './App.module.css'

function App() {
  return (
    <div className="container flex flex-col min-h-screen gap-8 p-4 mx-auto">
      <a
        className="block mx-auto"
        href="https://theroadtoenterprise.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={logo} className="w-48" alt="logo" />
      </a>
    </div>
  )
}

export default App
