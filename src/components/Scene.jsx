import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const ref = useRef();

  useEffect(() => {
    gsap.to(ref.current, {
      scale: 1.4,
      rotate: 5,
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={ref} className="scene">
      <h2>Scroll-Driven Storytelling</h2>
      <p>Motion reacts smoothly to your scroll.</p>
    </section>
  );
}
