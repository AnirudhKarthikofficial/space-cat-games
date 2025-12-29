/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './index.jsx'

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = createRoot(rootEl)
  root.render(<Home />)
} else {
  console.warn('Root element not found; cannot mount React app')
}

