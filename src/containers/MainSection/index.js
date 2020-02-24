import React from 'react';
import './index.css';

import CreateNote from '../CreateNote';
import Display from '../../containers/Display';


// const EditContext = React.createContext(null);

export default function MainSection() {

    return (
        <div className="main-section-width">
            <CreateNote/>
            <Display />
        </div>
    );
}
