import express from "express";
import cors from "cors";
import Web3 from "web3";
import { Pool } from "pg";
import dotenv from "dotenv";

import { ABI } from "./abi.js";

dotenv.config();

const pool = new Pool({
  host: process.env.HOST_NAME,
  port: process.env.HOST_PORT,
  user: process.env.NAME,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

pool.connect();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) : 5000;

const infuraProjectId = process.env.INFURA_ID;
const infuraGoerliUrl = `https://goerli.infura.io/v3/${infuraProjectId}`;
const web3 = new Web3(new Web3.providers.HttpProvider(infuraGoerliUrl));

web3.eth.net
  .isListening()
  .then(() => console.log("Web3 is connected to Ethereum network"))
  .catch((error) =>
    console.error("Unable to connect to Ethereum network:", error)
  );

const contractABI = ABI;
const contractAddress = "0x4c61c07F1Ff7de15e40eFc1Bd3A94eEB54cBF242"; // Address of the smart contract
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

// Call the collections function with collected IDs 4, 5, and 6
const collectedID1 = 4;
const collectedID2 = 5;
const collectedID3 = 6;

// const promises = [
//   contractInstance.methods.collections(collectedID1).call(),
//   contractInstance.methods.collections(collectedID2).call(),
//   contractInstance.methods.collections(collectedID3).call(),
// ];

// Error: data out-of-bounds (length=416, offset=448, code=BUFFER_OVERRUN, version=abi/5.7.0)

// Promise.all(promises)
//   .then((results) => {
//     console.log("Results of collections function:");
//     console.log("Collected ID 4:", results[0]);
//     console.log("Collected ID 5:", results[1]);
//     console.log("Collected ID 6:", results[2]);
//   })
//   .catch((error) => {
//     console.error("Failed to call collections function:", error);
//   });

app.get("/", async (req, res) => {
  res.json({ message: "Hello, FANtium!" });
});

app.get("/collections", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM db.collections;");
    res.json(result.rows);
  } catch (err) {
    res.json(err);
  }
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:5000`);
});
