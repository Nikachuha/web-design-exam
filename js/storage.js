export function saveBooking(booking){


    let bookings =
    JSON.parse(
        localStorage.getItem("bookings")
    ) || [];



    bookings.push(booking);



    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );


}





export function getBookings(){


    return JSON.parse(
        localStorage.getItem("bookings")
    ) || [];


}