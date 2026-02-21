import './globals.css';
import FilmGrain from '../components/FilmGrain';

export const metadata = {
    title: 'NetSepio - Decentralized VPN & Secure Connectivity',
    description: 'NetSepio is revolutionizing internet privacy by providing secure, decentralized VPN (dVPN) and AI-driven networking built to ensure zero single-point-of-failure.',
    icons: {
        icon: '/images/Logo.png',
        apple: '/logo192.png',
    },
    openGraph: {
        title: 'NetSepio - Decentralized VPN & Secure Connectivity',
        description: 'NetSepio is revolutionizing internet privacy by providing secure, decentralized VPN (dVPN) and AI-driven networking.',
        url: 'https://netsepio.com',
        siteName: 'NetSepio',
        images: [
            {
                url: '/logo512.png',
                width: 512,
                height: 512,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-black text-white antialiased font-sans">
                <FilmGrain />
                {children}
            </body>
        </html>
    );
}
