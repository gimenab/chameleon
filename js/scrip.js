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
    description: "Para tener una exitosa web de tecnología",
    cover: "https://i.imgur.com/CSvJexJ.jpg",
    images: ["https://i.imgur.com/CSvJexJ.jpg", "https://i.imgur.com/CSvJexJ.jpg", "https://i.imgur.com/CSvJexJ.jpg" ],
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



// Formulario

// Escuchar click sobre a
// Show form info
function escucharClickSobreEmail() {
  $("#modalForm").on("click",function(event){
    console.log ("Vamos a ver que sale...");
  });
}

/*
// Cargar formulario
function cargarFormulario() {
  console.log("Cargando formulario....");
  for (let i = 0; i < form.length; i ++) {
    $(".d-block").append($(

    `<form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `
   ));
*/



window.onload = function() {
  console.log("Onload cargar projecto");
  cargarProjectos();
  new WOW().init();
  escucharClickSobreEmail();
}
