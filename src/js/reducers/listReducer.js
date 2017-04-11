const defaultListReducerState = {
	items: [
		{id:1491856039549, value: 'Guitar', gif: 'http://media1.giphy.com/media/1RxlWYJ5hMYbS/200.gif'},
		{id:1491856039550, value: 'Piano', gif: 'http://media2.giphy.com/media/8nhgZZMKUicpi/giphy.gif'},
		{id:1491856039551, value: 'Viola', gif: 'http://media2.giphy.com/media/12D1TEPuOAdMzK/200.gif'}
	]
};

export default function reducer (state = defaultListReducerState, action) {
	switch (action.type) {
		case 'ADD_ITEM': {
			return {
				...state,
				items: state.items.concat(action.payload.item)
			};
		}
		case 'REMOVE_ITEM': {
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload.itemId)
			};
		}
	}

	return state;
}
