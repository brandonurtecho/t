class Contador {

	constructor() {
		this.cont = 0;
	}

	calcular() {
		this.cont++;
	}

	getCont() {
		return this.cont;
	}

	setCont(cont) {
		this.cont = cont;
	}
}