import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Corners, MonoTag } from '../../components/hud';

export const metadata = {
    title: 'Privacy Policy | NetSepio',
    description: 'How NetSepio collects, uses, and protects information across its website and services.',
};

const sections = [
    {
        code: '01',
        title: 'Our Approach',
        body: (
            <>
                <p>
                    NetSepio builds privacy-first technology, and this policy is written
                    to match: collect little, explain clearly, and give you control.
                    It describes what information we collect when you use our website
                    and services, how we use it, and the choices you have.
                </p>
                <p>
                    By using the Service, you agree to the collection and use of
                    information as described in this Privacy Policy.
                </p>
            </>
        ),
    },
    {
        code: '02',
        title: 'Information You Provide',
        body: (
            <>
                <p>
                    When you interact with us — for example by subscribing to updates,
                    joining our community, or contacting support — we may ask for
                    information that can identify or contact you, such as:
                </p>
                <ul>
                    <li>Email address</li>
                    <li>First and last name</li>
                    <li>Social handles you choose to share (such as X or Discord)</li>
                </ul>
                <p>
                    You are never required to provide more than what a given feature
                    needs to work.
                </p>
            </>
        ),
    },
    {
        code: '03',
        title: 'Information Collected Automatically',
        body: (
            <>
                <p>
                    When you use the Service, some usage data is collected
                    automatically. This may include your device&apos;s IP address,
                    browser type and version, the pages you visit, the time and date
                    of your visit, and other diagnostic data. We use this to operate,
                    secure, and improve the Service — not to build advertising
                    profiles.
                </p>
            </>
        ),
    },
    {
        code: '04',
        title: 'Cookies and Tracking Technologies',
        body: (
            <>
                <p>
                    We use a minimal set of cookies and similar technologies to keep
                    the Service functional and to understand how it is used:
                </p>
                <ul>
                    <li>
                        <strong className="text-white">Session cookies</strong> — deleted when you close your
                        browser; used to keep basic functionality working.
                    </li>
                    <li>
                        <strong className="text-white">Persistent cookies</strong> — remain on your device to
                        remember preferences between visits.
                    </li>
                    <li>
                        <strong className="text-white">Web beacons</strong> — small electronic files that may be
                        used in emails or on pages to count visits and verify system
                        integrity.
                    </li>
                </ul>
                <p>
                    You can instruct your browser to refuse all cookies or to indicate
                    when a cookie is being sent. Some parts of the Service may not
                    function without them.
                </p>
            </>
        ),
    },
    {
        code: '05',
        title: 'How We Use Information',
        body: (
            <>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Provide, maintain, and improve the Service</li>
                    <li>Communicate with you about updates, features, and support</li>
                    <li>Monitor usage to detect abuse and keep the Service secure</li>
                    <li>Comply with legal obligations</li>
                </ul>
                <p>
                    We do not sell your personal information.
                </p>
            </>
        ),
    },
    {
        code: '06',
        title: 'Security of Data and No Liability',
        body: (
            <>
                <p>
                    The security of your data is important to us — but no method of
                    transmission over the internet or method of electronic storage is
                    100% secure. While we strive to use commercially acceptable means
                    to protect your personal data, we cannot guarantee its absolute
                    security.
                </p>
                <p>
                    By using the Service, you acknowledge and agree that NetSepio
                    assumes no liability for any data breaches, leaks, unauthorized
                    access, or loss of information. You use the Service at your own
                    risk.
                </p>
            </>
        ),
    },
    {
        code: '07',
        title: 'Indemnification',
        body: (
            <>
                <p>
                    By accessing our Service, you agree to fully indemnify, defend,
                    and hold harmless NetSepio, its affiliates, and their respective
                    directors, officers, employees, and agents from any claims,
                    liabilities, damages, losses, or expenses — including reasonable
                    attorney fees — arising out of or in any way connected with your
                    use of the Service or your violation of this Privacy Policy.
                </p>
            </>
        ),
    },
    {
        code: '08',
        title: 'Changes and Contact',
        body: (
            <>
                <p>
                    We may update this Privacy Policy from time to time. Changes take
                    effect when posted on this page, and material changes will be
                    reflected in the &quot;last updated&quot; date above.
                </p>
                <p>
                    Questions about this policy or your data? Contact us at{' '}
                    <a href="mailto:support@netsepio.com" className="text-brand-cyan hover:text-neon transition-colors">
                        support@netsepio.com
                    </a>.
                </p>
            </>
        ),
    },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-void relative">
            <div className="absolute inset-0 bg-hud-grid-fine opacity-40 pointer-events-none"></div>
            <NavBar />

            <main className="max-w-4xl mx-auto px-6 pt-36 pb-24 relative z-10">
                <div className="text-center mb-16">
                    <MonoTag className="mb-6">LEGAL <span className="text-brand-cyan/40">//</span> PRIVACY_POLICY</MonoTag>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
                        Privacy <span className="text-gradient">Policy</span>
                    </h1>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gray-500">
                        Last updated: 2026-07-10
                    </p>
                </div>

                <div className="space-y-6">
                    {sections.map((section) => (
                        <section key={section.code} className="hud-panel p-8 md:p-10 relative">
                            <Corners size="w-2 h-2" className="border-brand-cyan/25" />
                            <p className="font-mono text-[10px] tracking-[0.3em] text-brand-cyan/60 uppercase mb-3">
                                SEC.{section.code}
                            </p>
                            <h2 className="font-heading text-2xl font-bold text-white uppercase tracking-tight mb-5">
                                {section.title}
                            </h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed [&_ul]:list-none [&_ul]:space-y-2 [&_ul]:pl-0 [&_li]:pl-6 [&_li]:relative [&_li]:before:content-['▸'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-brand-cyan [&_li]:before:font-mono [&_li]:before:text-xs [&_li]:before:top-1.5">
                                {section.body}
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
