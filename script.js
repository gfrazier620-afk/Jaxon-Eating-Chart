const BIRTH_DATE = new Date(2026, 1, 23); // Feb 23, 2026
const FOOD_STORAGE_KEY = 'jaxon-first-foods-v1';
const GROWTH_STORAGE_KEY = 'jaxon-growth-log-v1';

const FOOD_DATA = [
  { name: 'Fruits', color: '#D9643A', items: [
    { name: 'Banana', emoji: '\u{1F34C}' },
    { name: 'Avocado', emoji: '\u{1F951}' },
    { name: 'Apple', emoji: '\u{1F34E}' },
    { name: 'Pear', emoji: '\u{1F350}' },
    { name: 'Peach', emoji: '\u{1F351}' },
    { name: 'Plum', emoji: '\u{1F7E3}' },
    { name: 'Mango', emoji: '\u{1F96D}' },
    { name: 'Blueberries', emoji: '\u{1FAD0}' },
    { name: 'Strawberries', emoji: '\u{1F353}' },
    { name: 'Raspberries', emoji: '\u{1F534}' },
    { name: 'Watermelon', emoji: '\u{1F349}' },
    { name: 'Cantaloupe', emoji: '\u{1F348}' },
    { name: 'Kiwi', emoji: '\u{1F95D}' },
    { name: 'Papaya', emoji: '\u{1F7E0}' },
    { name: 'Pineapple', emoji: '\u{1F34D}' }
  ]},
  { name: 'Vegetables', color: '#4F7942', items: [
    { name: 'Sweet potato', emoji: '\u{1F360}' },
    { name: 'Butternut squash', emoji: '\u{1F383}' },
    { name: 'Carrot', emoji: '\u{1F955}' },
    { name: 'Green beans', emoji: '\u{1FAD8}' },
    { name: 'Peas', emoji: '\u{1FAD8}' },
    { name: 'Broccoli', emoji: '\u{1F966}' },
    { name: 'Cauliflower', emoji: '\u{1F966}' },
    { name: 'Zucchini', emoji: '\u{1F952}' },
    { name: 'Pumpkin', emoji: '\u{1F383}' },
    { name: 'Spinach', emoji: '\u{1F96C}' },
    { name: 'Kale', emoji: '\u{1F96C}' },
    { name: 'Beet', emoji: '\u{1F7E3}' },
    { name: 'Asparagus', emoji: '\u{1F331}' },
    { name: 'Bell pepper', emoji: '\u{1FAD1}' },
    { name: 'Cucumber', emoji: '\u{1F952}' },
    { name: 'Corn', emoji: '\u{1F33D}' },
    { name: 'Tomato', emoji: '\u{1F345}' },
    { name: 'Eggplant', emoji: '\u{1F346}' },
    { name: 'Parsnip', emoji: '\u{1F955}' },
    { name: 'Turnip', emoji: '\u{1F954}' }
  ]},
  { name: 'Grains & Starches', color: '#B98B4E', items: [
    { name: 'Oatmeal', emoji: '\u{1F963}' },
    { name: 'Rice', emoji: '\u{1F35A}' },
    { name: 'Rice cereal', emoji: '\u{1F35A}' },
    { name: 'Quinoa', emoji: '\u{1F33E}' },
    { name: 'Barley', emoji: '\u{1F33E}' },
    { name: 'Whole wheat pasta', emoji: '\u{1F35D}' },
    { name: 'Whole grain bread', emoji: '\u{1F35E}' },
    { name: 'Couscous', emoji: '\u{1F33E}' },
    { name: 'Farro', emoji: '\u{1F33E}' },
    { name: 'Millet', emoji: '\u{1F33E}' }
  ]},
  { name: 'Proteins', color: '#8B3A62', items: [
    { name: 'Chicken', emoji: '\u{1F357}' },
    { name: 'Turkey', emoji: '\u{1F983}' },
    { name: 'Beef', emoji: '\u{1F969}' },
    { name: 'Pork', emoji: '\u{1F953}' },
    { name: 'Salmon', emoji: '\u{1F41F}' },
    { name: 'Cod', emoji: '\u{1F41F}' },
    { name: 'Tuna (light, low-mercury)', emoji: '\u{1F41F}' },
    { name: 'Shrimp', emoji: '\u{1F364}' },
    { name: 'Lamb', emoji: '\u{1F411}' },
    { name: 'Duck', emoji: '\u{1F986}' },
    { name: 'Sardines', emoji: '\u{1F41F}' },
    { name: 'Trout', emoji: '\u{1F41F}' },
    { name: 'Tilapia', emoji: '\u{1F41F}' },
    { name: 'Egg (whole, cooked)', emoji: '\u{1F95A}' },
    { name: 'Egg yolk', emoji: '\u{1F95A}' }
  ]},
  { name: 'Legumes', color: '#8A8B3E', items: [
    { name: 'Lentils', emoji: '\u{1FAD8}' },
    { name: 'Black beans', emoji: '\u{1FAD8}' },
    { name: 'Chickpeas', emoji: '\u{1FAD8}' },
    { name: 'Kidney beans', emoji: '\u{1FAD8}' },
    { name: 'Pinto beans', emoji: '\u{1FAD8}' },
    { name: 'Edamame', emoji: '\u{1FAD1}' },
    { name: 'Split peas', emoji: '\u{1FAD1}' },
    { name: 'Navy beans', emoji: '\u{1FAD8}' },
    { name: 'Lima beans', emoji: '\u{1FAD8}' },
    { name: 'White beans', emoji: '\u{1FAD8}' }
  ]},
  { name: 'Dairy', color: '#4A7A96', items: [
    { name: 'Plain whole-milk yogurt', emoji: '\u{1F95B}' },
    { name: 'Cottage cheese', emoji: '\u{1F9C0}' },
    { name: 'Cheddar cheese', emoji: '\u{1F9C0}' },
    { name: 'Mozzarella cheese', emoji: '\u{1F9C0}' },
    { name: 'Cream cheese', emoji: '\u{1F9C0}' },
    { name: 'Ricotta cheese', emoji: '\u{1F9C0}' },
    { name: 'Parmesan cheese', emoji: '\u{1F9C0}' },
    { name: 'Kefir', emoji: '\u{1F95B}' }
  ]},
  { name: 'Nuts & Seeds (as smooth butters)', color: '#6B4A2F', items: [
    { name: 'Peanut butter (thinned)', emoji: '\u{1F95C}' },
    { name: 'Almond butter', emoji: '\u{1F330}' },
    { name: 'Cashew butter', emoji: '\u{1F330}' },
    { name: 'Sunflower seed butter', emoji: '\u{1F33B}' },
    { name: 'Chia seeds', emoji: '\u{26AB}' },
    { name: 'Ground flaxseed', emoji: '\u{1F33E}' },
    { name: 'Tahini (sesame paste)', emoji: '\u{1F95C}' },
    { name: 'Hemp seeds', emoji: '\u{1F331}' }
  ]},
  { name: 'Herbs & Spices', color: '#2E7D6B', items: [
    { name: 'Cinnamon', emoji: '\u{1F7EB}' },
    { name: 'Basil', emoji: '\u{1F33F}' },
    { name: 'Oregano', emoji: '\u{1F33F}' },
    { name: 'Garlic', emoji: '\u{1F9C4}' },
    { name: 'Ginger', emoji: '\u{1FADA}' },
    { name: 'Cumin', emoji: '\u{1F33F}' },
    { name: 'Turmeric', emoji: '\u{1F7E8}' },
    { name: 'Mint', emoji: '\u{1F33F}' },
    { name: 'Dill', emoji: '\u{1F33F}' },
    { name: 'Parsley', emoji: '\u{1F33F}' }
  ]},
  { name: 'Other first foods', color: '#5B6B72', items: [
    { name: 'Tofu', emoji: '\u{2B1C}' },
    { name: 'Hummus', emoji: '\u{1FAD8}' },
    { name: 'Unsweetened applesauce', emoji: '\u{1F34F}' },
    { name: 'Whole grain crackers', emoji: '\u{1F358}' }
  ]}
];

