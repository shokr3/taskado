import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { useLanguage } from "./i18n/LanguageContext";
import { Icon } from "./redesign/Icon";
import { ProductDemo } from "./redesign/ProductDemo";

function App() {
  const { language, setLanguage } = useLanguage();
  const b = (hr: string, en: string) => (language === "hr" ? hr : en);
  const [menuOpen, setMenuOpen] = useState(false);
  const [industry, setIndustry] = useState(0);
  const [intent, setIntent] = useState<"demo" | "trial">("demo");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [emailDraft, setEmailDraft] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);
  const industries = [
    b("Servisi i instalacije", "Service & installation"),
    b("Održavanje objekata", "Facility maintenance"),
    b("Projektni timovi", "Project teams"),
  ];
  const industryCopy = [
    [
      b(
        "Od prvog poziva do zadnjeg vijka.",
        "From the first call to the final fix.",
      ),
      b(
        "Dodijelite nalog, pošaljite tehničara i pratite izvedbu. Fotografije, utrošeni materijali i radni sati stižu izravno s terena.",
        "Assign a work order, dispatch a technician, and follow the progress. Photos, materials, and working hours arrive straight from the field.",
      ),
      b("Servis klimatizacije", "Air conditioning service"),
      b("Pregled uređaja", "Equipment inspection"),
    ],
    [
      b(
        "Svaki objekt. Svaki detalj. Pod kontrolom.",
        "Every property. Every detail. Under control.",
      ),
      b(
        "Povežite ured i ekipe na lokaciji. Planirajte redovito održavanje i držite evidenciju radova na jednom mjestu.",
        "Connect the office and on-site teams. Plan regular maintenance and keep a clear record of every job in one place.",
      ),
      b("Održavanje objekta", "Property maintenance"),
      b("Pregled instalacija", "Installation inspection"),
    ],
    [
      b(
        "Dobre ideje zaslužuju jasan plan.",
        "Good ideas deserve a clear plan.",
      ),
      b(
        "Rasporedite zadatke, povežite ljude i pratite projektne budžete. Svatko zna što radi i koji je sljedeći korak.",
        "Assign tasks, connect people, and track project budgets. Everyone knows what to do and what comes next.",
      ),
      b("Novi projekt", "New project"),
      b("Priprema dokumentacije", "Document preparation"),
    ],
  ];
  const goContact = (next: "demo" | "trial") => {
    setIntent(next);
    setEmailDraft("");
    setMenuOpen(false);
  };
  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "hr"
        ? "Taskado — Manje kaosa. Više obavljenog."
        : "Taskado — Less chaos. More done.";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        language === "hr"
          ? "Povežite projekte, timove na terenu, radne naloge i račune u jednoj aplikaciji. Upoznajte Taskado i zatražite 30 dana besplatnog korištenja."
          : "Connect projects, field teams, work orders, and invoices in one app. Discover Taskado and request a free 30-day trial.",
      );
  }, [language]);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(false);
    const data = new FormData(event.currentTarget);
    if (data.get("website")) return;
    const subject = `${intent === "trial" ? "Probni period" : "Demo"} — ${data.get("company")}`;
    const body = `Ime: ${data.get("name")}\nEmail: ${data.get("email")}\nTvrtka: ${data.get("company")}\nTelefon: ${data.get("phone")}\n\n${data.get("message")}`;
    const draft = `mailto:taskado@knowit.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!key) {
      setEmailDraft(draft);
      return;
    }
    setSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject,
          from_name: "Taskado website",
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          phone: data.get("phone"),
          message: data.get("message"),
          botcheck: "",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      setSent(true);
      (
        window as Window & { gtag_report_conversion?: () => void }
      ).gtag_report_conversion?.();
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        {b("Preskoči na sadržaj", "Skip to content")}
      </a>
      <div className="announcement">
        <span className="announcement-label">
          {b("POVEŽITE POSLOVANJE", "CONNECT YOUR BUSINESS")}
        </span>
        <span>
          {b(
            "Od radnog naloga do računa. U jednom potezu.",
            "From work order to invoice. In one move.",
          )}
        </span>
        <a
          href="#workflow"
          aria-label={b("Pogledajte kako radi", "See how it works")}
        >
          <Icon size={15} />
        </a>
      </div>
      <header className="site-header">
        <nav
          className="nav shell"
          aria-label={b("Glavna navigacija", "Main navigation")}
        >
          <a href="#" className="brand" aria-label="Taskado">
            <img src="/logo.png" alt="Taskado" width="151" height="35" />
          </a>
          <div
            className={`nav-panel ${menuOpen ? "open" : ""}`}
            id="navigation"
          >
            <div className="nav-links">
              <a href="#features" onClick={() => setMenuOpen(false)}>
                {b("Mogućnosti", "Features")}
              </a>
              <a href="#solutions" onClick={() => setMenuOpen(false)}>
                {b("Za vaš tim", "For your team")}
              </a>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>
                {b("Cijene", "Pricing")}
              </a>
            </div>
            <div className="nav-actions">
              <div
                className="language-switch"
                aria-label={b("Jezik", "Language")}
              >
                {(["hr", "en"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    aria-pressed={language === lang}
                    className={language === lang ? "active" : ""}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <a className="login" href="https://taskado.app/app/login">
                {b("Prijava", "Log in")} <Icon name="arrow" size={15} />
              </a>
              <a
                className="button button-small"
                href="#contact"
                onClick={() => goContact("trial")}
              >
                {b("Isprobajte besplatno", "Try for free")}
                <Icon size={16} />
              </a>
            </div>
          </div>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="navigation"
            aria-label={b(
              menuOpen ? "Zatvori izbornik" : "Otvori izbornik",
              menuOpen ? "Close menu" : "Open menu",
            )}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={24} />
          </button>
        </nav>
      </header>
      <main id="main">
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="blue-dot" />{" "}
              {b(
                "VELIKE STVARI. JEDNOSTAVNIJI RADNI DAN.",
                "BIG AMBITIONS. A SIMPLER WORKDAY.",
              )}
            </div>
            <h1>
              {b("Manje kaosa.", "Less chaos.")}
              <br />
              {b("Više", "More")}{" "}
              <span className="accent-word">
                {b("obavljenog.", "done.")}
                <svg
                  viewBox="0 0 440 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M3 12Q210 -4 436 10M65 18Q270 4 420 15" />
                </svg>
              </span>
            </h1>
            <p className="hero-description">
              {b(
                "Projekti, timovi na terenu i računi. Napokon povezani u jednoj aplikaciji koja radi za vas.",
                "Projects, field teams, and invoices. Finally connected in one app that works for you.",
              )}
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href="#contact"
                onClick={() => goContact("trial")}
              >
                {b("Započnite besplatno", "Start for free")}
                <Icon />
              </a>
              <a className="text-button" href="#workflow">
                <span className="play-circle">
                  <Icon name="play" size={14} />
                </span>
                {b("Upoznajte Taskado", "Meet Taskado")}
              </a>
            </div>
            <div className="trial-note">
              <span>
                <Icon name="check" size={14} />
                {b("30 dana besplatno", "30 days free")}
              </span>
              <span>
                <Icon name="check" size={14} />
                {b("Bez kreditne kartice", "No credit card")}
              </span>
            </div>
          </div>
          <ProductDemo />
        </section>
        <div className="capability-strip shell">
          <span>
            {b(
              "JEDAN SUSTAV. CIJELI VAŠ POSAO.",
              "ONE SYSTEM. YOUR WHOLE BUSINESS.",
            )}
          </span>
          <div>
            {[
              ["grid", b("Projekti", "Projects")],
              ["document", b("Radni nalozi", "Work orders")],
              ["team", b("Timovi", "Teams")],
              ["calendar", b("Raspored", "Scheduling")],
              ["bolt", b("Računi", "Invoicing")],
            ].map(([i, t]) => (
              <span key={i}>
                <Icon name={i} size={18} />
                {t}
              </span>
            ))}
          </div>
        </div>
        <section className="section workflow shell" id="workflow">
          <div className="section-top">
            <div>
              <div className="eyebrow">
                01 / {b("POVEŽITE TOČKICE", "CONNECT THE DOTS")}
              </div>
              <h2>
                {b("Dobar posao počinje", "Great work starts")}
                <br />
                {b("dobrim pregledom.", "with a clear picture.")}
              </h2>
            </div>
            <p>
              {b(
                "Kad sve radi zajedno, vi imate prostora za ono što je važno. Ovako izgleda vaš dan s Taskadom.",
                "When everything works together, you have room for what matters. Here’s what your day looks like with Taskado.",
              )}
            </p>
          </div>
          <div className="workflow-grid">
            {[
              [
                "01",
                "calendar",
                b("Isplanirajte dan.", "Plan the day."),
                b(
                  "Projekti, zadaci i ljudi u jednom rasporedu. Svatko zna što je sljedeće.",
                  "Projects, tasks, and people on one schedule. Everyone knows what comes next.",
                ),
                b("Jasan plan", "A clear plan"),
              ],
              [
                "02",
                "phone",
                b("Povežite teren.", "Connect the field."),
                b(
                  "Nalozi, fotografije i materijali. Izravno s mobitela, bez dodatnih poziva.",
                  "Work orders, photos, and materials. Straight from mobile, without extra calls.",
                ),
                b("Povezan tim", "A connected team"),
              ],
              [
                "03",
                "document",
                b("Zatvorite krug.", "Close the loop."),
                b(
                  "Pretvorite obavljen posao u račun. Bez ponovnog unosa istih podataka.",
                  "Turn completed work into an invoice. Without entering the same information twice.",
                ),
                b("Manje administracije", "Less admin"),
              ],
            ].map(([n, i, t, d, tag]) => (
              <article className="workflow-item" key={n}>
                <div className="workflow-item-top">
                  <span className="feature-icon">
                    <Icon name={i} size={25} />
                  </span>
                  <span className="step-number">{n}</span>
                </div>
                <h3>{t}</h3>
                <p>{d}</p>
                <span className="workflow-tag">
                  <Icon name="check" size={14} />
                  {tag}
                </span>
              </article>
            ))}
          </div>
        </section>
        <section className="feature-section" id="features">
          <div className="shell section">
            <div className="section-top">
              <div>
                <div className="eyebrow">
                  02 / {b("JEDNOSTAVNO MOĆAN", "SIMPLY POWERFUL")}
                </div>
                <h2>
                  {b("Sve što trebate.", "Everything you need.")}
                  <br />
                  <span className="muted-heading">
                    {b("Ništa što vas usporava.", "Nothing to slow you down.")}
                  </span>
                </h2>
              </div>
              <a
                href="#contact"
                className="text-button"
                onClick={() => goContact("demo")}
              >
                {b("Pogledajte u akciji", "See it in action")}
                <Icon />
              </a>
            </div>
            <div className="feature-layout">
              <article className="feature-project">
                <div className="feature-card-copy">
                  <span className="feature-icon">
                    <Icon name="grid" size={22} />
                  </span>
                  <h3>{b("Od ideje do „gotovo”.", "From idea to “done”.")}</h3>
                  <p>
                    {b(
                      "Pratite projekte, zadatke i budžete. Budite u toku, bez sastanka o tome jeste li u toku.",
                      "Track projects, tasks, and budgets. Stay up to date, without a meeting about staying up to date.",
                    )}
                  </p>
                </div>
                <div
                  className="kanban"
                  aria-label={b(
                    "Primjer projektnog prikaza",
                    "Illustrative project board",
                  )}
                >
                  <div className="kanban-title">
                    <strong>
                      {b("Novi poslovni prostor", "New office space")}
                    </strong>
                    <span className="tiny muted">
                      {b("PRIMJER", "EXAMPLE")}
                    </span>
                  </div>
                  <div className="kanban-columns">
                    {[
                      b("Za napraviti", "To do"),
                      b("U tijeku", "In progress"),
                      b("Gotovo", "Done"),
                    ].map((x, i) => (
                      <div key={x}>
                        <div className="column-label">
                          <i className={`column-dot dot-${i}`} />
                          {x}
                          <span>{i === 1 ? 2 : 1}</span>
                        </div>
                        <div className="kanban-card">
                          <span className={`mini-tag tag-${i}`}>
                            {
                              [
                                b("PLANIRANJE", "PLANNING"),
                                b("INSTALACIJE", "INSTALLATION"),
                                b("DOKUMENTI", "DOCUMENTS"),
                              ][i]
                            }
                          </span>
                          <strong>
                            {
                              [
                                b("Priprema prostora", "Space preparation"),
                                b("Montaža opreme", "Equipment installation"),
                                b("Odobrenje ponude", "Quote approval"),
                              ][i]
                            }
                          </strong>
                          <div>
                            <span>
                              <Icon name="calendar" size={12} /> 24. 10.
                            </span>
                            <span
                              className={`person ${i === 1 ? "peach" : "blue"}`}
                            >
                              {i === 1 ? "AK" : "MK"}
                            </span>
                          </div>
                        </div>
                        {i === 1 && (
                          <div className="kanban-card extra-card">
                            <span className="mini-tag tag-1">
                              {b("PREGLED", "INSPECTION")}
                            </span>
                            <strong>
                              {b("Provjera instalacija", "Installation check")}
                            </strong>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
              <article className="feature-schedule">
                <span className="feature-icon">
                  <Icon name="calendar" size={22} />
                </span>
                <h3>
                  {b("Pravo vrijeme.", "The right time.")}
                  <br />
                  {b("Pravi ljudi.", "The right people.")}
                </h3>
                <p>
                  {b(
                    "Vizualni raspored koji povezuje dostupnost tima s potrebama posla.",
                    "Visual scheduling that connects team availability with the work ahead.",
                  )}
                </p>
                <div className="schedule-art" aria-hidden="true">
                  <div className="schedule-days">
                    <span>P / M</span>
                    <span>U / T</span>
                    <span>S / W</span>
                    <span>Č / T</span>
                  </div>
                  <div className="schedule-line">
                    <i />
                    <span className="schedule-event blue-event">
                      09:00 · {b("Servis", "Service")}
                    </span>
                  </div>
                  <div className="schedule-line">
                    <i />
                    <span className="schedule-event mint-event">
                      11:30 · {b("Pregled", "Inspection")}
                    </span>
                  </div>
                  <div className="schedule-line">
                    <i />
                    <span className="schedule-event peach-event">
                      14:00 · {b("Montaža", "Installation")}
                    </span>
                  </div>
                </div>
              </article>
            </div>
            <div className="secondary-features">
              {[
                [
                  "team",
                  b("Tim koji radi zajedno", "A team that works together"),
                  b(
                    "Zadaci, dostupnost i odgovornosti. Jasno svima.",
                    "Tasks, availability, and responsibilities. Clear to everyone.",
                  ),
                ],
                [
                  "document",
                  b("Ponude koje postaju posao", "Quotes that become jobs"),
                  b(
                    "Profesionalne ponude i katalog vaših usluga.",
                    "Professional quotes and your own service catalogue.",
                  ),
                ],
                [
                  "spark",
                  b("Sljedeći korak: AI", "Next up: AI"),
                  b(
                    "Razvijamo asistente za planiranje i pametnije uvide.",
                    "We’re developing assistants for planning and smarter insights.",
                  ),
                ],
              ].map(([i, t, d]) => (
                <article key={i}>
                  <Icon name={i} size={23} />
                  <h3>
                    {t}
                    {i === "spark" && (
                      <span className="coming-soon">
                        {b("Uskoro", "Coming soon")}
                      </span>
                    )}
                  </h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section solutions shell" id="solutions">
          <div className="section-top">
            <div>
              <div className="eyebrow">
                03 / {b("VAŠ POSAO, VAŠ NAČIN", "YOUR BUSINESS, YOUR WAY")}
              </div>
              <h2>
                {b("U uredu. Na terenu.", "At the office. In the field.")}
                <br />
                {b("Uvijek na istoj strani.", "Always on the same page.")}
              </h2>
            </div>
            <p>
              {b(
                "Za ljude koji rade konkretan posao. I žele da njihov softver radi isto.",
                "For people who do real work. And want their software to do the same.",
              )}
            </p>
          </div>
          <div
            className="industry-tabs"
            role="tablist"
            aria-label={b("Rješenja za timove", "Team solutions")}
          >
            {industries.map((x, i) => (
              <button
                key={x}
                role="tab"
                id={`industry-tab-${i}`}
                aria-selected={industry === i}
                aria-controls="industry-panel"
                tabIndex={industry === i ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    const next = (i + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                    setIndustry(next);
                    document.getElementById(`industry-tab-${next}`)?.focus();
                  }
                }}
                className={industry === i ? "active" : ""}
                onClick={() => setIndustry(i)}
              >
                {x}
                <Icon size={17} />
              </button>
            ))}
          </div>
          <div
            className="industry-panel"
            role="tabpanel"
            id="industry-panel"
            aria-labelledby={`industry-tab-${industry}`}
          >
            <div className="industry-copy">
              <span className="industry-index">0{industry + 1} / TASKADO</span>
              <h3>{industryCopy[industry][0]}</h3>
              <p>{industryCopy[industry][1]}</p>
              <ul className="check-list">
                {[
                  b(
                    "Fotografije i dokumenti uz svaki nalog",
                    "Photos and documents with every work order",
                  ),
                  b(
                    "Evidencija rada i utrošenog materijala",
                    "Track time and materials",
                  ),
                  b(
                    "Sinkronizacija između ureda i terena",
                    "Office and field, kept in sync",
                  ),
                ].map((x) => (
                  <li key={x}>
                    <Icon name="check" size={16} />
                    {x}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="text-button"
                onClick={() => goContact("demo")}
              >
                {b("Pronađimo vaš način rada", "Let’s find your workflow")}
                <Icon />
              </a>
            </div>
            <div className="mobile-visual">
              <div className="map-grid">
                <div className="map-road road-one" />
                <div className="map-road road-two" />
                <div className="map-block block-one" />
                <div className="map-block block-two" />
                <span className="map-label">ZAGREB</span>
                <span className="map-pin">
                  <Icon name="pin" size={25} />
                </span>
              </div>
              <div className="phone-frame">
                <div className="phone-island" />
                <div className="phone-status">
                  9:41 <span>••• ▰</span>
                </div>
                <div className="phone-heading">
                  <span className="app-mark">
                    t<span>°</span>
                  </span>
                  <span className="person blue">IP</span>
                </div>
                <span className="tiny muted">
                  {b("MOJ RADNI DAN", "MY WORKDAY")}
                </span>
                <h4>{b("Idemo na posao.", "Let’s get to work.")}</h4>
                <div className="phone-order">
                  <span className="status orange">
                    {b("U tijeku", "In progress")}
                  </span>
                  <h5>{industryCopy[industry][2]}</h5>
                  <p>
                    <Icon name="pin" size={12} /> Hotel Park, Zagreb
                  </p>
                  <div className="phone-divider" />
                  <span className="tiny muted">{b("ZADACI", "TASKS")}</span>
                  <div className="phone-task">
                    <span className="checked">
                      <Icon name="check" size={11} />
                    </span>
                    {industryCopy[industry][3]}
                  </div>
                  <div className="phone-task">
                    <span className="checked">
                      <Icon name="check" size={11} />
                    </span>
                    {b("Evidencija materijala", "Material tracking")}
                  </div>
                  <div className="phone-task">
                    <span className="empty-check" />
                    {b("Završna provjera", "Final check")}
                  </div>
                  <div className="photo-tiles">
                    <span>
                      <Icon name="document" size={22} />
                      <small>{b("Dokumentacija", "Documents")}</small>
                    </span>
                    <span>
                      <Icon name="plus" size={24} />
                      <small>{b("Fotografije", "Photos")}</small>
                    </span>
                  </div>
                </div>
                <div className="phone-sync">
                  <i className="online" />
                  {b("Sve promjene su sinkronizirane", "All changes synced")}
                </div>
              </div>
              <div className="field-note">
                <Icon name="bolt" size={19} />
                <span>
                  {b("Teren i ured. Povezani.", "Field and office. Connected.")}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="fiscal-section shell" id="fiscalization">
          <div className="fiscal-visual">
            <div className="receipt">
              <span className="tiny muted">
                TASKADO / {b("PRIMJER RAČUNA", "SAMPLE INVOICE")}
              </span>
              <div className="receipt-title">
                <Icon name="document" size={30} />
                <span>#2026–042</span>
              </div>
              <div className="receipt-line" />
              <div className="receipt-line short" />
              <div className="receipt-row">
                <span>{b("Ukupno", "Total")}</span>
                <strong>300,00 €</strong>
              </div>
              <div className="receipt-confirm">
                <Icon name="check" size={15} />
                {b("Povezano s radnim nalogom", "Linked to a work order")}
              </div>
            </div>
            <div className="fiscal-seal">
              <Icon name="shield" size={26} />
              <span>2.0</span>
            </div>
          </div>
          <div className="fiscal-copy">
            <div className="eyebrow">
              <span className="flag-croatia" />
              {b(
                "RAZVIJENO ZA HRVATSKO POSLOVANJE",
                "BUILT FOR CROATIAN BUSINESSES",
              )}
            </div>
            <h2>
              {b("Posao završen.", "Job done.")}
              <br />
              {b("Račun? I on.", "Invoice? That too.")}
            </h2>
            <p>
              {b(
                "Ponude, računi i Fiskalizacija 2.0 povezani s vašim radnim nalozima. Uz integraciju odabranog posrednika, administracija postaje dio procesa.",
                "Quotes, invoices, and Fiscalization 2.0 connected to your work orders. With your chosen provider integrated, admin becomes part of the process.",
              )}
            </p>
            <div className="fiscal-tags">
              <span>B2B & B2C</span>
              <span>{b("QR kodovi", "QR codes")}</span>
              <span>{b("Katalog usluga", "Service catalogue")}</span>
            </div>
            <a
              className="text-button"
              href="#contact"
              onClick={() => goContact("demo")}
            >
              {b(
                "Razgovarajmo o vašem poslovanju",
                "Let’s talk about your business",
              )}
              <Icon />
            </a>
          </div>
        </section>
        <section className="section pricing shell" id="pricing">
          <div className="pricing-copy">
            <div className="eyebrow">
              04 /{" "}
              {b("MALI KORAK. VELIKA RAZLIKA.", "SMALL STEP. BIG DIFFERENCE.")}
            </div>
            <h2>
              {b("Prvo se upoznajte.", "Get to know us first.")}
              <br />
              {b("Onda odlučite.", "Then decide.")}
            </h2>
            <p>
              {b(
                "Svaki tim radi drugačije. Zato ponudu prilagođavamo veličini vaše tvrtke, broju radnika i opsegu poslovanja.",
                "Every team works differently. So we tailor your quote to your company size, number of workers, and scope of operations.",
              )}
            </p>
            <a
              href="#contact"
              className="text-button"
              onClick={() => goContact("demo")}
            >
              {b("Zatražite ponudu za svoj tim", "Get a quote for your team")}
              <Icon />
            </a>
            <div className="pricing-footnote">
              <Icon name="shield" size={19} />
              {b(
                "Bez obaveze. Bez kreditne kartice.",
                "No commitment. No credit card.",
              )}
            </div>
          </div>
          <div className="trial-card">
            <div className="trial-card-top">
              <span>
                {b(
                  "VAŠ NOVI RADNI DAN POČINJE OVDJE",
                  "YOUR NEW WORKDAY STARTS HERE",
                )}
              </span>
              <Icon name="spark" size={27} />
            </div>
            <div className="trial-number">
              30
              <span>
                {b("dana", "days")}
                <br />
                {b("besplatno.", "free.")}
              </span>
            </div>
            <p>
              {b(
                "Upoznajte sve mogućnosti. U svom ritmu.",
                "Explore every feature. At your own pace.",
              )}
            </p>
            <ul className="trial-features">
              {[
                b("Svi moduli na jednom mjestu", "Every module in one place"),
                b(
                  "Projekti i zadaci bez ograničenja",
                  "Unlimited projects and tasks",
                ),
                b("Mobilna aplikacija za vaš tim", "Mobile app for your team"),
                b(
                  "Ponude, računi i Fiskalizacija 2.0",
                  "Quotes, invoicing & Fiscalization 2.0",
                ),
              ].map((x) => (
                <li key={x}>
                  <Icon name="check" size={16} />
                  {x}
                </li>
              ))}
            </ul>
            <a
              className="button button-full"
              href="#contact"
              onClick={() => goContact("trial")}
            >
              {b("Isprobajte Taskado besplatno", "Try Taskado for free")}
              <Icon />
            </a>
            <span className="trial-card-note">
              {b(
                "Cijena nakon probnog perioda po individualnoj ponudi.",
                "Pricing after the trial is based on your individual quote.",
              )}
            </span>
          </div>
        </section>
        <section className="faq-section shell">
          <div>
            <div className="eyebrow">{b("DOBRO JE ZNATI", "GOOD TO KNOW")}</div>
            <h2>{b("Još nešto vas zanima?", "A few more questions?")}</h2>
          </div>
          <div className="faq-list">
            {[
              [
                b(
                  "Je li Taskado za moju tvrtku?",
                  "Is Taskado right for my business?",
                ),
                b(
                  "Taskado je razvijen za mala i srednja poduzeća koja povezuju projekte, terenske timove, radne naloge i račune. Zatražite demo i zajedno ćemo proći vaš način rada.",
                  "Taskado is built for small and medium businesses connecting projects, field teams, work orders, and invoices. Request a demo and we’ll walk through your workflow together.",
                ),
              ],
              [
                b("Kako započeti probni period?", "How do I start my trial?"),
                b(
                  "Pošaljite nam zahtjev putem obrasca ili e-maila. Naš tim javit će vam se kako bismo dogovorili početak vašeg besplatnog probnog perioda od 30 dana. Kreditna kartica nije potrebna.",
                  "Send a request through the form or by email. Our team will contact you to arrange your free 30-day trial. No credit card is required.",
                ),
              ],
              [
                b(
                  "Mogu li radnici koristiti Taskado na terenu?",
                  "Can my team use Taskado in the field?",
                ),
                b(
                  "Da. Mobilna aplikacija omogućuje primanje zadataka, rad s nalozima, dodavanje fotografija i evidenciju materijala izravno s terena.",
                  "Yes. The mobile app lets workers receive tasks, manage work orders, add photos, and record materials straight from the field.",
                ),
              ],
              [
                b("Kako se određuje cijena?", "How is pricing determined?"),
                b(
                  "Ponuda ovisi o veličini tvrtke, broju radnika i računa. Javite nam svoje potrebe i pripremit ćemo ponudu za vaš tim.",
                  "Your quote depends on company size, number of workers, and invoice volume. Tell us what you need and we’ll prepare a quote for your team.",
                ),
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <Icon name="plus" size={18} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="shell contact-layout">
            <div className="contact-copy">
              <div className="eyebrow">
                <span className="lime-dot" />
                {b(
                  "NAPRAVIMO MJESTA ZA BOLJI RAD",
                  "MAKE ROOM FOR BETTER WORK",
                )}
              </div>
              <h2>
                {b("Vaš sljedeći", "Your next")}
                <br />
                {b("dobar potez.", "great move.")}
                <span className="contact-asterisk">✳</span>
              </h2>
              <p>
                {b(
                  "Recite nam kako radite. Pokazat ćemo vam kako Taskado može pojednostaviti vaš dan.",
                  "Tell us how you work. We’ll show you how Taskado can simplify your day.",
                )}
              </p>
              <div className="contact-details">
                <a href="mailto:taskado@knowit.tech">
                  <Icon name="mail" size={19} />
                  taskado@knowit.tech
                  <Icon size={16} />
                </a>
                <a href="tel:+385953873879">
                  <Icon name="phone" size={19} />
                  +385 95 387 3879
                  <Icon size={16} />
                </a>
              </div>
              <div className="contact-bottom">
                {b("Ljudi iza Taskada", "The people behind Taskado")}
                <a
                  href="https://www.knowit.hr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/knowit-logo.png"
                    alt="Know IT"
                    width="100"
                    height="32"
                  />
                </a>
              </div>
            </div>
            <div className="contact-form-card">
              {sent ? (
                <div className="success-panel" role="status">
                  <span className="success-icon">
                    <Icon name="check" size={32} />
                  </span>
                  <h3>{b("Odličan prvi korak.", "A great first step.")}</h3>
                  <p>
                    {b(
                      "Hvala na javljanju! Naš tim uskoro će vas kontaktirati.",
                      "Thanks for reaching out! Our team will be in touch soon.",
                    )}
                  </p>
                </div>
              ) : (
                <>
                  <div className="form-tabs">
                    <button
                      type="button"
                      aria-pressed={intent === "demo"}
                      onClick={() => {
                        setIntent("demo");
                        setEmailDraft("");
                      }}
                      className={intent === "demo" ? "active" : ""}
                    >
                      {b("Želim demo", "Book a demo")}
                    </button>
                    <button
                      type="button"
                      aria-pressed={intent === "trial"}
                      onClick={() => {
                        setIntent("trial");
                        setEmailDraft("");
                      }}
                      className={intent === "trial" ? "active" : ""}
                    >
                      {b("Želim probati besplatno", "Start a free trial")}
                    </button>
                  </div>
                  <h3>
                    {intent === "demo"
                      ? b(
                          "Upoznajmo vaš posao.",
                          "Let’s get to know your business.",
                        )
                      : b(
                          "Isprobajte bolji radni dan.",
                          "Try a better workday.",
                        )}
                  </h3>
                  <p className="form-intro">
                    {b(
                      "Ostavite nam kontakt. Ostalo ćemo zajedno.",
                      "Leave your details. We’ll take it from there.",
                    )}
                  </p>
                  <form onSubmit={submit} onChange={() => setEmailDraft("")}>
                    <div className="form-row">
                      <label>
                        {b("Ime i prezime", "Full name")}
                        <input
                          name="name"
                          autoComplete="name"
                          required
                          placeholder={b("Vaše ime", "Your name")}
                        />
                      </label>
                      <label>
                        {b("Poslovni e-mail", "Work email")}
                        <input
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="ime@tvrtka.hr"
                        />
                      </label>
                    </div>
                    <div className="form-row">
                      <label>
                        {b("Naziv tvrtke", "Company name")}
                        <input
                          name="company"
                          autoComplete="organization"
                          required
                          placeholder={b("Vaša tvrtka", "Your company")}
                        />
                      </label>
                      <label>
                        {b("Telefon", "Phone")}{" "}
                        <span className="optional">
                          ({b("opcionalno", "optional")})
                        </span>
                        <input
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+385"
                        />
                      </label>
                    </div>
                    <label>
                      {b("Kako vam možemo pomoći?", "How can we help?")}{" "}
                      <span className="optional">
                        ({b("opcionalno", "optional")})
                      </span>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder={b(
                          "Recite nam ukratko o svom timu i poslu…",
                          "Tell us a little about your team and your work…",
                        )}
                      />
                    </label>
                    <div className="honeypot" aria-hidden="true">
                      <label>
                        Website
                        <input
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </label>
                    </div>
                    {error && (
                      <p className="form-error" role="alert">
                        {b(
                          "Slanje nije uspjelo. Pokušajte ponovno ili nam pišite na",
                          "Sending failed. Try again or email us at",
                        )}{" "}
                        <a href="mailto:taskado@knowit.tech">
                          taskado@knowit.tech
                        </a>
                        .
                      </p>
                    )}
                    {emailDraft && (
                      <div className="email-fallback" role="status">
                        <strong>
                          {b(
                            "Vaš zahtjev je spreman za e-mail.",
                            "Your request is ready to email.",
                          )}
                        </strong>
                        <p>
                          {b(
                            "Otvorite ga u svojoj e-mail aplikaciji i pošaljite našem timu.",
                            "Open it in your email app and send it to our team.",
                          )}
                        </p>
                        <a className="text-button" href={emailDraft}>
                          {b(
                            "Otvorite pripremljeni e-mail",
                            "Open prepared email",
                          )}
                          <Icon name="mail" size={16} />
                        </a>
                      </div>
                    )}
                    <button
                      className="button button-full"
                      type="submit"
                      disabled={sending}
                    >
                      {sending
                        ? b("Šaljemo…", "Sending…")
                        : intent === "demo"
                          ? b("Dogovorimo demo", "Let’s book a demo")
                          : b(
                              "Zatražite 30 dana besplatno",
                              "Request your free 30 days",
                            )}
                      <Icon size={18} />
                    </button>
                    <p className="form-note">
                      {b(
                        "Podatke koristimo za odgovor na vaš upit.",
                        "We use your details to respond to your enquiry.",
                      )}
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
        <section className="enterprise shell">
          <div>
            <span className="eyebrow">
              {b("RASTETE? I MI S VAMA.", "GROWING? WE GROW WITH YOU.")}
            </span>
            <h3>
              {b(
                "Velika organizacija. Još veće mogućnosti.",
                "A bigger organisation. Even bigger possibilities.",
              )}
            </h3>
            <p>
              {b(
                "Upoznajte Task, naše rješenje za složene procese i velike timove.",
                "Meet Task, our solution for complex operations and large teams.",
              )}
            </p>
          </div>
          <a
            className="text-button"
            href="https://www.knowit.hr"
            target="_blank"
            rel="noreferrer"
          >
            {b("Upoznajte Task", "Discover Task")}
            <Icon />
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell">
          <div className="footer-top">
            <a href="#" className="brand">
              <img src="/logo.png" alt="Taskado" width="151" height="35" />
            </a>
            <span>
              {b("Manje kaosa. Više obavljenog.", "Less chaos. More done.")}
            </span>
            <a href="#main" className="back-top">
              {b("Na vrh", "Back to top")} ↑
            </a>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Taskado · Know Informacijske
              Tehnologije d.o.o.
            </span>
            <div>
              <a href="#features">{b("Mogućnosti", "Features")}</a>
              <a href="#pricing">{b("Cijene", "Pricing")}</a>
              <a href="mailto:taskado@knowit.tech">{b("Kontakt", "Contact")}</a>
            </div>
            <span>
              {b("Razvijeno u Hrvatskoj", "Made in Croatia")}{" "}
              <span className="flag-croatia" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
export default App;
