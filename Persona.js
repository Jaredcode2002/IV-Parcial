class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
      super(nombre, edad); // Llama al constructor de la clase padre (Persona)
      this.grado = grado;
    }
  
    estudiar() {
      console.log(`${this.nombre} está estudiando en el grado ${this.grado}.`);
    }
  }
  
  var estudiante1 = new Estudiante('Juan', 20, 'Universidad');
  estudiante1.saludar(); // Método heredado de Persona
  estudiante1.estudiar(); // Método de Estudiante
  