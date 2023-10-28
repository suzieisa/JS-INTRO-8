/*
They go to work on weekdays every morning
They go to school on weekdays every evening

They go to school on weekends every morning
They have some leisure on weeknds every evening
*/

let isWeekend = false;
let isMorning = true;

if(isWeekend) {
    if(isMorning) {
        console.log('SCHOOL');
    }
    else {
        console.log('LEISURE');
    }
}
else { // not weekend
    if(isMorning) {
        console.log('WORK');
    }
    else {
        console.log('SCHOOL');
    }
}


if(isWeekend && !isMorning) {
    console.log('LEISURE');
}
else if(!isWeekend && isMorning) {
    console.log('WORK');
}
else {
    console.log('SCHOOL');
}