import express from "express";

const app = express();
app.listen(3333, () => console.log("Rodando na porta 3333..."));

app.get("/ads", (request, response) => {
  return response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
  ]);
});
