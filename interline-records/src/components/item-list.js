import React, {Component} from 'react';
import SingleItem from './single-item';
import CheckOutMore from './check-out-more';

class ItemList extends Component {

	sortItemsByDate(items){
		if (items.length > 0) {
			return items.sort(function(a,b){
				a = new Date(a.release_date);
				b = new Date(b.release_date);
				return b - a; 
			})
		} else {
			return items;
		}
	}

	numberOfItems(number, items){
		return items.slice(0, number);
	}

	render(){
		var count = 0;
		var {artist, item, itemType, items} = this.props
		var checkOutMoreType = items.length < 1 ? 'nothing' : itemType;
		items = this.sortItemsByDate(items);
		items = this.numberOfItems(3, items);

		return(
			<div>
				<h3 className="albums"><span className="title">{itemType.toUpperCase()} </span></h3>
				{items.map( (item) => 
					<SingleItem item={item} itemType={itemType} key={count += 1}/>
				)}
				<CheckOutMore artist={artist} type={checkOutMoreType} />
			</div>
		);
	}
}

export default ItemList