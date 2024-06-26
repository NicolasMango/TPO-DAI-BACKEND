//import '' ('dotenv').config();
import express from 'express';
import cors from 'cors';
import { pool } from './src/db/connect.js';
import { dbConnection }  from './src/db/config.js';
import rubrosRoutes from "./src/routes/rubros.routes.js";
import reclamosRoutes from "./src/routes/reclamos.routes.js";
import sitiosRoutes from "./src/routes/sitios.routes.js";
import desperfectosRoutes from "./src/routes/desperfectos.routes.js";
import promocionesRoutes from "./src/routes/promociones.routes.js";

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.options('*', cors());
dbConnection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "You are connected to the project" });
});

app.get("/ping", async (req , res) => {
  const [result] = await pool.query('SELECT "Pong" AS result');
  res.json(result[0])
})

app.use("/api/desperfectos", desperfectosRoutes);
app.use("/api/sitios",sitiosRoutes);
app.use("/api/rubros",rubrosRoutes);
app.use("/api/reclamos",reclamosRoutes);
app.use("/api/promociones",promocionesRoutes);
//app.use("/api/usuario", require("./src/routes/usuario.routes"));

//mysqld --initialize -console
//mysql -u root -p

app.listen(port, () =>{
  console.log(`server running on port ${port}`);
})

