import React, { useEffect,   useState } from 'react';
import StartStop from './StartStop';
import Timer from './Timer';


const Tracker = (props) => {
    const [toggle, setToggle] = useState(false)
    const [startStop,setStartStop] = useState(false)

    let timer
    useEffect(() => {
        if (toggle) {
            console.log("out");
            // eslint-disable-next-line react-hooks/exhaustive-deps
            timer = setInterval(() => {
                props.setSeconds()
                if (props.seconds === 59) {
                    props.resetSeconds();
                    props.setMinutes()
                    if (props.minutes === 59) {
                        props.resetMinutes()
                        props.setHours()
                    }
                }
            }, 1000)

            return () => {
                clearInterval(timer)
            }
        }
    })
    


    const stop = () => {
        setToggle(false)
        startStopSetter()
    }

    const start = () => {
        setToggle(true)
        startStopSetter()
    }

    const startStopSetter = () => {
        setStartStop(!startStop)
    }

    // const secondm= useCallback(() => {
    //     return   <Timer second={seconds} heure={hours} minute={minutes} />
    // }, [seconds])
    return (

        <div >
            <div className="row " style={{ width: 300, paddingLeft: 5, height: 210, boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5) inset, -5px -5px 10px rgba(0, 0, 0, 0.5) inset, 5px 5px 5px rgba(0, 0, 0, 01), -5px -5px 5px rgba(0, 0, 0, 01)", backgroundColor: "rgba(10, 15, 20, 0.692)", display: 'flex', flexDirection: 'column' }}>
                <div style={{ alignSelf: 'start' }}>
                    <h6 className='white-text' style={{ fontWeight: "bold", }}>{props.title}</h6>
                    <h6 className='white-text' >{props.project}</h6>
                </div>

                <Timer second={props.seconds} heure={props.hours} minute={props.minutes} />
                <div id='clock' style={{ alignSelf: 'end' }}>
                    <i onClick={props.edit} className="fa-solid fa-pen-to-square blue-text"></i>
                    <i onClick={props.trash} className="fa-solid fa-trash red-text"></i>
                </div>
                <StartStop start = {start} stop={stop} on={startStop} />
            </div>
        </div>
    );
};

export default Tracker;             