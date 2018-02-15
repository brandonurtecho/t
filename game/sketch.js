function setup() {
	createCanvas(1200, 800);
	jugador = new Jugador();
	// pelota = new Pelota();
}

function draw() {

	background(51);
	// pelota.dibujar();
	// pelota.moverEnEjeY()

	jugador.dibujar();
	jugador.mover();
	jugador.atacar();
}
