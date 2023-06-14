import React, { useState, useEffect } from 'react';

const items =[
    {id: 1, name: "aungpor"},
    {id: 2, name: "ryu"}
]

// const items =[
//     "aungpor",
//     "ryu"
// ]

function Example() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('Hi there, How are you?');
    const [dateTime, setDateTime] = useState(new Date());
    const [arrayTest, setArrayTest] = useState([])

    useEffect(() => {
        if(count === 0){
            document.title = `plase click me`;
        }else{
            document.title = `You clicked ${count} times`;
        }
        
    });

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    useEffect(() => {
        test()
        testTwo()
    },[])

    const test = () => {
        //console.log('trigger use effect now')
        console.log('this is test')

        setTimeout(() => {
            setMessage("I'm fine ,thanks for asking.")
        }, 1000)
    }

    const testTwo = () => {
        const dataArray = ["one", "two"]
        setArrayTest(prevState => [...prevState, ...dataArray])
        console.log(arrayTest)
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <h1>{message}</h1>
            <ul>{items.map(item => <li key={item.id}>id {item.id} = {item.name}</li> )}</ul>
            <h4>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</h4>
            <h4>{dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}</h4>

            <button onClick={testTwo}>
                Test array
            </button>
            <h1>{arrayTest}</h1>
        </div>
    );




}

export default Example