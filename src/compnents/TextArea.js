import React, { useState } from 'react';
import FindComponent from './Find'
import EmailComponent from './Email'



export default function Input(props) {
    const [text, setText] = useState("");
    const [find1, setfind] = useState(false);
    const [email, setemail] = useState(false);
    const handleOnChange = (event) => {
        setText(event.target.value)
        setText(event.target.value)
    }
    const handleUperCase = () => {
        props.showAlert("Task Completed", "success");
        setemail(false);
        let myInput = document.getElementById('input1');
        let changed = myInput.value;
        let changed2 = changed.toUpperCase();
        setText(changed2);
        myInput.value = changed2; 
    };
    const handleLowerCase = () => {
        let myInput = document.getElementById('input1')
        let changed = myInput.value;
        let changed2 = changed.toLowerCase();
        setText(changed2)
        setemail(false)
        myInput.value = changed2; 
        props.showAlert("Task Completed", "success")
    }
    const handleClear = () => {
        let myInput = document.getElementById('input1')
        myInput.value = ""
        setText("")
        props.showAlert("Task Completed", "success")
    }
    const handleFindWord = () => {
        setemail(false)
        setfind(true)
        let btn = document.createElement('button')
        btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        btn.className = "crossBtn"
        document.getElementsByClassName('container')[0].append(btn);
        btn.onclick = () => {
            btn.remove();
            setfind(false)

        }
        props.showAlert("Task Completed", "success")
    }
    const handleReplace = () => {
        setemail(false)
        let myInput = document.getElementById('input1');
        let changed = myInput.value;
        let arr = changed.split(' ');

        let input = document.createElement('input');
        input.className = 'textInput1';
        input.placeholder = 'Enter the word replaced';


        let input1 = document.createElement('input');
        input1.className = 'textInput1';
        input1.placeholder = "Enter word which is to replaced"

        let apply = document.createElement('button');
        apply.className = 'btn btn-outline-primary';
        apply.innerText = 'Apply';

        document.getElementsByClassName('container')[0].append(input1, input, apply);

        apply.onclick = () => {
            let replace = input1.value;
            let refWord = input.value;
            let replacedArr = arr.map((element) => (element === replace ? refWord : element));

            let changed2 = replacedArr.join(' ');
            setText(changed2);
            myInput.value = changed2;
            input.remove();
            input1.remove();
            apply.remove();
        };
        props.showAlert("Task Completed", "success")
    };
    const handleDelete = () => {
        setemail(false)
        let myInput = document.getElementById('input1');
        let changed = myInput.value;
        let arr = changed.split(' ');

        let input1 = document.createElement('input');
        input1.className = 'textInput1';
        input1.placeholder = "Enter word which is to Delete"

        let apply = document.createElement('button');
        apply.className = 'btn btn-outline-primary';
        apply.innerText = 'Apply';

        document.getElementsByClassName('container')[0].append(input1, apply);

        apply.onclick = () => {
            let replace = input1.value;
            let replacedArr = arr.filter((element) => element !== replace);

            let changed2 = replacedArr.join(' ');
            setText(changed2);
            myInput.value = changed2;
            input1.remove();
            apply.remove();
        };
        props.showAlert("Task Completed", "success")
    };

    const handleEmailExtracter = () => {
        setemail(true)
        props.showAlert("Task Completed", "success")
    }
    return (

        <div>
            <div className="container">
                <h1>
                    {props.handing}
                </h1>
                <div className="form-floating">
                    <textarea className="input" placeholder="Enter Your Text" onChange={handleOnChange} id="input1" rows={8} style={props.mode === 'dark' ? props.textAreaStyling : null}></textarea>
                </div>
                <div className="inline">
                    <button type="button" disabled={text.length === 0} className="btn btn-outline-primary my-3 mx-2" onClick={handleDelete}>Delete words</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-outline-secondary my-3 mx-2" onClick={handleReplace}>Replace words</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-outline-primary my-3 mx-2" onClick={handleFindWord}>Find words</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-outline-primary my-3 mx-2" onClick={handleEmailExtracter}>email words</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-outline-warning my-3 mx-3" onClick={handleUperCase}>Convert to Upper Case</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-outline-info my-3 mx-2" onClick={handleLowerCase}>Convert To Lower</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-outline-info my-3 mx-2" onClick={handleClear}>Clear Text</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-outline-secondary my-3 mx-2" onClick={()=> {
                                props.showAlert("Task Completed", "success");
                                setemail(false);
                                let myInput = document.getElementById('input1');
                                let changed = myInput.value;
                                let arr = changed.split(" ").filter((element) => {return element.length !== 0})
                                let changed2 = arr.join(" ");
                                setText(changed2);
                                myInput.value = changed2;
                    }}>Clear Extra Spaces</button>
                </div>
            </div>
            {find1 ? <FindComponent text={text} /> : null}
            {email ? <EmailComponent text={text} /> : null}
            <div className="container my-2">
                <h1>Your Text Details</h1>
                <table className={`table text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Properties</th>
                            <th scope="col">Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Words</td>
                            <td>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length }</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Characters</td>
                            <td>{text.length}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Number of Minutes to read</td>
                            <td>{(text.split(/\s+/).filter((element) => {return element.length !== 0}).length * 0.012)}</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Preview</h2>
                {<p>{text}</p>}
            </div>
        </div>
    );
}
