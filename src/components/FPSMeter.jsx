import useFPS from '../hooks/useFPS'


export default function FPSMeter() {
const fps = useFPS()
return <div className="fps">FPS: {fps}</div>
}