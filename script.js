let credito = 0;

function inserirDinheiro(valor) {

  const animacaoDinheiro = document.getElementById("animacao-dinheiro");
  animacaoDinheiro.innerText = valor === 1 ? "💵" : valor === 2 ? "💵💵" : "💵💵💵💵💵";
  animacaoDinheiro.style.opacity = 1;
  animacaoDinheiro.classList.add("inserirDinheiro");

  setTimeout(() => {
    animacaoDinheiro.style.opacity = 0;
    animacaoDinheiro.classList.remove("inserirDinheiro");
  }, 1000);


  credito += valor;
  atualizarInterface();
}

function calcularTroco(troco) {
  let notas = [];
  while (troco > 0) {
    if (troco >= 5) {
      notas.push("R$ 5,00");
      troco -= 5;
    } else if (troco >= 2) {
      notas.push("R$ 2,00");
      troco -= 2;
    } else {
      notas.push("R$ 1,00");
      troco -= 1;
    }
  }
  return notas.join(" + ");
}

function escolherDoce(preco) {
  let mensagem = "";

  if (credito >= preco) {
    let troco = credito - preco;
    if (troco > 0) {
      const trocoNotas = calcularTroco(troco);
      mensagem = `🍬 Doce comprado! Seu troco é: ${trocoNotas}.`;
    } else {
      mensagem = "🍬 Doce comprado! Não há troco.";
    }
    credito = 0;


    const doceAnimado = document.getElementById("doce-animado");
    doceAnimado.style.opacity = 1;
    doceAnimado.classList.add("cairDoce");

    if (troco > 0) {
      const trocoAnimado = document.getElementById("troco-animado");
      trocoAnimado.innerText = `Troco: ${calcularTroco(troco)}`;
      trocoAnimado.style.opacity = 1;
      trocoAnimado.classList.add("cairTroco");
    }

    setTimeout(() => {
      doceAnimado.style.opacity = 0;
      doceAnimado.classList.remove("cairDoce");

      if (troco > 0) {
        const trocoAnimado = document.getElementById("troco-animado");
        trocoAnimado.style.opacity = 0;
        trocoAnimado.classList.remove("cairTroco");
      }
    }, 1500);
  } else {
    mensagem = "❌ Crédito insuficiente! Insira mais dinheiro.";
  }

  document.getElementById("resultado").innerText = mensagem;
  atualizarInterface();
}

function atualizarInterface() {
  document.getElementById("credito").innerText = `Crédito: R$ ${credito.toFixed(2)}`;
  document.getElementById("doceA").disabled = credito < 6;
  document.getElementById("doceB").disabled = credito < 7;
  document.getElementById("doceC").disabled = credito < 8;
}
