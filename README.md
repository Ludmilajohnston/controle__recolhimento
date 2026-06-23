# 📋 Controle de Recolhimento de Mercadorias

Sistema PWA para controle de recolhimento de mercadorias com geração de PDF, desenvolvido para funcionar como um aplicativo nativo no celular.

---

## 📱 Sobre o Sistema

Sistema completo para gerenciar o recolhimento de mercadorias, com:

- Cadastro de produtos e lojas
- Busca inteligente por código ou nome
- Cálculo automático de totais
- Geração de PDF profissional
- Funcionamento offline
- Interface responsiva para mobile

---

## 🚀 Funcionalidades

### ✅ Busca Inteligente
- **Produtos:** Digite o código ou nome do produto
- **Lojas:** Digite o código ou nome da loja
- **Auto completar:** Sugestões enquanto digita
- Funciona no Safari e Chrome

### ✅ Cálculos Automáticos
- Multiplica quantidade × valor unitário
- Atualiza total de cada produto
- Soma total geral do formulário

### ✅ Gerenciamento de Produtos
- Adicionar novas linhas de produtos
- Remover produtos individuais
- Limpar todo o formulário

### ✅ Datas com Calendário
- Data da vendedora: calendário nativo
- Data de Recolhimento, Motorista, Conferente e Coord.: campo de texto

### ✅ PDF Profissional
- Layout igual ao formulário
- Sem botões no PDF
- Data da vendedora formatada (DD/MM/AAAA)
- Nome do arquivo com data atual

### ✅ Salvamento Automático
- Dados salvos no localStorage
- Recupera dados ao recarregar
- Não perde informações ao sair da página

### ✅ Múltiplos Formulários
- Começa com 1 formulário
- Botão para adicionar mais formulários
- Botão para remover formulários extras

### ✅ PWA (App)
- Instalável na tela inicial
- Funciona offline
- Tela cheia (sem navegador)
- Ícone personalizado

---

## 📂 Estrutura do Projeto

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

## 🛠️ Tecnologias Utilizadas

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

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/Ludmilajohnston/controle_recolhimento.git
```
