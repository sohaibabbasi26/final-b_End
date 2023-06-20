module.exports = function SvcTalos(opts) {
    const { svcCache, queryHandler, mdlTest, db, eventAd, _ } = opts;



    async function getRandomCities() {

        const result = await db["primary"].any(mdlTest.getCities, "");

        return result;

    }


    async function getCityData(id) {

        const result = await db["primary"].any(mdlTest.getCityData, { event_id: id });

        return result;

    }



    return {

        getRandomCities,
        getCityData


    };
};
