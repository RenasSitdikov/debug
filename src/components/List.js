import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Timer from '../components/Timer';

const List = () => {
    const [timers, setTimers] = useState([]);

    function addTimer() {
        const addedTimers = [...timers];
        addedTimers.push({
            onEnd: (index) => {
                const removedTimers = [...timers];
                removedTimers.splice(index, 1);
                setTimers(removedTimers);
            },
            timer: 5,
            index: timers.length,
        });
        setTimers(addedTimers);
    }

    return (
        <>
            <Button variant="contained" onClick={addTimer}>Add</Button>
            {timers.map((timerProps, index) => <Timer key={index} { ...timerProps }/>)}
        </>
    );
};

export default List;
