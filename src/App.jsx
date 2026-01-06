import { useEffect } from "react";
import { useTimeOfDay } from "./hooks/useTimeOfDay";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

import Hero from "./components/Hero";
import Scene from "./components/Scene";
import TimeIndicator from "./components/TimeIndicator";
import DevFPS from "./components/DevFPS";

export default function App() {
  const time = useTimeOfDay();
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    document.documentElement.dataset.theme = time;

    if (reduceMotion) {
      document.documentElement.style.setProperty("--motion-multiplier", "0");
    }
  }, [time, reduceMotion]);

  return (
    <>
      <TimeIndicator time={time} />
      <Hero time={time} />
      <Scene />
      <DevFPS />
    </>
  );
}
