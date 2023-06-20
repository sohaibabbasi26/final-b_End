module.exports = function citiesHandler(opts) {


    const { citiesMediator } = opts;


    const getRandomCities = async (req, res) => {

        const sent = await citiesMediator.getRandomCities();

        res.send(sent);

    }


    const getCityData = async (req, res) => {
        const id = req.query.id;

        const sent = await citiesMediator.getCityData(id);

        res.send(sent);

    }



    return {
        getRandomCities,
        getCityData
    }


}