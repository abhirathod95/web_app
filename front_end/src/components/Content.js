import React from 'react';
import { Switch, Route } from 'react-router-dom'

export default class Content extends React.Component {
	render() {
		var pageRoutes = this.props.pages.map(function(page){
			return <Route key={page.name} exact path={page.url} component={page.component}/>
    })

		return (
			<div>
				<Switch>
					{pageRoutes}
				</Switch>
			</div>
		);
	}
}