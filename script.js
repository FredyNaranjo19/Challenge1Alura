//-------Selección de Elementos-------//
const btnencriptar = document.querySelector(".encriptarbtn");
const txtencriptar = document.querySelector(".encriptar");
const alerta = document.querySelector(".alert");
const respuesta = document.querySelector(".check");
const tarjeta = document.querySelector(".tarjeta");
const btncopiar = document.querySelector(".copybtn");
const btndesencriptar = document.querySelector(".desencriptarbtn");

btnencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtencriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        alerta.style.background = "#52BE80";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El campo de texto esta vacio";
        
        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        alerta.style.background = "#52BE80";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "No debe tener acentos ni caracteres especiales";
        
        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.background = "#52BE80";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El texto debe ser en minúscula";
        
        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btncopiar.style.visibility = "inherit";
        tarjeta.remove(); 
    }
});

btndesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtencriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        alerta.style.background = "#52BE80";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        alerta.style.background = "#52BE80";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.background = "#52BE80";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btncopiar.style.visibility = "inherit";
        tarjeta.remove(); 
    }
});

btncopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
});