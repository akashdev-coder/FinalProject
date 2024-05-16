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
        const res = await axios.get("https://finalprojectback-2.onrender.com//book");
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
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
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
    </>
  );
}

export default Course;
