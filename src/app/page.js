import { MESSAGES } from '../lib/messages'

export default async function Home({ searchParams }) {
    const params = await searchParams
    const lang = params?.lang === 'es' ? 'es' : 'en'
    const isEs = lang === 'es'
    const t = MESSAGES[lang]

    return (
        <main className="w-full max-w-3xl space-y-20">
            <header className="text-center space-y-8 animate-fade-in">
                <div className="flex justify-end">
                    <div className="flex items-center gap-2 border border-github-border rounded-full px-3 py-1 text-xs font-mono text-github-muted bg-github-card/40">
                        <span className="text-github-muted">Lang:</span>
                        <a
                            href="/?lang=en"
                            className={`px-2 py-0.5 rounded-full transition-colors ${
                                !isEs
                                    ? 'bg-primary text-black'
                                    : 'hover:bg-github-btn hover:text-github-text'
                            }`}
                        >
                            EN
                        </a>
                        <a
                            href="/?lang=es"
                            className={`px-2 py-0.5 rounded-full transition-colors ${
                                isEs
                                    ? 'bg-primary text-black'
                                    : 'hover:bg-github-btn hover:text-github-text'
                            }`}
                        >
                            ES
                        </a>
                    </div>
                </div>
                <div className="relative w-36 h-36 mx-auto rounded-full p-1 border border-github-border bg-github-card shadow-xl">
                    <img
                        alt="Brian Hermam Gargallo Carnalla"
                        className="w-full h-full rounded-full object-fill hover:grayscale transition-all duration-500"
                        src="avatar.jpg"
                    />
                </div>
                <div className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-mono text-primary font-medium tracking-tight">
                        Brian Hermam Gargallo Carnalla
                    </h2>
                    <p className="text-sm font-mono text-github-muted">
                        Mexico 🇲🇽 · +52 777 591 9411
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        {t.heroTitle}
                    </h1>
                    <p className="text-github-muted text-lg max-w-2xl mx-auto leading-relaxed pt-2">
                        {t.heroIntro}{' '}
                        <span className="text-white font-medium"> Next.js</span>,
                        <span className="text-white font-medium"> Astro</span>,
                        <span className="text-white font-medium"> Tailwind CSS</span>,
                        <span className="text-white font-medium"> TypeScript</span>,
                        <span className="text-white font-medium"> Django</span>, Supabase {t.heroAnd}{' '}
                        PostgreSQL. {t.heroOutro}
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 pt-4">
                    <a
                        className="flex items-center gap-2 text-sm font-mono text-github-muted hover:text-primary transition-colors group"
                        href="mailto:gargallocarnallabrianhermam@gmail.com"
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                            mail
                        </span>
                        <span>{t.emailLabel}</span>
                    </a>
                    <a
                        className="flex items-center gap-2 text-sm font-mono text-github-muted hover:text-primary transition-colors group"
                        href="https://www.linkedin.com/in/brian-hermam-gargallo-carnalla-69b436233/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                            work
                        </span>
                        <span>LinkedIn</span>
                    </a>
                    <a
                        className="flex items-center gap-2 text-sm font-mono text-github-muted hover:text-primary transition-colors group"
                        href="https://github.com/Zedieee"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                            code
                        </span>
                        <span>GitHub</span>
                    </a>
                </div>
            </header>

            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <h2 className="text-sm font-mono font-semibold text-github-muted uppercase tracking-wider">
                        {t.experienceTitle}
                    </h2>
                    <div className="h-px bg-github-border flex-1" />
                </div>
                <div className="space-y-10 pl-2">
                        <div className="relative pl-10 timeline-item">
                        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-github-bg z-10" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                            <h3 className="text-xl font-bold text-white">Freelance Software Developer</h3>
                                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20 mt-1 sm:mt-0 w-fit">
                                    {t.freelancePeriod}
                                </span>
                        </div>
                        <p className="text-xs font-mono text-github-muted mb-2">
                                {t.freelanceSubtitle}
                        </p>
                            <p className="text-github-muted mb-4 leading-relaxed">
                                {t.freelanceDescription}
                            </p>
                    </div>

                        <div className="relative pl-10 timeline-item">
                        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-github-border ring-4 ring-github-bg z-10" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                            <h3 className="text-xl font-bold text-white">Especialista Jr de TI</h3>
                                <span className="text-xs font-mono text-github-muted bg-github-btn px-2 py-1 rounded border border-github-border mt-1 sm:mt-0 w-fit">
                                    {t.tiPeriod}
                                </span>
                        </div>
                        <p className="text-xs font-mono text-github-muted mb-2">
                            Turefaccionariaenlinea.com
                        </p>
                            <p className="text-github-muted mb-4 leading-relaxed">
                                {t.tiDescription}
                            </p>
                    </div>

                        <div className="relative pl-10 timeline-item">
                        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-github-border ring-4 ring-github-bg z-10" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                            <h3 className="text-xl font-bold text-white">Programador Web</h3>
                                <span className="text-xs font-mono text-github-muted bg-github-btn px-2 py-1 rounded border border-github-border mt-1 sm:mt-0 w-fit">
                                    {t.bioPeriod}
                                </span>
                        </div>
                        <p className="text-xs font-mono text-github-muted mb-2">Bio agrizer</p>
                            <p className="text-github-muted leading-relaxed">
                                {t.bioDescription}
                            </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-sm font-mono font-semibold text-github-muted uppercase tracking-wider">
                        {t.educationTitle}
                    </h2>
                    <div className="h-px bg-github-border flex-1" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-github-card border border-github-border rounded-lg p-5 hover:border-github-muted transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-github-btn flex items-center justify-center border border-github-border text-primary">
                                <span className="material-symbols-outlined text-base">school</span>
                            </div>
                            <div className="text-left">
                                <h4 className="text-sm font-semibold text-white">
                                    {isEs ? 'Ingeniería en Sistemas Computacionales' : 'Computer Systems Engineering'}
                                </h4>
                                <p className="text-[11px] text-github-muted mt-0.5">{t.degreePeriod}</p>
                            </div>
                        </div>
                        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/60 text-primary bg-primary/10 text-[11px] font-mono w-fit">
                            <span className="material-symbols-outlined text-sm">workspace_premium</span>
                            <span>{t.specialtyPeriod}</span>
                        </p>
                    </div>

                    <div className="bg-github-card border border-github-border rounded-lg p-5 hover:border-github-muted transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-full bg-github-btn flex items-center justify-center border border-github-border text-primary">
                                <span className="material-symbols-outlined text-base">verified</span>
                            </div>
                            <div className="text-left">
                                <h4 className="text-sm font-semibold text-white">Responsive Web Design</h4>
                                <p className="text-[11px] text-github-muted mt-0.5">{t.responsivePeriod}</p>
                            </div>
                        </div>
                        <a
                                href="https://www.freecodecamp.org/certification/briangargallo/responsive-web-design"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-[11px] font-mono text-primary hover:underline break-all"
                            >
                                <span className="material-symbols-outlined text-xs">open_in_new</span>
                                <span>{t.responsiveLinkLabel}</span>
                            </a>
                    </div>
                </div>
                <div className="pt-4 text-xs font-mono">
                    <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/60 text-primary bg-primary/10">
                        <span className="material-symbols-outlined text-sm">translate</span>
                        <span>{t.languagesLine}</span>
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-sm font-mono font-semibold text-github-muted uppercase tracking-wider">
                        {t.skillsTitle}
                    </h2>
                    <div className="h-px bg-github-border flex-1" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-github-card border border-github-border rounded-lg p-5 hover:border-github-muted transition-colors">
                        <div className="flex items-center gap-2 mb-4 text-white font-medium">
                            <span className="material-symbols-outlined text-primary">terminal</span>
                            {t.skillsFrontendLabel}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                HTML / CSS
                            </span>
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                JavaScript / TypeScript
                            </span>
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                React / Next.js
                            </span>
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                Astro
                            </span>
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                Tailwind CSS
                            </span>
                        </div>
                    </div>

                    <div className="bg-github-card border border-github-border rounded-lg p-5 hover:border-github-muted transition-colors">
                        <div className="flex items-center gap-2 mb-4 text-white font-medium">
                            <span className="material-symbols-outlined text-primary">dns</span>
                            {t.skillsBackendLabel}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                Node.js / Express
                            </span>
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                Django
                            </span>
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                Python
                            </span>
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                Supabase
                            </span>
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                PostgreSQL / MongoDB
                            </span>
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                PHP / .NET
                            </span>
                        </div>
                    </div>

                    <div className="bg-github-card border border-github-border rounded-lg p-5 hover:border-github-muted transition-colors">
                        <div className="flex items-center gap-2 mb-4 text-white font-medium">
                            <span className="material-symbols-outlined text-primary">build</span>
                            {t.skillsToolsLabel}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                Odoo (ERP)
                            </span>
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                Microsoft Excel
                            </span>
                        </div>
                    </div>

                    <div className="bg-github-card border border-github-border rounded-lg p-5 hover:border-github-muted transition-colors">
                        <div className="flex items-center gap-2 mb-4 text-white font-medium">
                            <span className="material-symbols-outlined text-primary">psychology</span>
                            {t.softSkillsTitle}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                {t.softSkillCommunication}
                            </span>
                            <span className="px-2.5 py-1 text-xs font-mono text-github-text bg-github-btn rounded-md border border-github-border">
                                {t.softSkillWebDev}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-sm font-mono font-semibold text-github-muted uppercase tracking-wider">
                        {t.projectsTitle}
                    </h2>
                    <div className="h-px bg-github-border flex-1" />
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <a
                        className="group block bg-github-card border border-github-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
                        href="https://endofseasontracker.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                End of Season Tracker
                            </h3>
                            <span className="material-symbols-outlined text-github-muted group-hover:text-primary transition-colors">
                                arrow_outward
                            </span>
                        </div>
                            <p className="text-sm text-github-muted leading-relaxed mb-2">
                                {t.endOfSeasonDescription}
                            </p>
                        <p className="text-xs font-mono text-primary">
                            endofseasontracker.com
                        </p>
                    </a>

                    <a
                        className="group block bg-github-card border border-github-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
                        href="https://twitch-wheel-decide.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                Twitch Wheel Decide
                            </h3>
                            <span className="material-symbols-outlined text-github-muted group-hover:text-primary transition-colors">
                                arrow_outward
                            </span>
                        </div>
                            <p className="text-sm text-github-muted leading-relaxed mb-2">
                                {t.twitchDescription}
                            </p>
                        <p className="text-xs font-mono text-primary">
                            twitch-wheel-decide.vercel.app
                        </p>
                    </a>
                </div>
            </section>

            <footer className="pt-8 pb-6 border-t border-github-border">
                <p className="text-center text-xs text-github-muted font-mono">
                    {t.footerLine}
                </p>
            </footer>
        </main>
    )
}
