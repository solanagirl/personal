import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dir = path.join(process.cwd(), 'public', 'articles');

  try {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

    const articleList = files.map(file => ({
      title: file.replace(/\.md$/, ''),
      filename: file,
    }));

    res.status(200).json({ articles: articleList });
  } catch (err) {
    res.status(500).json({ error: 'Failed to read articles directory' });
  }
}
