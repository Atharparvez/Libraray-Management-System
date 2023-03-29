import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../styles/bookList.css'
const BookList = () => {

    let [Book, setBook] = useState([])
    let Navigate = useNavigate()
    let location = useLocation()

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:500/books')
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    }, [Book])
    // delete a book from sever 
    let remove = (id, title) => {
        fetch(`http://localhost:500/books/${id}`, {
            method: 'DELETE'
        });
        alert(`${title} will be deleted permanently`)
    }

    let read = (id) => {
        if (location.pathname == '/admin/book-list') {
            Navigate(`/admin/book-list/${id}`)
        } else {

            Navigate(`/user/book-list/${id}`)
        }
    }

    return (
        <div className="booklist">
            <div className="booklist1">
                <h1>Book Lists</h1>
                <h2>No of Books {Book.length}</h2>
                {
                    Book.map(data => (
                        <div className="booklists">
                            <div className="imgbg">
                                <div className="img">
                                    <img src={data.thumbnailUrl} alt="" />
                                </div>
                            </div>
                            <div className="grp">
                                <div className="title">
                                    <h2>Title:-{data.title}</h2>
                                </div>
                                <div className="page">
                                    <h3>Pages:-{data.pageCount}</h3>
                                </div>
                                <div className="cat">
                                    <h5>Categories:-{data.categories}</h5>
                                </div>
                                <div className="auth">
                                    <h5> Authore:-{data.authors}</h5>
                                </div>
                                <div className="ratingstar">
                                    <h5>⭐⭐⭐⭐⭐</h5>
                                </div>
                                <div className="btn">
                                    <button onClick={() => remove(data.id, data.title)}> <b>Not Intrested</b> </button>
                                    {location.pathname == '/admin/book-list' && <button onClick={() => read(data.id)} >Read More</button>}
                                    {location.pathname == '/user/book-list' && <button onClick={() => read(data.id)} >Read More</button>}

                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>

        </div>);
}
export default BookList;