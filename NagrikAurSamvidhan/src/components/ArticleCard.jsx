// src/components/ArticleCard.js
import React from 'react';
import '../css/ArticleCard.css';

const ArticleCard = ({ article, onClick }) => {
  return (
    <div className="article-card" onClick={() => onClick(article)}>
      <h3>{article.title}</h3>
      <p>{article.gist}</p>
    </div>
  );
};

export default ArticleCard;
