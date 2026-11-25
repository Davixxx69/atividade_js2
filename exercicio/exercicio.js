/* ==========================================================================
   EXERCÍCIO 1: FECHAMENTO DE VENDAS
   
   Uma cafeteria precisa apurar os números do dia.
   
   Dados:
   - Preço do café: 8.50 | Quantidade vendida: 42
   - Preço do bolo: 12.00 | Quantidade vendida: 18
   - Taxa operacional: 15.00
   - Clientes atendidos: 30
   - Total de cookies produzidos: 125 | Capacidade da caixa: 6 unidades

   Fórmulas para os cálculos:
   1. Faturamento Bruto = (preço café * quantidade) + (preço bolo * quantidade)
   2. Faturamento Líquido = faturamento bruto - taxa operacional
   3. Ticket Médio = faturamento bruto / total de clientes atendidos
   4. Sobra de Cookies = resto da divisão entre total de cookies e a capacidade da caixa

   Calcule e exiba os 4 resultados no console.
   ========================================================================== */
const p_cafe = 8.50;
const qtd_cafe = 42;

const p_bolo = 12.00;
const qtd_bolo = 18;


const taxa_o = 15.00;
const clientes = 30;

const total_cookies = 125.00;
const capacidade_caixa = 6.00;

const faturamento_bruto = (p_cafe * qtd_cafe) + (p_bolo * qtd_bolo);
const faturamento_liquido = faturamento_bruto - taxa_o;
const ticket_medio = faturamento_bruto / clientes;
const sobre_cookies = total_cookies % capacidade_caixa; 

console.log("1. Faturamento Bruto: " + faturamento_bruto);
console.log("2. Faturamento Líquido: " + faturamento_liquido);
console.log("3. Ticket Médio: " + ticket_medio);
console.log("4. Sobra de Cookies: " + sobre_cookies);



/* ==========================================================================
   EXERCÍCIO 2: VALIDAÇÃO DE CADASTRO E COMPRA
   
   Um sistema precisa validar os dados de um pedido gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Idade informada: 17
   - Código digitado no formulário: "100" (texto)
   - Código registrado no banco: 100 (número)
   - Saldo disponível: 250.00
   - Valor da compra: 250.00

   Regras a verificar e exibir no console:
   1. O cliente atingiu a maioridade civil (18 anos)?
   2. O código digitado confere com o banco considerando apenas o valor?
   3. O código digitado confere com o banco considerando valor e tipo de dado?
   4. O tipo do dado digitado difere do tipo esperado no banco?
   5. O saldo do cliente cobre o valor da compra?
   ========================================================================== */
const idade = 17;
const codigo_digitado = "100";
const codigo_banco = 100;
saldo_disponivel = 250.00;
valor_compra = 250.00;

const maioridade = idade >= 18;
const codigo_valido = codigo_digitado == codigo_banco;
const codigo_valido_tipo = codigo_digitado === codigo_banco;
const tipo_diferente = typeof codigo_digitado !== typeof codigo_banco;
const saldo_cobre = saldo_disponivel >= valor_compra;

console.log("1. Maioridade: " + maioridade);
console.log("2. Código válido: " + codigo_valido);
console.log("3. Código válido (tipo): " + codigo_valido_tipo);
console.log("4. Tipo diferente: " + tipo_diferente);
console.log("5. Saldo cobre compra: " + saldo_cobre);




/* ==========================================================================
   EXERCÍCIO 3: CONCESSÃO DE BENEFÍCIOS
   
   Avalie a liberação de benefícios para o cliente gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Valor da compra: 220
   - Cliente é assinante premium: falso
   - Possui cupom promocional: verdadeiro
   - Endereço possui restrição de entrega: falso
   - Cliente é estudante: verdadeiro
   - Idade: 22

   Regras a verificar e exibir no console:
   1. Frete grátis: concedido para compras a partir de 200 reais ou para
      assinantes premium, desde que o endereço não tenha restrição de entrega.
   2. Desconto universitário: concedido para estudantes com até 29 anos de idade.
   3. Acesso à área VIP: liberado para assinantes premium, ou para compras a
      partir de 300 reais que possuam cupom promocional.
   ========================================================================== */
   const valor_compra2 = 220;
   const assinante_premium = false;
   const cupom_promocional = true;
   const restricao_entrega = false;
   const estudante = true;
   const idade2 = 22;

   const frete_gratis = (valor_compra2 >= 200 || assinante_premium) && !restricao_entrega;
   const desconto_universitario = estudante && idade2 <= 29;
   const acesso_vip = assinante_premium || (valor_compra2 >= 300 && cupom_promocional);

   console.log("1. Frete grátis: " + frete_gratis);
   console.log("2. Desconto universitário: " + desconto_universitario);
   console.log("3. Acesso à área VIP: " + acesso_vip);