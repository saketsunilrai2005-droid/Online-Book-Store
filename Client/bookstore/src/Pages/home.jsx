import React from 'react';
import { BookList } from '../Components/product/bookList.jsx';
import { sampleBooks } from "../../src/book.js";

export const Home = ({ onBookSelect }) => {
  return (
    <main className="p-5 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Pass the sampleBooks data to the BookList component */}
        <BookList books={sampleBooks} onBookSelect={onBookSelect} />
      </div>
    </main>
  );
};