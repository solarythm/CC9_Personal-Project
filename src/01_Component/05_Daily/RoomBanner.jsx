import React from 'react';
import './RoomBanner.css';

export default function RoomBanner(number) {
    return(
        <div>
            <div className = "RoomNumber" id={number}>
                { number }
            </div>
        </div>
    );
}