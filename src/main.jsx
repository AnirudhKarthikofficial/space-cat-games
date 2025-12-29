/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './index.jsx'
import Games from './games.jsx'

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = createRoot(rootEl)
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  )
} else {
  console.warn('Root element not found; cannot mount React app')
}
