import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

export const ItemsList = ({ items }) => (
    <ul>
        {
           items.map((item) => 
                <Item
                    key={item.id}
                    {...item}
                />
            ) 
        }
    </ul>
);

const mapStateToProps = (state) => ({
    items: state.items
});

export default connect(mapStateToProps)(ItemsList);

