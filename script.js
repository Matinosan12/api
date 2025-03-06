 async function posts() {

     try {
       const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const postList = document.getElementById('main');
       data.forEach(post => {
            const div = document.createElement('div');
            const p = document.createElement('p');
            const p2 = document.createElement('p');
            div.className="post";
             p.textContent = `${post.title}`;
             p2.textContent = `${post.body}`;
            postList.appendChild(div,p,p2);
         });

     }
     catch (error) {
        console.error('get info faild',error);

    }

 }

 posts();

