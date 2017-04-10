export function addItem (itemValue) {
	return (dispatch, getState) => {
		const { list } = getState();
		let item = {
			id: Date.now(),
			value: itemValue
		}

		dispatch({
			type: 'ADD_ITEM',
			payload: {
				item
			}
		});
	};
}

export function removeItem (itemId) {
	return (dispatch, getState) => {
		dispatch({
			type: 'REMOVE_ITEM',
			payload: {
				itemId
			}
		});
	};
}
