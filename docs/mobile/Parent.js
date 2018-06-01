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
                        <React.Fragment key={index}>
                            <h3>Callback #{index + 1}</h3>
                            <li>Am I mobile: {size.mobile.toString()}</li>
                            <li>My breakpoint is: {size.breakpoint}</li>
                        </React.Fragment>
                    );
                })}
                <Child onSize={this.onSize} />
            </div>
        );
    }
}

export default Parent;
