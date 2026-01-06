/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        // always scroll to top when navigating
        window.scrollTo(0, 0)
    }, [pathname, hash])

    return null
}
