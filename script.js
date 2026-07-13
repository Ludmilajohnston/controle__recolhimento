/* =========================
   PRODUTOS E LOJAS
========================= */

var produtos = {
  "50075": "BOLINHO ANA MARIA 35G BAUNILHA",
  "23702": "BOLINHO ANA MARIA 35G CENOURA",
  "39767": "BOLINHO ANA MARIA 35G CHOC",
  "40214": "BOLINHO ANA MARIA 35G DUPLO CHOC",
  "39764": "BOLINHO ANA MARIA 35G GOTAS CHOC",
  "504227": "BOLINHO ANA MARIA 42G COB AVELA 42G",
  "2694": "BOLINHO ANA MARIA 42G COBERTURA CHOC",
  "2967": "BOLINHO ANA MARIA 42G NAPOLITANO",
  "5096": "BOLINHO ANA MARIA 70G BAUNILHA",
  "3883": "BOLINHO ANA MARIA 70G CHOC",
  "2707": "BOLINHO ANA MARIA 70G GOTAS CHOC",
  "506390": "BOLINHO ANA MARIA MORANGO 70G",
  "506392": "BOLINHO ANA MARIA BANOFFEE 70G",
  "8525": "BOLO PULLMAN 250G CHOC",
  "2877": "BOLO PULLMAN 250G GOTAS CHOC",
  "89044": "BOLO PULLMAN 250G LARANJA",
  "3910": "BOLO PULLMAN 250G FRAPE",
  "51011": "PAO FORMA PULLMAN TRADICIONAL 480G",
  "27636": "PAO FORMA PULLMAN INTEGRAL 480G",
  "504092": "PAO FORMA TRADICAO INT 400G LV",
  "504091": "PAO FORMA TRADICAO TRAD 400G LV",
  "504369": "PAO BISNAGA ARTESANO 300G",
  "504437": "PAO BISNAGA ARTESANO NA CHAPA 300G",
  "8304": "PAO BISNAGUITO PULLMAN 300G",
  "504095": "PAO BISNAGUITO TRADICAO 280G",
  "502829": "PAO BISNAGUITO PULLMAN 280G LV",
  "500199": "PAO FORMA PULLMAN GRAOS CASTANHA 450G",
  "503140": "PAO FORMA ARTESANO PULLMAN CHAPA 500G",
  "503747": "PAO FORMA ARTESAN PULLMAN AUSTRALIANO 500G",
  "7515": "PAO FORMA ARTESANO ORIGINAL 500G",
  "500290": "PAO FORMA ARTESANO PULLMAN INTEGRAL 500G",
  "230053": "PAO FORMA PULLMAN 12 GRAOS 450G",
  "230045": "PAO FORMA PULLMAN ZERO 12GRAOS 350G",
  "8802": "PAO FORMA PULLMAN INTEGRAL ZERO 350G",
  "28541": "PAO FORMA NUTRELLA FRUTAS GRAOS 500G",
  "20109": "PAO FORMA GRAOS CAST NUTRELLA 450G",
  "20108": "PAO FORMA NUTRELLA 14GRAOS 450G",
  "28540": "PAO FORMA NATURAL NUTRELLA NATURAL 450G",
  "503655": "PAO FORMA NUTRELLA AVEIA 305G",
  "503129": "PAO FORMA NUTRELLA CRANBERRY 350G",
  "503128": "PAO FORMA NUTRELLA ABOBORA 350G",
  "503130": "PAO FORMA NUTRELLA CAST QUINOA",
  "502644": "PAO HAMBURGUER BRIOCHE PULLMAN",
  "502642": "PAO HAMBURGUER C GERGELIM PULL 420G",
  "505880": "PAO HAMBURGUER ARTESANO AUSTRALIANO 420G",
  "505878": "PAO HAMBURGUER ARTESANO ORIGINAL 420G",
  "29381": "RAP 10 FIT 297G",
  "29382": "RAP 10 INTEGRAL 297G",
  "502802": "RAP 10 TAPIOCA 198G",
  "29380": "RAP 10 TRADICIONAL 297G",
  "20730": "SALG CROCANTISSIMO 40G QUEIJO/CEBOLA",
  "47067": "SALG CROCANTISSIMO 40G CHURRASSCO",
  "22567": "SALG CROCANTISSIMO 40G PEITO PERU/REQ",
  "39771": "SALG CROCANTISSIMO 40G SALEME LIMAO",
  "506381": "SALG.TAKIS XPLOSION 49G",
  "506382": "SALG.TAKIS ORIGINAL 49G",
  "506383": "SALG.TAKIS FUEGO 49G",
  "964775": "SALG.TAKIS INTENSE NACHO 49G",
  "2893": "FARINHA ROSCA PULLMAN 500G"
};

