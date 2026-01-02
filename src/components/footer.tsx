/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import { useEffect } from "react";


export default function Footer() {
    useEffect(() => {
        // Load TickCounter script
        if (document.getElementById("tickcounter-sdk")) return;
        
        const script = document.createElement("script");
        script.id = "tickcounter-sdk";
        script.src = "//www.tickcounter.com/static/js/loader.js";
        document.body.appendChild(script);
    }, []);

    return (
        <footer>
            <div className="container">
                <p>© 2025 Nijika Softworks & <a href="https://github.com/neurontechofficial">Neuron Technologies </a> | All rights reserved.</p>
                <img src={"images/react.png"} width={150} height={60}/>    <img src={"images/vite.svg"} height={55}/>
                <br />
                <div>Built on: {new Date(__BUILD_INFO__.date).toLocaleString()}</div>
                <div>Node: {__BUILD_INFO__.node}</div>
                <div>Vite: {__BUILD_INFO__.vite}</div>
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
    );
}
