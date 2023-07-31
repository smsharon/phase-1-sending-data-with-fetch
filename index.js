function submitData(name, email) {
    const userData = {
      name: name,
      email: email,
    };
  
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(userData),
    };
  
    return fetch('http://localhost:3000/users', config)
      .then(response => response.json())
      .then(data => {

        const newId = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New User ID: ${newId}`;
        document.body.appendChild(idElement);
  
        return data; 
      })
      .catch(error => {
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  