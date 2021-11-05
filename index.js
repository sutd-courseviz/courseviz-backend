const { default: Fastify, } = require("fastify");
const dotenv = require("dotenv");

const routers = require("./src/routers");

// get env vars
dotenv.config();
const {
    HOST,
    PORT,
} = process.env;

const server = Fastify({});

server.register(routers.visualization, { prefix: "/visualization" });

server
    .listen({ host: HOST, port: PORT })
    .then((address) => console.log(`server listening on ${address}`));
