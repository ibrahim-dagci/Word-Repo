import React, {
    useEffect 
} from 'react';
import Navigation from './navigation';
import {
    AppProvider
} from './context';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
    useEffect(()=>{
        SplashScreen.hide();
    },[]);

    return (
        <AppProvider>
            <Navigation />
        </AppProvider>
    );
};

export default App;
