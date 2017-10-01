import React from 'react';
import './styles/styles.css';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';

function App({store}) {
       return(
            <main>
                <ListContainer store = {store}/>
                <FormContainer store = {store} />
            </main>
        );

}

export default App;

