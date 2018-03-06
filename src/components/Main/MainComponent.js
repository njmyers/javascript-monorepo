import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import sizeMe from '../../utils/size-me';
import debounce from 'lodash.debounce';

class Main extends Component {
	constructor(props) {
		super(props);
		this.handleUpdate = debounce(this.handleUpdate.bind(this), 50);
	}

	handleUpdate() {
		this.props.updateContentSize(this.props.size);
	}

	componentDidUpdate() {
		this.handleUpdate();
	}

	render() {
		const marginTop = this.props.isMobile ? `${this.props.headerSize.height}px` : '0px';
		const minHeight = `calc(101vh - ${this.props.headerSize.height +
			this.props.footerSize.height}px)`;

		const style = {
			marginTop,
			minHeight,
		};

		return (
			<div style={style} className="content">
				<MyRoutes pages={this.props.pages} />
			</div>
		);
	}
}

export default sizeMe(Main);

function MyRoutes(props) {
	const routes = props.pages.map((each) => {
		const path = `/${each.slug}`;
		if (each.exact)
			return <Route key={each.slug} exact path={path} component={each.component} />;
		else return <Route key={each.slug} path={path} component={each.component} />;
	});

	return (
		<main className="main">
			<Switch>{routes}</Switch>
		</main>
	);
}
