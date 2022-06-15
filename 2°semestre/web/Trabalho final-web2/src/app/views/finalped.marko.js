// Compiled using marko@4.24.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/trabalhonode$1.0.0/src/app/views/finalped.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Lista dos Clientes com Node.js</title><link href=https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3 crossorigin=anonymous><link rel=stylesheet type=text/css href=/cssfinal></head><body><ul class=\"nav justify-content-center\"><li class=nav-item><a class=\"nav-link active\" aria-current=page href=/ >Login</a></li><li class=nav-item><a class=nav-link href=/cadastro>Cadastro</a></li><li class=nav-item><a class=nav-link href=/pedido>pedido</a></li></ul><div><form action=/insertBDpedido method=post><div><div> </div><div class=TituloForm> <h1>Finalizando compra </h1> </div><div class=mb-3 id=table><input type=text id=formGroupExampleInput name=cpf_cli size=40 class=form-control placeholder=\"Por favor insira seu cpf\"></div><div class=mb-3 id=table><input type=number id=formGroupExampleInput name=qtd class=form-control placeholder=\"insira a quantidade que deseja comprar \"></div><input type=submit value=\"Finalizar compra\" class=\"btn btn-primary \" id=btn2><div class=cadastro>Ainda nâo tem cadastro clique <a href=/cadastro>AQUI </a>para se cadastrar</div></div></form></div> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "26");

  _preferred_script_location_tag({}, out);

  out.w("</body><script src=https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p crossorigin=anonymous></script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/trabalhonode$1.0.0/src/app/views/finalped.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
