import React from 'react';
import './Fab-button.scss';
import fab from '../../assets/images/fab.png';

function FabButton(props: any) {
    return (
        <div className="fab f-r-c-c">
            <img src={fab} alt="fab" />
        </div>
    );
}

export default FabButton;