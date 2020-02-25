import {UPDATE_MOVIES} from '../actions/updateMovies';

const movielistReducer = ( state= {}, action) => {
    switch (action.type) {
        case UPDATE_MOVIES: return{
            name: action.payload
        }
        default:
            return state;
    }
}
export default movielistReducer;