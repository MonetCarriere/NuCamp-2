import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;                             //this is the length of the comments array that's stored in this part of the state.
            comment.date = new Date().toISOString();               //this is today's date
            return state.concat(comment);                          //this returns the new state by using the array concat method
        default:                                                   //...the concat method is a built-in JS array method that lets us attach a new item to the end of an array without mutating the original array. It creates a new array. In contrast, the push array method would mutate the original array.
            return state;                                          // Line 10 takes the existing state (which is an array of objects) and it concatenates the new comment object to the end of the array and then it returns the new state to the redux store.
    }
};







//HERE you're making a reducer function to handle the comments section of the state


//reducers are considered to be part of the store.

//here we are splitting the reducers to combine them into a single reducer

//capitalizing the " C " isn't required.

//All reducers take 2 parameters. It takes the current/existing state (the state that's already in the store that's going to be changed by this reducer) & an action objectt.

//Then in the body of this function, we check for the type of action and return the state

//It's not required but common to use a switch statement for a reducer

//the whole point of this is to update it's part of the state when the add comment action is dispatched to the store (which means we need to import it from the action types module)

//You have to update 7 of your React Components to enable dispatching this action 

