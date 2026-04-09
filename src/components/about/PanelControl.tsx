import { useState } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const PanelControl = () => {

    const [activeId, setActiveId] = useState<string[]>(['sync', 'power', 'config']);

    const toggleId = (id: string) => {
        setActiveId((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm">
            <div className="p-6">
                <h6 className="text-4xl md:text-5xl font-bold text-foreground tracking-[-0.02em] uppercase 
              bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent 
              drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] mb-3">
                    Panel de control
                </h6>
                <div className="flex justify-center">
                    <p className="mt-3 text-sm text-gray-400 tracking-widest">select your settings</p>
                </div>
                <div className="mt-10 rounded-[30px] bg-white/5 backdrop-blur-xl border border-white/10
                shadow-[0_0_50px_rgba(168,85,247,0.15)] p-6 md:p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <button
                            className={cn("group relative h-24 rounded-3xl bg-[#0b1020] border hover:cursor-pointer hover:scale-105 transition",
                                activeId.includes("alerts") ? "border-cyan-400/70 shadow-[0_0_20px_rgba(34,211,238,0.8)]" : "border-white/10")}
                            onClick={() => toggleId("alerts")}
                        >
                            <div className={cn("absolute inset-0 rounded-3xl blur-md", activeId.includes("alerts") ? "bg-cyan-400/10" : "bg-white/10")}></div>
                            <div className={cn("relative flex h-full flex-col items-center justify-center", activeId.includes("alerts") ? "text-cyan-300" : "text-slate-400")}>
                                <Icon icon="mdi:bell" className="h-8 w-8" aria-hidden="true" />
                                <span className="mt-2 text-xs font-semibold tracking-widest">ALERTS</span>
                            </div>
                        </button>
                        <button
                            className={cn("group relative h-24 rounded-3xl bg-[#0b1020] border hover:cursor-pointer hover:scale-105 transition",
                                activeId.includes("camera") ? "border-pink-500/70 shadow-[0_0_20px_rgba(236,72,153,0.8)]" : "border-white/10")}
                            onClick={() => toggleId("camera")}
                        >
                            <div className={cn("absolute inset-0 rounded-3xl blur-md", activeId.includes("camera") ? "bg-pink-500/10" : "bg-white/10")}></div>
                            <div className={cn("relative flex h-full flex-col items-center justify-center", activeId.includes("camera") ? "text-pink-400" : "text-slate-400")}>
                                <Icon icon="mdi:camera" className="h-8 w-8" aria-hidden="true" />
                                <span className="mt-2 text-xs font-semibold tracking-widest">CAMERA</span>
                            </div>
                        </button>
                        <button className={cn("group relative h-24 rounded-3xl bg-[#0b1020] border hover:cursor-pointer hover:scale-105 transition",
                            activeId.includes("gps") ? "border-violet-500/70 shadow-[0_0_20px_rgba(139,92,246,0.8)]" : "border-white/10")}
                            onClick={() => toggleId("gps")}>
                            <div className={cn("absolute inset-0 rounded-3xl blur-md", activeId.includes("gps") ? "bg-violet-500/10" : "bg-white/10")}></div>
                            <div className={cn("relative flex h-full flex-col items-center justify-center", activeId.includes("gps") ? "text-violet-400" : "text-slate-400")}>
                                <Icon icon="mdi:map-marker" className="h-8 w-8" aria-hidden="true" />
                                <span className="mt-2 text-xs font-semibold tracking-widest">GPS</span>
                            </div>
                        </button>

                        <button className={cn("group relative h-24 rounded-3xl bg-[#0b1020] border hover:cursor-pointer hover:scale-105 transition",
                            activeId.includes("shield") ? "border-green-400/70 shadow-[0_0_20px_rgba(74,222,128,0.8)]" : "border-white/10")}
                            onClick={() => toggleId("shield")}>
                            <div className={cn("absolute inset-0 rounded-3xl blur-md", activeId.includes("shield") ? "bg-green-400/10" : "bg-white/10")}></div>
                            <div className={cn("relative flex h-full flex-col items-center justify-center", activeId.includes("shield") ? "text-green-400" : "text-slate-400")}>
                                <Icon icon="mdi:shield" className="h-8 w-8" aria-hidden="true" />
                                <span className="mt-2 text-xs font-semibold tracking-widest">SHIELD</span>
                            </div>
                        </button>

                        <button className={cn("group relative h-24 rounded-3xl bg-[#0b1020] border hover:cursor-pointer hover:scale-105 transition",
                            activeId.includes("sync") ? "border-yellow-300/70 shadow-[0_0_20px_rgba(253,224,71,0.8)]" : "border-white/10")}
                            onClick={() => toggleId("sync")}>
                            <div className={cn("absolute inset-0 rounded-3xl blur-md", activeId.includes("sync") ? "bg-yellow-300/10" : "bg-white/10")}></div>
                            <div className={cn("relative flex h-full flex-col items-center justify-center", activeId.includes("sync") ? "text-yellow-300" : "text-slate-400")}>
                                <Icon icon="mdi:signal" className="h-8 w-8" aria-hidden="true" />
                                <span className="mt-2 text-xs font-semibold tracking-widest">SYNC</span>
                            </div>
                        </button>

                        <button className={cn("group relative h-24 rounded-3xl bg-[#0b1020] border hover:cursor-pointer hover:scale-105 transition",
                            activeId.includes("power") ? "border-orange-400/70 shadow-[0_0_20px_rgba(251,146,60,0.8)]" : "border-white/10")}
                            onClick={() => toggleId("power")}>
                            <div className={cn("absolute inset-0 rounded-3xl blur-md", activeId.includes("power") ? "bg-orange-400/10" : "bg-white/10")}></div>
                            <div className={cn("relative flex h-full flex-col items-center justify-center", activeId.includes("power") ? "text-orange-400" : "text-slate-400")}>
                                <Icon icon="mdi:battery" className="h-8 w-8" aria-hidden="true" />
                                <span className="mt-2 text-xs font-semibold tracking-widest">POWER</span>
                            </div>
                        </button>

                        <button className={cn("group relative h-24 rounded-3xl bg-[#0b1020] border hover:cursor-pointer hover:scale-105 transition",
                            activeId.includes("upload") ? "border-fuchsia-500/70 shadow-[0_0_20px_rgba(217,70,239,0.8)]" : "border-white/10")}
                            onClick={() => toggleId("upload")}>
                            <div className={cn("absolute inset-0 rounded-3xl blur-md", activeId.includes("upload") ? "bg-fuchsia-500/10" : "bg-white/10")}></div>
                            <div className={cn("relative flex h-full flex-col items-center justify-center", activeId.includes("upload") ? "text-fuchsia-400" : "text-slate-400")}>
                                <Icon icon="mdi:upload" className="h-8 w-8" aria-hidden="true" />
                                <span className="mt-2 text-xs font-semibold tracking-widest">UPLOAD</span>
                            </div>
                        </button>

                        <button className={cn("group relative h-24 rounded-3xl bg-[#0b1020] border hover:cursor-pointer hover:scale-105 transition",
                            activeId.includes("config") ? "border-purple-400/70 shadow-[0_0_20px_rgba(192,132,252,0.8)]" : "border-white/10")}
                            onClick={() => toggleId("config")}>
                            <div className={cn("absolute inset-0 rounded-3xl blur-md", activeId.includes("config") ? "bg-purple-400/10" : "bg-white/10")}></div>
                            <div className={cn("relative flex h-full flex-col items-center justify-center", activeId.includes("config") ? "text-purple-400" : "text-slate-400")}>
                                <Icon icon="mdi:cog" className="h-8 w-8" aria-hidden="true" />
                                <span className="mt-2 text-xs font-semibold tracking-widest">CONFIG</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default PanelControl;