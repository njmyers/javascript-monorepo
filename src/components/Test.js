import React, { Component } from 'react';
import { resizeWindow } from '../utils/listen';

import Sizer from './HOC/Sizer';

import Sizes from './HOC/Sizes';
import Window from './HOC/Window';

class LoremIpsum extends Component {
	render() {
		return (
			<article className="lorem-ipsum">
				<p>{JSON.stringify(this.props.sizes)}</p>
				<p>{JSON.stringify(this.props.window)}</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse ratione amet
					recusandae, at iste provident sed ad necessitatibus neque ipsum sapiente, soluta
					temporibus molestiae architecto dignissimos accusamus eum perferendis.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse ratione amet
					recusandae, at iste provident sed ad necessitatibus neque ipsum sapiente, soluta
					temporibus molestiae architecto dignissimos accusamus eum perferendis.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse ratione amet
					recusandae, at iste provident sed ad necessitatibus neque ipsum sapiente, soluta
					temporibus molestiae architecto dignissimos accusamus eum perferendis.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse ratione amet
					recusandae, at iste provident sed ad necessitatibus neque ipsum sapiente, soluta
					temporibus molestiae architecto dignissimos accusamus eum perferendis.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse ratione amet
					recusandae, at iste provident sed ad necessitatibus neque ipsum sapiente, soluta
					temporibus molestiae architecto dignissimos accusamus eum perferendis.
				</p>
			</article>
		);
	}
}

const SizedLorem = Sizer(LoremIpsum)();

const Parent = (props) => {
	const log = (value) => console.log(value);

	return <SizedLorem cb={log} />;
};

export default Parent;
