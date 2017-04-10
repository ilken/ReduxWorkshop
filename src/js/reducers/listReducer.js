const defaultListReducerState = {
	items: [
		{id:1491856039549, value: 'Guitar'},
		{id:1491856039550, value: 'Piano'},
		{id:1491856039551, value: 'Viola'},
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
