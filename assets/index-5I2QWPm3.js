(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();class Y extends HTMLElement{connectedCallback(){const s=new URL("/assets/img01-DSHkDRv0.jpg",import.meta.url).href,c=new URL("/assets/img02-BWUTk4dx.jpg",import.meta.url).href,o=new URL("/assets/img03-BThTuqa9.jpg",import.meta.url).href,e=new URL("/assets/img04-BczQuvAI.jpg",import.meta.url).href,t=new URL("/assets/img05-YPoAoLuO.jpg",import.meta.url).href,i=new URL("/assets/img06-BJxOVRXM.jpg",import.meta.url).href,h=new URL("/assets/img07-KTSrzFez.jpg",import.meta.url).href,u=new URL("/assets/img08-DNNCcjJX.jpg",import.meta.url).href,b=new URL("/assets/img09-D-S2NGY4.jpg",import.meta.url).href,v=new URL("/assets/img010-Af0n61Nv.jpg",import.meta.url).href,y=new URL("/assets/img011-BpsdwtRJ.jpg",import.meta.url).href,x=new URL("/assets/img012-CMtGsZtR.jpg",import.meta.url).href,w=new URL("/assets/img013-Ds7qEodQ.jpg",import.meta.url).href,L=new URL("/assets/img014-BEnvf7u-.jpg",import.meta.url).href,k=Array.from("Happy Birthday, Sauru").map((a,m)=>`<span class="char" style="--i:${m}">${a===" "?"&nbsp;":a}</span>`).join("");this.innerHTML=`
            <style>
                /* Cute pastel frames with soft shadow, floating and hover effects */
                :root { --cute-p1: #ffd8e6; --cute-p2: #fff1f6; --cute-accent: rgba(214,154,170,0.32); }
                .frames .frame {
                    width: 200px;
                    height: 120px;
                    border-radius: 16px;
                    overflow: hidden;
                    position: relative;
                    background: linear-gradient(180deg, var(--cute-p2), #ffffff 60%);
                    border: 4px solid var(--cute-accent);
                    box-shadow:
                        0 6px 18px rgba(111,47,62,0.06),
                        inset 0 1px 0 rgba(255,255,255,0.6);
                    display: inline-block;
                    transition: transform 320ms cubic-bezier(.2,.9,.3,1), box-shadow 320ms;
                    will-change: transform;
                    cursor: default;
                }
                /* little glossy sheen */
                .frames .frame::before {
                    content: '';
                    position: absolute;
                    left: 0; right: 0; top: 0; bottom: 0;
                    background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0));
                    pointer-events: none;
                    mix-blend-mode: screen;
                }
                /* heart badge that appears on hover */
                .frames .frame::after {
                    content: "💗";
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 18px;
                    transform: translateY(-6px) scale(0.8) rotate(-10deg);
                    opacity: 0;
                    transition: opacity 220ms ease, transform 220ms ease;
                    pointer-events: none;
                }
                .frames .frame img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 420ms cubic-bezier(.2,.9,.3,1), filter 420ms;
                    transform-origin: center;
                }

                /* hover / focus / tap interactions */
                .frames .frame:hover,
                .frames .frame:focus-within {
                    transform: translateY(-8px) rotate(-1.2deg) scale(1.035);
                    box-shadow: 0 18px 36px rgba(111,47,62,0.12);
                }
                .frames .frame:hover::after,
                .frames .frame:focus-within::after {
                    opacity: 1;
                    transform: translateY(0) scale(1) rotate(0deg);
                }
                .frames .frame:hover img,
                .frames .frame:focus-within img {
                    transform: scale(1.07);
                    filter: saturate(1.05) contrast(1.02);
                }

                /* gentle float animation for all frames, staggered by position */
                @keyframes floaty {
                    0% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-6px) rotate(0.8deg); }
                    100% { transform: translateY(0) rotate(0); }
                }
                .frames .frame { animation: floaty 6.5s ease-in-out infinite; }
                /* stagger using nth-child where applicable (top row / bottom etc.) */
                .frames-top .frame:nth-child(odd),
                .frames-bottom .frame:nth-child(odd) { animation-delay: 120ms; }
                .frames-top .frame:nth-child(even),
                .frames-bottom .frame:nth-child(even) { animation-delay: 320ms; }
                .frames-left .frame { animation-delay: 200ms; }
                .frames-right .frame { animation-delay: 360ms; }

                /* tiny outline accent for a cute border */
                .frames .frame .accent {
                    position: absolute;
                }

                /* Enhanced poem / bottom text styling (centered and card-like) */
                .subtitle.poem {
                    display: block;
                    max-width: 560px;
                    margin: 0px auto;              /* centers horizontally */
                    padding: 18px 22px;
                    text-align: center;
                    font-family: "Georgia", serif;
                    font-size: 18px;
                    line-height: 1.4;
                    font-style: italic;
                    color: #6f2f3e;
                    background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,248,250,0.8));
                    border-radius: 14px;
                    box-shadow: 0 10px 24px rgba(111,47,62,0.08);
                    border: 1px solid rgba(111,47,62,0.06);
                    white-space: pre-line;          /* preserve line breaks from the source */
                }

                /* Keep poem compact on smaller screens */
                @media (max-width: 600px) {
                    .subtitle.poem {
                        max-width: 92%;
                        font-size: 16px;
                        padding: 5px 16px;
                        margin: 5px auto;
                    }
                }

                /* Responsive fallback for smaller screens */
                @media (max-width: 900px) {
                    .frames .frame {
                        width: 140px;           /* was 160px */
                        height: 100px;          /* was 110px */
                        border-width: 5px;      /* was 6px */
                    }
                }

                /* Floating icons spacing: move icons further away from each other */
                .floating {
                    display: flex;
                    gap: 24px;                 /* larger space between icons */
                    justify-content: center;
                    align-items: center;
                    padding: 10px 0;
                    pointer-events: none;      /* decorative only */
                }
                .floating .heart,
                .floating .butterfly {
                    display: inline-block;
                    margin: 0 10px;           /* wider breathing room per icon */
                    transform-origin: center;
                }

                /* Slightly reduce spacing on very small screens */
                @media (max-width: 600px) {
                    .floating {
                        gap: 12px;
                    }
                    .floating .heart,
                    .floating .butterfly {
                        margin: 0 6px;
                    }
                }

                /* per-character entrance for title */
                .title {
                    font-weight: 700;
                    letter-spacing: 0.6px;
                    overflow: visible;
                    display: inline-block;
                    white-space: nowrap;
                }
                .title .char{
                    display: inline-block;
                    opacity: 0;
                    transform: translateY(14px) scale(0.98);
                    will-change: transform, opacity;
                    animation: char-in 420ms cubic-bezier(.2,.9,.3,1) forwards;
                    animation-delay: calc(var(--i) * 60ms);
                }
                @keyframes char-in {
                    from { opacity: 0; transform: translateY(14px) scale(0.98); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }

                /* spark emphasis */
                .title .spark {
                    display: inline-block;
                    margin-left: 6px;
                    transform-origin: center;
                    animation: spark-pop 900ms ease-in-out infinite;
                    animation-delay: calc((var(--i,0) + 1) * 60ms);
                }
                @keyframes spark-pop {
                    0%   { transform: translateY(0) scale(1); opacity: 0.95; }
                    30%  { transform: translateY(-6px) scale(1.18); opacity: 1; }
                    60%  { transform: translateY(0) scale(0.98); opacity: 0.95; }
                    100% { transform: translateY(0) scale(1); opacity: 0.95; }
                }

                /* ensure we can absolutely position confetti inside hero */
                .hero { position: relative; }

                /* CTA button styling + subtle pop */
                .cta {
                    display: inline-block;
                    margin-top: 16px;
                    padding: 12px 20px;
                    font-size: 16px;
                    font-weight: 600;
                    background: linear-gradient(90deg,#ff6fa3,#ff9fcf);
                    color: #fff;
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    box-shadow: 0 8px 20px rgba(255,127,170,0.18);
                    transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms;
                    will-change: transform;
                }
                .cta:hover { transform: translateY(-3px); box-shadow: 0 12px 26px rgba(255,127,170,0.22); }
                .cta:active,
                .cta.active { transform: translateY(0) scale(0.98); opacity: 0.98; }

                /* Confetti container and items */
                .confetti {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    overflow: visible;
                }
                .confetti-item {
                    position: absolute;
                    bottom: 10px;
                    transform-origin: center;
                    opacity: 1;
                    animation: confetti-fall 1800ms cubic-bezier(.2,.8,.3,1) forwards;
                    user-select: none;
                }
                @keyframes confetti-fall {
                    0%   { transform: translateY(0) rotate(0) scale(1); opacity: 1; }
                    70%  { opacity: 1; }
                    100% { transform: translateY(-220px) rotate(720deg) scale(0.9); opacity: 0; }
                }
            </style>

            <div class="hero">
                <!-- 5 frames top, 2 left, 2 right, 5 bottom -->
                <div class="frames">
                    <div class="frames-top">
                        <div class="frame"><img src="${s}"  alt=""></div>
                        <div class="frame"><img src="${c}"  alt=""></div>
                        <div class="frame"><img src="${o}"  alt=""></div>
                        <div class="frame"><img src="${e}"  alt=""></div>
                        <div class="frame"><img src="${t}"  alt=""></div>
                    </div>

                    <div class="frames-left">
                        <div class="frame"><img src="${i}"  alt=""></div>
                        <div class="frame"><img src="${h}"  alt=""></div>
                    </div>

                    <div class="frames-right">
                        <div class="frame"><img src="${u}"  alt=""></div>
                        <div class="frame"><img src="${b}"  alt=""></div>
                    </div>

                    <div class="frames-bottom">
                        <div class="frame"><img src="${v}" alt=""></div>
                        <div class="frame"><img src="${y}" alt=""></div>
                        <div class="frame"><img src="${x}" alt=""></div>
                        <div class="frame"><img src="${w}" alt=""></div>
                        <div class="frame"><img src="${L}" alt=""></div>
                    </div>
                </div>

                <div class="hero-inner">
                    <!-- replaced static title with per-character spans for staggered entrance -->
                    <h1 class="title">${k}<span class="spark">💖</span></h1>
                    <p class="subtitle">Thank you for being my comfort, my joy, and my favorite person.</p>

                    <!-- decorative floating hearts -->
                    <div class="floating">
                        <span class="heart h1">💗</span>
                        <span class="heart h2">💖</span>
                        <span class="heart h3">💕</span>
                        <span class="butterfly b1">🦋</span>
                        <span class="butterfly b2">🦋</span>
                    </div>

                    <button class="cta">Start the Celebration 🎉</button>
                </div>
            </div>

              <!-- moved/updated paragraph: add flower + heart emoji -->
              <p class="subtitle poem"> If I had a flower for every time I thought of you,🌸 
              I could walk in my garden forever. 💖</p>
        `;const n=this.querySelector(".cta"),f=this.querySelector(".hero");if(n&&f){let a=this.querySelector(".confetti");a||(a=document.createElement("div"),a.className="confetti",f.appendChild(a));const m=(p=16)=>{const d=["🎉","✨","🎊","💖","🌸"];for(let g=0;g<p;g++){const r=document.createElement("span");r.className="confetti-item",r.textContent=d[Math.floor(Math.random()*d.length)];const j=8+Math.random()*84;r.style.left=j+"%",r.style.fontSize=`${10+Math.random()*22}px`,r.style.animationDelay=`${Math.random()*220}ms`,r.style.transform=`translateX(${(Math.random()-.5)*40}px)`,a.appendChild(r),setTimeout(()=>r.remove(),2200)}};n.addEventListener("click",()=>{n.classList.add("active"),m(18),setTimeout(()=>{n.classList.remove("active"),window.location.href="/src/celebration.html"},1200)})}}}customElements.define("my-hero",Y);document.addEventListener("DOMContentLoaded",()=>{if(!document.querySelector("my-hero")){const l=document.createElement("my-hero");document.body.prepend(l)}});
