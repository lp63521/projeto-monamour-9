let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(nome, preco, imagem) {
    carrinho.push({ nome, preco, imagem });
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Item adicionado ao carrinho!");
}

function carregarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const totalSpan = document.getElementById("total");

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("item-carrinho");

        div.innerHTML = `
            <img src="${item.imagem}" width="80">
            <h3>${item.nome}</h3>
            <p>R$ ${item.preco}</p>
            <button onclick="remover(${index})">Remover</button>
        `;

        lista.appendChild(div);
        total += Number(item.preco);
    });

    totalSpan.innerText = total.toFixed(2);
}

function remover(i) {
    carrinho.splice(i, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho();
}
