// Return true if item should be displayed regarding the list of filter
// Return false if not

const applyFilters = (item, listOfFilters) => {
    if (listOfFilters[item.status]) {
        return true;
    }
    if (listOfFilters[item.sender]) {
        return true;
    }
    if (listOfFilters[item.location_name]) {
        return true;
    }
    return false;
};

export default applyFilters;