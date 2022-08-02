function iniciar() {
    $.getJSON('../php/cart.php', {load: 1}, function(data){
        let itensFilter = [];
        let total = 1;
        for (let i = 0; i < data.length; i++) {
            if (i < data.length - 1 && data[i].id == data[i + 1].id) {
                total++;
            } else {
                itensFilter.push({ id: data[i].id, name: data[i].name, price: data[i].price, image: data[i].image, total: total});
                total = 1;
            }
        }
        $('#bodyTable').empty();
        for (i in itensFilter) {
            let row = document.createElement('tr');
            let imgTd = document.createElement('td');
            let nameTd = document.createElement('td')
            let priceTd = document.createElement('td');
            let amountTd = document.createElement('td');
            let delTd = document.createElement('td');
            let img = document.createElement('img');

            row.className = 'item';
            img.src = itensFilter[i].image;
            nameTd.innerHTML += '<b><div class="nameItem">' + itensFilter[i].name + '</div></b>';
            priceTd.innerHTML += '<div class="price">' + itensFilter[i].price + '</div>';
            amountTd.innerHTML += '<input class="amount" onchange="changeTotal()" type="number" value="1" min="0" max="99" step="1">';
            delTd.innerHTML += '<div id="del" onclick="delItem(this)">X</div>' 
            
            imgTd.appendChild(img);
            row.appendChild(imgTd);
            row.appendChild(nameTd);
            row.append(priceTd);
            row.appendChild(amountTd);
            row.appendChild(delTd);

            $('#bodyTable').append(row);
        }

        let totalCart = seeTotal();

        let row = document.createElement('tr');
        let emptyTd = document.createElement('td');
        let textTd = document.createElement('td');
        let totalTd = document.createElement('td');

        row.id = 'subTotal';
        textTd.id = 'textSubTotal'
        textTd.innerHTML += '<b>Total da Compra(<img src="../img/PokémonDollar_ColoXD.png"></b>): '
        totalTd.innerHTML += '<div id="total">' + totalCart + '</div>'

        row.appendChild(emptyTd);
        row.appendChild(textTd);
        row.appendChild(totalTd);
        $('#bodyTable').append(row);
    });
}

function toFloat(text){
    return parseFloat(text)
}

function seeTotal(){
    let itens = document.getElementsByClassName("item");
    let allTotal = 0;
        for( var i=0; i< itens.length; i++){
            let elementPrice = itens[i].getElementsByClassName("price");
            let elementAmount = itens[i].getElementsByClassName("amount"); 
            let price = toFloat(elementPrice[0].innerHTML);
            let amount = toFloat(elementAmount[0].value);
            
            let subTotal = 0;
            subtotal = amount*price;
            allTotal += subtotal;
        }
    return allTotal;
}

function changeTotal() {
    let totalCart = seeTotal();
    document.getElementById('total').textContent = totalCart;
}

function delItem(item){
    row = item.parentNode.parentNode;
    indexRow = row.rowIndex;
    table = row.parentNode;

    table.deleteRow(indexRow-1);
    changeTotal();
}

function buyItens(){
    let itens = document.getElementsByClassName("item");
    let bagItens = [];

    for (var i=0; i < itens.length; i++) {
        let elementName = itens[i].getElementsByClassName("nameItem");
        let elementPrice = itens[i].getElementsByClassName("price");
        let elementAmount = itens[i].getElementsByClassName("amount"); 

        bagItens.push({name: elementName[0].innerHTML, price: elementPrice[0].innerHTML, amount: elementAmount[0].value});
    }
    
    let elementTotal = document.getElementById('total').innerHTML;
    bagItens.push({total: elementTotal});
    let email = document.getElementById('confirmEmail').value;
    var regexEmail = /^[\w\d._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;

    if (!regexEmail.test(email)) {
        alert('Email inválido');
        return false;
    }

    let textEmail = toString(bagItens);

    $.get('../php/cart.php', {load: 2, message: textEmail, email: email}, function(data){
        alert(data);
        document.location.reload(true);  
    })
}

function toString(listItens) {
    return JSON.stringify(listItens);
}




