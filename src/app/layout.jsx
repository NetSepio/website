import './globals.css';
import FilmGrain from '../components/FilmGrain';

export const metadata = {
    metadataBase: new URL('https://netsepio.com'),
    title: 'NetSepio - Sovereignty Stack for the Open Internet',
    description: 'NetSepio builds privacy-first tools for digital sovereignty, including Erebrus VPN, Erebrus Drop, upcoming security products, and ClawBrick for user-owned AI deployment.',
    icons: {
        icon: '/images/Logo.png',
        apple: '/logo192.png',
    },
    openGraph: {
        title: 'NetSepio - Sovereignty Stack for the Open Internet',
        description: 'NetSepio builds privacy-first, censorship-resistant tools for private connectivity, local sharing, network defense, and user-owned AI.',
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
