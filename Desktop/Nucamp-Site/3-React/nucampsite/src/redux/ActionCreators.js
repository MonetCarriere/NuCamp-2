import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});


export const fetchCampsites = () => dispatch => {    //these two arrows means we've nested a function inside of another function. ...It's only because we enabled Thunk tat were even able to use this syntax 

    dispatch(campsitesLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
}); 





//HERE you are making an action

//The asterisk (*) in your import acts as a wild card that lets you import all the named exports from the actiontypes.js file at once 

//Here you have an action function named 'addComment' that has all the values needed to add a comment

 

