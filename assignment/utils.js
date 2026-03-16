// import lodash
const _ = require("lodash")

// create a sort function
const sort = (data, sortBy, sortOrder) => {

    //sort the data with the lodash function
    const sortedData = _.sortBy(data, sortBy)

    // if sortORder is descending
    if (sortOrder === "desc") {
        //flip the sort
        sortedData.reverse()
    }
    return sortedData
}

module.exports = sort