const initialBookSate = {
    booksList: [],
    filters: {
        title:"",
        author: "",
        cathegory: "All",
        year: "",
    },
    currentPage: 1,
    booksPerPage: 40,
    booksNumber: 0,
    categories: [],
    totalPages: 20,
    currentBook: {}
};

export const bookReducer = (state = initialBookSate, action) => {
    switch (action.type) {
        
        case 'SET_FILTERS': {
            console.log({[action.payload.fieldName]:action.payload.fieldValue});
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
            console.log("oook")
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        title:"",
                        author: "",
                        cathegory: "All",
                        year: "",
                    },
                }
        }
        case 'LOAD_BOOKS': {
            return {
                ...state,
                booksList: action.payload.booksList,
                totalPages: action.payload.totalPages.pages
            }
        }
        case 'GET_CATEGORIES': {
            return {
                ...state,
                categories: action.payload.categories
            }
        }
        case 'GET_BOOK': {
            return{
                ...state,
                currentBook: action.payload.currentBook
            }
        }
        case 'RESET_BOOK': {
            return{
                ...state,
                currentBook: {}
            }
        }
        default: {
            return state
        }
    }
}