const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6.5h6l2 2h10v9.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 10h18"/></svg>',
  timeline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4v16M5 7h7M5 12h13M5 17h9"/><circle cx="5" cy="7" r="1.5" fill="currentColor"/><circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="5" cy="17" r="1.5" fill="currentColor"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 4h2l2.2 10h10.9l2-7H6"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m4 7 8-4 8 4-8 4zM4 7v10l8 4 8-4V7M12 11v10"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 1 1 3.8 1.7c-1 .8-1.6 1.1-1.6 2.3M12 17h.01"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 8h18c0-1-3-1-3-8M10 21h4"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 2.8 19h18.4z"/><path d="M12 9v4m0 3h.01"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M7 12h10M10 18h4"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 5h11v12H3zM14 9h4l3 4v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>'
};

document.querySelectorAll("[data-icon]").forEach(el => el.innerHTML = icons[el.dataset.icon] || "");
document.querySelectorAll("[data-icon-button]").forEach(el => el.innerHTML = icons[el.dataset.iconButton] || "");

let projects = [
  { name: "Nueva imagen Panadería Origen", client: "Panadería Origen", status: "Producción", statusClass: "info", progress: 68, due: "24 jun 2026", owner: "Laura G.", initials: "LG", budget: "8.450 €", color: "#5276bd", group: "active" },
  { name: "Rotulación flota Logista", client: "Logista Sur", status: "Instalación", statusClass: "warning", progress: 91, due: "18 jun 2026", owner: "Javier R.", initials: "JR", budget: "12.600 €", color: "#4e99a0", group: "active" },
  { name: "Fachada Clínica Dental", client: "Clínica Arce", status: "Diseño", statusClass: "violet", progress: 34, due: "8 jul 2026", owner: "Marta S.", initials: "MS", budget: "6.980 €", color: "#7a65b7", group: "active" },
  { name: "Neón interior Umami", client: "Restaurante Umami", status: "Producción", statusClass: "info", progress: 76, due: "19 jun 2026", owner: "Raúl C.", initials: "RC", budget: "2.950 €", color: "#d28358", group: "active" },
  { name: "Señalética oficinas Lumen", client: "Lumen Tech", status: "Instalación", statusClass: "warning", progress: 88, due: "22 jun 2026", owner: "David P.", initials: "DP", budget: "9.720 €", color: "#4a9a70", group: "active" },
  { name: "Rótulo luminoso Atlas", client: "Atlas Fitness", status: "En espera", statusClass: "gray", progress: 22, due: "3 ago 2026", owner: "Laura G.", initials: "LG", budget: "7.350 €", color: "#ac895d", group: "waiting" },
  { name: "Escaparate campaña verano", client: "Moda Cobalto", status: "Finalizado", statusClass: "success", progress: 100, due: "2 jun 2026", owner: "Javier R.", initials: "JR", budget: "3.840 €", color: "#4b6685", group: "done" }
];

let purchaseMaterials = [
  { id: "MAT-001", category: "Placas", name: "Dibond Blanco", detail: "305 x 205 cm", supplier: "Aluminios Centro", notes: "Uso general para placas y bandejas", stock: 8, orderQuantity: 0, unit: "placas", status: "stock" },
  { id: "MAT-002", category: "Placas", name: "Dibond Negro", detail: "200 x 300 cm", supplier: "Aluminios Centro", notes: "", stock: 4, orderQuantity: 0, unit: "placas", status: "stock" },
  { id: "MAT-003", category: "Placas", name: "Metacrilato Opal 3mm", detail: "305 x 205 cm", supplier: "Plásticos Técnicos", notes: "Frentes luminosos", stock: 2, orderQuantity: 3, unit: "placas", status: "to-order" },
  { id: "MAT-004", category: "Placas", name: "Metacrilato Transparente 5mm", detail: "305 x 205 cm", supplier: "Plásticos Técnicos", notes: "", stock: 5, orderQuantity: 0, unit: "placas", status: "stock" },
  { id: "MAT-005", category: "Placas", name: "PVC Blanco 10mm", detail: "305 x 156 cm", supplier: "Plásticos Técnicos", notes: "", stock: 6, orderQuantity: 0, unit: "placas", status: "stock" },
  { id: "MAT-006", category: "Bobinas", name: "Vinilo fundido blanco", detail: "137 cm x 50 m", supplier: "Vinilos Ibérica", notes: "Rotulación vehículos", stock: 1, orderQuantity: 2, unit: "bobinas", status: "ordered" },
  { id: "MAT-007", category: "Bobinas", name: "Laminado mate conformable", detail: "137 cm x 50 m", supplier: "Vinilos Ibérica", notes: "", stock: 2, orderQuantity: 0, unit: "bobinas", status: "stock" },
  { id: "MAT-008", category: "Tintas", name: "Tinta CMYK EcoSolvente", detail: "Pack 4 x 1L", supplier: "Tintas Pro", notes: "", stock: 5, orderQuantity: 0, unit: "packs", status: "stock" },
  { id: "MAT-009", category: "Adhesivos", name: "Cinta doble cara VHB", detail: "19 mm x 33 m", supplier: "3M", notes: "Montaje exterior", stock: 3, orderQuantity: 0, unit: "rollos", status: "stock" },
  { id: "MAT-010", category: "Pintura", name: "Pintura RAL 9005 mate", detail: "1 kg", supplier: "Pinturas Industriales", notes: "", stock: 0, orderQuantity: 2, unit: "botes", status: "to-order" },
  { id: "MAT-011", category: "LED", name: "Módulo LED IP67 blanco frío", detail: "Pack 100 uds", supplier: "LED Sign Supply", notes: "Letras corpóreas", stock: 1, orderQuantity: 1, unit: "packs", status: "ordered" },
  { id: "MAT-012", category: "Neón", name: "Neón flex LED 12V blanco", detail: "Rollo 5 m", supplier: "LED Sign Supply", notes: "", stock: 2, orderQuantity: 0, unit: "rollos", status: "stock" },
  { id: "MAT-013", category: "Aluminio", name: "Chapa aluminio 1,5 mm", detail: "300 x 150 cm", supplier: "Aluminios Centro", notes: "Bandejas plegadas", stock: 0, orderQuantity: 4, unit: "chapas", status: "to-order" },
  { id: "MAT-014", category: "Herramientas y Herrajes", name: "Separadores inox", detail: "20 mm", supplier: "Herrajes Técnicos", notes: "", stock: 40, orderQuantity: 0, unit: "uds", status: "stock" }
];
let selectedMaterialCategory = "all";

let products = [
  { code: "LCF-001", name: "Letra corpórea frontal LED", category: "Letras corpóreas", description: "Letra de aluminio con frontal de metacrilato opal e iluminación LED interior.", materials: "Aluminio, metacrilato opal, módulos LED, fuente", processes: ["Diseño y despiece","Corte CNC","Conformado de cantos","Soldadura y repaso","Pintura","Montaje de LED","Cableado","Cierre de frontal","Prueba de luz","Plantilla y embalaje"], time: "28 h", cost: "Desde 185 €/ud.", visual: "" },
  { code: "LCR-002", name: "Letra corpórea retroiluminada", category: "Letras corpóreas", description: "Letra metálica separada de fachada para crear un halo luminoso posterior.", materials: "Aluminio, metacrilato transparente, LED, separadores", processes: ["Diseño técnico","Corte de frente y trasera","Conformado de cantos","Soldadura","Pintura","Montaje de LED","Cableado y fuente","Montaje de separadores","Prueba de halo","Plantilla y embalaje"], time: "32 h", cost: "Desde 230 €/ud.", visual: "dark" },
  { code: "RLB-010", name: "Rótulo luminoso con bandeja", category: "Rótulos luminosos", description: "Bandeja plegada de aluminio con gráfica calada, frontal o letras iluminadas.", materials: "Aluminio, metacrilato, LED IP67, vinilo translúcido", processes: ["Medición y diseño","Despiece técnico","Corte y calado CNC","Plegado de bandeja","Soldadura","Pintura","Montaje de LED","Cableado y fuente","Montaje de frentes","Prueba eléctrica","Embalaje"], time: "40 h", cost: "Desde 1.450 €", visual: "blue" },
  { code: "NLED-004", name: "Neón LED sobre metacrilato", category: "Neón LED", description: "Rótulo decorativo de neón flexible montado sobre base de metacrilato fresada.", materials: "Neón flex LED, metacrilato, cable, fuente 12/24 V", processes: ["Vectorizado","Trazado del neón","Corte de metacrilato","Fresado de canales","Montaje de neón flex","Soldadura y cableado","Montaje de fuente","Prueba de iluminación","Limpieza y embalaje"], time: "12 h", cost: "Desde 390 €", visual: "violet" },
  { code: "VIN-021", name: "Vinilo impreso y laminado", category: "Vinilos", description: "Gráfica impresa de gran formato protegida con laminado para exterior o interior.", materials: "Vinilo polimérico o fundido, tinta, laminado", processes: ["Recepción de artes","Preimpresión y prueba","Impresión","Secado y desgasificación","Laminado","Corte de contorno","Pelado","Enmascarado","Control y preparación","Aplicación"], time: "6 h + reposo", cost: "Desde 38 €/m²", visual: "green" },
  { code: "VCO-018", name: "Vinilo de corte", category: "Vinilos", description: "Textos y gráficos monocromos cortados en plotter para escaparates y superficies.", materials: "Vinilo de corte, transportador", processes: ["Preparación vectorial","Plotter de corte","Pelado","Aplicación de transportador","Replanteo","Aplicación","Repaso final"], time: "3 h", cost: "Desde 24 €/m²", visual: "amber" },
  { code: "VEH-006", name: "Rotulación integral de vehículo", category: "Vehículos", description: "Diseño, impresión y aplicación de gráfica integral o parcial sobre vehículo.", materials: "Vinilo fundido, laminado conformable, cinta de corte", processes: ["Fotografías y medición","Diseño y fotomontaje","Aprobación del cliente","Preimpresión","Impresión","Desgasificación","Laminado","Corte y paños","Limpieza del vehículo","Aplicación","Remates y postcalentado","Control final"], time: "18 h + reposo", cost: "Desde 1.250 €", visual: "blue" },
  { code: "SIG-015", name: "Señalética en placa", category: "Señalética", description: "Placas direccionales o identificativas personalizadas para interior y exterior.", materials: "Dibond, PVC, metacrilato, vinilo o impresión UV", processes: ["Listado y diseño","Revisión de textos","Impresión o corte","Corte de soportes","Laminado","Aplicación de gráfica","Taladros y separadores","Control de referencias","Embalaje por zonas"], time: "Según unidades", cost: "Desde 35 €/ud.", visual: "green" }
];

