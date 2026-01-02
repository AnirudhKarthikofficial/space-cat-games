/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './index.jsx'
import Games from './games.jsx'
import Credits from './credits.jsx'
import Archive from './archive.jsx'
import Opensource from './opensource.jsx'
import Changelog from './changelog.jsx'
import Privacy from './privacy.jsx'
import DebugDashboard from './components/DebugDashboard' // no need for .tsx

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = createRoot(rootEl)
  root.render(
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />

          {/* Games */}
          <Route path="/games" element={<Games />} />
          <Route path="/games.html" element={<Games />} />
          <Route path="/games/index.html" element={<Games />} />
          <Route path="/games/" element={<Games />} />

          {/* Credits */}
          <Route path="/credits" element={<Credits />} />
          <Route path="/credits.html" element={<Credits />} />
          <Route path="/credits/index.html" element={<Credits />} />

          {/* Archive */}
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive.html" element={<Archive />} />
          <Route path="/archive/index.html" element={<Archive />} />
          <Route path="/archive/" element={<Archive />} />

          {/* Opensource */}
          <Route path="/opensource" element={<Opensource />} />
          <Route path="/opensource.html" element={<Opensource />} />
          <Route path="/opensource/index.html" element={<Opensource />} />

          {/* Changelog */}
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/changelog.html" element={<Changelog />} />
          <Route path="/changelog/index.html" element={<Changelog />} />

          {/* Privacy */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy.html" element={<Privacy />} />
          <Route path="/privacy/index.html" element={<Privacy />} />

          {/* Debug Dashboard */}
          <Route path="/debug" element={<DebugDashboard />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
  )
} else {
  console.warn('Root element not found; cannot mount React app')
}
