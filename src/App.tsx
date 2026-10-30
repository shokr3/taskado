import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { useLanguage } from "./i18n/LanguageContext";
import { Icon } from "./redesign/Icon";
import { ProductShowcase } from "./redesign/ProductShowcase";

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
        "Upravljanje servisnim intervencijama.",
        "Service operations management.",
      ),
      b(
        "Planirajte intervencije, dodjeljujte naloge tehničarima i pratite realizaciju. Radni sati, utrošeni materijali i dokumentacija evidentiraju se izravno na terenu.",
        "Schedule service visits, assign work orders to technicians, and track completion. Working hours, materials, and documentation are recorded directly in the field.",
      ),
      b("Servis klimatizacije", "Air conditioning service"),
      b("Pregled uređaja", "Equipment inspection"),
    ],
    [
      b(
        "Planiranje i evidencija održavanja.",
        "Maintenance planning and records.",
      ),
      b(
        "Organizirajte redovito održavanje, rasporedite terenske timove i pratite izvršenje radova. Objedinite dokumentaciju i evidenciju aktivnosti za svaku lokaciju.",
        "Coordinate scheduled maintenance, assign field teams, and track completed work. Keep documentation and activity records for each location in one system.",
      ),
      b("Održavanje objekta", "Property maintenance"),
      b("Pregled instalacija", "Installation inspection"),
    ],
    [
      b(
        "Pregled projekata, rokova i budžeta.",
        "Project, deadline, and budget oversight.",
      ),
      b(
        "Definirajte zadatke i odgovornosti, pratite rokove i nadzirite projektne budžete. Voditelji i članovi tima rade s istim podacima o napretku projekta.",
        "Define tasks and responsibilities, monitor deadlines, and oversee project budgets. Managers and team members share the same view of project progress.",
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
        ? "Taskado — Od plana do naplate. Sve povezano."
        : "Taskado — From planning to payment. All connected.";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        language === "hr"
          ? "Upravljanje projektima, radnim nalozima, timovima i računima uz ugrađenu Fiskalizaciju 1.0 i 2.0. Poslovni sustav za hrvatska poduzeća. Zatražite demonstraciju."
          : "Manage projects, work orders, teams, and invoices with built-in Fiscalization 1.0 and 2.0. Business software for Croatian companies. Request a demonstration.",
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
          {b("ZA HRVATSKO TRŽIŠTE", "FOR THE CROATIAN MARKET")}
        </span>
        <span>
          {b(
            "Fiskalizacija 1.0 i 2.0 uključene su u Taskado.",
            "Fiscalization 1.0 and 2.0 included as standard.",
          )}
        </span>
        <a
          href="#fiscalization"
          aria-label={b("Ugrađena fiskalizacija", "Built-in fiscalization")}
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
              <a href="#fiscalization" onClick={() => setMenuOpen(false)}>
                {b("Fiskalizacija", "Fiscalization")}
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
                "POVEZANO POSLOVANJE. RAZVIJENO U HRVATSKOJ.",
                "CONNECTED BUSINESS. BUILT IN CROATIA.",
              )}
            </div>
            <h1>
              {b("Od plana", "From planning")}
              <br />
              {b("do naplate.", "to payment.")}
              <br />
              <span className="accent-word">
                {b("Sve povezano.", "All connected.")}
              </span>
            </h1>
            <p className="hero-description">
              {b(
                "Povežite planiranje, terenski rad i naplatu u jedan operativni tijek. Upravljajte projektima, timovima i računima uz ugrađenu Fiskalizaciju 1.0 i 2.0.",
                "Connect planning, field operations, and billing in one continuous workflow. Manage projects, teams, and invoices with built-in Fiscalization 1.0 and 2.0.",
              )}
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href="#contact"
                onClick={() => goContact("demo")}
              >
                {b("Zatražite demonstraciju", "Request a demonstration")}
                <Icon />
              </a>
              <a className="text-button" href="#workflow">
                <span className="play-circle">
                  <Icon name="play" size={14} />
                </span>
                {b("Pregled funkcionalnosti", "Explore the platform")}
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
          <ProductShowcase />
        </section>
        <div className="capability-strip shell">
          <span>
            {b(
              "OD PRVOG ZADATKA DO RAČUNA",
              "FROM THE FIRST TASK TO THE INVOICE",
            )}
          </span>
          <div>
            {[
              ["grid", b("Projekti", "Projects")],
              ["document", b("Radni nalozi", "Work orders")],
              ["team", b("Timovi", "Teams")],
              ["calendar", b("Raspored", "Scheduling")],
              [
                "shield",
                b("Fiskalizacija 1.0 i 2.0", "Fiscalization 1.0 & 2.0"),
              ],
            ].map(([i, t]) => (
              <span key={i}>
                <Icon name={i} size={18} />
                {t}
              </span>
            ))}
          </div>
        </div>
        <section className="workflow-band" id="workflow">
          <div className="section workflow shell">
            <div className="section-top">
              <div>
                <div className="eyebrow">
                  01 /{" "}
                  {b(
                    "POVEZANI POSLOVNI PROCESI",
                    "CONNECTED BUSINESS PROCESSES",
                  )}
                </div>
                <h2>
                  {b("Od planiranja", "From planning")}
                  <br />
                  {b("do izdanog računa.", "to issued invoices.")}
                </h2>
              </div>
              <p>
                {b(
                  "Povežite planiranje, izvršenje i obračun usluga. Jedinstvena evidencija smanjuje ponavljanje unosa i olakšava praćenje svakog koraka poslovnog procesa.",
                  "Connect planning, execution, and service billing. A shared record reduces duplicate entry and makes every stage of the business process easier to track.",
                )}
              </p>
            </div>
            <div className="workflow-grid">
              {[
                [
                  "01",
                  "calendar",
                  b("Planiranje i raspored", "Planning and scheduling"),
                  b(
                    "Rasporedite projekte, zadatke i zaposlenike prema prioritetima i raspoloživim resursima.",
                    "Schedule projects, tasks, and employees according to priorities and available resources.",
                  ),
                  b("Pregled raspoloživih resursa", "Resource availability"),
                ],
                [
                  "02",
                  "phone",
                  b("Izvršenje i evidencija", "Execution and records"),
                  b(
                    "Pratite status naloga te evidentirajte rad, materijale i fotografije putem mobilne aplikacije.",
                    "Track work order status and record labour, materials, and photos using the mobile app.",
                  ),
                  b(
                    "Podaci dostupni uredu i terenu",
                    "Shared office and field records",
                  ),
                ],
                [
                  "03",
                  "document",
                  b(
                    "Izdavanje i fiskalizacija računa",
                    "Invoicing and fiscalization",
                  ),
                  b(
                    "Izradite račun na temelju izvršenog naloga uz ugrađenu podršku za Fiskalizaciju 1.0 i 2.0.",
                    "Create an invoice from a completed work order with built-in support for Fiscalization 1.0 and 2.0.",
                  ),
                  b(
                    "Povezan operativni i financijski proces",
                    "Connected operations and invoicing",
                  ),
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
          </div>
        </section>
        <section className="feature-section" id="features">
          <div className="shell section">
            <div className="section-top">
              <div>
                <div className="eyebrow">
                  02 / {b("FUNKCIONALNOSTI SUSTAVA", "PLATFORM CAPABILITIES")}
                </div>
                <h2>
                  {b("Upravljanje projektima.", "Project management.")}
                  <br />
                  <span className="muted-heading">
                    {b(
                      "Pregled resursa i troškova.",
                      "Resource and cost visibility.",
                    )}
                  </span>
                </h2>
              </div>
              <a
                href="#contact"
                className="text-button"
                onClick={() => goContact("demo")}
              >
                {b("Zatražite prezentaciju", "Request a presentation")}
                <Icon />
              </a>
            </div>
            <div className="feature-layout">
              <article className="feature-project">
                <div className="feature-card-copy">
                  <span className="feature-icon">
                    <Icon name="grid" size={22} />
                  </span>
                  <h3>{b("Projekti i zadaci", "Projects and tasks")}</h3>
                  <p>
                    {b(
                      "Definirajte projekte, dodijelite zadatke i pratite napredak uz pregled rokova i budžeta. Informacije o realizaciji dostupne su voditeljima i članovima tima.",
                      "Define projects, assign tasks, and monitor progress alongside deadlines and budgets. Managers and team members have a shared view of delivery.",
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
                  {b("Raspored rada", "Work scheduling")}
                  <br />
                  {b("i dostupnost timova.", "and team availability.")}
                </h3>
                <p>
                  {b(
                    "Planirajte aktivnosti u vizualnom kalendaru i uskladite raspored s dostupnošću zaposlenika.",
                    "Plan activities in a visual calendar and align schedules with employee availability.",
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
                  b("Organizacija timova", "Team organisation"),
                  b(
                    "Upravljajte odgovornostima, dostupnošću i raspodjelom zadataka među zaposlenicima.",
                    "Manage responsibilities, availability, and task allocation across your workforce.",
                  ),
                ],
                [
                  "document",
                  b("Ponude i katalog usluga", "Quotes and service catalogue"),
                  b(
                    "Pripremite ponude na temelju vlastitog kataloga usluga i pripadajućih cijena.",
                    "Prepare quotations using your service catalogue and associated prices.",
                  ),
                ],
                [
                  "spark",
                  b("AI podrška u razvoju", "AI capabilities in development"),
                  b(
                    "U razvoju su AI asistenti za podršku planiranju i analizi poslovnih podataka.",
                    "AI assistants for planning and business data analysis are in development.",
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
                03 / {b("RJEŠENJA PREMA DJELATNOSTI", "SOLUTIONS BY INDUSTRY")}
              </div>
              <h2>
                {b("Upravljanje radom", "Manage operations")}
                <br />
                {b("u uredu i na terenu.", "across office and field teams.")}
              </h2>
            </div>
            <p>
              {b(
                "Taskado je namijenjen servisnim tvrtkama, pružateljima usluga održavanja i poduzećima koja organiziraju rad kroz projekte i naloge.",
                "Taskado supports service companies, maintenance providers, and businesses that organise their work through projects and work orders.",
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
                {b("Razgovarajte s našim timom", "Speak to our team")}
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
                <h4>{b("Pregled radnih naloga", "Work order overview")}</h4>
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
                  {b(
                    "Sinkronizacija terenskih podataka",
                    "Field data synchronisation",
                  )}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="fiscal-section shell" id="fiscalization">
          <div className="fiscal-visual">
            <span className="fiscal-watermark" aria-hidden="true">
              1.0
              <br />
              2.0
            </span>
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
              <span>1.0 + 2.0</span>
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
              {b("Fiskalizacija 1.0 i 2.0", "Fiscalization 1.0 and 2.0")}
              <br />
              {b("u jednom rješenju.", "in one platform.")}
            </h2>
            <p>
              {b(
                "Fiskalizacija je sastavni dio Taskada, dostupna kao standardna funkcionalnost. Povežite izdavanje računa i eRačuna s projektima, izvršenim radnim nalozima i evidencijom usluga.",
                "Fiscalization is built into Taskado and included as standard. Connect invoices and e-invoices with projects, completed work orders, and service records.",
              )}
            </p>
            <div className="fiscal-capabilities">
              <article>
                <span className="fiscal-version">1.0</span>
                <div>
                  <h3>
                    {b(
                      "Fiskalizacija u krajnjoj potrošnji",
                      "Fiscalization for final consumption",
                    )}
                  </h3>
                  <p>
                    {b(
                      "Izdavanje i fiskalizacija računa prema građanima, povezani s evidencijom obavljenih usluga.",
                      "Issue and fiscalize consumer invoices, connected to records of completed services.",
                    )}
                  </p>
                </div>
              </article>
              <article>
                <span className="fiscal-version">2.0</span>
                <div>
                  <h3>
                    {b(
                      "eRačuni i njihova fiskalizacija",
                      "E-invoices and their fiscalization",
                    )}
                  </h3>
                  <p>
                    {b(
                      "Podrška za eRačune i njihovu fiskalizaciju unutar istog poslovnog procesa i korisničkog sučelja.",
                      "Support for e-invoices and their fiscalization within the same business process and interface.",
                    )}
                  </p>
                </div>
              </article>
            </div>
            <a
              className="text-button"
              href="#contact"
              onClick={() => goContact("demo")}
            >
              {b(
                "Zatražite prezentaciju fiskalizacije",
                "Request a fiscalization demonstration",
              )}
              <Icon />
            </a>
            <a
              className="fiscal-reference"
              href="https://porezna.gov.hr/fiskalizacija"
              target="_blank"
              rel="noreferrer"
            >
              {b(
                "Službene informacije Porezne uprave",
                "Official Croatian Tax Administration information",
              )}{" "}
              ↗
            </a>
          </div>
        </section>
        <section className="section pricing shell" id="pricing">
          <div className="pricing-copy">
            <div className="eyebrow">
              04 / {b("PROBNO KORIŠTENJE I CIJENE", "TRIAL AND PRICING")}
            </div>
            <h2>
              {b("Rješenje prilagođeno", "A solution tailored")}
              <br />
              {b("vašem poslovanju.", "to your business.")}
            </h2>
            <p>
              {b(
                "Provjerite odgovara li Taskado vašim procesima tijekom 30 dana besplatnog korištenja. Komercijalnu ponudu prilagođavamo broju korisnika i opsegu poslovanja.",
                "Evaluate Taskado against your business processes with a free 30-day trial. Your commercial quote is tailored to your user count and scope of operations.",
              )}
            </p>
            <a
              href="#contact"
              className="text-button"
              onClick={() => goContact("demo")}
            >
              {b("Zatražite individualnu ponudu", "Request a tailored quote")}
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
                {b("PROBNO KORIŠTENJE SUSTAVA", "EVALUATE THE PLATFORM")}
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
                "Pristup funkcionalnostima sustava bez obveze ugovaranja.",
                "Access platform capabilities with no contractual commitment.",
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
                  "Ponude, računi i eRačuni",
                  "Quotes, invoices, and e-invoices",
                ),
                b(
                  "Ugrađena Fiskalizacija 1.0 i 2.0",
                  "Built-in Fiscalization 1.0 and 2.0",
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
            <div className="eyebrow">
              {b("ČESTA PITANJA", "FREQUENTLY ASKED QUESTIONS")}
            </div>
            <h2>
              {b(
                "Informacije za vaše poslovanje",
                "Information for your business",
              )}
            </h2>
          </div>
          <div className="faq-list">
            {[
              [
                b(
                  "Jesu li Fiskalizacija 1.0 i 2.0 uključene u sustav?",
                  "Are Fiscalization 1.0 and 2.0 included?",
                ),
                b(
                  "Da. Taskado standardno uključuje Fiskalizaciju 1.0 za račune u krajnjoj potrošnji te Fiskalizaciju 2.0 za eRačune. Funkcionalnosti su dio istog sustava u kojem upravljate projektima, radnim nalozima i računima.",
                  "Yes. Taskado includes Fiscalization 1.0 for consumer invoices and Fiscalization 2.0 for e-invoices as standard. These capabilities are part of the same platform used to manage projects, work orders, and invoicing.",
                ),
              ],
              [
                b(
                  "Je li Taskado za moju tvrtku?",
                  "Is Taskado right for my business?",
                ),
                b(
                  "Taskado je namijenjen malim i srednjim poduzećima na hrvatskom tržištu, osobito servisnim tvrtkama, pružateljima usluga održavanja i projektnim timovima. Objedinjuje operativno upravljanje, izdavanje računa te Fiskalizaciju 1.0 i 2.0.",
                  "Taskado is designed for small and medium businesses operating in Croatia, particularly service companies, maintenance providers, and project teams. It combines operational management, invoicing, and Fiscalization 1.0 and 2.0.",
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
                  "PREZENTACIJA I SAVJETOVANJE",
                  "DEMONSTRATION AND CONSULTATION",
                )}
              </div>
              <h2>
                {b("Dogovorite", "Book a")}
                <br />
                {b("prezentaciju.", "demonstration.")}
              </h2>
              <p>
                {b(
                  "Predstavit ćemo vam upravljanje projektima, terenskim radom i računima te ugrađenu Fiskalizaciju 1.0 i 2.0, uz osvrt na potrebe vašeg poduzeća.",
                  "Our team will demonstrate project management, field operations, invoicing, and built-in Fiscalization 1.0 and 2.0 in the context of your business requirements.",
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
                {b("Razvoj i podrška", "Development and support")}
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
                  <h3>
                    {b(
                      "Zahtjev je zaprimljen.",
                      "Your request has been received.",
                    )}
                  </h3>
                  <p>
                    {b(
                      "Zahvaljujemo na upitu. Naš tim kontaktirat će vas radi dogovora o sljedećim koracima.",
                      "Thank you for your enquiry. Our team will contact you to arrange the next steps.",
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
                      {b("Prezentacija sustava", "Platform demonstration")}
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
                      {b("Probno korištenje", "Free trial")}
                    </button>
                  </div>
                  <h3>
                    {intent === "demo"
                      ? b(
                          "Zatražite prezentaciju sustava.",
                          "Request a platform demonstration.",
                        )
                      : b(
                          "Zatražite probno korištenje.",
                          "Request a free trial.",
                        )}
                  </h3>
                  <p className="form-intro">
                    {b(
                      "Unesite podatke tvrtke i kontakt osobe. Naš tim javit će vam se radi dogovora.",
                      "Provide your company and contact details. Our team will contact you to make arrangements.",
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
                          "Navedite djelatnost, broj korisnika i funkcionalnosti koje vas zanimaju.",
                          "Describe your industry, user count, and the capabilities you would like to evaluate.",
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
                          ? b(
                              "Pošaljite zahtjev za prezentaciju",
                              "Send demonstration request",
                            )
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
              {b("RJEŠENJA ZA VELIKA PODUZEĆA", "ENTERPRISE SOLUTIONS")}
            </span>
            <h3>
              {b(
                "Podrška složenim poslovnim procesima.",
                "Support for complex business operations.",
              )}
            </h3>
            <p>
              {b(
                "Za veće organizacije i napredne operativne zahtjeve dostupno je naše poslovno rješenje Task.",
                "Our Task business solution is available for larger organisations with advanced operational requirements.",
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
              {b(
                "Poslovni sustav za hrvatska poduzeća.",
                "Business software for Croatian companies.",
              )}
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
