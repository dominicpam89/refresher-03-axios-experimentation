export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

export type PostCreate = Pick<Post, 'title' | 'body' | 'tags' | 'userId'>;

export type PostsResponse = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};

export type PostCreateResponse = {
  id: number;
  title: string;
  userId: number;
};
