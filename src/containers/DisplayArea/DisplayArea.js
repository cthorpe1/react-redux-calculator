import React from 'react';
import Display from '../../components/Display/Display';
import ClearButton from '../../components/ClearButton/ClearButton';


const displayArea = (props) => {
    return (
        <div>
        <Display />
        <ClearButton />
        </div>
    )
};

export default displayArea;