recipiente = "Gilberto";
alert(recipiente);
//String
string = "cadena de texto";
//Number
number = 25;
//Bool
booleano = true;

//Declaraciones de varabiales: var, let y const (let y const ecmascript 6)
//let nos limita el alcance de la variable al bloque en la que la creamos
let numero = 18;

const nombre = "Gilberto";
//Las constantes no pueden cambiar
//TypeError: Assignment to constant variable.
// nombre = "Gil";


//Declarar variable:
//alert(num); //Reference error: num is not defined (no se ha creado la variable num)
//let num; //undefined (existe pero no tiene valor)
//Inicializar variable:
//num = 25;
//Declarar e Inicializar en la misma linea:
let num = 25;

const numberConst = 2;
// const numberConstError; //Error: 'const' declarations must be initialized.
// numberConstError = 5;
alert(numberConst);

//Multiples variables:
let var1, var2, var3;
var1= 1;
var2=2;
var3 = 3;
let var4=4, var5=5;

//Null
let varNull = null; //Una variable vacia o nula intencionalmente
//el valor es null, diferente de undefined que temporalmente no tiene un valor.
//null es una variable inicializada y undefined no, solo declarada

//NaN
let varNaN = 2; varNaN2 = "Gil";
alert(varNaN + varNaN2); //2Gil Concatenacion
alert(varNaN * varNaN2); //NaN: Not a number (no se puede realizar esa operacion)
