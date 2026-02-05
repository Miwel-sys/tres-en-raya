const casillas = document.querySelectorAll('.casilla');

casillas.forEach(function(casilla) {

  casilla.addEventListener('click', function() {
    console.log('Has clicado una casilla');
    
  });
});