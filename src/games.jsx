/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React from "react";
import { Helmet } from "react-helmet";

export default function Games() {
    return (
        <>
            <Helmet>
                <title>Space Cat Games - Games</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <meta charSet="utf-8" />
            <link href="css/style.css" rel="stylesheet" type="text/css" />
            <link href="games.css" rel="stylesheet" type="text/css" />
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            <link rel="icon" href="favicon.ico" type="image/x-icon" />
            {/* Google tag (gtag.js) */}
            <div
                id="loading-spinner"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(30,32,34,0.95)",
                    zIndex: 99999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.4s"
                }}
            >
                <div
                    style={{
                        border: "8px solid #eee",
                        borderTop: "8px solid #e74c3c",
                        borderRadius: "50%",
                        width: 64,
                        height: 64,
                        animation: "spin 1s linear infinite"
                    }}
                />
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    @keyframes spin {\n      0% {\n        transform: rotate(0deg);\n      }\n\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n  "
                }}
            />
            <noscript>
                &lt;h1&gt;Hey there!&lt;/h1&gt; &lt;h2&gt;You need Javascript enabled to
                view this site!&lt;/h2&gt; &lt;p&gt;Error Code = 0x00004&lt;/p&gt;
            </noscript>
            <div className="topnav">
                <a href="index.tsx">Home</a>
                <a href="games.tsx">Games</a>
                <a href="https://nijikasoftworks.meowcat.site/">News</a>
                <a href="opensource.tsx">Source Code</a>
                <a href="credits.html">Credits</a>
                <a href="changelog.html">Changelog</a>
                <a href="archive.tsx">Archive</a>
                <a href="https://neurontechnologies.flarum.cloud/d/3-space-cat-games-general">
                    Help
                </a>
            </div>
            <div className="container">
                <h1>Games Collection</h1>
                <p>
                    Browse our extensive collection of free browser games. Click on any game
                    to start playing instantly!
                </p>
                {/* QoL Features Section */}
                <div className="game-controls">
                    <div className="search-container">
                        <input
                            type="text"
                            id="gameSearch"
                            className="search-input"
                            placeholder="Search for games..."
                        />
                    </div>
                    <div className="controls-row">
                        <div className="sort-options">
                            <label htmlFor="gameSort">Sort by:</label>
                            <select id="gameSort" className="sort-select">
                                <option value="default">Default</option>
                                <option value="az">Name (A-Z)</option>
                                <option value="za">Name (Z-A)</option>
                            </select>
                        </div>
                        <button id="randomGameBtn" className="btn random-btn">
                            <span className="icon">🎲</span> Random Game
                        </button>
                    </div>
                    <div className="game-count">
                        Showing <span id="visibleCount">0</span> of{" "}
                        <span id="totalCount">0</span> games
                    </div>
                </div>
                <div className="games-grid" id="gamesGrid">
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/fifa2007.html")}
                            title="FIFA 2007"
                        >
                            <img src="/images/noimg.png" alt="FIFA 2007" />
                        </button>
                        <p>FIFA 2007</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/taptap.html")}
                            title="Tap Goal"
                        >
                            <img src="/images/tapcap.png" alt="Tap Goal" />
                        </button>
                        <p>Tap Goal</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/hardestgame.html")}
                            title="The Hardest Game"
                        >
                            <img
                                src="https://i.ibb.co/nNYZ2FST/8-LMW84-image-75.jpg"
                                alt="The Hardest Game"
                            />
                        </button>
                        <p>The Hardest Game</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/suika.html")}
                            title="Suika Game"
                        >
                            <img src="/images/suika-icon.png" alt="Suika Game" />
                        </button>
                        <p>Suika Game</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Connect the Pipes.html")}
                            title="Connect the Pipes"
                        >
                            <img src="/images/pipecap.png" alt="Connect the Pipes" />
                        </button>
                        <p>Connect The Pipes</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/circle.html")}
                            title="Circloo"
                        >
                            <img
                                src="https://i.ibb.co/nN1xjLPG/971353830f129fd3f1446398792e6997.jpg"
                                alt="Circloo"
                            />
                        </button>
                        <p>Circloo</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/maze.html")}
                            title="Maze"
                        >
                            <img src="/images/maze-cap.png" alt="Maze" />
                        </button>
                        <p>Maze</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/there-is-no-game/index.html")}
                            title="There is no game"
                        >
                            <img
                                src="/games/there-is-no-game/images/letter_n-sheet0.png"
                                alt="There is no game"
                            />
                        </button>
                        <p>There is no game</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/The Typing Game.html")}
                            title="The Typing Game"
                        >
                            <img src="/images/thetypinggame.png" alt="The Typing Game" />
                        </button>
                        <p>The Typing Game</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Pick a Lock.html")}
                            title="Pick a Lock"
                        >
                            <img src="/images/pickalock.png" alt="Pick a Lock" />
                        </button>
                        <p>Pick a Lock</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Cubit - A 3D game.html")}
                            title="Cubit"
                        >
                            <img src="/images/cubit.png" alt="Cubit" />
                        </button>
                        <p>Cubit</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/wordle.html")}
                            title="Wordle"
                        >
                            <img src="https://i.ibb.co/SXZymjyS/images.png" alt="Wordle" />
                        </button>
                        <p>Wordle</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/dino.html")}
                            title="Chrome Dino"
                        >
                            <img
                                src="https://i.ibb.co/GBrwZRt/hes-just-so-pixelated-i-love-him-v0-obzrwinx6wfc1.webp"
                                alt="Chrome Dino"
                            />
                        </button>
                        <p>Chrome Dino</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/gm.html")}
                            title="Geometry Dash"
                        >
                            <img
                                src="https://i.ibb.co/Xr5LnpSz/Logo-of-Geometry-Dash-svg.png"
                                alt="Geometry Dash"
                            />
                        </button>
                        <p>Geometry Dash</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/tetris.html")}
                            title="Tetris"
                        >
                            <img src="https://i.ibb.co/vv645Z00/tetris-logo.png" alt="Tetris" />
                        </button>
                        <p>Tetris</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/stack.html")}
                            title="Stack"
                        >
                            <img src="https://i.ibb.co/YTVCpPqL/unnamed.png" alt="Stack" />
                        </button>
                        <p>Stack</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/clcrazycattle3d.html")}
                            title="Crazy Cattle 3D"
                        >
                            <img src="/images/cattlemoment.webp" alt="Crazy Cattle 3D" />
                        </button>
                        <p>Crazy Cattle 3D</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/slope.html")}
                            title="Slope"
                        >
                            <img src="/images/slopeicon.jpeg" alt="Slope" />
                        </button>
                        <p>Slope</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/moto.html")}
                            title="MotoX3M"
                        >
                            <img src="/images/motocap.avif" alt="MotoX3M" />
                        </button>
                        <p>MotoX3M</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/doodle.html")}
                            title="Doodle Jump"
                        >
                            <img src="https://i.ibb.co/hR1ZK9Yc/Doodle-Jump.png" alt="Doodle Jump" />
                        </button>
                        <p>Doodle Jump</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/pingpong.html")}
                            title="Ping Pong"
                        >
                            <img src="https://i.ibb.co/LD4Z3872/pong-1650079489009.jpg" alt="Ping Pong" />
                        </button>
                        <p>Ping Pong</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/winmine.html")}
                            title="Minesweeper"
                        >
                            <img src="https://i.ibb.co/Kc1J3Nhj/Mr-Smiley-Face-from-Minesweeper-render.webp" alt="Minesweeper" />
                        </button>
                        <p>Minesweeper</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/fly3.html")}
                            title="Learn to Fly 3"
                        >
                            <img src="https://i.ibb.co/GfPzN9Ns/images-5.jpg" alt="Learn to Fly 3" />
                        </button>
                        <p>Learn to Fly 3</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/stckmnhk/index.html")}
                            title="Stickman Hook"
                        >
                            <img src="/games/stckmnhk/icon.jpg" alt="Stick Man Hook icon" />
                        </button>
                        <p>Stickman Hook</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/fly.html")}
                            title="Learn to Fly"
                        >
                            <img src="https://i.ytimg.com/vi/qIBxUAp-Gk8/maxresdefault.jpg" alt="Learn to Fly" />
                        </button>
                        <p>Learn to fly</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/subsurf/subsurfs.html")}
                            title="Subway Surfers"
                        >
                            <img src="/games/subsurf/icon.png" alt="Subway Surfers" />
                        </button>
                        <p>Subway Surfers</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/sushi.html")}
                            title="Papa's Sushiria"
                        >
                            <img src="/images/icon_300x300_papassushiria.jpg" alt="Papa's Sushiria" />
                        </button>
                        <p>Papa's Sushiria</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/papahotdog.html")}
                            title="Papa's Hotdoggeria"
                        >
                            <img src="hotdog.jpg" alt="Papa's Hotdoggeria" />
                        </button>
                        <p>Papa's Hotdoggeria</p>
                    </div>

                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/papacheese.html")}
                            title="Papa's Cheeseria"
                        >
                            <img src="cheeseria_300x300.jpg" alt="Papa's Cheeseria" />
                        </button>
                        <p>Papa's Cheeseria</p>
                    </div>{" "}
                    {/* most SWF handlers are forked from here*/}
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/papalouie.html")}
                            title="Papa Louie 2"
                        >
                            <img src="papalouie2_400x226.jpg" alt="Papa Louie 2" />
                        </button>
                        <p>Papa Louie 2</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/papalouie1.html")}
                            title="Papa Louie 1"
                        >
                            <img src="papalouie_400x226.jpg" alt="Papa Louie 1" />
                        </button>
                        <p>Papa Louie 1</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/papasbugeria.html")}
                            title="Papa's Burgeria"
                        >
                            <img src="papasburgeria_400x226.jpg" alt="Papa's Burgeria" />
                        </button>
                        <p>Papa's Burgeria</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/papaicecream.html")}
                            title="Papa's Freezeria"
                        >
                            <img src="papasfreezeria_400x226.jpg" alt="Papa's Freezeria" />
                        </button>
                        <p>Papa's Freezeria</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/fruits.html")}
                            title="Papa's Sushiria"
                        >
                            <img src="/images/fruitscap.png" alt="Papa's Sushiria" />
                        </button>
                        <p>🤑💰💸The Fruits🤑💰💸</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/cc/index.html")}
                            title="cookie pls"
                        >
                            <img src="/games/cc/icon.png" alt="Cookie Clicker Logo" />
                        </button>
                        <p>Cookie Clicker</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "https://supertuxkart.pages.dev/")}
                            title="SuperTuxKart"
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wVhcyQV-z7il2CAUbDkZJKkWTUe9lrR_3A&s"
                                alt="SuperTuxKart"
                            />
                        </button>
                        <p>SuperTuxKart</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/crashbo.html")}
                            title="Car Anatomy"
                        >
                            <img src="/images/noimg.png" alt="No Img" />
                        </button>
                        <p>Car Anatomy</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/roadrace.html")}
                            title="Road Race 2"
                        >
                            <img
                                src="https://i.ibb.co/mCRSq3KB/Screenshot-2025-03-13-11-54-16.png"
                                alt="Road Race 2"
                            />
                        </button>
                        <p>Road Race 2</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/truckspace2/index.html")}
                            title="euro truck simulator 2000"
                        >
                            <img src="/images/ts2.jpg" alt="truck space 2" />
                        </button>
                        <p>Truck Space 2</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/mcplat.html")}
                            title="Minecraft Platformer"
                        >
                            <img
                                src="https://i.ibb.co/B2vP8hy0/images-7.jpg"
                                alt="Minecraft Platformer"
                            />
                        </button>
                        <p>Minecraft Platformer</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/minecraft.html")}
                            title="Minecraft"
                        >
                            <img
                                src="https://i.ibb.co/tT7XZRMW/Grass-Block-JE2.webp"
                                alt="Minecraft"
                            />
                        </button>
                        <p>Minecraft</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/mconline.html")}
                            title="Chicken Jockey!"
                        >
                            <img src="/images/noimg.png" alt="No Image Available" />
                        </button>
                        <p>Minecraft Platformer - Online</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/adjustable-fireworks.html")}
                            title="Adjustable Fireworks"
                        >
                            <img src="/images/noimg.png" alt="No Image available" />
                        </button>
                        <p>Adjustable Fireworks</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/bmptest.html")}
                            title="BMP Test"
                        >
                            <img src="https://i.ibb.co/gZfFXQMt/1541504.png" alt="BMP Test" />
                        </button>
                        <p>BMP Test</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/musicgen.html")}
                            title="AI Music Creator"
                        >
                            <img src="/images/note.jpg" alt="Music Note" />
                        </button>
                        <p>AI Music Creator</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/beepbox_offline.html")}
                            title="Beepbox"
                        >
                            <img src="/images/noimg.png" alt="No Image" />
                        </button>
                        <p>Beepbox</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/time3.html")}
                            title="Time Shooter 3"
                        >
                            <img
                                src="https://i.ibb.co/PzYcrhGC/images-8.jpg"
                                alt="Time Shooter 3"
                            />
                        </button>
                        <p>Time Shooter 3</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/asciishooter.html")}
                            title="ASCII Shooter"
                        >
                            <img
                                src="https://i.ibb.co/vxxDd0sd/Screenshot-2025-03-23-17-44-36.png"
                                alt="ASCII Shooter"
                            />
                        </button>
                        <p>ASCII Shooter</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/ballblast.html")}
                            title="Ball Blast"
                        >
                            <img src="/images/ballblast-cap.png" alt="Ball Blast" />
                        </button>
                        <p>Ball Blast</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/warfarearea3/index.html")}
                            title="Warfare Area 3"
                        >
                            <img
                                src="/images/warfarearea3.jpg"
                                alt="A picture of a man holding a gun, surrounded by enemies."
                            />
                        </button>
                        <p>Warfare Area 3</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/sand.html")}
                            title="Sand:box"
                        >
                            <img src="https://i.ibb.co/xKbrp64L/images.jpg" alt="Sand:box" />
                        </button>
                        <p>Sand:box</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "https://webosu.online/")}
                            title="webosu!"
                        >
                            <img
                                src="https://i.ibb.co/ksDVpKTp/Osu-Logo-2016-svg.png"
                                alt="webosu!"
                            />
                        </button>
                        <p>webosu!</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/rr.html")}
                            title="Railroad Runner"
                        >
                            <img
                                src="https://i.ibb.co/JW326Y6X/Screenshot-2025-03-13-11-44-18.png"
                                alt="Railroad Runner"
                            />
                        </button>
                        <p>Railroad Runner</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/captain.html")}
                            title="Captain Callisto"
                        >
                            <img
                                src="https://i.ibb.co/tTYw89Cv/Screenshot-2025-03-23-17-02-24.png"
                                alt="Captain Callisto"
                            />
                        </button>
                        <p>Captain Callisto</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/blackhole.html")}
                            title="Black Hole Square"
                        >
                            <img src="pipebomb.png" alt="Black Hole Square" />
                        </button>
                        <p>Black Hole Square</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/target.html")}
                            title="Target Rush"
                        >
                            <img src="https://i.ibb.co/4ZcfP4Xs/UA5o3P.png" alt="Target Rush" />
                        </button>
                        <p>Target Rush</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/gamble1928.html")}
                            title="gamble1928"
                        >
                            <img src="/images/1928cap.png" alt="gamble1928" />
                        </button>
                        <p>gamble1928</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/bbfactory.html")}
                            title="Bauble Factory"
                        >
                            <img src="/images/bbfactory-cap.png" alt="The Bauble Factory" />
                        </button>
                        <p>The Bauble Factory</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/chickengame2.html")}
                            title="Chicken Game 2"
                        >
                            <img src="/images/chickencap.png" alt="Chicken Game 2" />
                        </button>
                        <p>Chicken Game 2</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "https://glueification.netlify.app/")}
                            title="Glueification!"
                        >
                            <img src="/icon/icon.png" alt="Glueification" />
                        </button>
                        <p>Glueification!</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/helios.html")}
                            title="Helios"
                        >
                            <img src="/images/noimg.png" alt="No Image available" />
                        </button>
                        <p>Helios Proxy</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/paperception.html")}
                            title="paper cut simulator"
                        >
                            <img src="/images/paperception-icon.png" alt="Paperception" />
                        </button>
                        <p>Paperception</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/monkey-mart/index.html")}
                            title="economic simulator"
                        >
                            <img src="/games/monkey-mart/bg_loading.png" alt="Monkey" />
                        </button>
                        <p>Monkey Mart</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/f1/index.html")}
                            title="har har har har"
                        >
                            <img src="/games/f1/icon.png" alt="FNAF 1" />
                        </button>
                        <p>FNAF 1</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/3D Plane Game v2.3.html")}
                            title="There's a second bus coming!"
                        >
                            <img src="/images/3dplane.gif" alt="plane" />
                        </button>
                        <p>3D Plane Game</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Miner cat - Game.html")}
                            title="mince beef"
                        >
                            <img src="/images/minercat.png" alt="A cooked beef steak" />
                        </button>
                        <p>Miner Cat</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/ppg.html")}
                            title="splat"
                        >
                            <img src="/images/ppgicon.png" alt="The People Playground icon" />
                        </button>
                        <p>People Playground</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/hl.html")}
                            title="No, I'm on the Science Team!"
                        >
                            <img src="/images/hlicon.png" alt="lambda" />
                        </button>
                        <p>Half-Life 1</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/bendy.html")}
                            title="Alright, I'm here, lets see if I can find what you wanted me to see."
                        >
                            <img src="/images/bendyicon.png" alt="Dreams come true." />
                        </button>
                        <p>Bendy and the Ink Machine</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/bergen.html")}
                            title="DRIVING IN MY CAR RIGHT AFTER A BEER!"
                        >
                            {/* HEY THAT BUMP IS SHAPED LIKE A DEER! DUI? HOW ABOUT YOU DIE! I'LL GO A HUNDRED MILES IN AN HOUR!*/}
                            <img src="/images/bergenicon.jpg" alt="Dreams come true." />
                        </button>
                        <p>Bergentruck 201x</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/mc12.html")}
                            title="I AM STEVE!"
                        >
                            <img src="/images/12icon.png" alt="Dreams come true." />
                        </button>
                        <p>Minecraft 1.21</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Bloxorz.html")}
                            title="classic"
                        >
                            <img src="/images/bloxorsicon.png" alt="absolute cinema" />
                        </button>
                        <p>Bloxorz</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Amaze.html")}
                            title="Amaze"
                        >
                            <img src="/images/amazeicon.png" alt="Amaze" />
                        </button>
                        <p>Amaze</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Candy Crush.html")}
                            title="Candy Crush"
                        >
                            <img src="/images/candycrushicon.png" alt="Candy Crush" />
                        </button>
                        <p>Candy Crush</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Color Water Sort 3D.html")}
                            title="Color Water Sort 3D"
                        >
                            <img src="/images/watersorticon.png" alt="Color Water Sort 3D" />
                        </button>
                        <p>Color Water Sort 3D</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Melon Playground.html")}
                            title="Melon Playground"
                        >
                            <img src="/images/noimg.png" alt="Melon Playground" />
                        </button>
                        <p>Melon Playground</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Baldi's Basics Plus.html")}
                            title="Baldi's Basics Plus"
                        >
                            <img src="games/baldiicon.png" alt="Baldi's Basics Plus" />
                        </button>
                        <p>Baldi's Basics Plus</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/DON'T YOU LECTURE ME.html")}
                            title="DON'T YOU LECTURE ME"
                        >
                            <img src="games/lecturemeicon.png" alt="DON'T YOU LECTURE ME" />
                        </button>
                        <p>DON'T YOU LECTURE ME</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Papa's Donuteria.html")}
                            title="Papa's Donuteria"
                        >
                            <img src="games/doughnutiocn.png" alt="Papa's Donuteria" />
                        </button>
                        <p>Papa's Donuteria</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Paper.io 2.html")}
                            title="Paper.io 2"
                        >
                            <img src="https://i.ibb.co/VYFygR7L/images-1.jpg" alt="Paper.io 2" />
                        </button>
                        <p>Paper.io 2</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Parappa The Rapper.html")}
                            title="Parappa The Rapper"
                        >
                            <img src="games/parappaicon.png" alt="Parappa The Rapper" />
                        </button>
                        <p>Parappa The Rapper</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Sandboxels.html")}
                            title="Sandboxels"
                        >
                            <img src="games/sandboxels-icon.png" alt="Sandboxels" />
                        </button>
                        <p>Sandboxels</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Slither.io.html")}
                            title="Slither.io"
                        >
                            <img src="games/slitherio-icon.png" alt="Slither.io" />
                        </button>
                        <p>Slither.io</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Slowroads.html")}
                            title="Slowroads"
                        >
                            <img src="games/slowroads-icon.png" alt="Slowroads" />
                        </button>
                        <p>Slowroads</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Crazy Kitty 3D.html")}
                            title="Crazy Kitty 3D"
                        >
                            <img src="/games/crazykitty3d-icon.png" alt="Crazy Kitty 3D" />
                        </button>
                        <p>Crazy Kitty 3D</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Going Balls.html")}
                            title="Going Balls"
                        >
                            <img src="/games/goingballs-icon.png" alt="Going Balls" />
                        </button>
                        <p>Going Balls</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Google Feud.html")}
                            title="Google Feud"
                        >
                            <img src="/games/google-feud-icon.png" alt="Google Feud" />
                        </button>
                        <p>Google Feud</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Granny.html")}
                            title="Granny"
                        >
                            <img src="/games/granny1-icon.png" alt="Granny" />
                        </button>
                        <p>Granny</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Granny 2.html")}
                            title="Granny 2"
                        >
                            <img src="/games/granny-2 icon.png" alt="Granny 2" />
                        </button>
                        <p>Granny 2</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Happy Wheels.html")}
                            title="Happy Wheels"
                        >
                            <img src="/games/happy-wheels-icon.png" alt="Happy Wheels" />
                        </button>
                        <p>Happy Wheels</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Hypper Sandbox.html")}
                            title="Hypper Sandbox"
                        >
                            <img src="/games/hypper-sandbox-icon.png" alt="Hypper Sandbox" />
                        </button>
                        <p>Hypper Sandbox</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Jelly Mario.html")}
                            title="Jelly Mario"
                        >
                            <img src="/images/noimg.png" alt="Jelly Mario" />
                        </button>
                        <p>Jelly Mario</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Nijika's Ahoge.html")}
                            title="Nijika's Ahoge"
                        >
                            <img src="/images/noimg.png" alt="Nijika's Ahoge" />
                        </button>
                        <p>Nijika's Ahoge</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/OMORI.html")}
                            title="OMORI"
                        >
                            <img src="/games/omori-icon.png" alt="OMORI" />
                        </button>
                        <p>OMORI</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Papa's Cupcakeria.html")}
                            title="Papa's Cupcakeria"
                        >
                            <img src="/games/cupcakeria-icon.png" alt="Papa's Cupcakeria" />
                        </button>
                        <p>Papa's Cupcakeria</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Pou.html")}
                            title="Pou"
                        >
                            <img src="/games/pou-icon.png" alt="Pou" />
                        </button>
                        <p>Pou</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Sandtris.html")}
                            title="Sandtris"
                        >
                            <img src="/games/sandtris-icon.png" alt="Sandtris" />
                        </button>
                        <p>Sandtris</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/sandspiel.html")}
                            title="Sandspiel"
                        >
                            <img src="/games/sandspeil-icon.png" alt="Sandspiel" />
                        </button>
                        <p>Sandspiel</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Slope 2.html")}
                            title="Slope 2"
                        >
                            <img src="/games/slop2-icon.png" alt="Slope 2" />
                        </button>
                        <p>Slope 2</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Steal Brainrot Online.html")}
                            title="Steal Brainrot Online"
                        >
                            <img
                                src="/games/steal-a-brainrot-online.png"
                                alt="Steal Brainrot Online"
                            />
                        </button>
                        <p>Steal Brainrot Online</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Tunnel Rush.html")}
                            title="Tunnel Rush"
                        >
                            <img src="games/tunnelrush.png" alt="Tunnel Rush" />
                        </button>
                        <p>Tunnel Rush</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Twisted Rope 3D.html")}
                            title="Twisted Rope 3D"
                        >
                            <img src="games/rope-icon.png" alt="Twisted Rope 3D" />
                        </button>
                        <p>Twisted Rope 3D</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Jelly Drift.html")}
                            title="wibble"
                        >
                            <img src="images/jellyicon.png" alt="null" />
                        </button>
                        <p>Jelly Drift</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/Spacebar Clicker.html")}
                            title="what is so good about this lmao"
                        >
                            <img src="images/spacebaricon.png" alt="null" />
                        </button>
                        <p>Spacebar Clicker</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/BitPlanes.html")}
                            title=""
                        >
                            <img src="images/bitplanesicon.png" />
                        </button>
                        <p>BitPlanes</p>
                    </div>
                    <div className="game-item">
                        <button
                            type="button"
                            onClick={() => (window.location.href = "/games/bopcity.html")}
                            title=""
                        >
                            <img src="images/bopcityicon.png" />
                        </button>
                        <p>FNF: Bopcityi</p>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-links">
                            <a href="index.html">Home</a>
                            <a href="games.html">Games</a>
                            <a href="credits.html">Credits</a>
                            <a href="opensource.html">Open Source</a>
                            <a href="changelog.html">Changelog</a>
                            <a href="archive.html">Archive</a>
                        </div>
                        <p>Powered by Space Cat Games</p>
                        <p className="copyright">
                            © 2025 Nijika Softworks &amp; Neuron Technologies | All rights
                            reserved.
                        </p>
                        <a href="https://nijikasoftworks.meowcat.site/">
                            <img src="images/ns_yellow.png" height={150} width={500} />
                        </a>
                        <a href="https://github.com/Starry-Systems/">
                            <img
                                src="https://avatars.githubusercontent.com/u/241321890?s=200&v=4"
                                height={150}
                            />
                        </a>
                    </div>
                </div>
            </footer>
            {/* FPS Counter */}
            <div
                id="fps-counter"
                style={{
                    position: "fixed",
                    top: 10,
                    right: 10,
                    background: "rgba(20,20,20,0.8)",
                    color: "#0f0",
                    fontFamily: "monospace",
                    fontSize: 16,
                    padding: "6px 12px",
                    borderRadius: 6,
                    zIndex: 9999,
                    pointerEvents: "none"
                }}
            >
                FPS: --
            </div>
            <button id="backToTop" title="Go to top">
                ↑
            </button>
            <div id="flag-drawer">
                <div id="flag-drawer-tab">🏳️</div>
                <div id="flag-drawer-content">
                    <img src="https://count.getloli.com/@:spacecatgames?name=%3Aspacecatgames&theme=original-new&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=0&prefix=0" />
                    <br />
                </div>
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    #flag-drawer {\n      position: fixed;\n      top: 120px;\n      right: -184px;\n      /* 220px (drawer width) - 36px (tab width) */\n      width: 220px;\n      transition: right 0.3s;\n      z-index: 10000;\n    }\n\n    #flag-drawer.open {\n      right: 0;\n    }\n\n    #flag-drawer-tab {\n      position: absolute;\n      left: -36px;\n      top: 0;\n      width: 36px;\n      height: 60px;\n      background: #222;\n      color: #fff;\n      border-radius: 8px 0 0 8px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      font-size: 24px;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n      user-select: none;\n    }\n\n    #flag-drawer-content {\n      background: #fff;\n      border: 1px solid #ccc;\n      border-radius: 8px 0 0 8px;\n      padding: 10px 5px 10px 10px;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n      min-width: 180px;\n      min-height: 70px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      overflow-x: auto;\n    }\n\n    #flag-drawer-content img {\n      max-width: 100%;\n      height: auto;\n    }\n  "
                }}
            />
        </>
    );
}
