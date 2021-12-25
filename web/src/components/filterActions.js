'use strict';

import AppConstants from '../appConstants';
import AppDispatcher from '../appDispatcher';

export default {
  updateFilter: (filters) => {
    AppDispatcher.handleAction({
      actionType: AppConstants.ActionTypes.UPDATE_FILTER,
      data: filters
    });
  },
  updateDefaultFilters: (defaults) => {
    AppDispatcher.handleAction({
      actionType: AppConstants.ActionTypes.UPDATE_DEFAULT_FILTERS,
      data: defaults
    });
  },
  resetFilters: () => {
    AppDispatcher.handleAction({
      actionType: AppConstants.ActionTypes.RESET_FILTERS
    });
  },
  clearFilters: () => {
    AppDispatcher.handleAction({
      actionType: AppConstants.ActionTypes.CLEAR_FILTERS
    });
  }
};