var lojas = {
  "180056": "548-MIX MATEUS MAGUARI",
  "180050": "531-MIX MATEUS MARITUBA",
  "146611": "37-MATEUS MIX BELEM",
  "180296": "46-MATEUS SUPER MAGUARI",
  "178299": "45-MATEUS SUPER MARAMBAIA",
  "180303": "263-MATEUS MIX MARIO COVAS",
  "178301": "276-MATEUS MIX BENGUI",
  "160141": "36-MATEUS SUPER ANANINDEUA",
  "178300": "253-MATEUS MIX PEDREIRA",
  "180302": "257-MATEUS MIX COQUEIRO",
  "180297": "49-MATEUS MIX CASTANHAL",
  "146610": "35-MATEUS SUPER CASTANHAL",
  "180298": "50-MATEUS ABAETETUBA",
  "180301": "256-MATEUS MIX CAPANEMA",
  "180305": "268-MATEUS MIX PARAGOMINAS",
  "180304": "267-MATEUS MIX BRAGANCA",
  "180300": "204-MATEUS BARCARENA",
  "180306": "464-POSTERUS CAMINO TOME AÇU",
  "180307": "463-POSTERUS SAO MIGUEL GUAMA",
  "183646": "MATEUS DOCA",
  "124291": "FORMOSA DUQUE",
  "143013": "FORMOSA UMARIZAL",
  "180291": "FORMOSA GUAMA",
  "129404": "FORMOSA AUGUSTO",
  "129405": "FORMOSA CIDADE NOVA",
  "180340": "215-ATACADAO PORTAL",
  "180341": "230-ATACADAO CASTANHAL",
  "180339": "153-ATACADAO ICOARACI",
  "180344": "326-ATACADAO ABAETETUBA",
  "180342": "238-ATACADAO CASTANHEIRA",
  "152269": "138-ATACADAO BR CENTRO",
  "180343": "276-ATACADAO COQUEIRO",
  "180361": "252-ASSAI ALMIRANTE BARROSO",
  "180360": "235-ASSAI BATISTA CAMPOS",
  "160149": "135-ASSAI BR CENTRO",
  "180358": "169-ASSAI CASTANHAL",
  "180352": "118-ASSAI MARIO COVAS",
  "180362": "322-ASSAI AUGUSTO MONTENEGRO"
};

/* =========================
   DROPDOWN
========================= */

var dropdownAtivo = null;
var inputDropdownAtivo = null;

function fecharTodosDropdowns() {
  var abertos = document.querySelectorAll(".dropdown-lista");
  for (var i = 0; i < abertos.length; i++) abertos[i].remove();
  dropdownAtivo = null;
  inputDropdownAtivo = null;
}

document.addEventListener("touchstart", function(e) {
  if (dropdownAtivo && !dropdownAtivo.contains(e.target) && e.target !== inputDropdownAtivo) {
    fecharTodosDropdowns();
  }
}, { passive: true });

document.addEventListener("mousedown", function(e) {
  if (dropdownAtivo && !dropdownAtivo.contains(e.target) && e.target !== inputDropdownAtivo) {
    fecharTodosDropdowns();
  }
});

