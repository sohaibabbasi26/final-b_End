module.exports = function AuthMediator(opts) {

    const { cities } = opts;



    async function getRandomCities() {

        result = await cities.getRandomCities();
        return result;

    }


    async function getCityData(id) {

        result = await cities.getCityData(id);
        return result;

    }



    return {
        getRandomCities,
        getCityData

    };
};
