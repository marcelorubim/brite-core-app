import * as PaymentsAPI from '../api/payments'
import { FETCH_PAYMENTS_REQUEST, fetchPaymentsError, fetchPaymentsSuccess, updatePaymentSuccess, updatePaymentError, UPDATE_PAYMENT_REQUEST } from '../actions';
import { put, call, takeLatest } from 'redux-saga/effects';

export function *fetchPayments(){
    try{
        const response = yield call(PaymentsAPI.getPaymentsData);
        yield put(fetchPaymentsSuccess(response.data));
    }catch (e) {
        yield put(fetchPaymentsError(e));
    }
}

export function *updatePayment(action){
    try{
        const response = yield call(PaymentsAPI.updatePayment, action.payload);
        yield put(updatePaymentSuccess(response.data));
    }catch (e) {
        yield put(updatePaymentError(e));
    }
}

function* mySaga() {
    yield takeLatest(FETCH_PAYMENTS_REQUEST, fetchPayments);
    yield takeLatest(UPDATE_PAYMENT_REQUEST, updatePayment);
  }
  
  export default mySaga;