const STORAGE_KEY = "simple-notes-canvas-v3";
const LEGACY_STORAGE_KEYS = ["simple-notes-canvas-v1", "simple-notes-canvas-v2"];
const THEME_STORAGE_KEY = "simple-notes-theme";
const GRID_STORAGE_KEY = "simple-notes-grid";
const LANGUAGE_STORAGE_KEY = "simple-notes-language";
const EXPORT_FORMAT = "simple-notes-canvas-json";
const EXPORT_VERSION = 1;
const TABLE_BLOCK_MIN_WIDTH = 360;
const TEXT_BLOCK_DEFAULT_WIDTH = 420;
const TEXT_BLOCK_DEFAULT_HEIGHT = 260;
const TABLE_BLOCK_HORIZONTAL_CHROME = 24;
const TABLE_BLOCK_VERTICAL_CHROME = 126;
const TABLE_MIN_COLUMN_WIDTH = 96;
const TABLE_MIN_ROW_HEIGHT = 42;
const UNCATEGORIZED_CATEGORY_KEY = "__uncategorized";
const CATEGORY_COLOR_KEYS = ["default", "peach", "sage", "sky", "rose", "gold", "lavender", "mint", "sand"];
const translations = {
  pt: {
    appTitle: "my note",
    collapsePanel: "Compactar painel",
    collapse: "Compactar",
    expandPanel: "Expandir painel",
    expand: "Expandir",
    newNotebook: "Novo caderno",
    text: "Texto",
    table: "Tabela",
    center: "Centralizar",
    darkMode: "Modo escuro",
    lightMode: "Modo claro",
    enableDarkMode: "Ativar modo escuro",
    enableLightMode: "Ativar modo claro",
    settings: "Configura\u00e7\u00f5es",
    showGrid: "Mostrar grade",
    language: "Idioma",
    exportJson: "Exportar JSON",
    importJson: "Importar JSON",
    zoomIn: "Aproximar",
    zoomOut: "Afastar",
    noteTitle: "T\u00edtulo da nota",
    uncategorized: "Sem categoria",
    noteActions: "A\u00e7\u00f5es da nota",
    category: "Categoria",
    copy: "Copiar",
    pasteCopy: "Colar c\u00f3pia",
    color: "Cor",
    defaultColor: "Cor padr\u00e3o",
    peachColor: "Cor p\u00eassego",
    sageColor: "Cor verde",
    skyColor: "Cor azul",
    roseColor: "Cor rosa",
    delete: "Deletar",
    textFormatting: "Formata\u00e7\u00e3o do texto",
    bold: "Negrito",
    italic: "It\u00e1lico",
    underline: "Sublinhado",
    strikethrough: "Tachado",
    list: "Lista",
    orderedList: "Lista numerada",
    heading: "T\u00edtulo",
    quote: "Cita\u00e7\u00e3o",
    clearFormatting: "Limpar formata\u00e7\u00e3o",
    writeHere: "Escreva aqui...",
    resizeBlock: "Redimensionar bloco",
    resizeColumn: "Redimensionar coluna",
    resizeRow: "Redimensionar linha",
    insertRow: "Inserir linha",
    insertColumn: "Inserir coluna",
    rowPlus: "Linha +",
    rowMinus: "Linha -",
    columnPlus: "Coluna +",
    columnMinus: "Coluna -",
    header: "Cabe\u00e7alho",
    clearTable: "Limpar tabela",
    page: "p\u00e1gina",
    pages: "p\u00e1ginas",
    note: "nota",
    notes: "notas",
    task: "Tarefa",
    status: "Status",
    dueDate: "Prazo",
    example: "Exemplo",
    inProgress: "Em andamento",
    today: "Hoje",
    otherItem: "Outro item",
    done: "Feito",
    tomorrow: "Amanh\u00e3",
    personal: "Pessoal",
    samplePage: "P\u00e1gina",
    sampleText: "Esse \u00e9 um bloco de texto. Voc\u00ea pode mover, editar e criar v\u00e1rios em cada p\u00e1gina.",
    cancel: "Cancelar",
    save: "Salvar",
    create: "Criar",
    deleteConfirm: "Apagar",
    ok: "Ok",
    importNotebooksTitle: "Importar cadernos?",
    importNotebooksMessage: "Isso vai substituir os cadernos atuais.",
    import: "Importar",
    imported: "Importado",
    importedSuccess: "Cadernos importados com sucesso.",
    importError: "Erro ao importar",
    importFallbackError: "N\u00e3o foi poss\u00edvel importar este arquivo JSON.",
    invalidJson: "O arquivo selecionado n\u00e3o cont\u00e9m JSON v\u00e1lido.",
    notebookDataRequired: "O arquivo JSON precisa conter dados de cadernos.",
    invalidNotebookExport: "O arquivo n\u00e3o parece ser uma exporta\u00e7\u00e3o v\u00e1lida de cadernos.",
    collapseNotebook: "Recolher caderno",
    expandNotebook: "Expandir caderno",
    actionsOf: "A\u00e7\u00f5es de",
    actions: "A\u00e7\u00f5es",
    icon: "\u00cdcone",
    rename: "Renomear",
    collapsePage: "Recolher p\u00e1gina",
    expandPage: "Expandir p\u00e1gina",
    doubleClickRename: "Duplo clique para renomear",
    newPage: "Nova p\u00e1gina",
    newPageDefault: "P\u00e1gina",
    newNotebookDefault: "Caderno",
    notebookIcon: "\u00cdcone do caderno",
    notebookRequiredTitle: "Caderno obrigat\u00f3rio",
    notebookRequiredMessage: "Voc\u00ea precisa manter pelo menos um caderno.",
    deleteNotebookTitle: "Apagar caderno?",
    deleteNotebookMessage: (name) => `Isso vai apagar "${name}" e todas as p\u00e1ginas dele.`,
    pageRequiredTitle: "P\u00e1gina obrigat\u00f3ria",
    pageRequiredMessage: "Voc\u00ea precisa manter pelo menos uma p\u00e1gina no caderno.",
    deletePageTitle: "Apagar p\u00e1gina?",
    deletePageMessage: (title) => `A p\u00e1gina "${title}" e as notas dela ser\u00e3o apagadas.`,
    deleteNoteTitle: "Apagar nota?",
    deleteNoteMessage: (title) => `A nota "${title}" ser\u00e1 apagada.`,
    emptyCanvasTitle: "Nada por aqui ainda",
    emptyCanvasMessage: "Crie um bloco de texto ou tabela e arraste pelo canvas.",
    chooseCategory: "Escolher categoria",
    chooseCategoryColor: "Escolher cor da categoria",
    noCategory: "Nenhuma categoria",
    showFormatting: "Mostrar formatação",
    hideFormatting: "Ocultar formatação",
    goldColor: "Cor dourada",
    lavenderColor: "Cor lavanda",
    mintColor: "Cor menta",
    sandColor: "Cor areia",
    enableHeader: "Ativar cabe\u00e7alho",
    hideHeader: "Ocultar cabe\u00e7alho",
    newNote: "Nova nota",
    newTable: "Nova tabela",
    noteDefault: "Nota"
  },
  en: {
    appTitle: "my note",
    collapsePanel: "Collapse panel",
    collapse: "Collapse",
    expandPanel: "Expand panel",
    expand: "Expand",
    newNotebook: "New notebook",
    text: "Text",
    table: "Table",
    center: "Center",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    enableDarkMode: "Enable dark mode",
    enableLightMode: "Enable light mode",
    settings: "Settings",
    showGrid: "Show grid",
    language: "Language",
    exportJson: "Export JSON",
    importJson: "Import JSON",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    noteTitle: "Note title",
    uncategorized: "Uncategorized",
    noteActions: "Note actions",
    category: "Category",
    copy: "Copy",
    pasteCopy: "Paste copy",
    color: "Color",
    defaultColor: "Default color",
    peachColor: "Peach color",
    sageColor: "Green color",
    skyColor: "Blue color",
    roseColor: "Rose color",
    delete: "Delete",
    textFormatting: "Text formatting",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    strikethrough: "Strikethrough",
    list: "List",
    orderedList: "Numbered list",
    heading: "Heading",
    quote: "Quote",
    clearFormatting: "Clear formatting",
    writeHere: "Write here...",
    resizeBlock: "Resize block",
    resizeColumn: "Resize column",
    resizeRow: "Resize row",
    insertRow: "Insert row",
    insertColumn: "Insert column",
    rowPlus: "Row +",
    rowMinus: "Row -",
    columnPlus: "Column +",
    columnMinus: "Column -",
    header: "Header",
    clearTable: "Clear table",
    page: "page",
    pages: "pages",
    note: "note",
    notes: "notes",
    task: "Task",
    status: "Status",
    dueDate: "Due",
    example: "Example",
    inProgress: "In progress",
    today: "Today",
    otherItem: "Other item",
    done: "Done",
    tomorrow: "Tomorrow",
    personal: "Personal",
    samplePage: "Page",
    sampleText: "This is a text block. You can move it, edit it, and create several blocks on each page.",
    cancel: "Cancel",
    save: "Save",
    create: "Create",
    deleteConfirm: "Delete",
    ok: "Ok",
    importNotebooksTitle: "Import notebooks?",
    importNotebooksMessage: "This will replace your current notebooks.",
    import: "Import",
    imported: "Imported",
    importedSuccess: "Notebooks imported successfully.",
    importError: "Import error",
    importFallbackError: "Could not import this JSON file.",
    invalidJson: "The selected file does not contain valid JSON.",
    notebookDataRequired: "The JSON file must contain notebook data.",
    invalidNotebookExport: "The file does not look like a valid notebook export.",
    collapseNotebook: "Collapse notebook",
    expandNotebook: "Expand notebook",
    actionsOf: "Actions for",
    actions: "Actions",
    icon: "Icon",
    rename: "Rename",
    collapsePage: "Collapse page",
    expandPage: "Expand page",
    doubleClickRename: "Double-click to rename",
    newPage: "New page",
    newPageDefault: "Page",
    newNotebookDefault: "Notebook",
    notebookIcon: "Notebook icon",
    notebookRequiredTitle: "Notebook required",
    notebookRequiredMessage: "You need to keep at least one notebook.",
    deleteNotebookTitle: "Delete notebook?",
    deleteNotebookMessage: (name) => `This will delete "${name}" and all of its pages.`,
    pageRequiredTitle: "Page required",
    pageRequiredMessage: "You need to keep at least one page in the notebook.",
    deletePageTitle: "Delete page?",
    deletePageMessage: (title) => `The page "${title}" and its notes will be deleted.`,
    deleteNoteTitle: "Delete note?",
    deleteNoteMessage: (title) => `The note "${title}" will be deleted.`,
    emptyCanvasTitle: "Nothing here yet",
    emptyCanvasMessage: "Create a text block or table and drag it around the canvas.",
    chooseCategory: "Choose category",
    chooseCategoryColor: "Choose category color",
    noCategory: "No categories",
    showFormatting: "Show formatting",
    hideFormatting: "Hide formatting",
    goldColor: "Gold color",
    lavenderColor: "Lavender color",
    mintColor: "Mint color",
    sandColor: "Sand color",
    enableHeader: "Show header",
    hideHeader: "Hide header",
    newNote: "New note",
    newTable: "New table",
    noteDefault: "Note"
  }
};
let currentLanguage = loadLanguagePreference();
const t = (key, ...args) => {
  const value = translations[currentLanguage]?.[key] ?? translations.pt[key] ?? key;
  return typeof value === "function" ? value(...args) : value;
};
function createInitialTextBlock({ title, category, x, y, content }) {
  return {
    id: crypto.randomUUID(),
    type: "text",
    title,
    category,
    x,
    y,
    width: TEXT_BLOCK_DEFAULT_WIDTH,
    height: TEXT_BLOCK_DEFAULT_HEIGHT,
    content,
    contentHtml: ""
  };
}

function createInitialTableBlock({ title, category, x, y, cells }) {
  return {
    id: crypto.randomUUID(),
    type: "table",
    title,
    category,
    x,
    y,
    width: 520,
    height: 260,
    cells,
    hasHeader: true,
    columnWidths: [170, 150, 150],
    rowHeights: cells.map(() => 48)
  };
}

const initialState = {
  notebooks: [
    {
      id: crypto.randomUUID(),
      name: "Pessoal",
      emoji: "📓",
      pages: [
        {
          id: crypto.randomUUID(),
          title: "Casa",
          blocks: [
            createInitialTextBlock({
              title: "Rotina da semana",
              category: "Planejamento",
              x: 2320,
              y: 2350,
              content: "Segunda: revisar agenda\nQuarta: mercado\nSexta: organizar a casa"
            }),
            createInitialTextBlock({
              title: "Ideias rápidas",
              category: "Ideias",
              x: 2800,
              y: 2390,
              content: "Use esta página para soltar lembretes pessoais, listas e planos pequenos."
            })
          ]
        },
        {
          id: crypto.randomUUID(),
          title: "Viagens",
          blocks: [
            createInitialTextBlock({
              title: "Próxima pausa",
              category: "Inspiração",
              x: 2450,
              y: 2450,
              content: "Escolher destino, datas possíveis e uma lista curta do que reservar primeiro."
            })
          ]
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: "Trabalho",
      emoji: "💼",
      pages: [
        {
          id: crypto.randomUUID(),
          title: "Projetos",
          blocks: [
            createInitialTextBlock({
              title: "Sprint atual",
              category: "Planejamento",
              x: 2320,
              y: 2360,
              content: "Priorizar tarefas pequenas, registrar decisões e manter os próximos passos visíveis."
            }),
            createInitialTableBlock({
              title: "Acompanhamento",
              category: "Tarefas",
              x: 2800,
              y: 2520,
              cells: [
                ["Tarefa", "Status", "Prazo"],
                ["Revisar notas", "Em andamento", "Hoje"],
                ["Enviar resumo", "Pendente", "Amanhã"]
              ]
            })
          ]
        },
        {
          id: crypto.randomUUID(),
          title: "Reuniões",
          blocks: [
            createInitialTextBlock({
              title: "Pauta base",
              category: "Reuniões",
              x: 2450,
              y: 2450,
              content: "Objetivo\nDecisões tomadas\nResponsáveis\nPróxima ação"
            })
          ]
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: "Estudos",
      emoji: "📘",
      pages: [
        {
          id: crypto.randomUUID(),
          title: "Aulas",
          blocks: [
            createInitialTextBlock({
              title: "Resumo de aula",
              category: "Resumo",
              x: 2340,
              y: 2380,
              content: "Conceito principal\nExemplo prático\nDúvidas para pesquisar depois"
            }),
            createInitialTextBlock({
              title: "Flashcards",
              category: "Revisão",
              x: 2820,
              y: 2420,
              content: "Transforme pontos importantes em perguntas curtas para revisar mais tarde."
            })
          ]
        },
        {
          id: crypto.randomUUID(),
          title: "Leituras",
          blocks: [
            createInitialTextBlock({
              title: "Fila de leitura",
              category: "Referências",
              x: 2450,
              y: 2450,
              content: "Artigos, capítulos e links úteis ficam aqui com uma nota sobre por que importam."
            })
          ]
        }
      ]
    }
  ],
  selectedNotebookId: null,
  selectedPageId: null,
  categoryColors: {
    Planejamento: "sky",
    Ideias: "gold",
    Inspiração: "lavender",
    Tarefas: "mint",
    Reuniões: "rose",
    Resumo: "sage",
    Revisão: "peach",
    Referências: "sand"
  },
  camera: {
    x: 0,
    y: 0,
    scale: 1
  }
};

const state = loadState();
const uiState = {
  expandedNotebookIds: new Set(),
  expandedPageIds: new Set(),
  hasSyncedExpandedState: false,
  openingTreeId: null,
  openNotebookMenuId: null,
  notebookMenuAnchor: null,
  openPageMenuId: null,
  pageMenuAnchor: null,
  openBlockListMenuId: null,
  blockListMenuAnchor: null,
  editingNotebookId: null,
  editingPageId: null,
  editingBlockId: null,
  editingCategoryBlockId: null,
  openCategoryMenuBlockId: null,
  openCategoryColorBlockId: null,
  openFormatToolbarBlockId: null,
  openMenuBlockId: null,
  blockMenuAnchor: null,
  canvasMenuAnchor: null,
  actionPopover: null,
  collapsedPageMenuCloseTimer: null,
  collapsedPageMenuNotebookId: null,
  isCollapsedPageHoverSuppressed: false,
  clipboardBlock: null,
  cameraAnimation: null,
  selectedItem: null,
  isSidebarCollapsed: false,
  isSettingsMenuOpen: false,
  isGridVisible: true
};
bootstrapSelection();

const elements = {
  notebookList: document.getElementById("notebookList"),
  blockLayer: document.getElementById("blockLayer"),
  canvasGrid: document.getElementById("canvasGrid"),
  canvasLocationLabel: document.getElementById("canvasLocationLabel"),
  canvasStage: document.getElementById("canvasStage"),
  canvasViewport: document.getElementById("canvasViewport"),
  zoomInButton: document.getElementById("zoomInButton"),
  zoomOutButton: document.getElementById("zoomOutButton"),
  zoomLevel: document.getElementById("zoomLevel"),
  fitViewButton: document.getElementById("fitViewButton"),
  addNotebookButton: document.getElementById("addNotebookButton"),
  addPageButton: document.getElementById("addPageButton"),
  addTextButton: document.getElementById("addTextButton"),
  addTableButton: document.getElementById("addTableButton"),
  toggleSidebarButton: document.getElementById("toggleSidebarButton"),
  themeToggleButton: document.getElementById("themeToggleButton"),
  settingsButton: document.getElementById("settingsButton"),
  settingsMenu: document.getElementById("settingsMenu"),
  darkModeSetting: document.getElementById("darkModeSetting"),
  gridSetting: document.getElementById("gridSetting"),
  languageSetting: document.getElementById("languageSetting"),
  languageSettingLabel: document.getElementById("languageSettingLabel"),
  exportDataSetting: document.getElementById("exportDataSetting"),
  importDataSetting: document.getElementById("importDataSetting"),
  importDataInput: document.getElementById("importDataInput"),
  resetZoomSetting: document.getElementById("resetZoomSetting"),
  fitViewSetting: document.getElementById("fitViewSetting"),
  sidebar: document.getElementById("sidebar"),
  textBlockTemplate: document.getElementById("textBlockTemplate"),
  tableBlockTemplate: document.getElementById("tableBlockTemplate")
};

elements.addNotebookButton.addEventListener("click", (event) => createNotebook(event));
elements.addPageButton.addEventListener("click", (event) => createPage(state.selectedNotebookId, event));
elements.notebookList.addEventListener("dblclick", handleTreeDoubleClick);
elements.addTextButton.addEventListener("click", () => createBlock("text"));
elements.addTableButton.addEventListener("click", () => createBlock("table"));
elements.zoomInButton.addEventListener("click", () => changeZoom(0.1));
elements.zoomOutButton.addEventListener("click", () => changeZoom(-0.1));
elements.fitViewButton.addEventListener("click", fitViewToBlocks);
elements.toggleSidebarButton.addEventListener("click", toggleSidebarCompact);
elements.themeToggleButton.addEventListener("click", toggleTheme);
elements.settingsButton.addEventListener("click", toggleSettingsMenu);
elements.darkModeSetting.addEventListener("change", (event) => {
  setTheme(event.target.checked ? "dark" : "light");
});
elements.gridSetting.addEventListener("change", (event) => {
  setGridVisible(event.target.checked);
});
elements.languageSetting.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});
elements.exportDataSetting.addEventListener("click", exportNotebookData);
elements.importDataSetting.addEventListener("click", () => elements.importDataInput.click());
elements.importDataInput.addEventListener("change", handleImportFile);
elements.resetZoomSetting.addEventListener("click", () => {
  state.camera.scale = 1;
  updateCamera();
  persist();
});
elements.fitViewSetting.addEventListener("click", fitViewToBlocks);
document.addEventListener("keydown", handleGlobalKeydown);
document.addEventListener("pointerdown", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const clickedNotebookMenu = event.target.closest(".notebook-actions")
    || event.target.closest(".page-actions")
    || event.target.closest(".note-actions")
    || event.target.closest(".notebook-menu");
  const clickedActionPopover = event.target.closest(".action-popover");
  const clickedCollapsedPageMenu = event.target.closest(".collapsed-page-menu");
  const clickedCategoryControl = event.target.closest(".note-category-control");
  const clickedCanvasMenu = event.target.closest(".canvas-context-menu");
  const clickedSettingsMenu = event.target.closest(".sidebar-footer");
  const clickedBlockMenu = event.target.closest(".settings-menu")
    || event.target.closest(".settings-toggle-button")
    || event.target.closest(".resize-handle");
  const shouldCloseNotebookMenu = (uiState.openNotebookMenuId || uiState.openPageMenuId || uiState.openBlockListMenuId) && !clickedNotebookMenu;
  const shouldCloseCategoryMenu = uiState.openCategoryMenuBlockId && !clickedCategoryControl;
  const shouldCloseCategoryColorMenu = uiState.openCategoryColorBlockId && !clickedCategoryControl;
  const shouldCloseCanvasMenu = uiState.canvasMenuAnchor && !clickedCanvasMenu;
  const shouldCloseSettingsMenu = uiState.isSettingsMenuOpen && !clickedSettingsMenu;
  const shouldCloseBlockMenu = uiState.openMenuBlockId && !clickedBlockMenu;

  if (!clickedCollapsedPageMenu && !event.target.closest(".notebook-row")) {
    scheduleCollapsedPageMenuClose(0);
  }

  if (!clickedActionPopover) {
    removeActionPopover();
  }

  if (shouldCloseNotebookMenu || shouldCloseCategoryMenu || shouldCloseCategoryColorMenu || shouldCloseCanvasMenu || shouldCloseSettingsMenu || shouldCloseBlockMenu) {
    uiState.openNotebookMenuId = clickedNotebookMenu ? uiState.openNotebookMenuId : null;
    uiState.notebookMenuAnchor = clickedNotebookMenu ? uiState.notebookMenuAnchor : null;
    uiState.openPageMenuId = clickedNotebookMenu ? uiState.openPageMenuId : null;
    uiState.pageMenuAnchor = clickedNotebookMenu ? uiState.pageMenuAnchor : null;
    uiState.openBlockListMenuId = clickedNotebookMenu ? uiState.openBlockListMenuId : null;
    uiState.blockListMenuAnchor = clickedNotebookMenu ? uiState.blockListMenuAnchor : null;
    uiState.openCategoryMenuBlockId = clickedCategoryControl ? uiState.openCategoryMenuBlockId : null;
    uiState.openCategoryColorBlockId = clickedCategoryControl ? uiState.openCategoryColorBlockId : null;
    uiState.canvasMenuAnchor = clickedCanvasMenu ? uiState.canvasMenuAnchor : null;
    if (shouldCloseCanvasMenu) {
      removeCanvasContextMenu();
    }
    if (shouldCloseSettingsMenu) {
      setSettingsMenuOpen(false);
    }
    uiState.openMenuBlockId = clickedBlockMenu ? uiState.openMenuBlockId : null;
    uiState.blockMenuAnchor = clickedBlockMenu ? uiState.blockMenuAnchor : null;
    renderBlocks();
    if (shouldCloseNotebookMenu) {
      uiState.isCollapsedPageHoverSuppressed = false;
      renderNotebookList();
    }
  }
}, true);

function closeOpenMenus() {
  uiState.openNotebookMenuId = null;
  uiState.notebookMenuAnchor = null;
  uiState.openPageMenuId = null;
  uiState.pageMenuAnchor = null;
  uiState.openBlockListMenuId = null;
  uiState.blockListMenuAnchor = null;
  uiState.openCategoryMenuBlockId = null;
  uiState.openCategoryColorBlockId = null;
  uiState.editingCategoryBlockId = null;
  uiState.openFormatToolbarBlockId = null;
  uiState.openMenuBlockId = null;
  uiState.blockMenuAnchor = null;
  uiState.canvasMenuAnchor = null;
  uiState.isCollapsedPageHoverSuppressed = false;
  setSettingsMenuOpen(false);
  removeCanvasContextMenu();
  removeCollapsedPageMenu();
  removeActionPopover();
}

function getActionAnchor(anchor) {
  if (anchor instanceof Event && Number.isFinite(anchor.clientX) && Number.isFinite(anchor.clientY)) {
    return {
      left: anchor.clientX,
      right: anchor.clientX,
      top: anchor.clientY,
      bottom: anchor.clientY,
      isPoint: true
    };
  }

  if (anchor instanceof Element) {
    const rect = anchor.getBoundingClientRect();
    return {
      left: rect.left,
      right: rect.right,
      top: rect.top,
      bottom: rect.bottom,
      isPoint: false
    };
  }

  const fallback = elements.sidebar?.getBoundingClientRect();
  if (fallback) {
    return {
      left: fallback.left,
      right: fallback.right,
      top: fallback.top,
      bottom: fallback.top,
      isPoint: false
    };
  }

  return { left: 16, right: 16, top: 16, bottom: 16, isPoint: true };
}

function getActionPopoverPosition(anchor, width, estimatedHeight) {
  const margin = 8;
  const gap = 8;
  const preferredLeft = anchor.isPoint ? anchor.left + gap : anchor.right + gap;
  const alternateLeft = anchor.isPoint ? anchor.left - width - gap : anchor.left - width - gap;
  const hasRightRoom = preferredLeft + width <= window.innerWidth - margin;
  const left = Math.max(margin, Math.min(window.innerWidth - width - margin, hasRightRoom ? preferredLeft : alternateLeft));
  const preferredTop = anchor.isPoint ? anchor.top + gap : anchor.bottom + gap;
  const top = Math.max(margin, Math.min(window.innerHeight - estimatedHeight - margin, preferredTop));

  return { left, top };
}

function createActionPopover(anchorInput, options) {
  removeActionPopover();

  const anchor = getActionAnchor(anchorInput);
  const width = options.width || 248;
  const estimatedHeight = options.estimatedHeight || 172;
  const position = getActionPopoverPosition(anchor, width, estimatedHeight);
  const popover = document.createElement("section");
  popover.className = `action-popover ${options.tone === "danger" ? "danger" : ""}`;
  popover.style.setProperty("--action-popover-left", `${position.left}px`);
  popover.style.setProperty("--action-popover-top", `${position.top}px`);
  popover.style.setProperty("--action-popover-width", `${width}px`);
  if (options.keepCollapsedPageMenu) {
    clearCollapsedPageMenuCloseTimer();
    popover.dataset.keepCollapsedPageMenu = "true";
    popover.addEventListener("pointerenter", clearCollapsedPageMenuCloseTimer);
    popover.addEventListener("pointerleave", () => scheduleCollapsedPageMenuClose());
  }
  popover.addEventListener("pointerdown", (event) => event.stopPropagation());
  popover.addEventListener("click", (event) => event.stopPropagation());
  document.body.appendChild(popover);
  uiState.actionPopover = popover;
  return popover;
}

function showTextPopover(anchor, options) {
  const popover = createActionPopover(anchor, {
    width: options.width || 250,
    estimatedHeight: 172,
    tone: options.tone,
    keepCollapsedPageMenu: options.keepCollapsedPageMenu
  });

  const form = document.createElement("form");
  form.className = "action-popover-form";

  const title = document.createElement("strong");
  title.className = "action-popover-title";
  title.textContent = options.title;

  const input = document.createElement("input");
  input.className = "action-popover-input";
  input.type = "text";
  input.value = options.defaultValue || "";
  input.placeholder = options.placeholder || "";

  const actions = document.createElement("div");
  actions.className = "action-popover-actions";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.className = "ghost action-popover-secondary";
  cancelButton.textContent = t("cancel");
  cancelButton.addEventListener("click", removeActionPopover);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "action-popover-primary";
  submitButton.textContent = options.confirmLabel || t("save");
  actions.append(cancelButton, submitButton);

  form.append(title, input, actions);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) {
      input.focus();
      return;
    }

    removeActionPopover();
    options.onSubmit(value);
  });
  form.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      removeActionPopover();
    }
  });

  popover.appendChild(form);
  requestAnimationFrame(() => {
    input.focus();
    input.select();
  });
}

