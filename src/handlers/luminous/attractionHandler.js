
const attractionSchema = require("../../validation/attraction")
module.exports = function AttractionHandler(opts) {
    const { attractionMediator } = opts;




    async function getRandomAttractions(request, reply) {

        const sent = await attractionMediator.getRandomAttractions();

        reply.send(sent);

    }


    async function getAttractionData(request, reply) {
        const id = request.query.id;
        const sent = await attractionMediator.getAttractionData(id);
        reply.send(sent);

    }


    async function postAttraction(req, res) {



        // const validData = await attractionSchema.validateAsync(request.body);
        res.send("mehehehhehe")

        // const sent = await attractionMediator.getAttractionData(id);
        // reply.send(sent);





    }







    return {
        getRandomAttractions,
        getAttractionData,
        postAttraction


    };
};
