//! Work on the main JS logic here
import { legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { counterReducer } from './reducers/counterReducer'
import { ADD, POWER, SUBTRACT } from './actions/counterActions'

export const store = createStore(counterReducer, composeWithDevTools())


//! Globals
const form = document.querySelector("#form")
const budgetDisplay = document.querySelector("#budget")
const formQuantity = document.querySelector("#quantity")
const formAction = document.querySelector("#action-dropdown")
const actionsMapper = {
    "add": ADD,
    "subtract": SUBTRACT,
    "power": POWER
}

//! Helpers
const displayBudget = () => budgetDisplay.innerText = `Budget: $${store.getState().counter}`
const validateForm = () => !formQuantity.value.trim() || !["add", "subtract", "power"].includes(formAction.value)

const formatValue = () => {
    const value = Number(formQuantity.value)
    if (value < 0 || typeof value !== "number") {
        if (["add", "subtract"].includes(formAction.value)) {
            return 0
        } else {
            return 1
        }
    }
    return value
}

const handleSubmit = (e) => {
    try {
        e.preventDefault()
        if (validateForm()) {
            alert("Please fill out all input fields")
            return
        }

        const actionChosen = actionsMapper[formAction.value]
        store.dispatch(actionChosen(formatValue()))
        form.reset()
    } catch (error) {
        alert(error)
    }
}

//! Events Handling
form.addEventListener("submit", handleSubmit)

//! Start Logic
displayBudget()
const unsubscribe = store.subscribe(displayBudget)