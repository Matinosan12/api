 async function users() {

     try {
       const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const userList = document.getElementById('userList');
       data.forEach(user => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
             li.textContent = `${user.name} - ${user.email}`;
             btn.className="btn btn-danger";
            btn.innerHTML='click me !'
            userList.appendChild(li,btn);
         });

     }
     catch (error) {
        console.error('get info faild',error);

    }

 }

 users();

// const btn = document.createElement('button');
// btn.innerHTML='click me';

// const main = document.getElementById('main');

// btn.className="btn btn-danger"

// main.appendChild(btn)