'usestrict';
function checkNoFlyList(passenger) {
    return (passenger.name === 'Dr. Evel');
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

let passenger = {
    name: "Dr. Evel",
    paid: false
};

console.log(checkNoFlyList(passenger)); // true
console.log(checkNotPaid(passenger)); // true
