
import {SET_FILTERS ,SET_PLACES, SET_FILTERED_PLACES} from '../actions/places';


const initialState = {
    place: [],
    filteredPlaces :[],
    
};
const placeReducer = (state=initialState, action) => {
    
    switch(action.type) {
        case SET_PLACES:
            return{
              ...state,  
              place:action.places,
            }

            case SET_FILTERED_PLACES:
                return {
                  ...state, filteredPlaces:action.fPlaces
                }

   case SET_FILTERS:
       const appliedFilters = action.filters;
       const updatedFilteredPlaces = state.place.filter(place=> {
           if (appliedFilters.restroom && !place.restroomFilter)
           {return false;}
           if (appliedFilters.parking && !place.parkingFilter)
           {return false;}
           if (appliedFilters.googleStar && ! place.googleRatingFilter)
           {return false;}
           else
           return true;
       });
return {...state, filteredPlaces: updatedFilteredPlaces } // filteredPlaces in right is being overwritten by left 
    default: 
   return state;
    }
};

export default placeReducer;


