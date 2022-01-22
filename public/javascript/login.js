async function login(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    Headers: { "Content-Type": "application/json" },
  });

  if (response) {
    document.location.replace("/");
  } else {
    response.statusText;
  }
}

document.querySelector(".login-form").addEventListener("submit", login);

//----------------------------------------------------------------------------------

async function signup(event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (username && email && password) {
      const response = await fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signup);
