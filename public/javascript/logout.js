// async function logout(event) {
// event.preventDefault();

// const response = await fetch("api/users/logout", {
//     method: 'Post',
//     headers: {"Content-Type" : "appliction/json"},
// });

// if(response.ok) {
//     alert('You are now loged out')
//     document.location.replace("/");
// } else {
//     alert("There was an error loging out!", response.statusText);
// }
// }

// document.querySelector('#logout').addEventListener("click", logout)


async function logout(event) {
    event.preventDefault();

    const response = await fetch("/api/users/logout", {
      method: "post",
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace("/");
      alert('logged out bossman');
    } else {
      alert(response.statusText);
      console.log('looker');
    }
  }
  
  document.querySelector('#logout').addEventListener("click", logout);