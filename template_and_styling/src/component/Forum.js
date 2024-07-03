import authorsData from '../data/authors.json'
import postsData from '../data/posts.json'
import '../style/Forum.css'

const Forum = () => {
    const authors = authorsData;
    const posts = postsData;

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    return (
        <div className='forum-container'>
            <div className='forum-header'>
                <h1>
                    MAQE Forum
                </h1>
                <p>
                    Your cureent timezone is: Asia/Bangkok
                </p>
            </div>
            {posts.map((post, index) => (
                <div key={post.id} className={`post-card ${index % 2 === 0 ? '' : 'even'}`}>
                    <div className='post-head'>
                        <img src={authors[post.author_id - 1].avatar_url} alt={authors[post.author_id - 1].name} />
                        <h3>{authors[post.author_id - 1].name}</h3>
                        <p>Posted on {formatDate(post.created_at)}</p>
                    </div>
                    <div className='post-body'>
                        <div>
                            <img src={post.image_url} alt={post.title} />
                        </div>
                        <div>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};
export default Forum;