// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(){
    const firstTwoDrivers = drivers.slice(0, 2)
    return firstTwoDrivers
}
function returnLastTwoDrivers(){
    const lastTwoDrivers = drivers.slice(2, 4)
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (number){
    return function fareMultiplier(fare){
        return number * fare
    }
}
function fareDoubler(fare){
    return fare*2
}

function fareTripler(fare){
    return fare*3
}

function selectDifferentDrivers(array, fnct){
    return fnct(array)
}
