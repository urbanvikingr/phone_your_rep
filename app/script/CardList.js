import React from 'react';
import Card from './Card';

export default class CardList extends React.Component {
	render() {
    if (this.props.data.reps) {
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
    }else if (this.props.data && !this.props.data.error){
      var cards = [
        <Card
        key={0}
        wait={0}
        contact={this.props.data}
        cardId={0}
        />
      ]
    }

		return (
			<div className="row card-list">
				{cards}
			</div>
		);
	}
}
