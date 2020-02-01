import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from "./components/chat-window";

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/


class App extends Component {

    state = {
        users: [{username: 'Amy'}, {username: 'John'}],
        messages: [],
    };

    send = (message) => {
        this.setState((currentState) => ({
            messages: currentState.messages.concat([message])
        }));
    };

    render() {
        const {users, messages} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    <ChatWindow user={users[0]} messages={messages} send={this.send}/>
                    <ChatWindow user={users[1]} messages={messages} send={this.send}/>
                </div>
            </div>
        );
    }
}

export default App;
