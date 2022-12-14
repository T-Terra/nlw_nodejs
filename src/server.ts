import express from 'express';


const app = express();

const port = 3000;

app.listen(port, () => console.log('Server is running...'));

// comentário de teste

app.post('/post', (req, res) => {
  return res.send('Teste de POST');
})

app.get('/', (req, res) => {
  return res.send('Testando o servidor com NODE JS');
});
