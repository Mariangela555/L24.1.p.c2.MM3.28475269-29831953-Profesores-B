class Cl_profesor {
    constructor(nombre, bono) {
        this.nombre = nombre;
        this.bono = bono;
    }
}

class Cl_fijo extends Cl_profesor {
    constructor(nombre, bono, sueldo) {
        super(nombre, bono);
        this.sueldo = sueldo;
    }
}

class Cl_contratado extends Cl_profesor {
    constructor(nombre, bono, horas) {
        super(nombre, bono);
        this.horas = horas;
        this.valorHora = 10;
    }

    calcularIngreso() {
        return this.bono + (this.horas * this.valorHora);
    }
}

// Función para obtener los datos del formulario y calcular el ingreso
function calcularIngreso() {
    const nombre = document.getElementById('nombre').value;
    const bono = parseInt(document.getElementById('bono').value);
    const horas = parseInt(document.getElementById('horas').value);

    const profesorContratado = new Cl_contratado(nombre, bono, horas);
    const ingresoTotal = profesorContratado.calcularIngreso();

    document.getElementById('resultado').textContent = `Ingreso total del profesor ${nombre}: $${ingresoTotal}`;
}