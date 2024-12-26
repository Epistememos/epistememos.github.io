'use client'
import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import DOMPurify from 'dompurify';

const Article: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = pathname.split('/').pop();
  const [article, setArticle] = useState<string>('');

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      try {
        const response = await fetch(`/articles/${id}.html`);
        const data = await response.text();

        const sanitizedHTML = DOMPurify.sanitize(data);
        const styledHTML = sanitizedHTML
          .replace(/<h1>/g, '<h1 class="text-2xl uppercase font-bold">')
          .replace(/<h2>/g, '<h2 class="text-xl font-semibold">')
          .replace(/<img([^>]*)>/g, '<img$1 class="rounded-md">')
          .replace(/<p>/g, '<p class="text-sm text-justify sm:text-lg font-medium">')
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
      <div dangerouslySetInnerHTML={createMarkup()} className="h-full p-8 m-4 rounded-lg bg-gray-200 shadow-md hover:shadow-xl" />
    </div>
  );
}

export default Article;