import axios from "axios";
import { useEffect, useState } from "react";

const URL = 'http://localhost:4000/books';

export function useBookData() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchAllBooksDataFromDatabase();
    }, []);

    function fetchAllBooksDataFromDatabase() {
        axios.get(URL)
        .then(response => {
            setBooks(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    return [books, setBooks];
}
