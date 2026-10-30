# Taskado website redesign

Branch: `codex/taskado-redesign`

## Design direction

A product-led marketing site positioned as integrated business software for Croatian companies, with Fiscalization 1.0 and 2.0 included as standard. Warm neutral surfaces, oversized Manrope typography, a cobalt operations canvas, and restrained orange accents retain the Taskado brand while giving the page a more distinctive editorial identity.

The visitor journey connects the daily workflow (plan → field work → invoice), feature demonstrations, industry-specific examples, local invoicing, a transparent trial offer, practical FAQs, and a dedicated demo/trial enquiry form. Illustrative product data is identified; no customer logos, testimonials, or performance metrics were invented. AI remains explicitly upcoming. Existing company, enterprise, contact, and login destinations are retained.

## Main files

- `src/App.tsx`: marketing page, industry tabs, FAQs, and enquiry form.
- `src/redesign/ProductShowcase.tsx`: connected three-stage product canvas with synchronized controls.
- `src/redesign/ProductDemo.tsx`: interactive overview, work orders, task completion, and invoice preview.
- `src/redesign/creative.css`: creative direction, contrasting section layouts, and responsive refinements.
- `src/redesign/Icon.tsx`: shared SVG icon set.
- `src/index.css`: responsive visual system, including reduced-motion styles.
- `src/i18n/LanguageContext.tsx`: language preference persistence.

The existing React/Vite toolchain and dependencies are retained. Older section components remain available as reference and are no longer mounted by App.

## Enquiries

Set `VITE_WEB3FORMS_ACCESS_KEY` in the build environment to enable the existing Web3Forms integration. It is a public form access key, not a server secret. Rebuild after changing it.

Without the key, submitting the form prepares an email and presents an explicit “Open prepared email” link. The visitor sends it using their email application. The page does not report a successful submission when no message has been sent. Network failures retain form input and show a retry/direct-contact option. Trial and demo selections produce distinct enquiry subjects.

## Accessibility and responsive behavior

Semantic landmarks, labeled inputs, native form validation, visible focus rings, skip navigation, keyboard-operated tabs, live submission feedback, an Escape-close mobile menu, and reduced-motion support are included. The page works at mobile, tablet, and desktop widths. The language selection updates the document language, title, and description and persists when local storage is available.

## Validation

- TypeScript project build and Vite production bundle.
- Browser checks of Croatian and English, language persistence, overview/work-order/invoice tabs, task completion and counter updates, industry panels, mobile navigation, FAQs, trial intent, required form fields, and the unconfigured email fallback.
- Responsive checks at 320, 390, 768, 1024, and 1440 CSS pixels.

The local agent environment's native esbuild file reads stall in the Documents checkout. The standard unchanged `npm run build` completes from a mirrored temporary directory under `/private/tmp`; generated assets are copied back to the checkout for packaging. No runtime workaround or dependency change is required by the website.

The retained dependency tree reports existing npm audit findings; dependency upgrades are outside this visual redesign. External form delivery requires a configured key and was not tested by sending a real enquiry.

## Croatian market copy revision

The owner confirmed that Taskado provides Fiscalization 1.0 and 2.0 out of the box. This capability is now prominent in the announcement, hero, navigation, first substantive section, workflow, pricing, FAQ, contact copy, and search/social metadata. Both Croatian and English use a professional business register with specific feature descriptions rather than conversational slogans. The visual direction and existing enquiry behavior are retained.

Fiscal terminology was checked against the [Croatian Tax Administration overview](https://porezna.gov.hr/fiskalizacija) and [eRačun guidance](https://porezna.gov.hr/fiskalizacija/bezgotovinski-racuni/eracun). The page distinguishes fiscalization in final consumption from e-invoices and their fiscalization. It does not introduce claims about regulatory certification, blanket legal compliance, service pricing, or deadlines.

## Headline refinement

The previous headline revision read “Upravljanje poslovanjem u jednom sustavu.” (English: “Business management in one platform.”). It leads with the broader platform value. Fiscalization 1.0 and 2.0 remain in the supporting copy and dedicated section. Browser, social, and Site titles use the broader positioning.

## Creative design revision

The selected headline is “Od plana do naplate. Sve povezano.” (English: “From planning to payment. All connected.”). The design uses an operational-flow concept: visitors select projects, work orders, or invoicing in a custom cobalt canvas, and both sets of preview controls stay synchronized. A dark workflow section, orange scheduling panel, large fiscalization numerals, sharper geometry, and a cobalt contact section create a more varied page composition.

Fiscalization remains part of the broader product story; its detailed section follows the operational features and industry examples. No new product claims, customer references, or performance metrics were added. Croatian and English remain supported. The additional preview controls are ordinary keyboard-operable buttons, and the internal product tabs retain their arrow-key navigation.

Validation covers the synchronized preview controls, work-order completion state, both languages, and responsive widths from 320 to 1440 pixels. Existing form behavior is retained.
