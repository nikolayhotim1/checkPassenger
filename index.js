'usestrict';
let passengers = [{ name: 'Jane Doloop', paid: true, ticket: 'coach' },
{ name: 'Dr. Evel', paid: true, ticket: 'firstclass' },
{ name: 'Sue Property', paid: false, ticket: 'firstclass' },
{ name: 'John Funcall', paid: true, ticket: 'premium' }];

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
    } else if (passenger.ticket === 'premium') {
        orderFunction = function () {
            alert('Would you like wine, cola or water?');
        };
    } else {
        orderFunction = function () {
            alert('Would you like cola or water?');
        };
    }

    return orderFunction;
}

function createDinnerOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === 'firstclass') {
        orderFunction = function () {
            alert('Would you like chicken or pasta?');
        };
    } else if (passenger.ticket === 'premium') {
        orderFunction = function () {
            alert('Would you like a snack box or cheese plate?');
        };
    } else {
        orderFunction = function () {
            alert('Would you like peanuts or pretzels?');
        };
    }

    return orderFunction;
}

function serveCustomerWithOfferDrink(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
}

function serveCustomerWithOfferDinner(passenger) {
    let getDinnerOrderFunction = createDinnerOrder(passenger);
    getDinnerOrderFunction();
}

function pickupTrash() {
    alert('Can I have your trash, please?');
}

function servePassengersWithOfferDrink(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomerWithOfferDrink(passengers[i]);
    }
}

function servePassengersWithOfferDinner(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomerWithOfferDinner(passengers[i]);
    }
}

function servePassengersWithPickupTrash(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        pickupTrash();
    }
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log('The plane can\'t take off: we have a passenger on the no-fly-list.');
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log('The plane can\'t take off: not everyone has paid.');
}

processPassengers(passengers, printPassenger);

servePassengersWithOfferDrink(passengers);
// Offer dinner
servePassengersWithOfferDinner(passengers);
servePassengersWithOfferDrink(passengers);
// Turn on movie
servePassengersWithOfferDrink(passengers);
// Pick up trash
servePassengersWithPickupTrash(passengers);
