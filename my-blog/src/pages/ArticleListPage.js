import React from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from './article-content';

export const ArticleListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articleContent} />
    </>
  );
};

export default ArticleListPage;
