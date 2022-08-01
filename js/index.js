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
            info.innerHTML += '<img src="./img/baseline_add_shopping_cart_black_24dp.png" id="addCart" title="Adicionar ao Carrinho" value="' + data[i].id + '" onclick="addCart(' + data[i].id + ')">';
            info.innerHTML += '<p><img src="./img/PokémonDollar_ColoXD.png" id="pokedollar">' + data[i].price + '</p>';
            info.innerHTML += '<a href="javascript:showDescription('+data[i].id+')" title="Ver Descricao"> <img src="./img/baseline_add_black_24dp.png"></a>'
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
                info.innerHTML += '<img src="./img/baseline_add_shopping_cart_black_24dp.png" id="addCart" title="Adicionar ao Carrinho" value="' + data[i].id + '" onclick="addCart(' + data[i].id + ')">';
                info.innerHTML += '<p><img src="./img/PokémonDollar_ColoXD.png" id="pokedollar">' + data[i].price + '</p>';
                info.innerHTML += '<a href="javascript:showDescription('+data[i].id+')" title="Ver Descricao"> <img src="./img/baseline_add_black_24dp.png"></a>'
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
            info.innerHTML += '<img src="./img/baseline_add_shopping_cart_black_24dp.png" id="addCart" title="Adicionar ao Carrinho" value="' + data[i].id + '" onclick="addCart(' + data[i].id + ')">';
            info.innerHTML += '<p><img src="./img/PokémonDollar_ColoXD.png" id="pokedollar">' + data[i].price + '</p>';
            info.innerHTML += '<a href="javascript:showDescription('+data[i].id+')" title="Ver Descricao"> <img src="./img/baseline_add_black_24dp.png"></a>'
            item.appendChild(img);
            item.appendChild(info);
            $('#itens-store').append(item);
        }
    });
}

function showDescription(id){
    $('.modal').addClass('show-modal');
    $.getJSON('./php/loadDescription.php', {id: id}, function(data){
        $('.modal-content').empty();
        for(i in data){
            let img = document.createElement('img');
            let item = document.createElement('div');

            img.src = data[i].image;
            item.id = 'aboutItem';
            item.innerHTML += '<h2>' + data[i].name + '</h2>';
            item.innerHTML += data[i].description;

            $('.modal-content').append('<span onclick="hideDescription()">&times;</span>')
            $('.modal-content').append(img);  
            $('.modal-content').append(item);  
            $('.modal-content').append('<img src="./img/baseline_add_shopping_cart_black_24dp.png" id="addCart" title="Adicionar ao Carrinho" value="' + data[i].id + '" onclick="addCart(' + data[i].id + ')">');
        }
    });
}

function hideDescription(){
    $('.modal').removeClass('show-modal');
}

function addCart(v){
    $.get('./php/addCart.php', {id: v}, function(data){
        alert('Produto adicionado ao carrinho!');
        //console.log(data);
    });
}

function aviso(){
    alert('Funcionalidade não criada!');
}