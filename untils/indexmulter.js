import express from "express";
import multer from "multer";

import { storage } from "./configMulter";

const upload = multer({storage: storage});
const app = express();

app.use('/assets', express.static('assets'));

app.post("./assets", upload.single('file'), (req, res) => {});
    return res.json(req.file.filename)

app.listen(3000);