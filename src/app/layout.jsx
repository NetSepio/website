import './globals.css';
import FilmGrain from '../components/FilmGrain';

export const metadata = {
    metadataBase: new URL('https://netsepio.com'),
    title: 'NetSepio - Sovereignty Stack for the Open Internet',
    description: 'NetSepio builds privacy-first tools for digital sovereignty: Erebrus VPN for private connectivity, Erebrus Drop for local-first sharing, upcoming security products, and ClawBrick — a second brain for businesses and people.',
    icons: {
        icon: '/images/Logo.png',
        apple: '/logo192.png',
    },
    openGraph: {
        title: 'NetSepio - Sovereignty Stack for the Open Internet',
        description: 'NetSepio builds privacy-first, censorship-resistant tools for private connectivity, local sharing, network defense, and a second brain you own.',
        url: 'https://netsepio.com',
        siteName: 'NetSepio',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/og-banner.png',
                width: 1200,
                height: 630,
                alt: 'NetSepio — The Sovereignty Stack for the Open Internet',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@netsepio',
        title: 'NetSepio - Sovereignty Stack for the Open Internet',
        description: 'Privacy-first, censorship-resistant tools: Erebrus VPN, Erebrus Drop, security tools, and ClawBrick — a second brain you own.',
        images: ['/images/og-banner.png'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-void text-white antialiased font-sans">
                <FilmGrain />
                {children}
            </body>
        </html>
    );
}
