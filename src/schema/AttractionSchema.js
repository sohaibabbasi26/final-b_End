const validation = require('../validation/attraction')



module.exports = function AttractionSchema(opts) {

    const { attractionHandler, Joi } = opts;




    const getRandomAttractions = () => {

        return {
            method: "GET",
            url: "/randomAttractions",
            handler: attractionHandler.getRandomAttractions,

        };

    };




    const postAttraction = () => {

        return {
            method: "POST",

            schema: {
                body: validation
            },
            url: "/postAttraction",
            handler: attractionHandler.postAttraction,

        };

    };





    const getAttractionData = () => {

        return {
            method: "GET",
            url: "/attractionData",
            handler: attractionHandler.getAttractionData,

        };

    };




    return {
        getRandomAttractions,
        getAttractionData,
        postAttraction
    };

};
