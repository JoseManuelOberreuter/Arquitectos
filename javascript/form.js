

// CHECK INPUTS 
function checkName(){
    const name = document.getElementById("inputname");
    const nameValue = name.value;
    const nameTrim = nameValue.trim()

    const errorName = document.getElementById('errorName');

    if (nameTrim === '' || nameValue == null){
        name.style.border = '2px solid red';
        errorName.style.display = 'block';
        errorName.innerHTML = '<b>Debes escribir un nombre </b>';
    } else {
        name.style.border = '2px solid green';
        errorName.style.display = 'none'
    }
}


function checkEmail(){
    const email = document.getElementById("inputemail");
    const emailValue = email.value;
    const emailTrim = emailValue.trim();


    const emailconf = document.getElementById("emailconf");
    const emailconfValue = emailconf.value;



    const errorEmail = document.getElementById('errorEmail');
    const errorEmailConf = document.getElementById('errorEmailConf');


    if (emailTrim === '' || emailValue == null){
        email.style.border = '2px solid red'
        errorEmail.style.display = 'block';
        errorEmail.innerHTML = '<b>Debes escribir un correo electronico</b>'
    } else {

        // Comparar si ambos valores tienen los mismos caracteres
        if (emailValue.split('').sort().join('') !== emailconfValue.split('').sort().join('')) {
            email.style.border = '2px solid red'
            errorEmail.style.display = 'block';
            errorEmail.innerHTML = '<b>Los correos no coinciden</b>'

            emailconf.style.border = '2px solid red'
            errorEmailConf.style.display = 'block';
            errorEmailConf.innerHTML = '<b>Los correos no coinciden</b>'

        
        } else if (emailValue.split('').sort().join('') == emailconfValue.split('').sort().join('')) {

            email.style.border = '2px solid green';
            errorEmail.style.display = 'none'

            emailconf.style.border = '2px solid green';
            errorEmailConf.style.display = 'none'

        }
    }
}










function checkEmailConf(){

    const email = document.getElementById("inputemail");
    const emailValue = email.value;

    const emailconf = document.getElementById("emailconf");
    const emailconfValue = emailconf.value;
    const emailconfTrim = emailconfValue.trim();

    const errorEmailConf = document.getElementById('errorEmailConf');
    const errorEmail = document.getElementById('errorEmail');


    if (emailconfTrim === '' || emailconfValue == null){
        emailconf.style.border = '2px solid red'
        errorEmailConf.style.display = 'block';
        errorEmailConf.innerHTML = '<b>Debes escribir nuevamente el correo electronico</b>'
        
    
    } else {

        // Comparar si ambos valores tienen los mismos caracteres
        if (emailValue.split('').sort().join('') !== emailconfValue.split('').sort().join('')) {
            // Mostrar mensaje de error

            emailconf.style.border = '2px solid red'
            errorEmailConf.style.display = 'block';
            errorEmailConf.innerHTML = '<b>Los correos no coinciden</b>'

            email.style.border = '2px solid red'
            errorEmail.style.display = 'block';
            errorEmail.innerHTML = "<b>Los correos no coinciden</b>";


        } else if (emailValue.split('').sort().join('') == emailconfValue.split('').sort().join('')) {

            email.style.border = '2px solid green';
            errorEmail.style.display = 'none'

            emailconf.style.border = '2px solid green';
            errorEmailConf.style.display = 'none'

        }
    }

}


function checkPhone() {
    const phone = document.getElementById("phone");
    const phoneValue = phone.value;
    const phoneTrim = phoneValue.trim();
    const errorPhone = document.getElementById('errorPhone');

    if (phoneTrim === '' || phoneValue == null){
        phone.style.border = '2px solid red'
        errorPhone.style.display = 'block';
        errorPhone.innerHTML = '<b>Debes escribir un numero de telefono</b>'
    } else {
        phone.style.border = '2px solid green';
        errorPhone.style.display = 'none'
    }
}


function checkUbi() {
    const ubi = document.getElementById("ubicacion");
    const ubiValue = ubi.value;
    const ubiTrim = ubiValue.trim();
    const errorUbi = document.getElementById('errorUbi');

    if (ubiTrim === '' || ubiValue == null){
        ubi.style.border = '2px solid red';
        errorUbi.style.display = 'block';
        errorUbi.innerHTML = '<b>Debes escribir una dirección</b>';
    } else {
        ubi.style.border = '2px solid green';
        errorUbi.style.display = 'none';
    }
}


function checkDatos(){
    const datos = document.getElementById('datos');
    const datosValue = datos.value;

    if (datosValue !== '') {
        datos.style.border = '2px solid green';
    } else {
        datos.style.border = '';
    }

}