const team = ["Sin asignar", "Laura G. · Diseño", "Marta S. · Preimpresión", "Javier R. · CNC", "Raúl C. · Metal", "David P. · Electricidad", "Sergio T. · Vinilos", "Andrea L. · Montaje"];
const processStates = {
  todo: { label: "Por hacer", value: 0 },
  doing: { label: "En progreso", value: 50 },
  done: { label: "Finalizado", value: 100 }
};
const productStatusConfig = {
  todo: { label: "Por hacer", className: "gray" },
  doing: { label: "En progreso", className: "warning" },
  done: { label: "Finalizado", className: "success" }
};
const productionStages = [
  "Diseño",
  "Compra de materiales",
  "Listo para producción",
  "Producción",
  "Control de calidad",
  "Instalación",
  "Pendiente de envío",
  "Enviado"
];
const pipelineStageClasses = ["design", "materials", "ready", "production", "quality", "install", "shipping", "sent"];

function getProjectActiveStages(project) {
  if (Array.isArray(project.activeProductionStages)) {
    return [...new Set(project.activeProductionStages.map(Number).filter(index => index >= 0 && index < productionStages.length))].sort((a, b) => a - b);
  }
  return Number.isInteger(project.productionStage) ? [project.productionStage] : [];
}

function syncProjectStageState(project, stages = getProjectActiveStages(project)) {
  const activeStages = [...new Set(stages.map(Number).filter(index => index >= 0 && index < productionStages.length))].sort((a, b) => a - b);
  project.activeProductionStages = activeStages;
  project.productionStage = activeStages.length ? Math.max(...activeStages) : 0;
  project.status = activeStages.length
    ? activeStages.map(index => productionStages[index]).join(" + ")
    : "Sin fase";
  project.statusClass = activeStages.length ? getStageStatusClass(project.productionStage) : "gray";
  project.group = activeStages.includes(7) ? "done" : "active";
  return activeStages;
}

