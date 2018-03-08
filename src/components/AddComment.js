import React from 'react';
import { Alert, FormGroup, Media, Input, Col } from 'reactstrap';

class AddComment extends React.Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
        this.handleAdding = this.handleAdding.bind(this);

        this.state = {
            text: ''
        };
    }

    handleInput(e) {
        const text = e.target.value;
        this.setState(() => ({  text }));
    }

    handleAdding(e) {
        const { text } = this.state;
        const { addComment } = this.props;
        if (e.ctrlKey && e.keyCode == 13) {
            addComment({ text });
            this.setState(() => ({ text: '' }))
        }
    }

    render() {
        const { text } = this.state;
        return (
            <FormGroup row className="AddComment">
                <Col sm={1}>
                    <div className="square square_light"></div>
                </Col>
                <Col sm={9}>
                    <Input
                        className="AddComment__input"
                        type="textarea"
                        name="text"
                        value={text}
                        onChange={this.handleInput}
                        onKeyDown={this.handleAdding}
                        />
                </Col>
            </FormGroup>
        );
    }
}

export default AddComment;