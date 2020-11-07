
import { TOGGLE_FAVOURITE,SET_PLACES,SET_FILTERS} from '../actions/places';
const initialState = {
    place:[],
    favouritePlaces: [] 
    
};
const favReducer = (state=initialState, action) => {
    
    switch(action.type) {

        case SET_PLACES:
            return{
          ...state, place:action.places,
                    
            }
     
        case TOGGLE_FAVOURITE:

        const existingIndex = state.favouritePlaces.findIndex(place => place.id===action.placeId);
        if (existingIndex >= 0 )
   {
       const updatedFavPlaces =[ ...state.favouritePlaces];
updatedFavPlaces.splice(existingIndex,1)

       return{
        ...state,  favouritePlaces: updatedFavPlaces
      };
   }
   else

   {
       const places = state.place.find( place=> place.id === action.placeId); 
    return { 
...state,favouritePlaces:state.favouritePlaces.concat(places)

};
};
/*
case SET_FILTERS:
       const appliedFilters = action.filters;
       const updatedFavouritePlaces = state.favouritePlaces.filter(place => {
           if (appliedFilters.restroom && !place.restroomFilter)
           {return false;}
          
           if (appliedFilters.parking && !place.parkingFilter)
           {return false
            ;}
          
           if (appliedFilters.googleStar && ! place.googleRatingFilter)
           {return false;}
      
           else
           return true;
       });
return {...state,favouritePlaces:updatedFavouritePlaces}
*/

    default: 
   return state;
    }
};

export default favReducer;

