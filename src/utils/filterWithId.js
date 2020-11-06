// Return true if item is the same as searched ID or begin the same
// Return false if not

const filterWithId = (item, id) => {

    for (let i = 0; i < id.length; i++) {
        if (id[i] !== item.parcel_id[i]) {
            return false;
        }
    }
    return true;
};

export default filterWithId;