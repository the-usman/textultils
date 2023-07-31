import React, { useState } from 'react'

export default function Find(props) {
    const [found, setFound] = useState(false)
    const handlethis = () => {
        const element = document.querySelector('.ok');
if (element) {
    element.remove();
}
        let textInput = document.getElementsByClassName('textInput')[0];
        let arr = props.text.split(" ");
        let refWord = textInput.value;
        let thiscontainer = document.createElement('div');
        thiscontainer.className = "ok"
        arr.forEach(element => {
            let span = document.createElement('span')
            span.innerText = element + " "
            span.className = "span"
            element === refWord ? span.style.backgroundColor = "yellow" : span.style.backgroundColor = "transparent"
            thiscontainer.append(span)
        });
        document.getElementsByClassName('container1')[0].append(thiscontainer);
    }
    return (
        <div>
            <div className="container1">
                <input type="text" name="" className="textInput" />
                <br />
                <button type="button" className="btn btn-outline-primary" onClick={handlethis}>search</button>

            </div>
        </div>
    )
}
