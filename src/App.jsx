import PostCard from "./components/postcard";

const App = () => {
  const posts = [
    {
      id: 1,
      username: "JohnDoe",
      profilePic: "https://via.placeholder.com/50",
      content: "This is my first post!",
    },
    {
      id: 2,
      username: "JaneSmith",
      profilePic: "https://via.placeholder.com/50",
      content: "Hello, world!",
    },
  ];

  return (
    <div className="p-6 space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;