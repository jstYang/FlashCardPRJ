import React from "react";
import axios from 'axios';
export default function Footer() {
  const clearLocalStorage = async () => {
    try {
      // Assuming your backend API endpoint for deleting data is '/api/deleteCards'
      await axios.delete('http://localhost:8081/cards');
      window.localStorage.clear();
      // Additional logic if needed after successful deletion
    } catch (error) {
      console.error("Error deleting data:", error);
      // Handle error appropriately
    }
  };

  return (
    <div className="footer">
      <button className="clear-storage-button" onClick={clearLocalStorage}>
        clear local storage
      </button>
    </div>
  );
}
