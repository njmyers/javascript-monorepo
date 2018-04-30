import React, { Component } from 'react';
import Size from '../src';

const LoremIpsum = ({ sizes } = {}) => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem illum sapiente ex
                autem, excepturi provident. Harum esse, laborum eligendi totam veritatis ab aperiam,
                laboriosam odit nostrum ducimus ipsum amet a?
            </p>
            <p>{JSON.stringify(sizes)}</p>
        </React.Fragment>
    );
};

const SizedLorem = Size({ component: true, mobile: true, orientation: true, inView: true })(
    LoremIpsum
);

class Page extends Component {
    render() {
        return (
            <React.Fragment>
                <SizedLorem />
            </React.Fragment>
        );
    }
}

export default Page;
