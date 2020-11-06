// Return true if at Least one filter is active

const checkIfOneFilterIsActive = (listOfFilters) => {

    const values =  Object.values(listOfFilters);
        
    for (let i = 0; i < values.length; i++) {
        if (values[i]) {
            return true;
        }
    }
    return false;
};

export default checkIfOneFilterIsActive;