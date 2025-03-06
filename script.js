 async function posts() {

     try {
       const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const postList = document.getElementById('main');
       data.forEach(post => {
            const div = document.createElement('div');
            const pParent = document.createElement('div');
            const pParent2 = document.createElement('div');
            const p = document.createElement('p');
            const p2 = document.createElement('p');
            div.className="col-md-6 d-flex rounded border justify-content-center align-items-center  ";
             p.textContent = `${post.title}`;
             p2.textContent = `${post.body}`;
             pParent.appendChild(p);
             pParent2.appendChild(p2);
             div.appendChild(pParent);
             div.appendChild(pParent2);
            postList.appendChild(div);
            pParent.className="col-md-4"
            pParent2.className="col-md-8"
         });

     }
     catch (error) {
        console.error('get info faild',error);

    }

 }

 posts();

