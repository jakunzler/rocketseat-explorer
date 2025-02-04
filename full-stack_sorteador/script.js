// Função que gera um número inteiro aleatório entre min e max (inclusivos)
function getRandomInt(min, max) {
  // min e max podem chegar como string, então converta para número
  const minValue = parseInt(min, 10);
  const maxValue = parseInt(max, 10);

  // Math.random() gera um número entre 0 e 1, então ajustamos para o intervalo:
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

function sortearNumeros(qtde, min, max) {
  // Exemplo gerando números SEM repetição:
  const numeros = new Set();

  // Repete enquanto não tiver a quantidade desejada
  while (numeros.size < qtde) {
    const numeroAleatorio = getRandomInt(min, max);
    numeros.add(numeroAleatorio);
  }

  // Converte para array
  return Array.from(numeros);
}

function exibirAnimado(numeros) {
  const containerResultado = document.getElementById('resultado');

  // Primeiro, limpe o container antes de exibir novos números
  containerResultado.innerHTML = '';

  let index = 0;

  // Usa setInterval para ir mostrando um número a cada X ms
  const intervalo = setInterval(() => {
    if (index >= numeros.length) {
      // Se já exibiu todos, para o intervalo
      clearInterval(intervalo);
      return;
    }

    // Cria um elemento <span> para cada número e aplica classe com animação
    const numeroElemento = document.createElement('span');
    numeroElemento.textContent = numeros[index];
    numeroElemento.classList.add('numero');

    containerResultado.appendChild(numeroElemento);

    index++;
  }, 500); // meio segundo entre cada número
}

function inicializar() {
  const botaoSortear = document.getElementById('botaoSortear');

  botaoSortear.addEventListener('click', () => {
    const quantidade = document.getElementById('quantidadeInput').value;
    const minimo = document.getElementById('minimoInput').value;
    const maximo = document.getElementById('maximoInput').value;

    // Converte as strings para número
    const qtde = parseInt(quantidade, 10);
    const min = parseInt(minimo, 10);
    const max = parseInt(maximo, 10);

    // Validações simples
    if (isNaN(qtde) || isNaN(min) || isNaN(max)) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }
    if (min > max) {
      alert('O valor mínimo não pode ser maior que o valor máximo!');
      return;
    }
    if (qtde <= 0) {
      alert('A quantidade deve ser pelo menos 1!');
      return;
    }

    // Gera números e exibe
    const numerosSorteados = sortearNumeros(qtde, min, max);
    exibirAnimado(numerosSorteados);
  });
}

// Garante que a função rode depois que o DOM estiver carregado
window.addEventListener('DOMContentLoaded', inicializar);
