# Intro to Redux (Without React)

## Learning Goals

- Understand the core concepts of Redux:
  - Store
  - Actions and Action Creators
  - Reducers
  - Dispatch
  - Subscriptions
- Set up a Redux application without React.
- Explore middleware like Redux DevTools to debug and inspect state changes.
- Build an interactive app using Redux to manage global state.

---

## Lecture Objectives

1. **Understand Redux Essentials**

   - Define the purpose of Redux and where it fits in application architecture.
   - Explain unidirectional data flow and why it is a powerful state management pattern.

2. **Core Redux Concepts**

   - **Store**: Centralized place to manage state.
   - **Actions**: Plain JavaScript objects describing _what_ happened.
   - **Reducers**: Functions that specify how the state changes in response to actions.
   - **Dispatch**: A method to send actions to the store.
   - **Subscriptions**: Methods to react to state changes in the store.

3. **Debugging with Redux DevTools**

   - Configure Redux DevTools for live inspection of actions and state changes.
   - Demonstrate step-by-step time travel debugging.

4. **Building a Redux App**
   - Set up a Redux store.
   - Create action creators and reducers.
   - Write a UI that interacts with the Redux store.
   - Connect the app to Redux state using `subscribe`.

---

## Lecture Topics

- **Introduction to Redux**
  - What is Redux, and why is it useful?
  - Scenarios where Redux is applicable (and where it may not be necessary).
- **Key Building Blocks of Redux**
  - Store
  - Actions and Action Creators
  - Reducers
  - Dispatch
  - Subscriptions
- **Practical Setup**
  - Setting up a Redux application from scratch (no React).
  - Configuring Redux DevTools for debugging.
- **Live Demo**
  - Building a "Counter App" using Redux:
    - Add/Subtract numbers.
    - Use middleware for debugging.
    - Handle invalid or edge case inputs gracefully.
- **Q&A and Discussion**
  - Common mistakes when using Redux.
  - Extensions to Redux (e.g., middleware like Redux Thunk for async operations).

---

## Final Code Overview

### Key Redux Concepts in Code

- **Actions**: Define _what happened_. Example:
    ```javascript
        export const ADD = (value) => ({ type: "ADD", payload: value });
        export const SUBTRACT = (value) => ({ type: "SUBTRACT", payload: value });
        export const POWER = (value) => ({ type: "POWER", payload: value });
    ```


- **Reducers**: Define *how state changes* in response to actions. Example:
    ```javascript
        export const counterReducer = (state = { counter: 0 }, action) => {
            switch (action.type) {
                case "ADD":
                return { counter: state.counter + action.payload };
                case "SUBTRACT":
                return { counter: state.counter - action.payload };
                case "POWER":
                return { counter: state.counter ** action.payload };
                default:
                return state;
            }
        };
    ````


- **Store**: Centralizes state management. Example:
    ```javascript
        import { legacy_createStore as createStore } from "redux";
        import { composeWithDevTools } from "redux-devtools-extension";
        import { counterReducer } from "./reducers/counterReducer";

        export const store = createStore(counterReducer, composeWithDevTools());
    ````

- **Subscriptions and Dispatch**: Connect Redux state to your UI. Example:
    ```javascript
        const budgetDisplay = document.querySelector("#budget");

        const displayCount = () => {
        budgetDisplay.innerText = `Count: $${store.getState().counter}`;
        };

        store.subscribe(displayCount);
    ````