function createProjectProduct(product, quantity = 1, statuses = []) {
  const recommendedAssignee = processName => {
    const name = processName.toLowerCase();
    if (name.includes("diseño") || name.includes("vector") || name.includes("medición") || name.includes("replanteo")) return "Laura G. · Diseño";
    if (name.includes("preimpresión") || name.includes("impresión") || name.includes("laminado") || name.includes("desgasificación")) return "Marta S. · Preimpresión";
    if (name.includes("corte") || name.includes("fresado") || name.includes("plotter") || name.includes("despiece")) return "Javier R. · CNC";
    if (name.includes("soldadura") || name.includes("plegado") || name.includes("conformado") || name.includes("pintura")) return "Raúl C. · Metal";
    if (name.includes("led") || name.includes("cable") || name.includes("fuente") || name.includes("luz") || name.includes("eléctrica")) return "David P. · Electricidad";
    if (name.includes("vinilo") || name.includes("pelado") || name.includes("transportador") || name.includes("aplicación")) return "Sergio T. · Vinilos";
    if (name.includes("montaje") || name.includes("embalaje") || name.includes("limpieza") || name.includes("remate") || name.includes("control")) return "Andrea L. · Montaje";
    return "Sin asignar";
  };
  return {
    id: `${product.code}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    code: product.code,
    name: product.name,
    category: product.category,
    materials: product.materials || "",
    quantity,
    dimensions: "",
    finish: "",
    source: product.source || "catalog",
    processes: product.processes.map((name, index) => ({
      id: `${product.code}-process-${index}-${Math.random().toString(16).slice(2)}`,
      name,
      assignee: recommendedAssignee(name),
      status: statuses[index] || "todo"
    }))
  };
}

projects.forEach((project, index) => {
  const demoLocations = ["C/ Alcalá 142, Madrid", "Pol. Ind. Las Mercedes, Madrid", "Av. Castilla 18, Toledo", "C/ Barquillo 7, Madrid", "P.º de la Castellana 95, Madrid", "C/ Río Tajo 12, Getafe", "C/ Serrano 64, Madrid"];
  const demoTemplates = [
    [products[0], products[2]],
    [products[6]],
    [products[1], products[4]],
    [products[3]],
    [products[7], products[5]],
    [products[2]],
    [products[4], products[5]]
  ];
  project.id = project.id || `project-${index + 1}`;
  const initialStageByStatus = {
    "Diseño": 0,
    "En espera": 1,
    "Producción": 3,
    "Instalación": 5,
    "Finalizado": 7
  };
  project.productionStage ??= initialStageByStatus[project.status] ?? 0;
  syncProjectStageState(project, getProjectActiveStages(project));
  project.location = project.location || demoLocations[index];
  project.environment = project.environment || (index === 1 || index === 6 ? "Vehículo" : index === 3 || index === 4 ? "Interior" : "Exterior");
  project.installation = project.installation || "Incluida";
  project.installationConfirmed ??= !(project.productionStage === 5 && index !== 4);
  const templates = demoTemplates[index] || [products[0]];
  const demoStates = index < 5 ? ["done", "doing", "todo", "todo"] : [];
  project.manufacturingProducts = project.manufacturingProducts || templates.map((product, productIndex) =>
    createProjectProduct(product, productIndex + 1, productIndex ? ["done", "todo"] : demoStates)
  );
  project.manufacturingProducts.forEach((product, productIndex) => {
    product.dimensions ||= productIndex ? "1200 × 600 mm" : "3200 × 850 mm";
    product.finish ||= product.category === "Vinilos" ? "Impresión CMYK + laminado mate" : "RAL 9005 mate";
  });
  project.attachments ||= {
    design: [],
    finished: [],
    installation: []
  };
});

const monthIndex = {
  ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
  jul: 6, ago: 7, sept: 8, oct: 9, nov: 10, dic: 11
};

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function getInitials(name) {
  return name.split("·")[0].trim().split(/\s+/).map(part => part[0]).join("").slice(0, 2).toUpperCase();
}

function dateToInputValue(dateText) {
  if (!dateText) return "";
  const months = { ene: "01", feb: "02", mar: "03", abr: "04", may: "05", jun: "06", jul: "07", ago: "08", sept: "09", oct: "10", nov: "11", dic: "12" };
  const parts = dateText.toLowerCase().replace(".", "").split(/\s+/);
  if (parts.length < 3) return "";
  return `${parts[2]}-${months[parts[1]] || "01"}-${String(parts[0]).padStart(2, "0")}`;
}

function formatProjectDate(inputValue) {
  return new Date(`${inputValue}T12:00:00`).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
}

function budgetToNumber(budget) {
  return String(budget || "").replace(/[^\d,]/g, "").replace(",", ".");
}

function getProjectProgress(project) {
  const processes = project.manufacturingProducts.flatMap(product => product.processes);
  if (!processes.length) return 0;
  return Math.round(processes.reduce((total, process) => total + processStates[process.status].value, 0) / processes.length);
}

function getProductStatus(product) {
  if (!product.processes.length || product.processes.every(process => process.status === "todo")) return "todo";
  if (product.processes.every(process => process.status === "done")) return "done";
  return "doing";
}

function getProductProgress(product) {
  if (!product.processes.length) return 0;
  return Math.round(product.processes.reduce((total, process) => total + processStates[process.status].value, 0) / product.processes.length);
}

function getStageStatusClass(stageIndex) {
  if (stageIndex === 7) return "success";
  if (stageIndex === 5 || stageIndex === 6) return "warning";
  if (stageIndex === 0) return "violet";
  return "info";
}

function getProductCodePrefix(category) {
  const prefixes = {
    "Letras corpóreas": "LET",
    "Rótulos luminosos": "ROT",
    "Neón LED": "NEO",
    "Vinilos": "VIN",
    "Vehículos": "VEH",
    "Señalética": "SIG",
    "Impresión gran formato": "IMP"
  };
  return prefixes[category] || "PROD";
}

function createCustomProjectProduct(data) {
  const category = data.get("category");
  const product = {
    code: data.get("code") || `${getProductCodePrefix(category)}-${Date.now().toString().slice(-4)}`,
    name: data.get("name"),
    category,
    materials: data.get("materials"),
    processes: data.get("tasks").split(/\n|,/).map(task => task.trim()).filter(Boolean),
    source: "custom"
  };
  const projectProduct = createProjectProduct(product, Number(data.get("quantity")) || 1);
  projectProduct.dimensions = data.get("dimensions") || "";
  projectProduct.finish = data.get("finish") || "";
  return projectProduct;
}

function navigate(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === viewId));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.view === viewId));
  if (viewId === "projects") {
    document.getElementById("projectDetailView").hidden = true;
    document.getElementById("projectListView").hidden = false;
  }
  document.getElementById("sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav-item").forEach(item => item.addEventListener("click", () => navigate(item.dataset.view)));
document.querySelectorAll("[data-go]").forEach(item => item.addEventListener("click", () => navigate(item.dataset.go)));
document.getElementById("menuButton").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));

function renderProductionPipeline() {
  const container = document.getElementById("productionPipeline");
  if (!container) return;
  container.innerHTML = productionStages.map((stage, index) => {
    const stageProjects = projects.filter(project => getProjectActiveStages(project).includes(index));
    return `
      <section class="pipeline-column">
        <div class="pipeline-column-head">
          <span class="pipeline-stage-tag ${pipelineStageClasses[index]}">${escapeHTML(stage)}</span>
          <small>${stageProjects.length} proyecto${stageProjects.length === 1 ? "" : "s"}</small>
        </div>
        <div class="pipeline-card-list">
          ${stageProjects.length ? stageProjects.map(project => `
            <button class="pipeline-project-card" data-pipeline-project="${project.id}">
              <strong>${escapeHTML(project.name)}</strong>
              <span>${escapeHTML(project.client)}</span>
              <small>${escapeHTML(project.due)}</small>
            </button>`).join("") : `<div class="pipeline-empty">Vacío</div>`}
        </div>
      </section>`;
  }).join("");
  container.querySelectorAll("[data-pipeline-project]").forEach(card => card.addEventListener("click", () => {
    navigate("projects");
    openProjectDetail(card.dataset.pipelineProject);
  }));
}

function parseShortDate(dateText) {
  if (!dateText) return null;
  const normalized = String(dateText).toLowerCase().replace(".", "");
  const parts = normalized.split(/\s+/);
  if (parts.length < 2) return null;
  const day = Number(parts[0]);
  const month = monthIndex[parts[1]];
  const year = Number(parts[2]) || new Date().getFullYear();
  if (!day || month === undefined) return null;
  return new Date(year, month, day, 12, 0, 0);
}

function daysBetween(from, to) {
  return Math.ceil((to - from) / 86400000);
}

function relativeDueLabel(date) {
  if (!date) return "Revisar";
  const diff = daysBetween(new Date(), date);
  if (diff < 0) return `${Math.abs(diff)} día${Math.abs(diff) === 1 ? "" : "s"}`;
  if (diff === 0) return "Hoy";
  if (diff === 1) return "Mañana";
  return `${diff} días`;
}

function getAttentionAlerts() {
  const alerts = [];
  const today = new Date();

  purchaseMaterials.forEach(material => {
    if (material.status === "to-order") {
      alerts.push({
        priority: 2,
        type: "violet",
        icon: "cart",
        title: "Material por pedir",
        detail: `${material.name} · ${material.orderQuantity || 1} ${material.unit}`,
        time: "Hoy",
        action: "purchases"
      });
    }
    if (material.status === "ordered") {
      alerts.push({
        priority: 4,
        type: "blue",
        icon: "truck",
        title: "Material pedido pendiente de entrada",
        detail: `${material.name} · ${material.supplier}`,
        time: "En camino",
        action: "purchases"
      });
    }
  });

  projects.forEach(project => {
    const dueDate = project.dueISO ? new Date(`${project.dueISO}T12:00:00`) : parseShortDate(project.due);
    const dueIn = dueDate ? daysBetween(today, dueDate) : null;
    const progress = getProjectProgress(project);

    if (project.installation === "Incluida" && project.productionStage >= 5 && !project.installationConfirmed) {
      alerts.push({
        priority: 2,
        type: "warning",
        icon: "calendar",
        title: "Instalación sin confirmar",
        detail: `${project.name} · ${project.due}`,
        time: dueIn !== null && dueIn <= 1 ? "Hoy" : relativeDueLabel(dueDate),
        action: "project",
        projectId: project.id
      });
    }

    const unassigned = project.manufacturingProducts
      .flatMap(product => product.processes.map(process => ({ product, process })))
      .filter(item => item.process.assignee === "Sin asignar");
    if (unassigned.length) {
      alerts.push({
        priority: 3,
        type: "blue",
        icon: "user",
        title: `${unassigned.length} proceso${unassigned.length === 1 ? "" : "s"} sin responsable`,
        detail: `${project.name} · ${unassigned[0].product.name}`,
        time: "Hoy",
        action: "project",
        projectId: project.id
      });
    }

    const emptyProducts = project.manufacturingProducts.filter(product => !product.processes.length);
    if (emptyProducts.length) {
      alerts.push({
        priority: 3,
        type: "warning",
        icon: "alert",
        title: "Producto sin procesos",
        detail: `${project.name} · ${emptyProducts[0].name}`,
        time: "Revisar",
        action: "project",
        projectId: project.id
      });
    }

    if (dueIn !== null && dueIn >= 0 && dueIn <= 7 && progress < 70 && project.productionStage < 7) {
      alerts.push({
        priority: 4,
        type: "danger",
        icon: "clock",
        title: "Entrega cercana con poco avance",
        detail: `${project.name} · ${progress}% completado`,
        time: relativeDueLabel(dueDate),
        action: "project",
        projectId: project.id
      });
    }
  });

  return alerts
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 6);
}

function renderAttentionPanel() {
  const list = document.getElementById("attentionList");
  const count = document.getElementById("attentionCount");
  if (!list || !count) return;
  const alerts = getAttentionAlerts();
  count.textContent = `${alerts.length} pendiente${alerts.length === 1 ? "" : "s"}`;
  list.innerHTML = alerts.length ? alerts.map(alert => `
    <button class="alert-row" data-alert-action="${alert.action}" ${alert.projectId ? `data-project-id="${alert.projectId}"` : ""}>
      <span class="alert-icon ${alert.type}">${icons[alert.icon] || icons.alert}</span>
      <span><strong>${escapeHTML(alert.title)}</strong><small>${escapeHTML(alert.detail)}</small></span>
      <span class="alert-time">${escapeHTML(alert.time)}</span>
    </button>`).join("") : `<div class="attention-empty">Sin alertas críticas ahora mismo</div>`;
  list.querySelectorAll("[data-alert-action]").forEach(row => row.addEventListener("click", () => {
    if (row.dataset.alertAction === "project" && row.dataset.projectId) {
      navigate("projects");
      openProjectDetail(row.dataset.projectId);
    } else if (row.dataset.alertAction === "purchases") {
      navigate("purchases");
    }
  }));
}

function renderProjects(filter = "all", query = "") {
  const body = document.getElementById("projectTableBody");
  const shown = projects.filter(p => (filter === "all" || p.group === filter) && `${p.name} ${p.client} ${p.owner}`.toLowerCase().includes(query.toLowerCase()));
  body.innerHTML = shown.map(p => {
    const progress = getProjectProgress(p);
    return `
    <tr class="project-row" data-project-id="${p.id}">
      <td><div class="project-name"><span class="project-thumb" style="background:${p.color}">${escapeHTML(p.name.split(" ").map(w=>w[0]).join("").slice(0,2))}</span><div><strong>${escapeHTML(p.name)}</strong><small>${escapeHTML(p.client)}</small></div></div></td>
      <td><span class="pill ${p.statusClass}">${p.status}</span></td>
      <td><div class="table-progress"><div class="progress"><span style="width:${progress}%"></span></div><small>${progress}%</small></div></td>
      <td>${p.due}</td>
      <td><div class="owner"><span class="avatar" style="background:${p.color}">${p.initials}</span><span>${p.owner}</span></div></td>
      <td><strong>${p.manufacturingProducts.length}</strong> <small class="table-muted">referencias</small></td>
      <td><button class="row-menu" aria-label="Abrir proyecto">→</button></td>
    </tr>`}).join("") || '<tr><td colspan="7"><div class="empty-state">No hay proyectos que coincidan con la búsqueda.</div></td></tr>';
  document.querySelectorAll(".project-row").forEach(row => row.addEventListener("click", () => openProjectDetail(row.dataset.projectId)));
  renderProductionPipeline();
  renderAttentionPanel();
}
renderProjects();

document.querySelectorAll("[data-project-filter]").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll("[data-project-filter]").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProjects(btn.dataset.projectFilter, document.getElementById("globalSearch").value);
}));

function getStatusCounts(project) {
  const processes = project.manufacturingProducts.flatMap(product => product.processes);
  return Object.keys(processStates).reduce((counts, status) => {
    counts[status] = processes.filter(process => process.status === status).length;
    return counts;
  }, {});
}

function renderProcessRow(projectId, product, process) {
  const assigneeOptions = team.map(person =>
    `<option value="${escapeHTML(person)}" ${process.assignee === person ? "selected" : ""}>${escapeHTML(person)}</option>`
  ).join("");
  return `
    <div class="process-row">
      <div class="process-name">
        <span class="process-state-dot ${process.status}"></span>
        <strong>${escapeHTML(process.name)}</strong>
      </div>
      <select class="assignee-select" data-project="${projectId}" data-product="${product.id}" data-process="${process.id}" aria-label="Responsable de ${escapeHTML(process.name)}">
        ${assigneeOptions}
      </select>
      <div class="process-status-control" aria-label="Estado de ${escapeHTML(process.name)}">
        ${Object.entries(processStates).map(([key, state]) =>
          `<button class="${process.status === key ? `active ${key}` : ""}" data-process-status="${key}" data-project="${projectId}" data-product="${product.id}" data-process="${process.id}">${state.label}</button>`
        ).join("")}
      </div>
      <button class="danger-icon-button" data-delete-process="${process.id}" data-project="${projectId}" data-product="${product.id}" aria-label="Eliminar proceso ${escapeHTML(process.name)}">Eliminar</button>
    </div>`;
}

const attachmentSections = {
  design: {
    title: "Archivos de diseño",
    description: "Artes finales, vectores, planos, PDFs y referencias aprobadas.",
    accept: "image/*,.pdf,.ai,.eps,.svg,.cdr,.dxf",
    button: "Añadir archivos"
  },
  finished: {
    title: "Imágenes de trabajo terminado",
    description: "Fotografías del rótulo terminado y revisado antes de salir del taller.",
    accept: "image/*",
    button: "Añadir imágenes"
  },
  installation: {
    title: "Imágenes de instalación",
    description: "Fotografías del montaje, resultado final y detalles en obra.",
    accept: "image/*",
    button: "Añadir imágenes"
  }
};

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileExtension(name) {
  return name.includes(".") ? name.split(".").pop().toUpperCase() : "ARCHIVO";
}

function renderAttachmentItem(projectId, category, attachment) {
  const isImage = attachment.type.startsWith("image/");
  return `
    <article class="attachment-item">
      <div class="attachment-preview ${isImage ? "" : "document"}">
        ${isImage
          ? `<img src="${attachment.url}" alt="${escapeHTML(attachment.name)}">`
          : `<span>${escapeHTML(getFileExtension(attachment.name))}</span>`}
      </div>
      <div class="attachment-info">
        <strong title="${escapeHTML(attachment.name)}">${escapeHTML(attachment.name)}</strong>
        <small>${formatFileSize(attachment.size)}</small>
      </div>
      <button class="attachment-remove" data-remove-attachment="${attachment.id}" data-project="${projectId}" data-category="${category}" aria-label="Eliminar ${escapeHTML(attachment.name)}">×</button>
    </article>`;
}

function renderAttachmentSection(project, category) {
  const config = attachmentSections[category];
  const attachments = project.attachments[category];
  return `
    <section class="attachment-section">
      <div class="attachment-section-head">
        <div>
          <h3>${config.title}</h3>
          <p>${config.description}</p>
        </div>
        <span class="attachment-count">${attachments.length}</span>
      </div>
      <label class="attachment-dropzone" data-drop-category="${category}" data-project="${project.id}">
        <input class="attachment-input" type="file" multiple accept="${config.accept}" data-category="${category}" data-project="${project.id}">
        <span class="upload-symbol">↑</span>
        <strong>${config.button}</strong>
        <small>Haz clic o arrastra aquí</small>
      </label>
      <div class="attachment-list">
        ${attachments.length
          ? attachments.map(attachment => renderAttachmentItem(project.id, category, attachment)).join("")
          : `<div class="attachment-empty">Todavía no hay archivos adjuntos</div>`}
      </div>
    </section>`;
}

function renderProductionStages(project) {
  const activeStages = getProjectActiveStages(project);
  return `
    <section class="production-stage-panel">
      <div class="production-stage-heading">
        <div><h2>Fases de producción</h2><p>Pulsa una fase para actualizar el estado general del proyecto.</p></div>
        <span>${activeStages.length} activa${activeStages.length === 1 ? "" : "s"}</span>
      </div>
      <div class="production-stage-track">
        ${productionStages.map((stage, index) => {
          const active = activeStages.includes(index);
          return `<button class="production-stage ${pipelineStageClasses[index]} ${active ? "active" : ""}" data-production-stage="${index}" data-project="${project.id}" aria-pressed="${active}">
            <span class="stage-number">${index < project.productionStage ? "✓" : index + 1}</span>
            <span class="stage-label">${escapeHTML(stage)}</span>
          </button>`;
        }).join("")}
      </div>
    </section>`;
}

function renderProjectProductCard(project, product, isOpen = false) {
  const statusKey = getProductStatus(product);
  const status = productStatusConfig[statusKey];
  const productProgress = getProductProgress(product);
  return `
    <article class="project-product-card ${isOpen ? "open" : ""}" data-product-id="${product.id}">
      <div class="project-product-head">
        <button class="project-product-toggle" data-product-id="${product.id}" aria-expanded="${isOpen}" type="button">
          <div class="product-identity">
            <span class="product-code-inline">${escapeHTML(product.code)}</span>
            <div>
              <h3>${escapeHTML(product.name)}</h3>
              <span>${escapeHTML(product.category)} · ${escapeHTML(product.materials || "Materiales por definir")}</span>
              ${product.source === "custom" ? '<em>Producto creado para este proyecto</em>' : ""}
            </div>
          </div>
          <div class="product-summary">
            <span class="pill ${status.className}">${status.label}</span>
            <div class="product-mini-progress"><span style="width:${productProgress}%"></span></div>
            <span class="accordion-chevron">⌄</span>
          </div>
        </button>
        <div class="product-quantity-control" aria-label="Cantidad de ${escapeHTML(product.name)}">
          <span>Cantidad</span>
          <button type="button" data-quantity-action="decrease" data-project="${project.id}" data-product="${product.id}" aria-label="Reducir cantidad">−</button>
          <input type="number" min="1" value="${product.quantity}" data-product-quantity="${product.id}" data-project="${project.id}" aria-label="Cantidad de ${escapeHTML(product.name)}">
          <button type="button" data-quantity-action="increase" data-project="${project.id}" data-product="${product.id}" aria-label="Aumentar cantidad">+</button>
        </div>
        <button class="danger-icon-button product-delete-button" data-delete-product="${product.id}" data-project="${project.id}" aria-label="Eliminar producto ${escapeHTML(product.name)}">Eliminar</button>
      </div>
      <div class="project-product-body">
        <div class="product-specs">
          <label><span>Medidas / formato</span><input class="product-spec-input" data-spec="dimensions" data-project="${project.id}" data-product="${product.id}" value="${escapeHTML(product.dimensions)}" placeholder="Ej. 3200 × 850 mm"></label>
          <label><span>Color y acabado</span><input class="product-spec-input" data-spec="finish" data-project="${project.id}" data-product="${product.id}" value="${escapeHTML(product.finish)}" placeholder="Ej. RAL 9005 mate / frontal opal"></label>
        </div>
        <div class="process-column-head"><span>Proceso</span><span>Persona asignada</span><span>Estado</span><span>Acciones</span></div>
        <div class="project-process-list">${product.processes.map(process => renderProcessRow(project.id, product, process)).join("")}</div>
      </div>
    </article>`;
}

function openProjectDetail(projectId) {
  const project = projects.find(item => item.id === projectId);
  if (!project) return;
  const progress = getProjectProgress(project);
  const counts = getStatusCounts(project);
  const openProductIds = new Set(Array.from(document.querySelectorAll(".project-product-card.open")).map(card => card.dataset.productId));
  document.getElementById("projectListView").hidden = true;
  const detail = document.getElementById("projectDetailView");
  detail.hidden = false;
  detail.innerHTML = `
    <button class="project-back" id="projectBack">← Volver a proyectos</button>
    <div class="project-detail-header">
      <div class="project-detail-title">
        <span class="project-thumb large" style="background:${project.color}">${escapeHTML(project.name.split(" ").map(word => word[0]).join("").slice(0,2))}</span>
        <div><p class="eyebrow">${escapeHTML(project.client)}</p><h1>${escapeHTML(project.name)}</h1><p>Entrega estimada: <strong>${escapeHTML(project.due)}</strong></p></div>
      </div>
      <div class="project-header-actions">
        <button class="secondary-button" id="editProjectButton">Editar proyecto</button>
        <button class="secondary-button" id="addCatalogProduct">Desde catálogo</button>
        <button class="primary-button" id="createProjectProduct">＋ Crear producto</button>
      </div>
    </div>
    <div class="project-detail-meta">
      <span><strong>Ubicación:</strong> ${escapeHTML(project.location || "Por definir")}</span>
      <span><strong>Entorno:</strong> ${escapeHTML(project.environment || "Por definir")}</span>
      <span><strong>Montaje:</strong> ${escapeHTML(project.installation || "Por definir")}</span>
      ${project.contact ? `<span><strong>Contacto:</strong> ${escapeHTML(project.contact)}</span>` : ""}
    </div>
    ${renderProductionStages(project)}
    <div class="project-detail-stats">
      <article class="detail-stat"><span>Progreso de fabricación</span><strong>${progress}%</strong><div class="progress"><span style="width:${progress}%"></span></div></article>
      <article class="detail-stat"><span>Productos</span><strong>${project.manufacturingProducts.length}</strong><small>${project.manufacturingProducts.reduce((sum, product) => sum + product.quantity, 0)} unidades totales</small></article>
      <article class="detail-stat"><span>Procesos</span><strong>${project.manufacturingProducts.flatMap(product => product.processes).length}</strong><small>${counts.done || 0} finalizados</small></article>
      <article class="detail-stat"><span>Responsable de proyecto</span><div class="detail-owner"><span class="avatar" style="background:${project.color}">${project.initials}</span><strong>${escapeHTML(project.owner)}</strong></div></article>
    </div>
    <div class="project-work-heading"><div><h2>Productos a fabricar</h2><p>Asigna el trabajo y actualiza el estado de cada proceso.</p></div></div>
    <div class="project-product-list">
      ${project.manufacturingProducts.length ? project.manufacturingProducts.map((product, index) => renderProjectProductCard(project, product, openProductIds.has(product.id) || (!openProductIds.size && index === 0))).join("") : `<div class="empty-project-products"><strong>Todavía no hay productos</strong><span>Añade los elementos que hay que fabricar para empezar a planificar sus procesos.</span><button class="primary-button" id="emptyAddProduct">＋ Añadir primer producto</button></div>`}
    </div>
    <div class="project-files-heading"><h2>Documentación y fotografías</h2><p>Archivos vinculados a este proyecto, separados por fase.</p></div>
    <div class="project-attachments">
      ${renderAttachmentSection(project, "design")}
      ${renderAttachmentSection(project, "finished")}
      ${renderAttachmentSection(project, "installation")}
    </div>`;

  detail.querySelector("#projectBack").addEventListener("click", closeProjectDetail);
  detail.querySelector("#editProjectButton").addEventListener("click", () => openEditProjectForm(project.id));
  detail.querySelector("#addCatalogProduct").addEventListener("click", () => openAddProductToProject(project.id));
  detail.querySelector("#createProjectProduct").addEventListener("click", () => openCreateProjectProductForm(project.id));
  detail.querySelector("#emptyAddProduct")?.addEventListener("click", () => openCreateProjectProductForm(project.id));
  detail.querySelectorAll(".assignee-select").forEach(select => select.addEventListener("change", updateProcessAssignee));
  detail.querySelectorAll("[data-process-status]").forEach(button => button.addEventListener("click", updateProcessStatus));
  detail.querySelectorAll(".product-spec-input").forEach(input => input.addEventListener("change", updateProductSpec));
  detail.querySelectorAll("[data-product-quantity]").forEach(input => input.addEventListener("change", updateProductQuantityInput));
  detail.querySelectorAll("[data-quantity-action]").forEach(button => button.addEventListener("click", updateProductQuantityButton));
  detail.querySelectorAll(".project-product-toggle").forEach(button => button.addEventListener("click", toggleProjectProduct));
  detail.querySelectorAll("[data-delete-product]").forEach(button => button.addEventListener("click", deleteProjectProduct));
  detail.querySelectorAll("[data-delete-process]").forEach(button => button.addEventListener("click", deleteProjectProcess));
  detail.querySelectorAll("[data-production-stage]").forEach(button => button.addEventListener("click", updateProductionStage));
  bindAttachmentEvents(detail);
}

function closeProjectDetail() {
  document.getElementById("projectDetailView").hidden = true;
  document.getElementById("projectListView").hidden = false;
  renderProjects();
}

function findProcess(projectId, productId, processId) {
  const project = projects.find(item => item.id === projectId);
  const product = project?.manufacturingProducts.find(item => item.id === productId);
  return { project, process: product?.processes.find(item => item.id === processId) };
}

function updateProductSpec(event) {
  const project = projects.find(item => item.id === event.target.dataset.project);
  const product = project?.manufacturingProducts.find(item => item.id === event.target.dataset.product);
  if (!product) return;
  product[event.target.dataset.spec] = event.target.value;
  showToast("Especificación de fabricación actualizada");
}

function setProjectProductQuantity(projectId, productId, quantity) {
  const project = projects.find(item => item.id === projectId);
  const product = project?.manufacturingProducts.find(item => item.id === productId);
  if (!project || !product) return;
  product.quantity = Math.max(1, Number(quantity) || 1);
  openProjectDetail(project.id);
  renderProjects();
  showToast("Cantidad actualizada");
}

function updateProductQuantityInput(event) {
  setProjectProductQuantity(event.target.dataset.project, event.target.dataset.productQuantity, event.target.value);
}

function updateProductQuantityButton(event) {
  const button = event.currentTarget;
  const project = projects.find(item => item.id === button.dataset.project);
  const product = project?.manufacturingProducts.find(item => item.id === button.dataset.product);
  if (!project || !product) return;
  const delta = button.dataset.quantityAction === "increase" ? 1 : -1;
  setProjectProductQuantity(project.id, product.id, product.quantity + delta);
}

function deleteProjectProduct(event) {
  event.stopPropagation();
  const button = event.currentTarget;
  const project = projects.find(item => item.id === button.dataset.project);
  if (!project) return;
  const product = project.manufacturingProducts.find(item => item.id === button.dataset.deleteProduct);
  if (!product) return;
  if (!confirm(`¿Eliminar "${product.name}" y todos sus procesos de este proyecto?`)) return;
  project.manufacturingProducts = project.manufacturingProducts.filter(item => item.id !== product.id);
  project.progress = getProjectProgress(project);
  openProjectDetail(project.id);
  renderProjects();
  showToast("Producto eliminado del proyecto");
}

function deleteProjectProcess(event) {
  event.stopPropagation();
  const button = event.currentTarget;
  const project = projects.find(item => item.id === button.dataset.project);
  const product = project?.manufacturingProducts.find(item => item.id === button.dataset.product);
  const process = product?.processes.find(item => item.id === button.dataset.deleteProcess);
  if (!project || !product || !process) return;
  if (!confirm(`¿Eliminar el proceso "${process.name}" de ${product.name}?`)) return;
  product.processes = product.processes.filter(item => item.id !== process.id);
  project.progress = getProjectProgress(project);
  openProjectDetail(project.id);
  renderProjects();
  showToast("Proceso eliminado");
}

function toggleProjectProduct(event) {
  const card = event.currentTarget.closest(".project-product-card");
  if (!card) return;
  const isOpen = card.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
}

const qualityStageIndex = 4;
const qualityChecklistQuestions = [
  "Las medidas, textos y diseno coinciden con el arte aprobado",
  "Los acabados, pintura, cantos y remates estan correctos",
  "La iluminacion, cableado y fuentes se han probado correctamente",
  "No hay golpes, manchas, burbujas, arañazos ni defectos visibles",
  "El trabajo esta limpio, embalado y listo para pasar a la siguiente fase"
];

function applyProductionStageUpdate(project, nextStages, message = "Fases del proyecto actualizadas") {
  syncProjectStageState(project, nextStages);
  openProjectDetail(project.id);
  renderProjects();
  showToast(project.activeProductionStages.length ? message : "Proyecto sin fases activas");
}

function openQualityExitChecklist(project, nextStages) {
  openModal(`<h2 id="modalTitle">Revision de control de calidad</h2>
    <p class="modal-intro">Antes de quitar la fase de Control de calidad, confirma que el trabajo esta revisado y no hay errores pendientes.</p>
    <form id="qualityChecklistForm">
      <div class="quality-checklist">
        ${qualityChecklistQuestions.map((question, index) => `
          <fieldset class="quality-question">
            <legend>${escapeHTML(question)}</legend>
            <label><input type="radio" name="quality-${index}" value="yes" required> Si</label>
            <label><input type="radio" name="quality-${index}" value="no" required> No</label>
          </fieldset>`).join("")}
        <div class="form-field full"><label>Observaciones del operario</label><textarea name="qualityNotes" placeholder="Anota incidencias, correcciones pendientes o comprobaciones realizadas"></textarea></div>
      </div>
      <div class="modal-actions"><button type="button" class="secondary-button cancel-modal">Cancelar</button><button class="primary-button">Confirmar revision</button></div>
    </form>`, true);
  modalContent.querySelector(".cancel-modal").addEventListener("click", closeModal);
  modalContent.querySelector("#qualityChecklistForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const failedQuestions = qualityChecklistQuestions.filter((question, index) => data.get(`quality-${index}`) === "no");
    project.qualityChecklist = {
      reviewedAt: new Date().toISOString(),
      approved: failedQuestions.length === 0,
      failedQuestions,
      notes: data.get("qualityNotes") || ""
    };
    closeModal();
    if (failedQuestions.length) {
      openProjectDetail(project.id);
      renderProjects();
      showToast("Control de calidad se mantiene activo: hay puntos por corregir");
      return;
    }
    applyProductionStageUpdate(project, nextStages, "Control de calidad revisado y cerrado");
  });
}

function updateProductionStage(event) {
  const button = event.currentTarget;
  const project = projects.find(item => item.id === button.dataset.project);
  if (!project) return;
  const selectedStage = Number(button.dataset.productionStage);
  const activeStages = getProjectActiveStages(project);
  const nextStages = activeStages.includes(selectedStage)
    ? activeStages.filter(index => index !== selectedStage)
    : [...activeStages, selectedStage];
  if (selectedStage === qualityStageIndex && activeStages.includes(selectedStage)) {
    openQualityExitChecklist(project, nextStages);
    return;
  }
  applyProductionStageUpdate(project, nextStages);
}

function bindAttachmentEvents(container) {
  container.querySelectorAll(".attachment-input").forEach(input => input.addEventListener("change", event => {
    addProjectAttachments(event.target.dataset.project, event.target.dataset.category, event.target.files);
  }));
  container.querySelectorAll(".attachment-dropzone").forEach(dropzone => {
    dropzone.addEventListener("dragover", event => {
      event.preventDefault();
      dropzone.classList.add("dragging");
    });
    dropzone.addEventListener("dragleave", () => dropzone.classList.remove("dragging"));
    dropzone.addEventListener("drop", event => {
      event.preventDefault();
      dropzone.classList.remove("dragging");
      addProjectAttachments(dropzone.dataset.project, dropzone.dataset.dropCategory, event.dataTransfer.files);
    });
  });
  container.querySelectorAll("[data-remove-attachment]").forEach(button => button.addEventListener("click", removeProjectAttachment));
}

function addProjectAttachments(projectId, category, fileList) {
  const project = projects.find(item => item.id === projectId);
  if (!project || !fileList.length) return;
  const files = Array.from(fileList);
  if (category !== "design" && files.some(file => !file.type.startsWith("image/"))) {
    showToast("En este apartado solo se pueden añadir imágenes");
    return;
  }
  files.forEach(file => {
    project.attachments[category].push({
      id: `attachment-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
      url: URL.createObjectURL(file)
    });
  });
  openProjectDetail(project.id);
  showToast(`${files.length} archivo${files.length > 1 ? "s" : ""} añadido${files.length > 1 ? "s" : ""}`);
}

