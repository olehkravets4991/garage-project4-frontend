import {Link} from 'react-router-dom';

// describe the post prop
function Post ({post}){

    const div = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px auto",
        width: "80%"
    }


    return <div style={div}>
        <Link to={`/post/${post.id}`}>
        <h1>{post.make}</h1>
        <h2>{post.model}</h2>
        <h2>{post.year}</h2>
        <h2>{post.grade}</h2>
        </Link>
    </div>
}

export default Post;