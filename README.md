# Urban Motors - Sistema de Controle de Estoque

## Descrição

O **Sistema de Controle de Estoque da Urban Motors** é uma aplicação web destinada ao gerenciamento de veículos em estoque de uma concessionária, permitindo o controle de entrada e saída de veículos, bem como a visualização de detalhes como placa, modelo, ano, estado, cor e preço.

### Funcionalidades Principais

- **Cadastro de Veículos**: Permite cadastrar novos veículos no sistema, com campos como placa, modelo, estado, ano, cor e preço, além da possibilidade de incluir uma imagem do veículo.
- **Controle de Entrada de Veículos**: Permite registrar as entradas de veículos no estoque, especificando a quantidade e vinculando aos produtos já cadastrados.
- **Controle de Saída de Veículos**: Registra a saída dos veículos do estoque, mantendo o controle da quantidade disponível.
- **Listagem e Remoção de Veículos**: Visualiza todos os veículos cadastrados e permite a remoção de veículos, desde que não tenham movimentações (entradas ou saídas) associadas.
- **Interface Intuitiva**: Utiliza uma interface simplificada, construída com componentes visuais do **Chakra UI**, facilitando o uso e a interação.

## Tecnologias Utilizadas

- **React.js**: Framework JavaScript para construção da interface do usuário.
- **Chakra UI**: Biblioteca de componentes UI que fornece uma experiência de design acessível e rápida.
- **LocalStorage**: Armazenamento local no navegador para persistir dados de produtos, entradas e saídas de estoque.
- **JavaScript**: Linguagem de programação utilizada para manipulação de dados e lógica de negócios.
- **HTML/CSS**: Linguagens de marcação e estilo para estruturar e estilizar a aplicação.

## Estrutura do Projeto

O projeto é composto por quatro páginas principais:

1. **Produtos**: Responsável pelo cadastro de novos veículos no estoque. Permite o envio de uma imagem do veículo, e o preenchimento de dados como placa, modelo, estado, ano, cor e preço. Todos os veículos cadastrados são armazenados no `LocalStorage` e exibidos em uma tabela.

2. **Entradas de Estoque**: Permite o registro de entradas de veículos no estoque, com seleção do veículo previamente cadastrado e definição da quantidade a ser adicionada.

3. **Saídas de Estoque**: Similar à funcionalidade de entrada, permite a saída de veículos do estoque, controlando a quantidade disponível.

4. **Saldo de Estoque**: Mostra o saldo atual de cada veículo, considerando as entradas e saídas registradas.

## Como Rodar o Projeto

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/urban-motors-estoque.git
   cd urban-motors-estoque
   ```

2. **Instale as Dependências**

   Certifique-se de ter o **Node.js** instalado. Execute o comando:

   ```bash
   npm install
   ```

3. **Inicie o Projeto**

   Para rodar a aplicação localmente, utilize:

   ```bash
   npm start
   ```

4. **Acessar a Aplicação**

   Abra o navegador e acesse:

   ```
   http://localhost:3000
   ```

## Como Usar

### 1. **Cadastrar Veículo**
   - Vá para a página "Produtos".
   - Preencha os campos com as informações do veículo.
   - Selecione uma imagem do veículo.
   - Clique em "Cadastrar" para salvar o veículo no estoque.

### 2. **Registrar Entrada**
   - Vá para a página "Entradas de Estoque".
   - Selecione o veículo previamente cadastrado.
   - Informe a quantidade a ser adicionada.
   - Clique em "Salvar" para registrar a entrada.

### 3. **Registrar Saída**
   - Vá para a página "Saídas de Estoque".
   - Selecione o veículo e informe a quantidade a ser removida.
   - Clique em "Salvar" para registrar a saída.

### 4. **Consultar Saldo**
   - Acesse a página "Saldo de Estoque" para ver o saldo atual de cada veículo, considerando entradas e saídas.

## Contribuições

Contribuições são bem-vindas! Caso tenha sugestões ou encontre problemas, sinta-se à vontade para abrir uma issue ou enviar um pull request.
