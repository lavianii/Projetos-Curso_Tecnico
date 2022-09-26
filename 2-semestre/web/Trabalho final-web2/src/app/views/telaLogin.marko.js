// Compiled using marko@4.24.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/trabalhonode$1.0.0/src/app/views/telaLogin.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=pt-br><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Tela de Login</title><link href=https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3 crossorigin=anonymous><link rel=stylesheet href=/cssCadastro type=text/css></head><body><ul class=\"nav justify-content-center\" style><li class=nav-item><a class=\"nav-link active\" aria-current=page href=/ >Login</a></li><li class=nav-item><a class=nav-link href=/cadastro>Cadastro</a></li><li class=nav-item><a class=nav-link href=/pedido>pedido</a></li></ul><form class=\" row g-3\" action=/validaBDUsuarios method=post><div class=col-12><label for=inputEmail4 class=form-label>Email</label><input type=email class=form-control id=login name=login></div><div class=col-12><label for=inputPassword4 class=form-label>Senha</label><input type=password class=form-control id=senha name=senha></div><div class=col-12><button type=submit class=\"btn btn-primary\">Confirmar</button></div><div><a href=/Cadastro><p>Clique aqui para se Cadastrar</p></a></div></form><script src=https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p crossorigin=anonymous></script> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "28");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/trabalhonode$1.0.0/src/app/views/telaLogin.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
