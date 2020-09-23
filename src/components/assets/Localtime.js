import React, { Fragment } from 'react';

const Localtime = (longitude) => {

    const time = new Date();

    let h = time.getUTCHours();
    let m = time.getUTCMinutes();
    let s = time.getUTCSeconds();


    let timeUTC = h + ':' + m + ':' + s;
    console.log(timeUTC)
    const tUTC = new Date (timeUTC).toLocaleTimeString();




    let timeZone = 0;

    if (longitude >7.5){
        timeZone = 1;
    }
    if (longitude >22.5){
        timeZone = 2;
    }
    if (longitude >37.5){
        timeZone = 3;
    }
    if (longitude >52.5){
        timeZone = 4;
    }
    if (longitude >67.5){
        timeZone = 5;
    }
    if (longitude >82.5){
        timeZone = 6;
    }
    if (longitude >97.5){
        timeZone = 7;
    }
    if (longitude >112.5){
        timeZone = 8;
    }
    if (longitude >127.5){
        timeZone = 9;
    }
    if (longitude >142.5){
        timeZone = 10;
    }
    if (longitude >157.5){
        timeZone = 11;
    }
    if (longitude >172.5){
        timeZone = 12;
    }
    if (longitude <7.5){
        timeZone = (-1);
    }
    if (longitude <22.5){
        timeZone = (-2);
    }
    if (longitude <37.5){
        timeZone = (-3);
    }
    if (longitude <52.5){
        timeZone = (-4);
    }
    if (longitude <67.5){
        timeZone = (-5);
    }
    if (longitude <82.5){
        timeZone = (-6);
    }
    if (longitude <97.5){
        timeZone = (-7);
    }
    if (longitude <112.5){
        timeZone = (-8);
    }
    if (longitude <127.5){
        timeZone = (-9);
    }
    if (longitude <142.5){
        timeZone = (-10);
    }
    if (longitude <157.5){
        timeZone = (-11);
    }
    if (longitude <172.5){
        timeZone = 12;
    }
    console.log(timeZone);
    
    return (
        <Fragment>

        </Fragment>
    )
}

export default Localtime