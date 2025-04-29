# Projeto A3 - Case 1: Máquina de Doces
Este trabalho propõe a utilização de um Autômato Finito com Saída (AFD) para representar o comportamento de uma máquina de doces simplificada, que aceita moeda de R$1.00 e cédulas de R$2.00 e R$5.00, com disponibilidade de escolha entre três de doces:

- Doce A: R$6,00;

- Doce B: R$7,00;

- Doce C: R$8,00


## ⚙️ Funcionalidades Principais

- **Inserção de Moedas:**  
  Aceita valores de R$1, R$2 e R$5.
- **Seleção de Doces:**  
  Conforme o usuário insere o dinheiro, a escolha entre os 3 tipos de doces vão sendo habilitadas: A (R$6), B (R$7), C (R$8).
- **Gestão de Estados:**  
  Transições precisas entre 16 estados possíveis.
- **Sistema de Troco:**  
  Devolução automática com animação.
- **Feedback Visual:**  
  Animações de inserção de moedas e entrega do doce.

## 🕹️ Como Usar

1. **Inserir Moedas**  
   Clique nos botões:
   - `1`: Insere 1 real
   - `2`: Insere 2 reais
   - `5`: Insere 5 reais

2. **Selecionar Doce**  
   Clique nos Doces quando tiver crédito suficiente:
   - `A`: Doce de 6 reais
   - `B`: Doce de 7 reais
   - `C`: Doce de 8 reais

3. **Receber**  
   Retorno visual das ações:
   - Doce animado
   - Troco animado (se aplicável)

## 🧠 Máquina de Estados Finitos

### Conjunto de estados possíveis do sistema - Q: 
Os elementos deste conjunto correspondem aos diferentes estados que a máquina pode assumir a medida em que o usuário realiza ações.

Q = {<0>, <1>, <2>, <5>, <3>, <4>, <6>, <7>, <8>, <9>, <10>, <11>, <12>, <t0>, <t1>, <t2>, <t3>,<t4>,<t5>,<t6>}


O sistema é controlado por 3 principais operações:

- **Ativação progressiva de opções**: As escolhas de doces devem ser habilitadas apenas quando o valor acumulado atinge ou ultrapassa o preço do item.

- **Cálculo de troco**: O troco deve ser devolvido conforme a diferença entre o valor inserido e o preço do doce selecionado, limitado a um máximo de R$12,00 inseridos.

- **Controle de transições**: Moedas excedentes ao limite máximo são rejeitadas, preservando a integridade do sistema.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Projeto A3 - Case 2: Elevador
Este trabalho propõe a utilização de um Autômato Finito com Pilha para representar o comportamento de um elevador de terréo e 3 andares:


## ⚙️ Funcionalidades Principais

- **Escolha de andar:**  
  Aceita T, 1º andar, 2º andar, 3º andar .
- **Abrir e fechar portas:**  
  Conforme o usuário escolhe o andar, o sistema entende se ele deve abrir ou fechar as portas.
- **Gestão de Estados:**  
  Transições precisas entre 16 estados possíveis.
- **Visual:**  
  Funcionamento com animação e efeito sonoro.
- **Feedback Visual:**  
  Animações de abrir e fechar portas, além de retorno de qual andar se encontra.

## 🕹️ Como Usar

1. **Escolha o andar**  
   Clique nos botões:
   - `T`: Vá para o terréo
   - `1`: Vá para o 1º andar
   - `2`: Vá para o 2º andar
   - `3`: Vá para o 3º andar


## 🧠 Máquina de Estados Finitos

### Conjunto de estados possíveis do sistema - Q: 
Os elementos deste conjunto correspondem aos diferentes estados que a máquina pode assumir a medida em que o usuário realiza ações.

Q = {qTF, q1F, q2F, q3F, qTA, q1A, q2A, q3A}

  - Sufixo F: portas fechadas;
  - Sufixo A: portas abertas;


O sistema é controlado por 3 principais operações:

- **Escolha do andar**

- **Fechar portas e se movimentar para o andar**
  
- **Abrir portas e parar quando chegar no andar desejado**
