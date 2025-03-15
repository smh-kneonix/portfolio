import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
    const particlesInit = async (main) => {
        // Load full tsparticles package
        await loadFull(main);
    };

    return (
            <Particles
                init={particlesInit}
                options={{
                    fullScreen: { enable: true, zIndex: -1 }, // Background effect
                    background: { color: "#001a22" }, // Space black
                    particles: {
                        number: {
                            value: 150,
                            density: { enable: true, area: 1000 },
                        }, // Star count
                        move: { enable: true, speed: 1.3 }, // Floating effect
                        size: { value: { min: 1, max: 3 } }, // Different star sizes
                        color: { value: "#00ADB5" }, // Star color
                        shape: { type: ["circle"] }, // Stars + custom images
                        opacity: { value: 0.3 },
                        links: { enable: true }, // No connecting lines
                        life: { duration: 2, sync: false },
                        rotate: { value: 360, random: true },
                    },
                    interactivity: {
                        events: { onHover: { enable: true, mode: "repulse" } }, // Move on hover
                    },
                }}
            />
    );
};

export default ParticleBackground;
