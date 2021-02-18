export const ADD_COMMENT = 'ADD_COMMENT';
export const CAMPSITES_LOADING = 'CAMPSITES_LOADING';         //This action is for when your action is loading the campsites data. It's made the reqest and is waiting for a response
export const CAMPSITES_FAILED = 'CAMPSITES_FAILED';           //This is for if your server request fails. This will let the store  know to show an error message
export const ADD_CAMPSITES = 'ADD_CAMPSITES';                 //This is what you will dispatch when the campsites data has been successfully retrieved from the server and can be added to the state


//HERE you are making an action