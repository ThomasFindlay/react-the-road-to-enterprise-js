import React, { useState } from 'react'
import logo from './logo.png'
import style from './App.module.css'

function App() {
  return (
    <div className="container flex justify-center min-h-screen p-4 mx-auto">
      <a
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
