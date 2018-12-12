import * as actions from '.'

describe('actions', () => {
    it('should create an action to fetch payments request', () => {
      const expectedAction = {
        type: actions.FETCH_PAYMENTS_REQUEST
      }
      expect(actions.fetchPaymentsRequest()).toEqual(expectedAction)
    })
    it('should create an action to fetch payments success', () => {
        const payments = [];
        const expectedAction = {
          type: actions.FETCH_PAYMENTS_SUCCESS,
          payload: payments
        }
        expect(actions.fetchPaymentsSuccess(payments)).toEqual(expectedAction)
      })
      it('should create an action to fetch payments error', () => {
        const error = {
            errorCode: 500
        }
        const expectedAction = {
          type: actions.FETCH_PAYMENTS_ERROR,
          payload: error
        }
        expect(actions.fetchPaymentsError(error)).toEqual(expectedAction)
      })
      it('should create an action to update payments request', () => {
        const payment = {
            ID: '11223344'
        };
        const expectedAction = {
          type: actions.UPDATE_PAYMENT_REQUEST,
          payload:payment
        }
        expect(actions.updatePaymentRequest(payment)).toEqual(expectedAction)
      })
      it('should create an action to update payments success', () => {
        const payment = {
            ID: '11223344'
        };
        const expectedAction = {
          type: actions.UPDATE_PAYMENT_SUCCESS,
          payload: payment
        }
        expect(actions.updatePaymentSuccess(payment)).toEqual(expectedAction)
      })
      it('should create an action to update payments error', () => {
        const error = {
            errorCode: 500
        }
        const expectedAction = {
          type: actions.UPDATE_PAYMENT_ERROR,
          payload: error
        }
        expect(actions.updatePaymentError(error)).toEqual(expectedAction)
      })
  })