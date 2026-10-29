import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Icon } from "./Icon";

export function ProductDemo() {
  const { language } = useLanguage();
  const b = (hr: string, en: string) => (language === "hr" ? hr : en);
  const [tab, setTab] = useState(0);
  const [done, setDone] = useState(false);
  const tabs = [
    b("Pregled", "Overview"),
    b("Radni nalozi", "Work orders"),
    b("Računi", "Invoices"),
  ];
  return (
    <div className="demo-scene">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="product-window">
        <div className="window-bar">
          <div className="traffic">
            <i />
            <i />
            <i />
          </div>
          <span>
            <Icon name="shield" size={10} /> taskado.app
          </span>
          <span className="window-dots">•••</span>
        </div>
        <div className="product-layout">
          <aside className="app-sidebar">
            <div className="app-mark">
              t<span>°</span>
            </div>
            {["grid", "document", "calendar", "team"].map((icon, i) => (
              <div
                className={i === tab ? "sidebar-icon active" : "sidebar-icon"}
                key={icon}
              >
                <Icon name={icon} size={17} />
              </div>
            ))}
            <div className="sidebar-bottom">MK</div>
          </aside>
          <div className="app-main">
            <div className="app-heading">
              <div>
                <span className="tiny muted">
                  {b("VAŠ RADNI PROSTOR", "YOUR WORKSPACE")}
                </span>
                <h3>
                  {b("Pregled poslovanja", "Business overview")}{" "}
                  <span className="greeting-dot" />
                </h3>
              </div>
              <div className="app-avatar">MK</div>
            </div>
            <div
              className="app-tabs"
              role="tablist"
              aria-label={b(
                "Interaktivni prikaz proizvoda",
                "Interactive product preview",
              )}
            >
              {tabs.map((t, i) => (
                <button
                  key={t}
                  role="tab"
                  id={`demo-tab-${i}`}
                  aria-selected={tab === i}
                  aria-controls="demo-panel"
                  tabIndex={tab === i ? 0 : -1}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      const next = (i + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                      setTab(next);
                      document.getElementById(`demo-tab-${next}`)?.focus();
                    }
                  }}
                  className={tab === i ? "selected" : ""}
                  onClick={() => setTab(i)}
                >
                  {t}
                </button>
              ))}
            </div>
            <div
              id="demo-panel"
              role="tabpanel"
              aria-labelledby={`demo-tab-${tab}`}
              className="demo-panel"
            >
              {tab === 0 ? (
                <>
                  <div className="stats-row">
                    <div>
                      <span>{b("Aktivni projekti", "Active projects")}</span>
                      <strong>
                        12 <small>↗ 2</small>
                      </strong>
                      <div className="mini-bars">
                        {[30, 48, 40, 65, 55, 85, 72, 100].map((h, i) => (
                          <i key={i} style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <span>{b("Završeni zadaci", "Tasks completed")}</span>
                      <strong>
                        {done ? 25 : 24}
                        <small className="neutral"> / 32</small>
                      </strong>
                      <div className="stat-progress">
                        <i style={{ width: done ? "78%" : "75%" }} />
                      </div>
                    </div>
                    <div>
                      <span>
                        {b("Prihod ovog mjeseca", "Revenue this month")}
                      </span>
                      <strong>
                        18.450 <small className="neutral">€</small>
                      </strong>
                      <span className="stat-label">
                        {b("Pregled izdanih računa", "Issued invoice summary")}
                      </span>
                    </div>
                  </div>
                  <div className="task-heading">
                    <h4>
                      {b(
                        "Pregled današnjih aktivnosti",
                        "Today’s scheduled activities",
                      )}
                    </h4>
                    <span>03</span>
                  </div>
                  <div className="task-list">
                    <button
                      className={`task-row ${done ? "is-done" : ""}`}
                      onClick={() => setDone(!done)}
                      aria-pressed={done}
                    >
                      <span className="task-check">
                        {done && <Icon name="check" size={11} />}
                      </span>
                      <div>
                        <strong>
                          {b(
                            "Servis klimatizacije",
                            "Air conditioning service",
                          )}
                        </strong>
                        <small>
                          {b(
                            "Hotel Park · Radni nalog #1042",
                            "Hotel Park · Work order #1042",
                          )}
                        </small>
                      </div>
                      <span className={`status ${done ? "green" : "orange"}`}>
                        {done
                          ? b("Završeno", "Done")
                          : b("U tijeku", "In progress")}
                      </span>
                      <span className="person blue">IP</span>
                    </button>
                    <div className="task-row">
                      <span className="task-check" />
                      <div>
                        <strong>
                          {b(
                            "Pregled elektroinstalacija",
                            "Electrical inspection",
                          )}
                        </strong>
                        <small>
                          {b(
                            "Poslovni centar · Radni nalog #1043",
                            "Business centre · Work order #1043",
                          )}
                        </small>
                      </div>
                      <span className="status lavender">
                        {b("Planirano", "Scheduled")}
                      </span>
                      <span className="person peach">AK</span>
                    </div>
                    <div className="task-row is-done">
                      <span className="task-check">
                        <Icon name="check" size={11} />
                      </span>
                      <div>
                        <strong>
                          {b("Ponuda za održavanje", "Maintenance proposal")}
                        </strong>
                        <small>
                          {b(
                            "Villa Aurora · Projekt #218",
                            "Villa Aurora · Project #218",
                          )}
                        </small>
                      </div>
                      <span className="status green">
                        {b("Završeno", "Done")}
                      </span>
                      <span className="person mint">MK</span>
                    </div>
                  </div>
                  <div className="team-summary">
                    <div className="avatar-stack">
                      <span className="person blue">IP</span>
                      <span className="person peach">AK</span>
                      <span className="person mint">MK</span>
                    </div>
                    <span>
                      {b("Status terenskih timova", "Field team status")}
                    </span>
                    <i className="online" />
                  </div>
                </>
              ) : tab === 1 ? (
                <div className="order-demo">
                  <span className={`status ${done ? "green" : "orange"}`}>
                    {done
                      ? b("Završeno", "Done")
                      : b("U tijeku", "In progress")}
                  </span>
                  <h4>
                    {b("Servis klimatizacije", "Air conditioning service")}
                  </h4>
                  <p>
                    <Icon name="pin" size={14} /> Hotel Park, Zagreb
                  </p>
                  <div className="order-person">
                    <span className="person blue">IP</span>
                    <div>
                      <strong>Ivan P.</strong>
                      <small>
                        {b("Dodijeljeni tehničar", "Assigned technician")}
                      </small>
                    </div>
                    <Icon name="phone" size={19} />
                  </div>
                  {[
                    b("Pregled i dijagnostika", "Inspection and diagnostics"),
                    b("Zamjena filtera", "Filter replacement"),
                    b("Završno testiranje", "Final testing"),
                  ].map((x, i) => (
                    <div className="order-step" key={x}>
                      <span className={i < 2 || done ? "checked" : ""}>
                        <Icon name="check" size={13} />
                      </span>
                      {x}
                    </div>
                  ))}
                  <button
                    className="demo-action"
                    onClick={() => setDone(!done)}
                  >
                    {done
                      ? b("Ponovno otvori nalog", "Reopen work order")
                      : b("Označi kao završeno", "Mark as complete")}
                    <Icon name="check" size={15} />
                  </button>
                </div>
              ) : (
                <div className="invoice-demo">
                  <div className="invoice-top">
                    <Icon name="document" size={28} />
                    <span className="status green">{b("Plaćeno", "Paid")}</span>
                  </div>
                  <span className="tiny muted">
                    {b("RAČUN", "INVOICE")} #2026-042
                  </span>
                  <h4>Hotel Park</h4>
                  <p>
                    {b(
                      "Servis i održavanje klimatizacije",
                      "Air conditioning service and maintenance",
                    )}
                  </p>
                  <div className="invoice-line">
                    <span>
                      {b("Usluge i materijal", "Services and materials")}
                    </span>
                    <strong>240,00 €</strong>
                  </div>
                  <div className="invoice-line">
                    <span>PDV / VAT 25%</span>
                    <strong>60,00 €</strong>
                  </div>
                  <div className="invoice-total">
                    <span>{b("Ukupno", "Total")}</span>
                    <strong>300,00 €</strong>
                  </div>
                  <div className="invoice-note">
                    <Icon name="check" size={14} />
                    {b(
                      "Račun povezan s radnim nalogom",
                      "Invoice linked to a work order",
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="demo-disclaimer">
              <i className="online" />{" "}
              {b(
                "Interaktivni prikaz · Ilustrativni podaci",
                "Interactive preview · Illustrative data",
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="floating-note">
        <span className="note-icon">
          <Icon name="check" size={19} />
        </span>
        <div>
          <strong>
            {done
              ? b("Radni nalog je završen.", "Work order completed.")
              : b("Fiskalizacija 1.0 i 2.0", "Fiscalization 1.0 and 2.0")}{" "}
          </strong>
          <span>
            {b("Ugrađene funkcionalnosti sustava", "Included as standard")}
          </span>
        </div>
      </div>
      <div className="demo-caption">
        {b(
          "Interaktivni pregled funkcionalnosti",
          "Interactive platform overview",
        )}
      </div>
    </div>
  );
}
