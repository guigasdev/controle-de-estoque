const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Configuramos o upload como um middleware que
// espera um arquivo cujo a chave é "foto"
app.post('/imagem', upload.single('foto'), (req, res) => {
    const { nome, site } = req.body;
    res.json({ nome, site });
});

app.listen(3000);