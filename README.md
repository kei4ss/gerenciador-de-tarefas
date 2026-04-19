# API de Tarefas - Node.js + Express + Sequelize

API REST para gerenciamento de usuários e tarefas utilizando **Node.js**, **Express** e **Sequelize**.

---

# Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL / PostgreSQL (compatível)
- bcrypt

---

# Arquitetura do Projeto

```
src
 ├── controllers
 │   ├── UsuarioController.js
 │   └── TarefaController.js
 │
 ├── services
 │   ├── UsuarioService.js
 │   └── TarefaService.js
 │
 ├── models
 │   ├── Usuario.js
 │   ├── Tarefa.js
 │   └── associations.js
 │
 ├── routes
 │   ├── usuarioRoutes.js
 │   └── tarefaRoutes.js
 │
 ├── database
 │   └── database.js
 │
 └── app.js
```

---

# Instalação

Clone o projeto

```
git clone <seu-repositorio>
```

Entre na pasta

```
cd nome-do-projeto
```

Instale as dependências

```
npm install
```

---

# Configuração do Banco

Edite o arquivo:

```
src/database/database.js
```

Exemplo:

```js
const { Sequelize } = require("sequelize")

const database = new Sequelize(
    "nome_banco",
    "usuario",
    "senha",
    {
        host: "localhost",
        dialect: "mysql"
    }
)

module.exports = database
```

---

# Executando o Projeto

```
npm start
```

ou

```
node src/app.js
```

Servidor rodando em:

```
http://localhost:3000
```

---

# Endpoints

# Usuarios

## Criar Usuario

```
POST /usuarios
```

Body:

```json
{
  "nome": "João",
  "login": "joao",
  "senha": "123456"
}
```

---

## Listar Usuarios

```
GET /usuarios
```

---

## Buscar Usuario

```
GET /usuarios/:id
```

---

## Atualizar Usuario

```
PUT /usuarios/:id
```

---

## Deletar Usuario

```
DELETE /usuarios/:id
```

---

# Tarefas

## Criar Tarefa

```
POST /tarefas
```

Body:

```json
{
  "titulo": "Estudar Sequelize",
  "descricao": "Criar CRUD",
  "deadline": "2026-04-20",
  "usuario_id": 1,
  "prioridade": "ALTA"
}
```

---

## Listar Tarefas

```
GET /tarefas
```

---

## Buscar Tarefa

```
GET /tarefas/:id
```

---

## Atualizar Tarefa

```
PUT /tarefas/:id
```

---

## Deletar Tarefa

```
DELETE /tarefas/:id
```

---

# Relacionamento

- Um Usuario possui várias Tarefas
- Uma Tarefa pertence a um Usuario

---

# Modelo Usuario

| Campo | Tipo |
|------|------|
| id | integer |
| nome | string |
| login | string |
| senha | string |
| createdAt | date |
| updatedAt | date |

---

# Modelo Tarefa

| Campo | Tipo |
|------|------|
| id | integer |
| titulo | string |
| descricao | string |
| deadline | date |
| prioridade | enum |
| usuario_id | integer |
| createdAt | date |
| updatedAt | date |

---

# Enum Prioridade

Exemplo:

```
BAIXA
MEDIA
ALTA
```

---

# Scripts

Adicionar no package.json

```json
"scripts": {
  "start": "node src/app.js",
  "dev": "nodemon src/app.js"
}
```

---

# Executar em modo desenvolvimento

```
npm run dev
```

---

# Autor

Projeto criado para estudo de: Miquéias Ferreira Dos Santos

- Node.js
- Sequelize
- Arquitetura em camadas
- API REST

---

# Melhorias Futuras

- Autenticação JWT
- Middleware de validação
- Paginação
- Filtros
- Soft delete
- Logs

---

# Licença

MIT

---

API pronta para uso 🚀