const REACTIONS = [
  { key: 'liked', emoji: '\u{1F60B}', label: 'Liked it' },
  { key: 'neutral', emoji: '\u{1F610}', label: 'Neutral' },
  { key: 'disliked', emoji: '\u{1F616}', label: "Didn't like it" }
];

const CUSTOM_STORAGE_KEY = 'jaxon-custom-foods-v1';
const COMBO_STORAGE_KEY = 'jaxon-combo-foods-v1';
const CUSTOM_COLOR = '#7A5C99';
const COMBO_COLOR = '#C9A227';
const CUSTOM_EMOJI = '\u{1F37D}\u{FE0F}';
const COMBO_EMOJI = '\u{1F372}';

// Flat lookup: food id -> { name, emoji, category, color }. Rebuilt on demand
// so it always reflects the latest custom/combo entries.
function buildFoodInfo(){
  const info = {};
  FOOD_DATA.forEach(cat => {
    cat.items.forEach(food => {
      const id = slug(cat.name + '-' + food.name);
      info[id] = { name: food.name, emoji: food.emoji, category: cat.name, color: cat.color };
    });
  });
  loadCustomFoods().forEach(entry => {
    info['custom-' + entry.id] = { name: entry.name, emoji: CUSTOM_EMOJI, category: 'Custom foods', color: CUSTOM_COLOR };
  });
  loadComboFoods().forEach(entry => {
    info['combo-' + entry.id] = { name: entry.name, emoji: COMBO_EMOJI, category: 'Food combos', color: COMBO_COLOR };
  });
  return info;
}

