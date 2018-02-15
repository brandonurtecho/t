class Proyectil {

	constructor(x,y) {
		this.color = '#F48FB1';

		this.ancho = 20;
		this.largo = 30;

		this.xPosicion = x;
		this.yPosicion = y;		

		this.velocidad = 20;
	}

	dibujar() {
		fill(this.color);
		rect(this.xPosicion, this.yPosicion, this.ancho, this.largo);
	}

	mover(){
		this.yPosicion -= this.velocidad; 
	}

	getXPosicion(){
		return this.xPosicion;
	}

	getYPosicion(){
		return this.yPosicion;
	}


	setXPosicion(x){
		this.xPosicion = x;
	}

	setYPosicion(y){
		this.yPosicion = y;
	}
	
	getAncho(){
		return this.ancho;
	}
}