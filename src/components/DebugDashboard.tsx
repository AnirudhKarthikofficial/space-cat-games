/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React, { useState } from 'react'

function DebugDashboard() {
    const info = __BUILD_INFO__

    // Browser / client info
    const userAgent = navigator.userAgent
    const screenInfo = `${window.screen.width}x${window.screen.height}`
    const language = navigator.language
    const platform = navigator.platform

    const memoryInfo = (performance as any).memory
        ? {
            jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit,
            totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
            usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
        }
        : null

    const connection = (navigator as any).connection
        ? {
            effectiveType: (navigator as any).connection.effectiveType,
            downlink: (navigator as any).connection.downlink,
            rtt: (navigator as any).connection.rtt,
        }
        : null

    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
        const fullInfo = {
            build: info,
            env: import.meta.env,
            client: { userAgent, screen: screenInfo, language, platform, memoryInfo, connection },
        }
        navigator.clipboard.writeText(JSON.stringify(fullInfo, null, 2))
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div style={{ padding: 20, fontFamily: 'monospace' }}>
            <h1>Debug Information</h1>

            <button onClick={copyToClipboard}>
                {copied ? 'Copied!' : 'Copy All Info'}
            </button>

            <section>
                <h2>Build Info</h2>
                <ul>
                    <li>Date: {new Date(info.date).toLocaleString()}</li>
                    <li>Machine: {info.host}</li>
                    <li>OS: {info.os}</li>
                    <li>Node: {info.node}</li>
                    <li>Vite: {info.vite}</li>
                    <li>Git Branch: {info.gitBranch}</li>
                    <li>Git Commit: {info.gitCommit}</li>
                </ul>
            </section>

            <section>
                <h2>Environment Variables</h2>
                <pre>{JSON.stringify(import.meta.env, null, 2)}</pre>
            </section>

            <section>
                <h2>Client Info</h2>
                <ul>
                    <li>User Agent: {userAgent}</li>
                    <li>Platform: {platform}</li>
                    <li>Screen: {screenInfo}</li>
                    <li>Language: {language}</li>
                </ul>
                {memoryInfo && (
                    <div>
                        <h3>Memory</h3>
                        <pre>{JSON.stringify(memoryInfo, null, 2)}</pre>
                    </div>
                )}
                {connection && (
                    <div>
                        <h3>Network</h3>
                        <pre>{JSON.stringify(connection, null, 2)}</pre>
                    </div>
                )}
            </section>
        </div>
    )
}

export default DebugDashboard


