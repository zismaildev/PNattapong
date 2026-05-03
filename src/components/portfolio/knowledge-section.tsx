"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { KnowledgeGraph } from "@/components/knowledge-graph";

export const KnowledgeSection = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? resolvedTheme === "dark" : true;

    return (
        <section id="knowledge" className={`relative w-full py-20 overflow-hidden ${!isDark ? "bg-slate-100/90" : ""}`}>


            <div className="container mx-auto px-6 relative z-10 pointer-events-none">
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="font-mono text-indigo-400 text-[10px] uppercase tracking-[0.3em] mb-4">MAP.graph</span>
                    <h2 className={`text-3xl md:text-5xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
                        Interactive Knowledge Graph.
                    </h2>
                    <p className="mt-4 text-sm text-slate-500 max-w-lg font-medium leading-relaxed">
                        Explore the interconnection of my skills, interests, and technical domains.
                        Feel free to <span className="text-indigo-400">interact</span> with the nodes.
                    </p>
                </div>
            </div>

            {/* The Graph Area */}
            <div className="relative w-full h-[600px] md:h-[700px]">


                <KnowledgeGraph isDark={isDark} />

                {/* Visual Decorative Overlays */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-indigo-500/20 m-10 rounded-tl-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-indigo-500/20 m-10 rounded-br-3xl pointer-events-none" />
            </div>
        </section>
    );
};