function showConfirmPopover(anchor, options) {
  const popover = createActionPopover(anchor, {
    width: options.width || 248,
    estimatedHeight: 156,
    tone: "danger",
    keepCollapsedPageMenu: options.keepCollapsedPageMenu
  });

  const title = document.createElement("strong");
  title.className = "action-popover-title";
  title.textContent = options.title;

  const message = document.createElement("p");
  message.className = "action-popover-message";
  message.textContent = options.message;

  const actions = document.createElement("div");
  actions.className = "action-popover-actions";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.className = "ghost action-popover-secondary";
  cancelButton.textContent = t("cancel");
  cancelButton.addEventListener("click", removeActionPopover);

  const confirmButton = document.createElement("button");
  confirmButton.type = "button";
  confirmButton.className = "danger action-popover-primary";
  confirmButton.textContent = options.confirmLabel || t("deleteConfirm");
  confirmButton.addEventListener("click", () => {
    removeActionPopover();
    options.onConfirm();
  });

  actions.append(cancelButton, confirmButton);
  popover.append(title, message, actions);
  requestAnimationFrame(() => confirmButton.focus());
}

function showNoticePopover(anchor, options) {
  const popover = createActionPopover(anchor, {
    width: options.width || 248,
    estimatedHeight: 132,
    tone: options.tone,
    keepCollapsedPageMenu: options.keepCollapsedPageMenu
  });

  const title = document.createElement("strong");
  title.className = "action-popover-title";
  title.textContent = options.title;

  const message = document.createElement("p");
  message.className = "action-popover-message";
  message.textContent = options.message;

  const actions = document.createElement("div");
  actions.className = "action-popover-actions";

  const okButton = document.createElement("button");
  okButton.type = "button";
  okButton.className = "action-popover-primary";
  okButton.textContent = t("ok");
  okButton.addEventListener("click", removeActionPopover);
  actions.appendChild(okButton);

  popover.append(title, message, actions);
  requestAnimationFrame(() => okButton.focus());
}

function removeActionPopover() {
  uiState.actionPopover?.remove();
  uiState.actionPopover = null;
}

function selectItem(type, id) {
  uiState.selectedItem = { type, id };
  updateSelectionMarks();
}

function clearSelectedItem() {
  uiState.selectedItem = null;
  updateSelectionMarks();
}

function isSelectedItem(type, id) {
  return uiState.selectedItem?.type === type && uiState.selectedItem?.id === id;
}

function updateSelectionMarks() {
  document.querySelectorAll(".is-selected").forEach((element) => element.classList.remove("is-selected"));

  if (!uiState.selectedItem) {
    return;
  }

  const { type, id } = uiState.selectedItem;
  if (type === "block") {
    document.querySelectorAll(`[data-block-id="${CSS.escape(id)}"]`)
      .forEach((element) => element.classList.add("is-selected"));
    const noteButtons = [...document.querySelectorAll(".note-link")];
    noteButtons
      .filter((button) => button.dataset.blockId === id)
      .forEach((button) => button.classList.add("is-selected"));
    return;
  }

  document.querySelector(`[data-selectable-type="${CSS.escape(type)}"][data-selectable-id="${CSS.escape(id)}"]`)?.classList.add("is-selected");
}

function handleTreeDoubleClick(event) {
  if (!(event.target instanceof Element) || isTextEditingTarget(event.target)) {
    return;
  }

  if (uiState.isSidebarCollapsed && event.target.closest(".sidebar")) {
    event.preventDefault();
    const notebookRow = event.target.closest(".notebook-row");
    const notebookId = notebookRow?.closest(".tree-group")?.dataset.treeId;
    const notebook = state.notebooks.find((item) => item.id === notebookId) || null;
    if (notebook && notebookRow) {
      showCollapsedPageMenu(notebook, notebookRow);
    }
    return;
  }

  const noteButton = event.target.closest(".note-link[data-block-id]");
  if (noteButton?.dataset.blockId) {
    event.preventDefault();
    renameBlock(noteButton.dataset.blockId);
    return;
  }

  const treeButton = event.target.closest(".tree-button[data-selectable-type][data-selectable-id]");
  if (!treeButton) {
    return;
  }

  event.preventDefault();
  if (treeButton.dataset.selectableType === "notebook") {
    renameNotebook(treeButton.dataset.selectableId);
  }

  if (treeButton.dataset.selectableType === "page") {
    renamePage(treeButton.dataset.selectableId);
  }
}

function handleGlobalKeydown(event) {
  if (event.key === "Escape" && uiState.actionPopover) {
    removeActionPopover();
    event.preventDefault();
    return;
  }

  if (event.key !== "Delete" || isTextEditingTarget(event.target)) {
    return;
  }

  if (deleteSelectedItem()) {
    event.preventDefault();
  }
}

function isTextEditingTarget(target) {
  if (!(target instanceof Element)) {
    return false;
  }

  return Boolean(target.closest([
    "input",
    "textarea",
    "select",
    "[contenteditable='true']"
  ].join(", ")));
}

function getSelectedItemAnchor(selected) {
  if (!selected) {
    return elements.sidebar;
  }

  if (selected.type === "block") {
    return document.querySelector(`[data-block-id="${CSS.escape(selected.id)}"]`)
      || document.querySelector(`.note-link[data-block-id="${CSS.escape(selected.id)}"]`)
      || elements.canvasViewport;
  }

  return document.querySelector(`[data-selectable-type="${CSS.escape(selected.type)}"][data-selectable-id="${CSS.escape(selected.id)}"]`)
    || elements.notebookList;
}

function deleteSelectedItem() {
  const selected = uiState.selectedItem;
  if (!selected) {
    return false;
  }

  const anchor = getSelectedItemAnchor(selected);

  if (selected.type === "block") {
    return deleteBlock(selected.id, { anchor });
  }

  if (selected.type === "page") {
    return deletePage(selected.id, anchor);
  }

  if (selected.type === "notebook") {
    deleteNotebook(selected.id, anchor);
    return true;
  }

  return false;
}

function getNotebookMenuPosition(anchor) {
  const menuWidth = 156;
  const menuHeight = 196;
  const margin = 8;
  const gap = 6;

  if (!anchor) {
    return { left: margin, top: margin };
  }

  return {
    left: Math.max(margin, Math.min(window.innerWidth - menuWidth - margin, anchor.right - menuWidth)),
    top: Math.max(margin, Math.min(window.innerHeight - menuHeight - margin, anchor.bottom + gap))
  };
}

function getNotebookContextAnchor(event) {
  const menuWidth = 156;
  const gap = 6;
  return {
    right: event.clientX + menuWidth,
    bottom: event.clientY - gap
  };
}

setupCanvasPanning();
setupCanvasZoom();
setupCanvasContextMenu();
setSidebarCollapsed(false);
setLanguage(currentLanguage, { shouldRender: false });
setTheme(loadThemePreference(), { shouldRenderBlocks: false });
setGridVisible(loadGridPreference(), { shouldPersist: false });
render();

function loadState() {
  LEGACY_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));

  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return structuredClone(initialState);
  }

  try {
    const parsed = JSON.parse(saved);
    const merged = {
      ...structuredClone(initialState),
      ...(isRecord(parsed) ? parsed : {}),
      camera: {
        ...initialState.camera,
        ...(isRecord(parsed?.camera) ? parsed.camera : {})
      }
    };
    return sanitizeState(merged);
  } catch {
    return structuredClone(initialState);
  }
}

