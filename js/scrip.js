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
    name: "Web Tecnología",
    description: "lorem lorem lorem lorem lorem",
    cover: "img/portfolio/thumbnails/1.jpg",
    images: ["img/portfolio/fullsize/1.jpg", "img/portfolio/fullsize/03.jpg"]
  },
  {
    id: 2,
    name: "Web Tecnología",
    description: "lorem lorem lorem lorem lorem",
    cover: "img/portfolio/thumbnails/2.jpg",
    images: ["img/portfolio/fullsize/2.jpg", "img/portfolio/fullsize/6.jpg", "img/portfolio/fullsize/7.jpg"]
  },
  {
    id: 3,
    name: "Web Tecnología",
    description: "lorem lorem lorem lorem lorem",
    cover: "img/portfolio/thumbnails/3.jpg",
    images: ["img/portfolio/fullsize/3.jpg"]
  },
  {
    id: 4,
    name: "Web Tecnología",
    description: "lorem lorem lorem lorem lorem",
    cover: "img/portfolio/thumbnails/4.jpg",
    images: ["img/portfolio/fullsize/4.jpg", "img/portfolio/fullsize/5.jpg", "img/portfolio/fullsize/06.jpg" ]
  },
  {
    id: 5,
    name: "Web Tecnología",
    description: "lorem lorem lorem lorem lorem",
    cover: "img/portfolio/thumbnails/01.jpg",
    images: ["img/portfolio/fullsize/01.jpg"]
  },
  //definir album 6
  {
    id: 6,
    name: "Web Tecnología",
    description: "lorem lorem lorem lorem lorem",
    cover: "https://i.imgur.com/CSvJexJ.jpg",
    images: ["https://i.imgur.com/CSvJexJ.jpg", "https://i.imgur.com/CSvJexJ.jpg", "https://i.imgur.com/CSvJexJ.jpg" ]
  }
];





function escucharClickSobreProjectos() {
  /* Show project info */
  $(".portfolio-box").on("click",function(event){
    
    let project_id = $(this).data('ref');
    for (let i=0; i<projects.length; i++) {
      if (projects[i]["id"] == project_id){
        console.log(projects[i]);
        //img-fluid mb-3
        console.log($("#projectModalTitle"));
        
        // Agregramos el titulo https://api.jquery.com/text/
        $("#projectModalTitle").html(projects[i]['name']);
        
        // Definimos el elemento body de la descripcion del proyecto en una variable para usarlo varias veces
        let body = $("#projectModalBody");
        
        // Limpiamos el body https://api.jquery.com/empty/
        body.empty();

        // Agregamos la descripcion https://api.jquery.com/append/
        body.append($('<p>' + projects[i].description + '</p>'));
        
        // Agregamos todas las imagenes
        for(let x = 0; x < projects[i]['images'].length; x++) {
          body.append($('<img src="' + projects[i]['images'][x] + '" class="img-fluid rounded mb-3" />' ));
        }
        
        // Abrir un modal en bootstrap   https://getbootstrap.com/docs/4.3/components/modal/#modalshow
        $("#projectModal").modal('show');

        break;
      }
    }
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
                  Sitio web responsivo
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

window.onload = function() {
  console.log("Onload cargar projecto");
  cargarProjectos();
}
