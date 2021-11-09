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

//swagger
server.register(require("fastify-swagger"), {
    exposeRoute : true,
    routePrefix:"/docs",
    swagger: {
        info:{title : 'CourseViz API'},
    },
});

server.register(routers.visualization, { prefix: "/visualization" });
server.register(routers.get, { prefix: "/" });
server.register(routers.post, { prefix: "/" });
server.register(routers.delete, { prefix: "/" });
server.register(routers.update, { prefix: "/" });
server
    .listen({ host: HOST, port: PORT })
    .then((address) => console.log(`server listening on ${address}`));