let expandedId = null;
let weightChart = null;
let lengthChart = null;
let headChart = null;
let calViewDate = new Date(); // month currently shown on the calendar

function slug(s){
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function uid(){
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function todayISO(){
  return new Date().toISOString().slice(0,10);
}

function loadFoodState(){
  try{ return JSON.parse(localStorage.getItem(FOOD_STORAGE_KEY)) || {}; }
  catch(e){ return {}; }
}
function saveFoodState(state){
  localStorage.setItem(FOOD_STORAGE_KEY, JSON.stringify(state));
}
function removeFoodState(id){
  const st = loadFoodState();
  delete st[id];
  saveFoodState(st);
}

function loadCustomFoods(){
  try{ return JSON.parse(localStorage.getItem(CUSTOM_STORAGE_KEY)) || []; }
  catch(e){ return []; }
}
function saveCustomFoods(list){
  localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(list));
}

function loadComboFoods(){
  try{ return JSON.parse(localStorage.getItem(COMBO_STORAGE_KEY)) || []; }
  catch(e){ return []; }
}
function saveComboFoods(list){
  localStorage.setItem(COMBO_STORAGE_KEY, JSON.stringify(list));
}

function loadGrowthLog(){
  try{
    const raw = localStorage.getItem(GROWTH_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  }catch(e){ /* fall through to seed */ }
  const seed = [
    { id: uid(), date: '2026-02-23', weightLb: 6, weightOz: 11, lengthIn: 19.5, headIn: '' },
    { id: uid(), date: '2026-08-30', weightLb: 13, weightOz: 14, lengthIn: 25, headIn: '' }
  ];
  saveGrowthLog(seed);
  return seed;
}
function saveGrowthLog(entries){
  localStorage.setItem(GROWTH_STORAGE_KEY, JSON.stringify(entries));
}

/* ---------------- Tabs ---------------- */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
    if (btn.dataset.tab === 'growth') renderGrowth();
    if (btn.dataset.tab === 'calendar') renderCalendar();
  });
});

/* ---------------- Age badge ---------------- */
function renderAge(){
  const now = new Date();
  let months = (now.getFullYear() - BIRTH_DATE.getFullYear()) * 12 + (now.getMonth() - BIRTH_DATE.getMonth());
  const refDate = new Date(BIRTH_DATE);
  refDate.setMonth(refDate.getMonth() + months);
  if (refDate > now){ months -= 1; refDate.setMonth(refDate.getMonth() - 1); }
  const days = Math.floor((now - refDate) / 86400000);
  const weeks = Math.floor(days / 7);
  let text = months + (months === 1 ? ' month' : ' months');
  if (weeks > 0) text += ', ' + weeks + (weeks === 1 ? ' week' : ' weeks');
  document.getElementById('age-badge').textContent = text + ' old';
}

