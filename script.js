const BIRTH_DATE = new Date(2026, 1, 23); // Feb 23, 2026
const FOOD_STORAGE_KEY = 'jaxon-first-foods-v1';
const GROWTH_STORAGE_KEY = 'jaxon-growth-log-v1';
const MILESTONE_STORAGE_KEY = 'jaxon-milestones-v1';
const CUSTOM_MILESTONE_STORAGE_KEY = 'jaxon-custom-milestones-v1';
const CURRENT_USER_KEY = 'jaxon-current-user';

const MILESTONE_DATA = [
  { name: 'Motor skills', color: '#4F7942', items: [
    'Held head up steady','Rolled tummy to back','Rolled back to tummy','Sat up unassisted',
    'Pushed up on hands and knees','Crawled','Pulled to stand','Cruised along furniture',
    'Stood alone','First steps','Walked independently','Climbed stairs'
  ]},
  { name: 'Communication', color: '#D9643A', items: [
    'First real smile','Cooed','Babbled (ba-ba, da-da)','Said first word','Waved bye-bye',
    'Pointed at things','Said "mama" or "dada" on purpose','Followed a simple instruction'
  ]},
  { name: 'Social & emotional', color: '#8B3A62', items: [
    'Laughed out loud','Recognized familiar faces','Stranger anxiety showed up','Played peekaboo',
    'Clapped hands','Gave hugs or kisses'
  ]},
  { name: 'Cognitive', color: '#4A7A96', items: [
    'Reached for objects','Passed object hand to hand','Found a partly hidden object',
    'Looked for a dropped object','Imitated sounds or actions','Explored by banging or shaking things'
  ]},
  { name: 'Firsts & keepsakes', color: '#B98B4E', items: [
    'First tooth','First haircut','First taste of outdoors (grass, sand, snow)',
    'First trip away from home','First holiday','First birthday'
  ]}
];

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
const CUSTOM_MILESTONE_COLOR = '#7A5C99';

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

// Flat lookup: milestone id -> { name, category, color }
function buildMilestoneInfo(){
  const info = {};
  MILESTONE_DATA.forEach(cat => {
    cat.items.forEach(name => {
      const id = slug(cat.name + '-' + name);
      info[id] = { name, category: cat.name, color: cat.color };
    });
  });
  loadCustomMilestones().forEach(entry => {
    info['custom-milestone-' + entry.id] = { name: entry.name, category: 'Custom milestones', color: CUSTOM_MILESTONE_COLOR };
  });
  return info;
}

function getCurrentUser(){
  return localStorage.getItem(CURRENT_USER_KEY) || '';
}
function setCurrentUser(name){
  localStorage.setItem(CURRENT_USER_KEY, name);
  renderUserBadge();
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

function isReadOnly(){
  return new URLSearchParams(window.location.search).get('view') === '1';
}

function compressImage(file, maxDim, quality){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read file'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Could not load image'));
      img.onload = () => {
        let w = img.width, h = img.height;
        if (w > h && w > maxDim){ h = Math.round(h * (maxDim / w)); w = maxDim; }
        else if (h > maxDim){ w = Math.round(w * (maxDim / h)); h = maxDim; }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

// Shared photo control builder, used by both food and milestone detail panels.
// onSave(dataUrlOrNull) is called with the compressed photo, or null on removal.
function buildPhotoRow(photo, onSave){
  const row = document.createElement('div');
  row.className = 'detail-row photo-controls';

  if (photo){
    const img = document.createElement('img');
    img.className = 'photo-thumb';
    img.src = photo;
    img.alt = 'Photo';
    row.appendChild(img);

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'photo-remove-btn';
    removeBtn.textContent = 'Remove photo';
    removeBtn.addEventListener('click', () => onSave(null));
    row.appendChild(removeBtn);
  } else {
    const label = document.createElement('label');
    label.className = 'photo-add-label';
    label.textContent = '\u{1F4F7} Add photo';
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', async () => {
      const file = input.files[0];
      if (!file) return;
      try{
        const dataUrl = await compressImage(file, 240, 0.55);
        if (dataUrl.length > 60000){
          alert("That photo is still too large after compressing \u2014 try a different one.");
          return;
        }
        onSave(dataUrl);
      }catch(err){
        alert("Couldn't process that photo. Try a different one.");
      }
    });
    label.appendChild(input);
    row.appendChild(label);
  }

  return row;
}

function loadFoodState(){
  try{ return JSON.parse(localStorage.getItem(FOOD_STORAGE_KEY)) || {}; }
  catch(e){ return {}; }
}
function saveFoodStateLocal(state){
  localStorage.setItem(FOOD_STORAGE_KEY, JSON.stringify(state));
}
function saveFoodState(state){
  if (isReadOnly()) return;
  saveFoodStateLocal(state);
  pushToCloud({ foods: state });
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
function saveCustomFoodsLocal(list){
  localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(list));
}
function saveCustomFoods(list){
  if (isReadOnly()) return;
  saveCustomFoodsLocal(list);
  pushToCloud({ customFoods: list });
}

function loadComboFoods(){
  try{ return JSON.parse(localStorage.getItem(COMBO_STORAGE_KEY)) || []; }
  catch(e){ return []; }
}
function saveComboFoodsLocal(list){
  localStorage.setItem(COMBO_STORAGE_KEY, JSON.stringify(list));
}
function saveComboFoods(list){
  if (isReadOnly()) return;
  saveComboFoodsLocal(list);
  pushToCloud({ comboFoods: list });
}

