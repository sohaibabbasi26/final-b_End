module.exports = function AuthRequestHandlers(opts) {
    const { authMediator } = opts;

    async function test(request, reply) {
        const { body, elSession } = request;
        console.log("test");
        const sent = await authMediator.test({ ...body, session: elSession });
        reply.send(JSON.stringify(sent));
    }

    async function getRandomEvents(request, reply) {
        const sent = await authMediator.getRandomEvents();
        reply.send(sent);
    }


    async function getEventData(request, reply) {
        const id = request.query.id;
        const sent = await authMediator.getEventData(id);
        reply.send(sent);
        // reply.send({ data: "sent" });

    }

    async function eventAds(req, reply) {
        const { city } = req.params;

        try {
            response = await authMediator.eventAds(city);
            return response;
        } catch (e) {
            reply.send(e);
        }
    }


    async function getEventsWithLocation(request, reply) {
        const destination_id = request.query.id;

        const sent = await authMediator.getEventsWithLocation(destination_id);
        reply.send(sent);

    }


    async function getAttractionData(request, reply) {
        const id = request.query.id;
        const sent = await authMediator.getAttractionData(id);
        reply.send(sent);
        // reply.send({ data: "sent" });

    }





    return {
        test,
        getRandomEvents,
        getEventData,
        eventAds,
        getEventsWithLocation,

        getAttractionData

    };
};
