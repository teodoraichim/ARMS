import axios from "axios";
const baseURL = "http://localhost:5000/book";



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

export const getCategories = () => {

    return dispatch => {
    axios
        .get(baseURL + '/categories').then(response => {
            dispatch({
              type: "GET_CATEGORIES",
              payload: {
                categories: response.data
              }
            });
          })
         
      };
}

export const loadBooks = (currentPage, filters) => {
    let url = `page=${currentPage}`
    if (filters.cathegory && filters.cathegory !== "All") url += `&category=${filters.cathegory}`;
    if (filters.title) url += `&title=${filters.title}`;
    if (filters.author) url += `&author=${filters.author}`;
    if(filters.year) url += `&year=${filters.year}`;
    return dispatch => {
        axios
            .get(baseURL + `/filter?${url}`).then(response => {
                dispatch({
                  type: "LOAD_BOOKS",
                  payload: {
                    totalPages: response.data[0],
                    booksList: response.data.slice(1)
                  }
                });
              })
             
          };

}

export const getBook = id => {
    return dispatch => {
        axios
            .get(baseURL + `/id/${id}`).then(response => {
                dispatch({
                  type: "GET_BOOK",
                  payload: {
                    currentBook: response.data[0],
                  }
                });
              })
             
          };
};
export const restBook = () => {
  return {
    type: "RESET_BOOK"
  };
}