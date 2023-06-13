import React, { useEffect, useState } from 'react'
import Welcome from './childComponentTwo/Greeting'
import Button from './childComponentTwo/Button'

const PropTwo = () => {
    const [greeting, setGreeting] = useState("Welcome to aungpor world")
    const [isShow, setShow] = useState(true)
    const [dateTime, setDateTime] = useState(new Date());

    const handleToggle = () => {
        setShow(!isShow)
    }

    // useEffect(() => {
    //     setGreeting(greeting)
    // },[greeting])

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <div>
            <Button Label={"Toggle"} onClick={handleToggle}/>
            <input type="text" value={greeting} onChange={(e) => setGreeting(e.target.value)} />
            {isShow ? <Welcome text={greeting} /> : null}
            <h4>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</h4>
        </div>

    )
}

export default PropTwo