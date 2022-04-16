import React from 'react';

const App = () => {

    return (
        <div>
          <h1>{process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE}</h1>
        </div>
    );
};

export default App;