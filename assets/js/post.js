/* rnscf post js */
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("id");

    if (!postId) {
        document.getElementById("post-content").innerHTML = "<p>Post não encontrado.</p>";
        return;
    }

    fetch("data/posts.json")
        .then(response => response.json())
        .then(posts => {
            const post = posts.find(p => p.id == postId); // Procura o post pelo ID

            if (!post) {
                document.getElementById("post-content").innerHTML = "<p>Post não encontrado.</p>";
                return;
            }

            document.title = post.title;
            document.getElementById("post-title").textContent = post.title;
            document.getElementById("post-date").textContent = `Publicado em: ${post.date}`;
            document.getElementById("post-time").textContent = `Tempo de leitura: ${post.time} min`;
            document.getElementById("post-content").innerHTML = `<p>${post.content}</p>`;
        })

        .catch(error => console.error("Erro ao carregar o post:", error));
});
