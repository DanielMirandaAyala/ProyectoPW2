let compra;
let listaCom = [];
let segCom;
do{
    listaCom.push(prompt("Artículo a agregar"))
    segCom = confirm("Agregar otro Artículo?");
}while(segCom);

console.log("Los articulos del carrito son: \n");

for (compra of listaCom) {
    console.log(compra);
}