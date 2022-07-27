function iniciar(){
    $.getJSON('./php/loadItens.php', {carrega: 1}, function(data){
        $('#itens-store').empty();
        console.log(data) //apagar posteriormente
        for(i in data){
            //cria itens
            let item = document.createElement('div');
            let img = document.createElement('img');
            let info = document.createElement('div')
            let p = document.createElement('p');
            //atribui valores
            item.id = 'item';
            img.id = 'img-item';
            img.src = data[i].image;
            //append
            item.appendChild(img);
            $('#itens-store').append(item);
        }
    })
}