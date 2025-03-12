let credito = 0;

function inserirDinheiro(valor) {
  credito += valor;
  document.getElementById("credito").innerText = `Crédito: R$ ${credito.toFixed(2)}`;
}

function escolherDoce(preco) {
  let mensagem = "";

  if (credito >= preco) {
    let troco = credito - preco;
    if (troco > 0) {
      mensagem = `Você comprou o doce! Seu troco é R$ ${troco.toFixed(2)}.`;
    } else {
      mensagem = "Você comprou o doce! Não há troco.";
    }
    credito = 0;
  } else {
    mensagem = "Crédito insuficiente! Insira mais dinheiro.";
  }

  document.getElementById("resultado").innerText = mensagem;
  document.getElementById("credito").innerText = `Crédito: R$ ${credito.toFixed(2)}`;
}
