import Footer from './Footer';
import NavBar from './NavBar';
import { Corners, MonoTag } from './hud';

export const SupportEmailLink = () => (
    <a
        href="mailto:support@netsepio.com"
        className="text-brand-cyan hover:text-neon transition-colors"
    >
        support@netsepio.com
    </a>
);

export default function LegalDocument({
    documentCode,
    title,
    updatedAt,
    sections,
}) {
    return (
        <div className="min-h-screen bg-void relative">
            <div className="absolute inset-0 bg-hud-grid-fine opacity-40 pointer-events-none"></div>
            <NavBar />

            <main className="max-w-4xl mx-auto px-6 pt-36 pb-24 relative z-10">
                <div className="text-center mb-16">
                    <MonoTag className="mb-6">
                        LEGAL <span className="text-brand-cyan/40">//</span> {documentCode}
                    </MonoTag>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
                        {title}
                    </h1>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gray-500">
                        Last updated: {updatedAt}
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
