import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar";

export default function Credits() {
    return (
        <>
            <Helmet>
                <title>Space Cat Games - Credits</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            <Navbar />

            <div className="container">
                <h1>Credits &amp; Acknowledgments</h1>
                <section className="credits-section">
                    <h2>Development Team</h2>
                    <ul className="credits-list">
                        <li>
                            <strong>Lead Developer:</strong> Ben
                        </li>
                        <li>
                            <strong>Developer:</strong> Jayden
                        </li>
                        <li>
                            <strong>Former Developer:</strong> Kaiden
                        </li>
                    </ul>
                </section>
                <section className="credits-section">
                    <h2>Testers</h2>
                    <ul className="credits-list">
                        <li>
                            <strong>Jake</strong>
                        </li>
                        <li>
                            <strong>Jayden</strong>
                        </li>
                        <li>
                            <strong>Luka</strong>
                        </li>
                    </ul>
                </section>
                <section className="credits-section">
                    <h2>Nijika Softworks</h2>
                    <p>
                        Space Cat Games is now owned and operated by Nijika Softworks, a VN and
                        RPG development group.
                    </p>
                    <h3>Developers:</h3>
                    <ul className="credits-list">
                        <li>
                            <strong>Meowcat</strong> (been here since the beginning)
                        </li>
                    </ul>
                    <h3>Server Moderators:</h3>
                    <ul className="credits-list">
                        <li>Meowcat</li>
                    </ul>
                    <div className="cta-section">
                        <a href="https://discord.gg/8hx2hnGPhH" className="btn">
                            Join our Discord Server
                        </a>
                    </div>
                </section>
                <section className="credits-section">
                    <h2>Special Thanks</h2>
                    <ul className="credits-list">
                        <li>
                            <strong>Neocities:</strong> For hosting us for almost a year
                        </li>
                        <li>
                            <strong>Kaiden:</strong> For helping start this project.
                        </li>
                        <li>
                            <strong>Luka:</strong> For being an early tester.
                        </li>
                        <li>
                            <strong>Netlify:</strong> For keeping us running at the moment.
                        </li>
                        <li>
                            <strong>npm: </strong>For being the JavaScript package manager we used
                            for almost a year. {" "}
                        </li>
                    </ul>
                </section>
                <section className="credits-section">
                    <h2>Game/Tools Credits</h2>
                    <p>
                        The games featured on Space Cat Games come from various sources,
                        developers, and open-source projects. We want to acknowledge and thank
                        all the creators who make these games and tools possible.
                    </p>
                    <ul className="credits-list">
                        <li>
                            <strong>Tetris:</strong> Original concept by Alexey Pajitnov. Web
                            implementation by various developers.
                        </li>
                        <li>
                            <strong>Chrome Dino:</strong> Originally developed by Google as an
                            offline game for Chrome browser.
                        </li>
                        <li>
                            <strong>Geometry Dash:</strong> Created by Robert Topala (RobTop
                            Games). Web version adapted by various developers.
                        </li>
                        <li>
                            <strong>Minecraft:</strong> Created by Markus Persson and later
                            developed by Mojang Studios. Web version is an unofficial adaptation.
                        </li>
                        <li>
                            <strong>Doodle Jump:</strong> Originally developed by Lima Sky. Web
                            adaptation by various developers.
                        </li>
                        <li>
                            <strong>Minesweeper:</strong> Classic Windows game, adapted for web by
                            various developers.
                        </li>
                        <li>
                            <strong>Paper.io 2:</strong> Developed by Voodoo. Web version adapted
                            for educational purposes.
                        </li>
                        <li>
                            <strong>Wordle:</strong> Created by Josh Wardle, adapted for web by
                            various developers.
                        </li>
                        <li>
                            <strong>Chicken Game 2:</strong> Created by Chase, packaged with the
                            Ikuyo Packaging System
                        </li>
                    </ul>
                    <h3>Tools</h3>
                    <ul className="credits-list">
                        <li>
                            <strong>Ikuyo Packaging System: </strong>Forked from Turbowarp,
                            modifed for Nijika Libaries by Meowcat.
                        </li>
                        <li>
                            <strong>Yarn: </strong>Created by YarnPKG. <a href="https://yarnpkg.com/">https://yarnpkg.com/</a>
                        </li>
                        <li>
                            <strong>Visual Studio Code: </strong>IDE used at Ijichi Systems. <a href="https://code.visualstudio.com/">
                                https://code.visualstudio.com/
                            </a>
                        </li>
                        <li>
                            <strong>Git: </strong>Source Control Management System used at Starry
                            Systems. <a href="https://git-scm.com/">https://git-scm.com/</a>
                        </li>
                        <li>
                            <strong>Jekyll: </strong>Static Site Converter. <a href="https://jekyllrb.com/">https://jekyllrb.com/</a>
                        </li>
                        <li>
                            <strong>OwO </strong>Huohhhh. fuwwy stwing twansfowmew ;3
                            <a href="https://yarnpkg.com/package?q=owo&name=%40zuzak%2Fowo">
                                {' '}
                                OwO on Yarn
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}