function posicionarDropdown(lista, input) {
  var rect = input.getBoundingClientRect();
  var spaceBelow = window.innerHeight - rect.bottom;
  var spaceAbove = rect.top;
  var maxH = 220;

  lista.style.position = "fixed";
  lista.style.left = rect.left + "px";
  lista.style.width = Math.max(rect.width, 280) + "px";
  lista.style.zIndex = "99999";

  if (spaceBelow < maxH && spaceAbove > spaceBelow) {
    lista.style.bottom = (window.innerHeight - rect.top) + "px";
    lista.style.top = "auto";
    lista.style.maxHeight = Math.min(spaceAbove - 8, maxH) + "px";
  } else {
    lista.style.top = rect.bottom + "px";
    lista.style.bottom = "auto";
    lista.style.maxHeight = Math.min(spaceBelow - 8, maxH) + "px";
  }
}

function mostrarDropdown(input, resultados, aoSelecionar) {
  fecharTodosDropdowns();
  if (resultados.length === 0) return;

  var lista = document.createElement("div");
  lista.className = "dropdown-lista";

  for (var i = 0; i < resultados.length; i++) {
    (function(item) {
      var div = document.createElement("div");
      div.className = "dropdown-item";
      div.textContent = item.codigo + " — " + item.nome;

      // CONTROLE DE TOQUE PARA EVITAR SELEÇÃO ACIDENTAL NO SCROLL
      var touchMoved = false;
      var touchStarted = false;

      div.addEventListener("touchstart", function(e) {
        touchMoved = false;
        touchStarted = true;
        // Guarda a posição inicial para detectar scroll
        var touch = e.touches[0];
        div._startX = touch.clientX;
        div._startY = touch.clientY;
      }, { passive: true });

      div.addEventListener("touchmove", function(e) {
        if (!touchStarted) return;
        var touch = e.touches[0];
        var dx = Math.abs(touch.clientX - div._startX);
        var dy = Math.abs(touch.clientY - div._startY);
        // Se moveu mais de 10px, é scroll, não clique
        if (dx > 10 || dy > 10) {
          touchMoved = true;
        }
      }, { passive: true });

      div.addEventListener("touchend", function(e) {
        if (!touchStarted) return;
        touchStarted = false;
        // SÓ SELECIONA SE NÃO HOUVE SCROLL (movimento menor que 10px)
        if (!touchMoved) {
          e.preventDefault();
          aoSelecionar(item);
          fecharTodosDropdowns();
        }
      }, { passive: false });

      // PARA MOUSE (Desktop)
      div.addEventListener("mousedown", function(e) {
        e.preventDefault();
        aoSelecionar(item);
        fecharTodosDropdowns();
      });

      lista.appendChild(div);
    })(resultados[i]);
  }

  document.body.appendChild(lista);
  posicionarDropdown(lista, input);
  dropdownAtivo = lista;
  inputDropdownAtivo = input;
}

function buscarNoDicionario(texto, dicionario) {
  var resultados = [];
  var t = texto.trim().toUpperCase();
  if (t.length < 1) return resultados;
  for (var key in dicionario) {
    if (!dicionario.hasOwnProperty(key)) continue;
    var nome = dicionario[key].toUpperCase();
    if (key.toUpperCase().indexOf(t) === 0 || nome.indexOf(t) !== -1) {
      resultados.push({ codigo: key, nome: dicionario[key] });
    }
    if (resultados.length >= 10) break;
  }
  return resultados;
}

/* =========================
   CONTROLE DE FORMULÁRIOS
========================= */

var totalFormularios = 0;

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    adicionarFormulario();
    restaurarDados();
    document.addEventListener("input", salvarDados);
    window.addEventListener("beforeunload", salvarDados);
  }, 100);
});

/* =========================
   HTML DO FORMULÁRIO
========================= */

