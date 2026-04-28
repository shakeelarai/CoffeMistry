// PAGE NAVIGATION
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === name);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.innerWidth < 768) {
    document.getElementById('navLinks').classList.remove('open');
  }
}

// HAMBURGER
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// MENU TABS
function switchTab(name, btn) {
  document.querySelectorAll('.menu-category').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}

// REVIEWS DATA
const reviews = [
  { text: "Coffeemistry pure coffee chemistry. This guy knows exactly what he is doing! Amazing equipment. Freshly roasted speciality coffee. A real hidden gem in Islamabad.", author: "Abz", stars: 5 },
  { text: "Best of the coffee in Islamabad. They have mono arabica beans, food is nice. Environment is perfect to sit out! Prices are reasonable.", author: "Inna M.", stars: 5 },
  { text: "My favourite coffee spot in Islamabad. They know how to make a good cup of coffee. Try their signature Spanish or iced latte.", author: "Hasnain N.", stars: 5 },
  { text: "The proper Coffee Specialists. The barista is very experienced — cortado and espresso was very good, not bitter not sour, the taste was just right.", author: "Faisal J.", stars: 5 },
  { text: "One of the very few places who know how to serve coffee right in Islamabad. I loved their pricing comparing to other coffee places. Absolutely recommended.", author: "Zobia J.", stars: 5 },
  { text: "Great outdoor small cafe. Excellent service. I visit regularly. The attention to flavour is still meticulous and the standard high.", author: "Lutful I.", stars: 5 },
  { text: "Best coffee I remember having in Islamabad. Friendly people as well.", author: "Sami Z.", stars: 5 },
  { text: "One of the best speciality coffee shops in ISB. Amazing customer service. Great place to be one with nature.", author: "Musa H.", stars: 5 },
  { text: "Loved the coffee, the service, the scent, the coal heaters. Everything. One of the best places to have single origin coffee.", author: "Aayesha A.", stars: 5 },
];

// BUILD REVIEWS MARQUEE
function buildReviews() {
  const track = document.getElementById('reviewsTrack');
  if (!track) return;
  const doubled = [...reviews, ...reviews];
  track.innerHTML = doubled.map(r => `
    <div class="review-card">
      <div class="review-stars">${'★'.repeat(r.stars)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">— ${r.author}</div>
    </div>
  `).join('');
}

// HERO BEANS ANIMATION
function buildBeans() {
  const container = document.getElementById('heroBeans');
  if (!container) return;
  for (let i = 0; i < 12; i++) {
    const bean = document.createElement('div');
    bean.className = 'bean';
    const size = 60 + Math.random() * 100;
    bean.style.cssText = `
      width: ${size}px; height: ${size * 0.65}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${8 + Math.random() * 12}s;
      animation-delay: ${-Math.random() * 20}s;
      opacity: ${0.1 + Math.random() * 0.2};
    `;
    container.appendChild(bean);
  }
}

// CONTACT FORM
function handleSubmit() {
  document.getElementById('formSuccess').style.display = 'block';
  setTimeout(() => {
    document.getElementById('formSuccess').style.display = 'none';
  }, 4000);
}

// INIT
buildReviews();
buildBeans();
