import React from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface Props {
  post: Post;
}

const DetailPost: React.FC<Props> = ({ post }) => {
  return (
    <div style={{ marginBottom: "16px", borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>
      <p><strong>Id:</strong> {post.id}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Content:</strong> {post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
    </div>
  );
};

export default DetailPost;
