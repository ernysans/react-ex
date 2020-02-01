import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessageList from "./message-list";
import ChatInput from "./chat-input";

class ChatWindow extends Component {
    render() {
        const {user, messages, send} = this.props;
        const username = user.username;
        return (
            <div>
                <div className="chat-window">
                    <h2>Super Awesome Chat</h2>
                    <div className="name sender">{username}</div>
                    <MessageList messages={messages} username={username}/>
                    <ChatInput username={username} send={send}/>
                </div>
            </div>
        );
    }
}

ChatWindow.propTypes = {
    messages: PropTypes.array.isRequired,
    send: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

export default ChatWindow;
