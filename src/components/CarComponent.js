import React, {Component} from 'react';

class CarComponent extends Component {


    render() {
        let {item} = this.props
        return (
            <div>
                <div>{item.model}-{item.yearOfIssue}-{item.powerful}-{item.colour}</div>
            </div>
        );
    }
}

export default CarComponent;