function removeProjectAttachment(event) {
  const button = event.currentTarget;
  const project = projects.find(item => item.id === button.dataset.project);
  if (!project) return;
  const attachments = project.attachments[button.dataset.category];
  const index = attachments.findIndex(item => item.id === button.dataset.removeAttachment);
  if (index < 0) return;
  URL.revokeObjectURL(attachments[index].url);
  attachments.splice(index, 1);
  openProjectDetail(project.id);
  showToast("Archivo eliminado");
}

function updateProcessAssignee(event) {
  const { project, process } = findProcess(event.target.dataset.project, event.target.dataset.product, event.target.dataset.process);
  if (!project || !process) return;
  process.assignee = event.target.value;
  renderAttentionPanel();
  showToast(`${process.name} asignado a ${process.assignee}`);
}

function updateProcessStatus(event) {
  const button = event.currentTarget;
  const { project, process } = findProcess(button.dataset.project, button.dataset.product, button.dataset.process);
  if (!project || !process) return;
  process.status = button.dataset.processStatus;
  project.progress = getProjectProgress(project);
  openProjectDetail(project.id);
  renderAttentionPanel();
  showToast(`${process.name}: ${processStates[process.status].label}`);
}

const timelineData = [
  { name:"Panadería Origen", phase:"Fabricación corpóreas", initials:"PO", color:"#356ce3", start:1, span:8 },
  { name:"Flota Logista", phase:"Aplicación vehículos", initials:"FL", color:"#e89b39", start:2, span:3 },
  { name:"Clínica Arce", phase:"Diseño técnico", initials:"CA", color:"#7865dc", start:4, span:7 },
  { name:"Neón Umami", phase:"Montaje LED", initials:"NU", color:"#25a477", start:1, span:5 },
  { name:"Oficinas Lumen", phase:"Instalación señalética", initials:"OL", color:"#df5d60", start:7, span:3 },
  { name:"Atlas Fitness", phase:"Aprobación cliente", initials:"AF", color:"#8793a6", start:9, span:4 }
];
document.getElementById("timelineDays").innerHTML = Array.from({length:14}, (_,i) => `<span>${["L","M","X","J","V","S","D"][i%7]}<strong>${15+i}</strong></span>`).join("");
document.getElementById("timelineRows").innerHTML = timelineData.map(t => `<div class="timeline-row"><div class="timeline-label"><span class="project-thumb" style="background:${t.color}">${t.initials}</span><div><strong>${t.name}</strong><small>${t.phase}</small></div></div><div class="timeline-track"><span class="timeline-bar" style="left:${(t.start-1)*7.142}%;width:${t.span*7.142}%;background:${t.color}">${t.phase}</span></div></div>`).join("");

