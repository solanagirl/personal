import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const filePath = path.join(process.cwd(), 'public', 'articles', `${slug}`);

  try {
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Article not found' });
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    res.status(200).json({ slug, content: fileContent });
  } catch (err) {
    res.status(500).json({ error: 'Failed to read article file' });
  }
}
