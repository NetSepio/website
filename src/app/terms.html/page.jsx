import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function TermsOfUsePage() {
    return (
        <div className="min-h-screen bg-[#040a20]">
            <NavBar />
            <main className="max-w-4xl mx-auto px-6 py-24">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-[#08d9c5] mb-12">
                    Terms and Conditions
                </h1>
                <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-6">
                    <p>Welcome to NetSepio!</p>
                    <p>
                        These terms and conditions outline the rules and regulations
                        for the use of NetSepio's Website, located at https://netsepio.com/.
                    </p>
                    <p>
                        By accessing this website we assume you accept these terms
                        and conditions. Do not continue to use NetSepio if you do not agree
                        to take all of the terms and conditions stated on this page.
                    </p>
                    <p>
                        The following terminology applies to these Terms and
                        Conditions, Privacy Statement and Disclaimer Notice and all
                        Agreements: "Client", "You" and "Your" refers to you, the person log
                        on this website and compliant to the Company's terms and
                        conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers
                        to our Company. "Party", "Parties", or "Us", refers to both the
                        Client and ourselves. All terms refer to the offer, acceptance and
                        consideration of payment necessary to undertake the process of our
                        assistance to the Client in the most appropriate manner for the
                        express purpose of meeting the Client's needs in respect of
                        provision of the Company's stated services, in accordance with and
                        subject to, prevailing law of in. Any use of the above terminology
                        or other words in the singular, plural, capitalization and/or he/she
                        or they, are taken as interchangeable and therefore as referring to
                        same.
                    </p>
                    <p>
                        Unless otherwise stated, NetSepio and/or its licensors own
                        the intellectual property rights for all material on NetSepio. All
                        intellectual property rights are reserved. You may access this from
                        NetSepio for your own personal use subjected to restrictions set in
                        these terms and conditions.
                    </p>
                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">You must not:</h2>
                    <ul className="list-decimal pl-6 space-y-2">
                        <li>Republish material from NetSepio.</li>
                        <li>Sell, rent or sub-license material from NetSepio.</li>
                        <li>Reproduce, duplicate or copy material from NetSepio.</li>
                        <li>Redistribute content from NetSepio</li>
                    </ul>
                    <p className="mt-8">
                        NetSepio reserves the right to monitor all Comments and to
                        remove any Comments which can be considered inappropriate, offensive
                        or causes breach of these Terms and Conditions.
                    </p>
                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Limitation of Liability & No Warranties</h2>
                    <p>
                        To the maximum extent permitted by applicable law, in no event shall NetSepio,
                        its affiliates, directors, employees, or its licensors be liable for any direct, indirect,
                        incidental, special, consequential or punitive damages, including without limitation,
                        loss of profits, data, use, goodwill, or other intangible losses, resulting from
                        (i) your access to or use of or inability to access or use the Service;
                        (ii) any conduct or content of any third party on the Service;
                        (iii) any unauthorized access, use or alteration of your transmissions or content.
                        The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.
                        We assume absolutely NO LIABILITY for any damages or consequences arising from the use of our services.
                    </p>
                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Indemnification</h2>
                    <p>
                        You agree to defend, indemnify and hold harmless NetSepio and its licensee and licensors,
                        and their employees, contractors, agents, officers and directors, from and against any and all claims,
                        damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees),
                        resulting from or arising out of a) your use and access of the Service, or b) a breach of these Terms.
                        You fully indemnify NetSepio of all liabilities and occurrences of any nature.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
