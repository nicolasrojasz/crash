let descripcion = document.querySelector("#descripcion");
let descripcion2 = document.querySelector("#descripcion2");
let descripcion3 = document.querySelector("#descripcion3");
mostrarInfo = () => {
  let divMostrar1 = document.getElementById("divVisibilidad");
  divMostrar1.style.display = "block";
  descripcion.innerHTML = `Crash Bandicoot es un videojuego de plataformas desarrollado por Naughty Dog y publicado por Sony Computer Entertainment para PlayStation. El juego fue lanzado en Norteamérica en septiembre de 1996 y en Europa en noviembre de 1996`;
};

mostrarInfo2 = () => {
  let divMostrar2 = document.getElementById("divVisibilidad2");
  divMostrar2.style.display = "block";
  descripcion2.innerHTML = `Crash Bandicoot N. Sane Trilogy es un videojuego de plataformas desarrollado por Vicarious Visions y publicado por Activision como una exclusiva temporal para la plataforma PlayStation 4.`;
};

mostrarInfo3 = () => {
  let divMostrar3 = document.getElementById("divVisibilida3");
  divMostrar3.style.display = "block";
  descripcion3.innerHTML = `Crash Team Racing Nitro Fueled es un videojuego, perteneciente al género de videojuego de karts desarrollado por el estudio Beenox y publicado por Activision. Es una remasterización del videojuego Crash Team Racing del año 1999, desarrollado originalmente por Naughty Dog para la PlayStation.`;
};
