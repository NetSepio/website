/**
 * Generates the Open Graph banner (public/images/og-banner.png) in the
 * site's sci-fi HUD theme. Runs automatically as part of `pnpm build`.
 */
import og from 'next/og.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const { ImageResponse } = og;

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (relPath) => fs.readFileSync(path.join(root, relPath));

const CYAN = '#08d9c5';
const NEON = '#00ffe1';
const VOID = '#020608';
const WIDTH = 1200;
const HEIGHT = 630;

// Minimal JSX-free element helper for satori
const h = (type, props, ...children) => ({
    type,
    props: { ...props, children: children.length <= 1 ? children[0] : children },
});

const bracket = (position) => {
    const line = '3px solid rgba(8,217,197,0.65)';
    const sides = {
        tl: { top: 28, left: 28, borderTop: line, borderLeft: line },
        tr: { top: 28, right: 28, borderTop: line, borderRight: line },
        bl: { bottom: 28, left: 28, borderBottom: line, borderLeft: line },
        br: { bottom: 28, right: 28, borderBottom: line, borderRight: line },
    };
    return h('div', { style: { position: 'absolute', width: 30, height: 30, display: 'flex', ...sides[position] } });
};

const chip = (label) =>
    h(
        'div',
        {
            style: {
                display: 'flex',
                padding: '12px 22px',
                border: '1px solid rgba(8,217,197,0.4)',
                backgroundColor: 'rgba(8,217,197,0.07)',
                fontFamily: 'JetBrainsMono',
                fontSize: 19,
                letterSpacing: 3,
                color: '#d8e5e5',
            },
        },
        label
    );

const gridLayer = (backgroundImage) =>
    h('div', {
        style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            backgroundImage,
            backgroundSize: '46px 46px',
        },
    });

async function main() {
    const logo = `data:image/png;base64,${read('public/images/Logo.png').toString('base64')}`;

    const tree = h(
        'div',
        {
            style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: VOID,
                position: 'relative',
                fontFamily: 'SpaceGrotesk',
            },
        },
        gridLayer('linear-gradient(rgba(8,217,197,0.07) 1px, transparent 1px)'),
        gridLayer('linear-gradient(90deg, rgba(8,217,197,0.07) 1px, transparent 1px)'),
        h('div', {
            style: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                backgroundImage: 'radial-gradient(circle at 78% 30%, rgba(8,217,197,0.22), transparent 55%)',
            },
        }),
        bracket('tl'),
        bracket('tr'),
        bracket('bl'),
        bracket('br'),

        // Top HUD line
        h(
            'div',
            {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '52px 76px 0 76px',
                    fontFamily: 'JetBrainsMono',
                    fontSize: 20,
                    letterSpacing: 5,
                    color: 'rgba(8,217,197,0.85)',
                },
            },
            h('span', {}, '[ NETSEPIO // SOVEREIGNTY_STACK ]'),
            h('span', { style: { color: 'rgba(160,175,185,0.75)' } }, 'SECURE_CHANNEL :: OPEN')
        ),

        // Core
        h(
            'div',
            {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'center',
                    padding: '0 76px',
                },
            },
            h(
                'div',
                { style: { display: 'flex', alignItems: 'center', gap: 24, marginBottom: 34 } },
                h('img', { src: logo, width: 84, height: 84 }),
                h(
                    'div',
                    {
                        style: {
                            display: 'flex',
                            fontFamily: 'JetBrainsMono',
                            fontSize: 22,
                            letterSpacing: 6,
                            color: CYAN,
                        },
                    },
                    '> INITIALIZING SOVEREIGNTY STACK_'
                )
            ),
            h(
                'div',
                { style: { display: 'flex', fontSize: 84, color: 'white', letterSpacing: -1, lineHeight: 1.02 } },
                'THE SOVEREIGNTY STACK'
            ),
            h(
                'div',
                {
                    style: {
                        display: 'flex',
                        fontSize: 84,
                        letterSpacing: -1,
                        lineHeight: 1.02,
                        backgroundImage: `linear-gradient(90deg, ${CYAN}, ${NEON}, ${CYAN})`,
                        backgroundClip: 'text',
                        color: 'transparent',
                    },
                },
                'FOR THE OPEN INTERNET'
            )
        ),

        // Bottom chips + domain
        h(
            'div',
            {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 76px 56px 76px',
                },
            },
            h('div', { style: { display: 'flex', gap: 14 } }, chip('EREBRUS VPN'), chip('EREBRUS DROP'), chip('CLAWBRICK')),
            h(
                'div',
                { style: { display: 'flex', fontFamily: 'JetBrainsMono', fontSize: 22, letterSpacing: 4, color: CYAN } },
                'netsepio.com'
            )
        )
    );

    const image = new ImageResponse(tree, {
        width: WIDTH,
        height: HEIGHT,
        fonts: [
            {
                name: 'SpaceGrotesk',
                data: read('node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff'),
                weight: 700,
                style: 'normal',
            },
            {
                name: 'JetBrainsMono',
                data: read('node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff'),
                weight: 600,
                style: 'normal',
            },
        ],
    });

    const buffer = Buffer.from(await image.arrayBuffer());
    const outPath = path.join(root, 'public/images/og-banner.png');
    fs.writeFileSync(outPath, buffer);
    console.log(`✓ OG banner written to ${path.relative(root, outPath)} (${WIDTH}x${HEIGHT}, ${(buffer.length / 1024).toFixed(0)} KB)`);
}

main().catch((err) => {
    console.error('OG banner generation failed:', err);
    process.exit(1);
});
