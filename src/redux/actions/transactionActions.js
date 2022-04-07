export const DEPOSIT_FUNDS = "DEPOSIT_FUNDS";
export const DEPOSIT_FUNDS_SUCCESS = "DEPOSIT_FUNDS_SUCCESS";
export const DEPOSIT_FUNDS_FAILURE = "DEPOSIT_FUNDS_FAILURE";

export const WITHDRAW_FUNDS = "WITHDRAW_FUNDS";
export const WITHDRAW_FUNDS_SUCCESS = "WITHDRAW_FUNDS_SUCCESS";
export const WITHDRAW_FUNDS_FAILURE = "WITHDRAW_FUNDS_FAILURE";

export const depositFunds = () => ({
  type: DEPOSIT_FUNDS,
});

export const depositFundsSuccess = (amount) => ({
  type: DEPOSIT_FUNDS_SUCCESS,
  payload: amount,
});

export const depositFundsFailure = () => ({
  type: DEPOSIT_FUNDS_FAILURE,
});

export const withdrawFunds = () => ({
  type: WITHDRAW_FUNDS,
});

export const withdrawFundsSuccess = (amount) => ({
  type: WITHDRAW_FUNDS_SUCCESS,
  payload: amount,
});

export const withdrawFundsFailure = () => ({
  type: WITHDRAW_FUNDS_FAILURE,
});
