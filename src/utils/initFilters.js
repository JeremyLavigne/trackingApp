
// Return an Object containing all possibles filters regarding the list
// All of them are a property, and all set to false
// {
//     filter1: false,
//     filter2: false,
//     ... 
// }

const initFilters = (initialList) => {
    const statusFilter = [...new Set(initialList.map((item) => item.status))];
    const senderFilter = [...new Set(initialList.map((item) => item.sender))];
    const locationFilter = [...new Set(initialList.map((item) => item.location_name))]

    const allFilter = statusFilter.concat(senderFilter).concat(locationFilter);

    return allFilter.reduce((a,b)=> (a[b]=false,a),{});  
};

export default initFilters;