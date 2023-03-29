import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/readBook.css';
const ReadBook = () => {

    let [book, setbook] = useState([])
    //to get route parameter

    let params = useParams()
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:500/books/${params.id}`)
            let data = await response.json()
            setbook(data)
        }
        fetchData()
    }, [])

    return (
        <div className="readbook">
            <h1>{book.title}</h1>
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
        </div>
    )
}
export default ReadBook;