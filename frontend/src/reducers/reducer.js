const initialBookSate = {
    booksList: [],
    filters: {
        title:"",
        author: "",
        cathegory: "All"
    },
    currentPage: 1,
    booksPerPage: 40,
    booksNumber: 0,
    numberPages: 20
};

export const bookReducer = (state = initialBookSate, action) => {
    switch (action.type) {
        case 'SET_FILTERS': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.fieldName]: action.payload.fieldValue
                  }
            }
        }
        case 'CHANGE_PAGE': {
            return {
                ...state,
                currentPage : action.payload.currentPage
            }
        }
        case 'CHANGE_BOOKS_PER_PAGE': {
            return {
                ...state,
                booksPerPage :  action.payload.booksPerPage
            }
        }
        case 'CLEAR_FILTER': {
                return {
                    ...state,
                    filter: initialBookSate.filter
                }
        }
        case 'LOAD_BOOKS': {
            return {
                ...state,
                booksList: action.payload.booksList,
                booksNumber: action.payload.booksNumber
            }
        }
        default: {
            return state
        }
    }
}