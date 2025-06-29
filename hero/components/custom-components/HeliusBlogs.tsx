import Image from "next/image";

const blogPosts = [
  {
    title: "Solana dApp Store Publisher Guide",
    href: "https://www.helius.dev/blog/publishing-solana-mobile-apps",
    img: "/assets/publishing-solana-mobile.webp",
  },
  {
    title: "Token Gating on Solana Mobile",
    href: "https://www.helius.dev/blog/token-gating-on-solana-mobile-tutorial",
    img: "/assets/token-gating-on-solana.webp",
  },
  {
    title: "Token Extensions Playground",
    href: "https://www.helius.dev/blog/plug-and-play-token-extensions",
    img: "/assets/token-extensions.webp",
  },
  {
    title: "LST and Native Staking Yield on Solana",
    href: "https://www.helius.dev/blog/how-to-stake-solana",
    img: "/assets/how-to-stake-solana.webp",
  },
];

export default function HeliusBlogs() {
  return (
    <div className="mt-lg">
      <header className="mb-md">
        <h2 className="text-xl text-[#e54424]">Helius Development Blogs</h2>
        <p>By 0xSolanaGirl</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="flex flex-col gap-2 items-center text-center">
            <Image
              src={post.img}
              width={1024 / 2.2}
              height={768 / 2.2}
              alt="Helius Blog Graphic"
              style={{ objectFit: "cover" }}
            />
            <a href={post.href} className="text-primary hover:underline">
              {post.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
