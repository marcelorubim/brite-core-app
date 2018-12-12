export const FETCH_PAYMENTS_REQUEST = 'FETCH_PAYMENTS_REQUEST';
export const FETCH_PAYMENTS_SUCCESS = 'FETCH_PAYMENTS_SUCCESS';
export const FETCH_PAYMENTS_ERROR = 'FETCH_PAYMENTS_ERROR';
export const UPDATE_PAYMENT_REQUEST = 'UPDATE_PAYMENT_REQUEST';
export const UPDATE_PAYMENT_SUCCESS = 'UPDATE_PAYMENT_SUCCESS';
export const UPDATE_PAYMENT_ERROR = 'UPDATE_PAYMENT_ERROR';

export const fetchPaymentsRequest = () =>  ({
    type: FETCH_PAYMENTS_REQUEST
})

export const fetchPaymentsSuccess = (payments) =>  ({
    type: FETCH_PAYMENTS_SUCCESS,
    payload: payments
})

export const fetchPaymentsError = (error) =>  ({
    type: FETCH_PAYMENTS_ERROR,
    payload: error
})

export const updatePaymentRequest = (payment) =>  ({
    type: UPDATE_PAYMENT_REQUEST,
    payload: payment
})

export const updatePaymentSuccess = (payment) =>  ({
    type: UPDATE_PAYMENT_SUCCESS,
    payload: payment
})

export const updatePaymentError = (error) =>  ({
    type: UPDATE_PAYMENT_ERROR,
    payload: error
})