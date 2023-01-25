

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

// CHEKEO DE EMAIL 
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



// CHEKEO DE EMAIL DE CONFIRMACION
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



// CHEKEO DE TELEFONO CELULAR
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

// CHEKEANDO UBICACIÓN
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

// CHEKEANDO DATOS
function checkDatos(){
    const datos = document.getElementById('datos');
    const datosValue = datos.value;

    if (datosValue !== '') {
        datos.style.border = '2px solid green';
    } else {
        datos.style.border = '';
    }

}

// CHEKEANDO TERRENO
function checkTerrenos(){
    const terreno = document.getElementById('terreno');
    const terrenoValue = terreno.value;

    if (terrenoValue !== '') {
        terreno.style.border = '2px solid green';
    } else {
        terreno.style.border = '';
    }
}

// VIVIENDA IDEAL CHECKBOX A RADIO

var checkboxes1 = document.querySelectorAll('#checkboxToRadio1 input[type="checkbox"]');

for (var i = 0; i < checkboxes1.length; i++) {
    checkboxes1[i].addEventListener('change', function() {
        var checkbox = this;

        // Desmarcar todos los checkboxes menos el seleccionado
        for (var j = 0; j < checkboxes1.length; j++) {
            if (checkboxes1[j] !== checkbox) {
                checkboxes1[j].checked = false;
            }
        }   
    });
}


// DISPOSICION CHECKEBOX A RADIO
var checkboxes2 = document.querySelectorAll('#checkboxToRadio2 input[type="checkbox"]');

var inputcheck1 = document.getElementById('otroAdicional1');
var inputtext1 = document.getElementById('otroAdicionalText1');
var adicionalError1 = document.getElementById('adicional-error1');

for (var i = 0; i < checkboxes2.length; i++) {
    checkboxes2[i].addEventListener('change', function() {
        var checkbox = this;
        // Desmarcar todos los checkboxes menos el seleccionado
        for (var j = 0; j < checkboxes2.length; j++) {
            if (checkboxes2[j] !== checkbox) {
                checkboxes2[j].checked = false;

            }
        }

        if(inputcheck1.checked == true){
            inputtext1.focus();
            if(inputtext1.value.length == 0){
                inputtext1.style.border = "2px solid red";
                adicionalError1.style.display = 'block';
                adicionalError1.innerHTML = '<b>Debes escribir una opción</b>';
            }
    
            else{
                inputtext1.style.border = "1px solid var(--color3)";
                adicionalError1.style.display = 'none';
                adicionalError1.innerHTML = '';
            }
        }
        else{
            inputtext1.blur();
            inputtext1.style.border = 'none';
            adicionalError1.style.display = 'none';
            adicionalError1.innerHTML = '';
        }


    });
}


// COCINA CHECKEBOX A RADIO
var checkboxes3 = document.querySelectorAll('#checkboxToRadio3 input[type="checkbox"]');



for (var i = 0; i < checkboxes3.length; i++) {
    checkboxes3[i].addEventListener('change', function() {
        var checkbox = this;
        // Desmarcar todos los checkboxes menos el seleccionado
        for (var j = 0; j < checkboxes3.length; j++) {
            if (checkboxes3[j] !== checkbox) {
                checkboxes3[j].checked = false;
                
            }
        }
    
    });
}





// LIVING CHECKEBOX A RADIO
var checkboxes4 = document.querySelectorAll('#checkboxToRadio4 input[type="checkbox"]');



for (var i = 0; i < checkboxes4.length; i++) {
    checkboxes4[i].addEventListener('change', function() {
        var checkbox = this;
        // Desmarcar todos los checkboxes menos el seleccionado
        for (var j = 0; j < checkboxes4.length; j++) {
            if (checkboxes4[j] !== checkbox) {
                checkboxes4[j].checked = false;
                
            }
        }
    
    });
}


// COMEDOR CHECKEBOX A RADIO
var checkboxes5 = document.querySelectorAll('#checkboxToRadio5 input[type="checkbox"]');



for (var i = 0; i < checkboxes5.length; i++) {
    checkboxes5[i].addEventListener('change', function() {
        var checkbox = this;
        // Desmarcar todos los checkboxes menos el seleccionado
        for (var j = 0; j < checkboxes5.length; j++) {
            if (checkboxes5[j] !== checkbox) {
                checkboxes5[j].checked = false;
                
            }
        }
    
    });
}




// TERRAZA CHECKEBOX A RADIO
var checkboxes6 = document.querySelectorAll('#checkboxToRadio6 input[type="checkbox"]');



for (var i = 0; i < checkboxes6.length; i++) {
    checkboxes6[i].addEventListener('change', function() {
        var checkbox = this;
        // Desmarcar todos los checkboxes menos el seleccionado
        for (var j = 0; j < checkboxes6.length; j++) {
            if (checkboxes6[j] !== checkbox) {
                checkboxes6[j].checked = false;
                
            }
        }
    
    });
}


// COCHERA CHECKEBOX A RADIO
var checkboxes7 = document.querySelectorAll('#checkboxToRadio7 input[type="checkbox"]');



for (var i = 0; i < checkboxes7.length; i++) {
    checkboxes7[i].addEventListener('change', function() {
        var checkbox = this;
        // Desmarcar todos los checkboxes menos el seleccionado
        for (var j = 0; j < checkboxes7.length; j++) {
            if (checkboxes7[j] !== checkbox) {
                checkboxes7[j].checked = false;
                
            }
        }
    
    });
}


// DORMITORIOS CHECKEBOX A RADIO
var checkboxes8 = document.querySelectorAll('.checkboxToRadio8 input[type="checkbox"]');



for (var i = 0; i < checkboxes8.length; i++) {
    checkboxes8[i].addEventListener('change', function() {
        var checkbox = this;
        // Desmarcar todos los checkboxes menos el seleccionado
        for (var j = 0; j < checkboxes8.length; j++) {
            if (checkboxes8[j] !== checkbox) {
                checkboxes8[j].checked = false;
                
            }
        }
    
    });
}



// BAÑOS CHECKEBOX A RADIO
var checkboxes9 = document.querySelectorAll('.checkboxToRadio9 input[type="checkbox"]');



for (var i = 0; i < checkboxes9.length; i++) {
    checkboxes9[i].addEventListener('change', function() {
        var checkbox = this;
        // Desmarcar todos los checkboxes menos el seleccionado
        for (var j = 0; j < checkboxes9.length; j++) {
            if (checkboxes9[j] !== checkbox) {
                checkboxes9[j].checked = false;
                
            }
        }
    
    });
}



// ESTILO ARQUITECTONICO CHECKEBOX A RADIO
var checkboxes10 = document.querySelectorAll('.checkboxToRadio10 input[type="checkbox"]');



for (var i = 0; i < checkboxes10.length; i++) {
    checkboxes10[i].addEventListener('change', function() {
        var checkbox = this;
        // Desmarcar todos los checkboxes menos el seleccionado
        for (var j = 0; j < checkboxes10.length; j++) {
            if (checkboxes10[j] !== checkbox) {
                checkboxes10[j].checked = false;
                
            }
        }
    
    });
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
        message.style.border = '';
        errormessage.innerHTML = ''
    } else {
        message.style.border = '2px solid green';
        errormessage.style.display = 'none'
    }   
}