function checkTerrenos(){
    const terreno = document.getElementById('terreno');
    const terrenoValue = terreno.value;

    if (terrenoValue !== '') {
        terreno.style.border = '2px solid green';
    } else {
        terreno.style.border = '';
    }
}


function checkDisposicion() {
    const radio = document.getElementById('otraplantaradio');
    const radioValue = radio.value;

    const input = document.getElementById('otraplantatexto');
    const inputValue = input.value;
    const inputTrim = inputValue.trim(); 

    const dispoError = document.getElementById('dispo-error');


    if (radio.checked = true){

        input.style.border = '2px solid red';
        dispoError.style.display = 'block';
        dispoError.innerHTML = '<b>Debes escribir una opción</b>    ';


        if (inputTrim === '' || inputValue == null) {
            input.style.border = '2px solid red';
            dispoError.style.display = 'block';
            dispoError.innerHTML = '<b>Debes escribir una opción</b>    ';
        }
        else {
            dispoError.style.display = 'none';
            input.style.border = '2px solid green';
        } 
    }
    else {
  
        input.style.border = 'none';
        dispoError.style.display = 'hide';
        dispoError.innerHTML = ''
    }

}


function checkSelect() {
    const select = document.getElementById('opciones');
    const selectValue = select.value;

    const errorOpciones = document.getElementById('errorOpciones');

    if (selectValue === ''){
        select.style.border = '2px solid red';
        errorOpciones.style.display = 'block'
        errorOpciones.innerHTML = '<b>Debes seleccionar una opción</b>';


    } else {
        select.style.border = '2px solid green';
        errorOpciones.style.display = 'none'
        errorOpciones.innerHTML = '';

    }

}


// ESPACIOS ADICIONALES

var inputcheck = document.getElementById('otroAdicional');
var inputtext = document.getElementById('otroAdicionalText');
var adicionalError = document.getElementById('adicional-error');


inputcheck.addEventListener('change', function(){
    if(inputcheck.checked == true){
        inputtext.focus();

        if(!inputtext.value){
            inputtext.style.border = "2px solid red";
            adicionalError.style.display = 'block'
            adicionalError.innerHTML = '<b>Debes escribir una opción</b>'
        }
    }
    else{
        inputtext.blur();
        inputtext.style.border = 'none';
        adicionalError.style.display = 'hide';
        adicionalError.innerHTML = '';

    }
});

inputtext.addEventListener('input', function(){
    if(inputtext.value){
        inputtext.style.border = "2px solid green";
        adicionalError.style.display = 'none';
        adicionalError.innerHTML = '';
    } else {
        inputtext.style.border = "2px solid red";
        adicionalError.style.display = 'block';
        adicionalError.innerHTML = '<b>Debes escribir una opción</b>';
    }
});


// ESTILO ARQUITECTONICO
const imgContemporaneo = document.getElementById('imgContemporaneo');
const imgAmericano = document.getElementById('imgAmericano');
const imgRustico = document.getElementById('imgRustico');
const imgOtra = document.getElementById('imgOtra');

const radioContemporaneo = document.getElementById('contemporaneo');
const radioAmericano = document.getElementById('Americano');
const radioRustico = document.getElementById('Rustico');
const radioOtro = document.getElementById('otroEstiloArquitec');

radioContemporaneo.addEventListener('change', function() {
    imgContemporaneo.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 1)';
    imgAmericano.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 0.5)';
    imgRustico.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 0.5)';
    imgOtra.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 0.5)';
})

radioAmericano.addEventListener('change', function() {
    imgContemporaneo.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 0.5)';
    imgAmericano.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 1)';
    imgRustico.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 0.5)';
    imgOtra.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 0.5)';
})

radioRustico.addEventListener('change', function() {
    imgContemporaneo.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 0.5)';
    imgAmericano.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 0.5)';
    imgRustico.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 1)';
    imgOtra.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 0.5)';
})

radioOtro.addEventListener('change', function() {
    imgContemporaneo.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 0.5)';
    imgAmericano.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 0.5)';
    imgRustico.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 0.5)';
    imgOtra.style.boxShadow = '1px 1px 5px rgb(0, 0, 0, 1)';
})




// MENSAJE FINAL
function checkMessage(){
    const message = document.getElementById("message");
    const messageValue = message.value;
    const messageTrim = messageValue.trim();
    const errormessage = document.getElementById('errorMessage');

    if (messageTrim === '' || messageValue == null){
        message.style.border = '2px solid red'
        errormessage.style.display = 'block';
        errormessage.innerHTML = '<b>Debes escribir un mensaje</b>'
    } else {
        message.style.border = '2px solid green';
        errormessage.style.display = 'none'
    }
}
