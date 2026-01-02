/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function Footer() {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        // Remove old TickCounter script if exists
        const existing = document.getElementById("tickcounter-sdk")
        if (existing) {
            existing.remove()
        }

        // Load TickCounter script
        const script = document.createElement("script")
        script.id = "tickcounter-sdk"
        script.src = "//www.tickcounter.com/static/js/loader.js"
        document.body.appendChild(script)
    }, [location.pathname]) // re-run on route change

    return (
        <footer>
            <div className="container">
                <p>
                    © 2025 Nijika Softworks &{" "}
                    <a href="https://github.com/neurontechofficial">Neuron Technologies</a>{" "}
                    | All rights reserved.
                </p>

                {/* Images */}
                <img src="images/react.png" width={150} height={60} />
                <img src="images/vite.svg" height={55} />
                <br />

                {/* Build Info */}
                <div>Built on: {new Date(__BUILD_INFO__.date).toLocaleString()}</div>
                <div>Node: {__BUILD_INFO__.node}</div>
                <div>Vite: {__BUILD_INFO__.vite}</div>

                {/* TickCounter widget */}
                <a
                    data-type="countup"
                    data-id="367698"
                    className="tickcounter"
                    style={{
                        display: "block",
                        left: 0,
                        width: "100%",
                        height: "50px",
                        position: "relative",
                        paddingBottom: 0,
                        margin: "0 auto",
                    }}
                    title="Uptime"
                    href="//www.tickcounter.com/countup"
                >
                    Uptime
                </a>

                <a href="/debug">
                    <button>Debugger</button>
                </a>

            </div>
        </footer>
    )
}
