/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Games() {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("default");
    const [loading, setLoading] = useState(true);
    const [fps, setFps] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [flagDrawerOpen, setFlagDrawerOpen] = useState(false);
    const gamesGridRef = useRef(null);
    const highlightedGameRef = useRef(null);

    // Load games from API
    useEffect(() => {
        fetch("/api/games.json")
            .then((r) => r.json())
            .then((data) => {
                setGames(data.games || []);
                setFilteredGames(data.games || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading games:", err);
                setLoading(false);
            });
    }, []);

    // Search functionality
    useEffect(() => {
        let filtered = games;

        if (searchTerm) {
            filtered = games.filter((game) =>
                game.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sort
        if (sortType === "az") {
            filtered = [...filtered].sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        } else if (sortType === "za") {
            filtered = [...filtered].sort((a, b) =>
                b.title.localeCompare(a.title)
            );
        }

        setFilteredGames(filtered);
    }, [searchTerm, sortType, games]);

    // FPS Counter
    useEffect(() => {
        let lastFrame = performance.now();
        let frames = 0;
        let fpsValue = 0;

        function loop(now) {
            frames++;
            if (now - lastFrame >= 1000) {
                fpsValue = frames;
                frames = 0;
                lastFrame = now;
                setFps(fpsValue);
            }
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
    }, []);

    // Back to top scroll handler
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleRandomGame = () => {
        if (filteredGames.length === 0) return;

        const randomIndex = Math.floor(Math.random() * filteredGames.length);
        const randomGame = filteredGames[randomIndex];

        // Find the game item element and scroll to it
        const gameElements = gamesGridRef.current?.querySelectorAll(".game-item");
        if (gameElements && gameElements[randomIndex]) {
            gameElements[randomIndex].scrollIntoView({
                behavior: "smooth",
                block: "center",
            });

            // Highlight effect
            gameElements[randomIndex].classList.add("highlight-game");
            setTimeout(() => {
                gameElements[randomIndex].classList.remove("highlight-game");
            }, 2000);
        }
    };

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleGameClick = (url) => {
        window.location.href = url;
    };

    if (loading) {
        return (
            <>
                <Helmet>
                    <title>Space Cat Games - Games</title>
                    <meta
                        name="description"
                        content="Browse our extensive collection of free browser games"
                    />
                </Helmet>
                <Navbar />
                <div className="container">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "50vh",
                        }}
                    >
                        <div
                            style={{
                                border: "8px solid #eee",
                                borderTop: "8px solid #e74c3c",
                                borderRadius: "50%",
                                width: "64px",
                                height: "64px",
                                animation: "spin 1s linear infinite",
                            }}
                        />
                    </div>
                </div>
                <style>
                    {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    `}
                </style>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>Space Cat Games - Games</title>
                <meta
                    name="description"
                    content="Browse our extensive collection of free browser games"
                />
                <link href="/css/style.css" rel="stylesheet" />
                <link href="/games.css" rel="stylesheet" />
            </Helmet>

            <Navbar />

            <div className="container">
                <h1>Games Collection</h1>
                <p>
                    Browse our extensive collection of free browser games. Click
                    on any game to start playing instantly!
                </p>

                {/* QoL Features Section */}
                <div className="game-controls">
                    <div className="search-container">
                        <input
                            type="text"
                            id="gameSearch"
                            className="search-input"
                            placeholder="Search for games..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="controls-row">
                        <div className="sort-options">
                            <label htmlFor="gameSort">Sort by:</label>
                            <select
                                id="gameSort"
                                className="sort-select"
                                value={sortType}
                                onChange={(e) => setSortType(e.target.value)}
                            >
                                <option value="default">Default</option>
                                <option value="az">Name (A-Z)</option>
                                <option value="za">Name (Z-A)</option>
                            </select>
                        </div>

                        <button
                            id="randomGameBtn"
                            className="btn random-btn"
                            onClick={handleRandomGame}
                        >
                            <span className="icon">🎲</span> Random Game
                        </button>
                    </div>

                    <div className="game-count">
                        Showing <span id="visibleCount">{filteredGames.length}</span> of{" "}
                        <span id="totalCount">{games.length}</span> games
                    </div>
                </div>

                <div className="games-grid" id="gamesGrid" ref={gamesGridRef}>
                    {filteredGames.map((game, index) => (
                        <div key={index} className="game-item">
                            <button
                                type="button"
                                onClick={() => handleGameClick(game.url)}
                                title={game.title}
                            >
                                <img
                                    src={game.img}
                                    alt={game.alt || game.title}
                                    onError={(e) => {
                                        e.target.src = "/images/noimg.png";
                                    }}
                                />
                            </button>
                            <p>{game.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />

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
                    pointerEvents: "none",
                }}
            >
                FPS: {fps}
            </div>

            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    id="backToTop"
                    title="Go to top"
                    onClick={handleBackToTop}
                    style={{
                        display: "block",
                        position: "fixed",
                        bottom: 20,
                        right: 20,
                        zIndex: 99,
                        fontSize: 18,
                        border: "none",
                        outline: "none",
                        backgroundColor: "#e74c3c",
                        color: "white",
                        cursor: "pointer",
                        padding: 15,
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                        transition: "background-color 0.3s, transform 0.3s",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#c0392b";
                        e.target.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#e74c3c";
                        e.target.style.transform = "translateY(0)";
                    }}
                >
                    ↑
                </button>
            )}

            {/* Flag Drawer */}
            <div
                id="flag-drawer"
                className={flagDrawerOpen ? "open" : ""}
                style={{
                    position: "fixed",
                    top: 120,
                    right: flagDrawerOpen ? 0 : -184,
                    width: 220,
                    transition: "right 0.3s",
                    zIndex: 10000,
                }}
            >
                <div
                    id="flag-drawer-tab"
                    onClick={() => setFlagDrawerOpen(!flagDrawerOpen)}
                    style={{
                        position: "absolute",
                        left: -36,
                        top: 0,
                        width: 36,
                        height: 60,
                        background: "#222",
                        color: "#fff",
                        borderRadius: "8px 0 0 8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        fontSize: 24,
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                        userSelect: "none",
                    }}
                >
                    🏳️
                </div>
                <div
                    id="flag-drawer-content"
                    style={{
                        background: "#fff",
                        border: "1px solid #ccc",
                        borderRadius: "8px 0 0 8px",
                        padding: "10px 5px 10px 10px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                        minWidth: 180,
                        minHeight: 70,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        overflowX: "auto",
                    }}
                >
                    <img
                        src="https://count.getloli.com/@:spacecatgames?name=%3Aspacecatgames&theme=original-new&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=0&prefix=0"
                        alt="Visitor counter"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </div>
        </>
    );
}