function criarHTMLFormulario(id) {
  return '<div class="modelo" data-form-id="' + id + '">' +
    '<table class="cabecalho"><tr>' +
    '<td class="logo-td"><img src="./logo.png" class="logo" alt="Logo"></td>' +
    '<td class="titulo">CONTROLE DE RECOLHIMENTO DE MERCADORIAS</td>' +
    '</tr></table>' +
    '<table class="dados">' +
    '<tr>' +
    '<td><label>CODIGO DO CLIENTE:</label>' +
    '<input type="text" class="campo-busca campo-loja" autocomplete="off" placeholder="Digite código ou nome"></td>' +
    '<td><label>DATA DO RECOLHIMENTO:</label>' +
    '<input type="text" class="data-br" inputmode="numeric"</td>' +
    '</tr>' +
    '<tr>' +
    '<td><label>NOME DO CLIENTE:</label>' +
    '<input type="text" class="nome-loja" readonly tabindex="-1"></td>' +
    '<td><label>NOTA FISCAL DEVOLUÇÃO:</label>' +
    '<input type="text" inputmode="text"></td>' +
    '</tr>' +
    '<tr>' +
    '<td></td>' +
    '<td><label>NOTA FISCAL ORIGEM:</label>' +
    '<input type="text" inputmode="text"></td>' +
    '</tr>' +
    '</table>' +
    '<div class="table-scroll-wrapper">' +
    '<table class="produtos">' +
    '<colgroup><col><col><col><col><col><col><col><col></colgroup>' +
    '<thead>' +
    '<tr><th colspan="6">AVALIAÇÃO EXTERNA (VENDEDORA)</th><th colspan="2">AVALIAÇÃO INTERNA</th></tr>' +
    '<tr><th>COD PRODUTO</th><th>DESCRIÇÃO</th><th>QTDE</th><th>VL.PROD</th><th>TOTAL</th><th>MOTIVO</th><th>ARMAZEM</th><th>FINANCEIRO</th></tr>' +
    '</thead>' +
    '<tbody class="tabelaProdutos">' +
    '<tr>' +
    '<td><input type="text" class="campo-busca campo-produto" autocomplete="off" placeholder="código ou nome"></td>' +
    '<td><input type="text" class="descricao-produto" readonly tabindex="-1"></td>' +
    '<td><input type="number" class="qtde" value="1" min="1"></td>' +
    '<td><input type="number" class="valor" step="0.01" inputmode="decimal"></td>' +
    '<td class="total-produto">R$ 0,00</td>' +
    '<td><select><option>M1</option><option>M2</option><option>M3</option></select></td>' +
    '<td><input type="text"></td>' +
    '<td><button class="btn-remover" onclick="removerLinha(this)">✕</button></td>' +
    '</tr>' +
    '<tr><td colspan="4"></td>' +
    '<td class="total-final valor-total">R$ 0,00</td>' +
    '<td colspan="3"></td></tr>' +
    '</tbody>' +
    '</table>' +
    '</div>' +
    '<button class="btn-add no-print" onclick="adicionarLinha(this)">+ Produto</button> ' +
    '<button class="btn-limpar no-print" onclick="limparFormulario(this)">✕ Limpar</button>' +
    (id > 1 ? ' <button class="btn-limpar no-print" onclick="removerFormulario(this)">✕ Remover</button>' : '') +
    '<div class="assinaturas">' +
    '<div class="assinatura-box">' +
    '<div class="assinatura-topo"><img src="./assinatura.png" class="assinatura-img" alt="Assinatura"></div>' +
    '<div class="linha"></div><span>VENDEDORA</span>' +
    '<div class="data-assinatura"><input type="date" class="data-vendedora"></div>' +
    '</div>' +
    '<div class="assinatura-box"><div class="assinatura-topo"></div>' +
    '<div class="linha"></div><span>MOTORISTA</span>' +
    '<div class="data-assinatura"><input type="text" placeholder="_____________"></div></div>' +
    '<div class="assinatura-box"><div class="assinatura-topo"></div>' +
    '<div class="linha"></div><span>CONFERENTE ARMAZEM</span>' +
    '<div class="data-assinatura"><input type="text" placeholder="_____________"></div></div>' +
    '<div class="assinatura-box"><div class="assinatura-topo"></div>' +
    '<div class="linha"></div><span>COORD. ARMAZEM</span>' +
    '<div class="data-assinatura"><input type="text" placeholder="_____________"></div></div>' +
    '</div>' +
    '<div class="rodape">M1 - VALIDADE | M2 - EMBALAGEM ( SEM VACUO, RASGADO, AMASSADO, VIOLADO NO ATO DA ENTREGA ) | M3 - QUALIDADE ( COLORAÇÃO, CHEIRO, MOFO )</div>' +
    '</div>';
}

