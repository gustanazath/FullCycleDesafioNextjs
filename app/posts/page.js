export async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
  }
  
  export default async function Post({ params }) {
    const post = await getPost(params.id);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg">{post.body}</p>
      </div>
    );
  }
  