1. Global Execution Overview

Architectural philosophy: Use a Next.js (App Router) codebase with a mobile-first, static-first mindset. Most pages are statically generated (SSG) at build time, producing HTML cached by a CDN. This maximizes performance and reliability, while allowing dynamic data (e.g. forms, CMS content) where needed. The architecture is component-driven: global layouts wrap shared UI (header, nav, footer) and each page is defined by its own page.tsx, enabling clear routing (see Next.js docs). Routes are organized by folder structure, with each folder name becoming a URL segment (e.g. app/services/prieres/page.tsx maps to /services/prieres).

Ethical constraints summary: All design decisions prioritize transparency, dignity, and user trust. We avoid any dark/deceptive patterns (misleading prompts, countdowns, guilt tactics, etc.) – such practices are proven unethical and “legally problematic”. Instead, the UX is honest and service-oriented: one clear call-to-action per page, neutral language, factual feedback and privacy-preserving analytics. For example, we use a privacy-first analytics tool (Matomo) that requires no cookie consent and does not exploit user data. In short, every feature must “serve the community” and pass a clarity/utility check, or else it’s excluded.

Multilingual handling strategy: We support French (default) and English via Next.js’s built-in internationalization. We organize content under locale subpaths (e.g. app/[lang]/…) as recommended. In practice, the codebase has an app/[fr] folder and an app/[en] folder (or uses Next.js i18n config) so that every page is rendered for both /fr/... and /en/.... The user’s browser language can auto-select the appropriate locale (via Accept-Language negotiation). Translations live in the CMS and are fetched by page code, ensuring all text content is bilingual at runtime.

CMS integration approach: We use Sanity (or a similar headless CMS) to manage text and media. Sanity’s schema-driven content models define pages, services, announcements, etc. (each with French and English fields). The Next.js site fetches CMS data at build time (using static props or dynamic fetch in page code), so that content editors can update things without code deployments. Only authenticated admins have CMS access. To prevent blank pages, defaults (e.g. placeholder text or “Coming Soon”) ensure no empty states appear publicly if content is missing.

2. Site Architecture & Routing (Next.js)

App Router structure: We use Next.js’s App Router with a top-level app/ directory. Within app/, we create subfolders for each section. For example:

app/[lang]/layout.tsx – the root layout for both locales (contains global header/nav, footer).

app/[lang]/page.tsx – the homepage (/ path).

app/[lang]/centre/ – folder for “Le Centre” pages (with its own page.tsx and nested layout if needed).

