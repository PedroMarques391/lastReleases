# LastReleases

**LastReleases** foi construído com o objetivo de praticar o básico de Web Scraping.

O projeto foi desenvolvido usando TypeScript e Puppeteer para fazer a coleta de dados.

A funcionalidade é bem simples: ao iniciar, ele pega informações dos últimos filmes em exibição no cinema. Essas informações são retiradas do site [AdoroCinema](https://www.adorocinema.com/filmes/numero-cinemas/). São tratadas e enviadas para o email que o usuário desejar. O envio de email é feito usando Nodemailer.

## Tecnologias 

- **TypeScript:** Utilizado como linguagem principal para o desenvolvimento do projeto.
- **Puppeteer:** Usado como ferramenta para realizar o Web Scraping, coletando informações do site AdoroCinema.
- **Nodemailer:** Utilizado para enviar as informações coletadas por email para o usuário.
- **nodemon:** Utilizado como uma dependência de desenvolvimento para monitorar as alterações nos arquivos e reiniciar automaticamente o servidor durante o desenvolvimento.

## Como Rodar o Projeto Localmente

### Clonando o Repositório

Primeiro, clone o repositório e inicialize o projeto:

```bash
git clone https://github.com/PedroMarques391/lastReleases.git
cd lastReleases
npm init -y
```


### Instalação das Dependências

Para instalar as dependências do projeto, execute os seguintes comandos:

1. Instale o `nodemon`:
    ```bash
    npm install ts-node nodemon -D
    ```

2. Instale o `typescript`:
    ```bash
    npm install typescript --save-dev
    ```
3. Instale o `nodemailer` e os tipos:
    ```bash
    npm install nodemailer @types/nodemailer --save-dev
    ```
4. Instale o `puppeteer`:
    ```bash
    npm install puppeteer
    ```

Após isso, renomeie o arquivo `.env.example` para `.env` e substitua o conteúdo das variáveis de ambiente. Em seguida, o projeto estará pronto para rodar.