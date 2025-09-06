document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const nombreInput = document.getElementById('inp-nombre');
    const emailInput = document.getElementById('inp-email');
    const alerta1 = document.getElementById('alerta1');
    const alerta2 = document.getElementById('alerta2')

    form.addEventListener('submit', function (e) {
      let valido = true
      e.preventDefault()
      alerta1.textContent = '';
      alerta2.textContent = '';
      if (nombreInput.value.trim() === '') {
        alerta1.textContent = 'Por favor ingresa tu nombre';
        valido = false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!(emailRegex.test(emailInput.value))){
         alerta2.textContent = 'Porfavor ingrese un correo valido'
         valido = false;
      }
      if(valido){
        nombreInput.value = '';
        emailInput.value = '';
      }
    });
  });