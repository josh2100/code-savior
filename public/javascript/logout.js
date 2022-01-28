async function logout(event) {
  event.preventDefault();
  console.log("line 3, its getting here");
  const response = await fetch("/api/users/logout", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    alert("You have successfully logged out!");
  } else {
    alert(response.statusText);
    console.log("Something has gone wrong sir.");
  }
}

document.querySelector("#logout").addEventListener("click", logout);


