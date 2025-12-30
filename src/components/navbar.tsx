/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>

            {/* Use SPA routes for internal pages so the app doesn't navigate away to a missing route */}
            <Link to="/opensource">Source Code</Link>
            <a href="/changelog.html">Changelog</a>
            <Link to="/archive">Archive</Link>
            <a href="https://neurontechnologies.flarum.cloud/d/3-space-cat-games-general">
                Help
            </a>

        </div>
    );
}