function calcularIMC() {

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    ////o ! serve para identificar os valores que estão em false (NaN, 0, etc...)
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';
    let corClassificacao = ''; //para definir a classe de cor
    let bgClassificacao = '';  //para definir a classe de background

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        corClassificacao = 'abaixo-peso';
        bgClassificacao = 'bg-abaixo-peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
        corClassificacao = 'peso-normal';
        bgClassificacao = 'bg-peso-normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
        corClassificacao = 'sobrepeso';
        bgClassificacao = 'bg-sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade grau I';
        corClassificacao = 'obesidade-i';
        bgClassificacao = 'bg-obesidade-i';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade grau II';
        corClassificacao = 'obesidade-ii';
        bgClassificacao = 'bg-obesidade-ii';
    } else {
        classificacao = 'Obesidade grau III ou mórbida';
        corClassificacao = 'obesidade-iii';
        bgClassificacao = 'bg-obesidade-iii';
    }

    const resultadoIMC = document.getElementById('resultadoIMC');
    const classificacaoIMC = document.getElementById('classificacaoIMC');

    resultadoIMC.textContent = `Seu IMC é ${imc.toFixed(2)}`;
    classificacaoIMC.textContent = `Classificação: ${classificacao}`;

    classificacaoIMC.classList.remove('abaixo-peso', 'peso-normal', 'sobrepeso', 'obesidade-i', 'obesidade-ii', 'obesidade-iii');

    classificacaoIMC.classList.add(corClassificacao);

    document.body.classList.remove('bg-abaixo-peso', 'bg-peso-normal', 'bg-sobrepeso', 'bg-obesidade-i', 'bg-obesidade-ii', 'bg-obesidade-iii');

    document.body.classList.add(bgClassificacao);

    //adiciona a classe 'show' para mostrar os resultados
    const resultadoDiv = document.querySelector('.resultado');
    resultadoDiv.classList.add('show');
}

document.getElementById('calcular').addEventListener('click', calcularIMC);