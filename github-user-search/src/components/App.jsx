import React from 'react';
import SearchBox from './SearchBox'
import '../styles/app.css'

export default class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <SearchBox></SearchBox>
            </div>
        );
    }
};