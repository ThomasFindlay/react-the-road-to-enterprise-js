import React, { useState } from 'react'
import logo from './logo.png'
import './App.css'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <header className="">
        <a href="https://theroadtoenterprise.com" target="_blank">
          <img src={logo} className="max-w-sm" alt="logo" />
        </a>
      </header>
    </div>
  )
}

export default App
