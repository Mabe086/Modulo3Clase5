//Definición función constructora
function Persona(rut,nombre,apellido,region = null) {
    //Definición de atributos
    this.rut = rut
    this.nombre = nombre
    this.apellido = apellido
    this.region = region

    //Definición de métodos
    this.saludar = function() {
        let saludo = `Hola ${this.nombre} ${this.apellido}`
        if(region){
            saludo +=` ud es de ${region}`
        } else {
            saludo +=" ud no tiene región asignada"
        }
        console.log(saludo)
    }
}

//Definición primer objeto
var persona1 = new Persona('12345678-9','Osman','Perez','Santiago')
// console.log("Persona1", persona1);
persona1.saludar()

//Definición segundo objeto
var persona2 = new Persona('22987654-1','Luis','Lopez')
// console.log("Persona2", persona2);
persona2.saludar()


//Ejemplo de objeto sin utilizar clase
var persona3 = {
    rut: '21987567-7',
    nombre: 'María',
    apellido: 'Morales',
    saludar: function() {
        console.log(`Hola ${this.nombre} ${this.apellido}`)
    }
}
// console.log("Persona3", persona3);
// persona3.saludar()

//Segundo ejemplo de objeto sin utilizar clase
var persona4 = {
    rut: '21987567-7',
    nombre: 'María',
    apellido: 'Morales',
}
// persona4.saludar()








//**************************** Segundo Ejemplo****************/
function Rectangulo(nombre,base,altura) {
    this.nombre = nombre
    this.base = base
    this.altura = altura
    this.calcularArea = function(){
        return base * altura
    }
}
//**************************** Fin Segundo Ejemplo****************/

//Ejemplo para comprobar la estructura de la clase Rectángulo
// const rectangulo1 = new Rectangulo("Pruebas", 10, 4)
// console.log(rectangulo1);

let rectangulos = []
//Definición de ciclo para solicitar los datos de 3 rectángulos
for(let index = 1; index <= 2; index++) {
    alert(`Por favor ingresar el rectángulo ${index}`)
    var nombre = prompt(`Ingrese el nombre del rectángulo ${index}`)
    var base = prompt(`Ingrese la base del rectángulo ${index}`)
    var altura = prompt(`Ingrese la altura del rectángulo ${index}`)

    var objetoRectangulo = new Rectangulo(nombre, base, altura)
    rectangulos.push(objetoRectangulo)
}
// console.log(rectangulos);


rectangulos.forEach(function(rectangulo){
    console.log(rectangulo.nombre, "Área: ", rectangulo.calcularArea());
})