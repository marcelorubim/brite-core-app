import { FETCH_PAYMENTS_SUCCESS, FETCH_PAYMENTS_ERROR } from "../actions";


const initialState = {
    payments: {},
    error: null
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case FETCH_PAYMENTS_SUCCESS:
            return {
                ...state,
                payments: action.payload.reduce((acc,p) => ({
                    ...acc,
                    [p.ID]: {
                        ...p,
                        Date: new Date(p.Date)
                    }
                }),{})
            }
        case FETCH_PAYMENTS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }

}