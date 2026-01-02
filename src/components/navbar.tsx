/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <a href="https://nijikasoftworks.meowcat.site/">News</a>
            <Link to="/opensource">Source Code</Link>
            <Link to="/credits">Credits</Link>
            <Link to="/changelog">Changelog</Link>
            <Link to="/archive">Archive</Link>
            <a href="https://neurontechnologies.flarum.cloud/d/3-space-cat-games-general">
                Help
            </a>
        </div>
    );
}