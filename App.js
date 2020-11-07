import React, {useState}from 'react';
import *as Font from 'expo-font';
import {AppLoading} from 'expo';
import {createStore , combineReducers,applyMiddleware,compose} from 'redux';
import {enableScreens} from 'react-native-screens';
import EstesGuideNavigator from './navigation/EstesGuideNavigator';
import {Provider} from 'react-redux';
import placeReducer from './store/reducers/place';
import favReducer from './store/reducers/fav';
import {persistStore, persistReducer,autoRehydrate} from 'redux-persist';
import {createLogger} from 'redux-logger';
import {AsyncStorage} from 'react-native';
import {PersistGate} from 'redux-persist/es/integration/react';
import ReduxThunk from 'redux-thunk';

enableScreens(); // useScreens has been changed to enableScreens - this helps screens load faster in background

const rootReducer = combineReducers({
  place: placeReducer,   //this is an id with name of place
  fav:favReducer

});

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whiteList:['favReducer']
}



const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = createStore(persistedReducer,applyMiddleware(createLogger(),ReduxThunk));

const fetchFonts = () => {   //fetching costum fonts for my app using Async
  return Font.loadAsync({
    'raleway-blackItalic' : require('./assets/fonts/Raleway-BlackItalic.ttf'),
    'raleway-bold' : require('./assets/fonts/Raleway-Bold.ttf'),
    'raleway-regular' : require('./assets/fonts/Raleway-Regular.ttf'),
    'raleway-thin' : require('./assets/fonts/Raleway-Thin.ttf')
  });
}; 

const persistedStore = persistStore(store);

export default function App()  {
  
const [fontLoaded, setFontLoaded] = useState(false); //initially it's false because app hasn't been loaded 

if (!fontLoaded) 
{
  return(
  <AppLoading 
  startAsync = {fetchFonts} 
  onFinish = {() => setFontLoaded(true) }
  /> //if assets(fonts here) is not loaded we display loading screen and load assets for app
  );  
 
} 
console.disableYellowBox = true;
return (
  

<Provider store={store}> 

<PersistGate persistor={persistedStore} loading={null}>

<EstesGuideNavigator/> 

</PersistGate >

</Provider>
);

}
