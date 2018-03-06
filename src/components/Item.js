import React from 'react';
import { Badge } from 'reactstrap';

const Item = (props) => (
    <li className={props.current ? 'Item Item__current' : 'Item'} onClick={(e) => e.target && props.selectItem(e.target)}>
        <span className="Item__text">
            <span>{props.value}</span>
            <Badge className="Item__badge" color="secondary">137</Badge>
        </span>
        <button className="Item__btn" onClick={(e) => props.removeItem(e.target.previousElementSibling.firstElementChild.textContent)}>
            Delete
        </button>
    </li>
);

export default Item;