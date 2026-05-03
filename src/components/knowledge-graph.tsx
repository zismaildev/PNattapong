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
    {
        id: "c7",
        parent: "IoT",
        color: "#4361ee",
        children: ["ESP32", "ESP8266", "Arduino", "DHT11", "HC-SR04", "Rain Sensor", "Relay", "LDR"],
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
    const hoverNodeRef = useRef<Node | null>(null);
    const dragNodeRef = useRef<Node | null>(null);
    const windowMouseRef = useRef({ x: -9999, y: -9999 });
    const pulsePhaseRef = useRef(0);
    const canvasSizeRef = useRef({ w: 0, h: 0 });
    const initializedRef = useRef(false);

    // ─── Initialize nodes with positions relative to (0,0) ───
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
            dx: randomBetween(-0.3, 0.3),
            dy: randomBetween(-0.3, 0.3),
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
        initializedRef.current = false;
    }, []);

    // ─── Window-level mouse tracking (bypasses z-index blocking) ───
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            windowMouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        const handleMouseLeave = () => {
            windowMouseRef.current = { x: -9999, y: -9999 };
            dragNodeRef.current = null;
        };

        const handleMouseDown = () => {
            if (hoverNodeRef.current) {
                dragNodeRef.current = hoverNodeRef.current;
            }
        };

        const handleMouseUp = () => {
            dragNodeRef.current = null;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    // ─── Canvas resize & center nodes on init ───
    useEffect(() => {
        const resizeCanvas = () => {
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;

            // Use container dimensions, fallback to window if container reports 0
            const containerW = container.clientWidth || container.offsetWidth;
            const containerH = container.clientHeight || container.offsetHeight;
            const targetWidth = width || (containerW > 0 ? containerW : window.innerWidth);
            const targetHeight = height || (containerH > 0 ? containerH : window.innerHeight);

            // Don't init with 0 dimensions
            if (targetWidth <= 0 || targetHeight <= 0) return;

            canvasSizeRef.current = { w: targetWidth, h: targetHeight };

            const dpr = window.devicePixelRatio || 1;
            canvas.width = targetWidth * dpr;
            canvas.height = targetHeight * dpr;
            canvas.style.width = `${targetWidth}px`;
            canvas.style.height = `${targetHeight}px`;

            const ctx = canvas.getContext("2d");
            if (ctx) ctx.scale(dpr, dpr);

            // Center all nodes on first init
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
        // Run immediately, retry with RAF and setTimeout for layout timing
        resizeCanvas();
        requestAnimationFrame(resizeCanvas);
        const timer = setTimeout(resizeCanvas, 200);
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            clearTimeout(timer);
        };
    }, [width, height]);

    // ─── Main animation loop ───
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const render = () => {
            const { w, h } = canvasSizeRef.current;
            ctx.clearRect(0, 0, w, h);
            pulsePhaseRef.current += 0.03;

            const nodes = nodesRef.current;
            const edges = edgesRef.current;
            const mouseAbs = windowMouseRef.current;
            const mouseActive = mouseAbs.x > -9000;

            // ── Update hover state from window mouse ──
            let newHover: Node | null = null;
            if (mouseActive) {
                for (let i = nodes.length - 1; i >= 0; i--) {
                    const node = nodes[i];
                    const ddx = (node.x + node.translateX) - mouseAbs.x;
                    const ddy = (node.y + node.translateY) - mouseAbs.y;
                    if (ddx * ddx + ddy * ddy <= (node.radius + 8) * (node.radius + 8)) {
                        newHover = node;
                        break;
                    }
                }
            }
            hoverNodeRef.current = newHover;

            const dragNode = dragNodeRef.current;

            // ── Update node positions ──
            nodes.forEach(node => {
                // Fade in
                if (node.alpha < node.targetAlpha) {
                    node.alpha = Math.min(node.targetAlpha, node.alpha + 0.015);
                }

                // ── Drag Logic ──
                if (node === dragNode && mouseActive) {
                    node.x = mouseAbs.x - node.translateX;
                    node.y = mouseAbs.y - node.translateY;
                    node.baseX = node.x; // Update base so it stays where dropped
                    node.baseY = node.y;
                    node.dx = 0;
                    node.dy = 0;
                } else {
                    // ── Drift ──
                    node.x += node.dx;
                    node.y += node.dy;

                    // Slowly nudge direction for organic movement
                    node.dx += randomBetween(-0.015, 0.015);
                    node.dy += randomBetween(-0.015, 0.015);

                    // Clamp speed
                    const maxSpeed = node.isCenter ? 4.0 : node.isParent ? 2.5 : 1.5;
                    node.dx = Math.max(-maxSpeed, Math.min(maxSpeed, node.dx));
                    node.dy = Math.max(-maxSpeed, Math.min(maxSpeed, node.dy));

                    // Friction
                    node.dx *= 0.98;
                    node.dy *= 0.98;

                    // ── Spring back toward base position (VERY WEAK so they float) ──
                    const springDistX = node.x - node.baseX;
                    const springDistY = node.y - node.baseY;
                    const springDist = Math.sqrt(springDistX * springDistX + springDistY * springDistY);
                    const springThreshold = node.isCenter ? 150 : 250; // Increased so they can float far
                    if (springDist > springThreshold) {
                        const springForce = node.isCenter ? 0.005 : 0.002; // Decreased so pull is weak
                        node.dx -= (springDistX / springDist) * springForce * (springDist - springThreshold);
                        node.dy -= (springDistY / springDist) * springForce * (springDist - springThreshold);
                    }

                    // ── Bounce off edges ──
                    const margin = 40;
                    if (node.x < margin) { node.dx += 0.3; node.x = Math.max(node.x, margin); }
                    if (node.x > w - margin) { node.dx -= 0.3; node.x = Math.min(node.x, w - margin); }
                    if (node.y < margin) { node.dy += 0.3; node.y = Math.max(node.y, margin); }
                    if (node.y > h - margin) { node.dy -= 0.3; node.y = Math.min(node.y, h - margin); }
                }

                // ── Subtle parallax (magnetism) ──
                if (mouseActive && node !== dragNode) {
                    const relMouseX = mouseAbs.x - w / 2;
                    const relMouseY = mouseAbs.y - h / 2;
                    node.translateX += (relMouseX / (60 / node.magnetism) - node.translateX) / 50;
                    node.translateY += (relMouseY / (60 / node.magnetism) - node.translateY) / 50;
                } else if (!mouseActive) {
                    node.translateX *= 0.95;
                    node.translateY *= 0.95;
                }
            });

            const getPos = (n: Node) => ({ x: n.x + n.translateX, y: n.y + n.translateY });

            // ── Draw edges ──
            edges.forEach(edge => {
                const p1 = getPos(edge.source);
                const p2 = getPos(edge.target);
                const opacity = (edge.source.isCenter ? 0.35 : 0.2) * Math.min(edge.source.alpha, edge.target.alpha);

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.globalAlpha = 1; // Full opacity for lines
                ctx.strokeStyle = edge.target.color; // Raw color
                ctx.lineWidth = 0.8;
                ctx.stroke();
                ctx.globalAlpha = 1;

                edge.particles.forEach((p, i) => {
                    edge.particles[i] = (p + (edge.source.isCenter ? 0.004 : 0.007)) % 1;
                    const px = p1.x + (p2.x - p1.x) * edge.particles[i];
                    const py = p1.y + (p2.y - p1.y) * edge.particles[i];
                    ctx.beginPath();
                    ctx.arc(px, py, 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = "#ffffff"; // Make particles white for pop
                    ctx.globalAlpha = 1;
                    ctx.fill();
                });
            });

            // ── Draw nodes ──
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
                    ctx.fillStyle = node.color; // Full vibrant color
                    ctx.fill();
                } else {
                    ctx.fillStyle = node.color; // Full vibrant color
                    ctx.fill();
                    ctx.strokeStyle = isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                ctx.shadowBlur = 0;
                ctx.globalAlpha = node.alpha;

                if (node.isParent || node.isCenter || isHovered) {
                    ctx.font = node.isCenter ? "bold 11px monospace" : "10px monospace";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "top";
                    ctx.fillStyle = isDark ? "rgba(255,255,255,0.9)" : "rgba(15,23,42,1)";
                    ctx.fillText(node.label, pos.x, pos.y + r + 8);
                }

                ctx.globalAlpha = 1;
            });

            // ── Tooltip for child nodes on hover ──
            if (hoveredNode && !hoveredNode.isParent && !hoveredNode.isCenter) {
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

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none opacity-25 md:opacity-35 ${className}`}
        >
            <canvas
                ref={canvasRef}
                className="block w-full h-full"
            />
        </div>
    );
}

export default KnowledgeGraph;
