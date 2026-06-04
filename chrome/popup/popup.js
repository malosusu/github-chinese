'use strict';

const powerInput = document.getElementById('power-input');
const statusEl = document.getElementById('status');

function setStatus(text, type) {
  statusEl.textContent = text;
  statusEl.className = 'status' + (type ? ' is-' + type : '');
}

async function loadState() {
  const result = await chrome.storage.sync.get({ enable_extension: true });
  const enabled = Boolean(result.enable_extension);
  powerInput.checked = enabled;
  setStatus(enabled ? '已开启' : '已关闭', enabled ? 'on' : 'off');
}

powerInput.addEventListener('change', async () => {
  const enabled = powerInput.checked;
  await chrome.storage.sync.set({ enable_extension: enabled });
  setStatus(enabled ? '已开启' : '已关闭', enabled ? 'on' : 'off');

  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const tab = tabs[0];
  if (tab?.url && /^(https?:\/\/)?([a-z0-9]+\.)?github\.(com|io)/i.test(tab.url)) {
    chrome.tabs.reload(tab.id);
  }
});

document.getElementById('options-btn').addEventListener('click', () => {
  chrome.runtime.openOptionsPage();
});

loadState();
