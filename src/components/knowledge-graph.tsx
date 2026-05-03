"use client";

import React, { useEffect, useRef } from "react";

export interface KnowledgeGraphProps {
    className?: string;
    width?: number;
    height?: number;
    isDark?: boolean;
}

interface Node {
    id: string;
    label: string;
    category: string;
    color: string;
    radius: number;
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    dx: number;
    dy: number;
    translateX: number;
    translateY: number;
    magnetism: number;
    alpha: number;
    targetAlpha: number;
    isCenter?: boolean;
    isParent?: boolean;
}

interface Edge {
    source: Node;
    target: Node;
    particles: number[];
}

const CENTER_NODE = { id: "center", label: "zismaildev", color: "#6366f1", radius: 28, category: "Identity" };

const CLUSTERS = [
    {
        id: "c1",
        parent: "Full-stack",
        color: "#818cf8",
        children: ["Next.js", "TypeScript", "React", "Supabase", "PostgreSQL", "Prisma", "HeroUI", "Tailwind CSS"],
    },
    {
        id: "c2",
        parent: "AI / RAG",
        color: "#f472b6",
        children: ["LangChain.js", "Groq", "OpenRouter", "pgvector", "Cohere", "Transformers.js", "Telegram Bot", "NLP"],
    },
    {
        id: "c3",
        parent: "Security",
        color: "#f87171",
        children: ["RBAC", "Audit Log", "PDPA", "PII Masking", "Timing-safe", "Webhook"],
    },
    {
        id: "c4",
        parent: "DevOps",
        color: "#34d399",
        children: ["Vercel", "Cloudflare", "GitHub Actions", "Docker", "Supabase Auth"],
    },
    {
        id: "c5",
        parent: "Research",
        color: "#fbbf24",
        children: ["RAG Pipeline", "Vector DB", "SDLC", "Academic Paper"],
    },
    {
        id: "c6",
        parent: "Interests",
        color: "#94a3b8",
        children: ["Cyber Security", "Investing", "Index Fund", "Open Source", "HPC"],
    },
];

function randomBetween(min: number, max: number) {
    return min + Math.random() * (max - min);
}

