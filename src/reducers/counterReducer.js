//! Work on your reducer pure function here
const initialState = {
    counter: 0
}

export const counterReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "add":
            return {
                ...prevState,
                counter: prevState.counter + action.payload
            }
        case "subtract":
            return {
                ...prevState,
                counter: prevState.counter - action.payload
            }
        case "power":
            return {
                ...prevState,
                counter: prevState.counter ** action.payload
            }    
        default:
            return prevState;
    }
}