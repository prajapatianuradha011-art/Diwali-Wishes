const canvas = document.getElementById('sky');
const ctx = canvas.getContext('2d');
let w, h, particles = [], rockets = [];
function resize() { w = canvas.width = innerWidth * devicePixelRatio; h = canvas.height = innerHeight * devicePixelRatio; canvas.style.width = innerWidth + 'px'; canvas.style.height = innerHeight + 'px'; ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0) }
addEventListener('resize', resize); resize();
function burst(x, y) { for (let i = 0; i < 75; i++) { const a = Math.random() * Math.PI * 2, s = 1 + Math.random() * 4; particles.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, size: 1 + Math.random() * 2.2, hue: Math.random() > .45 ? 42 : Math.random() * 35 }) } }
function launch() { rockets.push({ x: innerWidth * (.15 + Math.random() * .7), y: innerHeight + 5, target: innerHeight * (.12 + Math.random() * .38), speed: 5 + Math.random() * 3 }) }
function frame() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    if (Math.random() < .025) launch();
    rockets.forEach((r, i) => { r.y -= r.speed; ctx.fillStyle = '#ffe2a0'; ctx.beginPath(); ctx.arc(r.x, r.y, 2, 0, Math.PI * 2); ctx.fill(); if (r.y <= r.target) { burst(r.x, r.y); rockets.splice(i, 1) } });
    particles.forEach((p, i) => { p.x += p.vx; p.y += p.vy; p.vy += .035; p.vx *= .99; p.life -= .012; ctx.globalAlpha = Math.max(0, p.life); ctx.fillStyle = `hsl(${p.hue},95%,${65 + p.life * 20}%)`; ctx.shadowBlur = 10; ctx.shadowColor = ctx.fillStyle; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill(); if (p.life <= 0) particles.splice(i, 1) });
    ctx.globalAlpha = 1; ctx.shadowBlur = 0; requestAnimationFrame(frame)
}
frame();
const toast = document.getElementById('toast');
document.getElementById('celebrate').addEventListener('click', () => { for (let i = 0; i < 5; i++)setTimeout(() => burst(innerWidth * (.15 + Math.random() * .7), innerHeight * (.15 + Math.random() * .35)), i * 220); toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2400) });
