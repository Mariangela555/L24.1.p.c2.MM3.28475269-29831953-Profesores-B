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

module.exports = {
    Cl_profesor,
    Cl_fijo,
    Cl_contratado
};