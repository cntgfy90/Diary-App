import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/items';
import { Button } from 'reactstrap/dist/reactstrap.es';


class AddItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleAdding = this.handleAdding.bind(this);
        this.handleInput = this.handleInput.bind(this);

        this.state = {
            title: '',
            error: ''
        };
    }

    handleAdding() {
        const { title } = this.state;
        const { addItem } = this.props;
        if (!title) {
            this.setState(() => ({ error: 'Please, provide some information!' }));
        } else {
            addItem({ title });
            this.setState(() => ({ error: '', title: '' }));
        }

    }

    handleInput(e) {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }

    render() {
        const { title, error } = this.state;
        return (
            <div className="Items__group">
                <input
                    className="Items__input form-control"
                    type="text"
                    name="text"
                    value={title}
                    placeholder="Type name here..."
                    onChange={this.handleInput}
                />
                <Button
                    className="Items__btn"
                    onClick={this.handleAdding}
                    color="secondary"
                >
                    Add new
                </Button>
                {
                    error &&
                    <div className="alert alert-warning Items__alert" role="alert">
                        Please, provide some information!
                    </div>
                }
            </div>
        );
    } 
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (title) => dispatch(addItem(title))
});

export default AddItem = connect(null, mapDispatchToProps)(AddItem);