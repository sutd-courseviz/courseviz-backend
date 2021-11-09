const { FastifyPluginCallback } = require("fastify");

const store = require("../store");
const errHandler = (err) => {console.log(err);}

/**
 * @type {FastifyPluginCallback}
 */

const postPlugin = (fastify, opts, done) => {
    fastify.post("/pillars", async (req, reply) => {
        try {
            content = req.query;
            await store.postPillar(content);
            reply.send("Added " + content.name + " to the pillars database");
        }
        catch (err) {
            console.log(err);
            reply.send(err);
        }
    });
    fastify.post("/courses", async (req, reply) => {
        try {
            content = req.query;
            await store.postCourse(content);
            reply.send("Added " + content.name + " to the courses database");
        }
        catch (err) {
            console.log(err);
            reply.send(err);
        }
    });
    fastify.post("/outcomes", async (req, reply) => {
        try {
            content = req.query;
            await store.postOutcome(content);
            reply.send("Added " + content.name + " to the outcome database");
        }
        catch (err) {
            console.log(err);
            reply.send(err);
        }
    });
    
        




    done();
}

module.exports = postPlugin;