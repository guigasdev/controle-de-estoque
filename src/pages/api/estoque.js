import {StockEntries} from "./stockEntries";
import {StockOutputs} from "./stockOutputs"
import {Balance} from "./balance";

const http = require('http');
const url = require('url');
const querystring = require('querystring');


const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/api/estoque' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ estoque }));
  } else if (parsedUrl.pathname === '/api/estoque' && req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const { produto, quantidade } = JSON.parse(body);

      if (produto && quantidade) {
        const new_item = {
          id: estoque.length + 1,
          produto,
          quantidade
        };

        estoque.push(new_item);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 'success', message: 'Item adicionado ao estoque com sucesso.' }));
      } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'error', message: 'Dados incompletos para adicionar um item ao estoque.' }));
      }
    });
  } else if (parsedUrl.pathname.startsWith('/api/estoque/') && req.method === 'DELETE') {
    const itemId = parseInt(parsedUrl.pathname.split('/')[3]);

    const itemIndex = estoque.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
      estoque.splice(itemIndex, 1);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'success', message: `Item ${itemId} removido do estoque com sucesso.` }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: `Item ${itemId} não encontrado no estoque.` }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'error', message: 'Endpoint não encontrado.' }));
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
