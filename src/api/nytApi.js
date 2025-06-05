import axios from "./axiosInstance";

// Obtener todas las listas
export async function fetchOverview() {
    const res = await axios.get("/lists/overview.json");
    return res.data.results.lists;
}

// Buscar un libro por título
export async function findBookByTitle(titleToFind) {
    const lists = await fetchOverview();
    for (const list of lists) {
        const match = list.books.find(
            (book) => book.title.toLowerCase() === titleToFind.toLowerCase()
        );
        if (match) {
            return {
                ...match,
                listName: list.display_name,
            };
        }
    }
    return null;
}

// Obtener las primeras N categorías populares
export async function fetchTopCategories(count) {
    const lists = await fetchOverview();
    return lists.slice(0, count);
}

// Obtener el primer libro de N listas de best Sellers usando fetchTopCategories
export async function fetchBestSellers(count) {
    const topCategories = await fetchTopCategories(count);
    const topBooks = topCategories.map(list => {
        const firstBook = list.books[0];
        return {
            ...firstBook,
            listName: list.display_name,
        };
    });
    return topBooks;
}

