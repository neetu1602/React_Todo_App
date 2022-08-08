// Add Action Defined below:
export const Add = (items) => {
    return {
        type : "ADD_DATA",
        payload : items
    }
}

//Remove Action Defined below:
export const Remove = (id) => {
    return {
        type : "RMV_DATA",
        payload : id
    }
}

//Update Action Defined below :

export const Update_data = (items,id) => {
    return {
        type : "UPDATE_DATA",
        payload : items,
        d : id
    }
}
