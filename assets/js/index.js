/* rnscf index js */
document.addEventListener("DOMContentLoaded", function() {
    fetch("data/posts.json")
    .then(response => response.json())
    .then(posts => {
        let listPosts = document.getElementById("list-posts");

        posts.forEach(post => {
            let item = document.createElement("li");
            item.innerHTML = `
                <a href="post.html?id=${post.id}&slug=${post.slug}">
                    <h3>${post.title}</h3>
                    <p>${post.date}</p>
                    <p>${post.summary}</p>
                </a>
            `;
            listPosts.appendChild(item);
        })
    })
})
.catch(error => console.error("Couldn't load posts:", error));