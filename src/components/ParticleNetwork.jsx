'use client';

import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticleNetwork = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute inset-0 z-0 opacity-40 pointer-events-none sm:pointer-events-auto"
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.8,
                                color: "#08d9c5"
                            }
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#08d9c5", "#11D9C5", "#0a8074"],
                    },
                    links: {
                        color: "#08d9c5",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                        triangles: {
                            enable: true,
                            opacity: 0.05
                        }
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.4,
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.1
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleNetwork;
