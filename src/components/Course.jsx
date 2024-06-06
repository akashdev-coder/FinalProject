import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://finalprojectback-2.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = book.filter((item) => {
    // Filter by category
    if (selectedCategory && item.category !== selectedCategory) {
      return false;
    }
    // Filter by search query
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <>
      <div className="container-fluid dark:bg-slate-900 dark:text-white" id="missions">
        <div className="container">
        <div className="row mt-5">
          <div className="col-12 text-center">
          <h1 className="text-2xl text-center  md:text-4xl">
             The Dawn of
            <span className="text-slate-500"> New Beginnings</span>
          </h1>
          <p className="pt-5 text-center">
            As the first light of dawn crept over the horizon, the world seemed to hold its breath. It was a time of renewal, a moment when the past faded away and the future stretched out with endless possibilities. Each morning brought a promise—a chance to start anew, to embrace the unknown with hope and courage. In this serene stillness, one could find clarity and strength, ready to face whatever lay ahead. It was in these quiet moments that true transformation began.
          </p>
          <Link to="/">
            <button className="mt-6 bg-gray-950	 text-white px-4 py-2 rounded-md hover:bg-gray-500 duration-300">
              Back
            </button>
          </Link>
        </div>
        </div>

<div className="mt-12 flex justify-between">
  <div className="flex items-center">
    <label htmlFor="category" className="mr-2">
      Filter by Category:
    </label>
    <select
      id="category"
      value={selectedCategory}
      onChange={handleCategoryChange}
      className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-pink-500"
    >
      <option value="">All</option>
      <option value="Free">Free</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Sport">Sport</option>
      <option value="Song">Song</option>
      <option value="Food">Food</option>
    </select>
  </div>
  <div className="mt-4">
    <label htmlFor="search" className="mr-2">
      Search:
    </label>
    <input
      type="text"
      id="search"
      value={searchQuery}
      onChange={handleSearchInputChange}
      placeholder="Search by book name"
      className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-pink-500"
    />
  </div>
</div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {filteredBooks.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Course;
