// Visual Learning Lab: editorial lesson deck, flat educational illustration, navy/magenta/mustard system.
import { useState } from "react";
import { ArrowDown, ArrowRight, Check, Clipboard, Code2, GitBranch, Github, Layers3, Menu, Play, Sparkles, Terminal, X } from "lucide-react";
import { toast } from "sonner";
import { runEncapsulationDemo, runInheritanceDemo, runPolymorphismDemo } from "@/lib/pbo";

const chapters = [
  { id: "01", title: "Fondasi web", label: "HTML · CSS · JS" },
  { id: "02", title: "Cara berpikir Git", label: "Version control" },
  { id: "03", title: "Dari lokal ke cloud", label: "GitHub workflow" },
];

const concepts = [
  { icon: Layers3, title: "Struktur", copy: "HTML memberi bentuk dan makna pada halaman yang kamu bangun.", tone: "yellow" },
  { icon: Sparkles, title: "Gaya", copy: "CSS membuat ide terasa hidup lewat warna, ruang, dan ritme.", tone: "pink" },
  { icon: Code2, title: "Perilaku", copy: "JavaScript menambahkan logika agar antarmuka bisa merespons.", tone: "blue" },
];

const pboConcepts = [
  { chapter: "BAB 04", title: "Encapsulation", tag: "data + method", copy: "Membungkus data dan method di dalam class agar aksesnya terkontrol.", code: "class User {\n  private nama: string;\n\n  getNama() { return this.nama; }\n}" },
  { chapter: "BAB 05", title: "Inheritance", tag: "parent → child", copy: "Membuat class baru berdasarkan class yang sudah ada untuk menggunakan kembali perilaku.", code: "class Admin extends User {\n  aksesDashboard() {\n    return true;\n  }\n}" },
  { chapter: "BAB 06", title: "Polymorphism", tag: "one interface · many forms", copy: "Satu method dapat menghasilkan perilaku berbeda sesuai object yang menggunakannya.", code: "class Shape {\n  draw() { return 'shape'; }\n}\nclass Circle extends Shape {\n  draw() { return 'circle'; }\n}" },
];

