async function getBlogPosts() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  const res = await fetch(`${apiUrl}/blogPosts`);
  const data = await res.json();
  return data;
}

export { getBlogPosts };