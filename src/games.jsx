/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React, { useEffect, useState } from "react";

export default function Games() {
    const [safeHtml, setSafeHtml] = useState(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        let cancelled = false;

        const rewriteRelative = (html) => {
            return html
                .replace(/src=(['"])(?!https?:|\/|data:)(.*?)\1/gi, (m, quote, path) => `src=${quote}/${path}${quote}`)
                .replace(/href=(['"])(?!https?:|\/|mailto:|#)(.*?)\1/gi, (m, quote, path) => `href=${quote}/${path}${quote}`)
                .replace(/url\((['"]?)(?!https?:|\/|data:|#)(.*?)\1\)/gi, (m, quote, path) => `url(${quote}/${path}${quote})`);
        };

        // Fetch the static games.html that lives in public/
        fetch('/games.html', { cache: 'no-store' })
            .then(r => {
                if (!r.ok) throw new Error('Failed to fetch games.html');
                return r.text();
            })
            .then(html => {
                if (cancelled) return;
                setSafeHtml(rewriteRelative(html));
            })
            .catch(err => {
                console.error('Error loading games.html for iframe:', err);
            });

        return () => { cancelled = true; };
    }, []);

    const sandbox = "allow-scripts allow-forms allow-popups allow-modals";

    // While loading, render a lightweight placeholder to avoid flashing other page text.
    if (!safeHtml) {
        return (
            <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
                <iframe
                    title="Space Cat Games - Games"
                    src="/games.html"
                    style={{ width: '100%', height: '100%', border: '0' }}
                    sandbox={sandbox}
                    referrerPolicy="no-referrer"
                />
            </div>
        );
    }

    return (
        <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
            <iframe
                title="Space Cat Games - Games"
                srcDoc={safeHtml}
                style={{ width: '100%', height: '100%', border: '0' }}
                sandbox={sandbox}
                referrerPolicy="no-referrer"
            />
        </div>
    );
}
