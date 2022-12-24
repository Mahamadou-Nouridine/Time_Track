import React, { useState } from 'react';
import Tracker from './Tracker';
import { v4 } from 'uuid';
import Editor from './Editor';

const AppTrack = () => {
    const [tracker, setTracker] = useState([])
    const [title, setTitle] = useState("")
    const [project, setProject] = useState("")
    const [newTracker, setNewTracker] = useState(false)
    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const onProjectChange = (event) => {
        setProject(event.target.value)
    }

    const create = () => {
        if (project && title) {
            let newArr = [...tracker, {
                title,
                project,
                id: v4(),
                update: true,
                seconds: 0,
                minutes: 0,
                hours: 0,
            }]
            setTracker(newArr)
            setTitle("")
            setProject("")
            setNewTracker(false)
        }
        // setNewTracker(!newTracker)
    }

    const trash = (id) => {
        let newArr = [...tracker].filter(item => item.id !== id)
        setTracker(newArr)
    }

    const edit = (id) => {
        const newArr = [...tracker]
        // eslint-disable-next-line array-callback-return
        newArr.map((item) => {
            if (item.id === id) {
                item.update = false
                setTitle(item.title)
                setProject(item.project)
            }
        })
        setTracker(newArr)
    }

    const update = (id) => {
        const newArr = [...tracker]
        // eslint-disable-next-line array-callback-return
        if (project && title) {
            newArr.map(item => {
                if (item.id === id) {
                    item.title = title
                    item.project = project
                    item.update = true
                }
            })
            setTracker(newArr)
        }
    }

    const cancel2 = (id) => {
        let newArr = [...tracker]
        // eslint-disable-next-line array-callback-return
        newArr.map(item => {
            if (item.id === id) {
                item.update = true
            }
        })
        setTracker(newArr)
    }

    const setSeconds = (id) => {
        let newArr = [...tracker]
        newArr.map(item => {
            if (item.id === id) {
                item.seconds++
            }
        })
        setTracker(newArr)
    }

    const resetSeconds = (id) => {
        let newArr = [...tracker]
        newArr.map(item => {
            if (item.id === id) {
                item.seconds = 0
            }
        })
        setTracker(newArr)
    }

    const setMinutes = (id) => {
        let newArr = [...tracker]
        newArr.map(item => {
            if (item.id === id) {
                item.minutes++
            }
        })
        setTracker(newArr)
    }

    const resetMinutes = (id) => {
        let newArr = [...tracker]
        newArr.forEach(item => {
            if (item.id === id) {
                item.minutes = 0
            }
        })
        setTracker(newArr)
    }

    const sethours = (id) => {
        let newArr = [...tracker]
        newArr.forEach(item => {
            if (item.id === id) {
                item.hours++
            }
        })
        setTracker(newArr)
    }


    return (
        <div >
            {tracker.map((item, index) => item.update ?
                <Tracker
                    key={item.id}
                    edit={() => edit(item.id)}
                    trash={() => trash(item.id)}
                    title={item.title}
                    project={item.project}
                    setSeconds={() => setSeconds(item.id)}
                    setMinutes={() => setMinutes(item.id)}
                    resetSeconds={() => resetSeconds(item.id)}
                    resetMinutes={() => resetMinutes(item.id)}
                    sethours={() => sethours(item.id)}
                    minutes={item.minutes}
                    seconds={item.seconds}
                    hours={item.hours}
                /> :
                <Editor
                    updateState={false}
                    key={item.id}
                    update={() => update(item.id)}
                    title={title}
                    onTitleChange={onTitleChange}
                    project={project}
                    onProjectChange={onProjectChange}
                    create={create}
                    cancel={() =>
                        cancel2(item.id)} />)}
            {newTracker && <Editor updateState={true} title={title} onTitleChange={onTitleChange} project={project} onProjectChange={onProjectChange} create={create} cancel={() => setNewTracker(false)} />}
            {!newTracker && <button onClick={() => { setNewTracker(true); setTitle(""); setProject("") }} className='btn'><i className="fa-solid fa-plus"></i></button>}
        </div>
    );
};

export default AppTrack;