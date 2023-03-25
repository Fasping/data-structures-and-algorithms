/* 
In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array.

In short, this code is a basic implementation of binary search in React that allows users to enter a value to search for in an array and display the index of that value if it is found in the array.*/

import { useState } from "react";

const BinarySearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchArray, setSearchArray] = useState([
    1, 3, 4, 6, 8, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27,
  ]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    const index = searchArray.findIndex(
      (element) => element === parseInt(inputValue)
    );
    alert(
      index !== -1 ? `Element found at index ${index}` : "Element not found"
    );
  };

  return (
    <div>
      <p>Search array: [{searchArray.join(", ")}]</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default BinarySearch;
