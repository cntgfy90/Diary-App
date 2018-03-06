import React from 'react';
import { Input, Button } from 'reactstrap/dist/reactstrap.es';
import Item from './Item';

export default class Items extends React.Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.selectItem = this.selectItem.bind(this);

        this.state = {
            values: [],
            value: '',
            selected: undefined
        };
    }

    handleInput(e) {
        const value = e.target.value;
        this.setState(() => ({ value }));
    }

    addItem() {
        const { value, values } = this.state;
        if (!values.includes(value) && value) {
            this.setState((prevState) => ({
                values: [...prevState.values, value],
                value: ''
            }));
        }
    }

    removeItem(val) {
        this.setState(() => ({
            values: this.state.values.filter((value) => val !== value)
        }));
    }

    selectItem(item) {
        let current = this.state.values.filter((val) => val !== item.firstElementChild.firstElementChild.textContent);
        this.state.values.forEach((item) => {
            if (current[0] === item) {
                    this.setState(() => ({
                        selected: true
                    }))  
            }
        })
        console.log(current[0])
        
    }

    render() {
        return (
            <div className="Items">
                <h2 className="Items_title">{this.props.title}</h2>
                <div className="Items__group">
                    <Input
                        className="Items__input"
                        type="text"
                        name="text"
                        value={this.state.value}
                        placeholder="Type name here..."
                        onChange={this.handleInput}
                    />
                    <Button
                        className="Items__btn"
                        onClick={this.addItem}
                        color="secondary"
                    >
                        Add new
                    </Button>
                </div>
                <ul>
                    { 
                        this.state.values.length > 0 && 
                        this.state.values.map((value) => <Item
                                                            current={this.state.selected && 'Item__current'}
                                                            value={value}
                                                            key={value}
                                                            removeItem={(val) => this.removeItem(val)}
                                                            selectItem={(item) => this.selectItem(item)}
                                                            />)
                    }
                </ul>
            </div>
        );
    }
}