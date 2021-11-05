import React from 'react';
import './ApartmentBanner.css'

export default function ApartmentBanner(apartmentName) {
    return(
        <div>
            <div className = "ApartmentBanner">
                Apartment Name :
                { apartmentName }
            </div>
        </div>
    );
}