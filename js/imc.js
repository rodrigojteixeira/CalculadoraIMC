
const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura*altura)).toFixed(1);
        
        let classificacao = "";
        let cor = "";
        const Pminimo = (18.5*(altura*altura)).toFixed(1);
        const Pmaximo = (25*(altura*altura)).toFixed(1);

        if (valorIMC < 18.5){
            cor = 'Orange';
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            cor = 'Lime';
            classificacao = 'com o peso ideal.';
        }else if (valorIMC < 30){
            cor = 'Orange';
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            cor = 'Red';
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            cor = 'Red';
            classificacao = 'com obesidade grau II.';
        }else {
            cor = 'Red';
            classificacao = 'com obesidade grau III.';
        }
        
        classificacao = classificacao + '\nSeu peso ideal pode variar entre ' + Pminimo + 'kg e ' + Pmaximo + 'kg.';
        resultado.style.color = cor;
        resultado.textContent =  nome + ' seu IMC é ' + valorIMC + ' e você está ' + classificacao;
    } else {
        resultado.textContent =  'Preencha todos os campos !';
    }

}
calcular.addEventListener('click', imc);