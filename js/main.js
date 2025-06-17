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

function validaExerciciAccentuacio1() {
    const resposta = document.getElementById('ex-accent-1-resposta').value;
    const feedback = document.getElementById('ex-accent-1-feedback');
    if (resposta === 'no') {
        feedback.textContent = 'Correcte! "examens" és plana i acaba en -ens, per tant no porta accent.';
        feedback.style.color = 'green';
    } else if (resposta === 'si') {
        feedback.textContent = 'Incorrecte. Recorda les regles per a paraules planes.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Si us plau, selecciona una resposta.';
        feedback.style.color = 'orange';
    }
}

function validaExerciciAccentuacio2() {
    const resposta = document.getElementById('ex-accent-2-resposta').value.toLowerCase();
    const feedback = document.getElementById('ex-accent-2-feedback');
    if (resposta === 'dor' || resposta === 'dor,') { // Accept with or without comma, common mistake
        feedback.textContent = 'Correcte! La síl·laba tònica és "dor".';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Incorrecte. Intenta-ho de nou. La paraula és or-di-na-DOR.';
        feedback.style.color = 'red';
    }
}

function validaExerciciAccentuacio3() {
    const resposta = document.getElementById('ex-accent-3-resposta').value.toLowerCase();
    const feedback = document.getElementById('ex-accent-3-feedback');
    if (resposta === 'història') {
        feedback.textContent = 'Correcte! "història" és esdrúixola i sempre porta accent.';
        feedback.style.color = 'green';
    } else if (resposta === 'historia') {
        feedback.textContent = 'Incorrecte. És una paraula esdrúixola. Les esdrúixoles sempre s\'accentuen.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Resposta no reconeguda. Escriu la paraula amb accent si creus que en porta.';
        feedback.style.color = 'orange';
    }
}
