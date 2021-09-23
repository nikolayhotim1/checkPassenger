'usestrict';
let passengers = [{ name: 'Jane Doloop', paid: true, ticket: 'coach' },
{ name: 'Dr. Evel', paid: true, ticket: 'firstclass' },
{ name: 'Sue Property', paid: false, ticket: 'firstclass' },
{ name: 'John Funcall', paid: true, ticket: 'coach' }];

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

function createDrinkOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === 'firstclass') {
        orderFunction = function () {
            alert('Would you like a cocktail or wine?');
        };
    } else {
        orderFunction = function () {
            alert('Your choice is cola or water.');
        };
    }

    return orderFunction;
}

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();

    // Предложить обед
    getDrinkOrderFunction();
    getDrinkOrderFunction();

    // Включить кино
    getDrinkOrderFunction();

    // Забрать мусор
}

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
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
servePassengers(passengers);
