# NetSepio Website

The official website for **NetSepio**, a sovereignty stack for the open internet. NetSepio builds privacy-first tools for private connectivity (Erebrus VPN), local file sharing (Erebrus Drop), device and network defense (upcoming security products), and a user-owned second brain for businesses and people (ClawBrick).

## 🚀 Tech Stack

This project was recently migrated from Create React App to a modern static **Next.js** architecture, featuring advanced UI/UX modernization.

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: Vanilla [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Interactive Backgrounds**: [tsParticles](https://particles.js.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## ✨ Key Features

- **Sci-Fi HUD Aesthetics**: Teal-on-void "command console" theme — sharp-cornered HUD panels with corner brackets, blueprint grids, CRT scanlines, radar sweeps, and terminal-style mono microcopy.
- **Typography**: Space Grotesk headings, JetBrains Mono labels, Inter body (all self-hosted via Fontsource).
- **Advanced UI Interactions**:
  - Mouse-reactive dynamic particle constellation networks.
  - Hacker-style "Decrypt Sequence" text scramble effects on headlines.
  - Subtle cinematic film grain overlay applied globally.
  - Angular clip-path buttons, animated scan beams, and blinking status indicators.
- **Statically Exported**: Configured as a fully static SPA (`output: 'export'`) for seamless decentralised and static web hosting.

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js and `pnpm` (version 10+) installed.

```bash
# Install dependencies
pnpm install

# Start the local development server at http://localhost:3000
pnpm dev
```

### Building for Production
```bash
# Outputs static files to the /out directory
pnpm build
```

## 🌐 Deployment

This project utilizes GitHub Actions (`.github/workflows/deploy.yml`) to automatically build and deploy the statically exported `out` directory to **GitHub Pages** whenever changes are pushed to the `main` branch.
