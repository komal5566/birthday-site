// cake.ts — dynamic candles (TypeScript). Save alongside cake.html and cake.css.

const cakeWrap = document.getElementById('cakeWrap')!;
const blowBtn = document.getElementById('blowBtn') as HTMLButtonElement;
const makeAWishBtn = document.getElementById('makeAWish') as HTMLButtonElement;
const relightAllBtn = document.getElementById('relightAll') as HTMLButtonElement;

const candlesContainer = document.getElementById('candles')!;
const confettiGroup = document.getElementById('confetti')!;
const range = document.getElementById('candleCount') as HTMLInputElement;
const label = document.getElementById('candleLabel')!;
const incBtn = document.getElementById('incCand')!;
const decBtn = document.getElementById('decCand')!;

let candleCount = Math.max(1, Math.min(12, Number(range.value || 3)));
let candlesOn: boolean[] = [];
let rafHandles: number[] = [];

const rand = (min: number, max: number) => Math.random() * (max - min) + min;


function createCandleSVG(index: number, x: number, yBase: number) {
  // returns a <g> element representing one candle
  const ns = 'http://www.w3.org/2000/svg';
  const g = document.createElementNS(ns, 'g');
  g.setAttribute('class', 'candle');
  g.setAttribute('data-index', String(index));
  g.setAttribute('transform', `translate(${x}, ${yBase})`);
  // body
  const rect = document.createElementNS(ns, 'rect');
  
  rect.setAttribute('x', '-6');
  rect.setAttribute('y', '-62');
  rect.setAttribute('width', '12');
  rect.setAttribute('height', '50');
  rect.setAttribute('rx', '3');
  rect.setAttribute('fill', '#ff9aa8');
  // stripe (slightly varied)
  const path = document.createElementNS(ns, 'path');
 
  path.setAttribute('d', index % 2 === 0 ? 'M-3 -68 q6 8 0 18' : 'M6 -68 q-6 8 0 18');
  path.setAttribute('stroke', index % 3 === 0 ? '#ff9aa8' : (index % 3 === 1 ? '#8fcfff' : '#ffd46b'));
  path.setAttribute('stroke-width', '2');
  path.setAttribute('fill', 'none');

  // flame group
  const fw = document.createElementNS(ns, 'g');
  fw.setAttribute('class', 'flameWrap');
  fw.setAttribute('transform', 'translate(0,-82)');
  const glow = document.createElementNS(ns, 'ellipse');
  glow.setAttribute('class', 'flameGlow');
  glow.setAttribute('cx', '0');
  glow.setAttribute('cy', '-2');
  glow.setAttribute('rx', String(10 + (index % 2)));
  glow.setAttribute('ry', String(14 + (index % 2)));
  glow.setAttribute('opacity', '0.18');
  glow.setAttribute('fill', '#fff2b8');

  const flame = document.createElementNS(ns, 'path');
  flame.setAttribute('class', 'flame');
  flame.setAttribute('d', 'M0 0 C4 -8 4 -16 0 -22 C-4 -16 -4 -8 0 0 Z');
  flame.setAttribute('fill', '#ffd06b');

  fw.appendChild(glow);
  fw.appendChild(flame);

  g.appendChild(rect);
  g.appendChild(path);
  g.appendChild(fw);

  // clicking the candle toggles it
  g.addEventListener('click', (ev) => {
    ev.stopPropagation();
    const idx = Number(g.getAttribute('data-index'));
    toggleCandle(idx);
  });

  return g;
}

function renderCandles(count: number) {
  // place candles evenly across the top cushion width (200 wide) centered at x=260
  // top cushion center x = 260; width = 200; top y offset = 64 (as in SVG transforms above)
  candlesContainer.innerHTML = '';
  candlesOn = [];
  const centerX = 260;
  const width = 200;
  const yBase = 90; // same reference used in SVG transforms in cake.html
  // compute positions evenly
  // If count = n, positions are spaced across width with margins: x = centerX - width/2 + step/2 + i*step
  const n = Math.max(1, Math.min(12, count));
  const step = width / n;
  for (let i = 0; i < n; i++) {
    // position relative to SVG coordinate system
    const x = centerX - width / 2 + step / 2 + i * step;
    const g = createCandleSVG(i, x, yBase);
    candlesContainer.appendChild(g);
    candlesOn.push(true);
  }
  candleCount = n;
  (range as HTMLInputElement).value = String(n);
  label.textContent = String(n);
  refreshWrapClass();
  startFlickers();
}

function startFlickers() {
  stopFlickers();
  const candleGroups = Array.from(candlesContainer.querySelectorAll<SVGGElement>('.candle'));
  candleGroups.forEach((el, idx) => {
    const flame = el.querySelector<SVGPathElement>('.flame')!;
    const glow = el.querySelector<SVGElement>('.flameGlow')!;
    let t = rand(0, 1000);
    function frame() {
      if (!candlesOn[idx]) return;
      const s = 1 + Math.sin(t * 0.07 + idx) * 0.03 + (Math.random() * 0.04);
      const rot = Math.sin(t * 0.03 + idx) * 3 + rand(-1, 1);
      flame.style.transform = `scale(${s}) rotate(${rot}deg)`;
      glow.style.transform = `scale(${1 + (s - 1) * 1.3})`;
      (flame as any).style.opacity = (0.85 + Math.abs(Math.sin(t * 0.04)) * 0.15).toString();
      t += 1;
      rafHandles[idx] = requestAnimationFrame(frame);
    }
    if (candlesOn[idx]) frame();
  });
}

