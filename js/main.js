function validaExercici1() {
    const resposta = document.getElementById('ex1-resposta').value.toLowerCase();
    const feedback = document.getElementById('ex1-feedback');
    if (resposta === 'el') {
        feedback.textContent = 'Correcte! "el llibre"';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Incorrecte. Pensa en l\'article masculí singular.';
        feedback.style.color = 'red';
    }
}
