/* 

This code is a basic implementation of binary search in JavaScript using React. Binary search is an efficient search algorithm that finds an element in an ordered list by repeatedly splitting the list in half and determining which half of the array the searched element might be in.

The code starts by importing the useState function from the React library, which is used to manage the state of the component. Next, a function component called BinarySearch is defined.

Within the component, two states are defined: inputValue and searchArray. The inputValue state is an empty string that is used to store the value of the input where the number to be searched for is entered. The searchArray state is an array of ordered numbers on which the binary search will be performed.

The handleInputChange function is responsible for updating the inputValue state with the value of the input being written to. It is passed as a callback function for the input's onChange event.

The handleSearch function is executed when the search button is clicked. Use the findIndex function to find the value of inputValue within the searchArray . If the value is found, an alert message is displayed indicating the index where the value is found. Otherwise, a message is displayed indicating that the value was not found.

Finally, the component renders the search array and the input, and the search button, and the entire component is returned.

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
