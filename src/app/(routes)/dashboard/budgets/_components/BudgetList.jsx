import React, { useState, useEffect } from "react";

const BudgetList = () => {
  // State to hold the budget list data
  const [budgetList, setBudgetList] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors

  // Function to fetch the budget list from the API
  const getBudgetList = async () => {
    try {
      // Set loading to true before making the request
      setLoading(true);

      // Make API request
      const response = await fetch("/api/your-endpoint"); // Replace with your actual API URL

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      // Parse the JSON response
      const data = await response.json();

      // Log the data for debugging
      console.log("Data from API:", data);

      // Set the fetched data to state
      setBudgetList(data);
    } catch (error) {
      // Set error state if there's an issue
      setError(error.message);
    } finally {
      // Set loading to false after the request is done
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    getBudgetList();
  }, []);

  // Render the UI
  return (
    <div>
      <h1>Budget List</h1>

      {/* Show loading spinner or message */}
      {loading && <p>Loading...</p>}

      {/* Show error message if there's an error */}
      {error && <p>Error: {error}</p>}

      {/* Render the budget list */}
      {!loading && !error && (
        <ul>
          {budgetList.length > 0 ? (
            budgetList.map((item) => (
              <li key={item.id}>
                {item.name}: {item.amount}
              </li>
            ))
          ) : (
            <p>No data available</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default BudgetList;
