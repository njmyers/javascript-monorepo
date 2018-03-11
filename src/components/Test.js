import React, { Component } from 'react';

import Size from 'react-size-components';

class LoremIpsum extends Component {
	render() {
		const text = JSON.stringify(this.props.sizes, null, 4);
		return (
			<article className="lorem-ipsum">
				<p>{text}</p>
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

const SizedLorem = Size({
	minMaxHeight: true,
})(LoremIpsum);

const Parent = (props) => {
	const log = (sizes) => console.log(sizes);

	return (
		<React.Fragment>
			<SizedLorem cb={log} id={5} />;
			<LoremIpsum />
		</React.Fragment>
	);
};

export default Parent;
