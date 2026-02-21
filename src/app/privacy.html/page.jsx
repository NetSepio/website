import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#040a20]">
            <NavBar />
            <main className="max-w-4xl mx-auto px-6 py-24">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-[#08d9c5] mb-12">
                    Privacy Policy
                </h1>
                <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-6 pb-20">
                    <p>
                        This Privacy Policy describes our policies and procedures on the
                        collection, use and disclosure of your information when you use the
                        Service and tells you about your privacy rights and how the law
                        protects You. We use your Personal data to provide and improve the
                        Service. By using the Service, you agree to the collection and use of
                        information in accordance with this Privacy Policy.
                    </p>
                    <p>
                        While using Our
                        Service, we may ask you to provide us with certain personally
                        identifiable information that can be used to contact or identify you.
                        Personally identifiable information may include, but is not limited
                        to: Email address, First name and last name, Twitter and Discord
                        account, Usage Data Usage Data is collected automatically when using
                        the Service. Usage Data may include information such as your Device's
                        Internet Protocol address (e.g. IP address), browser type, browser
                        version, etc.
                    </p>
                    <p>
                        We use Cookies and similar tracking technologies to track the
                        activity on our Service and store certain information. Tracking
                        technologies used are beacons, tags, and scripts to collect and track
                        information and to improve and analyze our Service. The technologies
                        we use may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 pt-4">
                        <li>
                            <strong>Cookies can be "Persistent" or "Session" Cookies.</strong> Persistent Cookies remain on your personal computer or mobile device
                            when you go offline, while Session Cookies are deleted as soon as you
                            close your web browser.
                        </li>
                        <li>
                            <strong>Cookies or Browser Cookies:</strong> A cookie is a
                            small file placed on your Device. You can instruct your browser to
                            refuse all Cookies or to indicate when a Cookie is being sent.
                            However, if you do not accept Cookies, you may not be able to use some
                            parts of our Service. Unless you have adjusted your browser setting so
                            that it will refuse Cookies, our Service may use Cookies.
                        </li>
                        <li>
                            <strong>Web Beacons:</strong> Certain sections of our Service and our emails may contain small
                            electronic files known as web beacons (also referred to as clear gifs,
                            pixel tags, and single-pixel gifs) that permit the Company, for
                            example, to count users who have visited those pages or opened an
                            email and for other related website statistics (for example, recording
                            the popularity of a certain section and verifying system and server
                            integrity).
                        </li>
                    </ul>
                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Security of Data and No Liability</h2>
                    <p>
                        The security of your data is important to us, but remember that no method of transmission over
                        the Internet, or method of electronic storage is 100% secure. While we strive to use commercially
                        acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        By using the Service, you acknowledge and agree that NetSepio assumes absolutely NO LIABILITY
                        for any data breaches, leaks, unauthorized access, or loss of information. You use the Service
                        entirely at your own risk.
                    </p>
                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Indemnification</h2>
                    <p>
                        By accessing our Service, you agree to fully indemnify, defend, and hold harmless NetSepio,
                        its affiliates, and their respective directors, officers, employees, and agents from any claims,
                        liabilities, damages, losses, or expenses, including reasonable attorney fees, arising out of or
                        in any way connected with your use of the Service or your violation of this Privacy Policy.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