function stopFlickers() {
  rafHandles.forEach((id) => cancelAnimationFrame(id));
  rafHandles = [];
  const candleGroups = Array.from(candlesContainer.querySelectorAll<SVGGElement>('.candle'));
  candleGroups.forEach((el) => {
    const flame = el.querySelector<SVGPathElement>('.flame')!;
    const glow = el.querySelector<SVGElement>('.flameGlow')!;
    flame.style.transform = 'scale(0.25)';
    flame.style.opacity = '0';
    glow.style.transform = 'scale(0.25)';
    glow.style.opacity = '0';
  });
}

function refreshWrapClass() {
  const anyOn = candlesOn.some(Boolean);
  cakeWrap.classList.toggle('candle-on', anyOn);
  cakeWrap.classList.toggle('candle-out', !anyOn);
}

function toggleCandle(idx: number, setTo?: boolean) {
  if (idx < 0 || idx >= candlesOn.length) return;
  candlesOn[idx] = typeof setTo === 'boolean' ? setTo : !candlesOn[idx];
  const group = candlesContainer.querySelector<SVGGElement>(`.candle[data-index="${idx}"]`)!;
  const flame = group.querySelector<SVGPathElement>('.flame')!;
  const glow = group.querySelector<SVGElement>('.flameGlow')!;
  if (candlesOn[idx]) {
    flame.style.opacity = '1';
    glow.style.opacity = '0.18';
  } else {
    flame.style.opacity = '0';
    glow.style.opacity = '0';
    // small puff
    const ns = 'http://www.w3.org/2000/svg';
    const puff = document.createElementNS(ns, 'circle');
    puff.setAttribute('cx', '0');
    puff.setAttribute('cy', String(-94));
    puff.setAttribute('r', '6');
    puff.setAttribute('fill', '#e9f0ff');
    puff.style.transition = 'transform 700ms ease, opacity 700ms ease';
    confettiGroup.appendChild(puff);
    setTimeout(() => {
      puff.style.transform = `translate(${rand(-30,30)}px, ${rand(-120,-40)}px) scale(0.2)`;
      puff.style.opacity = '0';
    }, 20);
    setTimeout(() => puff.remove(), 900);
  }
  refreshWrapClass();
  if (candlesOn.some(Boolean)) startFlickers(); else stopFlickers();
}

function blowOutAll() {
  for (let i = 0; i < candlesOn.length; i++) {
    toggleCandle(i, false);
  }
  spawnConfetti(18);
}

function relightAll() {
  for (let i = 0; i < candlesOn.length; i++) {
    toggleCandle(i, true);
  }
  startFlickers();
}

function spawnConfetti(count = 20) {
  for (let i = 0; i < count; i++) {
    const kind = Math.random() > 0.5 ? 'rect' : 'circle';
    const ns = 'http://www.w3.org/2000/svg';
    const el = document.createElementNS(ns, kind === 'rect' ? 'rect' : 'circle');
    const x = rand(180, 340);
    const y = rand(10, 90);
    if (kind === 'rect') {
      (el as SVGRectElement).setAttribute('width', '6');
      (el as SVGRectElement).setAttribute('height', '10');
      (el as SVGRectElement).setAttribute('rx', '1');
      el.setAttribute('x', String(x));
      el.setAttribute('y', String(y));
    } else {
      el.setAttribute('r', String(rand(2,5)));
      el.setAttribute('cx', String(x));
      el.setAttribute('cy', String(y));
    }
    el.setAttribute('fill', `hsl(${rand(10,320)}, ${rand(70,90)}%, ${rand(45,65)}%)`);
    el.setAttribute('class', 'conf');
    el.style.opacity = '1';
    confettiGroup.appendChild(el);

    setTimeout(() => {
      const dx = rand(-160, 160);
      const dy = rand(80, 220);
      el.style.transform = `translate(${dx}px, ${dy}px) rotate(${rand(-360,360)}deg) scale(${rand(0.4,1)})`;
      el.style.opacity = '0';
    }, rand(20, 220));
  }
  setTimeout(() => confettiGroup.innerHTML = '', 1200);
}

// UI wiring
range.addEventListener('input', () => {
  const n = Math.max(1, Math.min(12, Number(range.value)));
  label.textContent = String(n);
  renderCandles(n);
});
incBtn.addEventListener('click', () => {
  const n = Math.min(12, candleCount + 1);
  renderCandles(n);
});
decBtn.addEventListener('click', () => {
  const n = Math.max(1, candleCount - 1);
  renderCandles(n);
});

blowBtn.addEventListener('click', blowOutAll);
relightAllBtn.addEventListener('click', relightAll);
makeAWishBtn.addEventListener('click', () => {
  if (!candlesOn.some(Boolean)) {
    // relight center candle
    const mid = Math.floor(candlesOn.length / 2);
    toggleCandle(mid, true);
  }
  spawnConfetti(30);
});

// clicking cake toggles middle candle
cakeWrap.addEventListener('click', () => {
  const mid = Math.floor(candlesOn.length / 2);
  toggleCandle(mid);
});

// keyboard space toggles mid when focused
document.addEventListener('keydown', (ev) => {
  if ((ev.code === 'Space' || ev.key === ' ') && (document.activeElement === document.body || document.activeElement === cakeWrap)) {
    ev.preventDefault();
    const mid = Math.floor(candlesOn.length / 2);
    toggleCandle(mid);
  }
});

// init
renderCandles(candleCount);