import * as actions from '../actions'
import reducer from '.'


describe('root reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            payments: {},
            error: null
        })
    })

    it('should handle FETCH_PAYMENTS_SUCCESS', () => {
        expect(
            reducer(undefined, {
                type: actions.FETCH_PAYMENTS_SUCCESS,
                payload: [
                    {
                        "ID": "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                        "Name": "Kyra Lester",
                        "Description": "Curabitur dictum. Phasellus in",
                        "Date": "2017-07-23T04:24:49-07:00",
                        "Amount": 345.54
                    }]
            })
        ).toEqual({
            payments: {
                "3471DA17-401F-9633-BF81-4CADA6FD5C79": {
                    "ID": "3471DA17-401F-9633-BF81-4CADA6FD5C79",
                    "Name": "Kyra Lester",
                    "Description": "Curabitur dictum. Phasellus in",
                    "Date": new Date("2017-07-23T04:24:49-07:00"),
                    "Amount": 345.54
                }
            },
            error: null
        })
    })
    it('should handle FETCH_PAYMENTS_ERROR', () => {
        const error = {
            errorCode: 500
        }
        expect(
            reducer(undefined, {
                type: actions.FETCH_PAYMENTS_ERROR,
                payload: error
            })
        ).toEqual({
            payments: {},
            error: error
        })
    })
})