module.exports = function AuthMediator(opts) {

    const { attraction } = opts;



    async function getRandomAttractions() {

        result = await attraction.getRandomAttractions();
        return result;

    }



    async function getAttractionData(id) {
        result = await attraction.getAttractionData(id);
        return result;
    }


    return {
        getRandomAttractions,
        getAttractionData

    };
};