/* ---------------- Foods tab ---------------- */
function renderCategories(){
  const state = loadFoodState();
  const container = document.getElementById('categories');
  container.innerHTML = '';

  FOOD_DATA.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'category';
    section.style.setProperty('--cat-color', cat.color);

    const heading = document.createElement('h2');
    heading.innerHTML = '<span class="dot"></span>' + cat.name +
      ' <span class="count" data-count="' + cat.name + '"></span>';
    section.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'food-grid';

    cat.items.forEach(food => {
      const id = slug(cat.name + '-' + food.name);
      grid.appendChild(buildFoodRow(id, food.name, state[id] || {}));
    });

    section.appendChild(grid);
    container.appendChild(section);
  });

  container.appendChild(buildDynamicCategory({
    title: 'Custom foods',
    color: CUSTOM_COLOR,
    idPrefix: 'custom',
    list: loadCustomFoods(),
    placeholder: 'Add a food not on the list…',
    buttonLabel: 'Add food',
    onAdd: (name) => {
      const list = loadCustomFoods();
      list.push({ id: uid(), name });
      saveCustomFoods(list);
    },
    onDelete: (entryId) => {
      const list = loadCustomFoods().filter(e => e.id !== entryId);
      saveCustomFoods(list);
      removeFoodState('custom-' + entryId);
    }
  }, state));

  container.appendChild(buildDynamicCategory({
    title: 'Food combos',
    color: COMBO_COLOR,
    idPrefix: 'combo',
    list: loadComboFoods(),
    placeholder: 'e.g. Chicken & sweet potato mash',
    buttonLabel: 'Add combo',
    onAdd: (name) => {
      const list = loadComboFoods();
      list.push({ id: uid(), name });
      saveComboFoods(list);
    },
    onDelete: (entryId) => {
      const list = loadComboFoods().filter(e => e.id !== entryId);
      saveComboFoods(list);
      removeFoodState('combo-' + entryId);
    }
  }, state));

  refreshCounts();
}

function buildDynamicCategory(opts, state){
  const section = document.createElement('div');
  section.className = 'category';
  section.style.setProperty('--cat-color', opts.color);

  const heading = document.createElement('h2');
  heading.innerHTML = '<span class="dot"></span>' + opts.title +
    ' <span class="count">(' + opts.list.length + ')</span>';
  section.appendChild(heading);

  const grid = document.createElement('div');
  grid.className = 'food-grid';

  opts.list.forEach(entry => {
    const id = opts.idPrefix + '-' + entry.id;
    grid.appendChild(buildFoodRow(id, entry.name, state[id] || {}, {
      deletable: true,
      onDelete: () => {
        if (confirm('Remove "' + entry.name + '" from your list? This clears any logged info for it too.')){
          opts.onDelete(entry.id);
          if (expandedId === id) expandedId = null;
          renderCategories();
          renderAllergies();
        }
      }
    }));
  });

  const addRow = document.createElement('div');
  addRow.className = 'add-food-row';
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = opts.placeholder;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = opts.buttonLabel;
  function submit(){
    const val = input.value.trim();
    if (!val) return;
    opts.onAdd(val);
    renderCategories();
  }
  btn.addEventListener('click', submit);
  input.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter'){ evt.preventDefault(); submit(); }
  });
  addRow.appendChild(input);
  addRow.appendChild(btn);
  grid.appendChild(addRow);

  section.appendChild(grid);
  return section;
}

