import { useEffect, useState } from "react";

export default function DevFPS() {
  const [fps, setFps] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let last = performance.now();
    let frames = 0;

    function loop(now) {
      frames++;
      if (now >= last + 1000) {
        setFps(frames);
        frames = 0;
        last = now;
      }
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    const toggle = (e) => {
      if (e.ctrlKey && e.key === "d") {
        setVisible((v) => !v);
      }
    };

    window.addEventListener("keydown", toggle);
    return () => window.removeEventListener("keydown", toggle);
  }, []);

  if (!visible) return null;

  return <div className="fps">FPS: {fps}</div>;
}
