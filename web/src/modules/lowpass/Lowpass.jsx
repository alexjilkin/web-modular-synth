import React, {useState, useEffect, useRef} from 'react' 
import Knob from './ConeKnob';
import {addModule, updateArgs} from '../../output/browserPlayer'
import './Lowpass.scss';

const useLowpass = () => {
    const [frequency, setFrequency] = useState(0.2)
    const id = useRef()

    useEffect(() => {
        id.current = addModule('lowpass', 'transform', {frequency})
    }, [])

    useEffect(() => {
        updateArgs(id.current, {frequency})
    }, [frequency])

    return {frequency, setFrequency}
}
const Lowpass = () => { 
    const {frequency, setFrequency} = useLowpass()

    return (
        <div styleName="container">
            <div styleName="title"> Lowpass  </div>
            <Knob onChange={setFrequency} min={0.1} max={1} value={frequency} color="orange" />
        </div>
    )
}

export default Lowpass