function buildFoodRow(id, foodName, entry, opts){
  opts = opts || {};
  const isChecked = !!entry.checked;
  const row = document.createElement('div');
  row.className = 'food-row' + (isChecked ? ' checked' : '') + (entry.allergic ? ' has-allergy' : '') + (expandedId === id ? ' expanded' : '');
  row.dataset.id = id;

  const main = document.createElement('div');
  main.className = 'food-main';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = id;
  checkbox.checked = isChecked;

  const label = document.createElement('label');
  label.className = 'food-label';
  label.htmlFor = id;
  label.textContent = foodName;

  main.appendChild(checkbox);
  main.appendChild(label);

  if (entry.allergic){
    const flag = document.createElement('span');
    flag.className = 'allergy-flag';
    flag.textContent = 'Reaction';
    main.appendChild(flag);
  }

  if (opts.deletable){
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'food-delete';
    delBtn.textContent = '\u00d7';
    delBtn.title = 'Remove this item';
    delBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      opts.onDelete();
    });
    main.appendChild(delBtn);
  }

  row.appendChild(main);

  checkbox.addEventListener('change', () => {
    const st = loadFoodState();
    const e = st[id] || {};
    e.checked = checkbox.checked;
    if (checkbox.checked && !e.date) e.date = todayISO();
    st[id] = e;
    saveFoodState(st);
    expandedId = checkbox.checked ? id : (expandedId === id ? null : expandedId);
    renderCategories();
    renderAllergies();
  });

  if (isChecked){
    label.addEventListener('click', (evt) => {
      evt.preventDefault();
      expandedId = (expandedId === id) ? null : id;
      renderCategories();
    });

    if (expandedId === id){
      row.appendChild(buildFoodDetail(id, entry));
    }
  }

  return row;
}

function buildFoodDetail(id, entry){
  const detail = document.createElement('div');
  detail.className = 'food-detail';

  // date row
  const dateRow = document.createElement('div');
  dateRow.className = 'detail-row';
  const dateLbl = document.createElement('span');
  dateLbl.className = 'field-label';
  dateLbl.textContent = 'Date tried';
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.value = entry.date || todayISO();
  dateInput.addEventListener('change', () => updateFoodEntry(id, { date: dateInput.value }));
  dateRow.appendChild(dateLbl);
  dateRow.appendChild(dateInput);
  detail.appendChild(dateRow);

  // reaction row
  const reactRow = document.createElement('div');
  reactRow.className = 'detail-row';
  const reactLbl = document.createElement('span');
  reactLbl.className = 'field-label';
  reactLbl.textContent = 'Reaction';
  reactRow.appendChild(reactLbl);
  const btnWrap = document.createElement('div');
  btnWrap.className = 'reaction-btns';
  REACTIONS.forEach(r => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'reaction-btn' + (entry.reaction === r.key ? ' active' : '');
    btn.textContent = r.emoji;
    btn.title = r.label;
    btn.addEventListener('click', () => {
      const newVal = entry.reaction === r.key ? null : r.key;
      updateFoodEntry(id, { reaction: newVal });
    });
    btnWrap.appendChild(btn);
  });
  reactRow.appendChild(btnWrap);
  detail.appendChild(reactRow);

  // made a face + allergic row
  const flagRow = document.createElement('div');
  flagRow.className = 'detail-row';

  const faceLabel = document.createElement('label');
  faceLabel.className = 'check-label';
  const faceCheck = document.createElement('input');
  faceCheck.type = 'checkbox';
  faceCheck.checked = !!entry.face;
  faceCheck.addEventListener('change', () => updateFoodEntry(id, { face: faceCheck.checked }));
  faceLabel.appendChild(faceCheck);
  faceLabel.append('Made a funny face');
  flagRow.appendChild(faceLabel);

  const allergyLabel = document.createElement('label');
  allergyLabel.className = 'check-label';
  const allergyCheck = document.createElement('input');
  allergyCheck.type = 'checkbox';
  allergyCheck.checked = !!entry.allergic;
  allergyCheck.addEventListener('change', () => {
    updateFoodEntry(id, { allergic: allergyCheck.checked });
    renderAllergies();
  });
  allergyLabel.appendChild(allergyCheck);
  allergyLabel.append('Allergic reaction');
  flagRow.appendChild(allergyLabel);

  detail.appendChild(flagRow);

  if (entry.allergic){
    const noteRow = document.createElement('div');
    noteRow.className = 'detail-row';
    const noteInput = document.createElement('input');
    noteInput.type = 'text';
    noteInput.className = 'allergy-note';
    noteInput.placeholder = 'What happened? (e.g. hives, fussy, rash)';
    noteInput.value = entry.allergyNote || '';
    noteInput.addEventListener('change', () => {
      updateFoodEntry(id, { allergyNote: noteInput.value });
      renderAllergies();
    });
    noteRow.appendChild(noteInput);
    detail.appendChild(noteRow);
  }

  return detail;
}

