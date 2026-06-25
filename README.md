# Controle de Recolhimento de Mercadorias
[![Status](https://img.shields.io/badge/status-finalizado-success)](https://github.com/Ludmilajohnston/controle_recolhimento)
[![PWA](https://img.shields.io/badge/PWA-ativado-5A0FC8)](https://developer.mozilla.org/pt-BR/docs/Web/Progressive_web_apps)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![html2pdf](https://img.shields.io/badge/html2pdf.js-0.10.1-red)](https://github.com/eKoopmans/html2pdf.js)
[![Service Worker](https://img.shields.io/badge/Service_Worker-ativado-blue)](https://developer.mozilla.org/pt-BR/docs/Web/API/Service_Worker_API)
[![localStorage](https://img.shields.io/badge/localStorage-ativado-yellowgreen)](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
[![GitHub](https://img.shields.io/badge/GitHub-100000?logo=github&logoColor=white)](https://github.com/Ludmilajohnston)

Sistema PWA para controle de recolhimento de mercadorias com geração de PDF, desenvolvido para funcionar como um aplicativo nativo no celular.

---

## Sobre o Sistema

Sistema completo para gerenciar o recolhimento de mercadorias, com:

- Cadastro de produtos e lojas
- Busca inteligente por código ou nome
- Cálculo automático de totais
- Geração de PDF profissional
- Funcionamento offline
- Interface responsiva para mobile

---

## Funcionalidades

### Busca Inteligente
- **Produtos:** Digite o código ou nome do produto
- **Lojas:** Digite o código ou nome da loja
- **Auto completar:** Sugestões enquanto digita
- Funciona no Safari e Chrome

### Cálculos Automáticos
- Multiplica quantidade × valor unitário
- Atualiza total de cada produto
- Soma total geral do formulário

### Gerenciamento de Produtos
- Adicionar novas linhas de produtos
- Remover produtos individuais
- Limpar todo o formulário

### Datas
- **Data do Recolhimento:** Campo para preencher manualmente
- **Data da Vendedora:** Calendário nativo
- **Motorista:** Campo de texto
- **Conferente:** Campo de texto
- **Coord. Armazém:** Campo de texto

### PDF Profissional
- Layout igual ao formulário
- Sem botões no PDF
- Data da vendedora formatada (DD/MM/AAAA)
- Nome do arquivo: `Rec. - código - loja - dd-mm.pdf`

### Salvamento Automático
- Dados salvos no localStorage
- Recupera dados ao recarregar
- Não perde informações ao sair da página

### Múltiplos Formulários
- Começa com 1 formulário
- Botão para adicionar mais formulários
- Botão para remover formulários extras

### PWA (App)
- Instalável na tela inicial
- Funciona offline
- Tela cheia (sem navegador)
- Ícone personalizado

---

## Estrutura do Projeto

```
controle-recolhimento/
│
├── index.html        # Página principal
├── style.css         # Estilos do sistema
├── script.js         # Todas as funções
├── manifest.json     # Configuração PWA
├── sw.js             # Service Worker (offline)
├── logo.png          # Logo da empresa
├── assinatura.png    # Assinatura da vendedora
│
└── icons/
    ├── icon-192.jpg  # Ícone 192x192
    └── icon-512.jpg  # Ícone 512x512
```

---

## Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura do sistema |
| **CSS3** | Estilização responsiva |
| **JavaScript** | Lógica e funcionalidades |
| **html2pdf.js** | Geração de PDF |
| **PWA** | Progressive Web App |
| **Service Worker** | Funcionamento offline |
| **localStorage** | Salvamento de dados |

---


# Copyright
© 2026 Ludmila Johnston. 

Todos os direitos reservados.

Este software é de propriedade exclusiva de Ludmila Johnston.
Não é permitido copiar, modificar, distribuir ou usar este software sem autorização prévia por escrito do proprietário.
