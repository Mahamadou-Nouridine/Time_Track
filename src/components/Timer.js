const Timer = (props) => {


    //start();

    return (
        <div id='clock' style={{ alignSelf: 'center' }}>
            <p onClick={props.start} className='white-text' style={{ fontWeight: "bold", fontSize: '1.5rem' }}>
                {props.heure < 10 ? `0${props.heure}` : props.heure} : {props.minute < 10 ? `0${props.minute}` : props.minute} : {props.second < 10 ? `0${props.second}` : props.second}
            </p>
        </div>
    );
};

export default Timer;