import { createCalendar, getSelectedDate }
from "./calendar.js";


import { saveBooking, getBookings }
from "./storage.js";


import { validateForm }
from "./validation.js";




let schedule = {};

let selectedTime = null;




async function loadSchedule(){


    const response =
    await fetch(
        "./data/schedule.json"
    );


    schedule =
    await response.json();


}






function showTimes(date){


    const container =
    document.querySelector(
        "#timeList"
    );



    container.innerHTML = "";





    schedule[date]
    .forEach(item=>{


        const booked =
        getBookings()
        .some(booking=>


            booking.date === date &&
            booking.time === item.time &&
            booking.teacher === item.teacher


        );





        if(
            item.available &&
            !booked
        ){



            const button =
            document.createElement(
                "div"
            );



            button.className =
            "time";



            button.textContent =
            item.time;






            button.addEventListener(
                "click",
                ()=>{


                    document
                    .querySelectorAll(
                        ".time"
                    )
                    .forEach(btn=>{


                        btn.classList.remove(
                            "active"
                        );


                    });




                    button.classList.add(
                        "active"
                    );



                    selectedTime = item;



                }

            );




            container.append(
                button
            );


        }


    });






    if(
        container.children.length === 0
    ){


        container.innerHTML =
        "Свободных мест нет";


    }



}






document.addEventListener(
    "dateSelected",
    (event)=>{


        showTimes(
            event.detail
        );


    }
);







document
.querySelector("#bookButton")
.addEventListener(
    "click",
    ()=>{



        const name =
        document
        .querySelector("#name")
        .value;



        const phone =
        document
        .querySelector("#phone")
        .value;




        if(
            !validateForm(
                name,
                phone
            )
        ){

            return;

        }






        if(!selectedTime){


            alert(
                "Выберите время"
            );


            return;


        }







        const booking = {


            name:name,


            phone:phone,


            date:
            getSelectedDate(),


            time:
            selectedTime.time,


            style:
            selectedTime.style,


            teacher:
            selectedTime.teacher



        };







        saveBooking(
            booking
        );





        alert(
            "Вы успешно записались!"
        );





        showTimes(
            getSelectedDate()
        );




    }

);








async function init(){



    await loadSchedule();




    createCalendar(
        schedule
    );



}





init();