const rootReducer = (state = 0, action: any) => {
    switch (action.type) {
        case 'ADD':
            state = state + 1;
            console.log('action', action)
            return state;
        default:
            // console.log('dispatch success', action)
            return state;
    }
    // return state;
}
export default rootReducer;