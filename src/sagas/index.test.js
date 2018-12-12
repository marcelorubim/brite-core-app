import * as sagas from '.'
import * as PaymentsAPI from '../api/payments'
import { call } from 'redux-saga/effects';


describe('sagas', () => {
    it('should test fetchPayments saga', () => {
        const gen = sagas.fetchPayments();
        expect(gen.next().value).toEqual(call(PaymentsAPI.getPaymentsData))
    })
})