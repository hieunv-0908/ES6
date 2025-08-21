import React, { Component } from 'react';
import DetailPost from './DetailPost';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface State {
  posts: Post[];
}

export default class ListPost extends Component<{},State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        { 
            id: 1, 
            title: 'Tại sao nên học ReactJS', 
            content: 'Học ReactJS để đi làm', 
            author: 'David' 
        },
        { 
            id: 2, 
            title: 'Props trong ReactJS', 
            content: 'Props giúp truyền dữ liệu từ component con xuống component cha', 
            author: 'Linda' 
        },
        { 
            id: 3, 
            title: 'State trong ReactJS là gì?', 
            content: 'State giúp lưu trữ và thay đổi dữ liệu bên trong component', 
            author: 'David' 
        }
      ]
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h2>Danh sách bài viết</h2>
        {posts.map(post => (
          <DetailPost 
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
          />
        ))}
      </div>
    );
  }
}