
# Api para uma livraria

Essa api foi desenvolvida no curso Node.js: lidando com buscas, filtros, paginação e erros em uma API  da alura.

Esse projeto será atualizado durante um tempo para estudo.




## Stack utilizada

Node, Express


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/patrickmotta/livraria-backend.git
```

Entre no diretório do projeto

```bash
  cd livraria-backend
```

Instale as dependências

```bash
  npm install
  ou
  yarn install
```

Inicie o servidor

```bash
  npm run dev
  ou 
  yarn dev
```


## Banco de dados

Será necessário possuir um banco mongodb instalado localmente, ou utilize o atlas.

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MONGODB_USER`

`MONGODB_PASSWORD`

`MONGODB_HOST`

`MONGODB_PORT`

`MONGODB_DATABASE`


## Documentação da API

#### Retorna todos os livros

```http
  GET /book/all
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `page` | `number` | Número da página |
| `limit` | `number` | Limite de livros por página |
| `orderBy` | `string` | Campo que deseja utilizar para ordenar, exemplo: name |
| `order` | `string` | ASC ou DESC |

#### em construção......
