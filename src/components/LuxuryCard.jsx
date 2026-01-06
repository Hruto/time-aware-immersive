import { motion } from 'framer-motion'


export default function LuxuryCard({ title }) {
return (
<motion.div
whileHover={{ scale: 1.05 }}
className="glass-card"
>
<h3>{title}</h3>
<p>Designed for those who value time.</p>
</motion.div>
)
}