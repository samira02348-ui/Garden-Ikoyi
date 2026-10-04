/* Shared data layer for index.html and admin.html */
const STORE_KEY = "garden_ikoyi_menu_v1";
const WHATSAPP = "2348000000000"; // placeholder: +234 800 000 0000


const naira = n => "₦" + Number(n || 0).toLocaleString("en-NG");
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* Priority: localStorage (admin edits) > menu.json */
async function loadMenu() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  const res = await fetch("menu.json");
  return res.json();
}
function saveMenu(menu) { localStorage.setItem(STORE_KEY, JSON.stringify(menu)); }
function resetMenu() { localStorage.removeItem(STORE_KEY); }
