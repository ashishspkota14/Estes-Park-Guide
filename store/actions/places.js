import Places from '../../models/places';

export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
export const SET_FILTERS = 'SET_FILTERS';
export const SET_PLACES = 'SET_PLACES';
export const SET_FILTERED_PLACES ='SET_FILTERED_PLACES';

export const toggleFavourite = (id) => { 
    return {
    type: TOGGLE_FAVOURITE,
    placeId:id 
    
};
};

 export const setFilters = filterSettings => {
     return {
         type: SET_FILTERS, 
         filters: filterSettings
     };
 };

 export const fetchPlaces = () => {
     return async dispatch => {
        const response = await fetch(
            'https://estes-app.firebaseio.com/places.json',
         );
      
          const resData = await response.json();
       const loadedPlaces = [];
       for (const key in resData)
       {
           loadedPlaces.push(
               new Places (
               resData[key].id,
               resData[key].categoryIds,
               resData[key].title,
               resData[key].googleRating,
               resData[key].imageUrl,
               resData[key].imageUrl1,
               resData[key].imageUrl2,
               resData[key].imageUrl3,
               resData[key].restrooms,
               resData[key].generalDetails,
               resData[key].whatIsHere,
               resData[key].address,
               resData[key].website,
               resData[key].phoneNumber,
               resData[key].latitude,
               resData[key].longitude,
               resData[key].googleRatingFilter,
               resData[key].parkingFilter,
               resData[key].restroomFilter
               )
           );
       }
        dispatch({ type:SET_PLACES,places:loadedPlaces })
     };
 };
 export const fetchFilteredPlaces = () => {
    return async dispatch => {
       const response = await fetch(
           'https://estes-app.firebaseio.com/places.json',
        );
     
         const resData = await response.json();
      const loadedPlaces = [];
      for (const key in resData)
      {
          loadedPlaces.push(
              new Places (
              resData[key].id,
              resData[key].categoryIds,
              resData[key].title,
              resData[key].googleRating,
              resData[key].imageUrl,
              resData[key].imageUrl1,
              resData[key].imageUrl2,
              resData[key].imageUrl3,
              resData[key].restrooms,
              resData[key].generalDetails,
              resData[key].whatIsHere,
              resData[key].address,
              resData[key].website,
              resData[key].phoneNumber,
              resData[key].latitude,
              resData[key].longitude,
              resData[key].googleRatingFilter,
              resData[key].parkingFilter,
              resData[key].restroomFilter
              )
          );
      }
       dispatch({ type:SET_FILTERED_PLACES,fPlaces:loadedPlaces })
    };
};