function bootstrapSelection() {
  if (!state.selectedNotebookId) {
    state.selectedNotebookId = state.notebooks[0]?.id || null;
  }

  const notebook = getSelectedNotebook();
  if (!notebook) {
    return;
  }

  const pageExists = notebook.pages.some((page) => page.id === state.selectedPageId);
  if (!pageExists) {
    state.selectedPageId = notebook.pages[0]?.id || null;
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function exportNotebookData() {
  const payload = {
    format: EXPORT_FORMAT,
    version: EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    data: sanitizeState(state)
  };
  const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `${currentLanguage === "en" ? "notebooks" : "cadernos"}-${getExportDateStamp()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
  setSettingsMenuOpen(false);
}

async function handleImportFile(event) {
  const input = event.target;
  const file = input.files?.[0];

  if (!file) {
    return;
  }

  try {
    const importedState = parseNotebookImport(parseImportJson(await file.text()));

    showConfirmPopover(elements.importDataSetting, {
      title: t("importNotebooksTitle"),
      message: t("importNotebooksMessage"),
      confirmLabel: t("import"),
      onConfirm: () => {
        replaceNotebookState(importedState);
        setSettingsMenuOpen(false);
        showNoticePopover(elements.importDataSetting, {
          title: t("imported"),
          message: t("importedSuccess")
        });
      }
    });
  } catch (error) {
    showNoticePopover(elements.importDataSetting, {
      title: t("importError"),
      message: error instanceof Error ? error.message : t("importFallbackError"),
      tone: "danger"
    });
  } finally {
    input.value = "";
  }
}

function parseImportJson(source) {
  try {
    return JSON.parse(source);
  } catch {
    throw new Error(t("invalidJson"));
  }
}

function parseNotebookImport(parsed) {
  if (!isRecord(parsed)) {
    throw new Error(t("notebookDataRequired"));
  }

  const candidate = isRecord(parsed.data) ? parsed.data : parsed;

  if (!Array.isArray(candidate.notebooks) || !candidate.notebooks.some(hasImportableNotebookShape)) {
    throw new Error(t("invalidNotebookExport"));
  }

  const merged = {
    ...structuredClone(initialState),
    ...candidate,
    camera: {
      ...initialState.camera,
      ...(isRecord(candidate.camera) ? candidate.camera : {})
    }
  };

  return sanitizeState(merged);
}

function hasImportableNotebookShape(notebook) {
  return isRecord(notebook) && Array.isArray(notebook.pages);
}

function replaceNotebookState(nextState) {
  Object.assign(state, nextState);
  uiState.expandedNotebookIds = new Set();
  uiState.expandedPageIds = new Set();
  uiState.hasSyncedExpandedState = false;
  uiState.openingTreeId = null;
  uiState.openNotebookMenuId = null;
  uiState.notebookMenuAnchor = null;
  uiState.openPageMenuId = null;
  uiState.pageMenuAnchor = null;
  uiState.openBlockListMenuId = null;
  uiState.blockListMenuAnchor = null;
  uiState.editingNotebookId = null;
  uiState.editingPageId = null;
  uiState.editingBlockId = null;
  uiState.editingCategoryBlockId = null;
  uiState.openCategoryMenuBlockId = null;
  uiState.openCategoryColorBlockId = null;
  uiState.openMenuBlockId = null;
  uiState.blockMenuAnchor = null;
  uiState.canvasMenuAnchor = null;
  uiState.openFormatToolbarBlockId = null;
  uiState.clipboardBlock = null;
  uiState.selectedItem = null;
  removeCanvasContextMenu();
  render();
}

function getExportDateStamp() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return [
    now.getFullYear(),
    pad(now.getMonth() + 1),
    pad(now.getDate())
  ].join("-");
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function loadGridPreference() {
  return localStorage.getItem(GRID_STORAGE_KEY) !== "hidden";
}

function loadLanguagePreference() {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return savedLanguage === "en" ? "en" : "pt";
}

function setLanguage(language, options = {}) {
  currentLanguage = language === "en" ? "en" : "pt";
  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  if (elements.languageSetting) {
    elements.languageSetting.value = currentLanguage;
  }
  document.documentElement.lang = currentLanguage === "en" ? "en" : "pt-BR";
  applyStaticTranslations();
  setTheme(document.body.classList.contains("dark-theme") ? "dark" : "light", { shouldRenderBlocks: false });
  setSidebarCollapsed(uiState.isSidebarCollapsed);

  if (options.shouldRender !== false) {
    render();
  }
}

function setText(element, value) {
  if (element) {
    element.textContent = value;
  }
}

function setButtonTextAndLabels(element, label) {
  if (!element) {
    return;
  }

  element.textContent = label;
  element.setAttribute("aria-label", label);
  element.setAttribute("title", label);
  element.dataset.tooltip = label;
}

function applyStaticTranslations() {
  updateDocumentTitle();
  elements.addNotebookButton.setAttribute("aria-label", t("newNotebook"));
  elements.addNotebookButton.setAttribute("title", t("newNotebook"));
  elements.addNotebookButton.dataset.tooltip = t("newNotebook");
  elements.addPageButton.setAttribute("aria-label", t("newPage"));
  elements.addPageButton.setAttribute("title", t("newPage"));
  elements.addPageButton.dataset.tooltip = t("newPage");
  elements.addTextButton.setAttribute("aria-label", t("text"));
  elements.addTextButton.setAttribute("title", t("text"));
  elements.addTextButton.dataset.tooltip = t("text");
  elements.addTableButton.setAttribute("aria-label", t("table"));
  elements.addTableButton.setAttribute("title", t("table"));
  elements.addTableButton.dataset.tooltip = t("table");
  elements.fitViewButton.setAttribute("aria-label", t("center"));
  elements.fitViewButton.setAttribute("title", t("center"));
  elements.fitViewButton.dataset.tooltip = t("center");
  elements.settingsButton.setAttribute("aria-label", t("settings"));
  elements.settingsButton.setAttribute("title", t("settings"));
  elements.settingsButton.dataset.tooltip = t("settings");
  setText(elements.darkModeSetting?.closest(".settings-option")?.querySelector("span"), t("darkMode"));
  setText(elements.gridSetting?.closest(".settings-option")?.querySelector("span"), t("showGrid"));
  setText(elements.languageSettingLabel, t("language"));
  setText(elements.exportDataSetting, t("exportJson"));
  setText(elements.importDataSetting, t("importJson"));
  setText(elements.resetZoomSetting, "Zoom 100%");
  setText(elements.fitViewSetting, t("center"));
  elements.zoomInButton.setAttribute("aria-label", t("zoomIn"));
  elements.zoomOutButton.setAttribute("aria-label", t("zoomOut"));
}

function localizeBlockNode(node) {
  node.querySelector(".note-title-input")?.setAttribute("placeholder", t("noteTitle"));
  setText(node.querySelector(".note-category-badge"), t("uncategorized"));
  const settingsButton = node.querySelector(".settings-toggle-button");
  settingsButton?.setAttribute("aria-label", t("noteActions"));
  settingsButton?.setAttribute("title", t("noteActions"));
  setText(node.querySelector(".change-category-button"), t("category"));
  setText(node.querySelector(".copy-block-button"), t("copy"));
  setText(node.querySelector(".paste-block-button"), t("pasteCopy"));
  setText(node.querySelector(".remove-block-button"), t("delete"));
  const toolbar = node.querySelector(".text-format-toolbar");
  toolbar?.setAttribute("aria-label", t("textFormatting"));
  node.querySelectorAll(".text-format-button[data-label-key]").forEach((button) => {
    const label = t(button.dataset.labelKey);
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  });
  node.querySelector(".text-editor")?.setAttribute("data-placeholder", t("writeHere"));
  node.querySelector(".resize-handle")?.setAttribute("aria-label", t("resizeBlock"));
  setText(node.querySelector(".add-row-button"), t("rowPlus"));
  setText(node.querySelector(".remove-row-button"), t("rowMinus"));
  setText(node.querySelector(".add-column-button"), t("columnPlus"));
  setText(node.querySelector(".remove-column-button"), t("columnMinus"));
  setText(node.querySelector(".toggle-header-button"), t("header"));
  setText(node.querySelector(".clear-table-button"), t("clearTable"));
}

function toggleTheme() {
  setTheme(document.body.classList.contains("dark-theme") ? "light" : "dark");
}

function setTheme(theme, options = {}) {
  const isDarkTheme = theme === "dark";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  localStorage.setItem(THEME_STORAGE_KEY, isDarkTheme ? "dark" : "light");
  elements.darkModeSetting.checked = isDarkTheme;

  elements.themeToggleButton.innerHTML = `<span aria-hidden="true">${isDarkTheme ? "&#9728;" : "&#9790;"}</span>`;
  elements.themeToggleButton.setAttribute("aria-label", isDarkTheme ? t("enableLightMode") : t("enableDarkMode"));
  elements.themeToggleButton.setAttribute("title", isDarkTheme ? t("lightMode") : t("darkMode"));
  elements.themeToggleButton.dataset.tooltip = isDarkTheme ? t("lightMode") : t("darkMode");

  if (options.shouldRenderBlocks !== false) {
    renderBlocks();
  }
}

function setGridVisible(isVisible, options = {}) {
  uiState.isGridVisible = isVisible;
  elements.canvasGrid.hidden = !isVisible;
  elements.gridSetting.checked = isVisible;

  if (options.shouldPersist !== false) {
    localStorage.setItem(GRID_STORAGE_KEY, isVisible ? "visible" : "hidden");
  }
}

function toggleSettingsMenu(event) {
  event.stopPropagation();
  setSettingsMenuOpen(!uiState.isSettingsMenuOpen);
}

function setSettingsMenuOpen(isOpen) {
  uiState.isSettingsMenuOpen = isOpen;
  elements.settingsMenu.hidden = !isOpen;
  elements.settingsButton.classList.toggle("active", isOpen);
}

function getSelectedNotebook() {
  return state.notebooks.find((notebook) => notebook.id === state.selectedNotebookId) || null;
}

function updateDocumentTitle() {
  const notebookName = getSelectedNotebook()?.name?.trim();
  document.title = notebookName
    ? `${t("appTitle")} - ${notebookName}`
    : `${t("appTitle")}`;
}

function getSelectedPage() {
  const notebook = getSelectedNotebook();
  return notebook?.pages.find((page) => page.id === state.selectedPageId) || null;
}

function updateCanvasLocationLabel() {
  if (!elements.canvasLocationLabel) {
    return;
  }

  const notebook = getSelectedNotebook();
  const page = getSelectedPage();
  const shouldShow = uiState.isSidebarCollapsed && notebook && page;
  elements.canvasLocationLabel.hidden = !shouldShow;
  elements.canvasLocationLabel.textContent = shouldShow ? `${notebook.name} - ${page.title}` : "";
}

function render() {
  bootstrapSelection();
  syncExpandedState();
  updateDocumentTitle();
  updateCanvasLocationLabel();
  renderNotebookList();
  renderBlocks();
  updateCamera();
  persist();
}

function renderKeepingCollapsedPageMenu(notebookId = uiState.collapsedPageMenuNotebookId) {
  const menu = document.querySelector(".collapsed-page-menu");
  const row = notebookId
    ? document.querySelector(`.tree-group[data-tree-id="${CSS.escape(notebookId)}"] > .notebook-row`)
    : null;

  if (!uiState.isSidebarCollapsed || !menu || !row) {
    render();
    return;
  }

  bootstrapSelection();
  syncExpandedState();
  updateDocumentTitle();
  updateCanvasLocationLabel();
  renderCollapsedPageMenuContent(state.notebooks.find((item) => item.id === notebookId), menu);
  renderBlocks();
  updateCamera();
  persist();
}

function renderNotebookList() {
  elements.notebookList.innerHTML = "";
    document.querySelectorAll(".notebook-menu").forEach((menu) => menu.remove());
    removeCollapsedPageMenu();

  state.notebooks.forEach((notebook) => {
    const group = document.createElement("div");
    group.className = "tree-group";
    group.dataset.treeId = notebook.id;

    const notebookRow = document.createElement("div");
    notebookRow.className = "tree-row notebook-row";

    const notebookToggleButton = document.createElement("button");
    notebookToggleButton.type = "button";
    notebookToggleButton.className = "icon-button tree-toggle-button";
    notebookToggleButton.setAttribute("aria-label", uiState.expandedNotebookIds.has(notebook.id) ? t("collapseNotebook") : t("expandNotebook"));
    notebookToggleButton.title = uiState.expandedNotebookIds.has(notebook.id) ? t("collapse") : t("expand");
    notebookToggleButton.innerHTML = uiState.expandedNotebookIds.has(notebook.id) ? "&#9662;" : "&#9656;";
    notebookToggleButton.addEventListener("click", (event) => {
      event.stopPropagation();
      uiState.openNotebookMenuId = null;
      uiState.notebookMenuAnchor = null;
      uiState.openPageMenuId = null;
      uiState.pageMenuAnchor = null;
      toggleTreeExpansion(uiState.expandedNotebookIds, notebook.id, group);
    });

    const notebookButton = uiState.editingNotebookId === notebook.id
      ? createNotebookRenameField(notebook)
      : createNotebookButton(notebook);

    notebookRow.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (uiState.isSidebarCollapsed) {
        uiState.isCollapsedPageHoverSuppressed = true;
        removeCollapsedPageMenu();
      }
      uiState.openNotebookMenuId = notebook.id;
      uiState.notebookMenuAnchor = getNotebookContextAnchor(event);
      uiState.openPageMenuId = null;
      uiState.pageMenuAnchor = null;
      uiState.openBlockListMenuId = null;
      uiState.blockListMenuAnchor = null;
      uiState.openMenuBlockId = null;
      uiState.blockMenuAnchor = null;
      render();
    });
    notebookRow.addEventListener("pointerenter", () => {
      showCollapsedPageMenu(notebook, notebookRow);
    });
    notebookRow.addEventListener("pointerleave", () => {
      uiState.isCollapsedPageHoverSuppressed = false;
      scheduleCollapsedPageMenuClose();
    });
    notebookRow.addEventListener("focusin", () => {
      showCollapsedPageMenu(notebook, notebookRow);
    });

    const notebookActions = document.createElement("div");
    notebookActions.className = `notebook-actions ${uiState.openNotebookMenuId === notebook.id ? "active" : ""}`;
    notebookActions.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
    });
    notebookActions.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    const notebookMenuButton = document.createElement("button");
    notebookMenuButton.type = "button";
    notebookMenuButton.className = `icon-button notebook-menu-button ${uiState.openNotebookMenuId === notebook.id ? "active" : ""}`;
    notebookMenuButton.setAttribute("aria-label", `${t("actionsOf")} ${notebook.name}`);
    notebookMenuButton.title = t("actions");
    notebookMenuButton.innerHTML = "&ctdot;";
    notebookMenuButton.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
    });
    notebookMenuButton.addEventListener("click", (event) => {
      event.stopPropagation();
      selectItem("notebook", notebook.id);
      state.selectedNotebookId = notebook.id;
      state.selectedPageId = notebook.pages[0]?.id || null;
      if (uiState.openNotebookMenuId === notebook.id) {
        uiState.openNotebookMenuId = null;
        uiState.notebookMenuAnchor = null;
      } else {
        uiState.openNotebookMenuId = notebook.id;
        uiState.notebookMenuAnchor = getNotebookContextAnchor(event);
        uiState.openPageMenuId = null;
        uiState.pageMenuAnchor = null;
        uiState.openBlockListMenuId = null;
        uiState.blockListMenuAnchor = null;
        uiState.openMenuBlockId = null;
        uiState.blockMenuAnchor = null;
      }
      render();
    });
    notebookActions.appendChild(notebookMenuButton);

    if (uiState.openNotebookMenuId === notebook.id) {
      const menu = document.createElement("div");
      menu.className = "notebook-menu";
      const menuPosition = getNotebookMenuPosition(uiState.notebookMenuAnchor);
      menu.style.setProperty("--notebook-menu-left", `${menuPosition.left}px`);
      menu.style.setProperty("--notebook-menu-top", `${menuPosition.top}px`);

      const newPageButton = document.createElement("button");
      newPageButton.type = "button";
      newPageButton.className = "ghost menu-action";
      newPageButton.textContent = t("newPage");
      newPageButton.addEventListener("click", (event) => {
        event.stopPropagation();
        uiState.openNotebookMenuId = null;
        uiState.notebookMenuAnchor = null;
        document.querySelectorAll(".notebook-menu").forEach((item) => item.remove());
        createPage(notebook.id, event);
      });

      const iconButton = document.createElement("button");
      iconButton.type = "button";
      iconButton.className = "ghost menu-action";
      iconButton.textContent = t("icon");
      iconButton.addEventListener("click", (event) => {
        event.stopPropagation();
        uiState.openNotebookMenuId = null;
        uiState.notebookMenuAnchor = null;
        document.querySelectorAll(".notebook-menu").forEach((menu) => menu.remove());
        changeNotebookEmoji(notebook.id, event);
      });

      const renameButton = document.createElement("button");
      renameButton.type = "button";
      renameButton.className = "ghost menu-action";
      renameButton.textContent = t("rename");
      renameButton.addEventListener("click", (event) => {
        event.stopPropagation();
        uiState.openNotebookMenuId = null;
        uiState.notebookMenuAnchor = null;
        renameNotebook(notebook.id);
      });

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "ghost danger menu-action";
      deleteButton.textContent = t("delete");
      deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        uiState.openNotebookMenuId = null;
        uiState.notebookMenuAnchor = null;
        document.querySelectorAll(".notebook-menu").forEach((menu) => menu.remove());
        deleteNotebook(notebook.id, event);
      });

      menu.append(newPageButton, iconButton, renameButton, deleteButton);
      document.body.appendChild(menu);
    }

    notebookRow.append(notebookToggleButton, notebookButton, notebookActions);
    group.appendChild(notebookRow);

    if (uiState.expandedNotebookIds.has(notebook.id)) {
      const pagesWrap = document.createElement("div");
      pagesWrap.className = "tree-children";

      notebook.pages.forEach((page) => {
        const pageWrap = document.createElement("div");
        pageWrap.className = "tree-group";
        pageWrap.dataset.treeId = page.id;
        const pageRow = document.createElement("div");
        pageRow.className = "tree-row page-row";

        const pageNotes = page.blocks;
        const pageToggleButton = document.createElement("button");
        pageToggleButton.type = "button";
        pageToggleButton.className = "icon-button tree-toggle-button";
        pageToggleButton.setAttribute("aria-label", uiState.expandedPageIds.has(page.id) ? t("collapsePage") : t("expandPage"));
        pageToggleButton.title = uiState.expandedPageIds.has(page.id) ? t("collapse") : t("expand");
        pageToggleButton.innerHTML = uiState.expandedPageIds.has(page.id) ? "&#9662;" : "&#9656;";
        pageToggleButton.addEventListener("click", (event) => {
          event.stopPropagation();
          toggleTreeExpansion(uiState.expandedPageIds, page.id, pageWrap);
        });

        const pageButton = uiState.editingPageId === page.id
          ? createPageRenameField(page, pageNotes.length)
          : createPageButton(notebook, page, pageNotes.length);
        const pageActions = createPageActions(notebook, page);
        pageRow.addEventListener("contextmenu", (event) => {
          event.preventDefault();
          event.stopPropagation();
          if (uiState.isSidebarCollapsed) {
            uiState.isCollapsedPageHoverSuppressed = true;
            removeCollapsedPageMenu();
          }
          uiState.openPageMenuId = page.id;
          uiState.pageMenuAnchor = getNotebookContextAnchor(event);
          uiState.openNotebookMenuId = null;
          uiState.notebookMenuAnchor = null;
          uiState.openBlockListMenuId = null;
          uiState.blockListMenuAnchor = null;
          uiState.openMenuBlockId = null;
          uiState.blockMenuAnchor = null;
          render();
        });
        pageRow.append(pageToggleButton, pageButton, pageActions);
        pageWrap.appendChild(pageRow);

        if (uiState.expandedPageIds.has(page.id) && pageNotes.length > 0) {
          const notesWrap = document.createElement("div");
          notesWrap.className = "tree-children";

          pageNotes.forEach((block, index) => {
            const noteRow = document.createElement("div");
            noteRow.className = "note-row";
            const noteButton = uiState.editingBlockId === block.id
              ? createBlockRenameField(block, index)
              : createBlockButton(notebook, page, block, index);
            const noteActions = createBlockListActions(notebook, page, block);
            noteRow.addEventListener("contextmenu", (event) => {
              event.preventDefault();
              event.stopPropagation();
              if (uiState.isSidebarCollapsed) {
                uiState.isCollapsedPageHoverSuppressed = true;
                removeCollapsedPageMenu();
              }
              uiState.openBlockListMenuId = block.id;
              uiState.blockListMenuAnchor = getNotebookContextAnchor(event);
              uiState.openNotebookMenuId = null;
              uiState.notebookMenuAnchor = null;
              uiState.openPageMenuId = null;
              uiState.pageMenuAnchor = null;
              uiState.openMenuBlockId = null;
              uiState.blockMenuAnchor = null;
              render();
            });
            noteRow.append(noteButton, noteActions);
            notesWrap.appendChild(noteRow);
          });

          pageWrap.appendChild(notesWrap);
        }

        pagesWrap.appendChild(pageWrap);
      });
      group.appendChild(pagesWrap);
    }

    elements.notebookList.appendChild(group);
    animateOpeningTreeIn(group);
  });
}

function createNotebookButton(notebook) {
  const notebookButton = document.createElement("button");
  notebookButton.type = "button";
  notebookButton.className = `tree-button ${notebook.id === state.selectedNotebookId ? "active" : ""} ${isSelectedItem("notebook", notebook.id) ? "is-selected" : ""}`;
  notebookButton.dataset.selectableType = "notebook";
  notebookButton.dataset.selectableId = notebook.id;
  notebookButton.dataset.tooltip = notebook.name;
  notebookButton.title = notebook.name;
  notebookButton.innerHTML = `<span class="notebook-emoji">${escapeHtml(notebook.emoji)}</span><strong>${escapeHtml(notebook.name)}</strong><small class="tree-count notebook-page-count">${formatCount(notebook.pages.length, t("page"), t("pages"))}</small>`;
  notebookButton.addEventListener("click", (event) => {
    if (notebook.id === state.selectedNotebookId) {
      return;
    }

    selectItem("notebook", notebook.id);
    state.selectedNotebookId = notebook.id;
    state.selectedPageId = notebook.pages[0]?.id || null;
    uiState.openNotebookMenuId = null;
    uiState.notebookMenuAnchor = null;
    uiState.openPageMenuId = null;
    uiState.pageMenuAnchor = null;
    uiState.openBlockListMenuId = null;
    uiState.blockListMenuAnchor = null;
    if (uiState.isSidebarCollapsed) {
      const row = event.currentTarget.closest(".notebook-row");
      if (row) {
        showCollapsedPageMenu(notebook, row);
      }
      updateNotebookSelectionMarks();
      renderKeepingCollapsedPageMenu(notebook.id);
      return;
    }

    render();
  });
  notebookButton.addEventListener("dblclick", (event) => {
    if (uiState.isSidebarCollapsed) {
      event.preventDefault();
      event.stopPropagation();
      const row = event.currentTarget.closest(".notebook-row");
      if (row) {
        showCollapsedPageMenu(notebook, row);
      }
      return;
    }

    renameNotebook(notebook.id);
  });
  return notebookButton;
}

function showCollapsedPageMenu(notebook, row) {
  if (!uiState.isSidebarCollapsed || !elements.sidebar.classList.contains("collapsed")) {
    return;
  }

  if (uiState.isCollapsedPageHoverSuppressed || isTreeContextMenuOpen()) {
    return;
  }

  clearCollapsedPageMenuCloseTimer();

  const rowRect = row.getBoundingClientRect();
  const sidebarRect = elements.sidebar.getBoundingClientRect();
  const menuWidth = 220;
  const estimatedHeight = Math.min(300, 56 + Math.max(notebook.pages.length, 1) * 38);
  const margin = 8;
  const left = Math.min(window.innerWidth - menuWidth - margin, sidebarRect.right + 10);
  const top = Math.max(margin, Math.min(window.innerHeight - estimatedHeight - margin, rowRect.top - 8));
  const openMenu = document.querySelector(".collapsed-page-menu");

  document.querySelectorAll(".notebook-row.page-menu-open").forEach((item) => {
    if (item !== row) {
      item.classList.remove("page-menu-open");
    }
  });
  row.classList.add("page-menu-open");

  if (openMenu && uiState.collapsedPageMenuNotebookId === notebook.id) {
    openMenu.style.setProperty("--collapsed-page-menu-left", `${left}px`);
    openMenu.style.setProperty("--collapsed-page-menu-top", `${top}px`);
    renderCollapsedPageMenuContent(notebook, openMenu);
    return;
  }

  document.querySelectorAll(".collapsed-page-menu").forEach((menu) => menu.remove());
  uiState.collapsedPageMenuNotebookId = notebook.id;

  const menu = document.createElement("section");
  menu.className = "collapsed-page-menu";
  menu.style.setProperty("--collapsed-page-menu-left", `${left}px`);
  menu.style.setProperty("--collapsed-page-menu-top", `${top}px`);
  menu.addEventListener("pointerenter", clearCollapsedPageMenuCloseTimer);
  menu.addEventListener("pointerleave", () => scheduleCollapsedPageMenuClose());
  menu.addEventListener("pointerdown", (event) => event.stopPropagation());
  menu.addEventListener("click", (event) => event.stopPropagation());
  renderCollapsedPageMenuContent(notebook, menu);
  document.body.appendChild(menu);
}

function isTreeContextMenuOpen() {
  return Boolean(uiState.openNotebookMenuId || uiState.openPageMenuId || uiState.openBlockListMenuId);
}

function updateNotebookSelectionMarks() {
  document.querySelectorAll('.tree-button[data-selectable-type="notebook"]').forEach((button) => {
    const isActive = button.dataset.selectableId === state.selectedNotebookId;
    button.classList.toggle("active", isActive);
    button.classList.toggle("is-selected", isSelectedItem("notebook", button.dataset.selectableId));
  });
}

function renderCollapsedPageMenuContent(notebook, menu) {
  if (!notebook || !menu) {
    return;
  }

  menu.replaceChildren();

  const head = document.createElement("div");
  head.className = "collapsed-page-menu-head";

  const title = document.createElement("strong");
  title.className = "collapsed-page-menu-title";
  title.textContent = notebook.name;
  title.title = t("doubleClickRename");
  title.addEventListener("dblclick", (event) => {
    event.preventDefault();
    event.stopPropagation();
    startCollapsedPageMenuRename({
      type: "notebook",
      target: title,
      value: notebook.name,
      keepCollapsedPageMenu: true,
      onSave: (nextName) => {
        notebook.name = nextName;
      }
    });
  });

  const addPageButton = document.createElement("button");
  addPageButton.type = "button";
  addPageButton.className = "collapsed-page-menu-add";
  addPageButton.setAttribute("aria-label", t("newPage"));
  addPageButton.title = t("newPage");
  addPageButton.addEventListener("click", (event) => {
    event.stopPropagation();
    createPage(notebook.id, event, { keepCollapsedPageMenu: true });
  });
  head.append(title, addPageButton);
  menu.appendChild(head);

  const pageList = document.createElement("div");
  pageList.className = "collapsed-page-menu-list";

  if (notebook.pages.length === 0) {
    const empty = document.createElement("button");
    empty.type = "button";
    empty.className = "collapsed-page-menu-page";
    empty.textContent = t("newPage");
    empty.addEventListener("click", (event) => {
      event.stopPropagation();
      createPage(notebook.id, event, { keepCollapsedPageMenu: true });
    });
    pageList.appendChild(empty);
  } else {
    notebook.pages.forEach((page) => {
      const pageItem = document.createElement("div");
      pageItem.className = "collapsed-page-menu-item";
      pageItem.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        event.stopPropagation();
        uiState.isCollapsedPageHoverSuppressed = true;
        uiState.openPageMenuId = page.id;
        uiState.pageMenuAnchor = getNotebookContextAnchor(event);
        uiState.openNotebookMenuId = null;
        uiState.notebookMenuAnchor = null;
        renderKeepingCollapsedPageMenu(notebook.id);
      });

      const pageButton = document.createElement("button");
      pageButton.type = "button";
      pageButton.className = `collapsed-page-menu-page ${page.id === state.selectedPageId && notebook.id === state.selectedNotebookId ? "active" : ""} ${isSelectedItem("page", page.id) ? "is-selected" : ""}`;
      pageButton.title = t("doubleClickRename");

      const pageTitle = document.createElement("span");
      pageTitle.textContent = page.title;
      const noteCount = document.createElement("small");
      noteCount.textContent = formatCount(page.blocks.length, t("note"), t("notes"));
      pageButton.append(pageTitle, noteCount);

      let pageClickTimer = null;
      pageButton.addEventListener("click", (event) => {
        event.stopPropagation();
        if (event.detail > 1) {
          return;
        }

        window.clearTimeout(pageClickTimer);
        pageClickTimer = window.setTimeout(() => {
          selectItem("page", page.id);
          state.selectedNotebookId = notebook.id;
          state.selectedPageId = page.id;
          uiState.expandedNotebookIds.add(notebook.id);
          renderKeepingCollapsedPageMenu(notebook.id);
        }, 180);
      });
      pageButton.addEventListener("dblclick", (event) => {
        event.preventDefault();
        event.stopPropagation();
        window.clearTimeout(pageClickTimer);
        startCollapsedPageMenuRename({
          type: "page",
          target: pageButton,
          value: page.title,
          keepCollapsedPageMenu: true,
          onSave: (nextName) => {
            page.title = nextName;
          }
        });
      });

      const pageActions = createPageActions(notebook, page, {
        className: "collapsed-page-actions",
        keepCollapsedPageMenu: true,
        getRenameTarget: () => pageButton
      });
      pageItem.append(pageButton, pageActions);
      pageList.appendChild(pageItem);
    });
  }

  menu.appendChild(pageList);
}

function startCollapsedPageMenuRename(options) {
  const input = document.createElement("input");
  input.className = `collapsed-page-menu-rename ${options.type === "notebook" ? "title" : ""}`;
  input.type = "text";
  input.value = options.value;

  let isFinished = false;
  const finish = (shouldSave) => {
    if (isFinished) {
      return;
    }

    isFinished = true;
    const nextName = input.value.trim();
    if (shouldSave && nextName) {
      options.onSave(nextName);
    }
    if (options.keepCollapsedPageMenu) {
      renderKeepingCollapsedPageMenu();
      return;
    }

    render();
  };

  input.addEventListener("pointerdown", (event) => event.stopPropagation());
  input.addEventListener("click", (event) => event.stopPropagation());
  input.addEventListener("dblclick", (event) => event.stopPropagation());
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      finish(true);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      finish(false);
    }
  });
  input.addEventListener("blur", () => finish(true));

  options.target.replaceChildren(input);
  requestAnimationFrame(() => {
    input.focus();
    input.select();
  });
}

function clearCollapsedPageMenuCloseTimer() {
  if (!uiState.collapsedPageMenuCloseTimer) {
    return;
  }

  window.clearTimeout(uiState.collapsedPageMenuCloseTimer);
  uiState.collapsedPageMenuCloseTimer = null;
}

function scheduleCollapsedPageMenuClose(delay = 140) {
  clearCollapsedPageMenuCloseTimer();
  uiState.collapsedPageMenuCloseTimer = window.setTimeout(() => {
    if (uiState.actionPopover?.dataset.keepCollapsedPageMenu === "true") {
      clearCollapsedPageMenuCloseTimer();
      return;
    }

    removeCollapsedPageMenu();
  }, delay);
}

function removeCollapsedPageMenu() {
  clearCollapsedPageMenuCloseTimer();
  uiState.collapsedPageMenuNotebookId = null;
  document.querySelectorAll(".collapsed-page-menu").forEach((menu) => menu.remove());
  document.querySelectorAll(".notebook-row.page-menu-open").forEach((row) => row.classList.remove("page-menu-open"));
}

function createPageButton(notebook, page, noteCount) {
  const pageButton = document.createElement("button");
  pageButton.type = "button";
  pageButton.className = `tree-button ${page.id === state.selectedPageId ? "active" : ""} ${isSelectedItem("page", page.id) ? "is-selected" : ""}`;
  pageButton.dataset.selectableType = "page";
  pageButton.dataset.selectableId = page.id;
  pageButton.innerHTML = `<span>${escapeHtml(page.title)}</span><small class="tree-count">${formatCount(noteCount, t("note"), t("notes"))}</small>`;
  pageButton.addEventListener("click", () => {
    selectItem("page", page.id);
    state.selectedNotebookId = notebook.id;
    state.selectedPageId = page.id;
    uiState.openNotebookMenuId = null;
    uiState.notebookMenuAnchor = null;
    uiState.openPageMenuId = null;
    uiState.pageMenuAnchor = null;
    uiState.openBlockListMenuId = null;
    uiState.blockListMenuAnchor = null;
    render();
  });
  pageButton.addEventListener("dblclick", (event) => {
    if (uiState.isSidebarCollapsed) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    renamePage(page.id);
  });
  return pageButton;
}

function createPageActions(notebook, page, options = {}) {
  const wrapper = document.createElement("div");
  wrapper.className = `${options.className || "page-actions"} ${uiState.openPageMenuId === page.id ? "active" : ""}`;

  const button = document.createElement("button");
  button.type = "button";
  button.className = `icon-button notebook-menu-button page-menu-button ${uiState.openPageMenuId === page.id ? "active" : ""}`;
  button.setAttribute("aria-label", `${t("actionsOf")} ${page.title}`);
  button.title = t("actions");
  button.innerHTML = "&ctdot;";
  button.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    selectItem("page", page.id);
    state.selectedNotebookId = notebook.id;
    state.selectedPageId = page.id;
    if (uiState.openPageMenuId === page.id) {
      uiState.openPageMenuId = null;
      uiState.pageMenuAnchor = null;
    } else {
      uiState.openPageMenuId = page.id;
      uiState.pageMenuAnchor = getNotebookContextAnchor(event);
      uiState.openNotebookMenuId = null;
      uiState.notebookMenuAnchor = null;
      uiState.openBlockListMenuId = null;
      uiState.blockListMenuAnchor = null;
      uiState.openMenuBlockId = null;
      uiState.blockMenuAnchor = null;
    }

    if (options.keepCollapsedPageMenu) {
      renderKeepingCollapsedPageMenu(notebook.id);
      return;
    }

    render();
  });
  wrapper.appendChild(button);

  if (uiState.openPageMenuId === page.id) {
    document.querySelectorAll(".notebook-menu").forEach((item) => item.remove());
    const menu = document.createElement("div");
    menu.className = "notebook-menu";
    const menuPosition = getNotebookMenuPosition(uiState.pageMenuAnchor);
    menu.style.setProperty("--notebook-menu-left", `${menuPosition.left}px`);
    menu.style.setProperty("--notebook-menu-top", `${menuPosition.top}px`);

    const newNoteButton = document.createElement("button");
    newNoteButton.type = "button";
    newNoteButton.className = "ghost menu-action";
    newNoteButton.textContent = t("newNote");
    newNoteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      uiState.openPageMenuId = null;
      uiState.pageMenuAnchor = null;
      document.querySelectorAll(".notebook-menu").forEach((item) => item.remove());
      createBlockInPage(notebook.id, page.id, "text");
    });

    const newTableButton = document.createElement("button");
    newTableButton.type = "button";
    newTableButton.className = "ghost menu-action";
    newTableButton.textContent = t("newTable");
    newTableButton.addEventListener("click", (event) => {
      event.stopPropagation();
      uiState.openPageMenuId = null;
      uiState.pageMenuAnchor = null;
      document.querySelectorAll(".notebook-menu").forEach((item) => item.remove());
      createBlockInPage(notebook.id, page.id, "table");
    });

    const renameButton = document.createElement("button");
    renameButton.type = "button";
    renameButton.className = "ghost menu-action";
    renameButton.textContent = t("rename");
    renameButton.addEventListener("click", (event) => {
      event.stopPropagation();
      uiState.openPageMenuId = null;
      uiState.pageMenuAnchor = null;
      document.querySelectorAll(".notebook-menu").forEach((item) => item.remove());
      if (options.keepCollapsedPageMenu) {
        const target = options.getRenameTarget?.();
        if (target) {
          startCollapsedPageMenuRename({
            type: "page",
            target,
            value: page.title,
            keepCollapsedPageMenu: true,
            onSave: (nextName) => {
              page.title = nextName;
            }
          });
        }
        return;
      }

      renamePage(page.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "ghost danger menu-action";
    deleteButton.textContent = t("delete");
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      uiState.openPageMenuId = null;
      uiState.pageMenuAnchor = null;
      document.querySelectorAll(".notebook-menu").forEach((item) => item.remove());
      deletePage(page.id, event, { keepCollapsedPageMenu: options.keepCollapsedPageMenu });
    });

    menu.append(newNoteButton, newTableButton, renameButton, deleteButton);
    document.body.appendChild(menu);
  }

  return wrapper;
}

function createBlockButton(notebook, page, block, index) {
  const noteButton = document.createElement("button");
  noteButton.type = "button";
  noteButton.className = `note-link ${isSelectedItem("block", block.id) ? "is-selected" : ""}`;
  noteButton.dataset.blockId = block.id;
  noteButton.textContent = getBlockListLabel(block, index);
  noteButton.addEventListener("click", () => {
    selectItem("block", block.id);
    state.selectedNotebookId = notebook.id;
    state.selectedPageId = page.id;
    uiState.openNotebookMenuId = null;
    uiState.notebookMenuAnchor = null;
    uiState.openPageMenuId = null;
    uiState.pageMenuAnchor = null;
    uiState.openBlockListMenuId = null;
    uiState.blockListMenuAnchor = null;
    focusBlock(block.id);
    render();
  });
  noteButton.addEventListener("dblclick", (event) => {
    if (uiState.isSidebarCollapsed) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    renameBlock(block.id);
  });
  return noteButton;
}

function createBlockListActions(notebook, page, block) {
  const wrapper = document.createElement("div");
  wrapper.className = `note-actions ${uiState.openBlockListMenuId === block.id ? "active" : ""}`;

  const button = document.createElement("button");
  button.type = "button";
  button.className = `icon-button notebook-menu-button note-menu-button ${uiState.openBlockListMenuId === block.id ? "active" : ""}`;
  button.setAttribute("aria-label", `${t("actionsOf")} ${getBlockTitle(block) || t("noteDefault")}`);
  button.title = t("actions");
  button.innerHTML = "&ctdot;";
  button.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    selectItem("block", block.id);
    state.selectedNotebookId = notebook.id;
    state.selectedPageId = page.id;
    if (uiState.openBlockListMenuId === block.id) {
      uiState.openBlockListMenuId = null;
      uiState.blockListMenuAnchor = null;
    } else {
      uiState.openBlockListMenuId = block.id;
      uiState.blockListMenuAnchor = getNotebookContextAnchor(event);
      uiState.openNotebookMenuId = null;
      uiState.notebookMenuAnchor = null;
      uiState.openPageMenuId = null;
      uiState.pageMenuAnchor = null;
      uiState.openMenuBlockId = null;
      uiState.blockMenuAnchor = null;
    }
    render();
  });
  wrapper.appendChild(button);

  if (uiState.openBlockListMenuId === block.id) {
    document.querySelectorAll(".notebook-menu").forEach((item) => item.remove());
    const menu = document.createElement("div");
    menu.className = "notebook-menu";
    const menuPosition = getNotebookMenuPosition(uiState.blockListMenuAnchor);
    menu.style.setProperty("--notebook-menu-left", `${menuPosition.left}px`);
    menu.style.setProperty("--notebook-menu-top", `${menuPosition.top}px`);

    const renameButton = document.createElement("button");
    renameButton.type = "button";
    renameButton.className = "ghost menu-action";
    renameButton.textContent = t("rename");
    renameButton.addEventListener("click", (event) => {
      event.stopPropagation();
      uiState.openBlockListMenuId = null;
      uiState.blockListMenuAnchor = null;
      document.querySelectorAll(".notebook-menu").forEach((item) => item.remove());
      renameBlock(block.id);
    });

    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "ghost menu-action";
    copyButton.textContent = t("copy");
    copyButton.addEventListener("click", (event) => {
      event.stopPropagation();
      uiState.clipboardBlock = cloneBlock(block);
      uiState.openBlockListMenuId = null;
      uiState.blockListMenuAnchor = null;
      document.querySelectorAll(".notebook-menu").forEach((item) => item.remove());
      render();
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "ghost danger menu-action";
    deleteButton.textContent = t("delete");
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      uiState.openBlockListMenuId = null;
      uiState.blockListMenuAnchor = null;
      document.querySelectorAll(".notebook-menu").forEach((item) => item.remove());
      deleteBlock(block.id, {
        anchor: event,
        onDeleted: () => {
          uiState.openBlockListMenuId = null;
          uiState.blockListMenuAnchor = null;
        }
      });
    });

    menu.append(renameButton, copyButton, deleteButton);
    document.body.appendChild(menu);
  }

  return wrapper;
}

function formatCount(count, singular, plural) {
  return `${count} ${count === 1 ? singular : plural}`;
}

function createNotebookRenameField(notebook) {
  const wrapper = document.createElement("div");
  wrapper.className = `tree-button notebook-rename-field ${notebook.id === state.selectedNotebookId ? "active" : ""} ${isSelectedItem("notebook", notebook.id) ? "is-selected" : ""}`;
  wrapper.dataset.selectableType = "notebook";
  wrapper.dataset.selectableId = notebook.id;

  const emoji = document.createElement("span");
  emoji.className = "notebook-emoji";
  emoji.textContent = notebook.emoji;

  const input = document.createElement("input");
  input.className = "notebook-name-input";
  input.type = "text";
  input.value = notebook.name;
  input.dataset.notebookRenameInput = notebook.id;

  const counter = document.createElement("small");
  counter.className = "tree-count notebook-page-count";
  counter.textContent = formatCount(notebook.pages.length, t("page"), t("pages"));
  let isFinished = false;

  const finish = (shouldSave) => {
    if (isFinished) {
      return;
    }

    isFinished = true;
    const nextName = input.value.trim();
    if (shouldSave && nextName) {
      notebook.name = nextName;
    }
    uiState.editingNotebookId = null;
    render();
  };

  wrapper.addEventListener("pointerdown", (event) => event.stopPropagation());
  wrapper.addEventListener("click", (event) => event.stopPropagation());
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      finish(true);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      finish(false);
    }
  });
  input.addEventListener("blur", () => finish(true));

  wrapper.append(emoji, input, counter);
  return wrapper;
}

function createPageRenameField(page, noteCount) {
  const wrapper = document.createElement("div");
  wrapper.className = `tree-button inline-rename-field ${page.id === state.selectedPageId ? "active" : ""} ${isSelectedItem("page", page.id) ? "is-selected" : ""}`;
  wrapper.dataset.selectableType = "page";
  wrapper.dataset.selectableId = page.id;

  const input = document.createElement("input");
  input.className = "tree-name-input";
  input.type = "text";
  input.value = page.title;
  input.dataset.pageRenameInput = page.id;

  const counter = document.createElement("small");
  counter.className = "tree-count";
  counter.textContent = formatCount(noteCount, t("note"), t("notes"));

  setupInlineRename(wrapper, input, {
    onSave: (nextName) => {
      page.title = nextName;
    },
    onFinish: () => {
      uiState.editingPageId = null;
    }
  });

  wrapper.append(input, counter);
  return wrapper;
}

function createBlockRenameField(block, index) {
  const wrapper = document.createElement("div");
  wrapper.className = `note-link inline-rename-field note-rename-field ${isSelectedItem("block", block.id) ? "is-selected" : ""}`;
  wrapper.dataset.blockId = block.id;

  const input = document.createElement("input");
  input.className = "tree-name-input note-name-input";
  input.type = "text";
  input.value = getBlockTitle(block) || `${t("noteDefault")} ${index + 1}`;
  input.dataset.blockRenameInput = block.id;

  setupInlineRename(wrapper, input, {
    onSave: (nextName) => {
      block.title = nextName;
    },
    onFinish: () => {
      uiState.editingBlockId = null;
    }
  });

  wrapper.appendChild(input);
  return wrapper;
}

function setupInlineRename(wrapper, input, options) {
  let isFinished = false;

  const finish = (shouldSave) => {
    if (isFinished) {
      return;
    }

    isFinished = true;
    const nextName = input.value.trim();
    if (shouldSave && nextName) {
      options.onSave(nextName);
    }
    options.onFinish();
    render();
  };

  wrapper.addEventListener("pointerdown", (event) => event.stopPropagation());
  wrapper.addEventListener("click", (event) => event.stopPropagation());
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      finish(true);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      finish(false);
    }
  });
  input.addEventListener("blur", () => finish(true));
}

function animateOpeningTreeIn(group) {
  if (!uiState.openingTreeId) {
    return;
  }

  const children = group.dataset.treeId === uiState.openingTreeId
    ? group.querySelector(":scope > .tree-children")
    : group.querySelector(`[data-tree-id="${uiState.openingTreeId}"] > .tree-children`);
  if (!children) {
    return;
  }

  animateTreeOpen(children);
  uiState.openingTreeId = null;
}

function toggleTreeExpansion(expandedIds, id, group) {
  const isExpanded = expandedIds.has(id);

  if (!isExpanded) {
    expandedIds.add(id);
    uiState.openingTreeId = id;
    render();
    return;
  }

  const children = group.querySelector(":scope > .tree-children");
  if (!children) {
    expandedIds.delete(id);
    render();
    return;
  }

  const animation = animateTreeClose(children);

  animation.onfinish = () => {
    expandedIds.delete(id);
    children.remove();
    syncTreeToggleState(group, false, expandedIds === uiState.expandedNotebookIds ? "caderno" : t("page"));
  };
}

function syncTreeToggleState(group, expanded, itemName) {
  const toggleButton = group.querySelector(":scope > .tree-row > .tree-toggle-button");
  if (!toggleButton) {
    return;
  }

  toggleButton.innerHTML = expanded ? "&#9662;" : "&#9656;";
  toggleButton.title = expanded ? t("collapse") : t("expand");
  toggleButton.setAttribute("aria-label", `${expanded ? t("collapse") : t("expand")} ${itemName}`);
}

function animateTreeOpen(children) {
  children.animate([
    {
      maxHeight: "0px",
      opacity: 0,
      marginTop: "0px",
      paddingLeft: "0px",
      borderLeftColor: "transparent",
      clipPath: "inset(0 0 100% 0)",
      transform: "translateY(-6px)"
    },
    {
      maxHeight: `${children.scrollHeight}px`,
      opacity: 1,
      marginTop: "0.45rem",
      paddingLeft: "0.85rem",
      borderLeftColor: "rgba(57, 42, 26, 0.12)",
      clipPath: "inset(0 0 0 0)",
      transform: "translateY(0)"
    }
  ], {
    duration: 320,
    easing: "cubic-bezier(0.25, 0.8, 0.25, 1)"
  });
}

function animateTreeClose(children) {
  children.style.maxHeight = `${children.scrollHeight}px`;
  children.style.opacity = "1";
  children.style.marginTop = "0.45rem";

  return children.animate([
    {
      maxHeight: `${children.scrollHeight}px`,
      opacity: 1,
      marginTop: "0.45rem",
      paddingLeft: "0.85rem",
      borderLeftColor: "rgba(57, 42, 26, 0.12)",
      clipPath: "inset(0 0 0 0)",
      transform: "translateY(0)"
    },
    {
      maxHeight: "0px",
      opacity: 0,
      marginTop: "0px",
      paddingLeft: "0px",
      borderLeftColor: "transparent",
      clipPath: "inset(0 0 100% 0)",
      transform: "translateY(-6px)"
    }
  ], {
    duration: 320,
    easing: "cubic-bezier(0.25, 0.8, 0.25, 1)",
    fill: "forwards"
  });
}

function renderBlocks() {
  const page = getSelectedPage();
  elements.blockLayer.innerHTML = "";

  if (!page || page.blocks.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `<h3>${escapeHtml(t("emptyCanvasTitle"))}</h3><p>${escapeHtml(t("emptyCanvasMessage"))}</p>`;
    elements.blockLayer.appendChild(empty);
    return;
  }

  page.blocks.forEach((block) => {
    if (block.type === "table") {
      syncTableBlockDimensions(block);
    }

    const node = block.type === "table"
      ? elements.tableBlockTemplate.content.firstElementChild.cloneNode(true)
      : elements.textBlockTemplate.content.firstElementChild.cloneNode(true);
    localizeBlockNode(node);

    node.style.left = `${block.x}px`;
    node.style.top = `${block.y}px`;
    node.style.width = `${block.width || 320}px`;
    node.style.height = `${block.height || 160}px`;
    node.dataset.blockId = block.id;
    applyBlockCategoryColor(node, block.category || "");
    if (isSelectedItem("block", block.id)) {
      node.classList.add("is-selected");
    }
    if (block.type === "table" && block.hasHeader !== false) {
      node.classList.add("has-table-header");
    }

    const selectRenderedBlock = (event) => {
      if (event?.type === "click" && event.button !== 0) {
        return;
      }

      if (event?.type === "click" && node.dataset.skipBlockClickSelection === "true") {
        delete node.dataset.skipBlockClickSelection;
        return;
      }

      selectItem("block", block.id);
    };

    node.addEventListener("click", selectRenderedBlock, true);
    node.addEventListener("focusin", selectRenderedBlock);

    node.addEventListener("contextmenu", (event) => {
      if (event.target instanceof Element && event.target.closest(".settings-menu")) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      const blockRect = node.getBoundingClientRect();
      const scale = state.camera.scale || 1;
      uiState.openMenuBlockId = block.id;
      uiState.blockMenuAnchor = {
        blockId: block.id,
        x: (event.clientX - blockRect.left) / scale,
        y: (event.clientY - blockRect.top) / scale
      };
      uiState.openNotebookMenuId = null;
      uiState.notebookMenuAnchor = null;
      uiState.openPageMenuId = null;
      uiState.pageMenuAnchor = null;
      uiState.openBlockListMenuId = null;
      uiState.blockListMenuAnchor = null;
      uiState.openCategoryMenuBlockId = null;
      renderBlocks();
    });

    const removeButton = node.querySelector(".remove-block-button");
    removeButton.addEventListener("pointerdown", (event) => event.stopPropagation());
    removeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteBlock(block.id, {
        anchor: event,
        onDeleted: () => {
          uiState.openMenuBlockId = null;
          uiState.blockMenuAnchor = null;
        }
      });
    });

    const titleInput = node.querySelector(".note-title-input");
    titleInput.value = block.title || "";
    titleInput.addEventListener("input", (event) => {
      block.title = event.target.value;
      persist();
      renderNotebookList();
    });
    titleInput.addEventListener("pointerdown", (event) => event.stopPropagation());

    const categoryBadge = node.querySelector(".note-category-badge");
    const categoryControl = createCategoryControl(block);
    categoryBadge.replaceWith(categoryControl);

    setupSettingsMenu(node, block, page);

    if (block.type === "text") {
      setupTextEditor(node, block);
    }

    if (block.type === "table") {
      const body = node.querySelector("tbody");
      renderTableRows(body, block);
      bindTableControls(node, block);
    }

    setupBlockDrag(node, block);
    if (block.type === "text") {
      setupBlockResize(node, block);
    }
    elements.blockLayer.appendChild(node);
    if (block.type === "table") {
      requestAnimationFrame(() => fitTableRowsToContent(node, block));
    }
  });
}

function setupTextEditor(node, block) {
  const editor = node.querySelector(".text-editor");
  const toolbar = node.querySelector(".text-format-toolbar");
  const toggleButton = node.querySelector(".text-format-toggle");
  const buttons = [...node.querySelectorAll(".text-format-button")];
  if (!editor || !toolbar) {
    return;
  }

  editor.innerHTML = getTextEditorHtml(block);

  const save = () => {
    block.contentHtml = sanitizeEditorHtml(editor.innerHTML);
    block.content = editor.innerText;
    persist();
  };

  const updateButtonStates = () => {
    buttons.forEach((button) => {
      const command = button.dataset.command;
      const value = button.dataset.value;
      let isActive = command && document.queryCommandState(command);
      if (command === "formatBlock" && value) {
        isActive = document.queryCommandValue(command).replace(/[<>]/g, "").toUpperCase() === value;
      }
      if (command === "removeFormat") {
        isActive = false;
      }
      button.classList.toggle("active", Boolean(isActive));
    });
  };

  const syncToolbarState = () => {
    const isOpen = uiState.openFormatToolbarBlockId === block.id;
    node.classList.toggle("formatting-open", isOpen);
    toolbar.hidden = !isOpen;
    if (toggleButton) {
      const label = isOpen ? t("hideFormatting") : t("showFormatting");
      toggleButton.classList.toggle("active", isOpen);
      toggleButton.setAttribute("aria-label", label);
      toggleButton.setAttribute("title", label);
      toggleButton.setAttribute("aria-expanded", String(isOpen));
    }
  };

  syncToolbarState();

  toggleButton?.addEventListener("pointerdown", (event) => event.stopPropagation());
  toggleButton?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    uiState.openFormatToolbarBlockId = uiState.openFormatToolbarBlockId === block.id ? null : block.id;
    syncToolbarState();
    if (uiState.openFormatToolbarBlockId === block.id) {
      updateButtonStates();
    }
  });

  buttons.forEach((button) => {
    button.addEventListener("pointerdown", (event) => event.preventDefault());
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const command = button.dataset.command;
      if (!command) {
        return;
      }

      editor.focus();
      document.execCommand(command, false, button.dataset.value || null);
      save();
      updateButtonStates();
    });
  });

  toolbar.addEventListener("pointerdown", (event) => event.stopPropagation());
  editor.addEventListener("pointerdown", (event) => event.stopPropagation());
  editor.addEventListener("input", save);
  editor.addEventListener("keyup", updateButtonStates);
  editor.addEventListener("mouseup", updateButtonStates);
  editor.addEventListener("focus", updateButtonStates);
  editor.addEventListener("paste", (event) => {
    event.preventDefault();
    const text = event.clipboardData?.getData("text/plain") || "";
    document.execCommand("insertText", false, text);
    save();
  });
}

function renderTableRows(body, block) {
  body.innerHTML = "";
  ensureTableSizing(block);
  const table = body.closest(".table-editor");
  renderTableColumns(table, block);

  block.cells.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    tr.className = "table-data-row";
    tr.style.height = `${block.rowHeights[rowIndex]}px`;

    row.forEach((value, cellIndex) => {
      const td = document.createElement("td");
      td.style.height = `${block.rowHeights[rowIndex]}px`;

      const wrapper = document.createElement("div");
      wrapper.className = "table-cell";

      const editor = document.createElement("textarea");
      editor.className = "table-cell-editor";
      editor.rows = 1;
      editor.value = value;
      editor.addEventListener("input", (event) => {
        block.cells[rowIndex][cellIndex] = event.target.value;
        fitTableRowToContent(tr, block, rowIndex);
        applyTableBlockDimensions(body.closest(".table-block"), block);
        persist();
      });
      editor.addEventListener("keydown", (event) => {
        handleTableCellKeydown(event, table, rowIndex, cellIndex);
      });
      editor.addEventListener("paste", (event) => {
        handleTableCellPaste(event, block, rowIndex, cellIndex);
      });
      editor.addEventListener("pointerdown", (event) => event.stopPropagation());

      const colHandle = document.createElement("button");
      colHandle.type = "button";
      colHandle.className = "col-resize-handle";
      colHandle.setAttribute("aria-label", t("resizeColumn"));

      const rowHandle = document.createElement("button");
      rowHandle.type = "button";
      rowHandle.className = "row-resize-handle";
      rowHandle.setAttribute("aria-label", t("resizeRow"));

      setupTableColumnResize(colHandle, table, block, cellIndex);
      setupTableRowResize(rowHandle, tr, block, rowIndex);

      wrapper.appendChild(editor);
      if (rowIndex === 0) {
        wrapper.appendChild(colHandle);
      }
      if (cellIndex === 0) {
        wrapper.appendChild(rowHandle);
      }
      td.appendChild(wrapper);
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });

  renderTableInsertOverlay(body.closest(".table-scroll"), block);
}

function renderTableInsertOverlay(tableWrap, block) {
  if (!tableWrap) {
    return;
  }

  tableWrap.querySelector(".table-insert-overlay")?.remove();

  const overlay = document.createElement("div");
  overlay.className = "table-insert-overlay";
  overlay.style.width = `${getTableWidth(block)}px`;
  overlay.style.height = `${getTableHeight(block)}px`;

  let top = 0;
  block.rowHeights.forEach((height, rowIndex) => {
    top += height;
    overlay.appendChild(createTableRowInsertControl(block, rowIndex + 1, top));
  });

  let left = 0;
  block.columnWidths.forEach((width, columnIndex) => {
    left += width;
    overlay.appendChild(createTableColumnInsertControl(block, columnIndex + 1, left));
  });

  tableWrap.appendChild(overlay);
}

function createTableRowInsertControl(block, insertIndex, top) {
  const zone = document.createElement("div");
  zone.className = "table-insert-row-zone";
  zone.style.top = `${top}px`;

  const line = document.createElement("span");
  line.className = "table-insert-line";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "table-insert-button";
  button.setAttribute("aria-label", t("insertRow"));
  button.title = t("insertRow");

  zone.append(line, button);
  setupTableBoundaryInteraction(zone, {
    axis: "row",
    block,
    insertIndex
  });
  return zone;
}

function createTableColumnInsertControl(block, insertIndex, left) {
  const zone = document.createElement("div");
  zone.className = "table-insert-column-zone";
  zone.style.left = `${left}px`;

  const line = document.createElement("span");
  line.className = "table-insert-line";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "table-insert-button";
  button.setAttribute("aria-label", t("insertColumn"));
  button.title = t("insertColumn");

  zone.append(line, button);
  setupTableBoundaryInteraction(zone, {
    axis: "column",
    block,
    insertIndex
  });
  return zone;
}

function setupTableBoundaryInteraction(zone, { axis, block, insertIndex }) {
  let pointerId = null;
  let startPosition = 0;
  let originSize = 0;
  let hasDragged = false;

  zone.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) {
      return;
    }

    ensureTableSizing(block);
    pointerId = event.pointerId;
    startPosition = axis === "row" ? event.clientY : event.clientX;
    originSize = axis === "row"
      ? block.rowHeights[insertIndex - 1] || TABLE_MIN_ROW_HEIGHT
      : block.columnWidths[insertIndex - 1] || TABLE_MIN_COLUMN_WIDTH;
    hasDragged = false;
    zone.classList.add("active");
    zone.classList.remove("resizing");
    zone.setPointerCapture(pointerId);
    event.preventDefault();
    event.stopPropagation();
  });

  zone.addEventListener("pointermove", (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    const currentPosition = axis === "row" ? event.clientY : event.clientX;
    const delta = normalizeDeltaByScale(currentPosition - startPosition);
    if (!hasDragged && Math.abs(delta) < 4) {
      return;
    }

    hasDragged = true;
    zone.classList.add("resizing");
    if (axis === "row") {
      resizeTableRowFromBoundary(zone, block, insertIndex - 1, originSize + delta);
    } else {
      resizeTableColumnFromBoundary(zone, block, insertIndex - 1, originSize + delta);
    }
    event.preventDefault();
    event.stopPropagation();
  });

  const finishInteraction = (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    zone.classList.remove("active");
    zone.classList.remove("resizing");
    zone.releasePointerCapture(pointerId);
    pointerId = null;

    if (!hasDragged) {
      if (axis === "row") {
        insertTableRow(block, insertIndex);
      } else {
        insertTableColumn(block, insertIndex);
      }
      render();
      return;
    }

    persist();
  };

  zone.addEventListener("pointerup", finishInteraction);
  zone.addEventListener("pointercancel", (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    zone.classList.remove("active");
    zone.classList.remove("resizing");
    zone.releasePointerCapture(pointerId);
    pointerId = null;
  });
}

function resizeTableRowFromBoundary(zone, block, rowIndex, nextSize) {
  const tableBlock = zone.closest(".table-block");
  const row = tableBlock?.querySelectorAll("tbody .table-data-row")[rowIndex];
  if (!tableBlock || !row) {
    return;
  }

  const nextHeight = Math.max(TABLE_MIN_ROW_HEIGHT, getTableRowContentHeight(row), nextSize);
  block.rowHeights[rowIndex] = nextHeight;
  row.style.height = `${nextHeight}px`;
  row.querySelectorAll("td").forEach((cell) => {
    cell.style.height = `${nextHeight}px`;
  });
  applyTableBlockDimensions(tableBlock, block);
  updateTableInsertOverlayPositions(tableBlock.querySelector(".table-insert-overlay"), block);
}

function resizeTableColumnFromBoundary(zone, block, columnIndex, nextSize) {
  const tableBlock = zone.closest(".table-block");
  const table = tableBlock?.querySelector(".table-editor");
  if (!tableBlock || !table) {
    return;
  }

  const nextWidth = Math.max(TABLE_MIN_COLUMN_WIDTH, nextSize);
  block.columnWidths[columnIndex] = nextWidth;
  table.style.width = `${getTableWidth(block)}px`;
  const col = table.querySelectorAll("col")[columnIndex];
  if (col) {
    col.style.width = `${nextWidth}px`;
  }
  fitTableRowsToContent(tableBlock, block);
  updateTableInsertOverlayPositions(tableBlock.querySelector(".table-insert-overlay"), block);
}

function updateTableInsertOverlayPositions(overlay, block) {
  if (!overlay || block.type !== "table") {
    return;
  }

  overlay.style.width = `${getTableWidth(block)}px`;
  overlay.style.height = `${getTableHeight(block)}px`;

  let top = 0;
  overlay.querySelectorAll(".table-insert-row-zone").forEach((zone, rowIndex) => {
    top += block.rowHeights[rowIndex] || 0;
    zone.style.top = `${top}px`;
  });

  let left = 0;
  overlay.querySelectorAll(".table-insert-column-zone").forEach((zone, columnIndex) => {
    left += block.columnWidths[columnIndex] || 0;
    zone.style.left = `${left}px`;
  });
}

function renderTableColumns(table, block) {
  if (!table) {
    return;
  }

  table.querySelector("colgroup")?.remove();
  table.style.width = `${getTableWidth(block)}px`;

  const colgroup = document.createElement("colgroup");
  block.columnWidths.forEach((width) => {
    const col = document.createElement("col");
    col.style.width = `${width}px`;
    colgroup.appendChild(col);
  });

  table.prepend(colgroup);
}

function syncTableBlockDimensions(block) {
  if (block.type !== "table") {
    return;
  }

  ensureTableSizing(block);
  block.width = getTableBlockWidth(block);
  block.height = getTableBlockHeight(block);
}

function applyTableBlockDimensions(node, block) {
  if (!node || block.type !== "table") {
    return;
  }

  syncTableBlockDimensions(block);
  node.style.width = `${block.width}px`;
  node.style.height = `${block.height}px`;
  fitTableBlockHeightToRenderedContent(node, block);
}

function fitTableBlockHeightToRenderedContent(node, block) {
  if (!node?.isConnected || block.type !== "table") {
    return;
  }

  const tableScroll = node.querySelector(".table-scroll");
  if (!tableScroll) {
    return;
  }

  const blockStyles = getComputedStyle(node);
  const paddingBottom = parseFloat(blockStyles.paddingBottom) || 0;
  const measuredHeight = Math.ceil(tableScroll.offsetTop + tableScroll.offsetHeight + paddingBottom);

  if (measuredHeight > 0 && measuredHeight !== block.height) {
    block.height = measuredHeight;
    node.style.height = `${measuredHeight}px`;
  }
}

function fitTableRowsToContent(node, block) {
  if (!node || block.type !== "table") {
    return;
  }

  node.querySelectorAll("tbody .table-data-row").forEach((row, rowIndex) => {
    fitTableRowToContent(row, block, rowIndex);
  });
  applyTableBlockDimensions(node, block);
  updateTableInsertOverlayPositions(node.querySelector(".table-insert-overlay"), block);
}

function fitTableRowToContent(row, block, rowIndex) {
  if (!row || block.type !== "table") {
    return;
  }

  const contentHeight = getTableRowContentHeight(row);
  const nextHeight = Math.max(block.rowHeights[rowIndex] || TABLE_MIN_ROW_HEIGHT, contentHeight);

  block.rowHeights[rowIndex] = nextHeight;
  row.style.height = `${nextHeight}px`;
  row.querySelectorAll("td").forEach((cell) => {
    cell.style.height = `${nextHeight}px`;
  });
}

function getTableRowContentHeight(row) {
  return [...row.querySelectorAll(".table-cell-editor")]
    .reduce((height, editor) => Math.max(height, getCellEditorContentHeight(editor)), TABLE_MIN_ROW_HEIGHT);
}

function getCellEditorContentHeight(editor) {
  const previousHeight = editor.style.height;
  editor.style.height = "auto";
  const height = editor.scrollHeight + 2;
  editor.style.height = previousHeight;
  return height;
}

function handleTableCellKeydown(event, table, rowIndex, cellIndex) {
  if (event.key !== "Tab") {
    return;
  }

  event.preventDefault();
  focusRelativeTableCell(table, rowIndex, cellIndex, event.shiftKey ? -1 : 1);
}

function handleTableCellPaste(event, block, startRowIndex, startCellIndex) {
  const text = event.clipboardData?.getData("text/plain") || "";
  if (!text.includes("\t")) {
    return;
  }

  event.preventDefault();
  ensureTableSizing(block);

  const pastedRows = text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n");

  if (pastedRows.at(-1) === "") {
    pastedRows.pop();
  }

  const grid = pastedRows.map((row) => row.split("\t"));
  const targetRowCount = startRowIndex + grid.length;
  const targetColumnCount = startCellIndex + grid.reduce((count, row) => Math.max(count, row.length), 0);

  while (block.cells.length < targetRowCount) {
    addTableRow(block);
  }

  while ((block.cells[0]?.length || 0) < targetColumnCount) {
    addTableColumn(block);
  }

  grid.forEach((row, rowOffset) => {
    row.forEach((value, cellOffset) => {
      block.cells[startRowIndex + rowOffset][startCellIndex + cellOffset] = value;
    });
  });

  ensureTableSizing(block);
  persist();
  render();
}

function focusRelativeTableCell(table, rowIndex, cellIndex, direction) {
  if (!table) {
    return;
  }

  const rows = [...table.querySelectorAll("tbody .table-data-row")];
  const columnCount = rows[0]?.querySelectorAll(".table-cell-editor").length || 0;
  const totalCells = rows.length * columnCount;
  if (totalCells === 0) {
    return;
  }

  const currentIndex = rowIndex * columnCount + cellIndex;
  const nextIndex = (currentIndex + direction + totalCells) % totalCells;
  const nextRow = Math.floor(nextIndex / columnCount);
  const nextColumn = nextIndex % columnCount;
  rows[nextRow]?.querySelectorAll(".table-cell-editor")[nextColumn]?.focus();
}

function createNotebook(anchor = elements.addNotebookButton) {
  showTextPopover(anchor, {
    title: t("newNotebook"),
    defaultValue: `${t("newNotebookDefault")} ${state.notebooks.length + 1}`,
    confirmLabel: t("create"),
    onSubmit: createNotebookWithName
  });
}

function createNotebookWithName(name) {
  const notebook = {
    id: crypto.randomUUID(),
    name: name.trim(),
    emoji: getDefaultNotebookEmoji(state.notebooks.length),
    pages: [
      {
        id: crypto.randomUUID(),
        title: t("newPage"),
        blocks: []
      }
    ]
  };

  state.notebooks.push(notebook);
  state.selectedNotebookId = notebook.id;
  state.selectedPageId = notebook.pages[0].id;
  selectItem("notebook", notebook.id);
  uiState.expandedNotebookIds.add(notebook.id);
  uiState.expandedPageIds.add(notebook.pages[0].id);
  render();
}

function createPage(notebookId = state.selectedNotebookId, anchor = elements.addPageButton || elements.addNotebookButton, options = {}) {
  const notebook = state.notebooks.find((item) => item.id === notebookId) || null;
  if (!notebook) {
    return;
  }

  showTextPopover(anchor, {
    title: t("newPage"),
    defaultValue: `${t("newPageDefault")} ${notebook.pages.length + 1}`,
    confirmLabel: t("create"),
    keepCollapsedPageMenu: options.keepCollapsedPageMenu,
    onSubmit: (title) => createPageWithTitle(notebook.id, title, options)
  });
}

function createPageWithTitle(notebookId, title, options = {}) {
  const notebook = state.notebooks.find((item) => item.id === notebookId) || null;
  if (!notebook) {
    return;
  }

  const page = {
    id: crypto.randomUUID(),
    title: title.trim(),
    blocks: []
  };

  notebook.pages.push(page);
  state.selectedNotebookId = notebook.id;
  state.selectedPageId = page.id;
  selectItem("page", page.id);
  uiState.expandedNotebookIds.add(notebook.id);
  if (options.keepCollapsedPageMenu) {
    renderKeepingCollapsedPageMenu(notebook.id);
    return;
  }

  render();
}

function renameNotebook(id) {
  const notebook = state.notebooks.find((item) => item.id === id);
  if (!notebook) {
    return;
  }

  uiState.editingNotebookId = id;
  uiState.editingPageId = null;
  uiState.editingBlockId = null;
  render();
  requestAnimationFrame(() => {
    const input = document.querySelector(`[data-notebook-rename-input="${CSS.escape(id)}"]`);
    input?.focus();
    input?.select();
  });
}

function changeNotebookEmoji(id, anchor = elements.notebookList) {
  const notebook = state.notebooks.find((item) => item.id === id);
  if (!notebook) {
    return;
  }

  showTextPopover(anchor, {
    title: t("notebookIcon"),
    defaultValue: notebook.emoji || getDefaultNotebookEmoji(0),
    confirmLabel: t("save"),
    width: 220,
    onSubmit: (emoji) => {
      notebook.emoji = normalizeNotebookEmoji(emoji);
      render();
    }
  });
}

function deleteNotebook(id, anchor = elements.notebookList, options = {}) {
  const notebookIndex = state.notebooks.findIndex((item) => item.id === id);
  if (notebookIndex === -1) {
    return false;
  }

  if (state.notebooks.length === 1) {
    showNoticePopover(anchor, {
      title: t("notebookRequiredTitle"),
      message: t("notebookRequiredMessage")
    });
    return true;
  }

  const notebook = state.notebooks[notebookIndex];
  if (!options.confirmed) {
    showConfirmPopover(anchor, {
      title: t("deleteNotebookTitle"),
      message: t("deleteNotebookMessage", notebook.name),
      confirmLabel: t("deleteConfirm"),
      onConfirm: () => deleteNotebook(id, anchor, { confirmed: true })
    });
    return true;
  }

  state.notebooks.splice(notebookIndex, 1);
  if (isSelectedItem("notebook", id) || isSelectedInsideNotebook(notebook)) {
    uiState.selectedItem = null;
  }
  uiState.expandedNotebookIds.delete(id);
  notebook.pages.forEach((page) => uiState.expandedPageIds.delete(page.id));

  if (state.selectedNotebookId === id) {
    const nextNotebook = state.notebooks[notebookIndex] || state.notebooks[notebookIndex - 1] || state.notebooks[0] || null;
    state.selectedNotebookId = nextNotebook?.id || null;
    state.selectedPageId = nextNotebook?.pages[0]?.id || null;
    if (nextNotebook) {
      uiState.expandedNotebookIds.add(nextNotebook.id);
      if (nextNotebook.pages[0]) {
        uiState.expandedPageIds.add(nextNotebook.pages[0].id);
      }
    }
  }

  render();
  return true;
}

function deletePage(id, anchor = elements.notebookList, options = {}) {
  const location = findPageLocation(id);
  if (!location) {
    return false;
  }

  const { notebook, page, pageIndex } = location;
  if (notebook.pages.length <= 1) {
    showNoticePopover(anchor, {
      title: t("pageRequiredTitle"),
      message: t("pageRequiredMessage"),
      keepCollapsedPageMenu: options.keepCollapsedPageMenu
    });
    return true;
  }

  if (!options.confirmed) {
    showConfirmPopover(anchor, {
      title: t("deletePageTitle"),
      message: t("deletePageMessage", page.title),
      confirmLabel: t("deleteConfirm"),
      keepCollapsedPageMenu: options.keepCollapsedPageMenu,
      onConfirm: () => deletePage(id, anchor, {
        confirmed: true,
        keepCollapsedPageMenu: options.keepCollapsedPageMenu
      })
    });
    return true;
  }

  notebook.pages.splice(pageIndex, 1);
  uiState.expandedPageIds.delete(id);
  if (isSelectedItem("page", id) || isSelectedInsidePage(page)) {
    uiState.selectedItem = null;
  }

  if (state.selectedPageId === id) {
    const nextPage = notebook.pages[pageIndex] || notebook.pages[pageIndex - 1] || notebook.pages[0] || null;
    state.selectedNotebookId = notebook.id;
    state.selectedPageId = nextPage?.id || null;
    if (nextPage) {
      uiState.expandedPageIds.add(nextPage.id);
    }
  }

  if (options.keepCollapsedPageMenu) {
    renderKeepingCollapsedPageMenu(notebook.id);
    return true;
  }

  render();
  return true;
}

function deleteBlock(id, options = {}) {
  const location = findBlockLocation(id);
  if (!location) {
    return false;
  }

  if (!options.confirmed) {
    const title = getBlockTitle(location.block) || getBlockListLabel(location.block, location.blockIndex);
    showConfirmPopover(options.anchor || getSelectedItemAnchor({ type: "block", id }), {
      title: t("deleteNoteTitle"),
      message: t("deleteNoteMessage", title),
      confirmLabel: t("deleteConfirm"),
      onConfirm: () => deleteBlock(id, { ...options, confirmed: true })
    });
    return true;
  }

  location.page.blocks.splice(location.blockIndex, 1);
  if (isSelectedItem("block", id)) {
    uiState.selectedItem = null;
  }
  uiState.openMenuBlockId = null;
  uiState.blockMenuAnchor = null;
  uiState.openBlockListMenuId = null;
  uiState.blockListMenuAnchor = null;
  if (uiState.openFormatToolbarBlockId === id) {
    uiState.openFormatToolbarBlockId = null;
  }
  options.onDeleted?.();
  persist();

  if (options.shouldRender !== false) {
    render();
  }

  return true;
}

function findPageLocation(id) {
  for (const notebook of state.notebooks) {
    const pageIndex = notebook.pages.findIndex((page) => page.id === id);
    if (pageIndex !== -1) {
      return { notebook, page: notebook.pages[pageIndex], pageIndex };
    }
  }

  return null;
}

function findBlockLocation(id) {
  for (const notebook of state.notebooks) {
    for (const page of notebook.pages) {
      const blockIndex = page.blocks.findIndex((block) => block.id === id);
      if (blockIndex !== -1) {
        return { notebook, page, block: page.blocks[blockIndex], blockIndex };
      }
    }
  }

  return null;
}

function isSelectedInsideNotebook(notebook) {
  const selected = uiState.selectedItem;
  if (!selected || selected.type !== "page" && selected.type !== "block") {
    return false;
  }

  return notebook.pages.some((page) => (
    selected.type === "page"
      ? page.id === selected.id
      : page.blocks.some((block) => block.id === selected.id)
  ));
}

function isSelectedInsidePage(page) {
  const selected = uiState.selectedItem;
  if (!selected || selected.type !== "block") {
    return false;
  }

  return page.blocks.some((block) => block.id === selected.id);
}

function renamePage(id) {
  const location = findPageLocation(id);
  if (!location) {
    return;
  }

  state.selectedNotebookId = location.notebook.id;
  state.selectedPageId = location.page.id;
  selectItem("page", id);
  uiState.expandedNotebookIds.add(location.notebook.id);
  uiState.editingNotebookId = null;
  uiState.editingPageId = id;
  uiState.editingBlockId = null;
  render();
  requestAnimationFrame(() => {
    const input = document.querySelector(`[data-page-rename-input="${CSS.escape(id)}"]`);
    input?.focus();
    input?.select();
  });
}

function renameBlock(id) {
  const location = findBlockLocation(id);
  if (!location) {
    return;
  }

  state.selectedNotebookId = location.notebook.id;
  state.selectedPageId = location.page.id;
  selectItem("block", id);
  uiState.expandedNotebookIds.add(location.notebook.id);
  uiState.expandedPageIds.add(location.page.id);
  uiState.editingNotebookId = null;
  uiState.editingPageId = null;
  uiState.editingBlockId = id;
  render();
  requestAnimationFrame(() => {
    const input = document.querySelector(`[data-block-rename-input="${CSS.escape(id)}"]`);
    input?.focus();
    input?.select();
  });
}

function createBlockInPage(notebookId, pageId, type, position = null) {
  const notebook = state.notebooks.find((item) => item.id === notebookId) || null;
  const page = notebook?.pages.find((item) => item.id === pageId) || null;
  if (!notebook || !page) {
    return;
  }

  state.selectedNotebookId = notebook.id;
  state.selectedPageId = page.id;
  uiState.expandedNotebookIds.add(notebook.id);
  uiState.expandedPageIds.add(page.id);
  uiState.openNotebookMenuId = null;
  uiState.notebookMenuAnchor = null;
  uiState.openPageMenuId = null;
  uiState.pageMenuAnchor = null;
  uiState.openBlockListMenuId = null;
  uiState.blockListMenuAnchor = null;
  createBlock(type, position);
}

function createBlock(type, position = null) {
  const page = getSelectedPage();
  if (!page) {
    return;
  }

  const offset = page.blocks.length * 60;
  const block = {
    id: crypto.randomUUID(),
    type,
    title: "",
    category: "",
    color: "default",
    x: position?.x ?? 2500 + offset,
    y: position?.y ?? 2500 + offset,
    width: type === "table" ? 480 : TEXT_BLOCK_DEFAULT_WIDTH,
    height: type === "table" ? 260 : TEXT_BLOCK_DEFAULT_HEIGHT
  };

  if (type === "text") {
    block.content = "";
    block.contentHtml = "";
  } else {
    block.cells = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    block.hasHeader = true;
    block.columnWidths = [140, 140, 140];
    block.rowHeights = [48, 48, 48];
  }

  page.blocks.push(block);
  selectItem("block", block.id);
  render();
  focusBlock(block.id, {
    smooth: true,
    scale: Math.max(state.camera.scale || 1, 1.25),
    duration: 520
  });
}

function getCategoryLabel(category = "") {
  return category.trim();
}

function getCategoryColorKey(category = "") {
  const label = getCategoryLabel(category);
  const savedColor = state.categoryColors?.[getCategoryColorStorageKey(label)];
  if (isCategoryColorKey(savedColor)) {
    return savedColor;
  }

  if (!label) {
    return "default";
  }

  const hash = [...label.toLocaleLowerCase()].reduce((total, char) => {
    return ((total << 5) - total + char.codePointAt(0)) | 0;
  }, 0);

  const palette = CATEGORY_COLOR_KEYS.filter((key) => key !== "default");
  return palette[Math.abs(hash) % palette.length];
}

function getCategoryColorStorageKey(category = "") {
  return getCategoryLabel(category) || UNCATEGORIZED_CATEGORY_KEY;
}

function isCategoryColorKey(colorKey) {
  return CATEGORY_COLOR_KEYS.includes(colorKey);
}

function getCategoryColorLabel(colorKey) {
  const labels = {
    default: "defaultColor",
    peach: "peachColor",
    sage: "sageColor",
    sky: "skyColor",
    rose: "roseColor",
    gold: "goldColor",
    lavender: "lavenderColor",
    mint: "mintColor",
    sand: "sandColor"
  };
  return t(labels[colorKey] || "defaultColor");
}

function setCategoryColor(category, colorKey) {
  if (!isCategoryColorKey(colorKey)) {
    return;
  }

  state.categoryColors[getCategoryColorStorageKey(category)] = colorKey;
}

function updateBlockCategory(block, nextCategory) {
  const previousKey = getCategoryColorStorageKey(block.category || "");
  const previousColor = state.categoryColors?.[previousKey];
  block.category = nextCategory.trim();
  const nextKey = getCategoryColorStorageKey(block.category || "");
  if (previousKey !== nextKey && isCategoryColorKey(previousColor) && !state.categoryColors?.[nextKey]) {
    state.categoryColors[nextKey] = previousColor;
  }
}

function getNotebookCategories() {
  const notebook = getSelectedNotebook();
  const categories = new Set();

  notebook?.pages.forEach((page) => {
    page.blocks.forEach((block) => {
      const category = getCategoryLabel(block.category || "");
      if (category) {
        categories.add(category);
      }
    });
  });

  return [...categories].sort((a, b) => a.localeCompare(b, "pt-BR", { sensitivity: "base" }));
}

function createCategoryControl(block) {
  const wrapper = document.createElement("div");
  wrapper.className = "note-category-control";

  if (uiState.editingCategoryBlockId === block.id) {
    wrapper.appendChild(createCategoryInput(block));
    return wrapper;
  }

  const labelButton = document.createElement("button");
  labelButton.type = "button";
  labelButton.className = "note-category-label";
  const categoryLabel = getCategoryLabel(block.category || "");
  const colorKey = getCategoryColorKey(categoryLabel);
  wrapper.dataset.categoryColor = colorKey;
  labelButton.dataset.categoryColor = colorKey;

  const colorButton = document.createElement("button");
  colorButton.type = "button";
  colorButton.className = "category-color-button";
  colorButton.setAttribute("aria-label", t("chooseCategoryColor"));
  colorButton.title = t("chooseCategoryColor");
  colorButton.dataset.categoryColor = colorKey;

  const colorDot = document.createElement("span");
  colorDot.className = "category-color-dot";
  colorDot.dataset.categoryColor = colorKey;
  colorDot.setAttribute("aria-hidden", "true");
  colorButton.appendChild(colorDot);

  const labelText = document.createElement("span");
  labelText.className = "note-category-text";
  labelText.textContent = categoryLabel || t("uncategorized");

  labelButton.appendChild(labelText);
  colorButton.addEventListener("pointerdown", (event) => event.stopPropagation());
  colorButton.addEventListener("click", (event) => {
    event.stopPropagation();
    uiState.editingCategoryBlockId = null;
    uiState.openCategoryMenuBlockId = null;
    uiState.openCategoryColorBlockId = uiState.openCategoryColorBlockId === block.id ? null : block.id;
    renderBlocks();
  });

  let categoryClickTimer = null;
  labelButton.addEventListener("pointerdown", (event) => event.stopPropagation());
  labelButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.detail > 1) {
      return;
    }

    window.clearTimeout(categoryClickTimer);
    categoryClickTimer = window.setTimeout(() => {
      uiState.editingCategoryBlockId = null;
      uiState.openCategoryColorBlockId = null;
      uiState.openCategoryMenuBlockId = uiState.openCategoryMenuBlockId === block.id ? null : block.id;
      renderBlocks();
    }, 180);
  });
  labelButton.addEventListener("dblclick", (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.clearTimeout(categoryClickTimer);
    uiState.editingCategoryBlockId = block.id;
    uiState.openCategoryMenuBlockId = null;
    uiState.openCategoryColorBlockId = null;
    renderBlocks();
    requestAnimationFrame(() => {
      const input = document.querySelector(`[data-category-input="${CSS.escape(block.id)}"]`);
      input?.focus();
      input?.select();
    });
  });

  wrapper.append(colorButton, labelButton);

  if (uiState.openCategoryMenuBlockId === block.id) {
    wrapper.appendChild(createCategoryDropdown(block));
  }

  if (uiState.openCategoryColorBlockId === block.id) {
    wrapper.appendChild(createCategoryColorMenu(block));
  }

  return wrapper;
}

function createCategoryInput(block) {
  const input = document.createElement("input");
  input.className = "note-category-input";
  input.type = "text";
  input.value = getCategoryLabel(block.category || "");
  input.placeholder = t("uncategorized");
  input.dataset.categoryInput = block.id;
  let isFinished = false;

  const finish = (shouldSave) => {
    if (isFinished) {
      return;
    }

    isFinished = true;
    if (shouldSave) {
      updateBlockCategory(block, input.value);
      persist();
      renderNotebookList();
    }
    uiState.editingCategoryBlockId = null;
    renderBlocks();
  };

  input.addEventListener("pointerdown", (event) => event.stopPropagation());
  input.addEventListener("click", (event) => event.stopPropagation());
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      finish(true);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      finish(false);
    }
  });
  input.addEventListener("blur", () => finish(true));

  return input;
}

function createCategoryDropdown(block) {
  const dropdown = document.createElement("div");
  dropdown.className = "note-category-dropdown";
  const categories = getNotebookCategories();

  if (categories.length === 0) {
    const empty = document.createElement("span");
    empty.className = "note-category-empty";
    empty.textContent = t("noCategory");
    dropdown.appendChild(empty);
    return dropdown;
  }

  categories.forEach((category) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = `note-category-option ${getCategoryLabel(block.category || "") === category ? "active" : ""}`;
    const colorKey = getCategoryColorKey(category);
    option.dataset.categoryColor = colorKey;

    const colorDot = document.createElement("span");
    colorDot.className = "category-color-dot";
    colorDot.dataset.categoryColor = colorKey;
    colorDot.setAttribute("aria-hidden", "true");

    const optionText = document.createElement("span");
    optionText.textContent = category;

    option.append(colorDot, optionText);
    option.addEventListener("pointerdown", (event) => event.stopPropagation());
    option.addEventListener("click", (event) => {
      event.stopPropagation();
      updateBlockCategory(block, category);
      uiState.openCategoryMenuBlockId = null;
      uiState.openCategoryColorBlockId = null;
      persist();
      renderBlocks();
    });
    dropdown.appendChild(option);
  });

  return dropdown;
}

function createCategoryColorMenu(block) {
  const menu = document.createElement("div");
  menu.className = "note-category-color-menu";
  const category = getCategoryLabel(block.category || "");
  const activeColor = getCategoryColorKey(category);

  CATEGORY_COLOR_KEYS.forEach((colorKey) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `category-color-option ${activeColor === colorKey ? "active" : ""}`;
    button.dataset.categoryColor = colorKey;
    button.setAttribute("aria-label", getCategoryColorLabel(colorKey));
    button.title = getCategoryColorLabel(colorKey);

    const colorDot = document.createElement("span");
    colorDot.className = "category-color-dot";
    colorDot.dataset.categoryColor = colorKey;
    colorDot.setAttribute("aria-hidden", "true");

    button.appendChild(colorDot);
    button.addEventListener("pointerdown", (event) => event.stopPropagation());
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      setCategoryColor(category, colorKey);
      uiState.openCategoryColorBlockId = null;
      persist();
      renderBlocks();
    });

    menu.appendChild(button);
  });

  return menu;
}

function bindTableControls(node, block) {
  const controls = [
    [".add-row-button", () => addTableRow(block)],
    [".remove-row-button", () => removeTableRow(block)],
    [".add-column-button", () => addTableColumn(block)],
    [".remove-column-button", () => removeTableColumn(block)],
    [".clear-table-button", () => clearTable(block)]
  ];

  controls.forEach(([selector, action]) => {
    const button = node.querySelector(selector);
    if (!button) {
      return;
    }

    button.addEventListener("pointerdown", (event) => event.stopPropagation());
    button.addEventListener("click", () => {
      action();
      render();
    });
  });

  const headerButton = node.querySelector(".toggle-header-button");
  if (headerButton) {
    headerButton.textContent = block.hasHeader === false ? t("enableHeader") : t("hideHeader");
    headerButton.addEventListener("pointerdown", (event) => event.stopPropagation());
    headerButton.addEventListener("click", () => {
      block.hasHeader = block.hasHeader === false;
      persist();
      renderBlocks();
    });
  }
}

function setupSettingsMenu(node, block, page) {
  const toggleButton = node.querySelector(".settings-toggle-button");
  const menu = node.querySelector(".settings-menu");
  const changeCategoryButton = node.querySelector(".change-category-button");
  const copyButton = node.querySelector(".copy-block-button");
  const pasteButton = node.querySelector(".paste-block-button");

  if (!toggleButton || !menu) {
    return;
  }

  if (uiState.openMenuBlockId === block.id) {
    menu.removeAttribute("hidden");
    toggleButton.classList.add("active");
    if (uiState.blockMenuAnchor?.blockId === block.id) {
      menu.style.setProperty("--menu-x", `${uiState.blockMenuAnchor.x}px`);
      menu.style.setProperty("--menu-y", `${uiState.blockMenuAnchor.y}px`);
    } else {
      const buttonRect = toggleButton.getBoundingClientRect();
      const blockRect = node.getBoundingClientRect();
      const scale = state.camera.scale || 1;
      menu.style.setProperty("--menu-x", `${(buttonRect.right - blockRect.left + 8) / scale}px`);
      menu.style.setProperty("--menu-y", `${(buttonRect.top - blockRect.top) / scale}px`);
    }
  } else {
    menu.setAttribute("hidden", "");
    toggleButton.classList.remove("active");
    menu.style.removeProperty("--menu-x");
    menu.style.removeProperty("--menu-y");
  }

  toggleButton.addEventListener("pointerdown", (event) => event.stopPropagation());
  toggleButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (uiState.openMenuBlockId === block.id) {
      uiState.openMenuBlockId = null;
      uiState.blockMenuAnchor = null;
    } else {
      const blockRect = node.getBoundingClientRect();
      const scale = state.camera.scale || 1;
      uiState.openMenuBlockId = block.id;
      uiState.blockMenuAnchor = {
        blockId: block.id,
        x: (event.clientX - blockRect.left) / scale,
        y: (event.clientY - blockRect.top) / scale
      };
      uiState.openNotebookMenuId = null;
      uiState.notebookMenuAnchor = null;
      uiState.openPageMenuId = null;
      uiState.pageMenuAnchor = null;
      uiState.openBlockListMenuId = null;
      uiState.blockListMenuAnchor = null;
    }
    renderBlocks();
  });

  menu.addEventListener("pointerdown", (event) => event.stopPropagation());
  menu.addEventListener("click", (event) => event.stopPropagation());

  changeCategoryButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    uiState.openMenuBlockId = null;
    uiState.blockMenuAnchor = null;
    uiState.openCategoryMenuBlockId = null;
    uiState.editingCategoryBlockId = block.id;
    menu.setAttribute("hidden", "");
    toggleButton.classList.remove("active");
    renderBlocks();
    requestAnimationFrame(() => {
      const input = document.querySelector(`[data-category-input="${CSS.escape(block.id)}"]`);
      input?.focus();
      input?.select();
    });
  });

  copyButton?.addEventListener("click", () => {
    uiState.clipboardBlock = cloneBlock(block);
    uiState.openMenuBlockId = null;
    uiState.blockMenuAnchor = null;
    renderBlocks();
  });

  pasteButton?.addEventListener("click", () => {
    if (!uiState.clipboardBlock) {
      return;
    }

    const pasted = cloneBlock(uiState.clipboardBlock);
    pasted.id = crypto.randomUUID();
    pasted.x = block.x + 56;
    pasted.y = block.y + 56;
    page.blocks.push(pasted);
    selectItem("block", pasted.id);
    uiState.openMenuBlockId = null;
    uiState.blockMenuAnchor = null;
    render();
  });

}

function addTableRow(block) {
  ensureTableSizing(block);
  insertTableRow(block, block.cells.length);
}

function insertTableRow(block, index) {
  ensureTableSizing(block);
  const columnCount = block.cells[0]?.length || 1;
  const insertIndex = Math.max(0, Math.min(index, block.cells.length));
  block.cells.splice(insertIndex, 0, Array.from({ length: columnCount }, () => ""));
  block.rowHeights.splice(insertIndex, 0, 48);
  ensureTableSizing(block);
}

function removeTableRow(block) {
  ensureTableSizing(block);
  if (block.cells.length <= 1) {
    return;
  }

  block.cells.pop();
  block.rowHeights.pop();
  ensureTableSizing(block);
}

function addTableColumn(block) {
  ensureTableSizing(block);
  insertTableColumn(block, block.cells[0]?.length || 0);
}

function insertTableColumn(block, index) {
  ensureTableSizing(block);
  const columnCount = block.cells[0]?.length || 0;
  const insertIndex = Math.max(0, Math.min(index, columnCount));
  block.cells.forEach((row) => row.splice(insertIndex, 0, ""));
  block.columnWidths.splice(insertIndex, 0, 140);
  ensureTableSizing(block);
}

function removeTableColumn(block) {
  ensureTableSizing(block);
  const columnCount = block.cells[0]?.length || 1;
  if (columnCount <= 1) {
    return;
  }

  block.cells.forEach((row) => row.pop());
  block.columnWidths.pop();
  ensureTableSizing(block);
}

function clearTable(block) {
  ensureTableSizing(block);
  block.cells = block.cells.map((row) => row.map(() => ""));
  block.rowHeights = block.rowHeights.map(() => 48);
  ensureTableSizing(block);
}

function setupCanvasPanning() {
  let pointerId = null;
  let isMousePanning = false;
  let startX = 0;
  let startY = 0;
  let originX = 0;
  let originY = 0;

  const canStartPan = (event) => {
    if (event.button !== 0 || !(event.target instanceof Element)) {
      return false;
    }

    return !event.target.closest(".block")
      && !event.target.closest(".zoom-controls")
      && !event.target.closest(".sidebar");
  };

  const startPan = (clientX, clientY) => {
    stopCameraAnimation();
    uiState.openMenuBlockId = null;
    uiState.blockMenuAnchor = null;
    startX = clientX;
    startY = clientY;
    originX = state.camera.x;
    originY = state.camera.y;
    elements.canvasViewport.classList.add("is-panning");
    elements.canvasStage.classList.add("panning");
  };

  const movePan = (clientX, clientY) => {
    stopCameraAnimation();
    state.camera.x = originX + (clientX - startX);
    state.camera.y = originY + (clientY - startY);
    updateCamera();
  };

  const stopPan = () => {
    elements.canvasStage.classList.remove("panning");
    elements.canvasViewport.classList.remove("is-panning");
    persist();
  };

  elements.canvasViewport.addEventListener("mousedown", (event) => {
    if (!canStartPan(event)) {
      return;
    }

    isMousePanning = true;
    startPan(event.clientX, event.clientY);
    event.preventDefault();
  }, true);

  window.addEventListener("mousemove", (event) => {
    if (!isMousePanning) {
      return;
    }

    movePan(event.clientX, event.clientY);
  });

  window.addEventListener("mouseup", () => {
    if (!isMousePanning) {
      return;
    }

    isMousePanning = false;
    stopPan();
  });

  elements.canvasViewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" || !canStartPan(event)) {
      return;
    }

    pointerId = event.pointerId;
    startPan(event.clientX, event.clientY);
    event.preventDefault();
  });

  window.addEventListener("pointermove", (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    movePan(event.clientX, event.clientY);
  });

  const stopPanning = (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    pointerId = null;
    stopPan();
  };

  window.addEventListener("pointerup", stopPanning);
  window.addEventListener("pointercancel", stopPanning);
}

function setupCanvasContextMenu() {
  elements.canvasViewport.addEventListener("contextmenu", (event) => {
    if (!(event.target instanceof Element)
      || event.target.closest(".block")
      || event.target.closest(".sidebar")
      || event.target.closest(".zoom-controls")
      || event.target.closest(".canvas-context-menu")) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    closeOpenMenus();
    uiState.canvasMenuAnchor = getCanvasMenuAnchor(event);
    renderCanvasContextMenu();
  });
}

function getCanvasMenuAnchor(event) {
  const layerRect = elements.blockLayer.getBoundingClientRect();
  const scale = state.camera.scale || 1;
  const menuWidth = 148;
  const menuHeight = uiState.clipboardBlock ? 158 : 122;
  const margin = 8;

  return {
    left: Math.max(margin, Math.min(window.innerWidth - menuWidth - margin, event.clientX)),
    top: Math.max(margin, Math.min(window.innerHeight - menuHeight - margin, event.clientY)),
    canvasX: (event.clientX - layerRect.left) / scale,
    canvasY: (event.clientY - layerRect.top) / scale
  };
}

function renderCanvasContextMenu() {
  removeCanvasContextMenu();

  if (!uiState.canvasMenuAnchor) {
    return;
  }

  const menu = document.createElement("div");
  menu.className = "canvas-context-menu";
  menu.style.setProperty("--canvas-menu-left", `${uiState.canvasMenuAnchor.left}px`);
  menu.style.setProperty("--canvas-menu-top", `${uiState.canvasMenuAnchor.top}px`);
  menu.addEventListener("pointerdown", (event) => event.stopPropagation());
  menu.addEventListener("click", (event) => event.stopPropagation());

  const addTextButton = createCanvasMenuButton(t("newNote"), () => {
    createBlockAtCanvasMenu("text");
  });
  const addTableButton = createCanvasMenuButton(t("newTable"), () => {
    createBlockAtCanvasMenu("table");
  });
  menu.append(addTextButton, addTableButton);

  if (uiState.clipboardBlock) {
    const pasteButton = createCanvasMenuButton(t("pasteCopy"), () => {
      pasteClipboardAtCanvasMenu();
    });
    menu.appendChild(pasteButton);
  }

  const fitButton = createCanvasMenuButton(t("center"), () => {
    uiState.canvasMenuAnchor = null;
    removeCanvasContextMenu();
    fitViewToBlocks();
  });
  menu.appendChild(fitButton);
  document.body.appendChild(menu);
}

function createCanvasMenuButton(label, action) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "ghost menu-action";
  button.textContent = label;
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    action();
  });
  return button;
}

function createBlockAtCanvasMenu(type) {
  const anchor = uiState.canvasMenuAnchor;
  if (!anchor) {
    return;
  }

  uiState.canvasMenuAnchor = null;
  removeCanvasContextMenu();
  createBlock(type, { x: anchor.canvasX, y: anchor.canvasY });
}

function pasteClipboardAtCanvasMenu() {
  const page = getSelectedPage();
  const anchor = uiState.canvasMenuAnchor;
  if (!page || !anchor || !uiState.clipboardBlock) {
    return;
  }

  const pasted = cloneBlock(uiState.clipboardBlock);
  pasted.id = crypto.randomUUID();
  pasted.x = anchor.canvasX;
  pasted.y = anchor.canvasY;
  page.blocks.push(pasted);
  selectItem("block", pasted.id);
  uiState.canvasMenuAnchor = null;
  removeCanvasContextMenu();
  render();
}

function removeCanvasContextMenu() {
  document.querySelectorAll(".canvas-context-menu").forEach((menu) => menu.remove());
}

function setupBlockDrag(node, block) {
  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let originX = 0;
  let originY = 0;
  let hasMoved = false;

  node.addEventListener("pointerdown", (event) => {
    if (!canStartBlockDrag(event)) {
      return;
    }

    closeOpenMenus();
    node.querySelector(".settings-menu")?.setAttribute("hidden", "");
    node.querySelector(".settings-toggle-button")?.classList.remove("active");
    renderNotebookList();
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    originX = block.x;
    originY = block.y;
    hasMoved = false;
    node.classList.add("dragging");
    node.setPointerCapture(pointerId);
    event.preventDefault();
    event.stopPropagation();
  });

  node.addEventListener("pointermove", (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    const deltaX = normalizeDeltaByScale(event.clientX - startX);
    const deltaY = normalizeDeltaByScale(event.clientY - startY);
    if (Math.hypot(event.clientX - startX, event.clientY - startY) > 4) {
      hasMoved = true;
    }

    if (!hasMoved) {
      return;
    }

    block.x = originX + deltaX;
    block.y = originY + deltaY;
    node.style.left = `${block.x}px`;
    node.style.top = `${block.y}px`;
  });

  const stopDragging = (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    node.classList.remove("dragging");
    node.releasePointerCapture(pointerId);
    pointerId = null;
    if (event.type === "pointerup" && hasMoved) {
      node.dataset.skipBlockClickSelection = "true";
      window.setTimeout(() => delete node.dataset.skipBlockClickSelection, 80);
    } else if (event.type === "pointerup") {
      selectItem("block", block.id);
    }
    persist();
  };

  node.addEventListener("pointerup", stopDragging);
  node.addEventListener("pointercancel", stopDragging);
}

function canStartBlockDrag(event) {
  if (event.button !== 0 || !(event.target instanceof Element)) {
    return false;
  }

  return !event.target.closest([
    "button",
    "input",
    "textarea",
    "select",
    "[contenteditable='true']",
    ".settings-menu",
    ".note-category-control",
    ".table-scroll",
    ".table-editor",
    ".resize-handle",
    ".col-resize-handle",
    ".row-resize-handle"
  ].join(", "));
}

function setupBlockResize(node, block) {
  const handle = node.querySelector(".resize-handle");
  if (!handle) {
    return;
  }

  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let originWidth = 0;
  let originHeight = 0;

  handle.addEventListener("pointerdown", (event) => {
    closeOpenMenus();
    node.querySelector(".settings-menu")?.setAttribute("hidden", "");
    node.querySelector(".settings-toggle-button")?.classList.remove("active");
    renderNotebookList();
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    originWidth = block.width || node.offsetWidth;
    originHeight = block.height || node.offsetHeight;
    handle.setPointerCapture(pointerId);
    event.preventDefault();
    event.stopPropagation();
  });

  handle.addEventListener("pointermove", (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    const minWidth = block.type === "table" ? 360 : 260;
    const minHeight = block.type === "table" ? 220 : 160;
    const deltaX = normalizeDeltaByScale(event.clientX - startX);
    const deltaY = normalizeDeltaByScale(event.clientY - startY);

    block.width = Math.max(minWidth, originWidth + deltaX);
    block.height = Math.max(minHeight, originHeight + deltaY);
    node.style.width = `${block.width}px`;
    node.style.height = `${block.height}px`;
  });

  const stopResize = (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    handle.releasePointerCapture(pointerId);
    pointerId = null;
    persist();
  };

  handle.addEventListener("pointerup", stopResize);
  handle.addEventListener("pointercancel", stopResize);
}

function updateCamera() {
  const scale = state.camera.scale || 1;
  const gridSize = Math.max(8, 48 * scale);
  const gridLineWidth = Math.min(1.8, Math.max(1, 1.15 / scale));
  const viewportWidth = elements.canvasViewport.clientWidth || 1;
  const viewportHeight = elements.canvasViewport.clientHeight || 1;
  const gridOriginX = viewportWidth / 2 + state.camera.x - 2600 * scale;
  const gridOriginY = viewportHeight / 2 + state.camera.y - 2600 * scale;
  const gridOffsetX = modulo(gridOriginX, gridSize);
  const gridOffsetY = modulo(gridOriginY, gridSize);

  elements.canvasStage.style.transform = `translate(${state.camera.x}px, ${state.camera.y}px) scale(${scale})`;
  elements.canvasGrid.style.setProperty("--grid-size", `${gridSize}px`);
  elements.canvasGrid.style.setProperty("--grid-line-width", `${gridLineWidth}px`);
  elements.canvasGrid.style.setProperty("--grid-offset-x", `${gridOffsetX}px`);
  elements.canvasGrid.style.setProperty("--grid-offset-y", `${gridOffsetY}px`);
  elements.zoomLevel.textContent = `${Math.round(scale * 100)}%`;
}

function stopCameraAnimation() {
  if (!uiState.cameraAnimation) {
    return;
  }

  cancelAnimationFrame(uiState.cameraAnimation.frameId);
  uiState.cameraAnimation = null;
}

function setCamera(nextCamera, options = {}) {
  const targetCamera = {
    x: nextCamera.x,
    y: nextCamera.y,
    scale: nextCamera.scale ?? state.camera.scale ?? 1
  };

  if (!options.smooth || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    stopCameraAnimation();
    state.camera.x = targetCamera.x;
    state.camera.y = targetCamera.y;
    state.camera.scale = targetCamera.scale;
    updateCamera();
    persist();
    return;
  }

  stopCameraAnimation();

  const startCamera = {
    x: state.camera.x,
    y: state.camera.y,
    scale: state.camera.scale || 1
  };
  const duration = options.duration || 460;
  const startTime = performance.now();

  const step = (currentTime) => {
    const progress = Math.min(1, (currentTime - startTime) / duration);
    const easedProgress = easeOutCubic(progress);

    state.camera.x = lerp(startCamera.x, targetCamera.x, easedProgress);
    state.camera.y = lerp(startCamera.y, targetCamera.y, easedProgress);
    state.camera.scale = lerp(startCamera.scale, targetCamera.scale, easedProgress);
    updateCamera();

    if (progress < 1) {
      uiState.cameraAnimation = {
        frameId: requestAnimationFrame(step)
      };
      return;
    }

    state.camera.x = targetCamera.x;
    state.camera.y = targetCamera.y;
    state.camera.scale = targetCamera.scale;
    uiState.cameraAnimation = null;
    updateCamera();
    persist();
  };

  uiState.cameraAnimation = {
    frameId: requestAnimationFrame(step)
  };
}

function lerp(start, end, progress) {
  return start + (end - start) * progress;
}

function easeOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3);
}

function modulo(value, size) {
  return ((value % size) + size) % size;
}

function setupCanvasZoom() {
  elements.canvasViewport.addEventListener("wheel", (event) => {
    event.preventDefault();
    const delta = event.deltaY < 0 ? 0.08 : -0.08;
    changeZoom(delta);
  }, { passive: false });
}

function toggleSidebarCompact() {
  setSidebarCollapsed(!elements.sidebar.classList.contains("collapsed"));
}

function setSidebarCollapsed(collapsed) {
  uiState.isSidebarCollapsed = collapsed;
  elements.sidebar.classList.remove("pre-collapsing");
  elements.sidebar.classList.remove("width-collapsing");
  elements.sidebar.classList.remove("icon-staging");
  elements.sidebar.classList.remove("icons-entering");

  if (collapsed) {
    elements.sidebar.classList.add("pre-collapsing");
    window.setTimeout(() => {
      if (elements.sidebar.classList.contains("pre-collapsing")) {
        elements.sidebar.classList.add("width-collapsing");
        elements.sidebar.classList.add("icon-staging");
        elements.sidebar.classList.add("collapsed");
        elements.sidebar.classList.remove("pre-collapsing");
        window.setTimeout(() => {
          elements.sidebar.classList.remove("width-collapsing");
          elements.sidebar.classList.remove("icon-staging");
          elements.sidebar.classList.add("icons-entering");
          window.setTimeout(() => {
            elements.sidebar.classList.remove("icons-entering");
          }, 420);
        }, 320);
      }
    }, 180);
  } else {
    elements.sidebar.classList.remove("collapsed");
    uiState.isCollapsedPageHoverSuppressed = false;
    removeCollapsedPageMenu();
  }

  elements.toggleSidebarButton.innerHTML = `<span aria-hidden="true">${collapsed ? "&#9656;" : "&#9666;"}</span>`;
  elements.toggleSidebarButton.setAttribute("aria-label", collapsed ? t("expandPanel") : t("collapsePanel"));
  elements.toggleSidebarButton.setAttribute("title", collapsed ? t("expand") : t("collapse"));
  elements.toggleSidebarButton.dataset.tooltip = collapsed ? t("expand") : t("collapse");
  updateCanvasLocationLabel();
}

function changeZoom(delta) {
  stopCameraAnimation();
  const current = state.camera.scale || 1;
  state.camera.scale = clampZoom(current + delta);
  updateCamera();
  persist();
}

function clampZoom(value) {
  return Math.min(2.4, Math.max(0.4, Number(value.toFixed(2))));
}

function fitViewToBlocks() {
  const safeArea = getCanvasSafeArea();
  const page = getSelectedPage();
  if (!page || page.blocks.length === 0) {
    setCamera({
      x: safeArea.centerX - safeArea.viewportCenterX,
      y: safeArea.centerY - safeArea.viewportCenterY,
      scale: 1
    }, { smooth: true });
    return;
  }

  const bounds = getBlocksBounds(page.blocks);
  const padding = 160;

  const targetWidth = Math.max(240, bounds.maxX - bounds.minX + padding);
  const targetHeight = Math.max(240, bounds.maxY - bounds.minY + padding);
  const scaleX = safeArea.width / targetWidth;
  const scaleY = safeArea.height / targetHeight;
  const nextScale = clampZoom(Math.min(scaleX, scaleY));

  const boundsCenterX = (bounds.minX + bounds.maxX) / 2;
  const boundsCenterY = (bounds.minY + bounds.maxY) / 2;
  const canvasCenter = 2600;

  setCamera({
    x: safeArea.centerX - safeArea.viewportCenterX - ((boundsCenterX - canvasCenter) * nextScale),
    y: safeArea.centerY - safeArea.viewportCenterY - ((boundsCenterY - canvasCenter) * nextScale),
    scale: nextScale
  }, { smooth: true });
}

function getCanvasSafeArea() {
  const viewportRect = elements.canvasViewport.getBoundingClientRect();
  const viewportWidth = viewportRect.width || 1;
  const viewportHeight = viewportRect.height || 1;
  const sidebarLayout = getIntendedSidebarLayout(viewportWidth);
  const sidebarEdgeMargin = sidebarLayout.left;
  const left = sidebarLayout.left + sidebarLayout.width + sidebarEdgeMargin;
  const right = Math.max(left + 1, viewportWidth - sidebarEdgeMargin);
  const top = sidebarEdgeMargin;
  const bottom = Math.max(top + 1, viewportHeight - sidebarEdgeMargin);
  const width = right - left;
  const height = bottom - top;

  return {
    width,
    height,
    centerX: left + width / 2,
    centerY: top + height / 2,
    viewportCenterX: viewportWidth / 2,
    viewportCenterY: viewportHeight / 2
  };
}

function getIntendedSidebarLayout(viewportWidth) {
  const sidebarRect = elements.sidebar.getBoundingClientRect();
  const fallbackMargin = viewportWidth <= 900 ? 12 : 16;
  const left = Number.isFinite(sidebarRect.left) && sidebarRect.left > 0
    ? sidebarRect.left
    : fallbackMargin;
  const width = uiState.isSidebarCollapsed
    ? 66
    : Math.min(viewportWidth <= 900 ? viewportWidth * 0.82 : 320, 320);

  return { left, width };
}

function getBlocksBounds(blocks) {
  return blocks.reduce((accumulator, block) => {
    const width = block.width || (block.type === "table" ? 480 : TEXT_BLOCK_DEFAULT_WIDTH);
    const height = block.height || (block.type === "table" ? 260 : TEXT_BLOCK_DEFAULT_HEIGHT);

    return {
      minX: Math.min(accumulator.minX, block.x),
      minY: Math.min(accumulator.minY, block.y),
      maxX: Math.max(accumulator.maxX, block.x + width),
      maxY: Math.max(accumulator.maxY, block.y + height)
    };
  }, {
    minX: Number.POSITIVE_INFINITY,
    minY: Number.POSITIVE_INFINITY,
    maxX: Number.NEGATIVE_INFINITY,
    maxY: Number.NEGATIVE_INFINITY
  });
}

function syncExpandedState() {
  if (uiState.hasSyncedExpandedState) {
    return;
  }

  const notebook = getSelectedNotebook();
  if (notebook) {
    uiState.expandedNotebookIds.add(notebook.id);
    const page = getSelectedPage();
    if (page) {
      uiState.expandedPageIds.add(page.id);
    }
  }

  uiState.hasSyncedExpandedState = true;
}

function focusBlock(blockId, options = {}) {
  const page = getSelectedPage();
  const block = page?.blocks.find((item) => item.id === blockId);
  if (!block) {
    return;
  }

  const safeArea = getCanvasSafeArea();
  const scale = clampZoom(options.scale ?? state.camera.scale ?? 1);
  const width = block.width || (block.type === "table" ? 480 : TEXT_BLOCK_DEFAULT_WIDTH);
  const height = block.height || (block.type === "table" ? 260 : TEXT_BLOCK_DEFAULT_HEIGHT);
  const canvasCenter = 2600;
  const blockCenterX = block.x + width / 2;
  const blockCenterY = block.y + height / 2;

  setCamera({
    x: safeArea.centerX - safeArea.viewportCenterX - ((blockCenterX - canvasCenter) * scale),
    y: safeArea.centerY - safeArea.viewportCenterY - ((blockCenterY - canvasCenter) * scale),
    scale
  }, {
    smooth: options.smooth !== false,
    duration: options.duration
  });
}

function getBlockTitle(block) {
  return (block.title || "").trim();
}

function getBlockListLabel(block, index) {
  return getBlockTitle(block) || `${t("noteDefault")} ${index + 1}`;
}

function setupTableColumnResize(handle, table, block, cellIndex) {
  let pointerId = null;
  let startX = 0;
  let originWidth = 0;
  let tableBlock = table?.closest(".table-block") || null;

  handle.addEventListener("pointerdown", (event) => {
    ensureTableSizing(block);
    tableBlock = handle.closest(".table-block") || tableBlock;
    pointerId = event.pointerId;
    startX = event.clientX;
    originWidth = block.columnWidths[cellIndex] || 140;
    handle.classList.add("active");
    handle.setPointerCapture(pointerId);
    event.preventDefault();
    event.stopPropagation();
  });

  handle.addEventListener("pointermove", (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    const deltaX = normalizeDeltaByScale(event.clientX - startX);
    const nextWidth = Math.max(TABLE_MIN_COLUMN_WIDTH, originWidth + deltaX);
    block.columnWidths[cellIndex] = nextWidth;
    if (table) {
      table.style.width = `${getTableWidth(block)}px`;
      const col = table.querySelectorAll("col")[cellIndex];
      if (col) {
        col.style.width = `${nextWidth}px`;
      }
    }
    fitTableRowsToContent(tableBlock, block);
  });

  const stopResize = (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    handle.classList.remove("active");
    handle.releasePointerCapture(pointerId);
    pointerId = null;
    persist();
  };

  handle.addEventListener("pointerup", stopResize);
  handle.addEventListener("pointercancel", stopResize);
}

function setupTableRowResize(handle, row, block, rowIndex) {
  let pointerId = null;
  let startY = 0;
  let originHeight = 0;
  let tableBlock = row?.closest(".table-block") || null;

  handle.addEventListener("pointerdown", (event) => {
    ensureTableSizing(block);
    tableBlock = handle.closest(".table-block") || tableBlock;
    pointerId = event.pointerId;
    startY = event.clientY;
    originHeight = block.rowHeights[rowIndex] || row.offsetHeight;
    handle.classList.add("active");
    handle.setPointerCapture(pointerId);
    event.preventDefault();
    event.stopPropagation();
  });

  handle.addEventListener("pointermove", (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    const deltaY = normalizeDeltaByScale(event.clientY - startY);
    const nextHeight = Math.max(TABLE_MIN_ROW_HEIGHT, getTableRowContentHeight(row), originHeight + deltaY);
    block.rowHeights[rowIndex] = nextHeight;
    row.style.height = `${nextHeight}px`;
    row.querySelectorAll("td").forEach((cell) => {
      cell.style.height = `${nextHeight}px`;
    });
    applyTableBlockDimensions(tableBlock, block);
  });

  const stopResize = (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    handle.classList.remove("active");
    handle.releasePointerCapture(pointerId);
    pointerId = null;
    persist();
  };

  handle.addEventListener("pointerup", stopResize);
  handle.addEventListener("pointercancel", stopResize);
}

function applyBlockCategoryColor(node, category) {
  const isDarkTheme = document.body.classList.contains("dark-theme");
  const palette = isDarkTheme ? {
    default: ["rgba(30, 34, 32, 0.9)", "transparent"],
    peach: ["rgba(58, 42, 34, 0.9)", "transparent"],
    sage: ["rgba(36, 52, 40, 0.9)", "transparent"],
    sky: ["rgba(31, 47, 58, 0.9)", "transparent"],
    rose: ["rgba(58, 39, 45, 0.9)", "transparent"],
    gold: ["rgba(57, 49, 32, 0.9)", "transparent"],
    lavender: ["rgba(47, 39, 58, 0.9)", "transparent"],
    mint: ["rgba(32, 52, 48, 0.9)", "transparent"],
    sand: ["rgba(54, 47, 38, 0.9)", "transparent"]
  } : {
    default: ["rgba(255, 253, 248, 0.92)", "transparent"],
    peach: ["rgba(255, 232, 218, 0.92)", "transparent"],
    sage: ["rgba(230, 244, 232, 0.92)", "transparent"],
    sky: ["rgba(224, 240, 251, 0.92)", "transparent"],
    rose: ["rgba(251, 226, 233, 0.92)", "transparent"],
    gold: ["rgba(250, 238, 203, 0.92)", "transparent"],
    lavender: ["rgba(238, 230, 250, 0.92)", "transparent"],
    mint: ["rgba(222, 244, 239, 0.92)", "transparent"],
    sand: ["rgba(244, 235, 220, 0.92)", "transparent"]
  };
  const [background, border] = palette[getCategoryColorKey(category)] || palette.default;
  node.style.setProperty("--note-tint", background);
  node.style.borderColor = border;
}

function cloneBlock(block) {
  return {
    ...structuredClone(block),
    title: block.title || "",
    category: block.category || "",
    color: block.color || "default"
  };
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getTextEditorHtml(block) {
  if (typeof block.contentHtml === "string" && block.contentHtml.trim()) {
    return sanitizeEditorHtml(block.contentHtml);
  }

  return textToEditorHtml(block.content || "");
}

function textToEditorHtml(value) {
  const text = typeof value === "string" ? value : "";
  return escapeHtml(text).replace(/\r?\n/g, "<br>");
}

function sanitizeEditorHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = typeof html === "string" ? html : "";
  const allowedTags = new Set(["B", "STRONG", "I", "EM", "U", "S", "STRIKE", "BR", "DIV", "P", "H2", "H3", "BLOCKQUOTE", "UL", "OL", "LI"]);
  const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_ELEMENT);
  const elements = [];

  while (walker.nextNode()) {
    elements.push(walker.currentNode);
  }

  elements.forEach((element) => {
    if (!allowedTags.has(element.tagName)) {
      element.replaceWith(...element.childNodes);
      return;
    }

    [...element.attributes].forEach((attribute) => element.removeAttribute(attribute.name));
  });

  return template.innerHTML;
}

function normalizeDeltaByScale(delta) {
  const scale = state.camera.scale || 1;
  if (!Number.isFinite(scale) || scale <= 0) {
    return delta;
  }

  return delta / scale;
}

function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function sanitizeState(candidate) {
  const safeNotebooks = sanitizeNotebooks(candidate?.notebooks);
  const safeCamera = {
    x: toFiniteNumber(candidate?.camera?.x, initialState.camera.x),
    y: toFiniteNumber(candidate?.camera?.y, initialState.camera.y),
    scale: clampZoom(toFiniteNumber(candidate?.camera?.scale, initialState.camera.scale))
  };

  const selectedNotebookId = typeof candidate?.selectedNotebookId === "string" ? candidate.selectedNotebookId : null;
  const activeNotebookId = safeNotebooks.some((item) => item.id === selectedNotebookId)
    ? selectedNotebookId
    : (safeNotebooks[0]?.id || null);

  const activeNotebook = safeNotebooks.find((item) => item.id === activeNotebookId) || null;
  const selectedPageId = typeof candidate?.selectedPageId === "string" ? candidate.selectedPageId : null;
  const activePageId = activeNotebook?.pages.some((item) => item.id === selectedPageId)
    ? selectedPageId
    : (activeNotebook?.pages[0]?.id || null);

  return {
    notebooks: safeNotebooks,
    selectedNotebookId: activeNotebookId,
    selectedPageId: activePageId,
    categoryColors: sanitizeCategoryColors(candidate?.categoryColors),
    camera: safeCamera
  };
}

function sanitizeCategoryColors(categoryColors) {
  if (!isRecord(categoryColors)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(categoryColors)
      .filter(([category, colorKey]) => typeof category === "string" && isCategoryColorKey(colorKey))
  );
}

function sanitizeNotebooks(notebooks) {
  if (!Array.isArray(notebooks)) {
    return structuredClone(initialState.notebooks);
  }

  const safeNotebooks = notebooks
    .filter((notebook) => isRecord(notebook))
    .map((notebook, notebookIndex) => {
      const pages = Array.isArray(notebook.pages)
        ? notebook.pages
          .filter((page) => isRecord(page))
          .map((page, pageIndex) => sanitizePage(page, pageIndex))
        : [];

      return {
        id: typeof notebook.id === "string" ? notebook.id : crypto.randomUUID(),
        name: typeof notebook.name === "string" && notebook.name.trim() ? notebook.name.trim() : `${t("newNotebookDefault")} ${notebookIndex + 1}`,
        emoji: normalizeNotebookEmoji(notebook.emoji || getDefaultNotebookEmoji(notebookIndex)),
        pages
      };
    });

  return safeNotebooks.length > 0 ? safeNotebooks : structuredClone(initialState.notebooks);
}

function getDefaultNotebookEmoji(index) {
  const emojis = ["📓", "📘", "📗", "📙", "📝", "⭐", "💡", "🎯"];
  return emojis[index % emojis.length];
}

function normalizeNotebookEmoji(value) {
  if (typeof value !== "string" || !value.trim()) {
    return getDefaultNotebookEmoji(0);
  }

  return Array.from(value.trim())[0] || getDefaultNotebookEmoji(0);
}

function sanitizePage(page, pageIndex) {
  const blocks = Array.isArray(page.blocks)
    ? page.blocks
      .filter((block) => isRecord(block))
      .map((block) => sanitizeBlock(block))
      .filter((block) => block !== null)
    : [];

  return {
    id: typeof page.id === "string" ? page.id : crypto.randomUUID(),
    title: typeof page.title === "string" && page.title.trim() ? page.title.trim() : `${t("newPageDefault")} ${pageIndex + 1}`,
    blocks
  };
}

function sanitizeBlock(block) {
  const type = block.type === "table" ? "table" : (block.type === "text" ? "text" : null);
  if (!type) {
    return null;
  }

  const safeBlock = {
    id: typeof block.id === "string" ? block.id : crypto.randomUUID(),
    type,
    title: typeof block.title === "string" ? block.title : "",
    category: typeof block.category === "string" ? block.category : "",
    color: typeof block.color === "string" ? block.color : "default",
    x: toFiniteNumber(block.x, 2500),
    y: toFiniteNumber(block.y, 2500),
    width: toFiniteNumber(block.width, type === "table" ? 480 : TEXT_BLOCK_DEFAULT_WIDTH),
    height: toFiniteNumber(block.height, type === "table" ? 260 : TEXT_BLOCK_DEFAULT_HEIGHT)
  };

  if (type === "text") {
    safeBlock.content = typeof block.content === "string" ? block.content : "";
    safeBlock.contentHtml = typeof block.contentHtml === "string" ? sanitizeEditorHtml(block.contentHtml) : "";
    return safeBlock;
  }

  safeBlock.cells = Array.isArray(block.cells) ? block.cells : [[""]];
  safeBlock.hasHeader = typeof block.hasHeader === "boolean" ? block.hasHeader : true;
  safeBlock.columnWidths = Array.isArray(block.columnWidths) ? block.columnWidths : [];
  safeBlock.rowHeights = Array.isArray(block.rowHeights) ? block.rowHeights : [];
  ensureTableSizing(safeBlock);
  return safeBlock;
}

function toFiniteNumber(value, fallback) {
  return Number.isFinite(value) ? value : fallback;
}

function getBlockListLabel(block, index) {
  return getBlockTitle(block) || `${t("noteDefault")} ${index + 1}`;
}

function ensureTableSizing(block) {
  if (block.type !== "table") {
    return;
  }

  if (!Array.isArray(block.cells)) {
    block.cells = [[""]];
  }

  block.cells = block.cells
    .filter((row) => Array.isArray(row))
    .map((row) => row.map((value) => String(value ?? "")));

  if (block.cells.length === 0) {
    block.cells = [[""]];
  }

  const maxColumnCount = block.cells.reduce((count, row) => Math.max(count, row.length), 1);
  block.cells = block.cells.map((row) => {
    if (row.length === maxColumnCount) {
      return row;
    }

    return row.concat(Array.from({ length: maxColumnCount - row.length }, () => ""));
  });

  const rowCount = block.cells.length;
  const columnCount = block.cells[0]?.length || 0;

  if (!Array.isArray(block.columnWidths)) {
    block.columnWidths = [];
  }

  if (!Array.isArray(block.rowHeights)) {
    block.rowHeights = [];
  }

  while (block.columnWidths.length < columnCount) {
    block.columnWidths.push(140);
  }

  while (block.rowHeights.length < rowCount) {
    block.rowHeights.push(48);
  }

  block.columnWidths = block.columnWidths.slice(0, columnCount).map((width) => Math.max(TABLE_MIN_COLUMN_WIDTH, toFiniteNumber(width, 140)));
  block.rowHeights = block.rowHeights.slice(0, rowCount).map((height) => Math.max(TABLE_MIN_ROW_HEIGHT, toFiniteNumber(height, 48)));
}

function getTableWidth(block) {
  ensureTableSizing(block);
  return block.columnWidths.reduce((total, width) => total + width, 0);
}

function getTableHeight(block) {
  ensureTableSizing(block);
  return block.rowHeights.reduce((total, height) => total + height, 0);
}

function getTableBlockWidth(block) {
  return Math.max(TABLE_BLOCK_MIN_WIDTH, getTableWidth(block) + TABLE_BLOCK_HORIZONTAL_CHROME);
}

function getTableBlockHeight(block) {
  return getTableHeight(block) + TABLE_BLOCK_VERTICAL_CHROME;
}

