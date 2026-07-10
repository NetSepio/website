import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Corners, MonoTag } from '../../components/hud';

export const metadata = {
    title: 'Terms of Use | NetSepio',
    description: 'The rules and conditions for using the NetSepio website and services.',
};

const sections = [
    {
        code: '01',
        title: 'Acceptance of Terms',
        body: (
            <>
                <p>
                    Welcome to NetSepio. These Terms of Use govern your access to and
                    use of the NetSepio website at{' '}
                    <a href="https://netsepio.com/" className="text-brand-cyan hover:text-neon transition-colors">https://netsepio.com/</a>{' '}
                    and related services (together, the &quot;Service&quot;).
                </p>
                <p>
                    By accessing the Service, you accept these Terms in full. If you
                    do not agree with any part of them, do not continue to use the
                    Service.
                </p>
            </>
        ),
    },
    {
        code: '02',
        title: 'Definitions',
        body: (
            <>
                <p>
                    &quot;You&quot; and &quot;your&quot; refer to the person accessing the Service.
                    &quot;NetSepio,&quot; &quot;we,&quot; &quot;our,&quot; and &quot;us&quot; refer to the company behind
                    the Service. Singular, plural, and capitalization variants of
                    these terms are interchangeable and refer to the same parties.
                </p>
            </>
        ),
    },
    {
        code: '03',
        title: 'Intellectual Property',
        body: (
            <>
                <p>
                    Unless otherwise stated, NetSepio and/or its licensors own the
                    intellectual property rights for all material on the Service. All
                    intellectual property rights are reserved. You may access material
                    from the Service for your own personal use, subject to the
                    restrictions set in these Terms.
                </p>
            </>
        ),
    },
    {
        code: '04',
        title: 'Acceptable Use',
        body: (
            <>
                <p>You must not:</p>
                <ul>
                    <li>Republish material from NetSepio</li>
                    <li>Sell, rent, or sub-license material from NetSepio</li>
                    <li>Reproduce, duplicate, or copy material from NetSepio</li>
                    <li>Redistribute content from NetSepio</li>
                </ul>
                <p>
                    You also agree not to use the Service in any way that is unlawful,
                    harms others, or interferes with the operation and security of the
                    Service.
                </p>
            </>
        ),
    },
    {
        code: '05',
        title: 'Community Content',
        body: (
            <>
                <p>
                    Where the Service allows comments or community contributions,
                    NetSepio reserves the right to monitor all such content and to
                    remove anything that is inappropriate, offensive, or in breach of
                    these Terms. Content you post reflects your own views, not ours,
                    and you are responsible for it.
                </p>
            </>
        ),
    },
    {
        code: '06',
        title: 'Third-Party Links',
        body: (
            <>
                <p>
                    The Service may link to external sites and services — including
                    our own products hosted on separate domains — that are governed by
                    their own terms and privacy policies. We are not responsible for
                    the content or practices of third-party sites.
                </p>
            </>
        ),
    },
    {
        code: '07',
        title: 'No Warranties and Limitation of Liability',
        body: (
            <>
                <p>
                    The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis,
                    without warranties of any kind, express or implied.
                </p>
                <p>
                    To the maximum extent permitted by applicable law, in no event
                    shall NetSepio, its affiliates, directors, employees, or licensors
                    be liable for any direct, indirect, incidental, special,
                    consequential, or punitive damages — including loss of profits,
                    data, use, goodwill, or other intangible losses — resulting from:
                </p>
                <ul>
                    <li>Your access to, use of, or inability to access or use the Service</li>
                    <li>Any conduct or content of any third party on the Service</li>
                    <li>Any unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
                <p>
                    We assume no liability for any damages or consequences arising
                    from the use of our services.
                </p>
            </>
        ),
    },
    {
        code: '08',
        title: 'Indemnification',
        body: (
            <>
                <p>
                    You agree to defend, indemnify, and hold harmless NetSepio and its
                    licensees and licensors, and their employees, contractors, agents,
                    officers, and directors, from and against any and all claims,
                    damages, obligations, losses, liabilities, costs or debt, and
                    expenses (including but not limited to attorney&apos;s fees) resulting
                    from or arising out of (a) your use and access of the Service, or
                    (b) a breach of these Terms.
                </p>
            </>
        ),
    },
    {
        code: '09',
        title: 'Changes and Contact',
        body: (
            <>
                <p>
                    We may revise these Terms at any time. Changes take effect when
                    posted on this page, and your continued use of the Service
                    constitutes acceptance of the revised Terms.
                </p>
                <p>
                    Questions about these Terms? Contact us at{' '}
                    <a href="mailto:support@netsepio.com" className="text-brand-cyan hover:text-neon transition-colors">
                        support@netsepio.com
                    </a>.
                </p>
            </>
        ),
    },
];

export default function TermsOfUsePage() {
    return (
        <div className="min-h-screen bg-void relative">
            <div className="absolute inset-0 bg-hud-grid-fine opacity-40 pointer-events-none"></div>
            <NavBar />

            <main className="max-w-4xl mx-auto px-6 pt-36 pb-24 relative z-10">
                <div className="text-center mb-16">
                    <MonoTag className="mb-6">LEGAL <span className="text-brand-cyan/40">//</span> TERMS_OF_USE</MonoTag>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
                        Terms of <span className="text-gradient">Use</span>
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
