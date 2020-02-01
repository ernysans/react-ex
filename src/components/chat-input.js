import React from 'react';
import PropTypes from 'prop-types';


class ChatInput extends React.Component {
    state = {
        text: "",
    };

    /*
    If the username did not type anything, he/she should not be
    allowed to submit.
    */
    isDisabled = () => {
        return this.state.text.length === 0;
    };

    textChange = (text = "") => {
        this.setState({
            text: text,
        });
    };

    send = (event) => {
        event.preventDefault();
        this.props.send({username: this.props.username, text: this.state.text});
        this.textChange();
    };

    render() {
        const {text} = this.state;
        return (
            <div>
                <form className="input-group">
                    <input type="text"
                           className="form-control"
                           placeholder="Enter your message..."
                           onChange={(event => this.textChange(event.target.value))}
                           value={text}
                    />
                    <div className="input-group-append">
                        <button className="btn submit-button" onClick={this.send} disabled={this.isDisabled()}>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

ChatInput.propTypes = {
    username: PropTypes.string.isRequired,
    send: PropTypes.func.isRequired,
};

export default ChatInput;
