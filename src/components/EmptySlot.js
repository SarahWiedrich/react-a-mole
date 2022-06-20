import { useEffect } from "react"
import MoleHill from '/Users/sarahwiedrich/Desktop/WISC-SD-04/react_a_mole/src/mole.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} />
        </div>
    )

}

export default EmptySlot