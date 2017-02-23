console.info("Shoping-list");

function getRow(produs,cantitate){
    return '<tr>'+
        '<td>'+produs+'</td>'+
        '<td>'+cantitate+'</td>'+
        '</tr>';

}
function showList(shopingList){
    var lista = '';
    for (var i=0; i <shopingList.length; i++){
        var produs = shopingList[i];
        lista += getRow(produs.nume,produs.cantitate);
    }
    document.getElementsByTagName('tbody')[0].innerHTML=lista;

}
$.ajax('js/mocks/shoping-list.json',{
    success: function(shopingList){
        console.info(shopingList);
        showList(shopingList);
    }

});

console.debug('after ajax');


var shopingList=[];

showList(shopingList);


