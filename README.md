# ZipCode

É um aplicativo de busca de endereço por CEP.

### Tecnologias utilizadas
biblioteca/framework: [Express](https://expressjs.com/pt-br/),
Banco de Dados: [MySql](https://www.mysql.com/),
Conteinerização: [Docker](https://www.docker.com/)
E algumas libs.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/), gerenciadores de banco de dados, como o [Dbeaver](https://dbeaver.io/download/) ou [MySQL Workbench](https://www.mysql.com/products/workbench/) e o [Docker](https://www.docker.com/) para subir o banco de dados;

O projeto pode ser executado utilizando o NPM, porém caso prefira pode usar o [Yarn](https://yarnpkg.com/),


### Como rodar o projeto?

Após clone do projeto, abrir terminal na pasta raiz e executar:
`yarn` ou `npm install`
Para a instalação da pasta node_modules e suas dependências.

Depois de instalado executar:
`yarn dev` ou `yarn start`
após isso:
`docker-compose up -d`
para executar o projeto em modo DEV local;


### Como acessar e utilizar:

O Backend fica disponível no: `localhost:8000`, tendo como rota única o método get de busca dos dados do CEP. 
Exemplo:
`http://localhost:8000/?cep=01001-000`
O banco de dados fica disponível no: `localhost:3306`

## Pode ser necessário:

Caso o docker não inicialize a imagem do container do banco de dados criando a tabela, executar script sql utilizando o gerenciador de banco de dados:
```
CREATE DATABASE IF NOT EXISTS zipecodedb;
CREATE TABLE IF NOT EXISTS zipecodedb.zipecodes (
	id INT NOT NULL AUTO_INCREMENT,
    cep VARCHAR(9) DEFAULT NULL,
    logradouro VARCHAR(100) DEFAULT NULL,
    bairro VARCHAR(100) DEFAULT NULL,
    localidade VARCHAR(100) DEFAULT NULL,
    uf VARCHAR(100) DEFAULT NULL,
    complemento VARCHAR(100) DEFAULT NULL,
    ibge VARCHAR(100) DEFAULT NULL,
    gia VARCHAR(100) DEFAULT NULL,
    ddd VARCHAR(100) DEFAULT NULL,
    siafi VARCHAR(100) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
```