function updateFoodEntry(id, patch){
  const st = loadFoodState();
  st[id] = Object.assign({}, st[id] || {}, patch);
  saveFoodState(st);
  renderCategories();
}

function refreshCounts(){
  const state = loadFoodState();
  let total = 0, checked = 0;
  FOOD_DATA.forEach(cat => {
    const checkedInCat = cat.items.filter(food => state[slug(cat.name + '-' + food.name)] && state[slug(cat.name + '-' + food.name)].checked).length;
    total += cat.items.length;
    checked += checkedInCat;
    const span = document.querySelector('[data-count="' + CSS.escape(cat.name) + '"]');
    if (span) span.textContent = checkedInCat + '/' + cat.items.length;
  });
  document.getElementById('progress-count').textContent = checked + ' of ' + total + ' tried';
  document.getElementById('progress-fill').style.width = (checked / total * 100) + '%';
}

document.getElementById('reset-btn').addEventListener('click', () => {
  if (confirm("Clear every checkmark, reaction, and note? This can't be undone.")){
    localStorage.removeItem(FOOD_STORAGE_KEY);
    expandedId = null;
    renderCategories();
    renderAllergies();
  }
});

/* ---------------- Allergies tab ---------------- */
function renderAllergies(){
  const state = loadFoodState();
  const foodInfo = buildFoodInfo();
  const flagged = [];
  Object.keys(state).forEach(id => {
    const e = state[id];
    const info = foodInfo[id];
    if (e && e.allergic && info){
      flagged.push({ id, food: info.name, category: info.category, date: e.date, note: e.allergyNote });
    }
  });
  flagged.sort((a, b) => a.food.localeCompare(b.food));

  const list = document.getElementById('allergy-list');
  const badge = document.getElementById('allergy-badge');

  if (flagged.length === 0){
    badge.style.display = 'none';
    list.innerHTML = '<div class="empty-state">No known reactions logged yet &mdash; nothing to flag here.</div>';
    return;
  }

  badge.style.display = 'inline-block';
  badge.textContent = flagged.length;

  list.innerHTML = '';
  flagged.forEach(f => {
    const item = document.createElement('div');
    item.className = 'allergy-item';
    const dateStr = f.date ? new Date(f.date + 'T00:00:00').toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : 'no date logged';
    item.innerHTML =
      '<div class="a-name">' + f.food + '</div>' +
      '<div class="a-meta">' + f.category + ' &middot; first flagged ' + dateStr + '</div>' +
      (f.note ? '<div class="a-note">' + f.note.replace(/</g,'&lt;') + '</div>' : '');
    list.appendChild(item);
  });
}

/* ---------------- Calendar tab ---------------- */
function renderCalendar(){
  const state = loadFoodState();
  const foodInfo = buildFoodInfo();

  // group foods by the ISO date they were tried
  const byDate = {};
  Object.keys(state).forEach(id => {
    const e = state[id];
    const info = foodInfo[id];
    if (e && e.checked && e.date && info){
      if (!byDate[e.date]) byDate[e.date] = [];
      byDate[e.date].push(info);
    }
  });

  const year = calViewDate.getFullYear();
  const month = calViewDate.getMonth();
  document.getElementById('cal-label').textContent =
    calViewDate.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });

  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayStr = todayISO();

  const grid = document.getElementById('cal-grid');
  grid.innerHTML = '';

  for (let i = 0; i < startOffset; i++){
    const blank = document.createElement('div');
    blank.className = 'cal-day blank';
    grid.appendChild(blank);
  }

  for (let d = 1; d <= daysInMonth; d++){
    const dateObj = new Date(year, month, d);
    const iso = dateObj.getFullYear() + '-' + String(dateObj.getMonth()+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');

    const cell = document.createElement('div');
    cell.className = 'cal-day' + (iso === todayStr ? ' today' : '');

    const num = document.createElement('div');
    num.className = 'day-num';
    num.textContent = d;
    cell.appendChild(num);

    const foods = byDate[iso];
    if (foods && foods.length){
      const emojiWrap = document.createElement('div');
      emojiWrap.className = 'day-emojis';
      emojiWrap.title = foods.map(f => f.name).join(', ');
      foods.forEach(f => {
        const span = document.createElement('span');
        span.textContent = f.emoji;
        emojiWrap.appendChild(span);
      });
      cell.appendChild(emojiWrap);
    }

    grid.appendChild(cell);
  }
}

