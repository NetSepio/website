'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CHARACTERS = '!<>-_\\/[]{}—=+*^?#_';

const ScrambleText = ({ text, className = '' }) => {
    const [displayText, setDisplayText] = useState('');
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (!inView) return;

        let iteration = 0;
        let maxIterations = text.length;

        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split('')
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                    })
                    .join('')
            );

            if (iteration >= maxIterations) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [inView, text]);

    return (
        <motion.span ref={ref} className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {displayText}
        </motion.span>
    );
};

export default ScrambleText;
