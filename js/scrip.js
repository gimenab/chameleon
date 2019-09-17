/*
$(document).ready(function(){
  $(window).scroll(function(){

    if($(this).scrollTop > 0){
      $(".img-fluid.logo").fadeOut();
    }else{
      $(".img-fluid.logo").fadeIn();
    }
  })
})
*/
/*
$(document).ready(function(){
  $(‘.behance-container’).embedBehance({
      // behance API Key
      apiKey: ‘EL TEXTO DEL API KEY’,
      // Behance Username
      userName: ‘TU NOMBRE DE USUARIO’,infiniteScrolling: true,
  });
});
*/

/* Project list */
let projects = [
  {
    id: 1,
    name: "Página de información",
    description: "Para tener una exitosa web de tecnología",
    cover: "img/portfolio/thumbnails/1.jpg",
    images: ["img/portfolio/fullsize/1.jpg", "img/portfolio/fullsize/03.jpg"],
    category:"promo",
  },
  {
    id: 2,
    name: "Blog de noticias",
    description: "Sitios webs deportivos",
    cover: "img/portfolio/thumbnails/2.jpg",
    images: ["img/portfolio/fullsize/2.jpg", "img/portfolio/fullsize/6.jpg", "img/portfolio/fullsize/7.jpg"],
    category:"blog"
  },
  {
    id: 3,
    name: "Fotografía digital",
    description: "Foto producto",
    cover: "img/portfolio/thumbnails/3.jpg",
    images: ["img/portfolio/fullsize/3.jpg"],
    category: "foto"
  },

  //definir album 4
  {
    id: 4,
    name: "Páginas de información con videos",
    description: "Contenido para mostrar servicios",
    cover: "img/portfolio/thumbnails/4.jpg",
    images: ["img/portfolio/fullsize/4.jpg", "img/portfolio/fullsize/5.jpg", "img/portfolio/fullsize/06.jpg" ],
    category: "promo"
  },

  //definir album 5
  {
    id: 5,
    name: "Páginas responsivas",
    description: "Visualizaciones en diferentes dispositivos",
    cover: "img/portfolio/thumbnails/01.jpg",
    images: ["img/portfolio/fullsize/01.jpg"],
    category: "promo"
  },

  //definir album 6
  {
    id: 6,
    name: "Página de información",
    description: "Contenido para mostrar servicios",
    cover: "img/portfolio/thumbnails/9II.jpg",
    images: ["img/portfolio/fullsize/9II.jpg", "img/portfolio/fullsize/9.jpg", "img/portfolio/fullsize/9I.jpg" ],
    category: "promo"
  }
];



function escucharClickSobreProjectos() {
  /* Show project info */
  $(".portfolio-box").on("click",function(event){

    let project_id = $(this).data('ref');

    const custom_project = projects.find(function(project) {
      return project.id == project_id;
    });

    console.log(custom_project);
    console.log($("#projectModalTitle"));

    // Agregramos el titulo https://api.jquery.com/text/
    $("#projectModalTitle").html(custom_project.name);

    // Definimos el elemento body de la descripcion del proyecto en una variable para usarlo varias veces
    let body = $("#projectModalBody");

    // Limpiamos el body https://api.jquery.com/empty/
    body.empty();

    // Agregamos la descripcion https://api.jquery.com/append/
    body.append($('<p>' + custom_project.description + '</p>'));

    // Agregamos todas las imagenes
    const images = custom_project.images.map(image => $('<img src="' + image + '" class="img-fluid rounded mb-3" />' ));
    body.append(images);

    // Abrir un modal en bootstrap   https://getbootstrap.com/docs/4.3/components/modal/#modalshow
    $("#projectModal").modal('show');
  });
}

function cargarProjectos() {
  console.log("Cargando porjectos....");
  for (let i = 0; i < projects.length; i ++) {
    $("#projectsContainer").append($(
      `
      <div class="col-lg-4 col-sm-6">
            <div class="portfolio-box" data-ref="`+ projects[i]['id'] +`">
              <img class="img-fluid" src="`+ projects[i]['cover'] +`" alt="">
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">
                  `+ projects[i]['category'] + `
                </div>
                <div class="project-name">
                  `+ projects[i]['name'] +`
                </div>
              </div>
            </div>
          </div>
      `
    ));
  }
  escucharClickSobreProjectos();
}

/*
* Funcion para guardar datos de contacto
* params: data (Object)
*/
function saveContactForm(data) {
  firebase.database().ref('contact').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
    .then(function(){
       // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
       closeModalContact();
    })
    .catch(function(){
      alert('mensaje No guardado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
    });
};

/*
* Funcion para cerrar y limpiar el modal de contacto
*/
function closeModalContact() {
  // cerrar modal
  $('#contactModal').modal('hide');

  setTimeout(function(){  
    // ocultar texto
    document.getElementById("textBody").style.display = "none";
    
    // mostrar form
    document.getElementById("inputsBody").style.display = "block";

    //Mostrar boton enviar
    document.getElementById("btnContactSubmit").style.display = "block";
  }, 500);
}

// Formulario Submit
document.querySelector("#contactModal form").addEventListener("submit", function(e){
  e.preventDefault();    //stop form from submitting

  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;
  
  console.log("Este es el email " + email);
  console.log("Este es el mensaje " + message);
  console.log("Enviar datos");
  const data = {
    'email': email,
    'mensaje': message,
  }; // Creamos un objecto con todos los elementos de nuestro formulario.
  saveContactForm(data); // Enviamos la información obtenida por el usuario a la función que se encargara de guardar la información en Firebase

  document.getElementById("contactEmail").value = "";
  document.getElementById("contactMessage").value = "";

  // ocultar inputsBody
  document.getElementById("inputsBody").style.display = "none";

  //Ocultar boton enviar
  document.getElementById("btnContactSubmit").style.display = "none";

  // mostrar texto
  document.getElementById("textBody").style.display = "block";

});



window.onload = function() {
  console.log("Onload cargar projecto");
  cargarProjectos();
  new WOW().init();
}
