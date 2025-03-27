import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./AddBook.css"; // Optional for styling

const AddBook = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Submitted:", formData);
    navigate("/"); // Navigate back to Home after submission
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" className="border p-2 w-full" onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" className="border p-2 w-full" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" className="border p-2 w-full" onChange={handleChange} required></textarea>
        <input type="url" name="coverImage" placeholder="Cover Image URL" className="border p-2 w-full" onChange={handleChange} required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
      <button onClick={() => navigate("/")} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">Back to Home</button>
    </div>
  );
};

export default AddBook;