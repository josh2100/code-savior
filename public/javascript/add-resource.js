async function addResource(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value;
  const topic = document.querySelector('input[name="topic"]').value;
  const text = document.querySelector('textarea[name="text"]').value;
  const user_id = document.querySelector('input[name="user_id"]').value;
//   const user_id = 2;

  const response = await fetch("/api/posts", {
    method: "Post",
    body: JSON.stringify({
      title,
      topic,
      text,
      user_id,
    }),
    Headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.reload('/profile');
  } else {
    response.statusText;
  }

}

document.querySelector(".new-post-form").addEventListener("submit", addResource);
