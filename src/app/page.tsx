// src/app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Poppy Boutique</h1>
      <p className="text-center text-lg">Handmade flower bouquets, crafted with love.</p>
      <div className="text-center mt-6">
        <a
          href="/shop"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md"
        >
          Shop Bouquets
        </a>
      </div>
    </div>
  );
}