const steps = [
  { key: "local", title: "Local", eyebrow: "01 · TULIS", copy: "Mulai dari folder kerja di laptopmu. Semua eksperimen aman di sini.", icon: Terminal, color: "yellow" },
  { key: "git", title: "Git", eyebrow: "02 · SIMPAN", copy: "Catat perubahan sebagai commit. Kamu selalu bisa mundur dan membandingkan.", icon: GitBranch, color: "pink" },
  { key: "github", title: "GitHub", eyebrow: "03 · BAGIKAN", copy: "Dorong kode ke cloud. Kolaborasi dan deploy dimulai dari satu push.", icon: Github, color: "blue" },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState("git");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pboName, setPboName] = useState("Alya");
  const [shape, setShape] = useState<"circle" | "rectangle">("circle");
  const [demoOutput, setDemoOutput] = useState("Pilih salah satu tombol demo untuk menjalankan object dan method PBO.");

  const runDemo = (type: "encapsulation" | "inheritance" | "polymorphism") => {
    const output = type === "encapsulation" ? runEncapsulationDemo(pboName) : type === "inheritance" ? runInheritanceDemo(pboName) : runPolymorphismDemo(shape);
    setDemoOutput(output);
  };

  const copyCode = async () => {
    await navigator.clipboard?.writeText("git add .\ngit commit -m \"first commit\"\ngit push origin main");
    toast.success("Snippet tersalin ke clipboard");
  };

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Koding Lab beranda"><span className="brand-mark"><span /><span /><span /></span><span>KODING LAB</span></a>
        <nav className={mobileOpen ? "nav-links open" : "nav-links"} aria-label="Navigasi utama">
          <a href="#materi" onClick={() => setMobileOpen(false)}>Materi</a>
          <a href="#workflow" onClick={() => setMobileOpen(false)}>Workflow</a>
          <a href="#pbo" onClick={() => setMobileOpen(false)}>PBO</a>
          <a href="#lab" onClick={() => setMobileOpen(false)}>Code lab</a>
          <a className="nav-cta" href="#mulai" onClick={() => setMobileOpen(false)}>Mulai belajar <ArrowRight size={15} /></a>
        </nav>
        <button className="icon-button menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Buka navigasi">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> BELAJAR WEB DEVELOPMENT</div>
          <h1>Pahami alurnya.<br /><em>Baru tulis</em> kodenya.</h1>
          <p className="hero-lede">Koding Lab mengubah konsep web development yang rumit menjadi peta visual yang bisa kamu jelajahi satu langkah demi satu.</p>
          <div className="hero-actions"><a className="button button-primary" href="#materi">Jelajahi materi <ArrowDown size={17} /></a><a className="text-link" href="#workflow"><span className="play-dot"><Play size={11} fill="currentColor" /></span> lihat cara kerjanya</a></div>
          <div className="hero-note"><span className="note-line" /> Dirancang untuk pemula yang ingin mengerti, bukan sekadar menghafal.</div>
        </div>
        <div className="hero-art" aria-label="Ilustrasi ruang belajar coding">
          <div className="dot-field" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="person"><div className="person-head" /><div className="person-body" /><div className="person-arm" /><div className="person-leg leg-one" /><div className="person-leg leg-two" /></div>
          <div className="desk" />
          <div className="laptop"><div className="laptop-screen"><div className="code-lines"><i /><i /><i /><i /></div><div className="screen-chip">&lt;/&gt;</div></div><div className="laptop-base" /></div>
          <div className="floating-card card-code"><span className="tiny-window"><b /><b /><b /></span><code>git push</code><ArrowRight size={13} /></div>
          <div className="floating-card card-node"><span className="node-symbol"><GitBranch size={14} /></span><strong>3</strong><small>branches</small></div>
          <div className="hero-tag">01 / START HERE</div>
        </div>
      </section>

      <section className="chapter-rail" id="materi"><div className="rail-intro"><span className="section-number">01</span><div><span className="eyebrow">PETA BELAJAR</span><h2>Tiga lapisan<br />yang saling bicara.</h2></div></div><div className="concept-grid">{concepts.map(({ icon: Icon, title, copy, tone }) => <article className={`concept-card ${tone}`} key={title}><div className="card-icon"><Icon size={19} /></div><span className="card-index">0{concepts.findIndex((item) => item.title === title) + 1}</span><span className="concept-chip">{title === "Struktur" ? "markup" : title === "Gaya" ? "visual" : "logic"}</span><h3>{title}</h3><p>{copy}</p><a href="#lab" aria-label={`Pelajari ${title}`}>Pelajari <ArrowRight size={15} /></a></article>)}</div></section>

      <section className="pbo-section" id="pbo"><div className="pbo-header"><div><span className="eyebrow"><span className="eyebrow-line" /> PBO / OBJECT ORIENTED</span><h2>Bab 04–06,<br /><em>dibuat terlihat.</em></h2></div><p>Konsep PBO bukan hanya istilah. Lihat bagaimana class, object, dan method saling terhubung dalam potongan kode berikut.</p></div><div className="pbo-grid">{pboConcepts.map((item) => <article className="pbo-card" key={item.title}><div className="pbo-meta"><span>{item.chapter}</span><span className="concept-chip">{item.tag}</span></div><h3>{item.title}</h3><p>{item.copy}</p><pre>{item.code}</pre><button className="pbo-demo-link" onClick={() => runDemo(item.title === "Encapsulation" ? "encapsulation" : item.title === "Inheritance" ? "inheritance" : "polymorphism")}>Jalankan demo <ArrowRight size={14} /></button></article>)}</div><div className="pbo-console"><div><span className="eyebrow"><span className="eyebrow-line" /> OBJECT CONSOLE</span><h3>Lihat object-nya bekerja.</h3><p>Masukkan nama untuk demo encapsulation dan inheritance, lalu pilih bentuk untuk melihat polymorphism.</p></div><div className="pbo-controls"><label>Nama object<input value={pboName} onChange={(event) => setPboName(event.target.value)} aria-label="Nama object" /></label><label>Bentuk untuk polymorphism<select value={shape} onChange={(event) => setShape(event.target.value as "circle" | "rectangle")}><option value="circle">Circle</option><option value="rectangle">Rectangle</option></select></label></div><div className="pbo-output"><span>OUTPUT</span><code>{demoOutput}</code></div></div></section>

      <section className="workflow-section" id="workflow"><div className="section-stamp">BAB 02 <span>VERSION CONTROL</span></div><div className="workflow-heading"><div><span className="eyebrow">WORKFLOW VISUAL</span><h2>Dari folder kosong<br />ke <em>siap kolaborasi.</em></h2></div><p>Git bukan tempat menyimpan kode. Git adalah cara memberi nama pada setiap langkahmu.</p></div><div className="workflow-map"><div className="flow-line" />{steps.map(({ key, title, eyebrow, copy, icon: Icon, color }, index) => <button key={key} className={`workflow-step ${color} ${activeStep === key ? "active" : ""}`} onClick={() => setActiveStep(key)}><div className="step-top"><span>{eyebrow}</span><span>0{index + 1}</span></div><div className="step-icon"><Icon size={22} /></div><h3>{title}</h3><p>{copy}</p><span className="step-action">{activeStep === key ? "Sedang dilihat" : "Lihat detail"} <ArrowRight size={14} /></span></button>)}</div><div className="active-detail"><div className="detail-label">KAMU SEDANG DI SINI</div><div><strong>{steps.find((step) => step.key === activeStep)?.title}</strong><span>{steps.find((step) => step.key === activeStep)?.copy}</span></div><div className="detail-progress"><i className={activeStep === "local" ? "on" : "on"} /><i className={activeStep !== "local" ? "on" : ""} /><i className={activeStep === "github" ? "on" : ""} /></div></div></section>

      <section className="compare-section"><div className="compare-copy"><span className="section-number">03</span><div><span className="eyebrow">CONCEPT CHECK</span><h2>Git dan GitHub.<br /><em>Beda peran.</em></h2><p>Bayangkan Git sebagai kamera yang merekam prosesmu. GitHub adalah rak cloud tempat rekaman itu bisa dibagikan.</p><a className="text-link underlined" href="#lab">Baca perbandingan lengkap <ArrowRight size={15} /></a></div></div><div className="compare-table"><div className="compare-chips"><span>commit</span><span>branch</span><span>remote</span></div><div className="compare-header"><span>Konsep</span><span>Git</span><span>GitHub</span></div><div className="compare-row"><span>Berjalan di</span><strong>Lokal</strong><strong>Cloud</strong></div><div className="compare-row"><span>Fungsi utama</span><strong>Melacak versi</strong><strong>Kolaborasi</strong></div><div className="compare-row"><span>Perlu internet?</span><b className="cross">×</b><b className="check"><Check size={14} /></b></div></div></section>

      <section className="lab-section" id="lab"><div className="lab-heading"><div><span className="eyebrow"><span className="eyebrow-line" /> CODE LAB</span><h2>Belajar lewat<br /><em>baris pertama.</em></h2></div><p>Salin snippet ini, jalankan di terminal, lalu lihat bagaimana tiga perintah kecil membentuk workflow.</p></div><div className="code-window"><div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>~/koding-lab/project</span><button onClick={copyCode}><Clipboard size={15} /> Salin kode</button></div><div className="code-body"><div className="line-numbers">1<br />2<br />3</div><pre><span className="prompt">$</span> <span className="cmd">git add</span> .<br /><span className="prompt">$</span> <span className="cmd">git commit</span> -m <span className="string">"first commit"</span><br /><span className="prompt">$</span> <span className="cmd">git push</span> origin main</pre><div className="code-aside"><span className="pulse" /> 3 langkah<br /><small>untuk satu<br />perubahan yang<br />tercatat.</small></div></div></div></section>

      <footer id="mulai"><div className="footer-mark"><span className="brand-mark"><span /><span /><span /></span><strong>KODING<br />LAB.</strong><span className="footer-node-trail"><i /><i /><i /></span></div><div><span className="eyebrow">NEXT CHAPTER</span><h2>Ruang belajar<br /><em>yang kamu bangun sendiri.</em></h2></div><a className="button button-dark" href="#top">Kembali ke atas <ArrowRight size={17} /></a><div className="footer-bottom"><span>© 2026 Koding Lab</span><span>Belajar visual. Bangun nyata.</span></div></footer>
    </main>
  );
}
