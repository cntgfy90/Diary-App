import React from 'react';
import { connect } from 'react-redux';
import { removeItem, selectItem } from '../actions/items';
import { Badge, ListGroup, ListGroupItem, Button } from 'reactstrap';

const Item = ({ removeItem, selectItem, id, title, selected, comments }) => (
    <ListGroup className="Item">
        <ListGroupItem 
            onClick={() => selectItem({ id })}
            className={selected ? 'Item__text active-item' : 'Item__text'}
            >{title} <Badge className="Item__badge">{comments.length}</Badge>
        </ListGroupItem>
        <Button className="Item__btn" onClick={() => removeItem({ id })}>Delete</Button>
    </ListGroup>
);

const mapDispatchToProps = (dispatch) => ({
    removeItem: (id) => dispatch(removeItem(id)),
    selectItem: (id) => dispatch(selectItem(id))
});

export default connect(null, mapDispatchToProps)(Item);
