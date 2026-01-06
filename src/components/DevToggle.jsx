import { useEffect, useState } from 'react'


export default function DevToggle() {
const [show, setShow] = useState(false)


useEffect(() => {
const handler = e => {
if (e.shiftKey && e.key === 'D') setShow(s => !s)
}
window.addEventListener('keydown', handler)
return () => window.removeEventListener('keydown', handler)
}, [])


if (!show) return null
return <div className="dev-panel">Developer Mode</div>
}