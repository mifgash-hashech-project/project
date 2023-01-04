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

const DataReducer = (data, action) => {
    switch (action.type) {

        case "SET_DATA":
            const newData = getData(action.data);
            const totalPages = newData.updateCount ? data.totalPages + 1 : data.totalPages + 1
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