/* =========================
   BUSCAS
========================= */

function registrarBuscaLoja(input) {
  input.addEventListener("input", function() {
    var texto = this.value;
    var me = this;
    var modelo = me.closest(".modelo");
    var nomeEl = modelo ? modelo.querySelector(".nome-loja") : null;

    if (lojas[texto.trim()]) {
      if (nomeEl) nomeEl.value = lojas[texto.trim()];
      fecharTodosDropdowns();
      return;
    }

    var resultados = buscarNoDicionario(texto, lojas);
    mostrarDropdown(me, resultados, function(item) {
      me.value = item.codigo;
      if (nomeEl) nomeEl.value = item.nome;
      salvarDados();
    });
  });

  input.addEventListener("focus", function() {
    if (this.value.length >= 1) this.dispatchEvent(new Event("input"));
  });
}

function registrarBuscaProduto(input) {
  input.addEventListener("input", function() {
    var texto = this.value;
    var me = this;
    var linha = me.closest("tr");
    var descEl = linha ? linha.querySelector(".descricao-produto") : null;

    if (produtos[texto.trim()]) {
      if (descEl) descEl.value = produtos[texto.trim()];
      fecharTodosDropdowns();
      calcularTudo();
      return;
    }

    var resultados = buscarNoDicionario(texto, produtos);
    mostrarDropdown(me, resultados, function(item) {
      me.value = item.codigo;
      if (descEl) descEl.value = item.nome;
      calcularTudo();
      salvarDados();
    });
  });

  input.addEventListener("focus", function() {
    if (this.value.length >= 1) this.dispatchEvent(new Event("input"));
  });
}

/* =========================
   FORMULÁRIOS
========================= */

function adicionarFormulario() {
  totalFormularios++;
  var div = document.createElement("div");
  div.innerHTML = criarHTMLFormulario(totalFormularios);
  var modelo = div.firstChild;
  document.getElementById("areaPDF").appendChild(modelo);
  iniciarEventosModelo(modelo);
  calcularTudo();
}

function removerFormulario(botao) {
  if (!confirm("Remover este formulário?")) return;
  botao.closest(".modelo").remove();
  salvarDados();
}

function iniciarEventosModelo(modelo) {
  modelo.querySelectorAll(".campo-loja").forEach(registrarBuscaLoja);
  modelo.querySelectorAll(".campo-produto").forEach(registrarBuscaProduto);

  modelo.querySelectorAll(".qtde, .valor").forEach(function(el) {
    el.addEventListener("input", function() { calcularTudo(); salvarDados(); });
  });

  modelo.querySelectorAll(".data-br").forEach(function(el) {
    el.addEventListener("input", function() { formatarDataBR(this); salvarDados(); });
  });

  modelo.querySelectorAll(".data-vendedora").forEach(function(el) {
    el.type = "date";
    el.addEventListener("change", salvarDados);
  });
}

/* =========================
   CALCULAR
========================= */

function calcularTudo() {
  document.querySelectorAll(".modelo").forEach(function(modelo) {
    var totalGeral = 0;
    modelo.querySelectorAll("tbody tr:not(:last-child)").forEach(function(linha) {
      var qtde = linha.querySelector(".qtde");
      var valor = linha.querySelector(".valor");
      var total = linha.querySelector(".total-produto");
      if (qtde && valor && total) {
        var r = (parseFloat(qtde.value) || 0) * (parseFloat(valor.value) || 0);
        total.textContent = "R$ " + r.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        totalGeral += r;
      }
    });
    var tf = modelo.querySelector(".valor-total");
    if (tf) tf.textContent = "R$ " + totalGeral.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  });
}

/* =========================
   ADICIONAR / REMOVER LINHA
========================= */

