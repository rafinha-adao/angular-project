const express = require('express')
const server = express()

const cors = require('cors');
server.use(cors({
  origin: '*'
}));

server.use(express.json())

const PORT = 3000

//Dados dos produtos
const products = require('../src/assets/data/db.json')

//Retorna TODOS os produtos
server.get('/products', (req, res) => {
  return res.json(products)
})

//Retorna UM produto por index
server.get('/products/:index', (req, res) => {
  const { index } = req.params

  return res.json(products[index - 1])
})

//Adiciona um novo produto
server.post('/products', (req, res) => {
  const { img } = req.body
    products.push(img)

  const { nome } = req.body;
    products.push(nome)

  const { valor } = req.body;
    products.push(valor)

  const { quantidade } = req.body;
    products.push(quantidade)

  return res.json(products)
})

//Atualiza um produto
server.put('/products/:index', (req, res) => {
  const { index } = req.params

  const { img } = req.body;
  const { nome } = req.body;
  const { valor } = req.body;
  const { quantidade } = req.body;

  products[index - 1].img = img
  products[index - 1].nome = nome
  products[index - 1].valor = valor
  products[index - 1].quantidade = quantidade

  return res.json(products)
})

//Deleta um produto
server.delete('/products/:index', (req, res) => {
  const { index } = req.params

  products.splice(index -1, 1)

  return res.json({ message: "O produto foi deletado" })
})

server.listen(PORT, () => {
  console.log(`
     __________________________________________
    |  ...                                     |
    |                                          |
    |  Sucesso!                                |
    |                                          |
       Servidor aberto na porta ${PORT}
    |                                          |
    |                                          |
         http://localhost:${PORT}/products
    |                                          |
    |                                     ...  |
     ------------------------------------------
  `)
})
