/**
 * Shared utilities for OONI CSV-backed sortable/filterable tables.
 * Used by the Citations and Media pages.
 */

const CSV_URL = '/OONI-citations.csv';

function parseCSV(text) {
  const lines = text.split('\n').filter(l => l.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const parts = [];
    let current = '';
    let inQuotes = false;
    for (const ch of lines[i]) {
      if (ch === '"') { inQuotes = !inQuotes; continue; }
      if (ch === ',' && !inQuotes) { parts.push(current.trim()); current = ''; continue; }
      current += ch;
    }
    parts.push(current.trim());
    if (parts.length < 9) continue;
    const dateStr = parts[3] || '';
    let sortDate = 0, year = '', dateFormatted = dateStr;
    if (dateStr) {
      year          = new Date(dateStr).getFullYear();
      sortDate      = new Date(dateStr).getTime();
      dateFormatted = new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }
    rows.push({
      publisher:   parts[1],
      title:       parts[2],
      dateStr, dateFormatted, sortDate, year,
      category:    parts[4],
      country:     parts[6],
      focus:       parts[7],
      language:    parts[8],
      link:        parts[9],
      archiveLink: parts[10] || ''
    });
  }
  return rows;
}

function focusTag(focus) {
  if (focus.includes('report'))    return '<span class="tag-focus report">OONI Report</span>';
  if (focus.includes('Raw'))       return '<span class="tag-focus data">Raw Data</span>';
  if (focus.includes('Promoting')) return '<span class="tag-focus tools">Promoting Tools</span>';
  return '<span class="tag-focus citation">General Citation</span>';
}

const EXT_ICON = ' <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:baseline;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

function linkCell(link, archiveLink) {
  let html = link
    ? '<a href="' + link + '" target="_blank" rel="noopener">view' + EXT_ICON + '</a>'
    : '';
  if (archiveLink) {
    html += ' <a href="' + archiveLink + '" target="_blank" rel="noopener" style="font-size:0.7rem;color:#adb5bd;">[archive' + EXT_ICON + ']</a>';
  } else {
    html += ' <a href="https://web.archive.org/web/*/' + link + '" target="_blank" rel="noopener" style="font-size:0.7rem;color:#adb5bd;">[archive' + EXT_ICON + ']</a>';
  }
  return '<div style="text-wrap:nowrap;">' + html + '</div>';
}

function addOptions(selectId, values) {
  const sel = document.getElementById(selectId);
  values.forEach(v => {
    const opt = document.createElement('option');
    opt.value = opt.textContent = v;
    sel.appendChild(opt);
  });
}

/**
 * Creates and wires up a sortable, filterable, paginated table backed by the
 * shared OONI CSV file.
 *
 * @param {object} config
 *   ns          {string}   Namespace prefix matching all element IDs on the page.
 *   csvFilter   {function} row → bool  — selects which rows belong to this table.
 *   getRowFilter {function} () → (row → bool) — reads current filter UI state.
 *   sortFields  {object}   { sortKey: row → comparable }
 *   rowHtml     {function} row → HTML string for a <tr>.
 *   countLabel  {function} n → string shown in the result-count span.
 *   onData      {function} (data) → void  (optional) — populate dynamic selects, etc.
 *
 * @returns {object} Public API exposed for inline onclick handlers.
 */
function createOoniTable(config) {
  const ns    = config.ns;
  const state = { sort: 'date', dir: 'desc', page: 0, perPage: 25 };
  let data    = [];

  function getFiltered() {
    return data.filter(config.getRowFilter());
  }

  function sortData(rows) {
    const m        = state.dir === 'asc' ? 1 : -1;
    const accessor = config.sortFields[state.sort] || config.sortFields.date;
    return [...rows].reverse().sort((a, b) => {
      const va = accessor(a), vb = accessor(b);
      if (va < vb) return -m;
      if (va > vb) return m;
      return 0;
    });
  }

  function render() {
    const filtered = getFiltered();
    const sorted   = sortData(filtered);
    document.getElementById(ns + '-count').textContent = config.countLabel(filtered.length);
    const start = state.page * state.perPage;
    document.getElementById(ns + '-tbody').innerHTML =
      sorted.slice(start, start + state.perPage).map(config.rowHtml).join('');
    renderPagination(filtered.length);
    document.querySelectorAll('#' + ns + '-table th[data-sort]').forEach(th => {
      th.classList.remove('sorted-asc', 'sorted-desc');
      if (th.dataset.sort === state.sort) th.classList.add('sorted-' + state.dir);
    });
  }

  function renderPagination(total) {
    const pages = Math.ceil(total / state.perPage);
    const el    = document.getElementById(ns + '-pagination');
    if (pages <= 1) { el.innerHTML = ''; return; }
    let html = '<button ' + (state.page === 0 ? 'disabled' : '')
      + ' onclick="ooniTables.' + ns + '.prev()">Prev</button>';
    const s = Math.max(0, state.page - 2);
    const e = Math.min(pages, s + 5);
    for (let i = s; i < e; i++) {
      html += '<button class="' + (i === state.page ? 'current' : '')
        + '" onclick="ooniTables.' + ns + '.goto(' + i + ')">' + (i + 1) + '</button>';
    }
    html += '<button ' + (state.page >= pages - 1 ? 'disabled' : '')
      + ' onclick="ooniTables.' + ns + '.next()">Next</button>';
    html += '<span class="page-info">' + (state.page + 1) + ' / ' + pages + '</span>';
    el.innerHTML = html;
  }

  const api = {
    prev()  { state.page--; render(); },
    next()  { state.page++; render(); },
    goto(i) { state.page = i; render(); },
    render,
  };

  fetch(CSV_URL).then(r => r.text()).then(text => {
    data = parseCSV(text).filter(config.csvFilter || (() => true));
    if (config.onData) config.onData(data);
    render();

    document.getElementById(ns + '-search')
      .addEventListener('input', () => { state.page = 0; render(); });
    document.querySelectorAll('#' + ns + '-controls select')
      .forEach(s => s.addEventListener('change', () => { state.page = 0; render(); }));
    document.querySelectorAll('#' + ns + '-table th[data-sort]')
      .forEach(th => th.addEventListener('click', () => {
        if (state.sort === th.dataset.sort) {
          state.dir = state.dir === 'asc' ? 'desc' : 'asc';
        } else {
          state.sort = th.dataset.sort;
          state.dir  = 'asc';
        }
        state.page = 0;
        render();
      }));
  }).catch(() => {
    document.getElementById(ns + '-tbody').innerHTML =
      '<tr><td colspan="99" style="text-align:center;padding:2rem;color:#868e96;">Could not load data.</td></tr>';
  });

  return api;
}

window.ooniTables = window.ooniTables || {};
