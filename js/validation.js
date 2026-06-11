export function validateForm(name, phone){


    if(name.trim().length < 2){

        alert(
            "Введите имя"
        );

        return false;

    }



    if(phone.trim().length < 5){

        alert(
            "Введите телефон"
        );

        return false;

    }


    return true;

}