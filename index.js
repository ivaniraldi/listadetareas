
  function addElement() {
    // create a new div element
    const nuevoElemento = document.createElement("div");


    //creamos el checkbox
    const check = document.createElement("input");
    //le damos los atributos
    check.type = "checkbox";
    check.className = "checkeo"
    
    // and give it some content
    const newContent = document.createTextNode(document.getElementById("tareas1").value);
    
    // add the text node to the newly created div
    nuevoElemento.className = "nuevaTarea"
    nuevoElemento.appendChild(newContent);
    nuevoElemento.appendChild(check);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(nuevoElemento, currentDiv);
  }