import React from 'react';
import './BottomBar.css';

const BottomBar = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} Tescops All rights reserved.</p>
    </div>
  );
}

export default BottomBar;
