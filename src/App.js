import React from "react";
import ParticleBackground from "./components/ParticleBackground";
import Left from "./components/left";
import Right from "./components/right";

function App() {
    return (
        <div style={{ position: "relative" }}>
            <ParticleBackground /> {/* Add the background effect */}
            <div class="row justify-content-evenly align-items-center mt-5 first-row">
                <Left />
                <Right />
            </div>
        </div>
    );
}

export default App;
