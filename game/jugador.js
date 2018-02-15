class Jugador {

	constructor() {
		this.color = '#E0F2F1';

		this.ancho = 40;
		this.largo = 60;

		this.xPosicion = width/2;
		this.yPosicion = height - this.largo - 1;

		this.proyectil = [];

		this.disparar = false;

		this.contador = new Contador();

		this.numeroProyectiles = 0;
		this.espacioEntreProyectiles = -100;
	}

	dibujar() {
		fill(this.color);
		rect(this.xPosicion, this.yPosicion, this.ancho, this.largo);
	}

	// El movimiento solo es lateral		
	mover() {
		if (keyIsDown(RIGHT_ARROW)) {
			this.xPosicion += 15;
		}
		if (keyIsDown(LEFT_ARROW)) {
			this.xPosicion -= 15;
		}
	}

	atacar() {

		this.contador.calcular();

		if (keyIsDown(32) && !this.disparar) {
			this.disparar = true;
		}

		if (this.disparar) {
			if (keyIsDown(32)) {
				if (this.contador.getCont() % 5 == 0) {
					this.crearProyectiles();
				}
			}
			if (!keyIsDown(32) && this.disparar) {
				this.dejaDeDisparar();
			}
		}
		this.borrarProyectiles();
		this.dibujarProyectiles();
	}

	crearProyectiles() {
		this.proyectil[this.numeroProyectiles] = new Proyectil(this.xPosicion + this.ancho / 2 - (20 / 2), this.yPosicion + 1 + this.largo + this.espacioEntreProyectiles);
		this.numeroProyectiles++;
	}

	dibujarProyectiles() {
		for (var i = 0; i < this.proyectil.length; i++) {
			this.proyectil[i].dibujar();
			this.proyectil[i].mover();
		}
	}

	borrarProyectiles() {
		if (this.proyectil.length != 0) {
			let ultimoProyectil = this.proyectil.length - 1;
			if (this.proyectil[ultimoProyectil].getYPosicion() < 0) {
				this.contador.reiniciar();
				this.numeroProyectiles = 0;
				this.proyectil.length = 0;
			}			
		}		
	}	

	dejaDeDisparar() {
		this.disparar = false;

	}

	isDisparar() {
		return this.disparar;
	}

	getXPosicion() {
		return this.xPosicion;
	}

	getYPosicion() {
		return this.yPosicion;
	}
}