export function KnowledgeGraph({ className = "", width, height, isDark = true }: KnowledgeGraphProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);

    const nodesRef = useRef<Node[]>([]);
    const edgesRef = useRef<Edge[]>([]);
    const dragNodeRef = useRef<Node | null>(null);
    const hoverNodeRef = useRef<Node | null>(null);
    const mousePosRef = useRef({ x: 0, y: 0 });
    const pulsePhaseRef = useRef(0);
    const canvasSizeRef = useRef({ w: 0, h: 0 });
    const initializedRef = useRef(false);

    useEffect(() => {
        const nodes: Node[] = [];
        const edges: Edge[] = [];

        const createNode = (props: Partial<Node>): Node => ({
            id: props.id || "",
            label: props.label || "",
            category: props.category || "",
            color: props.color || "#ffffff",
            radius: props.radius || 10,
            x: props.x || 0,
            y: props.y || 0,
            baseX: props.x || 0,
            baseY: props.y || 0,
            dx: randomBetween(-0.4, 0.4),
            dy: randomBetween(-0.4, 0.4),
            translateX: 0,
            translateY: 0,
            magnetism: 0.5 + Math.random() * 3,
            alpha: 0,
            targetAlpha: 1,
            isCenter: props.isCenter || false,
            isParent: props.isParent || false,
        });

        const centerNode = createNode({
            id: CENTER_NODE.id,
            label: CENTER_NODE.label,
            category: CENTER_NODE.category,
            color: CENTER_NODE.color,
            radius: CENTER_NODE.radius,
            x: 0, y: 0,
            isCenter: true,
            isParent: true,
        });
        nodes.push(centerNode);

        CLUSTERS.forEach((cluster, i) => {
            const angle = (i / CLUSTERS.length) * Math.PI * 2;
            const px = Math.cos(angle) * 200;
            const py = Math.sin(angle) * 200;

            const parentNode = createNode({
                id: cluster.id,
                label: cluster.parent,
                category: "Category",
                color: cluster.color,
                radius: 18,
                x: px, y: py,
                isParent: true,
            });
            nodes.push(parentNode);

            edges.push({
                source: centerNode,
                target: parentNode,
                particles: [Math.random(), Math.random()],
            });

            cluster.children.forEach((childLabel, j) => {
                const childAngle = (j / cluster.children.length) * Math.PI * 2;
                const cx = px + Math.cos(childAngle) * 100;
                const cy = py + Math.sin(childAngle) * 100;

                const childNode = createNode({
                    id: `${cluster.id}-${j}`,
                    label: childLabel,
                    category: cluster.parent,
                    color: cluster.color,
                    radius: 10,
                    x: cx, y: cy,
                });
                nodes.push(childNode);

                edges.push({
                    source: parentNode,
                    target: childNode,
                    particles: [Math.random()],
                });
            });
        });

        nodesRef.current = nodes;
        edgesRef.current = edges;
    }, []);

    useEffect(() => {
        const resizeCanvas = () => {
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;

            const targetWidth = width || container.clientWidth;
            const targetHeight = height || container.clientHeight;
            canvasSizeRef.current = { w: targetWidth, h: targetHeight };

            const dpr = window.devicePixelRatio || 1;
            canvas.width = targetWidth * dpr;
            canvas.height = targetHeight * dpr;
            canvas.style.width = `${targetWidth}px`;
            canvas.style.height = `${targetHeight}px`;

            const ctx = canvas.getContext("2d");
            if (ctx) ctx.scale(dpr, dpr);

            if (!initializedRef.current && nodesRef.current.length > 0) {
                initializedRef.current = true;
                const cx = targetWidth / 2;
                const cy = targetHeight / 2;
                nodesRef.current.forEach(n => {
                    n.baseX += cx;
                    n.baseY += cy;
                    n.x = n.baseX;
                    n.y = n.baseY;
                });
            }
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        return () => window.removeEventListener("resize", resizeCanvas);
    }, [width, height]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const staticity = 60;
        const ease = 40;

        const render = () => {
            const { w, h } = canvasSizeRef.current;
            ctx.clearRect(0, 0, w, h);
            pulsePhaseRef.current += 0.03;

            const nodes = nodesRef.current;
            const edges = edgesRef.current;
            const dragNode = dragNodeRef.current;
            const mousePos = mousePosRef.current;

            // Update positions
            nodes.forEach(node => {
                if (node.alpha < node.targetAlpha) {
                    node.alpha = Math.min(node.targetAlpha, node.alpha + 0.015);
                }

                if (node === dragNode) {
                    // Drag: follow mouse directly
                    node.x = mousePos.x + w / 2;
                    node.y = mousePos.y + h / 2;
                    node.translateX = 0;
                    node.translateY = 0;
                    node.baseX = node.x;
                    node.baseY = node.y;
                    node.dx = 0;
                    node.dy = 0;
                } else if (node.isCenter) {
                    // Center node: flee from mouse if close
                    const absMouseX = mousePos.x + w / 2;
                    const absMouseY = mousePos.y + h / 2;
                    const fleeDistX = node.x - absMouseX;
                    const fleeDistY = node.y - absMouseY;
                    const fleeDist = Math.sqrt(fleeDistX * fleeDistX + fleeDistY * fleeDistY);
                    const fleeRadius = 120;

                    if (fleeDist < fleeRadius && fleeDist > 0) {
                        // Push away from mouse — stronger when closer
                        const force = (1 - fleeDist / fleeRadius) * 0.8;
                        node.dx += (fleeDistX / fleeDist) * force;
                        node.dy += (fleeDistY / fleeDist) * force;
                    }

                    // Drift
                    node.x += node.dx;
                    node.y += node.dy;

                    // Nudge direction slowly
                    node.dx += randomBetween(-0.02, 0.02);
                    node.dy += randomBetween(-0.02, 0.02);

                    // Clamp speed (center can move faster when fleeing)
                    const maxSpeed = 3.5;
                    node.dx = Math.max(-maxSpeed, Math.min(maxSpeed, node.dx));
                    node.dy = Math.max(-maxSpeed, Math.min(maxSpeed, node.dy));

                    // Friction to slow down gradually
                    node.dx *= 0.92;
                    node.dy *= 0.92;

                    // Bounce off edges
                    const margin = 60;
                    if (node.x < margin) { node.dx += 0.3; node.x = Math.max(node.x, margin); }
                    if (node.x > w - margin) { node.dx -= 0.3; node.x = Math.min(node.x, w - margin); }
                    if (node.y < margin) { node.dy += 0.3; node.y = Math.max(node.y, margin); }
                    if (node.y > h - margin) { node.dy -= 0.3; node.y = Math.min(node.y, h - margin); }

                    node.translateX = 0;
                    node.translateY = 0;
                } else {
                    // Regular nodes: drift freely
                    node.x += node.dx;
                    node.y += node.dy;

                    // Slowly nudge direction
                    node.dx += randomBetween(-0.02, 0.02);
                    node.dy += randomBetween(-0.02, 0.02);

                    // Clamp speed
                    node.dx = Math.max(-0.45, Math.min(0.45, node.dx));
                    node.dy = Math.max(-0.45, Math.min(0.45, node.dy));

                    // Spring back only if too far from base
                    const distX = node.x - node.baseX;
                    const distY = node.y - node.baseY;
                    const dist = Math.sqrt(distX * distX + distY * distY);
                    if (dist > 75) {
                        node.dx -= (distX / dist) * 0.04;
                        node.dy -= (distY / dist) * 0.04;
                    }

                    // Mouse magnetism
                    node.translateX += (mousePos.x / (staticity / node.magnetism) - node.translateX) / ease;
                    node.translateY += (mousePos.y / (staticity / node.magnetism) - node.translateY) / ease;
                }
            });

            const getPos = (n: Node) => ({ x: n.x + n.translateX, y: n.y + n.translateY });

            // Draw edges
            edges.forEach(edge => {
                const p1 = getPos(edge.source);
                const p2 = getPos(edge.target);
                const opacity = (edge.source.isCenter ? 0.35 : 0.2) * Math.min(edge.source.alpha, edge.target.alpha);

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.globalAlpha = opacity;
                ctx.strokeStyle = isDark ? edge.target.color : "rgba(15,23,42,0.4)";
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.globalAlpha = 1;

                edge.particles.forEach((p, i) => {
                    edge.particles[i] = (p + (edge.source.isCenter ? 0.004 : 0.007)) % 1;
                    const px = p1.x + (p2.x - p1.x) * edge.particles[i];
                    const py = p1.y + (p2.y - p1.y) * edge.particles[i];
                    ctx.beginPath();
                    ctx.arc(px, py, 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = isDark ? edge.target.color : "#0f172a";
                    ctx.globalAlpha = opacity * 1.8;
                    ctx.fill();
                    ctx.globalAlpha = 1;
                });
            });

            // Draw nodes
            const hoveredNode = hoverNodeRef.current;
            const sorted = [...nodes].sort((a, b) => {
                if (a === hoveredNode) return 1;
                if (b === hoveredNode) return -1;
                if (a.isCenter) return 1;
                if (b.isCenter) return -1;
                return 0;
            });

            sorted.forEach(node => {
                const pos = getPos(node);
                const isHovered = node === hoveredNode;
                const r = isHovered ? node.radius * 1.15 : node.radius;

                ctx.globalAlpha = node.alpha;
                ctx.shadowBlur = isDark ? (isHovered ? 30 : node.isParent ? 12 : 4) : 0;
                ctx.shadowColor = node.color;

                ctx.beginPath();
                ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);

                if (node.isCenter) {
                    ctx.fillStyle = node.color;
                    ctx.fill();

                    const pulseR = r + 6 + Math.sin(pulsePhaseRef.current) * 5;
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, pulseR, 0, Math.PI * 2);
                    ctx.strokeStyle = node.color;
                    ctx.globalAlpha = Math.max(0, (0.4 + Math.sin(pulsePhaseRef.current) * 0.25)) * node.alpha;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                } else if (node.isParent) {
                    ctx.fillStyle = isDark ? node.color : "#1e293b";
                    ctx.fill();
                } else {
                    ctx.fillStyle = isDark ? `${node.color}33` : "#f1f5f9";
                    ctx.fill();
                    ctx.strokeStyle = isDark ? node.color : "#475569";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                ctx.shadowBlur = 0;
                ctx.globalAlpha = node.alpha;

                if (node.isParent || node.isCenter || isHovered) {
                    ctx.font = node.isCenter ? "bold 11px monospace" : "10px monospace";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "top";
                    ctx.fillStyle = isDark ? "#ffffff" : "#0f172a";
                    ctx.fillText(node.label, pos.x, pos.y + r + 5);
                }

                ctx.globalAlpha = 1;
            });

            // Tooltip for child nodes
            if (hoveredNode && !dragNode && !hoveredNode.isParent && !hoveredNode.isCenter) {
                const pos = getPos(hoveredNode);
                const padX = 10;
                const padY = 7;

                ctx.font = "bold 11px sans-serif";
                const lw = ctx.measureText(hoveredNode.label).width;
                ctx.font = "9px monospace";
                const cw = ctx.measureText(hoveredNode.category).width;

                const tipW = Math.max(lw, cw) + padX * 2;
                const tipH = 38;
                const tx = Math.min(pos.x + hoveredNode.radius + 8, w - tipW - 10);
                const ty = Math.max(5, pos.y - tipH / 2);

                ctx.fillStyle = isDark ? "rgba(10,10,15,0.9)" : "rgba(255,255,255,0.95)";
                ctx.shadowBlur = 12;
                ctx.shadowColor = "rgba(0,0,0,0.4)";
                ctx.beginPath();
                ctx.roundRect(tx, ty, tipW, tipH, 6);
                ctx.fill();
                ctx.shadowBlur = 0;

                ctx.strokeStyle = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                ctx.fillStyle = isDark ? "#ffffff" : "#0f172a";
                ctx.font = "bold 11px sans-serif";
                ctx.fillText(hoveredNode.label, tx + padX, ty + padY);

                ctx.fillStyle = "#64748b";
                ctx.font = "9px monospace";
                ctx.fillText(hoveredNode.category, tx + padX, ty + padY + 16);
            }

            requestRef.current = requestAnimationFrame(render);
        };

        requestRef.current = requestAnimationFrame(render);
        return () => cancelAnimationFrame(requestRef.current);
    }, [isDark]);

    const updateMousePos = (clientX: number, clientY: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const { w, h } = canvasSizeRef.current;
        mousePosRef.current = {
            x: clientX - rect.left - w / 2,
            y: clientY - rect.top - h / 2,
        };
    };

    const findNodeAt = (absX: number, absY: number): Node | null => {
        for (let i = nodesRef.current.length - 1; i >= 0; i--) {
            const node = nodesRef.current[i];
            const dx = (node.x + node.translateX) - absX;
            const dy = (node.y + node.translateY) - absY;
            if (dx * dx + dy * dy <= (node.radius + 8) * (node.radius + 8)) return node;
        }
        return null;
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
        updateMousePos(e.clientX, e.clientY);
        const { x, y } = mousePosRef.current;
        const { w, h } = canvasSizeRef.current;
        const node = findNodeAt(x + w / 2, y + h / 2);
        if (node) dragNodeRef.current = node;
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
        updateMousePos(e.clientX, e.clientY);
        if (dragNodeRef.current) return;
        const { x, y } = mousePosRef.current;
        const { w, h } = canvasSizeRef.current;
        const node = findNodeAt(x + w / 2, y + h / 2);
        if (node !== hoverNodeRef.current) {
            hoverNodeRef.current = node;
            document.body.style.cursor = node ? "grab" : "default";
        }
    };

    const handlePointerUp = () => {
        dragNodeRef.current = null;
        document.body.style.cursor = hoverNodeRef.current ? "grab" : "default";
    };

    const handlePointerLeave = () => {
        dragNodeRef.current = null;
        hoverNodeRef.current = null;
        document.body.style.cursor = "default";
        mousePosRef.current = { x: 0, y: 0 };
    };

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 z-0 w-full h-full overflow-hidden opacity-60 md:opacity-70 ${className}`}
        >
            <canvas
                ref={canvasRef}
                className="block w-full h-full touch-none"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onPointerLeave={handlePointerLeave}
            />
        </div>
    );
}

export default KnowledgeGraph;
