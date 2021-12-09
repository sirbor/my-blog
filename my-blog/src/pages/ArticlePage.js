import React from 'react';
import { useParams } from 'react-router';
import articleContent from './Article-content'

const ArticlePage = ({match}) => {
    const { name } = useParams();
    const article = articleContent.find(article => article.name === name);
    return (
    <>
    <h1> {article.name} </h1>
    {article.content.map((paragraph, key) => {
        return <p key = {key}>{paragraph}</p>;
    })}
    
    </>
  );
};
export default ArticlePage;

