import {getBookings}
from "./storage.js";



const container =
document.querySelector("#bookingList");



function renderBookings(){


    const bookings =
    getBookings();



    container.innerHTML="";



    if(bookings.length === 0){


        container.innerHTML =
        "<p>У вас пока нет записей</p>";


        return;

    }





    bookings.forEach(
        (booking,index)=>{


            const card =
            document.createElement("div");


            card.className =
            "booking-card";



            card.innerHTML = `


            <h3>
            ${booking.style}
            </h3>


            <p>
            Дата:
            ${booking.date}
            </p>


            <p>
            Время:
            ${booking.time}
            </p>


            <p>
            Преподаватель:
            ${booking.teacher}
            </p>


            <p>
            Имя:
            ${booking.name}
            </p>



            <button class="delete">

            Отменить запись

            </button>


            `;




            card
            .querySelector(".delete")
            .onclick=()=>{


                deleteBooking(index);


            };




            container.append(card);



        }

    );


}





function deleteBooking(index){


    let bookings =
    getBookings();



    bookings.splice(
        index,
        1
    );



    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );



    renderBookings();


}



renderBookings();