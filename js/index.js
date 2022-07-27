function iniciar(){
    $.getJSON('./php/loadItens.php', {carrega: 1}, function(data){
        $('#itens-store').empty();
        for(i in data){
            let item = document.createElement('div');
            let img = document.createElement('img');
            let info = document.createElement('div')
            item.id = 'item';
            img.id = 'img-item';
            img.src = data[i].image;
            info.innerHTML += '<p><b>' + data[i].name + '</b></p>';
            info.innerHTML += '<img src="./img/baseline_add_shopping_cart_black_24dp.png" title="adicionar ao carrinho" value="' + data[i].id + '" onclick="addCart(this.value)">';
            info.innerHTML += '<p><img src="./img/PokémonDollar_ColoXD.png" id="pokedollar">' + data[i].price + '</p>';
            info.innerHTML += '<a href="./pages/aboutItem.html" title="descricao"> <img src="./img/baseline_add_black_24dp.png"></a>'
            item.appendChild(img);
            item.appendChild(info);
            $('#itens-store').append(item);
        }
    }).then(
        $.getJSON('./php/loadItens.php', {carrega: 0}, function(data){
            for(i in data){
                let item = document.createElement('div');
                let img = document.createElement('img');
                let info = document.createElement('div')
                item.id = 'item';
                img.id = 'img-item';
                img.src = data[i].image;
                info.innerHTML += '<p><b>' + data[i].name + '</b></p>';
                info.innerHTML += '<img src="./img/baseline_add_shopping_cart_black_24dp.png" title="adicionar ao carrinho" value="' + data[i].id + '" onclick="addCart(this.value)">';
                info.innerHTML += '<p><img src="./img/PokémonDollar_ColoXD.png" id="pokedollar">' + data[i].price + '</p>';
                info.innerHTML += '<a href="./pages/aboutItem.html" title="descricao"> <img src="./img/baseline_add_black_24dp.png"></a>'
                item.appendChild(img);
                item.appendChild(info);
                $('#itens-store').append(item);
            }
        }) 
    )
}

function filterItens(value){
    $.getJSON('./php/filterItens.php', {category: value}, function(data){
        $('#itens-store').empty();
        for(i in data){
            let item = document.createElement('div');
            let img = document.createElement('img');
            let info = document.createElement('div')
            item.id = 'item';
            img.id = 'img-item';
            img.src = data[i].image;
            info.innerHTML += '<p><b>' + data[i].name + '</b></p>';
            info.innerHTML += '<img src="./img/baseline_add_shopping_cart_black_24dp.png" title="adicionar ao carrinho" value="' + data[i].id + '" onclick="addCart(this.value)">';
            info.innerHTML += '<p><img src="./img/PokémonDollar_ColoXD.png" id="pokedollar">' + data[i].price + '</p>';
            info.innerHTML += '<a href="./pages/aboutItem.html" title="descricao"> <img src="./img/baseline_add_black_24dp.png"></a>'
            item.appendChild(img);
            item.appendChild(info);
            $('#itens-store').append(item);
        }
    });
}

function aviso(){
    alert('Funcionalidade não criada!');
}