function adicionarLinha(botao) {
  var modelo = botao.closest(".modelo");
  var tabela = modelo.querySelector(".tabelaProdutos");
  if (!tabela) return;

  var linha = document.createElement("tr");
  linha.innerHTML =
    '<td><input type="text" class="campo-busca campo-produto" autocomplete="off" placeholder="código ou nome"></td>' +
    '<td><input type="text" class="descricao-produto" readonly tabindex="-1"></td>' +
    '<td><input type="number" class="qtde" value="1" min="1"></td>' +
    '<td><input type="number" class="valor" step="0.01" inputmode="decimal"></td>' +
    '<td class="total-produto">R$ 0,00</td>' +
    '<td><select><option>M1</option><option>M2</option><option>M3</option></select></td>' +
    '<td><input type="text"></td>' +
    '<td><button class="btn-remover" onclick="removerLinha(this)">✕</button></td>';

  tabela.insertBefore(linha, tabela.querySelector("tr:last-child"));

  registrarBuscaProduto(linha.querySelector(".campo-produto"));
  linha.querySelector(".qtde").addEventListener("input", function() { calcularTudo(); salvarDados(); });
  linha.querySelector(".valor").addEventListener("input", function() { calcularTudo(); salvarDados(); });

  calcularTudo();
  linha.querySelector(".campo-produto").focus();
}

function removerLinha(botao) {
  var linha = botao.closest("tr");
  var tabela = linha.closest(".tabelaProdutos");
  if (tabela.querySelectorAll("tbody tr:not(:last-child)").length <= 1) {
    alert("Mantenha pelo menos um produto!");
    return;
  }
  if (confirm("Remover este produto?")) {
    linha.remove();
    calcularTudo();
    salvarDados();
  }
}

function limparFormulario(botao) {
  if (!confirm("Limpar todos os dados deste formulário?")) return;
  var modelo = botao.closest(".modelo");
  modelo.querySelectorAll(".dados input").forEach(function(el) { el.value = ""; });

  var tabela = modelo.querySelector(".tabelaProdutos");
  var linhas = tabela.querySelectorAll("tbody tr:not(:last-child)");
  for (var j = linhas.length - 1; j > 0; j--) linhas[j].remove();

  var primeira = tabela.querySelector("tbody tr:not(:last-child)");
  if (primeira) {
    primeira.querySelectorAll("input").forEach(function(el) {
      el.value = el.classList.contains("qtde") ? 1 : "";
    });
    var sel = primeira.querySelector("select");
    if (sel) sel.value = "M1";
  }

  modelo.querySelectorAll(".assinatura-box input").forEach(function(el) { el.value = ""; });
  calcularTudo();
  salvarDados();
}

function formatarDataBR(input) {
  var v = input.value.replace(/\D/g, "").slice(0, 8);
  if (v.length > 4) v = v.slice(0, 2) + "-" + v.slice(2, 4) + "-" + v.slice(4);
  else if (v.length > 2) v = v.slice(0, 2) + "-" + v.slice(2);
  input.value = v;
}

/* =========================
   SALVAR / RESTAURAR
========================= */

function salvarDados() {
  try {
    var dados = [];
    document.querySelectorAll(".modelo").forEach(function(modelo) {
      var obj = { formId: modelo.getAttribute("data-form-id"), produtos: [] };
      var inputs = modelo.querySelectorAll(".dados input");
      var labels = modelo.querySelectorAll(".dados label");
      inputs.forEach(function(inp, j) {
        if (labels[j]) obj[labels[j].textContent.replace(":", "").trim()] = inp.value;
      });
      var dv = modelo.querySelector(".data-vendedora");
      if (dv) obj.data_vendedora = dv.value;

      modelo.querySelectorAll("tbody tr:not(:last-child)").forEach(function(linha) {
        var cod = linha.querySelector(".campo-produto");
        if (cod && cod.value) {
          obj.produtos.push({
            codigo: cod.value,
            descricao: (linha.querySelector(".descricao-produto") || {}).value || "",
            qtde: (linha.querySelector(".qtde") || {}).value || 1,
            valor: (linha.querySelector(".valor") || {}).value || "",
            motivo: (linha.querySelector("select") || {}).value || "M1",
            armazem: (linha.querySelector("td:nth-child(7) input") || {}).value || ""
          });
        }
      });
      dados.push(obj);
    });
    localStorage.setItem("controle_recolhimento", JSON.stringify(dados));
  } catch(e) { console.log("Erro salvar:", e); }
}

