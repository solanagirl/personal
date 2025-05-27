import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default function ArticlePage({ contentHtml }: { contentHtml: string }) {
  return (
    <main className="prose mx-auto section">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  try {
    const res = await fetch(`api/articles/${slug}.md`, {
      next: {
        revalidate: 60,
      },    
    }
      
    );
    const md = await res.text();  
    const { content, data } = matter(md);

    const processed = await remark().use(html).process(content);
    const contentHtml = processed.toString();

    return {
      props: {
        contentHtml,
        meta: data,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
