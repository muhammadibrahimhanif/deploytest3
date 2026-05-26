import { useEffect, useState } from 'react';
import heroBg from './assets/hero-bg.png';
import sectionStory from './assets/section-story.png';
import finalCta from './assets/final-cta.png';
import imgOriginal from './assets/original-bbc.png';
import imgCheeseBrownie from './assets/cheesecake-brownie.png';
import imgTiramisu from './assets/tiramisu-bbc.png';
import imgPistachio from './assets/pistachio-chocolate-bbc.png';
import imgStrawberryMatcha from './assets/strawberry-matcha-bbc.png';
import imgBananaPudding from './assets/banana-pudding-bbc.png';
import ig1 from './assets/ig1.jpg';
import ig2 from './assets/ig2.jpg';
import ig3 from './assets/ig3.jpg';
import ig4 from './assets/ig4.jpg';
import ig5 from './assets/ig5.jpg';
import ig6 from './assets/ig6.jpg';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.4s ease',
      padding: scrolled ? '12px 0' : '24px 0',
      background: scrolled ? 'rgba(250,247,242,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(196,168,130,0.18)' : 'none',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <div className="font-display" style={{ fontSize: 26, fontWeight: 600, color: scrolled ? '#1C1008' : '#FAF7F2', letterSpacing: '0.04em', lineHeight: 1 }}>Keikgini</div>
          <div style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: scrolled ? '#C8903A' : 'rgba(232,192,122,0.85)', marginTop: 3, fontWeight: 400 }}>Burnt Cheesecake Specialist</div>
        </a>
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
          {['Menu','Cerita Kami','Cara Pesan','FAQ'].map((item, i) => (
            <a key={i} href={`#${['menu','story','order','faq'][i]}`} className="nav-link"
              style={{ textDecoration: 'none', fontSize: 13, letterSpacing: '0.08em', fontWeight: 400, color: scrolled ? '#1A0E06' : 'rgba(250,247,242,0.85)', transition: 'color 0.3s' }}>{item}</a>
          ))}
          <a href="https://wa.me/6285121922984" target="_blank" rel="noopener noreferrer" className="btn-primary"
            style={{ fontSize: 12, letterSpacing: '0.1em', padding: '10px 22px', borderRadius: 2, textDecoration: 'none', fontWeight: 500 }}>
            Pesan Sekarang
          </a>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none' }} aria-label="Menu">
          <div style={{ width: 24, height: 1.5, background: scrolled ? '#1C1008' : '#FAF7F2', marginBottom: 6 }} />
          <div style={{ width: 16, height: 1.5, background: scrolled ? '#1C1008' : '#FAF7F2' }} />
        </button>
      </div>
      {menuOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(250,247,242,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(196,168,130,0.2)', padding: '24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {['Menu','Cerita Kami','Cara Pesan','FAQ'].map((item, i) => (
            <a key={i} href={`#${['menu','story','order','faq'][i]}`} onClick={() => setMenuOpen(false)}
              style={{ textDecoration: 'none', fontSize: 15, color: '#1C1008', fontWeight: 400, letterSpacing: '0.05em' }}>{item}</a>
          ))}
          <a href="https://wa.me/6285121922984" target="_blank" rel="noopener noreferrer" className="btn-primary"
            style={{ fontSize: 13, padding: '12px 0', borderRadius: 2, textDecoration: 'none', fontWeight: 500, textAlign: 'center', display: 'block' }}>
            Pesan Sekarang
          </a>
        </div>
      )}
      <style>{`
        @media(max-width:768px){.hidden-mobile{display:none!important}.show-mobile{display:block!important}}
        @media(min-width:769px){.show-mobile{display:none!important}}
      `}</style>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#140B04' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center 30%', opacity: 0.45 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(20,11,4,0.85) 0%,rgba(20,11,4,0.5) 55%,rgba(20,11,4,0.78) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,5,2,0.6) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', width: '100%' }}>
        <div style={{ maxWidth: 640 }}>
          <div className="animate-fade-up" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span style={{ width: 32, height: 1, background: '#C8903A', display: 'block' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C8903A', fontWeight: 400 }}>Cibubur · Depok · Handcrafted</span>
          </div>
          <h1 className="font-display animate-fade-up delay-100" style={{ fontSize: 'clamp(48px,8vw,86px)', fontWeight: 300, lineHeight: 1.08, color: '#FAF7F2', letterSpacing: '-0.01em', marginBottom: 10 }}>Rasa yang</h1>
          <h1 className="font-display animate-fade-up delay-200" style={{ fontSize: 'clamp(48px,8vw,86px)', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.08, letterSpacing: '-0.01em', marginBottom: 28 }}>
            <span className="text-shimmer">Tak Terlupakan</span>
          </h1>
          <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(15px,2vw,17px)', lineHeight: 1.8, color: 'rgba(250,247,242,0.7)', maxWidth: 480, marginBottom: 40, fontWeight: 300 }}>
            Setiap gigitan membawa kehangatan — lapisan luar yang karamelisasi sempurna, dalam lembut, creamy, meleleh di lidah. Burnt cheesecake yang kami buat dengan tangan, sepenuh hati.
          </p>
          <div className="animate-fade-up delay-400" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="https://wa.me/6285121922984" target="_blank" rel="noopener noreferrer" className="btn-gold"
              style={{ padding: '14px 30px', borderRadius: 2, fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textDecoration: 'none', display: 'inline-block' }}>
              Pre-Order Sekarang
            </a>
            <a href="#menu"
              style={{ padding: '14px 30px', borderRadius: 2, fontSize: 13, fontWeight: 400, letterSpacing: '0.1em', textDecoration: 'none', color: '#FAF7F2', border: '1px solid rgba(250,247,242,0.35)', display: 'inline-block', transition: 'border-color 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(250,247,242,0.75)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(250,247,242,0.35)'; }}>
              Lihat Menu
            </a>
          </div>
        </div>
      </div>
      <div className="animate-float" style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(250,247,242,0.4)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(200,144,58,0.6), transparent)' }} />
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [{ num:'2+', label:'Tahun Pengalaman' },{ num:'500+', label:'Pesanan Terpenuhi' },{ num:'100%', label:'Handmade' },{ num:'H-2', label:'Pre-Order Minimum' }];
  return (
    <section style={{ background: '#1C1008', padding: '32px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px 0' }} className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '0 16px', borderRight: i%2===0 ? '1px solid rgba(196,168,130,0.15)' : 'none' }}>
            <div className="font-display" style={{ fontSize: 36, fontWeight: 600, color: '#C8903A', lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(250,247,242,0.45)', marginTop: 6, fontWeight: 300 }}>{s.label}</div>
          </div>
        ))}
        <style>{`@media(min-width:640px){.stats-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section id="story" style={{ padding: 'clamp(72px,10vw,120px) 24px', background: '#FAF7F2' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 64, alignItems: 'center' }} className="story-grid">
        <div className="reveal" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: -20, left: -20, width: '65%', height: '65%', border: '1px solid rgba(200,144,58,0.25)', borderRadius: 2, zIndex: 0 }} />
          <img src={sectionStory}
            alt="Pembuatan burnt cheesecake Keikgini secara handmade artisan" loading="lazy"
            style={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: 2, position: 'relative', zIndex: 1, display: 'block' }} />
          <div style={{ position: 'absolute', bottom: -16, right: -16, background: '#1C1008', padding: '20px 24px', zIndex: 2, borderRadius: 2 }}>
            <div className="font-display" style={{ fontSize: 28, fontWeight: 600, color: '#C8903A', lineHeight: 1 }}>Pure</div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(250,247,242,0.6)', marginTop: 4 }}>Handmade</div>
          </div>
        </div>
        <div className="reveal delay-200">
          <span className="divider" style={{ marginBottom: 24 }} />
          <p style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8903A', marginBottom: 16, fontWeight: 400 }}>Cerita Kami</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(34px,5vw,52px)', fontWeight: 400, lineHeight: 1.15, color: '#1C1008', marginBottom: 24 }}>
            Lahir dari<br /><em>kecintaan pada</em><br />tekstur sempurna
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: '#7A6652', marginBottom: 18, fontWeight: 300 }}>
            Keikgini bermula dari dapur kecil dan satu tekad sederhana — membuat burnt cheesecake yang benar-benar jujur. Bukan sekadar tampilan, tapi rasa yang bisa dirasakan di setiap lapisannya.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: '#7A6652', marginBottom: 32, fontWeight: 300 }}>
            Dengan cream cheese pilihan, krim segar, dan proses pemanggangan yang dikontrol ketat, kami menciptakan cheesecake yang permukaannya terbakar indah — sementara bagian dalamnya tetap lembut, creamy, dan meleleh sempurna.
          </p>
          <a href="https://www.instagram.com/keikgini/" target="_blank" rel="noopener noreferrer" className="btn-outline"
            style={{ padding: '13px 28px', borderRadius: 2, fontSize: 12, letterSpacing: '0.1em', textDecoration: 'none', display: 'inline-block', fontWeight: 500 }}>
            Lihat di Instagram
          </a>
        </div>
        <style>{`@media(min-width:900px){.story-grid{grid-template-columns:1fr 1fr!important}}`}</style>
      </div>
    </section>
  );
}

/* ── Menu data ─────────────────────────────────────────────── */
type PriceWhole = { whole: string; slice: string };
type PriceSized = { large: string; small: string };
type MenuProduct = {
  name: string; shortName: string; desc: string; tag?: string;
  img: string; category: 'bbc' | 'brownie';
  price: PriceWhole | PriceSized;
};

const bbcProducts: MenuProduct[] = [
  {
    name: 'Original BBC', shortName: 'Original',
    desc: 'Creamy, smooth, dan rich — rasa klasik yang timeless. Hangat, tak terlupakan, dan terasa seperti rumah di setiap gigitan.',
    tag: 'Bestseller', category: 'bbc',
    img: imgOriginal,
    price: { whole: '225k', slice: '38k' },
  },
  {
    name: 'Cheesecake Brownie', shortName: 'CheeseBro',
    desc: 'Duo berbahaya antara cheesecake silky dan fudgy brownie. Setiap gigitan memanjakan, memuaskan, dan susah berhenti.',
    tag: 'Favorit', category: 'bbc',
    img: imgCheeseBrownie,
    price: { whole: '250k', slice: '45k' },
  },
  {
    name: 'Tiramisu BBC', shortName: 'Tiramisu',
    desc: 'Seperti espresso shot dalam bentuk kue. Bold, smooth, dan sempurna untuk recharge energi. Kamu tidak butuh kopi lagi.',
    tag: 'Spesial', category: 'bbc',
    img: imgTiramisu,
    price: { whole: '350k', slice: '60k' },
  },
  {
    name: 'Pistachio Chocolate BBC', shortName: 'Pistachio Choco',
    desc: 'Cheesecake creamy dengan pistachio premium dan dark chocolate — gurih, kaya, dan sophisticated. Untuk yang suka kompleksitas rasa.',
    tag: 'New', category: 'bbc',
    img: imgPistachio,
    price: { whole: '320k', slice: '55k' },
  },
  {
    name: 'Strawberry Matcha BBC', shortName: 'Straw Matcha',
    desc: 'Matcha earthy berlapis cheesecake strawberry yang segar dan tangy. Kontras yang bersih — setiap gigitan terasa ringan dan menyegarkan.',
    category: 'bbc',
    img: imgStrawberryMatcha,
    price: { whole: '290k', slice: '50k' },
  },
  {
    name: 'Banana Pudding BBC', shortName: 'BanPud',
    desc: 'Burnt cheesecake original dilengkapi banana pudding creamy — diplomat cream, pisang matang, dan Marie biscuit lembut. Nostalgik dan indulgent.',
    category: 'bbc',
    img: imgBananaPudding,
    price: { whole: '335k', slice: '58k' },
  },
];

const brownieProducts: MenuProduct[] = [
  {
    name: 'Fudgy Brownies Sea Salt', shortName: 'Sea Salt',
    desc: 'Dibuat dengan browned butter untuk rasa cokelat yang lebih kaya dan aroma karamelisasi yang tak tertahankan. Fudgy, chewy, melt-in-your-mouth.',
    tag: 'Klasik', category: 'brownie',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=85',
    price: { large: '175k', small: '45k' },
  },
  {
    name: 'Fudgy Brownies Insert Cheese', shortName: 'Insert Cheese',
    desc: 'Brownies fudgy premium dengan lapisan keju creamy di dalamnya. Perpaduan asin-manis yang memanjakan setiap gigitan.',
    tag: 'Favorit', category: 'brownie',
    img: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=700&q=85',
    price: { large: '240k', small: '60k' },
  },
];

function isPriceWhole(p: PriceWhole | PriceSized): p is PriceWhole {
  return 'whole' in p;
}

/* ── Price badge component ─────────────────────────────────── */
function PriceBadge({ price, category: _category }: { price: PriceWhole | PriceSized; category: 'bbc' | 'brownie' }) {
  if (isPriceWhole(price)) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontSize: 11, color: '#7A6652', fontWeight: 300, letterSpacing: '0.05em' }}>Whole</span>
          <span className="font-display" style={{ fontSize: 22, fontWeight: 600, color: '#1C1008', lineHeight: 1 }}>{price.whole}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontSize: 11, color: '#7A6652', fontWeight: 300, letterSpacing: '0.05em' }}>Slice</span>
          <span style={{ fontSize: 14, fontWeight: 400, color: '#C8903A' }}>{price.slice}</span>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontSize: 11, color: '#7A6652', fontWeight: 300, letterSpacing: '0.05em' }}>18×18 cm</span>
        <span className="font-display" style={{ fontSize: 22, fontWeight: 600, color: '#1C1008', lineHeight: 1 }}>{price.large}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontSize: 11, color: '#7A6652', fontWeight: 300, letterSpacing: '0.05em' }}>10×10 cm</span>
        <span style={{ fontSize: 14, fontWeight: 400, color: '#C8903A' }}>{price.small}</span>
      </div>
    </div>
  );
}

/* ── Product Card ──────────────────────────────────────────── */
function ProductCard({ product, index }: { product: MenuProduct; index: number }) {
  const delay = Math.min((index % 4) * 120, 360);
  return (
    <article
      className="product-card"
      style={{
        animation: 'cardIn 0.55s cubic-bezier(0.22,1,0.36,1) both',
        animationDelay: `${delay}ms`,
        background: '#FAF7F2', borderRadius: 3, overflow: 'hidden',
        position: 'relative', display: 'flex', flexDirection: 'column',
      }}
    >
      {product.tag && (
        <div style={{ position: 'absolute', top: 14, left: 14, background: '#1C1008', color: '#C8903A', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 10px', borderRadius: 2, zIndex: 2, fontWeight: 600 }}>
          {product.tag}
        </div>
      )}
      <div style={{ overflow: 'hidden', height: 220, flexShrink: 0 }}>
        <img
          src={product.img}
          alt={`${product.name} - Keikgini premium Cibubur Depok`}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div style={{ padding: '22px 24px 26px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 className="font-display" style={{ fontSize: 20, fontWeight: 500, color: '#1C1008', marginBottom: 8, lineHeight: 1.25 }}>
          {product.name}
        </h3>
        <p style={{ fontSize: 13, lineHeight: 1.75, color: '#7A6652', marginBottom: 18, fontWeight: 300, flexGrow: 1 }}>
          {product.desc}
        </p>
        <div style={{ borderTop: '1px solid rgba(196,168,130,0.2)', paddingTop: 16, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <PriceBadge price={product.price} category={product.category} />
          <a
            href={`https://wa.me/6285121922984?text=Halo Keikgini, saya ingin pre-order ${product.name}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 11, letterSpacing: '0.1em', padding: '9px 18px', borderRadius: 2, textDecoration: 'none', fontWeight: 500, flexShrink: 0 }}
          >
            Pesan via WA
          </a>
        </div>
      </div>
    </article>
  );
}

