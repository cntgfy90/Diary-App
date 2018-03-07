import React from 'react';
import { connect } from 'react-redux';
import { removeItem, selectItem } from '../actions/items';
import { Badge, ListGroup, ListGroupItem, Button } from 'reactstrap';

// export const Item = ({ id, removeItem, title, selected, selectItem }) => (
//     <li className={selected ? 'Item Item_selected' : 'Item'} onClick={() => selectItem({ id })}>
//         <span className="Item__text">
//             <span>{title}</span>
//             <Badge className="Item__badge" color="secondary">137</Badge>
//         </span>
//         <button className="Item__btn" onClick={() => removeItem({ id })}>
//             Delete
//         </button>
//     </li>
// );

export const Item = ({ removeItem, selectItem, id, title, selected }) => (
    <ListGroup className="Item">
        <ListGroupItem  onClick={() => selectItem({ id })} className="Item__text justify-content-between">{title} <Badge className="Item__badge">14</Badge></ListGroupItem>
        <Button className="Item__btn" onClick={() => removeItem({ id })}>Delete</Button>
    </ListGroup>
);

const mapDispatchToProps = (dispatch) => ({
    removeItem: (id) => dispatch(removeItem(id)),
    selectItem: (id) => dispatch(selectItem(id))
})

export default connect(null, mapDispatchToProps)(Item);