function renderCalendar() {
  const weekdays = ["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];
  const events = { 2:[["Clínica Arce","violet"]], 5:[["Panadería Origen",""]], 9:[["Atlas Fitness","green"]], 11:[["Neón Umami","amber"]], 16:[["Flota Logista",""],["Clínica Arce","violet"]], 18:[["Panadería Origen","amber"]], 19:[["Neón Umami","green"]], 22:[["Oficinas Lumen",""]], 25:[["Atlas Fitness","violet"]], 29:[["Moda Cobalto","green"]] };
  let html = weekdays.map(d => `<div class="calendar-weekday">${d}</div>`).join("");
  const cells = [{n:25,m:true},{n:26,m:true},{n:27,m:true},{n:28,m:true},{n:29,m:true},{n:30,m:true},{n:31,m:true}, ...Array.from({length:30},(_,i)=>({n:i+1})), {n:1,m:true},{n:2,m:true},{n:3,m:true},{n:4,m:true},{n:5,m:true}];
  html += cells.map(d => `<div class="calendar-day ${d.m?"muted":""} ${d.n===16&&!d.m?"today":""}"><span class="day-number">${d.n}</span>${!d.m && events[d.n] ? events[d.n].map(e=>`<div class="calendar-event ${e[1]}">${e[0]}</div>`).join("") : ""}</div>`).join("");
  document.getElementById("calendarGrid").innerHTML = html;
}
renderCalendar();

const materialStatusConfig = {
  stock: { label: "En stock", className: "success" },
  "to-order": { label: "Por pedir", className: "warning" },
  ordered: { label: "Pedido", className: "info" }
};

function getMaterialCategories() {
  return [...new Set(purchaseMaterials.map(material => material.category))].sort((a, b) => a.localeCompare(b));
}

function getFilteredMaterials() {
  const query = document.getElementById("purchaseSearch")?.value.toLowerCase().trim() || "";
  const status = document.getElementById("materialStatusFilter")?.value || "all";
  return purchaseMaterials.filter(material => {
    const matchesCategory = selectedMaterialCategory === "all" || material.category === selectedMaterialCategory;
    const matchesStatus = status === "all" || material.status === status;
    const matchesQuery = !query || `${material.name} ${material.detail} ${material.supplier} ${material.notes}`.toLowerCase().includes(query);
    return matchesCategory && matchesStatus && matchesQuery;
  });
}

function renderMaterialStats() {
  const counts = {
    total: purchaseMaterials.length,
    stock: purchaseMaterials.filter(material => material.status === "stock").length,
    toOrder: purchaseMaterials.filter(material => material.status === "to-order").length,
    ordered: purchaseMaterials.filter(material => material.status === "ordered").length
  };
  document.getElementById("materialTotal").textContent = counts.total;
  document.getElementById("materialStock").textContent = counts.stock;
  document.getElementById("materialToOrder").textContent = counts.toOrder;
  document.getElementById("materialOrdered").textContent = counts.ordered;
}

function renderMaterialCategories() {
  const container = document.getElementById("warehouseCategories");
  if (!container) return;
  const categories = [{ name: "all", label: "Todas", count: purchaseMaterials.length }]
    .concat(getMaterialCategories().map(category => ({
      name: category,
      label: category,
      count: purchaseMaterials.filter(material => material.category === category).length
    })));
  container.innerHTML = categories.map(category => `
    <button class="warehouse-category ${selectedMaterialCategory === category.name ? "active" : ""}" data-material-category="${escapeHTML(category.name)}">
      <span>${escapeHTML(category.label)}</span><strong>${category.count}</strong>
    </button>`).join("");
  container.querySelectorAll("[data-material-category]").forEach(button => button.addEventListener("click", () => {
    selectedMaterialCategory = button.dataset.materialCategory;
    renderPurchases();
  }));
}

function renderMaterialCategorySection(category, materials) {
  return `
    <section class="warehouse-section">
      <div class="warehouse-section-head">
        <h2>${escapeHTML(category)}</h2>
        <span>${materials.length} item${materials.length === 1 ? "" : "s"}</span>
      </div>
      <div class="warehouse-material-list">
        ${materials.map(material => renderMaterialRow(material)).join("")}
      </div>
    </section>`;
}

function renderMaterialRow(material) {
  const status = materialStatusConfig[material.status];
  const quantityInput = material.status === "stock"
    ? `<div class="material-pending"><span>Sin cantidad pendiente</span></div>`
    : `<label class="material-qty"><span>${material.status === "ordered" ? "Pedido" : "A pedir"}</span><input type="number" min="1" value="${material.orderQuantity || 1}" data-material-qty="${material.id}"><small>${escapeHTML(material.unit)}</small></label>`;
  return `
    <article class="warehouse-material-row">
      <div class="material-info">
        <strong>${escapeHTML(material.name)}</strong>
        <small>${escapeHTML(material.detail || material.supplier)}</small>
        ${material.notes ? `<em>${escapeHTML(material.notes)}</em>` : ""}
      </div>
      <span class="pill ${status.className}">${status.label}</span>
      ${quantityInput}
      <div class="material-actions">
        <button title="Marcar por pedir" data-material-status="to-order" data-material-id="${material.id}">!</button>
        <button title="Marcar como pedido" data-material-status="ordered" data-material-id="${material.id}">⇄</button>
        <button title="Marcar como recibido" data-material-status="stock" data-material-id="${material.id}">✓</button>
        <button title="Editar material" data-edit-material="${material.id}">✎</button>
        <button class="danger" title="Eliminar material" data-delete-material="${material.id}">×</button>
      </div>
    </article>`;
}

function renderPurchases() {
  renderMaterialStats();
  renderMaterialCategories();
  const shown = getFilteredMaterials();
  const table = document.getElementById("purchaseTable");
  if (!table) return;
  const grouped = getMaterialCategories()
    .map(category => ({ category, materials: shown.filter(material => material.category === category) }))
    .filter(group => group.materials.length);
  table.innerHTML = grouped.length
    ? grouped.map(group => renderMaterialCategorySection(group.category, group.materials)).join("")
    : `<div class="warehouse-empty panel">No hay materiales que coincidan con el filtro.</div>`;
  table.querySelectorAll("[data-material-status]").forEach(button => button.addEventListener("click", updateMaterialStatus));
  table.querySelectorAll("[data-material-qty]").forEach(input => input.addEventListener("change", updateMaterialQuantity));
  table.querySelectorAll("[data-edit-material]").forEach(button => button.addEventListener("click", () => openMaterialForm(button.dataset.editMaterial)));
  table.querySelectorAll("[data-delete-material]").forEach(button => button.addEventListener("click", deleteMaterial));
  renderAttentionPanel();
}

function updateMaterialStatus(event) {
  const material = purchaseMaterials.find(item => item.id === event.currentTarget.dataset.materialId);
  if (!material) return;
  const nextStatus = event.currentTarget.dataset.materialStatus;
  if ((nextStatus === "to-order" || nextStatus === "ordered") && !material.orderQuantity) material.orderQuantity = 1;
  if (nextStatus === "stock") {
    material.orderQuantity = 0;
  }
  material.status = nextStatus;
  renderPurchases();
  showToast(`Material actualizado: ${materialStatusConfig[nextStatus].label}`);
}

function updateMaterialQuantity(event) {
  const material = purchaseMaterials.find(item => item.id === event.currentTarget.dataset.materialQty);
  if (!material) return;
  material.orderQuantity = Math.max(1, Number(event.currentTarget.value) || 1);
  renderMaterialStats();
  renderAttentionPanel();
  showToast("Cantidad a pedir actualizada");
}

function deleteMaterial(event) {
  const material = purchaseMaterials.find(item => item.id === event.currentTarget.dataset.deleteMaterial);
  if (!material) return;
  if (!confirm(`¿Eliminar "${material.name}" del almacén?`)) return;
  purchaseMaterials = purchaseMaterials.filter(item => item.id !== material.id);
  renderPurchases();
  showToast("Material eliminado");
}

renderPurchases();
document.getElementById("purchaseSearch").addEventListener("input", () => renderPurchases());
document.getElementById("materialStatusFilter").addEventListener("change", () => renderPurchases());
document.getElementById("toggleCategoriesButton").addEventListener("click", () => {
  document.querySelector(".warehouse-categories")?.classList.toggle("collapsed");
});

function renderCatalog(query = "", category = "all") {
  const shown = products.filter(p => (category === "all" || p.category === category) && Object.values(p).join(" ").toLowerCase().includes(query.toLowerCase()));
  document.getElementById("catalogGrid").innerHTML = shown.map(p=>`
    <article class="product-card">
      <div class="product-visual ${p.visual} ${p.coverImage ? "has-image" : ""}">
        ${p.coverImage ? `<img src="${escapeHTML(p.coverImage)}" alt="Portada de ${escapeHTML(p.name)}">` : ""}
        <span class="product-code">${escapeHTML(p.code)}</span>
        <button class="catalog-edit-button" data-edit-catalog-product="${escapeHTML(p.code)}" type="button">Editar</button>
      </div>
      <div class="product-card-body"><span class="product-category">${p.category}</span><h3>${p.name}</h3><p>${p.description}</p>
      <div class="product-materials"><strong>Materiales</strong><span>${p.materials || "Por definir"}</span></div>
      <div class="process-flow">${p.processes.map((s,i)=>`${i?'<span class="process-arrow">→</span>':''}<span class="process-step">${s}</span>`).join("")}</div>
      <div class="product-meta"><span>Tiempo <strong>${p.time}</strong></span><span>Coste base <strong>${p.cost}</strong></span></div></div>
    </article>`).join("") || '<div class="empty-state panel">No se han encontrado productos.</div>';
  document.querySelectorAll("[data-edit-catalog-product]").forEach(button => button.addEventListener("click", () => openCatalogProductForm(button.dataset.editCatalogProduct)));
}
renderCatalog();
document.getElementById("catalogSearch").addEventListener("input", e => renderCatalog(e.target.value, document.getElementById("categoryFilter").value));
document.getElementById("categoryFilter").addEventListener("change", e => renderCatalog(document.getElementById("catalogSearch").value, e.target.value));

const backdrop = document.getElementById("modalBackdrop");
const modalContent = document.getElementById("modalContent");
function openModal(content, wide = false) {
  modalContent.innerHTML = content;
  backdrop.querySelector(".modal").classList.toggle("wide", wide);
  backdrop.classList.add("open");
  setTimeout(()=>modalContent.querySelector("input")?.focus(),50);
}
function closeModal() {
  backdrop.classList.remove("open");
  backdrop.querySelector(".modal").classList.remove("wide");
}
document.getElementById("modalClose").addEventListener("click", closeModal);
backdrop.addEventListener("click", e => { if(e.target===backdrop) closeModal(); });
document.addEventListener("keydown", e => { if(e.key==="Escape") closeModal(); if((e.metaKey||e.ctrlKey)&&e.key==="k"){e.preventDefault();document.getElementById("globalSearch").focus();} });

function productPickerMarkup() {
  return `<div class="form-field full"><div class="form-section-label"><label>Productos a fabricar</label><span>Selecciona uno o varios productos del catálogo</span></div>
    <div class="project-product-picker">${products.map(product => `
      <div class="picker-product">
        <label class="picker-select">
          <input type="checkbox" name="selectedProduct" value="${escapeHTML(product.code)}">
          <span class="picker-check"></span>
          <span class="picker-copy"><strong>${escapeHTML(product.name)}</strong><small>${escapeHTML(product.code)} · ${escapeHTML(product.processes.length)} procesos</small></span>
        </label>
        <span class="picker-quantity"><small>Uds.</small><input class="product-quantity-input" type="number" min="1" value="1" data-quantity-for="${escapeHTML(product.code)}" disabled></span>
      </div>`).join("")}
    </div>
  </div>`;
}

function bindProductPicker() {
  modalContent.querySelectorAll('input[name="selectedProduct"]').forEach(checkbox => checkbox.addEventListener("change", () => {
    const quantity = modalContent.querySelector(`[data-quantity-for="${checkbox.value}"]`);
    quantity.disabled = !checkbox.checked;
    checkbox.closest(".picker-product").classList.toggle("selected", checkbox.checked);
  }));
}

function collectSelectedProducts() {
  return Array.from(modalContent.querySelectorAll('input[name="selectedProduct"]:checked')).map(checkbox => {
    const product = products.find(item => item.code === checkbox.value);
    const quantity = Number(modalContent.querySelector(`[data-quantity-for="${checkbox.value}"]`).value) || 1;
    return createProjectProduct(product, quantity);
  });
}

const projectForm = () => `<h2 id="modalTitle">Nuevo proyecto</h2><p class="modal-intro">Registra los datos del cliente y define desde el inicio qué hay que fabricar.</p>
  <form id="projectForm">
    <div class="form-grid">
      <div class="form-field"><label>Nombre del cliente</label><input name="client" required placeholder="Ej. Grupo Costa Azul"></div>
      <div class="form-field"><label>Nombre del proyecto</label><input name="name" required placeholder="Ej. Rotulación nueva tienda Gran Vía"></div>
      <div class="form-field"><label>Fecha estimada de entrega</label><input name="due" type="date" required></div>
      <div class="form-field"><label>Responsable del proyecto</label><select name="owner">${team.filter(person => person !== "Sin asignar").map(person => `<option>${person}</option>`).join("")}</select></div>
      <div class="form-field"><label>Entorno del rótulo</label><select name="environment"><option>Exterior</option><option>Interior</option><option>Interior y exterior</option><option>Vehículo</option></select></div>
      <div class="form-field"><label>Instalación</label><select name="installation"><option>Incluida</option><option>Solo fabricación</option><option>Por confirmar</option></select></div>
      <div class="form-field full"><label>Dirección de instalación</label><input name="location" placeholder="Calle, localidad y datos de acceso"></div>
      <div class="form-field"><label>Persona de contacto</label><input name="contact" placeholder="Nombre y teléfono"></div>
      <div class="form-field"><label>Presupuesto estimado (€)</label><input name="budget" type="number" min="0" placeholder="0"></div>
      <div class="form-field"><label>Referencia interna</label><input name="reference" placeholder="Ej. PR-2026-018"></div>
      <div class="form-field full"><label>Descripción y observaciones</label><textarea name="description" placeholder="Alcance general, acabados acordados o indicaciones del cliente"></textarea></div>
      ${productPickerMarkup()}
    </div>
    <div class="modal-actions"><button type="button" class="secondary-button cancel-modal">Cancelar</button><button class="primary-button">Crear proyecto</button></div>
  </form>`;

function openProjectForm() {
  openModal(projectForm(), true);
  bindProductPicker();
  modalContent.querySelector(".cancel-modal").addEventListener("click", closeModal);
  modalContent.querySelector("#projectForm").addEventListener("submit", e => {
    e.preventDefault(); const data = new FormData(e.target); const owner = data.get("owner");
    const newProject = {
      id: `project-${Date.now()}`,
      name:data.get("name"),
      client:data.get("client"),
      reference:data.get("reference"),
      description:data.get("description"),
      environment:data.get("environment"),
      installation:data.get("installation"),
      location:data.get("location"),
      contact:data.get("contact"),
      status:"Diseño",
      statusClass:"violet",
      productionStage:0,
      activeProductionStages:[0],
      progress:0,
      due:formatProjectDate(data.get("due")),
      dueISO:data.get("due"),
      owner,
      initials:getInitials(owner),
      budget:Number(data.get("budget")||0).toLocaleString("es-ES")+" €",
      color:"#7865dc",
      group:"active",
      manufacturingProducts: collectSelectedProducts(),
      attachments: { design: [], finished: [], installation: [] }
    };
    projects.unshift(newProject);
    renderProjects(); closeModal(); navigate("projects"); openProjectDetail(newProject.id); showToast("Proyecto creado correctamente");
  });
}
document.getElementById("newProjectButton").addEventListener("click", openProjectForm);
document.querySelectorAll(".add-project-trigger").forEach(b=>b.addEventListener("click",openProjectForm));

function projectOwnerOptions(project) {
  const availableOwners = team.filter(person => person !== "Sin asignar");
  if (!availableOwners.includes(project.owner)) availableOwners.unshift(project.owner);
  return availableOwners.map(person => `<option value="${escapeHTML(person)}" ${person === project.owner ? "selected" : ""}>${escapeHTML(person)}</option>`).join("");
}

function openEditProjectForm(projectId) {
  const project = projects.find(item => item.id === projectId);
  if (!project) return;
  const dueValue = project.dueISO || dateToInputValue(project.due);
  openModal(`<h2 id="modalTitle">Editar proyecto</h2><p class="modal-intro">Actualiza la información general sin modificar productos, procesos ni archivos.</p>
    <form id="editProjectForm">
      <div class="form-grid">
        <div class="form-field"><label>Nombre del cliente</label><input name="client" required value="${escapeHTML(project.client)}"></div>
        <div class="form-field"><label>Nombre del proyecto</label><input name="name" required value="${escapeHTML(project.name)}"></div>
        <div class="form-field"><label>Fecha estimada de entrega</label><input name="due" type="date" required value="${escapeHTML(dueValue)}"></div>
        <div class="form-field"><label>Responsable del proyecto</label><select name="owner">${projectOwnerOptions(project)}</select></div>
        <div class="form-field"><label>Entorno del rótulo</label><select name="environment">${["Exterior","Interior","Interior y exterior","Vehículo"].map(value => `<option ${project.environment === value ? "selected" : ""}>${value}</option>`).join("")}</select></div>
        <div class="form-field"><label>Instalación</label><select name="installation">${["Incluida","Solo fabricación","Por confirmar"].map(value => `<option ${project.installation === value ? "selected" : ""}>${value}</option>`).join("")}</select></div>
        <div class="form-field full"><label>Dirección de instalación</label><input name="location" value="${escapeHTML(project.location || "")}" placeholder="Calle, localidad y datos de acceso"></div>
        <div class="form-field"><label>Persona de contacto</label><input name="contact" value="${escapeHTML(project.contact || "")}" placeholder="Nombre y teléfono"></div>
        <div class="form-field"><label>Presupuesto estimado (€)</label><input name="budget" type="number" min="0" step="0.01" value="${escapeHTML(budgetToNumber(project.budget))}"></div>
        <div class="form-field"><label>Referencia interna</label><input name="reference" value="${escapeHTML(project.reference || "")}" placeholder="Ej. PR-2026-018"></div>
        <div class="form-field full"><label>Descripción y observaciones</label><textarea name="description" placeholder="Alcance, acabados o indicaciones">${escapeHTML(project.description || "")}</textarea></div>
      </div>
      <div class="modal-actions"><button type="button" class="secondary-button cancel-modal">Cancelar</button><button class="primary-button">Guardar cambios</button></div>
    </form>`, true);
  modalContent.querySelector(".cancel-modal").addEventListener("click", closeModal);
  modalContent.querySelector("#editProjectForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.target);
    project.client = data.get("client");
    project.name = data.get("name");
    project.dueISO = data.get("due");
    project.due = formatProjectDate(project.dueISO);
    project.owner = data.get("owner");
    project.initials = getInitials(project.owner);
    project.environment = data.get("environment");
    project.installation = data.get("installation");
    project.location = data.get("location");
    project.contact = data.get("contact");
    project.budget = Number(data.get("budget") || 0).toLocaleString("es-ES") + " €";
    project.reference = data.get("reference");
    project.description = data.get("description");
    closeModal();
    renderProjects();
    openProjectDetail(project.id);
    showToast("Información del proyecto actualizada");
  });
}

