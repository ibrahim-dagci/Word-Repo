import React from 'react';
import Navigation from './navigation';
import {
    AppProvider
} from './context';

const App = () => {
    return (
        <AppProvider>
            <Navigation />
        </AppProvider>
    );
};

export default App;
