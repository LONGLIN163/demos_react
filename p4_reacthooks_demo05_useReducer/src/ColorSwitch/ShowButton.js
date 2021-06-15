import React from 'react';
import Show from './Show';
import Button from './Button';
import {Color} from './color';

const ShowButton = () => {
    return (  
        <div>
            <Color>
                <Show/>
                <Button/>
            </Color>
        </div>
    );
}
 
export default ShowButton;