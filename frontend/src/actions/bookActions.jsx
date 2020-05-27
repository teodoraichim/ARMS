export const clearFilters = () => {
    return {
      type: "CLEAR_FILTERS"
    };
};

export const changePage = (page) => {

    return {
        type: "CHANGE_PAGE",
        payload: {
            currentPage: page
        }
    }
};

export const changeBooksPerPage = (number) => {
    return{
        type: "CHANGE_BOOKS_PER_PAGE",
        payload: {
            booksPerPage: number
        }
    }
};

export const setFilters = (fieldName, fieldValue) => {
    return {
      type: "SET_FILTERS",
      payload: {
        fieldName,
        fieldValue
      }
    };
};