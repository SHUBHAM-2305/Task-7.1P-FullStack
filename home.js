import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; 
import { FaSearch, FaPaperPlane, FaSignInAlt } from 'react-icons/fa'; // Importing icons

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Shuham_Rana@Deakin</h1>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <FaSearch className="search-icon" />
        </div>
        <div className="button-container">
          <button className="post-button" onClick={() => navigate('/post')}>
            <FaPaperPlane /> Post
          </button>
          <button className="login-button" onClick={() => navigate('/login')}>
            <FaSignInAlt /> Login
          </button>
        </div>
      </header>
    </div>
  );
};

export default Home;