document.getElementById('cal-prev').addEventListener('click', () => {
  calViewDate = new Date(calViewDate.getFullYear(), calViewDate.getMonth() - 1, 1);
  renderCalendar();
});
document.getElementById('cal-next').addEventListener('click', () => {
  calViewDate = new Date(calViewDate.getFullYear(), calViewDate.getMonth() + 1, 1);
  renderCalendar();
});

/* ---------------- Growth tab ---------------- */
function lbOzToDecimal(lb, oz){ return (Number(lb)||0) + (Number(oz)||0)/16; }

function renderGrowth(){
  const entries = loadGrowthLog().slice().sort((a,b) => a.date.localeCompare(b.date));

  // ticket "latest"
  if (entries.length){
    const latest = entries[entries.length - 1];
    document.getElementById('latest-label').textContent = 'Latest check-in \u00b7 ' +
      new Date(latest.date + 'T00:00:00').toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    document.getElementById('latest-weight').textContent = latest.weightLb + ' lb ' + latest.weightOz + ' oz';
    document.getElementById('latest-length').textContent = latest.lengthIn + ' in long';
  }

  // charts
  const labels = entries.map(e => new Date(e.date + 'T00:00:00').toLocaleDateString(undefined, { month: 'short', day: 'numeric' }));
  const weightDecimals = entries.map(e => lbOzToDecimal(e.weightLb, e.weightOz));
  const lengthValues = entries.map(e => Number(e.lengthIn) || 0);

  if (weightChart) weightChart.destroy();
  if (lengthChart) lengthChart.destroy();
  if (headChart) headChart.destroy();

  const weightCtx = document.getElementById('weight-chart').getContext('2d');
  weightChart = new Chart(weightCtx, {
    type: 'line',
    data: { labels, datasets: [{
      data: weightDecimals, borderColor: '#4F7942', backgroundColor: '#4F794222',
      tension: 0.25, fill: true, pointRadius: 4, pointBackgroundColor: '#4F7942'
    }]},
    options: {
      plugins: { legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => entries[ctx.dataIndex].weightLb + ' lb ' + entries[ctx.dataIndex].weightOz + ' oz' } } },
      scales: { y: { title: { display: true, text: 'lb (decimal)' } } }
    }
  });

  const lengthCtx = document.getElementById('length-chart').getContext('2d');
  lengthChart = new Chart(lengthCtx, {
    type: 'line',
    data: { labels, datasets: [{
      data: lengthValues, borderColor: '#D9643A', backgroundColor: '#D9643A22',
      tension: 0.25, fill: true, pointRadius: 4, pointBackgroundColor: '#D9643A'
    }]},
    options: {
      plugins: { legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => ctx.parsed.y + ' in' } } },
      scales: { y: { title: { display: true, text: 'inches' } } }
    }
  });

  // head circumference: only plot entries that actually have a value
  const headEntries = entries.filter(e => e.headIn !== undefined && e.headIn !== null && e.headIn !== '');
  const headCanvas = document.getElementById('head-chart');
  const headEmpty = document.getElementById('head-chart-empty');

  if (headEntries.length){
    headCanvas.style.display = '';
    headEmpty.style.display = 'none';
    const headLabels = headEntries.map(e => new Date(e.date + 'T00:00:00').toLocaleDateString(undefined, { month: 'short', day: 'numeric' }));
    const headValues = headEntries.map(e => Number(e.headIn));
    const headCtx = headCanvas.getContext('2d');
    headChart = new Chart(headCtx, {
      type: 'line',
      data: { labels: headLabels, datasets: [{
        data: headValues, borderColor: '#4A7A96', backgroundColor: '#4A7A9622',
        tension: 0.25, fill: true, pointRadius: 4, pointBackgroundColor: '#4A7A96'
      }]},
      options: {
        plugins: { legend: { display: false },
          tooltip: { callbacks: { label: (ctx) => ctx.parsed.y + ' in' } } },
        scales: { y: { title: { display: true, text: 'inches' } } }
      }
    });
  } else {
    headCanvas.style.display = 'none';
    headEmpty.style.display = '';
  }

  // table
  const tbody = document.getElementById('growth-tbody');
  tbody.innerHTML = '';
  entries.forEach(e => tbody.appendChild(buildGrowthRow(e)));
}

