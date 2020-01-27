import React from 'react';
import Button from 'react-bootstrap/Button';

const MyComponent = (props) => {
    return <div>
        <h1>{props.stuff}</h1>
        <Button variant="primary">DAMMIT</Button>
    </div>
}

export default MyComponent;