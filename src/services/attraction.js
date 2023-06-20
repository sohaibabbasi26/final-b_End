module.exports = function SvcTalos(opts) {
    const { svcCache, queryHandler, mdlTest, db, eventAd, _ } = opts;



    async function getRandomAttractions() {

        const result = await db["primary"].any(mdlTest.getAttractions, "");

        return result;

    }




    async function getAttractionData(id) {


        const result = await db["primary"].any(mdlTest.getAttractionData, {
            event_id: id,
        });
        return [result];

    }



    return {

        getRandomAttractions,
        getAttractionData


    };
};
