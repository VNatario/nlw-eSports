import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient({
  log: ["query"],
});
app.listen(3333, () => console.log("Rodando na porta 3333..."));

app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  return response.json(games);
});

app.post("/ads", (request, response) => {
  return response.status(201).json([]);
  //201 algo foi criado
});

app.get("/games/:id/ads", (request, response) => {
  //const gameId = request.params.id;

  return response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
  ]);
});

app.get("/ads/:id/discord", (request, response) => {
  const adId = request.params.id;

  return response.json([]);
});
