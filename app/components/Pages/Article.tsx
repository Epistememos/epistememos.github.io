import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import { ClassNames } from '@emotion/react';
import DOMPurify from 'dompurify';


interface Params {
    [key: string]: string | undefined;
    id: string;
  }

const Article: React.FC = () => {
  const { id } = useParams<Params>();
  const [article, setArticle] = useState<string>('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`/articles/${id}.html`);
        const data = await response.text();

        const sanitizedHTML = DOMPurify.sanitize(data); //preventing XSS attacks + modifying styling
        const styledHTML = sanitizedHTML
          .replace(/<h1>/g, '<h1 class="text-2xl uppercase font-bold">')
          .replace(/<h2>/g, '<h2 class="text-xl font-semibold">')
          .replace(/<img([^>]*)>/g, '<img$1 class="rounded-md">')
          .replace(/<h3>/g, '<h3 class="text-lg font-medium">');

        setArticle(styledHTML);
      } catch (error) {
        console.error("Error fetching the article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  const createMarkup = () => {
    return { __html: article };
  };

  return (
    <div>
      <Navbar />
      <div  dangerouslySetInnerHTML={createMarkup()} className=" h-full p-8 m-4 rounded-lg bg-gray-200 shadow-md hover:shadow-xl"/>
    </div>
  );
}

export default Article;