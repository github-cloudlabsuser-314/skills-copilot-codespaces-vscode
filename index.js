import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

const reversedSentence = markdown.split(' ').reverse().join(' ');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
console.log(capitalizedSentence);

const data = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Bob' }
];

const names = data.map(item => item.name);
console.log(names);

const nestedData = [
    [{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }],
    [{ name: 'Alice' }, { name: 'Eve' }, { name: 'Charlie' }]
];

const names = nestedData.flatMap(array => array.map(item => item.name));
console.log(names);