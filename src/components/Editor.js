import React from 'react';

const Editor = (props) => {
    return (    
        <div className="row " style={{ width: 300, paddingLeft: 5, height: 210, boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5) inset, -5px -5px 10px rgba(0, 0, 0, 0.5) inset, 5px 5px 5px rgba(0, 0, 0, 01), -5px -5px 5px rgba(0, 0, 0, 01)", backgroundColor: "rgba(10, 15, 20, 0.692)", display: 'flex', flexDirection: 'column' }}>
                <h6 style={{ alignSelf: 'start' }} className='white-text' >Title</h6>
                <input onChange={props.onTitleChange} className='white' type="text" value={props.title} />
                <h6 style={{ alignSelf: 'start' }} className='white-text' >Project</h6>
                <input onChange={props.onProjectChange} className='white' type="text" value={props.project} />
                <div style={{ display: "flex" }}>
                    {props.updateState ?
                     <button onClick={props.create} style={{ width: "50%" }} className="btn green">Create</button> :
                     <button onClick={props.update} style={{ width: "50%" }} className="btn green">Update</button>}
                    <button onClick={props.cancel}  style={{ width: "50%" }} className="btn red">Cancel</button>
                </div>
            </div>
    );
};

export default Editor;