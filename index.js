'usestrict';
let passengers = [{ name: 'Jane Doloop', paid: true },
{ name: 'Dr. Evel', paid: true },
{ name: 'Sue Property', paid: false },
{ name: 'John Funcall', paid: true }];

function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }

    return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === 'Dr. Evel');
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    let message = passenger.name;

    if (passenger.paid === true) {
        message += ' has paid';
    } else {
        message += ' has not paid';
    }

    console.log(message);
    return false;
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log(`The plane can't take off: we have a passenger on the no-fly-list.`);
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log(`The plane can't take off: not everyone has paid.`);
}

processPassengers(passengers, printPassenger);
