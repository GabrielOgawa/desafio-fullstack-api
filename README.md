<h1 align="center">Desafio FullStackAPI</h1>

<h2>Instalação e Configuração</h2>

<blockquote>
  <p>1. Clone o repositório e instale as dependencias</p>
  <p>2. Altere o aquivo .env.example para .env e adicione as devidas chaves</p>
	<p>3. Execute o comando >> npm install << para instalar todas as dependências necessárias para rodar o projeto</p>
  <p>4. Execute o comando >> npm run typeorm migration:run -- -d ./src/data-source <<</p>
  <p>Por fim execute >> npm run dev << e o servidor estará rodando na porta 3001</p>
</blockquote>

<h2>Rotas</h2>
  <h3>Rotas de Usuário</h3>
<p>O usuário possui as seguintes rotas</p>
<bloclquote>
<br>
<p>Listar usuários</p>
<p>GET localhost:3001/users</p>
<blockquote>
[
	{
		"phone": "321",
		"createdAt": "2023-03-26T02:15:30.449Z",
		"id": 1,
		"email": "gabriel@mail.com",
		"name": "Gabriel"
	}
]
</blockquote>
<br>
<br>
<p>Criar usuário</p>
<p>POST localhost:3001/users</p>
<p>Exemplo de body:</p>
<blockquote>
{
	"name": "ga",
	"email": "gabriel@mail.com",
	"password": "1234",
	"phone": "321"
}
</blockquote>
<br>
<p>Reposta</p>
<blockquote>
{
	"phone": "321",
	"createdAt": "2023-03-26T02:15:30.449Z",
	"id": 1,
	"email": "gabriel@mail.com",
	"name": "ga"
}
</blockquote>
<br>
<br>

<p>Pesquisar um usuário específico</p>
<p>GET localhost:3001/users/:id</p>
<br>
<p>Retorno</p>
<br>
<blockquote>
{
	"phone": "321",
	"createdAt": "2023-03-26T02:15:30.449Z",
	"id": 1,
	"email": "gabriel@mail.com",
	"name": "ga"
}
</blockquote>
<br>
<br>

<p>Atualizar usuário específico</p>
<p>PATCH localhost:3001/users/:id</p>
<br>
<p>Exemplo de body</p>
<blockquote>
{
  "name": "Gabriel"
}
</blockquote>
<br>
<p>Retorno</p>
<blockquote>
{
	"phone": "321",
	"createdAt": "2023-03-26T02:15:30.449Z",
	"id": 1,
	"email": "gabriel@mail.com",
	"name": "Gabriel"
}
</blockquote>
<br>
<br>
<p>Deletar usuário específico</p>
<p>DELETE localhost:3001/users/:id</p>
<p>Resposta</p>
<blockquote>
STATUS 204 NO CONTENT
</blockquote>
<br>
<br>
<p>Login</p>
<p>POST localhost:3001/users/</p>
<p>Exemplo de body</p>
<blockquote>
{
	"email": "gabriel@mail.com",
	"password": "1234"
}
</blockquote>
<br>
<p>Resposta</p>
<blockquote>
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk4NDk2OTAsImV4cCI6MTY3OTkzNjA5MCwic3ViIjoiMSJ9.GMGJzLRQdCY8cr4FS5qR7l-z0ZJqyZ_ttHU0VxriNoI",
	"userName": "Gabriel",
	"userId": 1
}
</blockquote>
<br>
<br>

<h3>Rotas de contatos</h3>
<br>
<p>Listar contatos</p>
<p>GET localhost:3001/contacts</p>
<blockquote>
[
	{
		"id": 2,
		"name": "Carlos",
		"email": "carlos@mail.com",
		"phone": "123",
		"createdAt": "2023-03-26T17:40:47.584Z",
		"user": {
			"id": 1,
			"name": "Gabriel"
		}
	}
]
</blockquote>
<br>
<br>
<p>Criar um contato</p>
<p>POST localhost:3001/contacts</p>
<p>Exemplo de body:</p>
<blockquote>
{
	"name": "Carlos",
	"email": "carlos@mail.com",
	"phone": "123"
}
</blockquote>
<br>
<p>Reposta</p>
<blockquote>
{
	"user": {
		"phone": "321",
		"createdAt": "2023-03-26T02:15:30.449Z",
		"id": 1,
		"email": "gabriel@mail.com",
		"name": "Gabriel"
	},
	"phone": "123",
	"email": "carlos@mail.com",
	"name": "Carlos",
	"createdAt": "2023-03-26T17:42:52.033Z",
	"id": 2
}
</blockquote>
<br>
<br>
<p>Pesquisar um contato específico</p>
<p>GET localhost:3001/contacts/:id</p>
<br>
<p>Retorno</p>
<br>
<blockquote>
{
		"id": 1,
		"name": "carlos",
		"email": "carlos@mail.com",
		"phone": "123",
		"createdAt": "2023-03-26T17:40:47.584Z",
		"user": {
			"id": 1,
			"name": "Gabriel"
		}
}
</blockquote>
<br>
<br>

<p>Atualizar contato específico</p>
<p>PATCH localhost:3001/contacts/:id</p>
<br>
<p>Exemplo de body</p>
<blockquote>
{
  "name": "Carlos"
}
</blockquote>
<br>
<p>Retorno</p>
<blockquote>
{
		"id": 1,
		"name": "Carlos",
		"email": "carlos@mail.com",
		"phone": "123",
		"createdAt": "2023-03-26T17:40:47.584Z",
		"user": {
			"id": 1,
			"name": "Gabriel"
		}
}
</blockquote>
<br>
<br>
<p>Deletar contato específico</p>
<p>DELETE localhost:3001/contacts/:id</p>
<p>Resposta</p>
<blockquote>
STATUS 204 NO CONTENT
</blockquote>