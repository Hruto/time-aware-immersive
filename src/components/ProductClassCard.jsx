import { motion } from "framer-motion"


export default function ProductGlassCard({ label }: { label: string }) {
return (
<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1.2 }}
className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl max-w-md"
>
<h3 className="text-2xl font-medium mb-2">{label}</h3>
<p className="text-sm opacity-70">Swiss movement · Sapphire glass · Time-aware experience</p>
</motion.div>
)
}