function openAddProductToProject(projectId) {
  const project = projects.find(item => item.id === projectId);
  if (!project) return;
  openModal(`<h2 id="modalTitle">Añadir desde catálogo</h2><p class="modal-intro">Incorpora productos del catálogo a ${escapeHTML(project.name)}. Sus procesos se crearán automáticamente.</p>
    <form id="addProjectProductForm"><div class="form-grid">${productPickerMarkup()}</div>
    <div class="modal-actions"><button type="button" class="secondary-button cancel-modal">Cancelar</button><button class="primary-button">Añadir seleccionados</button></div></form>`, true);
  bindProductPicker();
  modalContent.querySelector(".cancel-modal").addEventListener("click", closeModal);
  modalContent.querySelector("#addProjectProductForm").addEventListener("submit", event => {
    event.preventDefault();
    const selected = collectSelectedProducts();
    if (!selected.length) {
      showToast("Selecciona al menos un producto");
      return;
    }
    project.manufacturingProducts.push(...selected);
    closeModal();
    openProjectDetail(project.id);
    showToast(`${selected.length} producto${selected.length > 1 ? "s" : ""} añadido${selected.length > 1 ? "s" : ""}`);
  });
}

function openCreateProjectProductForm(projectId) {
  const project = projects.find(item => item.id === projectId);
  if (!project) return;
  openModal(`<h2 id="modalTitle">Crear producto del proyecto</h2><p class="modal-intro">Crea un producto único para ${escapeHTML(project.name)} y define sus tareas de fabricación.</p>
    <form id="customProjectProductForm">
      <div class="form-grid">
        <div class="form-field full"><label>Nombre del producto</label><input name="name" required placeholder="Ej. Letras corpóreas fachada principal"></div>
        <div class="form-field"><label>Familia</label><select name="category"><option>Letras corpóreas</option><option>Rótulos luminosos</option><option>Neón LED</option><option>Vinilos</option><option>Vehículos</option><option>Señalética</option><option>Impresión gran formato</option><option>Otro</option></select></div>
        <div class="form-field"><label>Código interno</label><input name="code" placeholder="Opcional"></div>
        <div class="form-field"><label>Cantidad</label><input name="quantity" type="number" min="1" value="1" required></div>
        <div class="form-field"><label>Medidas / formato</label><input name="dimensions" placeholder="Ej. 3200 × 850 mm"></div>
        <div class="form-field full"><label>Materiales</label><input name="materials" placeholder="Aluminio, metacrilato, LED, vinilo..."></div>
        <div class="form-field full"><label>Color y acabado</label><input name="finish" placeholder="Ej. RAL 9005 mate / frontal opal"></div>
        <div class="form-field full"><label>Tareas de fabricación</label><textarea name="tasks" required placeholder="Una tarea por línea:&#10;Diseño y despiece&#10;Corte CNC&#10;Pintura&#10;Montaje LED&#10;Prueba de luz"></textarea></div>
      </div>
      <div class="modal-actions"><button type="button" class="secondary-button cancel-modal">Cancelar</button><button class="primary-button">Crear producto</button></div>
    </form>`, true);
  modalContent.querySelector(".cancel-modal").addEventListener("click", closeModal);
  modalContent.querySelector("#customProjectProductForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const product = createCustomProjectProduct(data);
    if (!product.processes.length) {
      showToast("Añade al menos una tarea");
      return;
    }
    project.manufacturingProducts.push(product);
    closeModal();
    openProjectDetail(project.id);
    renderProjects();
    showToast("Producto creado en el proyecto");
  });
}

