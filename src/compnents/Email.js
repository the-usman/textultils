import React from 'react'

export default function Email(props) {
    let emailtext = []
    const handleEmailExtracter = () => {
        let changed = props.text;
        let arr = changed.split(' ');

        arr.forEach((element) => {
            if (element.includes('@') && element.includes('.')) {
                let index = element.indexOf('.');
                let index1 = element.indexOf('@');

                if (
                    index + 1 < element.length && // Check if '.' is not the last character in the word
                    element[index + 1] !== ' ' && // Check if the character after '.' is not a space
                    index - 1 !== index1 && // Check if '@' is not right before '.'
                    index1 > 0 // Check if '@' is not the first character in the word
                ) {
                    emailtext.push(element)
                }
            }
        });
    }
    return (
        <div className='container2'>
            {handleEmailExtracter()}
                <div>
                    <h2>Extracted Emails:</h2>
                    <ul>
                        {emailtext.map((email, index) => (
                            <li key={index}>{email}</li>
                        ))}
                    </ul>
                </div>
        </div>
    );
}
