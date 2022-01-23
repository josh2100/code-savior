async function addComment(event) {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name= "comment-body"]');
  const user_id = 2;
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch("/api/comments/", {
    method: "Post",
    body: JSON.stringify({
      comment_text,
      user_id,
      post_id,
    }),
    headers: { "Content:Type": "application/json" },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".comment-form").addEventListener("submit", addComment);
