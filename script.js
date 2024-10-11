function calcularIMC() {

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Validação de entrada
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';
    let corClassificacao = ''; // Para definir a classe de cor

    // Define a classificação e a classe de cor correspondente
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        corClassificacao = 'abaixo-peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
        corClassificacao = 'peso-normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
        corClassificacao = 'sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade grau I';
        corClassificacao = 'obesidade-i';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade grau II';
        corClassificacao = 'obesidade-ii';
    } else {
        classificacao = 'Obesidade grau III ou mórbida';
        corClassificacao = 'obesidade-iii';
    }

    // Atualiza o texto do resultado
    const resultadoIMC = document.getElementById('resultadoIMC');
    const classificacaoIMC = document.getElementById('classificacaoIMC');

    resultadoIMC.textContent = `Seu IMC é ${imc.toFixed(2)}`;
    classificacaoIMC.textContent = `Classificação: ${classificacao}`;

    // Remove classes de cor anteriores
    classificacaoIMC.classList.remove('abaixo-peso', 'peso-normal', 'sobrepeso', 'obesidade-i', 'obesidade-ii', 'obesidade-iii');

    // Adiciona a nova classe de cor
    classificacaoIMC.classList.add(corClassificacao);

    // Adiciona a classe 'show' para mostrar os resultados
    const resultadoDiv = document.querySelector('.resultado');
    resultadoDiv.classList.add('show');
}

document.getElementById('calcular').addEventListener('click', calcularIMC);
