process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = 3333;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.listen(PORTA, function () {
  console.log(
    `Servidor do seu sistema já está rodando... Acesse o caminho a seguir para visualizar: http://localhost:${PORTA}'`
  );
});
