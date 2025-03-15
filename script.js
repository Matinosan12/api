async function posts() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const postList = document.getElementById('main');
        data.forEach(post => {
            const div = document.createElement('div');
            const pParent = document.createElement('div');
            const imageParent = document.createElement('div');
            const img = document.createElement('img');
            const pParent2 = document.createElement('div');
            const p = document.createElement('p');
            const p2 = document.createElement('p');
            imageParent.appendChild(img);
            img.src = "wallpapersden.com_k-nioh-2_3936x2215 - Copy.jpg"
            img.className = "w-100";
            pParent.className = "overflow-hidden";
            pParent2.className = "overflow-hidden"
            div.className = "col-md-6 m-1 overflow-hidden p-3 d-inline-block rounded border justify-content-center align-items-center  ";
            p.textContent = ` ${post.title}`;
            p2.textContent = `${post.body}`;
            pParent.appendChild(p);
            pParent2.appendChild(p2);
            div.appendChild(imageParent)
            div.appendChild(pParent);
            div.appendChild(pParent2);
            postList.appendChild(div);

            pParent.className = "col-md-4"
            pParent2.className = "col-md-8"
        });

    }
    catch (error) {
        console.error('get info faild', error);

    }

}

posts();

