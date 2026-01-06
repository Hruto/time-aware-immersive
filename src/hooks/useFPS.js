import { useEffect, useState } from 'react'


export default function useFPS() {
const [fps, setFPS] = useState(0)


useEffect(() => {
let last = performance.now()
let frame = 0


function loop(now) {
frame++
if (now > last + 1000) {
setFPS(frame)
frame = 0
last = now
}
requestAnimationFrame(loop)
}


requestAnimationFrame(loop)
}, [])


return fps
}