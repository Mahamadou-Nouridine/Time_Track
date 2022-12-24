import React from 'react';

const StartStop = (props) => {
    return ( props.on ? 
        (<button onClick={props.stop} className='btn red' id='clock' style={{ alignSelf: 'center', width: "100%", height:50 }}>
            <h5 className='white-text'>stop</h5>
        </button>) :
        (<button onClick={props.start}  className='btn' id='clock' style={{ alignSelf: 'center', width: "100%", backgroundColor: 'green', height:50 }}>
            <h5 className='white-text'>start</h5>
        </button> )
    );
};

export default StartStop;