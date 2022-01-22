async function addResource(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value.trim();
  const topic = document.querySelector('input[name="topic"]').value.trim();
  const text = document.querySelector('textarea[name="text"]').value.trim();
  const user_id = document.querySelector('input[name="user_id"]').value.trim();
  console.log('line 8', title, topic, text, user_id);

  if (title && topic && text && user_id) {
  const response = await fetch("/api/posts", {
    method: "Post",
    body: JSON.stringify({
      title,
      topic,
      text,
      user_id,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.reload('/profile');
  } else {
    response.statusText;
  }

if (response.ok) {
    document.location.replace('/profile')
} else {
    alert(response.statusText);
}
}
}

document.querySelector(".new-post-form").addEventListener("submit", addResource);
