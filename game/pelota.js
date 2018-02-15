class Pelota {

	constructor() {
		this.color = '#BDBDBD';
		this.radio = 20;

		this.xPosicionInicial = 400;
		this.yPosicionInicial = 0 + this.radio;

		this.xPosicion = 400;
		this.yPosicion = 0;

		this.yVelocidadInicial = 0;

		this.tiempoInicial = 0;

		this.contador = new Contador();
		this.t = 0;

		this.gravedad = 0.5;
	}


	dibujar() {
		fill(this.color);
		strokeWeight(2);
		stroke('#FFFFFF');

		ellipse(this.xPosicion, this.yPosicion, this.radio * 2, this.radio * 2);
		console.log(this.yPosicion);
	}

	moverEnEjeY() {
		if (this.contador.getCont() % 60 == 0) {
			
			
			this.yPosicion = this.yPosicionInicial + this.yVelocidadInicial * (this.t - this.tiempoInicial) + (1 / 2) * this.gravedad * (pow(this.t, 2) - pow(this.tiempoInicial, 2));
			this.t++;
		}		
	}


}