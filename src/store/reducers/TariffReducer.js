const initialState = {
    tariffs: []
}

export default function tariffReducer(state = initialState, action) {

    if (action.type === 'FETCHALLSUCCESS') {

        return {
            ...state,
            tariffs: action.payload
        }

    }

    return state;

}