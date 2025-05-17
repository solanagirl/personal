"use client";
import { useEffect, useState } from 'react';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default function MarkdownViewer({ title }: { title: string }) {
  const [content, setContent] = useState<string | null>(null);
  const [innerHtml, setInnerHtml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/articles/${title}.md`);
        if (!res.ok) throw new Error(`Failed to load ${title}.md`);
        const { content: md } = await res.json();
        setContent(md);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    load();
  }, [title]);

  useEffect(() => {
    const process = async () => {
      if (!content) return;
      const matterResult = matter(content);
      const processed = await remark().use(html).process(matterResult.content);
      setInnerHtml(processed.toString());
    };
    process();
  }, [content]);

  if (error) return <p className="text-error">⚠️ {error}</p>;

  return innerHtml ? (
    <div className="markdown-preview">
      <div
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: innerHtml }}
      />
      {
        innerHtml.length >=500 ? (
          <div className="markdown-fade" />
        ) : (
          <></>
        )
      }
    </div>
  ) : (
    <p>Loading article...</p>
  );
}
