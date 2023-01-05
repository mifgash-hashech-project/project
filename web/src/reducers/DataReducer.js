export const initialData = {
    adminsData: [],
    moviesData: [],
    availabilityData: [],
    theatersData: [],
    locationsData: [],
    newsData: [],
    routeData: {},
    appStartTime: NaN,
    totalPages: 0,
    updateCount: true,
    isLoaded: false
};

const getData = (data) => {
    const result = {};
    for (let key in data) {
        if (!!data[key]) result[key] = data[key]
    }
    return result
}

function getTotalPages(newData, totalPages){
    let newTotalPages = totalPages + 1
    newTotalPages = !!newData.totalPages ? newData.totalPages : newTotalPages
    return newTotalPages
}

const DataReducer = (data, action) => {
    switch (action.type) {

        case "SET_DATA":
            const newData = getData(action.data);
            const totalPages = getTotalPages(newData, data.totalPages)
            return {
                ...data,
                ...newData,
                totalPages
            };


        default:
            return { ...data };

    }
};


export default DataReducer;