document.getElementById("legacyNewProductButton")?.addEventListener("click", () => {
  openModal(`<h2 id="modalTitle">Nuevo producto de rotulación</h2><p class="modal-intro">Define materiales y la ruta estándar que seguirá en diseño, taller y montaje.</p><form id="productForm"><div class="form-grid"><div class="form-field full"><label>Nombre del producto</label><input name="name" required placeholder="Ej. Banderola luminosa a dos caras"></div><div class="form-field"><label>Código</label><input name="code" required placeholder="BAND-001"></div><div class="form-field"><label>Familia</label><select name="category"><option>Letras corpóreas</option><option>Rótulos luminosos</option><option>Neón LED</option><option>Vinilos</option><option>Vehículos</option><option>Señalética</option><option>Impresión gran formato</option></select></div><div class="form-field full"><label>Descripción</label><textarea name="description" required placeholder="Configuración, iluminación y uso recomendado"></textarea></div><div class="form-field full"><label>Materiales habituales</label><input name="materials" required placeholder="Aluminio, metacrilato opal, módulos LED, fuente"></div><div class="form-field full"><label>Procesos de producción</label><input name="processes" required placeholder="Diseño, Corte CNC, Plegado, Pintura, LED, Cableado, Prueba"></div><div class="form-field"><label>Tiempo estimado</label><input name="time" placeholder="Ej. 18 h"></div><div class="form-field"><label>Coste base</label><input name="cost" placeholder="Ej. Desde 850 €"></div></div><div class="modal-actions"><button type="button" class="secondary-button cancel-modal">Cancelar</button><button class="primary-button">Añadir al catálogo</button></div></form>`);
  modalContent.querySelector(".cancel-modal").addEventListener("click", closeModal);
  modalContent.querySelector("#productForm").addEventListener("submit", e => { e.preventDefault(); const d=new FormData(e.target); products.unshift({code:d.get("code"),name:d.get("name"),category:d.get("category"),description:d.get("description"),materials:d.get("materials"),processes:d.get("processes").split(",").map(s=>s.trim()).filter(Boolean),time:d.get("time")||"—",cost:d.get("cost")||"—",visual:"blue"});renderCatalog();closeModal();showToast("Producto añadido al catálogo"); });
});

