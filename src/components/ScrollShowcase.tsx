import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)


export default function ScrollShowcase() {
const sectionRef = useRef<HTMLDivElement>(null)


useEffect(() => {
const ctx = gsap.context(() => {
gsap.from(".luxury-text", {
y: 80,
opacity: 0,
stagger: 0.3,
duration: 1.2,
ease: "power4.out",
scrollTrigger: {
trigger: sectionRef.current,
start: "top center",
end: "+=300",
scrub: true,
pin: true
}
})
}, sectionRef)


return () => ctx.revert()
}, [])


return (
<section ref={sectionRef} className="h-screen flex items-center justify-center bg-black text-white">
<div className="space-y-6 text-center">
<h2 className="luxury-text text-5xl font-semibold">AURELION CHRONOS</h2>
<p className="luxury-text text-lg opacity-70">Time reacts. So should design.</p>
</div>
</section>
)
}