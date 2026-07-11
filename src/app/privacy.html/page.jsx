import React from 'react';
import LegalDocument, { SupportEmailLink } from '../../components/LegalDocument';

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
                    <SupportEmailLink />.
                </p>
            </>
        ),
    },
];

export default function PrivacyPolicyPage() {
    return (
        <LegalDocument
            documentCode="PRIVACY_POLICY"
            title={<>Privacy <span className="text-gradient">Policy</span></>}
            updatedAt="2026-07-10"
            sections={sections}
        />
    );
}
