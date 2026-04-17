const BASE_URL = 'https://jsonplaceholder.typicode.com';

const NewsRepository = {
  getArticles: async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      return data.slice(0, 20).map((item) => ({
        id: item.id,
        title: item.title,
        description: item.body,
        image: `https://picsum.photos/seed/${item.id}/400/200`,
        author: `Author ${item.userId}`,
        publishedAt: new Date().toLocaleDateString('id-ID'),
      }));
    } catch (error) {
      throw error;
    }
  },
};

export default NewsRepository;