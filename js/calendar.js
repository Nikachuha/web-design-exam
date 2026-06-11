let selectedDate = null;


export function createCalendar(schedule){


    const calendar =
    document.querySelector("#calendar");


    calendar.innerHTML = "";



    const title =
    document.createElement("h3");


    title.textContent =
    "Июнь 2026";


    calendar.append(title);



    const week =
    document.createElement("div");


    week.className =
    "week";


    const days =
    [
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб",
        "Вс"
    ];



    days.forEach(day=>{


        const item =
        document.createElement("div");


        item.textContent =
        day;


        item.className =
        "weekday";


        week.append(item);


    });



    calendar.append(week);





    const grid =
    document.createElement("div");


    grid.className =
    "calendar-grid";





    const empty =
    1;



    for(let i=0;i<empty;i++){


        const space =
        document.createElement("div");


        grid.append(space);


    }





    for(let day=1; day<=30; day++){


        const cell =
        document.createElement("div");


        cell.className =
        "calendar-day";


        let date =
        `2026-06-${String(day).padStart(2,"0")}`;





        cell.textContent =
        day;




        if(schedule[date]){


            cell.classList.add(
                "available"
            );



            cell.onclick = ()=>{


                document
                .querySelectorAll(
                    ".calendar-day"
                )
                .forEach(item=>{


                    item.classList.remove(
                        "selected"
                    );


                });



                cell.classList.add(
                    "selected"
                );



                selectedDate = date;



                document.dispatchEvent(

                    new CustomEvent(
                        "dateSelected",
                        {
                            detail:date
                        }
                    )

                );


            };


        }
        else{


            cell.classList.add(
                "disabled"
            );


        }



        grid.append(cell);



    }



    calendar.append(grid);



}





export function getSelectedDate(){


    return selectedDate;


}