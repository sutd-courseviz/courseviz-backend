const { FastifyPluginCallback } = require("fastify");

const store = require("../store");
const errHandler = (err) => {console.log(err);}

/**
 * @type {FastifyPluginCallback}
 */

const deletePlugin = (fastify, opts, done) => {
    fastify.delete("/:first_id/:second_id", async (req, reply) => {
        try {
            await store.deleteOne(req.params.first_id, req.params.second_id);
        }
        catch (err) {
            reply.send(err);
        }
        
        reply.status(200).send("Deleted element from " + req.params.first_id + " with the ID " + req.params.second_id);
    });
    


    done();
}

module.exports = deletePlugin;
