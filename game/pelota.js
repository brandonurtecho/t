class Pelota {

	constructor() {
		this.color = '#BDBDBD';
		this.radio = 20;

		this.xPosicionInicial = 400;
		this.yPosicionInicial = 0 + this.radio;

		this.xPosicion = 400;
		this.yPosicion = 0;

		this.yVelocidadInicial = 0;
		this.xVelocidadInicial = 10;

		this.tiempoInicial = 0;

		this.contador = new Contador();
		this.t = 0;

		this.gravedad = 0.8;
	}


	dibujar() {
		fill(this.color);
		strokeWeight(2);
		stroke('#FFFFFF');

		ellipse(this.xPosicion, this.yPosicion, this.radio * 2, this.radio * 2);
		console.log(this.yPosicion);
	}

	mover(){
		if(this.contador.getCont() % 60 == 0){
			this.moverEnEjeY();
			this.moverEnEjeX();
			this.t++;
		}
	}

	moverEnEjeY() {
		if (this.contador.getCont() % 60 == 0) {			
			this.yPosicion = this.yPosicionInicial + this.yVelocidadInicial * (this.t - this.tiempoInicial) + (1 / 2) * this.gravedad * (pow(this.t, 2) - pow(this.tiempoInicial, 2));
		}		
	}

	moverEnEjeX() {
		if (this.contador.getCont() % 60 == 0) {			
			this.xPosicion = this.xPosicionInicial + this.xVelocidadInicial * this.t;
		}		
	}


}