function catalogCategoryOptions(selected = "") {
  const categories = ["Letras corpóreas", "Rótulos luminosos", "Neón LED", "Vinilos", "Vehículos", "Señalética", "Impresión gran formato", "Otro"];
  return categories.map(category => `<option value="${escapeHTML(category)}" ${category === selected ? "selected" : ""}>${escapeHTML(category)}</option>`).join("");
}

function openCatalogProductForm(productCode = null) {
  const product = products.find(item => item.code === productCode);
  const editing = Boolean(product);
  const values = product || { code: "", name: "", category: "Letras corpóreas", description: "", materials: "", processes: [], time: "", cost: "", visual: "blue", coverImage: "" };
  let pendingCoverImage = values.coverImage || "";
  openModal(`<h2 id="modalTitle">${editing ? "Editar producto del catálogo" : "Nuevo producto de rotulación"}</h2>
    <p class="modal-intro">Define la información comercial, la ruta de fabricación y una imagen de portada.</p>
    <form id="catalogProductForm">
      <div class="catalog-cover-editor">
        <div class="catalog-cover-preview ${pendingCoverImage ? "has-image" : ""}" id="catalogCoverPreview">
          ${pendingCoverImage ? `<img src="${escapeHTML(pendingCoverImage)}" alt="Vista previa de portada">` : '<span>Sin imagen de portada</span>'}
        </div>
        <div class="catalog-cover-actions">
          <label class="secondary-button catalog-cover-upload">Seleccionar imagen<input id="catalogCoverInput" type="file" accept="image/*"></label>
          <button class="secondary-button" id="removeCatalogCover" type="button" ${pendingCoverImage ? "" : "disabled"}>Quitar imagen</button>
        </div>
      </div>
      <div class="form-grid">
        <div class="form-field full"><label>Nombre del producto</label><input name="name" required value="${escapeHTML(values.name)}" placeholder="Ej. Banderola luminosa a dos caras"></div>
        <div class="form-field"><label>Código</label><input name="code" required value="${escapeHTML(values.code)}" placeholder="BAND-001"></div>
        <div class="form-field"><label>Familia</label><select name="category">${catalogCategoryOptions(values.category)}</select></div>
        <div class="form-field full"><label>Descripción</label><textarea name="description" required placeholder="Configuración, iluminación y uso recomendado">${escapeHTML(values.description)}</textarea></div>
        <div class="form-field full"><label>Materiales habituales</label><input name="materials" required value="${escapeHTML(values.materials)}" placeholder="Aluminio, metacrilato opal, módulos LED, fuente"></div>
        <div class="form-field full"><label>Procesos de producción</label><textarea name="processes" required placeholder="Un proceso por línea">${escapeHTML(values.processes.join("\n"))}</textarea></div>
        <div class="form-field"><label>Tiempo estimado</label><input name="time" value="${escapeHTML(values.time || "")}" placeholder="Ej. 18 h"></div>
        <div class="form-field"><label>Coste base</label><input name="cost" value="${escapeHTML(values.cost || "")}" placeholder="Ej. Desde 850 €"></div>
      </div>
      <div class="modal-actions"><button type="button" class="secondary-button cancel-modal">Cancelar</button><button class="primary-button">${editing ? "Guardar cambios" : "Añadir al catálogo"}</button></div>
    </form>`, true);

  const preview = modalContent.querySelector("#catalogCoverPreview");
  const removeButton = modalContent.querySelector("#removeCatalogCover");
  const updateCoverPreview = () => {
    preview.classList.toggle("has-image", Boolean(pendingCoverImage));
    preview.innerHTML = pendingCoverImage ? `<img src="${escapeHTML(pendingCoverImage)}" alt="Vista previa de portada">` : "<span>Sin imagen de portada</span>";
    removeButton.disabled = !pendingCoverImage;
  };
  modalContent.querySelector("#catalogCoverInput").addEventListener("change", event => {
    const file = event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("Selecciona un archivo de imagen");
      return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      pendingCoverImage = reader.result;
      updateCoverPreview();
    });
    reader.readAsDataURL(file);
  });
  removeButton.addEventListener("click", () => {
    pendingCoverImage = "";
    modalContent.querySelector("#catalogCoverInput").value = "";
    updateCoverPreview();
  });
  modalContent.querySelector(".cancel-modal").addEventListener("click", closeModal);
  modalContent.querySelector("#catalogProductForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const code = data.get("code").trim();
    const duplicate = products.find(item => item !== product && item.code.toLowerCase() === code.toLowerCase());
    if (duplicate) {
      showToast("Ya existe otro producto con ese código");
      return;
    }
    const nextProduct = {
      code,
      name: data.get("name").trim(),
      category: data.get("category"),
      description: data.get("description").trim(),
      materials: data.get("materials").trim(),
      processes: data.get("processes").split(/\r?\n|,/).map(value => value.trim()).filter(Boolean),
      time: data.get("time").trim() || "—",
      cost: data.get("cost").trim() || "—",
      visual: values.visual || "blue",
      coverImage: pendingCoverImage
    };
    if (editing) Object.assign(product, nextProduct);
    else products.unshift(nextProduct);
    closeModal();
    renderCatalog(document.getElementById("catalogSearch").value, document.getElementById("categoryFilter").value);
    showToast(editing ? "Producto del catálogo actualizado" : "Producto añadido al catálogo");
  });
}

document.getElementById("newProductButton").addEventListener("click", () => openCatalogProductForm());

function materialCategoryOptions(selected = "") {
  return getMaterialCategories().map(category => `<option value="${escapeHTML(category)}" ${category === selected ? "selected" : ""}>${escapeHTML(category)}</option>`).join("");
}

function openMaterialForm(materialId = null) {
  const material = purchaseMaterials.find(item => item.id === materialId);
  const editing = Boolean(material);
  const fallback = { name: "", category: getMaterialCategories()[0] || "Otros", detail: "", supplier: "", notes: "", unit: "ud.", status: "stock", orderQuantity: 1 };
  const values = material || fallback;
  openModal(`<h2 id="modalTitle">${editing ? "Editar material" : "Nuevo material"}</h2><p class="modal-intro">Gestiona el material por categoria y decide si esta en stock, por pedir o ya pedido.</p>
    <form id="materialForm">
      <div class="form-grid">
        <div class="form-field full"><label>Nombre del material</label><input name="name" required value="${escapeHTML(values.name)}" placeholder="Ej. Metacrilato opal 3 mm"></div>
        <div class="form-field"><label>Categoria</label><select name="category" required>${materialCategoryOptions(values.category)}<option value="Otros" ${values.category === "Otros" ? "selected" : ""}>Otros</option></select></div>
        <div class="form-field"><label>Unidad</label><input name="unit" required value="${escapeHTML(values.unit)}" placeholder="ud., planchas, bobinas..."></div>
        <div class="form-field full"><label>Medida / descripcion corta</label><input name="detail" value="${escapeHTML(values.detail)}" placeholder="Ej. 200 x 300 cm, blanco mate, IP67..."></div>
        <div class="form-field"><label>Proveedor habitual</label><input name="supplier" value="${escapeHTML(values.supplier)}" placeholder="Proveedor"></div>
        <div class="form-field"><label>Estado</label><select name="status"><option value="stock" ${values.status === "stock" ? "selected" : ""}>En stock</option><option value="to-order" ${values.status === "to-order" ? "selected" : ""}>Por pedir</option><option value="ordered" ${values.status === "ordered" ? "selected" : ""}>Pedido</option></select></div>
        <div class="form-field"><label>Cantidad a pedir</label><input name="orderQuantity" type="number" min="0" value="${values.orderQuantity || (values.status === "stock" ? 0 : 1)}"></div>
        <div class="form-field full"><label>Notas</label><textarea name="notes" placeholder="Uso habitual, referencias, colores o avisos de compra">${escapeHTML(values.notes || "")}</textarea></div>
      </div>
      <div class="modal-actions"><button type="button" class="secondary-button cancel-modal">Cancelar</button><button class="primary-button">${editing ? "Guardar cambios" : "Crear material"}</button></div>
    </form>`, true);
  modalContent.querySelector(".cancel-modal").addEventListener("click", closeModal);
  modalContent.querySelector("#materialForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const status = data.get("status");
    const nextMaterial = {
      id: material?.id || `MAT-${String(Date.now()).slice(-6)}`,
      name: data.get("name").trim(),
      category: data.get("category"),
      detail: data.get("detail").trim(),
      supplier: data.get("supplier").trim(),
      notes: data.get("notes").trim(),
      unit: data.get("unit").trim() || "ud.",
      status,
      orderQuantity: status === "stock" ? 0 : Math.max(1, Number(data.get("orderQuantity")) || 1)
    };
    if (editing) {
      Object.assign(material, nextMaterial);
    } else {
      purchaseMaterials.unshift(nextMaterial);
      selectedMaterialCategory = "all";
    }
    closeModal();
    renderPurchases();
    showToast(editing ? "Material actualizado" : "Material creado");
  });
}

function simpleForm(title, intro, fields, success) {
  openModal(`<h2 id="modalTitle">${title}</h2><p class="modal-intro">${intro}</p><form id="simpleForm"><div class="form-grid">${fields}</div><div class="modal-actions"><button type="button" class="secondary-button cancel-modal">Cancelar</button><button class="primary-button">Guardar</button></div></form>`);
  modalContent.querySelector(".cancel-modal").addEventListener("click",closeModal);
  modalContent.querySelector("#simpleForm").addEventListener("submit",e=>{e.preventDefault();closeModal();showToast(success);});
}
document.getElementById("newInstallButton").addEventListener("click",()=>simpleForm("Nueva instalación","Programa el montaje en obra y asigna instaladores, vehículo y medios de elevación.",'<div class="form-field full"><label>Proyecto</label><select required><option>Panadería Origen</option><option>Clínica Arce</option><option>Restaurante Umami</option></select></div><div class="form-field"><label>Fecha</label><input type="date" required></div><div class="form-field"><label>Hora</label><input type="time" required></div><div class="form-field full"><label>Dirección y acceso</label><input required placeholder="Dirección, altura y condiciones de acceso"></div><div class="form-field full"><label>Equipo y medios</label><input placeholder="Instaladores, escalera, plataforma elevadora..."></div>',"Instalación programada"));

document.getElementById("newPurchaseButton").addEventListener("click", () => openMaterialForm());

document.getElementById("globalSearch").addEventListener("input", e => {
  const q=e.target.value.trim(); if(q){navigate("projects");renderProjects("all",q);} else renderProjects();
});

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer); document.getElementById("toastText").textContent=message; document.getElementById("toast").classList.add("show");
  toastTimer=setTimeout(()=>document.getElementById("toast").classList.remove("show"),2600);
}
