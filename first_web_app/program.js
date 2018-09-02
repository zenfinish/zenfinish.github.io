var table = document.getElementById('listTable');
var select = document.getElementById('listSelect');
var buttonAdd = document.getElementById('buttonAdd');
var inputTable = document.getElementById('inputTable');

function listData(data) {
    for(var i = 0; i < data.length; i++) {  
        var row = document.createElement("tr");
        
        var cell = document.createElement("td");
        var cellText = document.createTextNode(data[i]['id']);
        cell.appendChild(cellText);
        row.appendChild(cell);

        var cell = document.createElement("td");
        var cellText = document.createTextNode(data[i]['nama']);
        cell.appendChild(cellText);
        row.appendChild(cell);

        var cell = document.createElement("td");
        var cellText = document.createTextNode(data[i]['stok']);
        cell.appendChild(cellText);
        row.appendChild(cell);

        var cell = document.createElement("td");
        var cellText = document.createTextNode(data[i]['harga']);
        cell.appendChild(cellText);
        row.appendChild(cell);

        table.appendChild(row);
    }

}

function optionData(data) {
    for(var i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        var optAttribute = document.createAttribute('value');
            optAttribute.value = data[i]['id'];
            option.setAttributeNode(optAttribute);
        var optionText = document.createTextNode(data[i]['nama']);
        option.appendChild(optionText);
        select.appendChild(option);
    }
    select.addEventListener('change', function() {
        alert(select.value);
    });
}

buttonAdd.addEventListener('click', function() {
    var rowInputTable = document.createElement('tr');
        var cellInputTable = document.createElement('td');
            
            var cellHtml = document.createElement('select');
                var selectAttribute = document.createAttribute('id');
                selectAttribute.value = 'listSelect';
                cellHtml.setAttributeNode(selectAttribute);
                
                var optionHtml = document.createElement('option');
                    var optText = document.createTextNode('- Pilih Barang -');
                optionHtml.appendChild(optText);

            cellHtml.appendChild(optionHtml);
            optionData(database);

        cellInputTable.appendChild(cellHtml);
    rowInputTable.appendChild(cellInputTable);

    inputTable.appendChild(rowInputTable);
});
