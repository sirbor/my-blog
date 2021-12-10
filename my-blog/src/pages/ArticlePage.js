import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ArticlesList from "../components/ArticlesList";
import articleContent from './article-content';
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddCommentForm";

export const ArticlePage = () => {
  const { name } = useParams();
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    }
    fetchData();
  }, [name])
  
  const article = articleContent.find(article => article.name === name);
  
  if (!article) {
    return <NotFoundPage />;
  }
  const otherArticles = articleContent.filter((article) => article.name !== name);

  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
      {article.content.map((paragraph, key) => {
        return <p key={key}>{paragraph}</p>;
      })}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
