import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            called: 0,
            sizes: [],
        };
    }

    onSize = (sizes) => {
        this.setState({
            called: this.state.called + 1,
            sizes: [...this.state.sizes, sizes],
        });

        this.props.onSize(sizes);
    };

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <li>I can do something cool with these callbacks...</li>
                {this.state.sizes.map((size, index) => {
                    return (
                        <React.Fragment>
                            <h3>Callback #{index + 1}</h3>
                            <li>
                                My custom flag isBiggerThan1000 is:{' '}
                                {size.isBiggerThan1000.toString()}
                            </li>
                            <li>
                                My custom flag isBiggerThan1200 is:{' '}
                                {size.isBiggerThan1200.toString()}
                            </li>
                        </React.Fragment>
                    );
                })}
                <Child onSize={this.onSize} />
            </div>
        );
    }
}

export default Parent;
