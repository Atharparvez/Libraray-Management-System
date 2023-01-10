import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/addbook.css';
const AddBook = () => {

    let [title, setTitle] = useState("")
    let [authors, setauthors] = useState("")
    let [categories, setcategories] = useState("")
    let [pageCount, setpageCount] = useState("")
    let [longDescription, setLD] = useState("")
    let [shortDescription, setSD] = useState("")
    let [thumbnailUrl, setTU] = useState("")

    let navigate=useNavigate()
    let Submit = (e) => {
        e.preventDefault()
        //data to be posted
        let bookdata = { title, categories, authors, pageCount,shortDescription, longDescription,thumbnailUrl }
        fetch('http://localhost:500/books',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(bookdata)
        })
        alert(`Book added successfully`)
        navigate('/admin/book-list')
    }

   
    return (
        <div className="addbook">
            <h1>Add a Book</h1>
            <div className="addbook_form">
                <form onSubmit={Submit}>
                    <div className="title">
                        <input type="text" required value={title} onChange={(a) => setTitle(a.target.value)} placeholder="Title of book" />
                    </div>
                    <div className="authors">
                        <input type="text" required value={authors} onChange={(a) => setauthors(a.target.value)} placeholder="Authors" />
                    </div>
                    <div className="categories">
                        <input type="text" required value={categories} onChange={(a) => setcategories(a.target.value)} placeholder="Categories" />
                    </div>
                    <div className="pageCount">
                        <input type="number" required value={pageCount} onChange={(a) => setpageCount(a.target.value)} placeholder="PageCount" />
                    </div>
                    <div className="shortDescription">
                        <textarea className="textarea" required value={shortDescription} onChange={(a) => setSD(a.target.value)} placeholder="shortDescription" cols="30" rows="10">
                        </textarea>
                    </div>
                    <div className="longDescription">
                        <textarea className="textarea" required value={longDescription} onChange={(a) => setLD(a.target.value)} placeholder="LongDescription" cols="30" rows="10">
                        </textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input type="name" required value={thumbnailUrl} onChange={(a) => setTU(a.target.value)} placeholder="Image of the book" />
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
        </div>
    );
}
export default AddBook;