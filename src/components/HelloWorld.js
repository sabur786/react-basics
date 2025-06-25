import React from 'react';

const HelloWorld =() =>{


    function hanleClick(){
        alert("Hello World button clicked! ");
    }

    const name = "Rizvi"

    const addition = 1 + 2;

    // const myElement = <div><h1>Hello World</h1></div>
    // return React.createElement('div', null, React.createElement('h1', null, 'Hello World'))

    return (
    <div>
        <h1 className = "title">Title</h1>
        <h2>Sub Title</h2>
        <p>My Paragraph</p>
        <p>{name}</p>
        <p>{addition}</p>
        <button onClick = {hanleClick}>Click</button>
    </div>
    )

}

export default HelloWorld