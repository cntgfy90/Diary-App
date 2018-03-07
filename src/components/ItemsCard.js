import React from 'react';
import ItemsList from './ItemsList';
import AddItem from './AddItem';

export default class ItemsCard extends React.Component {
    constructor(props) {
        super(props);  
    }

    render() {
        return (
            <div className="Items">
                <h2 className="Items_title">{this.props.title}</h2>
                <AddItem />
                <ItemsList />
            </div>
        );
    }
}