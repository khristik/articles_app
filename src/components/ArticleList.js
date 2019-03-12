import React from 'react';
import Article from "./Article";

export default function ArticleList({ articles}) {
  const articleElements = articles.map((article, index) =>
    <li key = {index} className="article-list__li"><Article article = {article} /></li>
  )
  return (
    <ul>
      {articleElements}
    </ul>
  )
}