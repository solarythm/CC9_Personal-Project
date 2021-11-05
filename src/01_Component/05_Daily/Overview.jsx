import React from 'react';
import RoomBanner from './RoomBanner.jsx';
import ApartmentBanner from './ApartmentBanner.jsx';
import './Overview.css';
// import {Badge} from 'react-bootstrap';

export default function Overview() {

    const Apartment01Floor02 = [ RoomBanner(201), RoomBanner(202), RoomBanner(203), RoomBanner(204), RoomBanner(205), RoomBanner(206), RoomBanner(207), RoomBanner(208), RoomBanner(209), RoomBanner(210), RoomBanner(211)]
    const Apartment01Floor03 = [ RoomBanner(301), RoomBanner(302), RoomBanner(303), RoomBanner(304), RoomBanner(305), RoomBanner(306), RoomBanner(307), RoomBanner(308), RoomBanner(309), RoomBanner(310), RoomBanner(311)]
    const Apartment01Floor04 = [ RoomBanner(401), RoomBanner(402), RoomBanner(403), RoomBanner(404), RoomBanner(405), RoomBanner(406), RoomBanner(407), RoomBanner(408), RoomBanner(409), RoomBanner(410), RoomBanner(411)]
    const Apartment01Floor05 = [ RoomBanner(501), RoomBanner(502), RoomBanner(503), RoomBanner(504), RoomBanner(505), RoomBanner(506), RoomBanner(507), RoomBanner(508), RoomBanner(509), RoomBanner(510), RoomBanner(511)]
    const Apartment01Floor06 = [ RoomBanner(601), RoomBanner(602), RoomBanner(603), RoomBanner(604), RoomBanner(605), RoomBanner(606), RoomBanner(607), RoomBanner(608), RoomBanner(609), RoomBanner(610), RoomBanner(611)]
    const Apartment01Floor07 = [ RoomBanner(701), RoomBanner(702), RoomBanner(703), RoomBanner(704), RoomBanner(705), RoomBanner(706), RoomBanner(707), RoomBanner(708), RoomBanner(709), RoomBanner(710), RoomBanner(711)]
    //const Apartment01 = [ Apartment01Floor02, Apartment01Floor03, Apartment01Floor04, Apartment01Floor05, Apartment01Floor06, Apartment01Floor07 ]

    const Apartment01Name = ApartmentBanner(" Pochanhontas");
    const Apartment02Name = ApartmentBanner(" Cuppadocia");
    const Apartment03Name = ApartmentBanner(" Resoluzine");
       

    

    return(
        <div>
            {/* <div id= "OverviewHeader">
                <h1> Overview Status </h1> 
            </div> */}
            <div> <h2> Overview </h2> </div>
            <div> <h3> (comment) หน้านี้ใช้แสดงว่าแต่ละห้อง สถานะเป็นอย่างไรโดยแสดงเป็นสี สีเขียว-ว่าง สีแดง-มีคนเข้าพัก สีเหลือง-เข้าพักเกินเวลา สีเทา-รอเข้าทำงาน(ซ่อม/ทำความสะอาด) โดยสามารถกดจากหน้านี้ไปหน้า booking ได้ (สถานะ: ว่าง) หรือสามารถกดเข้าไปเปลี่ยนแปลงสถานะได้ (สถานะทุกอัน) </h3></div>
            <div className= "ApartmentComplexContainer" id="Apartment01">
                
                <div className= "ApartmentNameContainer">
                    {Apartment01Name}
                </div>
                    <div className= "ApartmentFloorContainer" id= "Floor02">
                        {Apartment01Floor02}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor03">
                        {Apartment01Floor03}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor04">
                        {Apartment01Floor04}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor05">
                        {Apartment01Floor05}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor06">
                        {Apartment01Floor06}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor07">
                        {Apartment01Floor07}                
                    </div>
            </div>
            
            <div className= "ApartmentComplexContainer" id="Apartment02">
                <div className= "ApartmentNameContainer">
                    {Apartment02Name}
                </div>
                    <div className= "ApartmentFloorContainer" id= "Floor02">
                        {Apartment01Floor02}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor03">
                        {Apartment01Floor03}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor04">
                        {Apartment01Floor04}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor05">
                        {Apartment01Floor05}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor06">
                        {Apartment01Floor06}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor07">
                        {Apartment01Floor07}                
                    </div>
            </div>

            <div className= "ApartmentComplexContainer" id="Apartment03">
                <div className= "ApartmentNameContainer">
                    {Apartment03Name}
                </div>
                    <div className= "ApartmentFloorContainer" id= "Floor02">
                        {Apartment01Floor02}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor03">
                        {Apartment01Floor03}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor04">
                        {Apartment01Floor04}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor05">
                        {Apartment01Floor05}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor06">
                        {Apartment01Floor06}                
                    </div>
                    <div className= "ApartmentFloorContainer" id= "Floor07">
                        {Apartment01Floor07}                
                    </div>
            </div>
        </div>
    );
}