function buildGrowthRow(entry){
  const tr = document.createElement('tr');

  const dateTd = document.createElement('td');
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.value = entry.date;
  dateInput.addEventListener('change', () => updateGrowthEntry(entry.id, { date: dateInput.value }));
  dateTd.appendChild(dateInput);

  const lbTd = document.createElement('td');
  const lbInput = document.createElement('input');
  lbInput.type = 'number'; lbInput.min = 0; lbInput.value = entry.weightLb;
  lbInput.addEventListener('change', () => updateGrowthEntry(entry.id, { weightLb: Number(lbInput.value) }));
  lbTd.appendChild(lbInput);

  const ozTd = document.createElement('td');
  const ozInput = document.createElement('input');
  ozInput.type = 'number'; ozInput.min = 0; ozInput.max = 15; ozInput.value = entry.weightOz;
  ozInput.addEventListener('change', () => updateGrowthEntry(entry.id, { weightOz: Number(ozInput.value) }));
  ozTd.appendChild(ozInput);

  const lenTd = document.createElement('td');
  const lenInput = document.createElement('input');
  lenInput.type = 'number'; lenInput.step = '0.1'; lenInput.min = 0; lenInput.value = entry.lengthIn;
  lenInput.addEventListener('change', () => updateGrowthEntry(entry.id, { lengthIn: Number(lenInput.value) }));
  lenTd.appendChild(lenInput);

  const headTd = document.createElement('td');
  const headInput = document.createElement('input');
  headInput.type = 'number'; headInput.step = '0.1'; headInput.min = 0;
  headInput.value = (entry.headIn !== undefined && entry.headIn !== null) ? entry.headIn : '';
  headInput.placeholder = '\u2014';
  headInput.addEventListener('change', () => updateGrowthEntry(entry.id, { headIn: headInput.value === '' ? '' : Number(headInput.value) }));
  headTd.appendChild(headInput);

  const delTd = document.createElement('td');
  const delBtn = document.createElement('button');
  delBtn.className = 'row-del';
  delBtn.type = 'button';
  delBtn.textContent = '\u00d7';
  delBtn.title = 'Delete entry';
  delBtn.addEventListener('click', () => {
    const entries = loadGrowthLog().filter(e => e.id !== entry.id);
    saveGrowthLog(entries);
    renderGrowth();
  });
  delTd.appendChild(delBtn);

  tr.appendChild(dateTd); tr.appendChild(lbTd); tr.appendChild(ozTd); tr.appendChild(lenTd); tr.appendChild(headTd); tr.appendChild(delTd);
  return tr;
}

function updateGrowthEntry(id, patch){
  const entries = loadGrowthLog();
  const idx = entries.findIndex(e => e.id === id);
  if (idx > -1){
    entries[idx] = Object.assign({}, entries[idx], patch);
    saveGrowthLog(entries);
    renderGrowth();
  }
}

document.getElementById('add-entry-btn').addEventListener('click', () => {
  const entries = loadGrowthLog();
  entries.push({ id: uid(), date: todayISO(), weightLb: 0, weightOz: 0, lengthIn: 0, headIn: '' });
  saveGrowthLog(entries);
  renderGrowth();
});

/* ---------------- Init ---------------- */
renderAge();
renderCategories();
renderAllergies();
