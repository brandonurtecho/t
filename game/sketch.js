
function setup() {
	createCanvas(1200, 800);
	jugador = new Jugador();
}

function draw() {

	background(51);

	jugador.dibujar();
	jugador.mover();
	jugador.atacar();

}


