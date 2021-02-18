import { PROMOTIONS } from '../shared/promotions';

export const Promotions = (state = PROMOTIONS, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


//HERE you're making a reducer function to handle the promotions section of the state

//reducers are considered to be part of the store.

//here we are splitting the reducers to combine them into a single reducer

//capitalizing the "P " isn't required.

//All reducers take 2 parameters. It takes the current/existing state (the state that's already in the store that's going to be changed by this reducer) & an action objectt.

//Then in the body of this function, we check for the type of action and return the state

//It's not required but common to use a switch statement for a reducer



