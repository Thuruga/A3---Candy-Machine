const background = document.querySelector('.background');
const candies = ['🍬', '🍫', '🍭', '🍩', '🍪', '🎂', '🍰', '🧁'];

function createCandy() {
    const candy = document.createElement('div');
    candy.classList.add('candy');
    const randomCandy = candies[Math.floor(Math.random() * candies.length)];
    candy.textContent = randomCandy;
    candy.style.fontSize = `${Math.random() * 2 + 1}rem`;
    candy.style.left = `${Math.random() * 100}vw`;
    candy.style.animationDuration = `${Math.random() * 3 + 2}s`;
    background.appendChild(candy);
    setTimeout(() => candy.remove(), 5000);
}
setInterval(createCandy, 300);

let credito = 0;
const limiteCredito = 12;
let doceSelecionado = null;
let precoSelecionado = 0;

function inserirDinheiro(valor) {
  if (credito + valor > limiteCredito) {
    alert('Limite máximo de R$12,00 atingido!');
    return;
  }
  
  credito += valor;
  atualizarInterface();

  // Nova animação da moeda
  const animacao = document.createElement('div');
  animacao.classList.add('animacao-moeda');
  animacao.textContent = '💰';
  animacao.style.left = `${event.clientX - 50}px`;
  document.body.appendChild(animacao);
  setTimeout(() => animacao.remove(), 800);
}

function selecionarDoce(preco, doce) {
  doceSelecionado = doce;
  precoSelecionado = preco;
  
  document.querySelectorAll('.doce button').forEach(btn => {
    btn.classList.remove('selecionado');
  });
  
  event.target.classList.add('selecionado');
  document.getElementById('botao-comprar').disabled = false;
}

function comprarDoce() {
  if (!doceSelecionado || credito < precoSelecionado) {
    document.getElementById('resultado').textContent = '❌ Selecione um doce e insira crédito suficiente!';
    return;
  }

  const troco = credito - precoSelecionado;
  const doceAnimado = document.getElementById('doce-animado');
  const trocoAnimado = document.getElementById('troco-animado');

  // Animação do doce
  doceAnimado.textContent = doceSelecionado;
  doceAnimado.style.animation = 'bounce 1s ease';

  // Animação do troco
  if (troco > 0) {
    trocoAnimado.textContent = `Troco: R$ ${troco},00`;
    trocoAnimado.style.animation = 'float 2s ease-out';
    setTimeout(() => trocoAnimado.textContent = '', 2000);
  }

  // Resetar estado
  credito = 0;
  doceSelecionado = null;
  precoSelecionado = 0;
  
  document.getElementById('resultado').textContent = '✅ Compra realizada com sucesso!';
  document.getElementById('botao-comprar').disabled = true;
  document.querySelectorAll('.doce button').forEach(btn => {
    btn.classList.remove('selecionado');
  });
  
  setTimeout(() => {
    doceAnimado.textContent = '';
  }, 2000);
  
  atualizarInterface();
}

function atualizarInterface() {
  document.getElementById('credito').textContent = `Crédito: R$ ${credito},00`;
  document.getElementById('doceA').disabled = credito < 6;
  document.getElementById('doceB').disabled = credito < 7;
  document.getElementById('doceC').disabled = credito < 8;
}