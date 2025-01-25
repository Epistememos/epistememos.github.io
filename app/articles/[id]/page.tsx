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
          .replace(/<h1>/g, '<h1 class="text-2xl py-2 uppercase font-bold">')
          .replace(/<h2>/g, '<h2 class="text-xl py-1 font-semibold">')
          .replace(/<img([^>]*)>/g, '<img$1 class="rounded-md">')
          .replace(/<p>/g, '<p class="text-sm font-light text-justify sm:text-base">')
          .replace(/<li>/g, '<li class="text-sm font-light text-justify list-disc sm:text-base">')
          .replace(/<h3>/g, '<h3 class="text-lg py-1 font-base">');

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