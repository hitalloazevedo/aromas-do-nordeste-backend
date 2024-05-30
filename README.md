
# Aromas do nordeste (Backend)

Esta aplicação é um web service (api), que fornece dados para uma aplicação frontend de um restaurante [(Aromas do nordeste)](https://hitalloazevedo.github.io/aromas-do-nordeste-frontend/).  


## Utilizando localmente
Para a API funcionar corretamente um banco de dados [supabase](https://supabase.com/) é necessario.

Clonando o projeto

```bash
  git clone https://github.com/hitalloazevedo/aromas-do-nordeste-backend
```

abrindo o diretório

```bash
  cd aromas-do-nordeste-backend
```

Instalando dependências

```bash
  npm install
```

Iniciando o servidor

```bash
  npm run dev
```

## Configurando o banco de dados

Acesse: [https://supabase.com/](https://supabase.com/) 

- Crie sua conta
- Crie um novo banco de dados
- No seu banco, crie uma tabela `plates-db`
    ### plates-db
    | Coluna              | Tipo     | Paramêtros Adicionais             |
    | :--------           | :------- | :-------------------------------- |
    | `id`                | `int8` | `Primary key` |
    | `plate_name`        | `text`   |  |
    | `plate_description` | `text`   |  |
    | `image_url`         | `text`   |  |

#### Populando seu banco de dados
faça um import na sua tabela usando o `plates-db_rows.csv`



## Variáveis de ambiente

Adicione as variáveis seguinte no seu `.env`

`SUPABASE_URL="<SUA_URL_SUPABASE>"`

`SUPABASE_KEY="<SUA_CHAVE_DE_API>"`

`ALLOWED_URL="*"`

Verifique se a `RLS` do supabase está impedindo o banco de fazer queries.
## API Reference

#### Retornar todos os pratos

```http
  GET /cardapio
```
Retorno (sucesso)
```
  [
    {
      id: 1,
      plate_name: "prato1",
      plate_description: "descrição",
      image_url: "imagem1.png"
    },
    {
      id: 2,
      plate_name: "prato2",
      plate_description: "descrição",
      image_url: "imagem2.png"
    }, 
  ]
```
#
#### Retornar apenas um prato

```http
  GET /cardapio/:id
```
Retorno (sucesso)
```
  [
    {
      id: 1,
      plate_name: "prato1",
      plate_description: "descrição",
      image_url: "imagem1.png"
    }
  ]
```
#
#### Inserir um novo prato

```http
  POST /cardapio
```
Requerido
```
{
  	  "name": "Tapioca",
	  "description": "Tapioca é um prato tipico do nordeste brasileiro",
	  "imageUrl": "https://imagem.png"
}
```
Retorno (sucesso)

`{
	"msg": "new plate created sucessfully"
}`
#
#### Editar prato existente
```http
  PATCH /cardapio
```
Requerido
```
{
      "id": 2,
  	  "name": "novo_nome",
	  "description": "nova_descrição",
	  "imageUrl": "nova_url_imagem"
}
```
Retorno (sucesso)

`{
	"msg": "plate updated sucessfully"
}`
#
#### Deletar prato
```http
  DELETE /cardapio/:id
```

Retorno (sucesso)

`{
	"msg": "plate deleted sucessfully"
}`
#