Similarly, app/[lang]/services/, app/[lang]/engagement/, etc. Nested sections (e.g. “/engagement/benevolat”) are subfolders. Layout files wrap child pages (e.g. app/[lang]/engagement/layout.tsx wraps /engagement/*). In Next.js, “folders define URL segments” and “Layouts at any level wrap their child segments”.

Page routes (FR/EN): We include both French and English routes. The folder app/[lang]/ (with lang parameter) enables dynamic locale routing. For example, a page at app/[lang]/engagement/benevolat/page.tsx will serve both /fr/engagement/benevolat and /en/engagement/volunteer (with content based on the lang param). The French versions use native URLs (e.g. /fr/engagement/benevolat), and English can use either /en/engagement/volunteer or /engagement/volunteer with a redirect. The default homepage is / (in French). The router can fallback or redirect to /fr or /en based on user language.

Layouts (global, section-level): A single global root layout (e.g. app/[lang]/layout.tsx) contains the shared header (with nav, language switcher, prayer-times link) and footer. Section-level layouts (e.g. app/[lang]/services/layout.tsx) can add sub-navigation or banners for that section. Each layout specifies the common structure and includes <Metadata> tags for SEO defaults. The layout files export a metadata object (Next.js Metadata API) to define titles, descriptions, and open graph info for each page scope.

Shared components: Key reusable components include: a Navigation Bar (responsive menu with links to all main pages and a fixed “Prayer Times” widget), a Language Switcher (toggling /fr vs /en), and UI primitives like Button, Card, Form Field, Modal/Alert. Components are developed with React and styled via CSS modules or a design system (see next section). Each component is accessible (keyboard-focusable, ARIA labels if needed) and themable via shared CSS tokens. For example, the Button uses props like primary and handles disabled/hover/focus states; the NavBar highlights the active page link.

Metadata handling (SEO): We use Next.js’s Metadata API. Each page.tsx (and higher-level layout.tsx) can export const metadata: Metadata = { title, description, }. This ensures one <title> and <meta> per page for SEO. Titles follow the form “H1 | Centre As-Salam, Montréal”. Descriptions are factual (no clickbait). We also include canonical URLs and sitemap.xml. Open Graph tags (og:title, og:description, og:image) are set via metadata or in a custom head. Robots.txt disallows nothing (all main pages indexable). All image assets have descriptive alt text for accessibility.

3. Page-Level Technical Briefs

For each page, we follow the content structure (Pilier 4). Below are summaries for the required pages:

Accueil (/ – Home):

Purpose: Welcome users, reassure continuity (“même âme, nouveau lieu”), and direct them to key info.

Primary Intent: Orientation/Identification (“Who are we?”) before any ask.

H1 Logic: Something like “Centre communautaire As-Salam – Montréal” (clearly states identity and location). Subtitle “Au service de la communauté depuis 2010”.

Section structure:

Empathie: A brief line acknowledging visitor concern (e.g. “Vous vous demandez si le Centre continue malgré le déménagement?”).

Compréhension: Concise text on continuity (“14 ans d’existence, même imam” and mention new address). Possibly a short timeline or quote.

Services Overview: Cards/links to Horaires de prière, Services, Engagement, Contact (the four pillars: identity, orientation, engagement).

Proof point: Factoids (“300 familles desservies”, logos of partner associations, testimonial snippet).

Objection: FAQ-style bullet (“Tout musulman bienvenu, prière libre et gratuite”).

CTA: Single primary CTA “Découvrir le centre” linking to /centre. This is phrased as service (“discover the center”) not a donation ask.

Post-action micro-copy: e.g. “Vous êtes redirigé vers la page À propos…”. On click maybe smooth scroll, but presumably no form here.

SEO metadata: Title “Centre As-Salam – Montréal | Accueil”; Description “Centre communautaire musulman établi à Montréal. Horaires de prière, cours, activités et contact.”

Accessibility: Ensure hero text has high contrast; buttons focus ring; nav menu toggles via keyboard; skip-links to main content; alt text for any images (e.g. photo of building: alt="Façade du Centre As-Salam").

Le Centre (À propos étendu) (/centre):

Purpose: Present history, mission, values and team to build legitimacy.

Intent: Identity & continuity.

H1: “Le Centre As-Salam – Historique et mission”. Subtitle or intro: “14 ans de service à Montréal”.

Structure:

Empathie: “Vous vous demandez qui est derrière As-Salam?”

Compréhension: History timeline (“Fondé en 2010 par…”), mention founding imam, past location, continuity of leadership.

Solution/Service: Mission statement (“Offrir un espace de prière et de formation accessible”).

Bénéfices: “Un lieu stable où pratiquer, apprendre, et soutenir la communauté” (practical benefits like learning Arabic, community support).

Preuve: Photos of founder/imam with bio, founding date, logos of associations (e.g. city recognition).

Objection: “Est-ce payant?”, answer “Non, l’accès est gratuit, financé par les dons.”

CTA: “En savoir plus sur nos services” (or “Nos services” linking to /services), since main call is to explore what center offers.

Post-action micro-copy: “Vous allez être redirigé vers nos services.” (if it’s a link, this can be a tooltip or small caption).

SEO: Title “À propos – Centre As-Salam, Montréal”; Description “Histoire, mission et équipe du Centre As-Salam.”

Accessibility: Ensure text is structured with headings; team photos have alt text (“Imam Mohammed El-Tayshac”). Use landmarks (e.g. <article> for text, lists for facts).

Services (/services):

Purpose: Overview of concrete services (prayer, education, community).

Intent: Orientation (“What can I do here?”).

H1: “Nos services” (or “Services et activités”). Subtitle: “Prière, cours, entraide communautaire”.

Structure:

Empathie: “Vous cherchez un lieu de culte, d’apprentissage ou de soutien?”

Compréhension: Brief intro to services.

Solution/Service: List of service categories, each linking to its own page:

Prières: summary, link to /services/prieres.

Cours et enseignements: summary, link to /services/cours.

Événements et aide sociale: summary, link to (future) events or community page.

Bénéfices: “Apprentissage de l’arabe, entraide conviviale, communauté unie.”

Preuve: Stats or testimonials (“350 élèves aux cours l’an dernier”).

Objection: “Faut-il réserver?”, answer “Non, il suffit de venir” or “Contactez-nous pour plus d’infos.”

CTA: Each card might have a secondary link (e.g. “Horaires” or “Infos”), but one main CTA at bottom: “Nous contacter” or “S’inscrire à un cours” if listing courses. Probably “Nous contacter pour plus de détails” (leading to /contact).

Post-action: After clicking contact, a tooltip “Formulaire de contact ci-dessous.”

SEO: Title “Services – Centre As-Salam, Montréal”; Description “Horaires de prières, cours de Coran, événements et actions sociales du centre communautaire As-Salam.”

Accessibility: Use <section> landmarks for each category; each service card is a <article> with appropriate aria-label. Ensure link text is descriptive (e.g. “Voir les horaires de prière”).

Prières (/services/prieres):

Purpose: Detail prayer times and conditions.

Intent: Orientation/Pratique (“How to pray here?”).

H1: “Horaires des prières quotidiennes et de vendredi”. Subtitle: “Accès libre, tout musulman bienvenu”.

Structure:

Empathie: “Vous cherchez un lieu de prière selon les horaires de Montréal?”

Compréhension: Quick note on the five daily prayers and Jummah, location (2nd floor), community welcome.

Solution: Table or list of prayer times (Fajr, Dhuhr, Asr, Maghrib, Isha) with days.

Bénéfices: “Ambiance calme, imam confirmé, mixte harmonieux.”

Preuve: e.g. “Imam Mohammed préside la prière du vendredi depuis 2010.” Or “300 fidèles chaque vendredi”.

Objection: “Faut-il réserver?” – “Non, l’accès est libre.” “Est-ce payant?” – “Non, gratuit.”

CTA: “Voir le plan d’accès” (link to Google Maps or /contact section with map). This is a practical action.

Post-action: “Vous serez dirigé vers Google Maps…”

SEO: Title “Horaires de prière – Centre As-Salam, Montréal”; Description “Horaires des prières quotidiennes et du vendredi au Centre As-Salam.”

Accessibility: Tabular data for times should use <table> with <th> headers (“Prière”, “Heure”); alt text for any prayer image; ensure responsive design (stack table on narrow screens).

Cours (Coming Soon) (/services/cours):

Purpose: Announce that courses will start soon.

Intent: Inform about upcoming offerings.

H1: “Cours et enseignements – Bientôt disponible”. Subtitle: “Suivez-nous pour les prochaines inscriptions.”

Structure:

Empathie: “Vous souhaitez apprendre l’arabe ou le Coran? Patience…”

Compréhension: Explain types of courses planned (children, adults, tajwid, etc.).

Solution: “Les inscriptions ouvrent en [date].” List subjects.

Bénéfices: “Acquérir les bases de la lecture coranique, partage en groupe.”

Preuve: “Nos enseignants sont diplômés (mention).”

Objection: “Je peux m’inscrire maintenant?” – “Inscription bientôt ouverte, laissez votre contact.”

CTA: “Me prévenir de l’ouverture” – a subscription or email list link. (Disabled for now, or simple button with no action but future enablement).

Post-action: Not applicable (button may open a modal or nothing). Possibly microcopy: “Notification email lors de l’ouverture.”

SEO: Title “Cours – Centre As-Salam, Montréal”; Description “Cours d’arabe et d’étude du Coran (ouverture à venir).”

Accessibility: Mark as “coming soon” clearly; disable form fields if present; ensure no misleading form (no required fields for now).

Engagement (/engagement):

Purpose: Describe ways to contribute (donations, volunteer, membership).

Intent: Engagement possible.

H1: “Contribuer au Centre As-Salam”. Subtitle: “Soutien financier, bénévolat, adhésion”.

Structure:

Empathie: “Vous souhaitez soutenir notre communauté?”

Compréhension: Explain options (don, volunteer, become member). Clarify no coercion.

Solution: Subsections for Dons (one-time vs monthly, fiscal receipt), Bénévolat (needs, form), Adhésion (if applicable).

Bénéfices: “Votre soutien permet la gratuité des services; vous ferez partie de la communauté.”

Preuve: “Transparence financière (voir page dépenses)”; maybe testimonial from a volunteer.

Objection: “Mes dons sont-ils utilisés localement?” – explain projects and reporting. “Puis-je aider autrement?” – direct to volunteer form.

CTA: One primary CTA per subsection: e.g. Dons → “Soutenir le centre”, Bénévolat → “Devenir bénévole”. Since the page has multiple actions, we might have them in separate sections each with its own button styled as primary for that block. Ensure no more than one per screen viewport.

Post-action: After donation or signup click, show “Merci, vous recevrez un email de confirmation sous 24h. Un reçu fiscal sera envoyé.” Or volunteer: “Votre candidature a été envoyée.”

SEO: Title “Engagement et soutien – Centre As-Salam, Montréal”; Description “Dons, bénévolat et adhésion pour soutenir le centre As-Salam.”

Accessibility: Each action block clearly labeled; forms are accessible (label each field, error messages, focus styles); ensure fieldset/legend if needed.

Bénévolat (/engagement/benevolat):

Purpose: Collect volunteer sign-ups.

Intent: Engagement.

H1: “Bénévolat au Centre As-Salam”. Subtitle: “Participer à nos actions sociales et événementielles”.

Structure: Similar to Engagement page but focusing on volunteers: description of tasks, testimonies from volunteers, form.

CTA: “Je veux devenir bénévole” (button or form submit).

Post-action: “Merci, nous vous recontacterons sous 48h.”

SEO: Title “Bénévolat – Centre As-Salam”; Description “Opportunités de bénévolat au centre communautaire As-Salam.”

Accessibility: The volunteer form is short (see Forms spec below); check keyboard tab order, ARIA live region for success message.

Contact (/contact):

Purpose: Provide practical info (address, map, hours, phone) and a contact form.

Intent: Orientation (practical).

H1: “Contact et accès”. Subtitle: “Nous sommes là pour vous aider.”

Structure:

Empathie: “Besoin de renseignements ou d’aide?”

Compréhension: Show address, embed Google Map, public transit.

Solution: Display contact details (email, phone, social).

Objection: “Quelqu’un répondra-t-il ?” – reassure “Nous répondons sous 2 jours.”

CTA/Form: A simple form (Name, Email, Message) to send a message.

CTA: The form’s submit button “Envoyer” (primary).

Post-action: A success banner: “Votre message a bien été envoyé. Nous vous répondrons sous 2 jours ouvrés.”

SEO: Title “Contact – Centre As-Salam, Montréal”; Description “Adresse, horaires, formulaire de contact du Centre As-Salam.”

Accessibility: Label each form field; use aria-required for mandatory; after submit, focus on success message (use role="alert"). Map has an alt or text fallback (e.g. link text “Plan d’accès”).

Mentions légales (/mentions-legales):

Purpose: Legal disclosures.

Intent: Transparency.

H1: “Mentions légales”. Subtitle: none or site name.

Structure: Required info (association status, director, host, etc) in paragraphs or list.

CTA: None (informational only).

Post-action: N/A.

SEO: Title “Mentions légales – Centre As-Salam”; Description “Mentions légales et statut associatif.”

Accessibility: Use clear headings and lists for obligations; links to RGPD page if needed.

Confidentialité (/confidentialite):

Purpose: Privacy policy (RGPD compliance).

Intent: Transparency on data.

H1: “Politique de confidentialité”.

Structure: Explain data collected, cookie policy, rights. Follow legal format.

CTA: None.

Post-action: N/A.

SEO: Title “Politique de confidentialité – As-Salam”; Description “Protection des données personnelles du site As-Salam (RGPD).”

Accessibility: Structure with small fonts allowed but ensure >4.5:1 contrast. Clear links to consent options.

4. Component Specifications

Navigation Bar:

Role: Persistent header/nav on all pages. Provides links to Home, Centre, Services, Engagement, Contact, and a sticky “Horaires de prière” widget/button.

Props: items (array of {label, href}), logo, activeItem.

States: Collapsed (mobile hamburger) vs expanded; active link highlighted; dropdown open (if any).

Accessibility: Must be operable via keyboard (tab through links, Enter to open mobile menu). Use semantic <nav> and <button aria-label="Toggle menu">. The prayer times link is a button styled discreetly (not a “Donate” CTA).

Forbidden: No autoplay or animation; no distracting banners.

Reusable: Use same on FR/EN; items labels change by locale.

Language Switcher:

Role: Toggle between French/English.

Props: Current locale, function to set locale.

States: Open/closed if dropdown; disabled if only one locale.

Accessibility: Use <select> or toggle button. Ensure aria-label="Changer de langue". Keyboard-accessible.

Forbidden: Auto-switching without user action. No guess (explicit click required).

Reusable: Can be used in header and footer.

CTA Button (<Button>):

Role: Primary action buttons (forms, sign-ups).

Props: variant (“primary” vs “secondary”), disabled, onClick, aria-label.

States: Normal, hover (slightly brighter), focus (outline visible), disabled (grayed out).

Accessibility: Minimum 48×48px (WCAG/Google), high contrast (use accent color on dark/white text). Focus ring visible.

Forbidden: No countdown or auto-click handlers. No mislabel (“Payer” vs “Soutenir”).

Reusability: Use for all CTAs; adapt color by variant.

Forms (Contact, Volunteer):

Role: Collect user input for contact and volunteer signup.

Props: Fields with name, type (text, email, textarea), required, placeholder.

States: Pristine, focused, invalid (error), submitted/success.

Accessibility: Each field has <label for="">. Error messages are placed immediately after field with role="alert". Use aria-describedby to link help text. Required fields marked aria-required="true". Ensure logical tab order (Name → Email → Message → Submit).

Forbidden: No auto-fill of hidden options; no unchecked “I agree” default.

Reusability: Define a generic Form component that takes fields schema and handles validation. Use pattern for both contact and volunteer (with appropriate fields).

Confirmation Messages (Post-Action Banners):

Role: Show success or error after form submission.

Props: type (“success” or “error”), message.

States: Visible after action, or hidden.

Accessibility: Implement as <div role="alert">Message</div> so screen readers announce it. Focus may shift to it on appear.

Forbidden: Don’t use exclamation emojis or over-praise; keep tone factual.

Coming Soon Block:

Role: Show placeholder for future feature (e.g. Courses).

Props: message, optional actionLabel.

States: Static.

Accessibility: If a button is shown (like “Notify me”), disable it or indicate “coming soon”. Use aria-disabled="true".

Forbidden: Don’t enable subscription without backend; don’t mislead that feature is ready.

Reusability: Can reuse for any feature not yet launched.

Footer:

Role: Site-wide footer with legal links, address, small credibility cues.

Props: legalLinks (e.g. Mentions, Privacy), partners (list of logos with alt text), year.

States: Static content.

Accessibility: Use <footer>, list links vertically on mobile. All logos have alt. Text contrast meets AA.

Forbidden: No marketing claims (“best centre”).

Reusability: Same across site.

5. CMS Integration (Sanity)

Choice & rationale: Sanity.io is a headless CMS known for flexibility and speed. It supports structured content (schemas) and real-time previews. It’s open-source and widely used with Next.js (Vercel provides Sanity examples).

Content models: Define schemas like “Page” (fields: slug, title, content [blocks], locale), “Service” (category, description, images), “Announcement/Event” (date, title, body). Also a “DonationPlan” if needed (for future). Each model has fields for FR/EN content (Sanity supports localization plugins or separate documents per locale).

Multilingual handling: In Sanity, either use a plugin for field-level localization or create two documents (one per language) linked by a common ID. Fetch based on locale in Next.js. Each page query includes locale=='fr' or 'en'.

Permissions: Only admin role (board, imam) can log into Sanity Studio. Public read via API key (read-only). All draft content is preview-only for editors.

Safe defaults: If a CMS entry is incomplete (e.g. missing hero image), fallback defaults are used. The frontend checks for required fields and will not render empty sections – instead, it may hide the section or show “À venir”. No page shows blank content. For example, if “events” list is empty, we display nothing or a gentle “Aucun événement pour le moment.”

6. Forms & Data Flow

Contact Form:

Fields: Name (text, required), Email (email, required), Message (textarea, required, max ~1000 chars).

Validation: Client-side: name ≥2 chars, email format (HTML5/email type), message ≥10 chars. On submit, also server-side validation.

Errors: Inline under each field, e.g. “Veuillez indiquer votre email” (in French site). Use neutral tone.

Success: Display a confirmation banner (as above) and optionally send data to email or CRM. Reset form fields or keep data? (We can clear fields for reusability.)

Extensibility: For future Donorbox, the form would link to an external checkout instead of collecting data. Current form just sends email/DB entry.

Volunteer Signup Form:

Fields: Name, Email, Phone (optional), Interests/Skills (select or checkbox list, optional), Message.

Validation: At minimum name/email. Phone optional but prompt format.

Errors: Similar to contact form.

Success: “Merci, nous étudierons votre demande et vous contacterons.”

Data handling: On submission, forms POST to serverless functions (e.g. Next API routes) or a backend endpoint. These endpoints validate input, then send emails (e.g. via transactional email service) and store in a database (e.g. FaunaDB or sheet). No sensitive data beyond contact info is collected.

Flow: User → fills form → (client validation) → API route → (server validation, then) send email & log → response → frontend shows message. Errors (e.g. network issue) show “Une erreur est survenue, veuillez réessayer.”

Future extensibility:

For donations, we will later integrate Donorbox. We can include a placeholder “Donate” button which, when enabled, directs to Donorbox checkout. Use a feature flag (e.g. an environment variable like FEATURE_DONATIONS=false) to disable the Donorbox script and remove the active button (or show disabled button).

The volunteer form can later write to a volunteer management system or CRM if adopted; ensure our code abstracts the submission handler for easy replacement.

7. Future Donation Architecture (Inactive)

Donation page skeleton: We plan a /don page with details on projects and a call-to-action. For now, it’s built as a stub: same content hierarchy (info → why give → FAQs). The “Donate” button exists in code but is disabled (feature flag off), perhaps with a tooltip “Bientôt disponible”.

Donorbox integration points: We will integrate via a secure embed or redirect. Options: use Donorbox React component or embed script. We reserve an environment variable NEXT_PUBLIC_DONORBOX_URL to store the form link. The /don page includes conditional logic: if the flag is true, render the Donorbox component; else show “Fermé pour l’instant”.

Feature flag logic: In Next.js, we can check process.env.FEATURE_DONATION === "true". In code, if (!flag) return <DisabledCTA />. The Donorbox script is loaded only when enabled. This ensures no active payment logic until we consciously deploy.

Ethical safeguards: Even when enabled, the donation process will not use pressure. The page will explain exactly how funds are used (with graphics). No countdown or gift images. Receipts are promised (we’d use Donorbox’s auto-receipt). No recurring default (user opt-in for monthly). All donation UI labels use service verbs (“Soutenir”) rather than “Donate Now!” imperative.

8. Accessibility & Performance

WCAG compliance checklist: All pages meet WCAG 2.1 AA: sufficient contrast (min 4.5:1 for text), alt text on images, labels on form inputs, proper headings, keyboard operability. For color: text vs background ratios follow AA standards (at least 4.5:1 for normal text, 3:1 for large text) – we will test with automated tools. We avoid relying on color alone to convey info.

Keyboard navigation: Every interactive element (links, buttons, form fields) is reachable via Tab. The focus order is logical (header → main content → footer). Focus styles are clearly visible. For example, when the menu is collapsed, the hamburger is first focusable, then nav links. ARIA roles (like <nav>, <main>) help screen readers. Forms announce validation errors via aria-live.

Contrast rules: We use a neutral background (white/light beige) with dark text (#333 or the primary deep blue). Accent (gold) contrasts against dark or neutral backgrounds with at least 4.5:1. For example, a blue (#2C5F7C) on white is ~7:1 (see WCAG guidelines). Icons and borders also meet the 3:1 UI ratio.

Lighthouse target ≥90: We optimize for performance (lazy-load images, minimize JavaScript bundles, use Next.js Image optimization). Aim for Google Lighthouse scores ≥90 in Performance, Accessibility, Best Practices, and SEO. (Note: a score of 90+ is generally considered excellent.) We will use tools like PageSpeed Insights to guide optimizations (e.g. compress images, leverage browser cache, preconnect to critical APIs).

Image optimization strategy: All images are responsive and compressed (Next.js <Image> component). Use modern formats (WebP/AVIF) where possible. Provide proper width/height attributes for layout stability. Use lazy loading for offscreen images. Each image has meaningful alt; decorative images get empty alt "". For critical images (e.g. hero), we ensure they load quickly (priority hint).

9. AI-to-AI Prompting Rules (Governance)

To maintain ethical compliance in any future AI prompt generation or automation:

Always validate: Any content proposed by an AI must be checked against our “cadre d’intention” and values (e.g. no persuasion tactics, factual accuracy). Uncertainty halts automation: if a prompt asks for something ambiguous (e.g. “generate content with strong emotion”), the system must refuse or ask for clarification. We do not rely on AI to make judgment calls.

Never generate: Forbidden content includes spirituality promises, dark-pattern language, personal data (GDPR forbids sharing PII like contacts or financial info), or any marketing hype. The AI is explicitly instructed not to use such language. For example, it must not say “Allah vous le rendra” or “offre limitée”. These violate both ethics and policy.

Stop conditions: If any part of generated content contains manipulative or false statements, or we detect hallucination (invented facts, names), the system must flag and stop. Human review is required before publishing. This is similar to OpenAI’s safe completion: “safe-completion objectives discourages actionable detail in proportion to risk”.

Ethical compliance checks: Incorporate automated checks for known pitfalls: a ban on certain keywords (e.g. “urgent”, “carte de crédit”, “immédiatement”), and scanning for religious superlatives. If flagged, the output is disallowed. The prompts themselves should encode these filters (like a set of “assistant guidelines” tokens that explicitly forbid certain motifs).

Documentation: Maintain an internal style guide (this document) that the AI references. Prompts should instruct the model to prioritize community service, clarity, and honesty. Any request not explicitly covered by this guide triggers a human checkpoint (“Si ambigu, STOP. ASK, DO NOT GUESS.”).

Each of these rules ensures our AI tools reinforce, not undermine, the Centre’s values. Building “safe AI isn’t one and done”, so we plan iterative reviews of AI output by human experts (e.g. the imam or ethics officer) to catch any drift.