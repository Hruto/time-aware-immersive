import { motion } from 'framer-motion'
import LuxuryCard from './components/LuxuryCard'
import TimeIndicator from './components/TimeIndicator'
import DevToggle from './components/DevToggle'
import FPSMeter from './components/FPSMeter'
import useTimeTheme from './hooks/useTimeTheme'


export default function App() {
const theme = useTimeTheme()


return (
<div className={`app theme-${theme}`}>
<TimeIndicator theme={theme} />
<DevToggle />
<FPSMeter />


<motion.section
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1.5 }}
className="hero"
>
<h1>AURELION</h1>
<p>Luxury that adapts to time</p>
</motion.section>


<section className="showcase">
<LuxuryCard title="Craftsmanship" />
<LuxuryCard title="Timeless Design" />
<LuxuryCard title="Precision Engineering" />
</section>
</div>
)
}