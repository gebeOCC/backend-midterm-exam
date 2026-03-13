import { Head } from '@inertiajs/react';
import { useState } from 'react';

import Api from './api';
import Criteria from './criteria';
import Database from './database';
import Tasks from './tasks/index';

const tabs = [
    { value: 'tasks', label: 'Tasks', desc: 'Project checklist', dot: 'bg-emerald-500', ring: 'ring-emerald-500/20', text: 'text-emerald-600' },
    { value: 'database', label: 'Database', desc: 'Schema & models', dot: 'bg-blue-500', ring: 'ring-blue-500/20', text: 'text-blue-600' },
    { value: 'apis', label: 'APIs', desc: 'Endpoints & data', dot: 'bg-violet-500', ring: 'ring-violet-500/20', text: 'text-violet-600' },
    { value: 'criteria', label: 'Criteria', desc: 'Grading rubric', dot: 'bg-rose-500', ring: 'ring-rose-500/20', text: 'text-rose-600' },
];

export default function Home() {
    const [active, setActive] = useState('tasks');
    const [fading, setFading] = useState(false);

    const switchTab = (value: string) => {
        if (value === active) return;
        setFading(true);
        setTimeout(() => { setActive(value); setFading(false); }, 160);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Head title="Midterm Exam">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Space+Grotesk:wght@600;700&display=swap"
                    rel="stylesheet"
                />
                <style>{`
                    .font-display { font-family: 'Space Grotesk', sans-serif; }
                    .font-body    { font-family: 'DM Sans', sans-serif; }
                    .grad-text {
                        background: linear-gradient(90deg, #7c3aed, #0ea5e9);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    .tab-active-border::before {
                        content: '';
                        position: absolute;
                        inset: -1px;
                        border-radius: 15px;
                        padding: 1px;
                        background: linear-gradient(135deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.03) 70%);
                        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        -webkit-mask-composite: xor;
                        mask-composite: exclude;
                        pointer-events: none;
                    }
                    @keyframes fadeUp {
                        from { opacity: 0; transform: translateY(8px) scale(0.998); }
                        to   { opacity: 1; transform: translateY(0) scale(1); }
                    }
                    .panel-in  { animation: fadeUp 0.22s cubic-bezier(0.22,1,0.36,1) both; }
                    .panel-out { opacity: 0; transition: opacity 0.16s ease; }
                `}</style>
            </Head>

            {/* Subtle background blobs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute -top-1/3 -left-1/4 w-[70vw] h-[70vw] rounded-full bg-violet-100/60 blur-3xl" />
                <div className="absolute -bottom-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-sky-100/60 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10">

                {/* ── HEADER ── */}
                <header className="pt-14 pb-10">

                    {/* Badge */}
                    <div className="mb-5">
                        <span className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-3 py-1 text-[11px] font-medium text-violet-600 tracking-wide font-body">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                            React Native Expo · Midterm Examination
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-gray-900 mb-3">
                        Mobile Application<br />
                        <span className="grad-text">Development</span>
                    </h1>

                    <p className="font-body text-sm text-gray-400 font-light">
                        Track progress · Review schemas · Explore endpoints · Check your rubric
                    </p>

                    {/* Divider */}
                    <div className="mt-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </header>

                {/* ── TAB NAV ── */}
                <nav className="flex gap-2 mb-5">
                    {tabs.map((tab) => {
                        const isActive = active === tab.value;
                        return (
                            <button
                                key={tab.value}
                                onClick={() => switchTab(tab.value)}
                                className={[
                                    'relative flex-1 min-w-0 text-left rounded-2xl px-3.5 py-3 transition-all duration-200 font-body',
                                    isActive
                                        ? `tab-active-border bg-white border border-gray-200 shadow-sm ring-2 ${tab.ring}`
                                        : 'bg-white/60 border border-gray-200/70 hover:bg-white hover:border-gray-300 hover:shadow-sm',
                                ].join(' ')}
                            >
                                {/* Dot + label */}
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className={[
                                        'w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200',
                                        tab.dot,
                                        isActive ? 'opacity-100' : 'opacity-30',
                                    ].join(' ')} />
                                    <span className={[
                                        'font-display text-[13px] font-semibold tracking-tight transition-colors duration-200',
                                        isActive ? 'text-gray-900' : 'text-gray-400',
                                    ].join(' ')}>
                                        {tab.label}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className={[
                                    'text-[10px] pl-[14px] truncate transition-colors duration-200',
                                    isActive ? tab.text : 'text-gray-300',
                                ].join(' ')}>
                                    {tab.desc}
                                </p>
                            </button>
                        );
                    })}
                </nav>

                {/* ── CONTENT PANEL ── */}
                <main className="mb-20">
                    <div
                        key={active}
                        className={[
                            'rounded-2xl border border-gray-200 bg-white shadow-sm min-h-96',
                            fading ? 'panel-out' : 'panel-in',
                        ].join(' ')}
                    >
                        {active === 'tasks' && <Tasks />}
                        {active === 'database' && <Database />}
                        {active === 'apis' && <Api />}
                        {active === 'criteria' && <Criteria />}
                    </div>
                </main>

            </div>
        </div>
    );
}