import {useEffect} from 'react'
import moleImg from '/Users/sarahwiedrich/Desktop/WISC-SD-04/react_a_mole/src/mole.png'

const Mole = (props) => {

        useEffect(() => {
            let randSeconds = Math.ceil(Math.random() * 10000)
            let timer = setTimeout(() => {
                props.toggle(false)
            }, randSeconds)
            return () => clearTimeout(timer)
        })
        
        return (
         <div>
            <img style={{'width': '30vw'}} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

export default Mole