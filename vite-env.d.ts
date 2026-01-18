/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

/// <reference types="vite/client" />

interface BuildInfo {
    date: string
    host: string
    os: string
    node: string
    vite: string
    appVersion: string
    gitCommit: string
    gitBranch: string
}

declare const __BUILD_INFO__: BuildInfo
