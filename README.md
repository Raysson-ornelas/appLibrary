# Desafio ioasys books
Bem vindo ao repositório do desafio ioasys books, na qual foi um projeto desenvolvido como parte do processo seletivo da empresa [ioasys](https://ioasys.com.br).

## O que é o ioasys books
Um aplicativo que faz requisições em um Api para validar o login no aplicativo e retorna todos os livros e seus devidos atributos. Esses resultados podem ser filtrados pelo nome do livro e também por uma combinação de filtros pré-estabelecido.

## Rodando o projeto
Para rodar o projeto instala-se as dependências com `yarn` ou `npm install`. Instale a ferramenta [Expo](https://expo.dev). Para rodar execute o comando expo start.

## Estruturação do projeto
O projeto segue estruturado em pastas onde temos a pasta pages que contém as páginas separada em Books e SignIn, a pasta routes contendo as rotas do app e sua models. E uma pasta para interfaces na qual contem a interface para os dados dos livros fornecidos pela API.

### Ferramentas
O projeto foi desenvolvido utilizando a ferramenta Expo com a linguagem `TypeScript` e a biblioteca React Native. Para o css foi utilizado a coleção de componentes [React Native Paper](https://callstack.github.io/react-native-paper/index.html), dada a sua compatibilidade e a facilidade de manuseio.

## Estratégia de desenvolvimento.
Dado a necessidade do desenvolvimento de mais telas do app, foi utilizado o React Navigation para gerenciar as rotas. Após a configuração das rotas foi desenvolvido os layouts da tela de login e da tela de livros seguindo o [layout](https://www.figma.com/file/JRUQaA8sZ9PMiu76FcfvNG/Desafio-React-Native%3A-ioasys-books?node-id=0%3A1) definido pela ioasys. Em seguida foi implementado os estados para controle dos campos de input e as funções para consultar a API.

###Navegação
Na criação do componente de navegação foi desenvolvido um modelo contendo os tipos de cada página e suas propriedades. Foi utilizado essa abordagem visto que seria possível passar o token de autenticação para a página de livros através dos parâmetros. 

### Componentes de exibição.
Para agilizar o desenvolvimento foi aplicado o uso da coleção de componentes React Native Paper. Sua escolha foi dada pela a experiência da pessoa desenvolvedora com a ferramenta e suas dependências serem baseadas todas em `js`. 

Foi passado o botão de entrar para baixo do campo de senha para ser possível inserir o botão com a função de ocultar ou não os dados digitados no campo senha.

Para gerar os cards de livros que por sua vez é constituída com base no objeto resultante da chamada API passando o token de autorização. 

Para um bom dimensionamento dos cards ele possui um scroll lateral.

### Requisição da API
Para as requisições da API foi utilizado o Fetch. Na página de SignIn ele é utilizado passando em seu body um JSON contento o email e senha necessários para autenticar e gerar o token de autorização. Foi feito tratamento para validar o status retornado da API possibilitando ou não o login do usuário.

Na página de livros foi feito uma função para fazer a requisição da lista de livros na API. Foi passado o Token de autorização no headers. Para tratar o retorno dessa consulta foi implementado um modelo de interface para os livros visando a definição de tipo de cada campo do objeto ao consultar a API.

## Melhorias
Dada a condição de tempo o produto até então desenvolvido trata-se da versão 0. Como versão 1 foram pensadas algumas melhorias tais como:

### Refatoração 
Separar as responsabilides dos componentes das requisições da API.

### Componentização 
Separar os componentes de cada página vizando a reutilização dos componentes.

### Paginação ou Scroll Infinito.
Adotar uma estratégia de paginar as chamadas ou ate mesmo a implementação de um scroll infinito.

### Teste unitário.
Estratégia que faz muito sentido para a evolução do produto, o que seria de muito valor para uma versão um com o aumento de elementos e equipe, o teste embora custoso se faz indispensável.

### Tratamento de resultados
Tratar os resultados retornados pela api como unknown e formatação dos valores na tabela, como data links etc.

### Criação de um contexto
Para melhor gerenciar melhor os estados e os dados referentes a autenticação.

### Filtros
Implementar os filtros.

## Considerações finais
As práticas desenvolvidas levando em consideração a entregar em tempo hábil.