function loadMilestoneState(){
  try{ return JSON.parse(localStorage.getItem(MILESTONE_STORAGE_KEY)) || {}; }
  catch(e){ return {}; }
}
function saveMilestoneStateLocal(state){
  localStorage.setItem(MILESTONE_STORAGE_KEY, JSON.stringify(state));
}
function saveMilestoneState(state){
  if (isReadOnly()) return;
  saveMilestoneStateLocal(state);
  pushToCloud({ milestones: state });
}

function loadCustomMilestones(){
  try{ return JSON.parse(localStorage.getItem(CUSTOM_MILESTONE_STORAGE_KEY)) || []; }
  catch(e){ return []; }
}
function saveCustomMilestonesLocal(list){
  localStorage.setItem(CUSTOM_MILESTONE_STORAGE_KEY, JSON.stringify(list));
}
function saveCustomMilestones(list){
  if (isReadOnly()) return;
  saveCustomMilestonesLocal(list);
  pushToCloud({ customMilestones: list });
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
  saveGrowthLogLocal(seed);
  return seed;
}
function saveGrowthLogLocal(entries){
  localStorage.setItem(GROWTH_STORAGE_KEY, JSON.stringify(entries));
}
function saveGrowthLog(entries){
  if (isReadOnly()) return;
  saveGrowthLogLocal(entries);
  pushToCloud({ growth: entries });
}

/* ---------------- Cloud sync (Firebase) ---------------- */
let applyingRemoteUpdate = false;
let syncDocRef = null;

function pushToCloud(partial){
  if (applyingRemoteUpdate) return;
  if (typeof db === 'undefined' || !db) return;
  if (!syncDocRef) syncDocRef = db.collection('jaxon-tracker').doc('shared-data');
  syncDocRef.set(partial, { merge: true }).catch(err => {
    console.warn('Cloud sync failed:', err.message);
    setSyncStatus('error', "Couldn't reach the cloud \u2014 check your connection.");
  });
}

function setSyncStatus(state, text){
  const el = document.getElementById('sync-status');
  if (!el) return;
  el.classList.remove('connected', 'error');
  if (state) el.classList.add(state);
  el.textContent = text;
}

function startSync(){
  if (typeof db === 'undefined' || !db){
    setSyncStatus(null, 'Not connected yet \u2014 add your Firebase project keys to firebase-config.js to enable live sync.');
    return;
  }

  syncDocRef = db.collection('jaxon-tracker').doc('shared-data');
  syncDocRef.onSnapshot((snap) => {
    if (!snap.exists){
      // first run ever: seed the cloud with whatever's on this device
      pushToCloud({
        foods: loadFoodState(),
        growth: loadGrowthLog(),
        customFoods: loadCustomFoods(),
        comboFoods: loadComboFoods(),
        milestones: loadMilestoneState(),
        customMilestones: loadCustomMilestones()
      });
      setSyncStatus('connected', 'Synced live \u2014 changes sync automatically between devices.');
      return;
    }

    const data = snap.data();
    applyingRemoteUpdate = true;
    if (data.foods) saveFoodStateLocal(data.foods);
    if (data.growth) saveGrowthLogLocal(data.growth);
    if (data.customFoods) saveCustomFoodsLocal(data.customFoods);
    if (data.comboFoods) saveComboFoodsLocal(data.comboFoods);
    if (data.milestones) saveMilestoneStateLocal(data.milestones);
    if (data.customMilestones) saveCustomMilestonesLocal(data.customMilestones);
    applyingRemoteUpdate = false;

    setSyncStatus('connected', 'Synced live \u2014 changes sync automatically between devices.');
    renderCategories();
    renderAllergies();
    if (document.getElementById('panel-growth').classList.contains('active')) renderGrowth();
    if (document.getElementById('panel-calendar').classList.contains('active')) renderCalendar();
    if (document.getElementById('panel-milestones').classList.contains('active')) renderMilestones();
    if (document.getElementById('panel-stats').classList.contains('active')) renderStats();
    if (document.getElementById('panel-timeline').classList.contains('active')) renderTimeline();
  }, (err) => {
    console.warn('Sync unavailable:', err.message);
    setSyncStatus('error', "Couldn't connect \u2014 check your Firebase config and Firestore rules.");
  });
}

/* ---------------- Tabs ---------------- */
const TAB_LABELS = { foods: 'Foods', milestones: 'Milestones', timeline: 'Timeline', calendar: 'Calendar', growth: 'Growth', stats: 'Stats', guide: 'Guide', allergies: 'Allergies' };
const menuToggle = document.getElementById('menu-toggle');
const tabsEl = document.getElementById('tabs');
const currentTabLabel = document.getElementById('current-tab-label');

menuToggle.addEventListener('click', () => {
  const isOpen = tabsEl.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
    currentTabLabel.textContent = TAB_LABELS[btn.dataset.tab] || '';
    tabsEl.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (btn.dataset.tab === 'growth') renderGrowth();
    if (btn.dataset.tab === 'calendar') renderCalendar();
    if (btn.dataset.tab === 'milestones') renderMilestones();
    if (btn.dataset.tab === 'stats') renderStats();
    if (btn.dataset.tab === 'timeline') renderTimeline();
  });
});

