async function addResource(event) {
  event.preventDefault();

  const title = document.querySelector("#post-title").value().trim();
  const topic = document.querySelector("#post-topic").value().trim();
  const text = document.querySelector("#post-text").value().trim();

  const response = await fetch("/api/posts", {
    method: "Post",
    body: JSON.stringify({
      title,
      topic,
      text,
    }),
    Headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.reload("/");
  } else {
    response.statusText;
  }
}

document.querySelector("#resources").addEventListener("click", addResource);
