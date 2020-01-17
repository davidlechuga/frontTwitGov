import React, { Component, Fragment } from 'react';
import './styles/Badges.css';
import { Link } from 'react-router-dom';

import BadgesList from '../components/BadgeList';
import DB from '../data.json';


class Badges extends Component {
	state = {
		datos: DB.datos
	};

	render() {
		return (
			<Fragment>
				<div className="Badges">
					<div className="Badges__heroo">
						<div className="Badges__container">
							<h1 className="title_one"> TwitGov Dentro Del Gobierno </h1>
						</div>
					</div>
				</div>

				<div className="Badge__container">
					<div className="Badges__buttons">
						<Link to="/" className="btn btn-primary">
							{' '}
							NEX PAGE >
						</Link>
					</div>
				</div>

				<div className="Badges__list">
					<div className="BadgesList__container">
						<BadgesList datos={this.state.datos} />
					</div>
				</div>

			</Fragment>
		);
	}
}

export default Badges;
