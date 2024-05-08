/**
 * Create a flight element.
 *
 * @param {object} flight - Flight object.
 * @returns {HTMLElement} - Flight element.
 */

const createFlight = (flight) => {
    /* FLIGHT */
    const flightDom = document.createElement('div');
    flightDom.className = 'flight';

    /* name */
    const name = document.createElement('div');
    name.className = 'name';
    name.innerHTML = flight.name;

    /* plane */
    const plane = document.createElement('div');
    plane.className = 'plane';
    plane.innerHTML = flight.plane;

    /* departure */
    const departureDate = document.createElement('div');
    departureDate.className = 'departureDate';
    departureDate.innerHTML = flight.departureDate;

    /* origin */
    const origin = document.createElement('div');
    origin.className = 'origin';
    origin.innerHTML = flight.origin;

    /* arrival date */
    const arrivalDate = document.createElement('div');
    arrivalDate.className = 'arrivalDate';
    arrivalDate.innerHTML = flight.arrivalDate;

    /* destination */
    const destination = document.createElement('div');
    destination.className = 'destination';
    destination.innerHTML = flight.destination;

    /* stops */
    const stops = document.createElement('div');
    stops.className = 'stops';
    stops.innerHTML = flight.stops;

    flightDom.append(
        name,
        plane,
        departureDate,
        origin,
        arrivalDate,
        destination,
        stops,
    );

    return flightDom;
};

export default createFlight;
