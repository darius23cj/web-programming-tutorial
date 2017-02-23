console.info("Shoping-list");

function getRow(produs,cantitate){
    return '<tr>'+
        '<td>'+produs+'</td>'+
        '<td>'+cantitate+'</td>'+
        '</tr>';

}
function showList(){
    var lista = '';
    for (var i=0; i <shopingList.length; i++){
        var produs = shopingList[i];
        lista += getRow(produs.nume,produs.cantitate);
    }
    document.getElementsByTagName('tbody')[0].innerHTML=lista;

}

var shopingList=[
    {nume:'Paine', cantitate:1},
    {nume:'Suc', cantitate:3},
    {nume:'Mere', cantitate:20}
];

showList(shopingList);


