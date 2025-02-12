# Simple Authentication Model

O **Simple Authentication Model** é um projeto prático de backend desenvolvido para estudos de autenticação básica utilizando **Express** e **EJS** para as views. O projeto inclui funcionalidades de registro, login, logout e uma página protegida (dashboard) que só pode ser acessada por usuários autenticados.

<!-- - **Veja Online:** [Link do Projeto](#) *(adicione o link quando disponível)* -->

<!-- ![Projeto](./src/assets/images/imgSimpleAuthModel.png) *(adicione uma imagem do projeto)* -->

## Funcionalidades

- 🏠 Página inicial com formulários de login e registro
- 📄 Autenticação básica com sessões usando `express-session`
- 🛠️ Página protegida (dashboard) acessível apenas para usuários autenticados
- 🔒 Logout para encerrar a sessão do usuário
- 📱 Interface simples e funcional para estudos

## Tecnologias Utilizadas

- **Node.js**
- **Express** (Framework para backend)
- **EJS** (Template engine para views)
- **express-session** (Gerenciamento de sessões)
- **HTML** e **CSS** (Interface básica)

## Como Executar o Projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/simple-authentication-model.git
    cd simple-authentication-model
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Execute o projeto:

    ```bash
    npm run dev
    ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em execução.

## Estrutura do Projeto

- **`src/controllers/`**: Contém os controladores para autenticação (`auth-controller.js`) e dashboard (`dashboard-controller.js`).
- **`src/views/`**: Contém as views EJS para a página inicial (`index.ejs`) e dashboard (`dashboard.ejs`).
- **`src/middlewares/`**: Contém o middleware de autenticação (`auth-middleware.js`).
- **`src/routes/`**: Define as rotas da aplicação (`router.js`).
- **`app.js`**: Arquivo principal do projeto, onde o servidor é configurado.

## Aprendizados

Este projeto foi uma excelente oportunidade para:

- 🔷 Aprofundar conhecimentos em **Node.js** e **Express**.
- 🔷 Implementar autenticação básica com sessões usando **express-session**.
- 🔷 Criar views dinâmicas com **EJS**.
- 🔷 Desenvolver middlewares para proteger rotas.
- 🔷 Praticar boas práticas de organização de código em projetos backend.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request. Se você tiver sugestões de melhorias ou novas funcionalidades, ficarei feliz em receber!

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

**M Daniel Dantas**

- **GitHub:** [mdanieldantas](https://github.com/mdanieldantas)
- **LinkedIn:** [mdanieldantas](https://www.linkedin.com/in/mdanieldantas)
- **Portfólio:** [Portfólio de Daniel Dantas](https://danieldantasdev.vercel.app)
- **Email:** [contatomarcosdgomes@gmail.com](mailto:contatomarcosdgomes@gmail.com)
- **Currículo:** [Baixar Currículo](https://drive.google.com/file/d/1Z_tqBv6kg4wkDAQHAvY3lcuVSq3rabTt/view?usp=drive_link)