const root = document.documentElement;
const nav = document.getElementById('nav');
const menuBtn = document.querySelector('.menu-btn');

document.getElementById('year').textContent = new Date().getFullYear();

// Тема: сохранённая или системная
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
root.dataset.theme = dark ? 'dark' : 'light';

document.querySelector('.theme-btn').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Мобильное меню
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', false);
  })
);
