import React, { Component } from 'react';

interface Props {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default class DetailPost extends Component<Props> {
  render() {
    const { id, title, content, author } = this.props;
    return (
      <div>
        <p>Id: {id}</p>
        <p>Title: {title}</p>
        <p>Content: {content}</p>
        <p>Author: {author}</p>
        <hr />
      </div>
    );
  }
}