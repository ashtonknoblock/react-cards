import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

const Card = (props) => (
<div className="card cardGroup__card">
    <div className="card__description cardGroup__cardDescription">
        <div className={`icon fa ${props.icon} card__descriptionIcon`} />
        <div className="card__descriptionText">{props.description}
{props.hint && <p> ({props.hint})</p>}
        </div>
    </div>
    <div className="card__price">{props.price}</div>
</div>
);

const App = () => (
        <CardGroup >
                <Card description="Trial" hint="" icon="fa-thumbs-o-up" price="FREE!!"/>
                <Card description="Basic" hint="most popular" icon="fa-trophy" price="$10,000"/>
                <Card description="Advanced" hint="Only for enterprise level professionals" icon="fa-bolt" price="$500,000"/>
        </CardGroup>
);

export default App;
