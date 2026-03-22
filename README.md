Cadastro de Endereço via CEP

Este projeto é uma aplicação web simples e funcional que automatiza o preenchimento de formulários de endereço a partir do CEP informado pelo usuário. O projeto foca na experiência do usuário (UX) ao evitar digitação repetitiva e garantir a persistência dos dados mesmo após o fechamento do navegador.

Funcionalidades

* **Busca Automática de CEP**: Consome a API pública [ViaCEP](https://viacep.com.br/) para obter dados de logradouro, bairro, cidade e estado.
* **Tratamento de Dados**: Limpeza de caracteres especiais (hífens) para compatibilidade com campos do tipo `number`.
* **Persistência Local**: Utiliza `localStorage` para salvar os dados preenchidos, permitindo que as informações sejam restauradas automaticamente ao recarregar a página.
* **Validação de Entrada**: O sistema valida se o CEP possui o formato correto antes de realizar a requisição.
* **Interface Adaptativa**: Inclui um seletor de tema (Dark/Light Mode) para melhor conforto visual.

Tecnologias Utilizadas

* **HTML5**: Estrutura semântica do formulário.
* **CSS3**: Estilização moderna e suporte a temas claro/escuro.
* **JavaScript (ES6+)**:
    * `Fetch API` para requisições assíncronas.
    * Manipulação de DOM para preenchimento dinâmico.
    * `JSON.parse` e `JSON.stringify` para gerenciamento de objetos no LocalStorage.

Como utilizar

1.  Clone este repositório.
2.  Abra o arquivo `index.html` em seu navegador.
3.  Insira um CEP de 8 dígitos no campo correspondente.
4.  Ao sair do campo (evento *blur*), os dados de endereço serão preenchidos automaticamente.
5.  Preencha o número da residência e clique em **Cadastrar**.
6.  Recarregue a página e veja que seus dados permanecem salvos!


Desenvolvido por Álisson Caetano, como projeto do curso de Front-End da EBAC 