/* ── Menu Section ──────────────────────────────────────────── */
function MenuSection() {
  const [activeTab, setActiveTab] = useState<'bbc' | 'brownie'>('bbc');

  const tabs = [
    { id: 'bbc' as const, label: 'Basque Burnt Cheesecake', short: 'BBC' },
    { id: 'brownie' as const, label: 'Fudgy Brownies', short: 'Brownies' },
  ];

  const displayed = activeTab === 'bbc' ? bbcProducts : brownieProducts;

  return (
    <section id="menu" style={{ padding: 'clamp(72px,10vw,120px) 0', background: '#F0E8D8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="divider" style={{ margin: '0 auto 24px' }} />
          <p style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8903A', marginBottom: 16 }}>Menu Lengkap</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(34px,5vw,52px)', fontWeight: 400, lineHeight: 1.15, color: '#1C1008', marginBottom: 16 }}>
            Dibuat untuk <em>momen istimewa</em>
          </h2>
          <p style={{ fontSize: 14, color: '#7A6652', fontWeight: 300, maxWidth: 480, margin: '0 auto' }}>
            Setiap varian dibuat dengan cream cheese pilihan, fresh cream, dan proses yang dikontrol ketat. Harga whole cake sudah termasuk lettering gratis hingga 15 karakter.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex',
            background: 'rgba(196,168,130,0.15)',
            borderRadius: 3,
            padding: 4,
            gap: 4,
          }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? '#1C1008' : 'transparent',
                  color: activeTab === tab.id ? '#FAF7F2' : '#7A6652',
                  border: 'none', cursor: 'pointer',
                  padding: '10px 20px', borderRadius: 2,
                  fontSize: 12, fontWeight: 500,
                  letterSpacing: '0.08em',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <span className="tab-full">{tab.label}</span>
                <span className="tab-short">{tab.short}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category label */}
        {activeTab === 'bbc' && (
          <div style={{ marginBottom: 32, paddingBottom: 20, borderBottom: '1px solid rgba(196,168,130,0.25)' }}>
            <p style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8903A', fontWeight: 400 }}>
              8 Varian · Whole & Slice tersedia · Lettering gratis
            </p>
          </div>
        )}
        {activeTab === 'brownie' && (
          <div style={{ marginBottom: 32, paddingBottom: 20, borderBottom: '1px solid rgba(196,168,130,0.25)' }}>
            <p style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8903A', fontWeight: 400 }}>
              2 Varian · Tersedia ukuran 18×18 cm & 10×10 cm
            </p>
          </div>
        )}

        {/* Product grid */}
        <div
          key={activeTab}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: 24 }}
          className="products-grid"
        >
          {displayed.map((p, i) => <ProductCard key={p.name} product={p} index={i} />)}
        </div>

        {/* Extras row */}
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="extras-grid">

          {/* Mix Variant */}
          <div className="reveal" style={{
            background: '#1C1008', borderRadius: 3, padding: '32px 28px',
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 20, color: '#C8903A' }}>◈</span>
              <h3 className="font-display" style={{ fontSize: 20, fontWeight: 500, color: '#FAF7F2' }}>Mix Variant BBC</h3>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(250,247,242,0.55)', fontWeight: 300 }}>
              Tidak bisa memilih satu rasa saja? Kombinasikan beberapa varian dalam satu whole cake! Harga menyesuaikan kombinasi — ada diskon spesial untuk mix variant.
            </p>
            <p style={{ fontSize: 11, letterSpacing: '0.1em', color: 'rgba(200,144,58,0.7)', fontWeight: 300 }}>
              📌 Slot terbatas · Ikuti jadwal pre-order
            </p>
            <a href="https://wa.me/6285121922984?text=Halo Keikgini, saya tertarik Mix Variant BBC" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 11, color: '#C8903A', letterSpacing: '0.1em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 4, fontWeight: 500 }}>
              Tanya harga mix → 
            </a>
          </div>

          {/* Custom BBC */}
          <div className="reveal delay-100" style={{
            background: '#FAF7F2', borderRadius: 3, padding: '32px 28px',
            borderLeft: '3px solid #C8903A',
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 20, color: '#C8903A' }}>✦</span>
              <h3 className="font-display" style={{ fontSize: 20, fontWeight: 500, color: '#1C1008' }}>Custom BBC / Brownie</h3>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: '#7A6652', fontWeight: 300 }}>
              Personalisasi kuenya! Harga bervariasi sesuai desain. Pisau, lilin reguler, dan greeting card sudah termasuk dalam paket custom.
            </p>
            <a href="https://wa.me/6285121922984?text=Halo Keikgini, saya ingin custom BBC/Brownie" target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ fontSize: 11, letterSpacing: '0.1em', padding: '10px 20px', borderRadius: 2, textDecoration: 'none', fontWeight: 500, display: 'inline-block', alignSelf: 'flex-start' }}>
              Diskusi Custom Order
            </a>
          </div>

        </div>

        {/* Sauceprise + Add-ons row */}
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="addons-grid">

          {/* Sauceprise */}
          <div className="reveal" style={{
            background: '#FAF7F2', borderRadius: 3, padding: '28px 28px',
            display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            <h3 className="font-display" style={{ fontSize: 18, fontWeight: 500, color: '#1C1008' }}>Sauceprise! 🎉</h3>
            <p style={{ fontSize: 13, lineHeight: 1.75, color: '#7A6652', fontWeight: 300 }}>
              Tambahkan twist pada cheesecakemu! Mix dan match saus & crumble sesukamu.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
              {['Strawberry Compote', 'Matcha Ganache', 'Chocolate Ganache'].map(s => (
                <span key={s} style={{ fontSize: 11, background: '#F0E8D8', color: '#5C3D25', padding: '5px 10px', borderRadius: 2, fontWeight: 400 }}>{s}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 4 }}>
              <span style={{ fontSize: 12, color: '#7A6652', fontWeight: 300 }}>Sauce <strong style={{ color: '#1C1008' }}>5k</strong></span>
              <span style={{ fontSize: 12, color: '#7A6652', fontWeight: 300 }}>Cookie Crumble <strong style={{ color: '#1C1008' }}>5k</strong></span>
              <span style={{ fontSize: 12, color: '#7A6652', fontWeight: 300 }}>Sauce + Crumble <strong style={{ color: '#1C1008' }}>9k</strong></span>
            </div>
          </div>

          {/* Add-ons + Sameday */}
          <div className="reveal delay-100" style={{
            background: '#FAF7F2', borderRadius: 3, padding: '28px 28px',
            display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            <h3 className="font-display" style={{ fontSize: 18, fontWeight: 500, color: '#1C1008' }}>Add-ons & Sameday</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { name: 'Greeting Card', price: 'Rp 3.000' },
                { name: 'Cute Candles', price: 'Rp 8.000' },
                { name: 'Cake Topper', price: 'Rp 10.000' },
                { name: 'Sameday Service Pack', price: 'Rp 10.000', note: 'Cling wrap, ice gel, thermal bag, bubble wrap' },
              ].map(item => (
                <div key={item.name} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, paddingBottom: 8, borderBottom: '1px solid rgba(196,168,130,0.12)' }}>
                  <div>
                    <span style={{ fontSize: 13, color: '#1C1008', fontWeight: 400 }}>{item.name}</span>
                    {item.note && <p style={{ fontSize: 11, color: '#7A6652', marginTop: 2, fontWeight: 300 }}>{item.note}</p>}
                  </div>
                  <span style={{ fontSize: 13, color: '#C8903A', fontWeight: 500, flexShrink: 0 }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Terms & Conditions */}
        <div className="reveal" style={{
          marginTop: 40,
          background: 'rgba(28,16,8,0.04)',
          borderRadius: 3,
          padding: '28px 28px',
          borderTop: '2px solid rgba(200,144,58,0.2)',
        }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8903A', marginBottom: 16, fontWeight: 500 }}>Terms & Conditions</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px 32px' }} className="tnc-grid">
            {[
              'Harga belum termasuk ongkir.',
              'Pickup sendiri atau via Grab, Gosend, Paxel, Lalamove.',
              'Ongkir belum termasuk biaya parkir, toll, dan tips driver.',
              'Untuk custom cake, disarankan pengiriman menggunakan mobil.',
              'Mohon penerima standby HP agar mudah dihubungi driver.',
              'Kerusakan selama perjalanan di luar kendali kami.',
              'No hit and run · Not Refundable.',
            ].map((t, i) => (
              <p key={i} style={{ fontSize: 12.5, color: '#7A6652', lineHeight: 1.7, fontWeight: 300, paddingLeft: 16, borderLeft: '1px solid rgba(200,144,58,0.25)' }}>
                {t}
              </p>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media(min-width:640px){
          .products-grid{grid-template-columns:repeat(2,1fr)!important}
          .extras-grid{grid-template-columns:repeat(2,1fr)!important}
          .addons-grid{grid-template-columns:repeat(2,1fr)!important}
          .tnc-grid{grid-template-columns:repeat(2,1fr)!important}
        }
        @media(min-width:1024px){
          .products-grid{grid-template-columns:repeat(4,1fr)!important}
        }
        .tab-short{display:none}
        @media(max-width:480px){
          .tab-full{display:none}
          .tab-short{display:inline}
        }
      `}</style>
    </section>
  );
}

const reasons = [
  { icon: '✦', title: 'Tekstur Sempurna', desc: 'Luar terbakar indah, dalam lembut seperti custard. Keseimbangan yang susah ditemukan di tempat lain.' },
  { icon: '◈', title: 'Bahan Premium', desc: 'Cream cheese pilihan, fresh cream, telur segar. Tidak ada kompromi dalam setiap bahan yang kami gunakan.' },
  { icon: '◇', title: '100% Handmade', desc: 'Dibuat satu per satu dengan kontrol kualitas ketat di setiap tahap pembuatan.' },
  { icon: '◉', title: 'Custom & Personal', desc: 'Bisa dipesan sesuai keinginan — ukuran, topping, hingga kemasan hadiah yang cantik.' },
  { icon: '◈', title: 'Manis yang Seimbang', desc: 'Tidak terlalu manis, tidak tawar. Presisi yang pas untuk semua selera.' },
  { icon: '✦', title: 'Area Cibubur–Depok', desc: 'Melayani Cibubur, Depok dan sekitarnya dengan penanganan produk yang hati-hati.' },
];

function WhySection() {
  return (
    <section style={{ padding: 'clamp(72px,10vw,120px) 24px', background: '#1C1008' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <span className="divider" style={{ marginBottom: 24 }} />
          <p style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8903A', marginBottom: 16 }}>Mengapa Keikgini</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(34px,5vw,52px)', fontWeight: 400, lineHeight: 1.15, color: '#FAF7F2', maxWidth: 520 }}>
            Setiap detail <em>dirancang untuk rasa</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 1, background: 'rgba(255,255,255,0.04)' }} className="why-grid">
          {reasons.map((r, i) => (
            <div key={i} className={`reveal delay-${(i%3+1)*100}`}
              style={{ padding: '36px 32px', background: '#1C1008', borderBottom: '1px solid rgba(196,168,130,0.07)', transition: 'background 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#1C1008'; }}>
              <span style={{ fontSize: 18, color: '#C8903A', display: 'block', marginBottom: 16 }}>{r.icon}</span>
              <h3 className="font-display" style={{ fontSize: 22, fontWeight: 500, color: '#FAF7F2', marginBottom: 12 }}>{r.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(250,247,242,0.45)', fontWeight: 300 }}>{r.desc}</p>
            </div>
          ))}
        </div>
        <style>{`
          @media(min-width:640px){.why-grid{grid-template-columns:repeat(2,1fr)!important}}
          @media(min-width:1024px){.why-grid{grid-template-columns:repeat(3,1fr)!important}}
        `}</style>
      </div>
    </section>
  );
}

const galleryImgs = [
  { src: ig1, alt: 'Packaging burnt cheesecake Keikgini siap dikirim' },
  { src: ig2, alt: 'Custom birthday cheesecake Keikgini dengan lettering' },
  { src: ig3, alt: 'Slice banana pudding burnt cheesecake Keikgini' },
  { src: ig4, alt: 'Original BBC Keikgini dipotong segar' },
  { src: ig5, alt: 'Slice burnt cheesecake Keikgini tampak dekat' },
  { src: ig6, alt: 'Custom cheesecake Keikgini dengan topping strawberry' },
];

const testimonials = [
  { name: 'Rania S.', loc: 'Cibubur', text: 'Serius ini yang paling enak yang pernah aku cobain. Bagian dalamnya creamy banget, dan ga terlalu manis. Udah langganan!' },
  { name: 'Dimas & Farah', loc: 'Depok', text: 'Kami pesan untuk anniversary, packagingnya cantik banget. Cheesecakenya juga enak, semua tamu suka. Highly recommend!' },
  { name: 'Kantor XYZ', loc: 'Cibubur', text: 'Bulk order untuk acara kantor. Prosesnya mudah, produknya konsisten enak. Bakal pesan lagi bulan depan.' },
];

function SocialProof() {
  return (
    <section style={{ padding: 'clamp(72px,10vw,120px) 24px', background: '#FAF7F2' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="divider" style={{ margin: '0 auto 24px' }} />
          <p style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8903A', marginBottom: 16 }}>Galeri & Ulasan</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(34px,5vw,52px)', fontWeight: 400, lineHeight: 1.15, color: '#1C1008' }}>
            Momen nyata,<br /><em>rasa yang jujur</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8, marginBottom: 64 }} className="gallery-grid">
          {galleryImgs.map((img, i) => (
            <div key={i} className={`reveal delay-${(i%3+1)*100}`}
              style={{ overflow: 'hidden', borderRadius: 2, aspectRatio: i===0 ? '16/9' : '1/1', gridColumn: i===0 ? 'span 2' : 'span 1' }}>
              <img src={img.src} alt={img.alt} loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }} />
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }} className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`reveal delay-${(i+1)*100}`}
              style={{ background: '#F0E8D8', borderRadius: 3, padding: '32px', borderLeft: '3px solid #C8903A' }}>
              <p className="font-display" style={{ fontSize: 17, fontStyle: 'italic', lineHeight: 1.7, color: '#1C1008', marginBottom: 20, fontWeight: 300 }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#1C1008', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#C8903A', fontSize: 14, fontFamily: 'Cormorant Garamond,serif' }}>{t.name[0]}</span>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#1C1008' }}>{t.name}</div>
                  <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#7A6652', marginTop: 2 }}>{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="https://www.instagram.com/keikgini/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 13, letterSpacing: '0.1em', color: '#C8903A', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span>Lihat lebih banyak di Instagram</span><span>→</span>
          </a>
        </div>
        <style>{`
          @media(min-width:640px){.gallery-grid{grid-template-columns:repeat(3,1fr)!important}.gallery-grid>div:first-child{grid-column:span 1!important;aspect-ratio:1/1!important}}
          @media(min-width:768px){.testi-grid{grid-template-columns:repeat(3,1fr)!important}}
        `}</style>
      </div>
    </section>
  );
}

function OrderProcess() {
  const steps = [
    { num: '01', title: 'Hubungi Kami', desc: 'Chat WhatsApp atau DM Instagram. Ceritakan kebutuhanmu — jumlah, ukuran, tanggal, dan preferensi rasa.' },
    { num: '02', title: 'Konfirmasi & DP', desc: 'Kami konfirmasi ketersediaan dan kirim detail pembayaran. DP minimal H-2 dari tanggal pengambilan atau pengiriman.' },
    { num: '03', title: 'Terima & Nikmati', desc: 'Cheesecakemu siap! Ambil langsung atau kami antar ke lokasi di area Cibubur–Depok.' },
  ];
  return (
    <section id="order" style={{ padding: 'clamp(72px,10vw,120px) 24px', background: '#F0E8D8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="divider" style={{ margin: '0 auto 24px' }} />
          <p style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8903A', marginBottom: 16 }}>Cara Pesan</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(34px,5vw,52px)', fontWeight: 400, lineHeight: 1.15, color: '#1C1008' }}>
            Mudah, cepat,<br /><em>dan pasti memuaskan</em>
          </h2>
          <p style={{ fontSize: 14, color: '#7A6652', marginTop: 16, fontWeight: 300 }}>Sistem pre-order minimum H-2 agar setiap loyang dibuat segar untukmu.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 2 }} className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} className={`reveal delay-${(i+1)*150}`}
              style={{ display: 'flex', gap: 28, padding: '36px 32px', background: '#FAF7F2', borderRadius: 3, alignItems: 'flex-start', transition: 'transform 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateX(0)'; }}>
              <span className="font-display" style={{ fontSize: 52, fontWeight: 300, color: 'rgba(200,144,58,0.22)', lineHeight: 1, flexShrink: 0 }}>{s.num}</span>
              <div>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 500, color: '#1C1008', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: '#7A6652', fontWeight: 300 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="https://wa.me/6285121922984?text=Halo Keikgini, saya ingin pre-order burnt cheesecake" target="_blank" rel="noopener noreferrer" className="btn-gold"
            style={{ padding: '16px 40px', borderRadius: 2, fontSize: 13, fontWeight: 500, letterSpacing: '0.12em', textDecoration: 'none', display: 'inline-block' }}>
            Pre-Order via WhatsApp
          </a>
        </div>
        <style>{`@media(min-width:768px){.steps-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
      </div>
    </section>
  );
}

function B2BSection() {
  const services = [
    { title: 'Bulk Order', desc: 'Pesanan dalam jumlah banyak untuk arisan, gathering, ulang tahun bersama. Harga spesial tersedia.' },
    { title: 'Corporate & Kantor', desc: 'Solusi hampers dan treat karyawan yang berkesan. Packaging premium tersedia.' },
    { title: 'Custom & Gift', desc: 'Hadiah ulang tahun, anniversary, wisuda — bisa dikustom sesuai tema dan kebutuhan.' },
    { title: 'Kolaborasi Kafe', desc: 'Supplier untuk kafe, restoran, atau event. Terbuka untuk diskusi kerja sama jangka panjang.' },
  ];
  return (
    <section style={{ padding: 'clamp(72px,10vw,120px) 24px', background: '#1C1008' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 64, alignItems: 'center' }} className="b2b-grid">
        <div className="reveal">
          <span className="divider" style={{ marginBottom: 24 }} />
          <p style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8903A', marginBottom: 16 }}>B2B & Bulk Order</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(34px,5vw,52px)', fontWeight: 400, lineHeight: 1.15, color: '#FAF7F2', marginBottom: 24 }}>
            Untuk momen<br /><em>yang lebih besar</em>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(250,247,242,0.5)', marginBottom: 36, fontWeight: 300 }}>
            Dari satu loyang untuk momen pribadi hingga puluhan loyang untuk kebutuhan bisnis — Keikgini siap hadir dengan kualitas yang konsisten.
          </p>
          <a href="https://wa.me/6285121922984?text=Halo Keikgini, saya tertarik dengan bulk/B2B order" target="_blank" rel="noopener noreferrer" className="btn-gold"
            style={{ padding: '14px 30px', borderRadius: 2, fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textDecoration: 'none', display: 'inline-block' }}>
            Diskusikan Kebutuhan Anda
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="reveal delay-200">
          {services.map((s, i) => (
            <div key={i} style={{ padding: '28px 24px', background: 'rgba(255,255,255,0.04)', borderRadius: 2, borderTop: '1px solid rgba(200,144,58,0.2)', transition: 'background 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)'; }}>
              <h3 className="font-display" style={{ fontSize: 18, fontWeight: 500, color: '#FAF7F2', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(250,247,242,0.4)', fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <style>{`@media(min-width:900px){.b2b-grid{grid-template-columns:1fr 1fr!important}}`}</style>
      </div>
    </section>
  );
}

const faqs = [
  { q: 'Berapa lama waktu pemesanan?', a: 'Minimum pre-order H-2 (2 hari sebelum tanggal pengambilan atau pengiriman). Untuk order dalam jumlah besar, disarankan lebih awal agar kualitas terjaga.' },
  { q: 'Apakah tersedia pengiriman?', a: 'Iya! Kami melayani pengiriman di area Cibubur, Depok, dan sekitarnya. Hubungi kami untuk info ongkos kirim ke lokasi kamu.' },
  { q: 'Berapa lama ketahanan cheesecakenya?', a: 'Cheesecake tahan 3–4 hari di kulkas dalam wadah tertutup. Sajikan pada suhu ruang 10–15 menit sebelum dinikmati untuk tekstur terbaik.' },
  { q: 'Apakah bisa custom rasa atau topping?', a: 'Tentu! Kami melayani custom order. Diskusikan dulu via WhatsApp untuk ketersediaan bahan dan estimasi harga.' },
  { q: 'Apa metode pembayaran yang tersedia?', a: 'Transfer bank (BCA, Mandiri, BRI) dan e-wallet (GoPay, OVO, DANA, ShopeePay). DP minimal 50% saat konfirmasi order.' },
  { q: 'Apakah ada minimum order?', a: 'Tidak ada minimum untuk personal order — satu loyang pun kami layani sepenuh hati. Untuk bulk order, harga spesial mulai dari 5 loyang.' },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" style={{ padding: 'clamp(72px,10vw,120px) 24px', background: '#FAF7F2' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="divider" style={{ margin: '0 auto 24px' }} />
          <p style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8903A', marginBottom: 16 }}>FAQ</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(34px,5vw,52px)', fontWeight: 400, lineHeight: 1.15, color: '#1C1008' }}>
            Pertanyaan yang<br /><em>sering ditanyakan</em>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((f, i) => (
            <div key={i} className="reveal" style={{ borderBottom: '1px solid rgba(196,168,130,0.2)' }}>
              <button onClick={() => setOpen(open===i ? null : i)}
                style={{ width: '100%', textAlign: 'left', padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                <span className="font-display" style={{ fontSize: 18, fontWeight: 500, color: '#1C1008', lineHeight: 1.3 }}>{f.q}</span>
                <span style={{ fontSize: 22, color: '#C8903A', flexShrink: 0, transition: 'transform 0.3s', transform: open===i ? 'rotate(45deg)' : 'rotate(0)', display: 'block', lineHeight: 1 }}>+</span>
              </button>
              <div style={{ overflow: 'hidden', maxHeight: open===i ? 200 : 0, transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)' }}>
                <p style={{ fontSize: 14, lineHeight: 1.85, color: '#7A6652', paddingBottom: 24, fontWeight: 300 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{ padding: 'clamp(80px,12vw,140px) 24px', position: 'relative', overflow: 'hidden', background: '#0F0802' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${finalCta})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(200,144,58,0.07) 0%, transparent 70%)' }} />
      <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal">
          <span className="divider" style={{ margin: '0 auto 28px' }} />
          <h2 className="font-display" style={{ fontSize: 'clamp(36px,6vw,68px)', fontWeight: 300, lineHeight: 1.1, color: '#FAF7F2', marginBottom: 12 }}>
            Sudah saatnya kamu
          </h2>
          <h2 className="font-display" style={{ fontSize: 'clamp(36px,6vw,68px)', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.1, marginBottom: 28 }}>
            <span className="text-shimmer">merasakannya sendiri.</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,247,242,0.55)', marginBottom: 44, fontWeight: 300, maxWidth: 500, margin: '0 auto 44px' }}>
            Satu loyang sudah cukup untuk mengubah hari biasa menjadi momen yang diingat. Order sekarang, nikmati dalam dua hari.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/6285121922984?text=Halo Keikgini, saya mau pre-order burnt cheesecake" target="_blank" rel="noopener noreferrer" className="btn-gold"
              style={{ padding: '16px 36px', borderRadius: 2, fontSize: 13, fontWeight: 500, letterSpacing: '0.12em', textDecoration: 'none', display: 'inline-block' }}>
              Pre-Order Sekarang
            </a>
            <a href="https://www.instagram.com/keikgini/" target="_blank" rel="noopener noreferrer"
              style={{ padding: '16px 36px', borderRadius: 2, fontSize: 13, fontWeight: 400, letterSpacing: '0.12em', textDecoration: 'none', color: '#FAF7F2', border: '1px solid rgba(250,247,242,0.3)', display: 'inline-block', transition: 'border-color 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(250,247,242,0.7)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(250,247,242,0.3)'; }}>
              Ikuti di Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#1C1008', padding: '56px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, marginBottom: 48 }} className="footer-grid">
          <div>
            <div className="font-display" style={{ fontSize: 28, fontWeight: 600, color: '#FAF7F2', letterSpacing: '0.04em', marginBottom: 6 }}>Keikgini</div>
            <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8903A', marginBottom: 20 }}>Burnt Cheesecake Specialist</div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(250,247,242,0.4)', fontWeight: 300, maxWidth: 280 }}>
              Handmade burnt cheesecake premium, dibuat dengan cinta di Cibubur untuk seluruh Depok dan sekitarnya.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8903A', marginBottom: 20 }}>Menu</p>
            {['Classic Burnt Cheesecake','Oreo Burnt Cheesecake','Matcha Burnt Cheesecake','Custom Order'].map((item, i) => (
              <a key={i} href="#menu" style={{ display: 'block', fontSize: 13, color: 'rgba(250,247,242,0.45)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s', fontWeight: 300 }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,247,242,0.85)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,247,242,0.45)'; }}>{item}</a>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8903A', marginBottom: 20 }}>Kontak</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { href: 'https://wa.me/6285121922984', icon: '📱', label: 'Order via WhatsApp' },
                { href: 'https://www.instagram.com/keikgini/', icon: '📷', label: '@keikgini' },
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(250,247,242,0.45)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 300 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C8903A'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,247,242,0.45)'; }}>
                  <span>{c.icon}</span> {c.label}
                </a>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(250,247,242,0.45)', fontWeight: 300 }}>
                <span>📍</span> Cibubur · Depok · Jabodetabek
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(196,168,130,0.1)', paddingTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(250,247,242,0.2)', fontWeight: 300 }}>© 2025 Keikgini. All rights reserved.</p>
          <p style={{ fontSize: 12, color: 'rgba(250,247,242,0.15)', fontWeight: 300 }}>Burnt cheesecake premium · Cibubur · Depok</p>
        </div>
      </div>
      <style>{`@media(min-width:640px){.footer-grid{grid-template-columns:2fr 1fr 1fr!important}}`}</style>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <div style={{ minHeight: '100vh' }}>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <BrandStory />
        <MenuSection />
        <WhySection />
        <SocialProof />
        <OrderProcess />
        <B2BSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
