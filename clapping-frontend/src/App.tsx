import React from 'react';
import SampleComponent from './components/SampleComponent';
import UserComponent from './components/UserComponent';

const App: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Clapping App</h1>
            <UserComponent />
        </div>
    );
};

export default App;
