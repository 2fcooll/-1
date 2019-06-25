export function itemsAreLoading(state = false, action) {
    switch(action.type) {
        case 'ITEMS_ARE_LOADING': 
            return action.boolean;

        default: 
            return state;
    }
}

export function itemsLoadingError(state = false, action) {
    switch(action.type) {
        case 'ITEMS_LOADING_ERROR':
            return action.boolean;

        default:
            return state;
    }
}

export function itemsLoadedSuccessfully(state = [], action) {
    switch(action.type) {
        case 'ITEMS_LOADING_SUCCESSFULLY':
            return action.items;

        default:
            return state;
    }
}

