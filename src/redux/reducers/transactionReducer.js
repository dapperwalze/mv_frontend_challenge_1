import * as actions from "../actions/transactionActions";

const initialState = {
  totalBalance: 0,
  isTransactionSuccessful: false,
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DEPOSIT_FUNDS:
    case actions.DEPOSIT_FUNDS_SUCCESS:
      return Object.assign({}, state, {
        totalBalance: state.totalBalance + action.payload,
        isTransactionSuccessful: true,
      });
    case actions.DEPOSIT_FUNDS_FAILURE:
      return Object.assign({}, state, {
        isTransactionSuccessful: false,
      });

    case actions.WITHDRAW_FUNDS:
    case actions.WITHDRAW_FUNDS_SUCCESS:
      return Object.assign({}, state, {
        totalBalance: state.totalBalance - action.payload,
        isTransactionSuccessful: true,
      });
    case actions.WITHDRAW_FUNDS_FAILURE:
      return Object.assign({}, state, {
        isTransactionSuccessful: false,
      });
    default:
      return state;
  }
};
export const transactionsSelector = (state) => state.transactions;

export default transactionReducer;