function restaurarDados() {
  try {
    var salvo = localStorage.getItem("controle_recolhimento");
    if (!salvo) return;
    var dados = JSON.parse(salvo);
    if (!dados || !dados.length) return;

    var areaPDF = document.getElementById("areaPDF");
    areaPDF.innerHTML = "";
    totalFormularios = 0;

    dados.forEach(function(obj) {
      totalFormularios++;
      var div = document.createElement("div");
      div.innerHTML = criarHTMLFormulario(totalFormularios);
      var modelo = div.firstChild;
      areaPDF.appendChild(modelo);
      iniciarEventosModelo(modelo);

      var inputs = modelo.querySelectorAll(".dados input");
      var labels = modelo.querySelectorAll(".dados label");
      inputs.forEach(function(inp, j) {
        if (labels[j]) {
          var chave = labels[j].textContent.replace(":", "").trim();
          if (obj[chave] !== undefined) inp.value = obj[chave];
        }
      });

      var dv = modelo.querySelector(".data-vendedora");
      if (dv && obj.data_vendedora) dv.value = obj.data_vendedora;

      if (obj.produtos && obj.produtos.length) {
        var tabela = modelo.querySelector(".tabelaProdutos");
        tabela.querySelectorAll("tr:not(:last-child)").forEach(function(l) { l.remove(); });
        obj.produtos.forEach(function(prod) {
          var botao = modelo.querySelector(".btn-add");
          if (!botao) return;
          adicionarLinha(botao);
          var linhasProduto = tabela.querySelectorAll("tr:not(:last-child)");
          var nova = linhasProduto[linhasProduto.length - 1];
          if (nova) {
            var cp = nova.querySelector(".campo-produto");
            if (cp) cp.value = prod.codigo || "";
            var dp = nova.querySelector(".descricao-produto");
            if (dp) dp.value = prod.descricao || "";
            var qp = nova.querySelector(".qtde");
            if (qp) qp.value = prod.qtde || 1;
            var vp = nova.querySelector(".valor");
            if (vp) vp.value = prod.valor || "";
            var mp = nova.querySelector("select");
            if (mp) mp.value = prod.motivo || "M1";
            var ap = nova.querySelector("td:nth-child(7) input");
            if (ap) ap.value = prod.armazem || "";
          }
        });
      }
    });
    calcularTudo();
  } catch(e) { console.log("Erro restaurar:", e); }
}

/* =========================
   NOME DO PDF: Rec. - código - loja - dd-mm
========================= */