/* ---------------- Dark mode ---------------- */
const THEME_KEY = 'jaxon-theme';
function loadTheme(){
  return localStorage.getItem(THEME_KEY) || 'light';
}
function applyTheme(theme){
  document.body.classList.toggle('dark', theme === 'dark');
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '\u2600\ufe0f Light mode' : '\u{1F319} Dark mode';
}
document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = loadTheme() === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
});

/* ---------------- Who's logging ---------------- */
function renderUserBadge(){
  const current = getCurrentUser();
  document.querySelectorAll('.user-btn[data-user]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.user === current);
  });
  const otherBtn = document.getElementById('user-other-btn');
  if (current && current !== 'Mom' && current !== 'Dad'){
    otherBtn.textContent = current;
    otherBtn.classList.add('active');
  } else {
    otherBtn.textContent = 'Other';
    otherBtn.classList.remove('active');
  }
}

document.querySelectorAll('.user-btn[data-user]').forEach(btn => {
  btn.addEventListener('click', () => setCurrentUser(btn.dataset.user));
});
document.getElementById('user-other-btn').addEventListener('click', () => {
  const name = prompt("Who's logging? (e.g. Grandma, Nanny)", getCurrentUser());
  if (name && name.trim()) setCurrentUser(name.trim());
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

function renderBirthdayBanner(){
  const now = new Date();
  const firstBirthday = new Date(BIRTH_DATE.getFullYear() + 1, BIRTH_DATE.getMonth(), BIRTH_DATE.getDate());
  const diffDays = Math.ceil((firstBirthday - now) / 86400000);
  const el = document.getElementById('birthday-banner');

  if (diffDays > 1){
    el.textContent = '\u{1F382} ' + diffDays + ' days until Jaxon\u2019s 1st birthday!';
    el.style.display = '';
  } else if (diffDays === 1){
    el.textContent = '\u{1F382} 1 day until Jaxon\u2019s 1st birthday!';
    el.style.display = '';
  } else if (diffDays === 0){
    el.textContent = '\u{1F389} Happy 1st birthday, Jaxon!';
    el.style.display = '';
  } else {
    el.style.display = 'none';
  }
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
  renderTryNext();
  applyFoodSearch();
}

function applyFoodSearch(){
  const input = document.getElementById('food-search');
  const q = input ? input.value.trim().toLowerCase() : '';
  document.querySelectorAll('#categories .category').forEach(cat => {
    let anyVisible = false;
    cat.querySelectorAll('.food-row').forEach(row => {
      const label = row.querySelector('.food-label');
      const name = label ? label.textContent.toLowerCase() : '';
      const match = !q || name.includes(q);
      row.style.display = match ? '' : 'none';
      if (match) anyVisible = true;
    });
    const addRow = cat.querySelector('.add-food-row');
    if (addRow) addRow.style.display = q ? 'none' : '';
    cat.style.display = (!q || anyVisible) ? '' : 'none';
  });
}

document.getElementById('food-search').addEventListener('input', applyFoodSearch);

function renderTryNext(){
  const state = loadFoodState();
  const foodInfo = buildFoodInfo();

  const priorityNames = [
    'Egg (whole, cooked)', 'Egg yolk', 'Peanut butter (thinned)', 'Almond butter',
    'Cashew butter', 'Tahini (sesame paste)', 'Edamame', 'Tofu',
    'Plain whole-milk yogurt', 'Cheddar cheese', 'Whole wheat pasta', 'Whole grain bread',
    'Shrimp', 'Salmon', 'Cod'
  ];

  const nameToId = {};
  FOOD_DATA.forEach(cat => cat.items.forEach(f => { nameToId[f.name] = slug(cat.name + '-' + f.name); }));

  let suggestions = priorityNames
    .map(name => ({ id: nameToId[name], name }))
    .filter(s => s.id && !(state[s.id] && state[s.id].checked));

  if (suggestions.length < 5){
    const already = new Set(suggestions.map(s => s.id));
    FOOD_DATA.forEach(cat => cat.items.forEach(f => {
      if (suggestions.length >= 5) return;
      const id = slug(cat.name + '-' + f.name);
      if (!already.has(id) && !(state[id] && state[id].checked)){
        suggestions.push({ id, name: f.name });
        already.add(id);
      }
    }));
  }
  suggestions = suggestions.slice(0, 5);

  const section = document.getElementById('try-next-section');
  const wrap = document.getElementById('try-next-list');

  if (!suggestions.length){
    section.style.display = 'none';
    return;
  }
  section.style.display = '';
  wrap.innerHTML = '';

  suggestions.forEach(s => {
    const info = foodInfo[s.id];
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'try-next-chip';
    chip.innerHTML = '<span class="tn-emoji">' + (info ? info.emoji : '') + '</span><span>' + s.name + '</span>';
    chip.addEventListener('click', () => {
      const st = loadFoodState();
      const e = st[s.id] || {};
      e.checked = true;
      if (!e.date) e.date = todayISO();
      if (getCurrentUser()) e.loggedBy = getCurrentUser();
      st[s.id] = e;
      saveFoodState(st);
      expandedId = s.id;
      renderCategories();
      renderAllergies();
      setTimeout(() => {
        const rowEl = document.querySelector('.food-row[data-id="' + CSS.escape(s.id) + '"]');
        if (rowEl) rowEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    });
    wrap.appendChild(chip);
  });
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
    if (checkbox.checked && getCurrentUser()) e.loggedBy = getCurrentUser();
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

  if (entry.loggedBy){
    const byRow = document.createElement('div');
    byRow.className = 'detail-row';
    const byLbl = document.createElement('span');
    byLbl.className = 'field-label';
    byLbl.textContent = 'Logged by';
    const byVal = document.createElement('span');
    byVal.className = 'logged-by-value';
    byVal.textContent = entry.loggedBy;
    byRow.appendChild(byLbl);
    byRow.appendChild(byVal);
    detail.appendChild(byRow);
  }

  detail.appendChild(buildPhotoRow(entry.photo, (dataUrlOrNull) => updateFoodEntry(id, { photo: dataUrlOrNull })));

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
  if (getCurrentUser()) patch = Object.assign({}, patch, { loggedBy: getCurrentUser() });
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
    saveFoodState({});
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

/* ---------------- Milestones tab ---------------- */
function renderMilestones(){
  const state = loadMilestoneState();
  const container = document.getElementById('milestone-categories');
  container.innerHTML = '';

  MILESTONE_DATA.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'category';
    section.style.setProperty('--cat-color', cat.color);

    const heading = document.createElement('h2');
    heading.innerHTML = '<span class="dot"></span>' + cat.name +
      ' <span class="count" data-mcount="' + cat.name + '"></span>';
    section.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'food-grid';

    cat.items.forEach(name => {
      const id = slug(cat.name + '-' + name);
      grid.appendChild(buildMilestoneRow(id, name, state[id] || {}));
    });

    section.appendChild(grid);
    container.appendChild(section);
  });

  container.appendChild(buildDynamicMilestoneCategory(state));
  refreshMilestoneCounts();
}

function buildMilestoneRow(id, name, entry, opts){
  opts = opts || {};
  const isChecked = !!entry.achieved;
  const row = document.createElement('div');
  row.className = 'food-row' + (isChecked ? ' checked' : '') + (expandedId === ('m-' + id) ? ' expanded' : '');
  row.dataset.id = id;

  const main = document.createElement('div');
  main.className = 'food-main';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'milestone-' + id;
  checkbox.checked = isChecked;

  const label = document.createElement('label');
  label.className = 'food-label';
  label.htmlFor = 'milestone-' + id;
  label.textContent = name;

  main.appendChild(checkbox);
  main.appendChild(label);

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
    const st = loadMilestoneState();
    const e = st[id] || {};
    e.achieved = checkbox.checked;
    if (checkbox.checked && !e.date) e.date = todayISO();
    if (checkbox.checked && getCurrentUser()) e.loggedBy = getCurrentUser();
    st[id] = e;
    saveMilestoneState(st);
    expandedId = checkbox.checked ? ('m-' + id) : (expandedId === ('m-' + id) ? null : expandedId);
    renderMilestones();
  });

  if (isChecked){
    label.addEventListener('click', (evt) => {
      evt.preventDefault();
      expandedId = (expandedId === ('m-' + id)) ? null : ('m-' + id);
      renderMilestones();
    });

    if (expandedId === ('m-' + id)){
      row.appendChild(buildMilestoneDetail(id, entry));
    }
  }

  return row;
}

function buildMilestoneDetail(id, entry){
  const detail = document.createElement('div');
  detail.className = 'food-detail';

  const dateRow = document.createElement('div');
  dateRow.className = 'detail-row';
  const dateLbl = document.createElement('span');
  dateLbl.className = 'field-label';
  dateLbl.textContent = 'Date';
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.value = entry.date || todayISO();
  dateInput.addEventListener('change', () => updateMilestoneEntry(id, { date: dateInput.value }));
  dateRow.appendChild(dateLbl);
  dateRow.appendChild(dateInput);
  detail.appendChild(dateRow);

  if (entry.loggedBy){
    const byRow = document.createElement('div');
    byRow.className = 'detail-row';
    const byLbl = document.createElement('span');
    byLbl.className = 'field-label';
    byLbl.textContent = 'Logged by';
    const byVal = document.createElement('span');
    byVal.className = 'logged-by-value';
    byVal.textContent = entry.loggedBy;
    byRow.appendChild(byLbl);
    byRow.appendChild(byVal);
    detail.appendChild(byRow);
  }

  detail.appendChild(buildPhotoRow(entry.photo, (dataUrlOrNull) => updateMilestoneEntry(id, { photo: dataUrlOrNull })));

  const noteRow = document.createElement('div');
  noteRow.className = 'detail-row';
  const noteInput = document.createElement('input');
  noteInput.type = 'text';
  noteInput.className = 'allergy-note';
  noteInput.placeholder = 'Add a note (optional)';
  noteInput.value = entry.note || '';
  noteInput.addEventListener('change', () => updateMilestoneEntry(id, { note: noteInput.value }));
  noteRow.appendChild(noteInput);
  detail.appendChild(noteRow);

  return detail;
}

function updateMilestoneEntry(id, patch){
  const st = loadMilestoneState();
  if (getCurrentUser()) patch = Object.assign({}, patch, { loggedBy: getCurrentUser() });
  st[id] = Object.assign({}, st[id] || {}, patch);
  saveMilestoneState(st);
  renderMilestones();
}

function buildDynamicMilestoneCategory(state){
  const section = document.createElement('div');
  section.className = 'category';
  section.style.setProperty('--cat-color', CUSTOM_MILESTONE_COLOR);

  const list = loadCustomMilestones();
  const heading = document.createElement('h2');
  heading.innerHTML = '<span class="dot"></span>Custom milestones <span class="count">(' + list.length + ')</span>';
  section.appendChild(heading);

  const grid = document.createElement('div');
  grid.className = 'food-grid';

  list.forEach(entry => {
    const id = 'custom-milestone-' + entry.id;
    grid.appendChild(buildMilestoneRow(id, entry.name, state[id] || {}, {
      deletable: true,
      onDelete: () => {
        if (confirm('Remove "' + entry.name + '" from your milestones?')){
          const newList = loadCustomMilestones().filter(e => e.id !== entry.id);
          saveCustomMilestones(newList);
          const st = loadMilestoneState();
          delete st[id];
          saveMilestoneState(st);
          if (expandedId === ('m-' + id)) expandedId = null;
          renderMilestones();
        }
      }
    }));
  });

  const addRow = document.createElement('div');
  addRow.className = 'add-food-row';
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'e.g. Started daycare';
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = 'Add milestone';
  function submit(){
    const val = input.value.trim();
    if (!val) return;
    const newList = loadCustomMilestones();
    newList.push({ id: uid(), name: val });
    saveCustomMilestones(newList);
    renderMilestones();
  }
  btn.addEventListener('click', submit);
  input.addEventListener('keydown', (evt) => { if (evt.key === 'Enter'){ evt.preventDefault(); submit(); } });
  addRow.appendChild(input);
  addRow.appendChild(btn);
  grid.appendChild(addRow);

  section.appendChild(grid);
  return section;
}

function refreshMilestoneCounts(){
  const state = loadMilestoneState();
  let total = 0, reached = 0;
  MILESTONE_DATA.forEach(cat => {
    const reachedInCat = cat.items.filter(name => {
      const e = state[slug(cat.name + '-' + name)];
      return e && e.achieved;
    }).length;
    total += cat.items.length;
    reached += reachedInCat;
    const span = document.querySelector('[data-mcount="' + CSS.escape(cat.name) + '"]');
    if (span) span.textContent = reachedInCat + '/' + cat.items.length;
  });
  document.getElementById('milestone-progress-count').textContent = reached + ' of ' + total + ' reached';
  document.getElementById('milestone-progress-fill').style.width = (total ? (reached / total * 100) : 0) + '%';
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

/* ---------------- Timeline tab ---------------- */
function reactionLabel(key){
  const r = REACTIONS.find(x => x.key === key);
  return r ? (r.emoji + ' ' + r.label) : '';
}

function reactionLabelText(key){
  const r = REACTIONS.find(x => x.key === key);
  return r ? r.label : '';
}

function renderTimeline(){
  const state = loadFoodState();
  const foodInfo = buildFoodInfo();
  const milestoneState = loadMilestoneState();
  const milestoneInfo = buildMilestoneInfo();
  const growth = loadGrowthLog();

  const events = [];

  Object.keys(state).forEach(id => {
    const e = state[id];
    const info = foodInfo[id];
    if (e && e.checked && e.date && info){
      events.push({
        date: e.date,
        icon: info.emoji,
        text: 'Tried ' + info.name,
        sub: [e.reaction ? reactionLabel(e.reaction) : '', e.allergic ? 'Reaction noted' : ''].filter(Boolean).join(' \u00b7 '),
        loggedBy: e.loggedBy
      });
    }
  });

  Object.keys(milestoneState).forEach(id => {
    const e = milestoneState[id];
    const info = milestoneInfo[id];
    if (e && e.achieved && e.date && info){
      events.push({
        date: e.date,
        icon: '\u{1F31F}',
        text: info.name,
        sub: e.note || '',
        loggedBy: e.loggedBy
      });
    }
  });

  growth.forEach(g => {
    events.push({
      date: g.date,
      icon: '\u{1F4CF}',
      text: g.weightLb + ' lb ' + g.weightOz + ' oz, ' + g.lengthIn + ' in' + (g.headIn ? ', head ' + g.headIn + ' in' : ''),
      sub: 'Growth check-in',
      loggedBy: null
    });
  });

  events.sort((a, b) => b.date.localeCompare(a.date));

  const container = document.getElementById('timeline-list');
  container.innerHTML = '';

  if (!events.length){
    container.innerHTML = '<div class="empty-state">Nothing logged yet \u2014 check off a food or milestone to start the timeline.</div>';
    return;
  }

  let lastDate = null;
  events.forEach(ev => {
    if (ev.date !== lastDate){
      const header = document.createElement('div');
      header.className = 'timeline-date';
      header.textContent = new Date(ev.date + 'T00:00:00').toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
      container.appendChild(header);
      lastDate = ev.date;
    }

    const item = document.createElement('div');
    item.className = 'timeline-item';
    const subParts = [ev.sub, ev.loggedBy].filter(Boolean).join(' \u00b7 ');
    item.innerHTML =
      '<span class="tl-icon">' + ev.icon + '</span>' +
      '<div class="tl-body"><div class="tl-text">' + ev.text + '</div>' +
      (subParts ? '<div class="tl-sub">' + subParts + '</div>' : '') +
      '</div>';
    container.appendChild(item);
  });
}

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

/* ---------------- Stats tab ---------------- */
let statsChart = null;

function longestStreak(dateSet){
  const dates = Array.from(dateSet).sort();
  if (!dates.length) return 0;
  let longest = 1, current = 1;
  for (let i = 1; i < dates.length; i++){
    const prev = new Date(dates[i-1] + 'T00:00:00');
    const cur = new Date(dates[i] + 'T00:00:00');
    const diffDays = Math.round((cur - prev) / 86400000);
    if (diffDays === 1) { current++; longest = Math.max(longest, current); }
    else if (diffDays > 1) { current = 1; }
  }
  return longest;
}

function renderBadges(ctx){
  const badges = [
    { icon: '\u{1F37C}', title: 'First Bite', desc: 'Tried your first food', unlocked: ctx.tried >= 1 },
    { icon: '\u{1F34E}', title: 'Fruit Explorer', desc: 'Tried every fruit', unlocked: ctx.categoryTotals['Fruits'] && ctx.categoryTotals['Fruits'].tried === ctx.categoryTotals['Fruits'].total },
    { icon: '\u{1F966}', title: 'Veggie Explorer', desc: 'Tried every vegetable', unlocked: ctx.categoryTotals['Vegetables'] && ctx.categoryTotals['Vegetables'].tried === ctx.categoryTotals['Vegetables'].total },
    { icon: '\u{1F357}', title: 'Protein Pro', desc: 'Tried every protein', unlocked: ctx.categoryTotals['Proteins'] && ctx.categoryTotals['Proteins'].tried === ctx.categoryTotals['Proteins'].total },
    { icon: '\u{1F3C5}', title: 'Halfway There', desc: '50 of 100 foods tried', unlocked: ctx.tried >= 50 },
    { icon: '\u{1F451}', title: 'Century Club', desc: 'All 100 foods tried', unlocked: ctx.tried >= 100 },
    { icon: '\u{1F525}', title: '5-Day Streak', desc: 'A new food 5 days running', unlocked: ctx.streak >= 5 },
    { icon: '\u{1F31F}', title: 'First Milestone', desc: 'Logged your first milestone', unlocked: ctx.milestonesReached >= 1 },
    { icon: '\u{1F476}', title: 'On the Move', desc: 'Logged first steps', unlocked: ctx.firstStepsDone },
    { icon: '\u{1F46A}', title: 'Team Effort', desc: 'Both parents have logged something', unlocked: ctx.loggedByCount >= 2 },
    { icon: '\u{1F963}', title: 'Kitchen Creative', desc: 'Tried 3 custom foods or combos', unlocked: ctx.customComboTried >= 3 }
  ];

  const grid = document.getElementById('badges-grid');
  grid.innerHTML = '';
  badges.forEach(b => {
    const tile = document.createElement('div');
    tile.className = 'badge-tile' + (b.unlocked ? '' : ' locked');
    tile.innerHTML =
      '<div class="badge-icon">' + b.icon + '</div>' +
      '<div class="badge-title">' + b.title + '</div>' +
      '<div class="badge-desc">' + b.desc + '</div>';
    grid.appendChild(tile);
  });
}

function renderStats(){
  const state = loadFoodState();
  const foodInfo = buildFoodInfo();
  const milestoneState = loadMilestoneState();

  let tried = 0, liked = 0, neutral = 0, disliked = 0, faces = 0, allergic = 0, customComboTried = 0;
  const likedNames = [], dislikedNames = [];
  const daySet = new Set();
  const loggedByCounts = {};
  const categoryTotals = {};
  FOOD_DATA.forEach(cat => { categoryTotals[cat.name] = { total: cat.items.length, tried: 0 }; });

  Object.keys(state).forEach(id => {
    const e = state[id];
    const info = foodInfo[id];
    if (!e || !e.checked || !info) return;
    tried++;
    if (categoryTotals[info.category]) categoryTotals[info.category].tried++;
    if (info.category === 'Custom foods' || info.category === 'Food combos') customComboTried++;
    if (e.date) daySet.add(e.date);
    if (e.reaction === 'liked'){ liked++; likedNames.push(info.name); }
    if (e.reaction === 'neutral') neutral++;
    if (e.reaction === 'disliked'){ disliked++; dislikedNames.push(info.name); }
    if (e.face) faces++;
    if (e.allergic) allergic++;
    if (e.loggedBy) loggedByCounts[e.loggedBy] = (loggedByCounts[e.loggedBy] || 0) + 1;
  });

  let milestonesReached = 0, milestonesTotal = 0;
  MILESTONE_DATA.forEach(cat => { milestonesTotal += cat.items.length; });
  milestonesTotal += loadCustomMilestones().length;
  Object.keys(milestoneState).forEach(id => {
    if (milestoneState[id] && milestoneState[id].achieved) milestonesReached++;
  });

  const streak = longestStreak(daySet);
  const firstStepsId = slug('Motor skills-First steps');
  const firstStepsDone = !!(milestoneState[firstStepsId] && milestoneState[firstStepsId].achieved);

  renderBadges({
    tried, streak, milestonesReached, customComboTried, categoryTotals, firstStepsDone,
    loggedByCount: Object.keys(loggedByCounts).length
  });

  // stat tiles
  const tiles = [
    { label: 'Foods tried', value: tried + ' / 100' },
    { label: 'Milestones reached', value: milestonesReached + ' / ' + milestonesTotal },
    { label: 'Longest streak', value: streak + (streak === 1 ? ' day' : ' days') },
    { label: 'Made a face', value: String(faces) },
    { label: 'Allergic reactions', value: String(allergic) }
  ];
  Object.keys(loggedByCounts).forEach(name => {
    tiles.push({ label: name + ' logged', value: String(loggedByCounts[name]) });
  });

  const grid = document.getElementById('stats-grid');
  grid.innerHTML = '';
  tiles.forEach(t => {
    const tile = document.createElement('div');
    tile.className = 'stat-tile';
    tile.innerHTML = '<div class="stat-value">' + t.value + '</div><div class="stat-label">' + t.label + '</div>';
    grid.appendChild(tile);
  });

  // liked / disliked lists
  const likedEl = document.getElementById('stats-liked');
  likedEl.innerHTML = likedNames.length
    ? likedNames.map(n => '<li>' + n + '</li>').join('')
    : '<li class="stats-empty">Nothing marked yet</li>';

  const dislikedEl = document.getElementById('stats-disliked');
  dislikedEl.innerHTML = dislikedNames.length
    ? dislikedNames.map(n => '<li>' + n + '</li>').join('')
    : '<li class="stats-empty">Nothing marked yet</li>';

  // reaction chart
  if (statsChart) statsChart.destroy();
  const ctx = document.getElementById('stats-chart').getContext('2d');
  statsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Liked', 'Neutral', 'Disliked'],
      datasets: [{
        data: [liked, neutral, disliked],
        backgroundColor: ['#4F7942', '#B98B4E', '#B23A48'],
        borderRadius: 4
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
    }
  });
}

/* ---------------- Backup / restore ---------------- */
const syncToggle = document.getElementById('sync-toggle');
const syncPanel = document.getElementById('sync-panel');
syncToggle.addEventListener('click', () => {
  syncPanel.hidden = !syncPanel.hidden;
});

document.getElementById('export-btn').addEventListener('click', () => {
  const backup = {
    exportedAt: todayISO(),
    foods: loadFoodState(),
    growth: loadGrowthLog(),
    customFoods: loadCustomFoods(),
    comboFoods: loadComboFoods()
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'jaxon-first-foods-backup-' + todayISO() + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

document.getElementById('import-file').addEventListener('change', (evt) => {
  const file = evt.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try{
      data = JSON.parse(reader.result);
    }catch(e){
      alert("That file doesn't look like a valid backup.");
      evt.target.value = '';
      return;
    }

    const looksValid = data && typeof data === 'object' &&
      (data.foods || data.growth || data.customFoods || data.comboFoods);
    if (!looksValid){
      alert("That file doesn't look like a Jaxon's First Foods backup.");
      evt.target.value = '';
      return;
    }

    if (!confirm('This replaces everything currently saved on this device with the backup file. Continue?')){
      evt.target.value = '';
      return;
    }

    saveFoodState(data.foods || {});
    saveGrowthLog(Array.isArray(data.growth) ? data.growth : loadGrowthLog());
    saveCustomFoods(Array.isArray(data.customFoods) ? data.customFoods : []);
    saveComboFoods(Array.isArray(data.comboFoods) ? data.comboFoods : []);

    expandedId = null;
    renderCategories();
    renderAllergies();
    renderGrowth();
    renderCalendar();
    evt.target.value = '';
    syncPanel.hidden = true;
    alert('Backup restored on this device.');
  };
  reader.readAsText(file);
});

/* ---------------- Print keepsake ---------------- */
function buildKeepsakeHTML(){
  const state = loadFoodState();
  const foodInfo = buildFoodInfo();
  const milestoneState = loadMilestoneState();
  const milestoneInfo = buildMilestoneInfo();
  const growth = loadGrowthLog().slice().sort((a,b) => a.date.localeCompare(b.date));

  const esc = (s) => String(s).replace(/</g, '&lt;');
  const fmtDate = (d) => d ? new Date(d + 'T00:00:00').toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : '';

  let html = '<h1>Jaxon\u2019s First Foods \u2014 Keepsake</h1>';
  html += '<p class="k-sub">Printed ' + fmtDate(todayISO()) + '</p>';

  if (growth.length){
    const latest = growth[growth.length - 1];
    html += '<h2>Growth</h2>';
    html += '<p>Birth (Feb 23, 2026): 6 lb 11 oz, 19.5 in long.<br>' +
      'Latest (' + fmtDate(latest.date) + '): ' + latest.weightLb + ' lb ' + latest.weightOz + ' oz, ' +
      latest.lengthIn + ' in long' + (latest.headIn ? ', head ' + latest.headIn + ' in' : '') + '.</p>';
  }

  const triedByCategory = {};
  Object.keys(state).forEach(id => {
    const e = state[id];
    const info = foodInfo[id];
    if (e && e.checked && info){
      if (!triedByCategory[info.category]) triedByCategory[info.category] = [];
      triedByCategory[info.category].push({ name: info.name, date: e.date, reaction: e.reaction, note: e.allergyNote, allergic: e.allergic });
    }
  });
  const triedCount = Object.values(triedByCategory).reduce((sum, arr) => sum + arr.length, 0);

  html += '<h2>Foods tried (' + triedCount + ' of 100)</h2>';
  Object.keys(triedByCategory).forEach(cat => {
    html += '<h3>' + esc(cat) + '</h3><ul>';
    triedByCategory[cat].sort((a,b) => (a.date||'').localeCompare(b.date||'')).forEach(f => {
      const reactionWord = f.reaction === 'liked' ? 'Liked it' : f.reaction === 'disliked' ? "Didn't like it" : f.reaction === 'neutral' ? 'Neutral' : '';
      html += '<li>' + esc(f.name) + (f.date ? ' \u2014 ' + fmtDate(f.date) : '') +
        (reactionWord ? ' (' + reactionWord + ')' : '') +
        (f.allergic ? ' \u26a0 reaction noted' + (f.note ? ': ' + esc(f.note) : '') : '') +
        '</li>';
    });
    html += '</ul>';
  });

  const reachedList = [];
  Object.keys(milestoneState).forEach(id => {
    const e = milestoneState[id];
    const info = milestoneInfo[id];
    if (e && e.achieved && info) reachedList.push({ name: info.name, date: e.date, note: e.note });
  });
  if (reachedList.length){
    html += '<h2>Milestones reached</h2><ul>';
    reachedList.sort((a,b) => (a.date||'').localeCompare(b.date||'')).forEach(m => {
      html += '<li>' + esc(m.name) + (m.date ? ' \u2014 ' + fmtDate(m.date) : '') + (m.note ? ' \u2014 ' + esc(m.note) : '') + '</li>';
    });
    html += '</ul>';
  }

  return html;
}

document.getElementById('print-btn').addEventListener('click', () => {
  document.getElementById('print-keepsake').innerHTML = buildKeepsakeHTML();
  window.print();
});

/* ---------------- Weekly recap ---------------- */
function buildWeeklyRecapText(){
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - 7);
  const cutoff = cutoffDate.toISOString().slice(0, 10);

  const state = loadFoodState();
  const foodInfo = buildFoodInfo();
  const milestoneState = loadMilestoneState();
  const milestoneInfo = buildMilestoneInfo();
  const growth = loadGrowthLog();
  const fmtDate = (d) => new Date(d + 'T00:00:00').toLocaleDateString(undefined, { month: 'short', day: 'numeric' });

  const foodsThisWeek = [];
  Object.keys(state).forEach(id => {
    const e = state[id];
    const info = foodInfo[id];
    if (e && e.checked && e.date && e.date >= cutoff && info){
      foodsThisWeek.push({ name: info.name, date: e.date, reaction: e.reaction });
    }
  });
  foodsThisWeek.sort((a, b) => a.date.localeCompare(b.date));

  const milestonesThisWeek = [];
  Object.keys(milestoneState).forEach(id => {
    const e = milestoneState[id];
    const info = milestoneInfo[id];
    if (e && e.achieved && e.date && e.date >= cutoff && info){
      milestonesThisWeek.push({ name: info.name, date: e.date });
    }
  });
  milestonesThisWeek.sort((a, b) => a.date.localeCompare(b.date));

  const growthThisWeek = growth.filter(g => g.date >= cutoff).sort((a, b) => a.date.localeCompare(b.date));

  let text = "Jaxon's week in review\n\n";

  if (foodsThisWeek.length){
    text += 'New foods tried:\n';
    foodsThisWeek.forEach(f => {
      text += '- ' + f.name + ' (' + fmtDate(f.date) + ')' + (f.reaction ? ' \u2014 ' + reactionLabelText(f.reaction) : '') + '\n';
    });
    text += '\n';
  } else {
    text += 'No new foods logged this week.\n\n';
  }

  if (milestonesThisWeek.length){
    text += 'Milestones:\n';
    milestonesThisWeek.forEach(m => { text += '- ' + m.name + ' (' + fmtDate(m.date) + ')\n'; });
    text += '\n';
  }

  if (growthThisWeek.length){
    const g = growthThisWeek[growthThisWeek.length - 1];
    text += 'Latest measurements (' + fmtDate(g.date) + '): ' + g.weightLb + ' lb ' + g.weightOz + ' oz, ' +
      g.lengthIn + ' in' + (g.headIn ? ', head ' + g.headIn + ' in' : '') + '\n\n';
  }

  text += 'Sent from Jaxon\u2019s First Foods tracker.';
  return text;
}

document.getElementById('recap-btn').addEventListener('click', () => {
  const text = buildWeeklyRecapText();
  const title = "Jaxon's week in review";
  if (navigator.share){
    navigator.share({ title, text }).catch(() => {});
  } else {
    window.location.href = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(text);
  }
});

/* ---------------- Init ---------------- */
if (isReadOnly()){
  document.body.classList.add('read-only');
  document.getElementById('readonly-banner').style.display = '';
}
applyTheme(loadTheme());
renderAge();
renderBirthdayBanner();
renderCategories();
renderAllergies();
renderUserBadge();
startSync();

if ('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((err) => console.warn('Service worker registration failed:', err));
  });
}