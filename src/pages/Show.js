import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const post = useLoaderData();

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      
        <h1>{post.make}</h1>
        <h2>{post.model}</h2>
        <h2>{post.year}</h2>
        <h2>{post.grade}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Update Car</h2>
        <Form method="post" action={`/update/${post.id}`}>
          <input
            type="text"
            name="make"
            placeholder="Make"
            defaultValue={post.make}
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            defaultValue={post.model}
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            defaultValue={post.year}
          />
          <input
            type="text"
            name="grade"
            placeholder="Grade"
            defaultValue={post.grade}
          />
          <button>Update Car</button>
        </Form>
        <Form method="post" action={`/delete/${post.id}`}>
            <button>Delete Car</button>
        </Form>
      </div>
      <Link to="/">Back to Index</Link>
    </div>
  );
}

export default Show;

