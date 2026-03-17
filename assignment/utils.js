// import lodash
const _ = require("lodash")

// create a sort function
const sort = (data, sortBy, sortOrder) => {

    // circumvent capitalization problems as capitals will come before lower case
    // convert everything into the same case TEMPORARILY
    const correctCase = data.map((element) => {
        element.name = element.name[0].toUpperCase() + element.name.slice(1)
        return element
    })

    //sort the data with the lodash function
    const sortedData = _.sortBy(correctCase, sortBy)

    // if sortORder is descending
    if (sortOrder === "desc") {
        //flip the sort
        sortedData.reverse()
    }
    return sortedData
}

module.exports = sort