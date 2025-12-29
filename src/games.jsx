/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React from "react";

export default function Games() {
    // compute runtime src to avoid Vite static resolution warnings
    const iframeSrc = (typeof window !== 'undefined') ? `${window.location.origin}/games.html` : '/games.html';

    /*
      Sandbox settings:
      - We intentionally DO NOT include `allow-same-origin` for stronger isolation.
      - We allow scripts/forms/popups so the static page can generally run, but because
        the iframe will be treated as a unique origin it cannot access the parent page.

      If you need the embedded page to share cookies / same-origin access with the host,
      change sandbox to include `allow-same-origin` but be aware that reduces isolation.
    */
    const sandboxAttrs = "allow-scripts allow-forms allow-popups allow-modals";

    return (
        <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
            <iframe
                title="Space Cat Games - Games"
                src={iframeSrc}
                style={{ width: '100%', height: '100%', border: '0' }}
                sandbox={sandboxAttrs}
                referrerPolicy="no-referrer"
            />

            {/* Fallback for users/browsers that block iframes */}
            <noscript>
                <div style={{ padding: 16 }}>
                    <p>
                        This site embeds the static games listing in an isolated frame. If you cannot see
                        the embedded site, open it directly:
                        {' '}
                        <a href="/games.html" target="_blank" rel="noopener noreferrer">Open games page</a>.
                    </p>
                </div>
            </noscript>
        </div>
    );
}
