const elementos = document.querySelectorAll('.fa');
let elementoSeleccionado = null;

elementos.forEach(function(fa) {
  fa.addEventListener('mouseover', function() {
    if (elementoSeleccionado !== null) {
      elementoSeleccionado.classList.remove('seleccionado');
    }
    elementoSeleccionado = fa;
    fa.classList.add('seleccionado');
  });
});
