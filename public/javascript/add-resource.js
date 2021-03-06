async function addResource(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value.trim();
  const topic = document.querySelector('input[name="topic"]').value.trim();
  const post_url = document.querySelector('input[name="post_url"]').value.trim();
  const text = document.querySelector('textarea[name="text"]').value.trim();
  // const user_id = document.querySelector('input[name="user_id"]').value.trim();
  console.log('line 8', title, topic, text);

  if (title && topic && text && post_url) {
  const response = await fetch("/api/posts", {
    method: "Post",
    body: JSON.stringify({
      title,
      topic,
      post_url,
      text,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('failed to add resource', response.statusText);
  }
}
}

document.querySelector(".new-post-form").addEventListener("submit", addResource);
