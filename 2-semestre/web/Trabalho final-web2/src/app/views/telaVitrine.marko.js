// Compiled using marko@4.24.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/trabalhonode$1.0.0/src/app/views/telaVitrine.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Vitrine</title><link href=https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3 crossorigin=anonymous><link rel=stylesheet type=text/css href=/cssvitrine></head><body style=background-color:#DCDCDC;><nav class=\"navbar navbar-expand-lg col-12 m-auto position-fixed\" style=\"background-color: black; z-index:999;\"><div class=container-fluid><a class=navbar-brand href=# style=\"color: white;\">Trabalho Node</a><button class=navbar-toggler type=button data-bs-toggle=collapse data-bs-target=#navbarSupportedContent aria-controls=navbarSupportedContent aria-expanded=false aria-label=\"Toggle navigation\"><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=navbarSupportedContent><ul class=\"navbar-nav me-auto mb-2 mb-lg-0\"><li class=nav-item><a class=\"nav-link active\" href=/  style=\"color: white;\">Login</a></li><li class=nav-item><a class=nav-link href=/cadastro style=\"color: white;\">Cadastro</a></li><li class=nav-item><a class=nav-link href=/pedido style=\"color: white;\">pedido</a></li></ul><form class=d-flex><input class=\"form-control me-2\" type=search placeholder=Search aria-label=Search><button class=\"btn btn-outline-success\" type=submit>Search</button></form></div></div></nav> <div id=carouselExampleControls class=\"carousel slide\" data-bs-ride=carousel><div class=carousel-inner><div class=\"carousel-item active\"><img src=https://image.shutterstock.com/z/stock-photo-cool-woman-in-beige-outfit-smiling-on-terrace-happy-young-lady-in-stylish-pants-and-shirt-poses-on-1925288684.jpg class=\"d-block w-100\" alt=img1></div><div class=carousel-item><img src=https://image.shutterstock.com/z/stock-photo-street-style-fashion-details-tanned-woman-wearing-linen-shorts-white-shirt-brown-leather-bag-and-1496689280.jpg class=\"d-block w-100\" alt=img2></div><div class=carousel-item><img src=https://image.shutterstock.com/z/stock-photo-varna-bulgaria-january-nike-pair-of-tennis-training-shoes-on-white-background-1629730786.jpg class=\"d-block w-100\" alt=img3></div></div><button class=carousel-control-prev type=button data-bs-target=#carouselExampleControls data-bs-slide=prev><span class=carousel-control-prev-icon aria-hidden=true></span><span class=visually-hidden>Previous</span></button><button class=carousel-control-next type=button data-bs-target=#carouselExampleControls data-bs-slide=next><span class=carousel-control-next-icon aria-hidden=true></span><span class=visually-hidden>Next</span></button></div><div class=\"row row-cols-1 row-cols-md-3 g-4 m-auto col-11\"><div class=col><div class=card><img src=http://img.ijacotei.com.br/produtos/200/200/50/38/16103850.jpg class=card-img-top alt=...><div class=card-body><h5 class=card-title>Tênis Nike</h5><p class=card-text> </p><p class=card-text>$200,00 </p><a href=/inclusaopedido class=\"btn btn-primary\">comprar</a></div></div></div><div class=col><div class=card><img src=https://www.cazadosport.com.br/media/catalog/product/cache/1/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/c/a/camisa-umbro-twr-degrade-infantil-img.jpg class=card-img-top alt=camisa><div class=card-body><h5 class=card-title>Camisa</h5><p class=card-text>$96,00</p><a href=/inclusaopedido class=\"btn btn-primary\">comprar</a></div></div></div><div class=col><div class=card><img src=https://novomundo.vteximg.com.br/arquivos/ids/2407699-200-200/image-28738a9178a448e3ba9eafd1328f343b.jpg?v=637273130116200000 class=card-img-top alt=Shorts><div class=card-body><h5 class=card-title>Shorts</h5><p class=card-text></p><p class=card-text>$41,00</p><a href=/inclusaopedido class=\"btn btn-primary\">comprar</a></div></div></div></div><hr class=featurette-divider><footer class=container><p class=float-end><a href=#>Back to top</a></p><p>&copy; 2017–2021 Company, Inc. &middot; <a href=#>Privacy</a> &middot; <a href=#>Terms</a></p></footer><script src=https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p crossorigin=anonymous></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "67");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/trabalhonode$1.0.0/src/app/views/telaVitrine.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
