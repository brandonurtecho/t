class Jugador {

	constructor() {
		this.color = '#E0F2F1';

		this.ancho = 40;
		this.largo = 60;

		this.xPosicion = 0;
		this.yPosicion = height - this.largo - 1;

		this.proyectil = [];
		this.proyectil[0] = new Proyectil(this.xPosicion, this.yPosicion);

		this.disparar = false;

		this.contador = new Contador();

		this.numeroProyectiles = 0;
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
				if(this.contador.getCont() % 5 == 0){
					this.crearProyectiles();
				}
				
			}
			if (!keyIsDown(32) && this.disparar) {
				this.dejaDeDisparar();
			}
		}

		this.dibujarProyectiles();
	}

	crearProyectiles() {
		let espacioEntreProyectiles = -100;
		this.proyectil[this.numeroProyectiles] = new Proyectil(this.xPosicion + this.ancho / 2 - this.proyectil[0].getAncho() / 2, this.yPosicion + 1 + this.largo + espacioEntreProyectiles);
		console.log(this.proyectil.length)
		this.numeroProyectiles++;

	}

	dibujarProyectiles() {
		for (var i = 0; i < this.proyectil.length; i++) {
			this.proyectil[i].dibujar();
			this.proyectil[i].mover();
		}
	}

	borrarProyectiles() {

	}

	dejaDeDisparar() {
		this.disparar = false;
		this.contador.setCont(0);
		this.numeroProyectiles = 0;
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