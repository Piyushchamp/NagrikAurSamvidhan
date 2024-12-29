// src/components/CardGrid.js
import React from 'react';
import ArticleCard from './ArticleCard';
import '../css/CardGrid.css';

const CardGrid = ({ articles, onCardClick }) => {
  return (
    <div className="card-grid">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default CardGrid;
