function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((object) => {
      // Access the newly assigned id and append it to the DOM
      const id = object.id;
      document.body.innerHTML += id;
    })
    .catch((error) => {
      // Append error message to the DOM
      document.body.innerHTML += error.message;
    });
}
