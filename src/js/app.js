let array = [];
let arrayCompra = []

const crearUsuario = () => {
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let edad = document.getElementById("edad").value;
  let ciudad = document.getElementById("ciudad").value;
  let identificaion = document.getElementById("identificacion").value;

  array.push({
    id: identificaion,
    nombre: nombre,
    apellidos: apellidos,
    edad: edad,
    ciudad: ciudad,
  });

  localStorage.setItem("arrayUsuario", JSON.stringify(array));
  alert("se creo un usuario")
};

function cargarUsuario() {

  console.log(localStorage.getItem(0))

  let arraUsu = JSON.parse(localStorage.getItem("arrayUsuario"));
  arraUsu.map((item) => {
  
    let tr1 = document.createElement("tr");
    let th = document.createElement("th");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    if (item!==null) {
      
          th.textContent += `${ item.id }`;
          tr1.append(th);
          tbody.append(tr1);
      
          td1.textContent += `${item.nombre}`;
          tr1.append(td1);
          tbody.append(tr1);
      
          td2.textContent += `${ item.apellidos}`;
          tr1.append(td2);
          tbody.append(tr1);
      
          td3.textContent += `${item.edad }`;
          tr1.append(td3);
          tbody.append(tr1);
      
          td4.textContent += `${item.ciudad }`;
          tr1.append(td4);
          tbody.append(tr1);
      
    }
  });
}

const eliminar = () => {
  let arraUsu3 = JSON.parse(localStorage.getItem("arrayUsuario"));
  let id3 = document.querySelector("#identificacion").value;

  for (let i = 0; i < arraUsu3.length; i++) {
    if (arraUsu3[i] !=null  &&  arraUsu3[i].id === id3) {
      delete arraUsu3[i]

    }
  }
  console.log(arraUsu3)
  
  localStorage.setItem("arrayUsuario", JSON.stringify(arraUsu3));
  alert("se Elimino una usuario")
};

const actualizar = () =>{
  let arrayUsu2 = JSON.parse(localStorage.getItem("arrayUsuario"));
  let id2 = document.querySelector("#identificacion").value;
  let nombre2 = document.querySelector("#nombre").value;
  let apellidos2 = document.querySelector("#apellidos").value;
  let edad2 = document.querySelector("#edad").value;
  let ciudad2 = document.querySelector("#ciudad").value; 

   for (item in arrayUsu2 ) {
    if (arrayUsu2[item] !==null && arrayUsu2[item].id === id2) {
      arrayUsu2[item].nombre = nombre2
      arrayUsu2[item].apellidos = apellidos2
      arrayUsu2[item].edad = edad2
      arrayUsu2[item].ciudad = ciudad2
    }
  } 
  console.log(arrayUsu2)

  localStorage.setItem("arrayUsuario", JSON.stringify(arrayUsu2));
  alert("Informacion Actualizada")
}

const crearCompra = () => {
  let factura = document.getElementById("factura").value;
  let cliente = document.getElementById("cliente").value;
  let producto = document.getElementById("producto").value;
  let valor = document.getElementById("valor").value;
  let fechaCompra = document.getElementById("fecha").value;


  arrayCompra.push({
    factura: factura,
    cliente: cliente,
    producto: producto,
    valor: valor,
    fechaCompra: fechaCompra,
  });

  localStorage.setItem("arrayCompras", JSON.stringify(arrayCompra));
  alert("se creo una compra")
};
const actualizarCompra = () =>{
  let arrayCompra2 = JSON.parse(localStorage.getItem("arrayCompras"));
  let factura2 = document.querySelector("#factura").value;
  let cliente2 = document.querySelector("#cliente").value;
  let producto2 = document.querySelector("#producto").value;
  let valor2 = document.querySelector("#valor").value;
  let fecha2 = document.querySelector("#fecha").value; 

  for (item in arrayCompra2 ) {
    if (arrayCompra2[item] !==null && arrayCompra2[item].factura === factura2) {
      arrayCompra2[item].cliente = cliente2
      arrayCompra2[item].producto = producto2
      arrayCompra2[item].valor = valor2
      arrayCompra2[item].fechaCompra= fecha2
    }
  } 
  localStorage.setItem("arrayCompras", JSON.stringify(arrayCompra2));
  alert("Informacion Actualizada")
}


function cargarCompra() {
  let arrayCompra = JSON.parse(localStorage.getItem("arrayCompras"));
  arrayCompra.map((item) => {
  
    let tr1 = document.createElement("tr");
    let th = document.createElement("th");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    if (item!==null) {
      
      th.textContent += `${item.factura }`;
      tr1.append(th);
      tbody.append(tr1);
  
      td1.textContent += `${item.cliente}`;
      tr1.append(td1);
      tbody.append(tr1);
  
      td2.textContent += `${item.producto }`;
      tr1.append(td2);
      tbody.append(tr1);
  
      td3.textContent += `${item.valor }`;
      tr1.append(td3);
      tbody.append(tr1);
  
      td4.textContent += `${item.fechaCompra }`;
      tr1.append(td4);
      tbody.append(tr1);
    }
  });
}

const eliminarCompra = () => {
  let arrayCompra3 = JSON.parse(localStorage.getItem("arrayCompras"));
  let factura3 = document.querySelector("#factura").value;

  for (let i = 0; i < arrayCompra3.length; i++) {
    if (arrayCompra3[i] !=null  &&  arrayCompra3[i].factura === factura3) {
      delete arrayCompra3[i]
    }
  }
  console.log(arrayCompra3)
  
  localStorage.setItem("arrayCompras", JSON.stringify(arrayCompra3));
  alert("Compra eliminada")
};

function totalVentas() {
  let arrayCompras = JSON.parse(localStorage.getItem("arrayCompras"))
  let total = 0
  arrayCompras.map((item)=>{
    if (item!==null) {
      
      total = total + parseInt(item.valor)
    }
  })
  alert("Total de ventas de " + total)
}