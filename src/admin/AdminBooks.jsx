// AdminBooks.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/AdminBooks.css"; // Import CSS file for styling
import Navbaradmin from "../components/Navbaradmin";


function AdminBooks() {
  const [books, setBooks] = useState([]);
  const [newBookData, setNewBookData] = useState({
    name: "",
    category: "",
    description: "",
    image: "", // Add imageUrl field to newBookData state
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("https://finalprojectback-2.onrender.com//book");
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addBook = async () => {
    try {
      await axios.post("https://finalprojectback-2.onrender.com//book", newBookData); // Send the complete newBookData object
      fetchBooks();
      setNewBookData({ name: "", category: "", description: "", image: "" }); // Clear imageUrl field as well
    } catch (error) {
      console.log(error);
    }
  };
  

  

  const deleteBook = async (id) => {
    try {
      await axios.delete(`https://finalprojectback-2.onrender.com//book/${id}`);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

return (
<>
<Navbaradmin />
    <div className="container-fluid">
        {/* <div className="row adminBack mb-5">
            <div className="col-md-12 py-3 ">
                <h1 className="text-center">Welcome to Admin Dashboard</h1>
            </div>
        </div> */}
    </div>
    <div className="admin-books-container">
        <h2>Add New Book</h2>
        <div className="container">
            <div className="row">
                <div className="col-md-6 pb-3">
                    <input
                        className="form-control"
                        value={newBookData.name}
                        onChange={(e) =>
                            setNewBookData({ ...newBookData, name: e.target.value })
                        }
                        placeholder="Book Name"
                    />
                </div>
                <div className="col-md-6 pb-3">
                    <select
                        className="form-control"
                        value={newBookData.category}
                        onChange={(e) =>
                            setNewBookData({ ...newBookData, category: e.target.value })
                        }
                    >
                        <option value="">Select Category</option>
                        <option value="Free">Free</option>
                        <option value="Sport">Sport</option>
                        <option value="Food">Food</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                </div>
                <div className="col-md-12 pb-3">
                    <textarea
                        className="form-control"
                        value={newBookData.description}
                        onChange={(e) =>
                            setNewBookData({ ...newBookData, description: e.target.value })
                        }
                        placeholder="Description" rows="3"
                    />
                </div>
                <div className="col-md-12 pb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={newBookData.image}
                        onChange={(e) =>
                            setNewBookData({ ...newBookData, image: e.target.value })
                        }
                        placeholder="Please insert Image URL"
                    />
                </div>
                <div className="col-md-12 pb-5">
                    <button className="btn btn-primary btnGreen" onClick={addBook}>
                        Add Book
                    </button>
                </div>
            </div>
        </div>

        <h2>Books List</h2>
        <ul className="list-group">
            {books.map((book) => (
                <li
                    key={book._id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <div className="d-flex align-items-center">
                        <img
                            src={book.image}
                            alt={book.name}
                            style={{ width: "50px", marginRight: "10px" }}
                        />
                        <div>
                            <span>{book.name}</span> - <span>{book.category}</span>{" "}
                            <br /> <br />
                            <span>{book.description}</span>
                        </div>
                    </div>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteBook(book._id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    </div>

</>
);
}

export default AdminBooks;
