import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Size from 'react-size-components';

class Main extends Component {
	render() {
		const minHeight = `calc(101vh - ${this.props.headerSize.height +
			this.props.footerSize.height}px)`;

		const style = {
			minHeight,
		};

		return (
			<main style={style} className="main">
				<MyRoutes pages={this.props.pages} />
			</main>
		);
	}
}

function MyRoutes(props) {
	const routes = props.pages.map((each) => {
		const path = `/${each.slug}`;
		if (each.exact)
			return <Route key={each.slug} exact path={path} component={each.component} />;
		else return <Route key={each.slug} path={path} component={each.component} />;
	});

	return (
		<section className="main__content">
			<Switch>{routes}</Switch>
		</section>
	);
}

export default Size({ mobile: true })(Main);
