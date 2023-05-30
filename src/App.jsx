import React, { useState } from 'react'
import logo from './logo.png'
import style from './App.module.css'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <header className="">
        <a
          href="https://theroadtoenterprise.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logo} className="max-w-sm" alt="logo" />
        </a>
      </header>
    </div>
  )
}

export default App
