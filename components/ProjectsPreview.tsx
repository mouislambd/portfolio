"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function ProjectsPreview() {
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        supabase.from("projects").select("*")
            .order("created_at", { ascending: false })
            .then(({ data }) => setProjects(data || []));
    }, []);

    return (
        <section>
            <p style={{ color: "#00ffa3", fontFamily: "monospace", fontSize: 11, letterSpacing: 4, marginBottom: 8 }}>PREVIEW</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
                <h2 style={{ fontSize: 32, fontWeight: 800, color: "#e2e8f0" }}>Selected Work</h2>
                <Link href="/projects" style={{ color: "#00ffa3", fontSize: 14, textDecoration: "none" }}>View all →</Link>
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {projects.slice(0, 2).map((p, i) => (
                    <div key={p.id} style={{ flex: "1 1 300px", borderRadius: 12, border: "1px solid rgba(0,255,163,0.15)", background: "#0d1117", overflow: "hidden", marginTop: i === 1 ? 60 : 0 }}>
                        <div style={{ height: 200, overflow: "hidden" }}>
                            {p.image
                                ? <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                : <div style={{ width: "100%", height: "100%", background: "#080b10", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>🖥️</div>
                            }
                        </div>
                        <div style={{ padding: 20 }}>
                            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e2e8f0", marginBottom: 8 }}>{p.title}</h3>
                            <p style={{ fontSize: 14, color: "#94a3b8", marginBottom: 16 }}>{p.description}</p>
                            <div style={{ display: "flex", gap: 12 }}>
                                <a href={p.live} target="_blank" rel="noreferrer" style={{ color: "#00ffa3", fontSize: 13, textDecoration: "none" }}>↗ Live</a>
                                <a href={p.github} target="_blank" rel="noreferrer" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}>⌥ GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}