const BIRTH_DATE = new Date(2026, 1, 23); // Feb 23, 2026
  const FOOD_STORAGE_KEY = 'jaxon-first-foods-v1';
  const GROWTH_STORAGE_KEY = 'jaxon-growth-log-v1';

  const FOOD_DATA = [
    { name: 'Fruits', color: '#D9643A', items: [
      'Banana','Avocado','Apple','Pear','Peach','Plum','Mango','Blueberries',
      'Strawberries','Raspberries','Watermelon','Cantaloupe','Kiwi','Papaya','Pineapple'
    ]},
    { name: 'Vegetables', color: '#4F7942', items: [
      'Sweet potato','Butternut squash','Carrot','Green beans','Peas','Broccoli',
      'Cauliflower','Zucchini','Pumpkin','Spinach','Kale','Beet','Asparagus',
      'Bell pepper','Cucumber','Corn','Tomato','Eggplant','Parsnip','Turnip'
    ]},
    { name: 'Grains & Starches', color: '#B98B4E', items: [
      'Oatmeal','Rice','Rice cereal','Quinoa','Barley','Whole wheat pasta',
      'Whole grain bread','Couscous','Farro','Millet'
    ]},
    { name: 'Proteins', color: '#8B3A62', items: [
      'Chicken','Turkey','Beef','Pork','Salmon','Cod','Tuna (light, low-mercury)',
      'Shrimp','Lamb','Duck','Sardines','Trout','Tilapia','Egg (whole, cooked)','Egg yolk'
    ]},
    { name: 'Legumes', color: '#8A8B3E', items: [
      'Lentils','Black beans','Chickpeas','Kidney beans','Pinto beans','Edamame',
      'Split peas','Navy beans','Lima beans','White beans'
    ]},
    { name: 'Dairy', color: '#4A7A96', items: [
      'Plain whole-milk yogurt','Cottage cheese','Cheddar cheese','Mozzarella cheese',
      'Cream cheese','Ricotta cheese','Parmesan cheese','Kefir'
    ]},
    { name: 'Nuts & Seeds (as smooth butters)', color: '#6B4A2F', items: [
      'Peanut butter (thinned)','Almond butter','Cashew butter','Sunflower seed butter',
      'Chia seeds','Ground flaxseed','Tahini (sesame paste)','Hemp seeds'
    ]},
    { name: 'Herbs & Spices', color: '#2E7D6B', items: [
      'Cinnamon','Basil','Oregano','Garlic','Ginger','Cumin','Turmeric','Mint','Dill','Parsley'
    ]},
    { name: 'Other first foods', color: '#5B6B72', items: [
      'Tofu','Hummus','Unsweetened applesauce','Whole grain crackers'
    ]}
  ];

  const REACTIONS = [
    { key: 'liked', emoji: '\u{1F60B}', label: 'Liked it' },
    { key: 'neutral', emoji: '\u{1F610}', label: 'Neutral' },
    { key: 'disliked', emoji: '\u{1F616}', label: "Didn't like it" }
  ];

  let expandedId = null;
  let weightChart = null;
  let lengthChart = null;

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

  function loadGrowthLog(){
    try{
      const raw = localStorage.getItem(GROWTH_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    }catch(e){ /* fall through to seed */ }
    const seed = [
      { id: uid(), date: '2026-02-23', weightLb: 6, weightOz: 11, lengthIn: 19.5 },
      { id: uid(), date: '2026-08-30', weightLb: 13, weightOz: 14, lengthIn: 25 }
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
        const id = slug(cat.name + '-' + food);
        grid.appendChild(buildFoodRow(id, food, state[id] || {}));
      });

      section.appendChild(grid);
      container.appendChild(section);
    });

    refreshCounts();
  }

  function buildFoodRow(id, foodName, entry){
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
      const checkedInCat = cat.items.filter(food => state[slug(cat.name + '-' + food)] && state[slug(cat.name + '-' + food)].checked).length;
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
    const flagged = [];
    FOOD_DATA.forEach(cat => {
      cat.items.forEach(food => {
        const id = slug(cat.name + '-' + food);
        const e = state[id];
        if (e && e.allergic){
          flagged.push({ id, food, category: cat.name, color: cat.color, date: e.date, note: e.allergyNote });
        }
      });
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

    tr.appendChild(dateTd); tr.appendChild(lbTd); tr.appendChild(ozTd); tr.appendChild(lenTd); tr.appendChild(delTd);
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
    entries.push({ id: uid(), date: todayISO(), weightLb: 0, weightOz: 0, lengthIn: 0 });
    saveGrowthLog(entries);
    renderGrowth();
  });

  /* ---------------- Init ---------------- */
  renderAge();
  renderCategories();
  renderAllergies();