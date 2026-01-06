import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './index.jsx'
import Games from './games.jsx'
import Credits from './credits.jsx'
import Archive from './archive.jsx'
import Opensource from './opensource.jsx'
import Changelog from './changelog.jsx'
import Privacy from './privacy.jsx'
import DebugDashboard from './components/DebugDashboard'

const rootEl = document.getElementById('root')

if (!rootEl) {
    console.warn('Root element not found; cannot mount React app')
} else {
    createRoot(rootEl).render(
        <React.StrictMode>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/credits" element={<Credits />} />
                    <Route path="/archive" element={<Archive />} />
                    <Route path="/opensource" element={<Opensource />} />
                    <Route path="/changelog" element={<Changelog />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/debug" element={<DebugDashboard />} />

                    {/* Catch-all */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </HashRouter>
        </React.StrictMode>
    )
}
