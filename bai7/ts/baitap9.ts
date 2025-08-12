class User {
    id: string;
    posts: Post[];
    followers: User[];

    constructor(id: string) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    createPost(content: string) {
        const newPost = new Post(`pst${this.id}${this.posts.length + 1}`, this.id, content);
        this.posts.push(newPost);
        listPosts.push(newPost); // Lưu vào danh sách chung
    }

    comment(postId: string, commentContent: string): void {
        const post = listPosts.find(post => post.id === postId);
        if (post) {
            post.addComment(commentContent);
            console.log(`Thêm thành công comment vào post ${postId}.`);
        } else {
            console.log(`Không tìm thấy bài viết có id ${postId}.`);
        }
    }

    follow(userId: string) {
        const user = listUser.find(u => u.id === userId);
        if (!user) {
            console.log(`Không tìm thấy user với id ${userId}`);
            return;
        }
        if (this.followers.includes(user)) {
            console.log(`Bạn đã theo dõi user này rồi.`);
            return;
        }
        this.followers.push(user);
        console.log(`Bạn đã theo dõi user ${userId}.`);
    }

    likePost(postId: string) {
        const post = listPosts.find(post => post.id === postId);
        if (post) {
            post.addLike(this);
            console.log(`Bạn đã like bài viết ${postId}.`);
        } else {
            console.log(`Không tìm thấy bài viết có id ${postId}.`);
        }
    }

    viewPost() {
        this.posts.forEach(post => {
            console.log(post);
        });
    }
}

class Post {
    id: string;
    likes: User[];
    comments: string[];
    userId: string;
    content: string;

    constructor(id: string, userId: string, content: string) {
        this.id = id;
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
    }

    addLike(user: User) {
        if (this.likes.includes(user)) {
            console.log(`User ${user.id} đã like bài này trước đó.`);
            return;
        }
        this.likes.push(user);
    }

    addComment(comment: string) {
        this.comments.push(comment);
    }
}

class Comment {
    id: string;
    userId: string;
    content: string;
    replies: string[];

    constructor(id: string, userId: string, content: string, replies: string[] = []) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }

    addReply(reply: string) {
        this.replies.push(reply);
    }
}

let listUser: User[] = [];
let listPosts: Post[] = [];

const user1 = new User("u1");
const user2 = new User("u2");
listUser.push(user1, user2);

user1.createPost("Hello world!");
user2.createPost("Bài viết của u2");

user1.likePost("pstu21");
user2.comment("pstu11", "Nice post!");
user1.follow("u2");

console.log(listPosts);
