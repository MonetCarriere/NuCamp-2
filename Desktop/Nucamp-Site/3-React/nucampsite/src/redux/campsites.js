
import * as ActionTypes from './ActionTypes';

export const Campsites = (state = {
        isLoading: true,
        errMess: null,
        campsites: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};
        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []};
        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};


















//HERE you're making a reducer function to handle the campsites section of the state

//reducers are considered to be part of the store.

//here we are splitting the reducers to combine them into a single reducer

//capitalizing the " C" isn't required.

//All reducers take 2 parameters. It takes the current/existing state (the state that's already in the store that's going to be changed by this reducer) & an action object.

//Then in the body of this function, we check for the type of action and return the state

//It's not required but common to use a switch statement for a reducer


