import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {AddThoughtForm} from "./AddThoughtForm";
import {Thought} from "./Thought"
import {generateId, getNewExpirationTime} from "./utilities";
import './App.css';

export default function App() {
    const [thoughts, setThoughts] = useState(
        [
            {
                id: generateId(),
                text: 'This is a place for your passing thoughts.',
                expiresAt: getNewExpirationTime()
            },
            {
                id: generateId(),
                text: 'This is a place for your passing thoughts.',
                expiresAt: getNewExpirationTime()
            }
        ]
    )

    return (
        <div className="App">
            <header>
                <h1>Passing Thoughts</h1>
            </header>
            <main>
                <AddThoughtForm/>
                <ul className="thoughts">
                    {thoughts.map((thought) => (
                        <Thought key={thought.id} thought={thought}/>
                        )
                    )}
                </ul>
            </main>
        </div>
    );
}
