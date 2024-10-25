import Link from 'next/link';

export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">Posts</h1>
      <hr className="border-gray-300 mb-4" /> 
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 p-4 rounded-lg list-none">
        {posts.map((post) => (
          <li key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            {post.title}
            <Link href={`/posts/${post.id}`} passHref>
              <div className="block p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                <p className="mt-2 text-gray-600">Clique para ler mais...</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  
  
  
  
}
