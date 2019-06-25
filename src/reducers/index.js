import { combineReducers } from 'redux';
import { itemsAreLoading, itemsLoadingError, itemsLoadedSuccessfully } from './items';

export default combineReducers({
    itemsAreLoading,
    itemsLoadingError,
    itemsLoadedSuccessfully
});