function nomePDF() {
  var modelo = document.querySelector(".modelo");
  if (!modelo) return "Rec.-" + obterDataAtual();

  var codigoEl = modelo.querySelector(".campo-loja");
  var nomeEl = modelo.querySelector(".nome-loja");
  var dataEl = modelo.querySelector(".data-vendedora");  // DATA DA ASSINATURA DA VENDEDORA

  var codigo = codigoEl && codigoEl.value ? codigoEl.value.trim() : "";
  var nome = nomeEl && nomeEl.value ? nomeEl.value.trim() : "";
  var data = dataEl && dataEl.value ? dataEl.value.trim() : obterDataAtual();

  // Formata a data (YYYY-MM-DD para DD-MM)
  var partes = data.split("-");
  var dataFormatada = partes.length >= 2 ? partes[2] + "-" + partes[1] : data;

  // Limpa caracteres inválidos para nome de arquivo
  var nomeBase = "Rec.";
  if (codigo) nomeBase += " - " + codigo.replace(/[\/\\:*?"<>|]/g, "");
  if (nome) nomeBase += " - " + nome.replace(/[\/\\:*?"<>|]/g, "").substring(0, 30);
  if (dataFormatada) nomeBase += " - " + dataFormatada;

  return nomeBase;
}

/* =========================
   GERAR PDF - CORRIGIDO
========================= */

function gerarPDF() {
  var elemento = document.getElementById("areaPDF");
  if (!elemento) { alert("Área do PDF não encontrada!"); return; }

  var modelos = elemento.querySelectorAll(".modelo");
  if (modelos.length === 0) {
    alert("Nenhum formulário para gerar PDF!");
    return;
  }

  fecharTodosDropdowns();

  var btnPDF = document.querySelector(".btn-pdf");
  var textoOriginal = btnPDF ? btnPDF.textContent : "GERAR PDF";
  if (btnPDF) { btnPDF.textContent = "⏳ GERANDO..."; btnPDF.disabled = true; }

  // Clona o elemento
  var clone = elemento.cloneNode(true);
  
  // Remove botões
  clone.querySelectorAll("button").forEach(function(b) { b.remove(); });
  clone.querySelectorAll(".dropdown-lista").forEach(function(d) { d.remove(); });

  // Formata data da vendedora
  clone.querySelectorAll(".data-vendedora").forEach(function(el) {
    if (el.value) {
      var p = el.value.split("-");
      var span = document.createElement("span");
      span.textContent = (p[2] || "") + "/" + (p[1] || "") + "/" + (p[0] || "");
      span.style.cssText = "font-size:8px;text-align:center;display:inline-block;width:80px;border-bottom:1px solid #000;padding:2px 0;";
      el.parentNode.replaceChild(span, el);
    }
  });

  // Prepara o container
  var tempDiv = document.createElement("div");
  tempDiv.style.cssText = "position:fixed;left:-9999px;top:0;width:794px;background:#fff;overflow:visible;z-index:99999;";
  tempDiv.appendChild(clone);
  document.body.appendChild(tempDiv);

  // Estiliza o clone para o PDF
  clone.style.cssText = "width:100% !important; max-width:794px !important; margin:0 auto; padding:10px; background:#fff; box-sizing:border-box;";
  
  clone.querySelectorAll(".modelo").forEach(function(m) {
    m.style.cssText = "width:100% !important; max-width:175mm !important; margin:0 auto 10px auto; background:#fff; border:1px solid #000; padding:10px; overflow:hidden; page-break-inside:avoid;";
  });

  // Configuração do PDF
  var opcoes = {
    margin: [5, 5, 5, 5],
    filename: nomePDF() + ".pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      width: 794,
      height: clone.scrollHeight,
      logging: true,
      allowTaint: true
    },
    jsPDF: { 
      unit: "mm", 
      format: "a4", 
      orientation: "portrait"
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] }
  };

  html2pdf()
    .set(opcoes)
    .from(clone)
    .save()
    .then(function() {
      document.body.removeChild(tempDiv);
      if (btnPDF) {
        btnPDF.textContent = "✅ PRONTO!";
        setTimeout(function() { 
          btnPDF.textContent = textoOriginal; 
          btnPDF.disabled = false; 
        }, 2000);
      }
    })
    .catch(function(err) {
      console.error("Erro ao gerar PDF:", err);
      document.body.removeChild(tempDiv);
      alert("Erro ao gerar PDF: " + err.message);
      if (btnPDF) { 
        btnPDF.textContent = textoOriginal; 
        btnPDF.disabled = false; 
      }
    });
}

function obterDataAtual() {
  var d = new Date();
  return String(d.getDate()).padStart(2,"0") + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + d.getFullYear();
}

/* GLOBAIS */
window.calcularTudo = calcularTudo;
window.adicionarLinha = adicionarLinha;
window.removerLinha = removerLinha;
window.limparFormulario = limparFormulario;
window.removerFormulario = removerFormulario;
window.adicionarFormulario = adicionarFormulario;
window.gerarPDF = gerarPDF;
window.formatarDataBR = formatarDataBR;
