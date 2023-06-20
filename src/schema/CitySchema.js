module.exports = function CitySchema(opts) {

    const { citiesHandler, Joi } = opts




    const getRandomCities = () => {

        return {
            method: "GET",
            url: "/randomCities",
            handler: citiesHandler.getRandomCities
        };

    }



    const getCityData = () => {

        return {
            method: "GET",
            url: "/city",
            handler: citiesHandler.getCityData
        };

    }



    return {
        getRandomCities,
        getCityData
    }






}