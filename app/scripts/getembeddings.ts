// scripts/genEmbeddings.ts
import fs from "fs"

async function main() {
  const docs: { id: string; content: string }[] = JSON.parse(
    fs.readFileSync("resources/rawLibrary.json", "utf-8")
  )
  const config: ClientOptions = {
    apiKey: process.env.OPENAI_KEY
  }
  const openai = new OpenAI(config);
  const out = []

  for (const { id, content } of docs) {
    const resp = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: content,
    })
    const [embedding] = resp.data.map((d) => d.embedding)
    out.push({ id, content, embedding })
  }

  fs.writeFileSync("resources/library.json", JSON.stringify(out, null, 2))
  console.log("Written resources/library.json with embeddings")
}
import OpenAI, { ClientOptions } from "openai";

main().catch(console.error)
