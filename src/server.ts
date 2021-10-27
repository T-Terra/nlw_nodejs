import express from 'express';


const app = express();

app.listen(3000, () => console.log('Server is running...'));


app.post('/post', (req, res) => {
  return res.send('Teste de POST');
})

app.get('/', (req, res) => {
  return res.send('Testando o servidor com NODE JS');
});