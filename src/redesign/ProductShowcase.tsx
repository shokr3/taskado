import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Icon } from "./Icon";
import { ProductDemo } from "./ProductDemo";

export function ProductShowcase() {
  const { language } = useLanguage();
  const b = (hr: string, en: string) => (language === "hr" ? hr : en);
  const [activeTab, setActiveTab] = useState(0);
  const steps = [
    {
      icon: "grid",
      title: b("Projekti", "Projects"),
      detail: b("Planiranje i resursi", "Planning and resources"),
    },
    {
      icon: "phone",
      title: b("Radni nalozi", "Work orders"),
      detail: b("Realizacija na terenu", "Field operations"),
    },
    {
      icon: "document",
      title: b("Računi", "Invoices"),
      detail: b("Obračun i fiskalizacija", "Billing and fiscalization"),
    },
  ];
  return (
    <div className="product-showcase">
      <div className="showcase-topline">
        <span>
          <i /> TASKADO / {b("OPERATIVNI PREGLED", "OPERATIONS OVERVIEW")}
        </span>
        <span>01—03</span>
      </div>
      <div
        className="showcase-flow"
        role="group"
        aria-label={b(
          "Istražite povezane poslovne procese",
          "Explore connected business processes",
        )}
      >
        <div className="showcase-flow-line" aria-hidden="true" />
        {steps.map((step, index) => (
          <button
            key={step.icon}
            type="button"
            aria-pressed={activeTab === index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "selected" : ""}
          >
            <span className="showcase-node">
              <Icon name={step.icon} size={21} />
            </span>
            <span className="showcase-step-title">
              <small>0{index + 1}</small>
              {step.title}
            </span>
          </button>
        ))}
      </div>
      <div className="showcase-connector" aria-hidden="true">
        <svg viewBox="0 0 500 40" preserveAspectRatio="none">
          <path d="M82 0v12q0 8 8 8h152q8 0 8 8v12M250 0v40M418 0v12q0 8-8 8H258q-8 0-8 8v12" />
        </svg>
        <span />
      </div>
      <ProductDemo activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="showcase-bottom">
        <span>
          <i className="showcase-cross" />
          {steps[activeTab].detail}
        </span>
        <a href="#features">
          {b("ISTRAŽITE SUSTAV", "EXPLORE THE PLATFORM")}{" "}
          <Icon name="arrow" size={14} />
        </a>
      </div>
      <div className="showcase-corner corner-tl" aria-hidden="true" />
      <div className="showcase-corner corner-br" aria-hidden="true" />
    </div>
  );
}
