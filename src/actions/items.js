import axios from 'axios';

function itemsAreLoading(boolean) {
    return {
        type: 'ITEMS_ARE_LOADING',
        boolean
    };
}

function itemsLoadingError(boolean) {
    return {
        type: 'ITEMS_LOADING_ERROR',
        boolean
    };
}

function itemsLoadingSuccessfully(items) {
    return {
        type: 'ITEMS_LOADING_SUCCESSFULLY',
        items
    };
}

export function loadingItems(url) {
    return dispatch => {
        dispatch(itemsAreLoading(true));

        axios.get(url).then(
            ({ data }) => {
                dispatch(itemsAreLoading(false));
                dispatch(itemsLoadingSuccessfully(data));
            },
            () => itemsLoadingError(true)
        )
    }
}