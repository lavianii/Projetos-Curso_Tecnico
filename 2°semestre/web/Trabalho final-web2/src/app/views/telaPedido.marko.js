// Compiled using marko@4.24.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/trabalhonode$1.0.0/src/app/views/telaPedido.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><link href=https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3 crossorigin=anonymous><head><title>Lista dos Clientes</title><link rel=stylesheet href=/cssPedido type=text/css></head><body><ul class=\"nav justify-content-center\" id=menu><li class=nav-item><a class=\"nav-link active\" aria-current=page href=/ >Login</a></li><li class=nav-item><a class=nav-link href=/cadastro>Cadastro</a></li><li class=nav-item><a class=nav-link href=/pedido>pedido</a></li></ul><div class=espaço></div><br><h1>Pedidos</h1><br><br><div><table class=table><thead class=thead-dark><tr><th>Numero do pedido</th><th>Data do pedido</th><th>Cpf</th><th>Valor</th></tr></thead><tbody>");

  var $for$0 = 0;

  marko_forOf(data.clientes, function(cliente) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(cliente.id_ped) +
      "</td><td>" +
      marko_escapeXml(cliente.data_ped) +
      "</td><td>" +
      marko_escapeXml(cliente.cpf_cli) +
      "</td><td>" +
      marko_escapeXml(cliente.ValorGeral) +
      "</td></tr>");
  });

  out.w("</tbody></table></div><div class=espaço> </div><script src=https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p crossorigin=anonymous></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "33");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/trabalhonode$1.0.0/src/app/views/telaPedido.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
