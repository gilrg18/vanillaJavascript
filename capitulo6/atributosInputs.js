//ATRIBUTOS DE INPUTS
const input = document.querySelector(".input-normal");
//className
//document.write(input); //[object HTMLInputElement]
//document.write(input.className); //input-normal
//value
//document.write(input.value); //hola (el valor del input)


//type
// document.write(input.type); //file
// input.type = "range";
// input.type = "color";

//accept - acepta archivos de tipo especifico
input.accept = "image/png";
input.accept = "image/gif";


//form
{/* <form id="formulario">
        <input type="text" name="">
        <input type="submit" name="">
    </form>
    submit que funciona fuera del form 
        <input type="submit" form="formulario"></input> */}


//minLength - Longitud minima de x caracteres
//"Aumenta la longitud del texto a X caracteres como minimo, (actualmente, el texto tiene X caracteres"
input.minLength = 5;
input.setAttribute("minLength", "4");

//placeholder
input.placeholder="buenas";

//required - "Completa este campo"
input.required = "required";