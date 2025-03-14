/* rnscf index js */
document.addEventListener("DOMContentLoaded", function() {
    fetch("data/posts.json")
    .then(response => response.json())
    .then(posts => {
        let listPosts = document.getElementById("list-posts");

        posts.forEach(post => {
            let item = document.createElement("div");
            item.classList.add("card");
            const date = new Date(post.date).toLocaleDateString('pt-BR');
            item.innerHTML = `
                <a href="post.html?id=${post.id}&slug=${post.slug}">
                    <h3 id="post-title">${post.title}</h3>
                    <p id="post-summary">${post.summary}</p>
                    <p id="post-date">Publicado em: ${date}</p>
                </a>
            `;
            listPosts.appendChild(item);
        })
    })
})
.catch(error => console.error("Couldn't load posts:", error));