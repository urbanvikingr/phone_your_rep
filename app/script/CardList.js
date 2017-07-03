import React from 'react';
import Card from './Card';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

export default class CardList extends React.Component {
	render() {
    history.push({
      search: "?reps=" + this.props.data.reps.map((rep) => {
        return rep.official_id
      }).join()
    });

    var cards = this.props.data.reps.map((contact,i ) => {
			return (
				<Card
				key={i}
				wait={250*i}
				contact={contact}
				cardId={i}
				/>
			);
		});

		return (
			<div className="row card-list">
				{cards}
			</div>
		);
	}
}
