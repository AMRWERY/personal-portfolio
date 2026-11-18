# Amr Mohamed — Personal Portfolio Design Brief

> **Purpose:** Design a premium, credible personal portfolio for Amr Mohamed, a Frontend Developer specializing in Vue.js, Nuxt.js, and TypeScript. This document is the source of truth for the visual system, page architecture, content, and interaction rules. Use it alongside `STITCH_PROMPTS.md` when generating screens in Stitch.
>
> **Content source:** The uploaded CV (`Amr Mohamed CV.docx` / `Amr Mohamed CV(2).pdf`). Keep all experience, project facts, dates, tools, and metrics faithful to that CV. Do not invent client outcomes, conversion lifts, performance scores, team sizes, awards, testimonials, or responsibilities.

---

## 1. Product overview

### Website
- **Name:** Amr Mohamed
- **Descriptor:** Frontend Developer | Vue.js & Nuxt.js | TypeScript
- **Website type:** Personal portfolio and professional profile
- **Primary audience:** Recruiters, engineering managers, frontend leads, potential freelance clients, and collaborators
- **Primary goals:**
  1. Communicate Amr's frontend specialization and professional credibility within the first screen.
  2. Showcase production work and substantial projects with clear contributions and verified project details.
  3. Make it easy to inspect project demos, source repositories, and professional profiles.
  4. Provide a direct path to contact Amr.
- **Secondary goals:** Present technical skills, career timeline, bilingual/RTL experience, and relevant project metrics.

### Positioning
Present Amr as a hands-on frontend developer who can take a web interface from project setup and architecture through component development, API integration, debugging, and delivery in collaboration with backend teams.

**Core positioning statement:**

> I build reliable, polished web experiences with Vue.js, Nuxt.js, and TypeScript — from customer-facing platforms to complex dashboards.

This is a concise portfolio positioning statement based on the CV, not a claim that Amr independently builds backend systems.

### Brand personality
- Technically capable, calm, precise, and dependable
- Modern and product-minded rather than flashy
- Premium, editorial, and detail-oriented
- Confident without exaggerated marketing language

### Language
- English is the default language.
- Provide Arabic as a complete alternate language, not a partial translation.
- Arabic must use correct RTL layout, alignment, navigation order, icon direction where appropriate, and readable Arabic typography.
- Keep technology names, company names, and product names in their original Latin spelling unless an official Arabic brand name is supplied.
- Do not use machine-translated or placeholder Arabic copy in a final implementation. Design the RTL layout and use concise, natural Arabic copy during content integration.

---

## 2. Creative direction

### Visual concept: Midnight Editorial
A refined dark portfolio with a deep ink background, subtle borders, strong typography, generous whitespace, restrained blue accents, and carefully composed project previews. It should feel like a premium digital product portfolio, not a generic developer template.

### Visual principles
1. **Typography leads.** Use a strong, clear typographic hierarchy and large but controlled hero typography.
2. **Projects are the proof.** Give project work enough room for real screenshots, concise context, role, contribution, tools, and useful links.
3. **Restraint over decoration.** Avoid excessive gradients, glowing blobs, glassmorphism everywhere, neon outlines, noisy code backgrounds, and random 3D objects.
4. **Consistent rhythm.** Use a predictable spacing scale, grid, card radius, and content width.
5. **Real assets first.** Use Amr's supplied avatar and genuine project screenshots. The avatar is a first-class brand element in the hero and About page, with a smaller version in the header where space allows. Until the photo is supplied, use a deliberate `AM` placeholder that is easy to replace; never fabricate a human portrait or use a stock developer photo.

### Colour system
Use these as the initial design tokens. Keep contrast accessible and use the accent sparingly.

| Token | Value | Usage |
|---|---|---|
| `background` | `#0B1017` | Main page background |
| `surface` | `#111923` | Cards, panels, navigation surface |
| `surface-elevated` | `#172231` | Elevated cards, dropdowns, menus |
| `border` | `#263445` | Subtle separators and card borders |
| `text-primary` | `#F3F6FA` | Main headings and body text |
| `text-secondary` | `#A5B1C0` | Supporting copy |
| `text-muted` | `#718095` | Metadata and quiet labels |
| `accent` | `#56B4F8` | Primary links, buttons, focus states, small highlights |
| `accent-soft` | `#142D42` | Soft accent surfaces |
| `success` | `#48B987` | Success states only |
| `warning` | `#E8B45D` | Caution/in-progress status only |

**Light theme:** Provide a complete light theme using warm off-white (`#F7F9FC`) page background, white surfaces, dark ink typography, neutral blue-grey borders, and the same blue accent. Do not simply invert colours; validate contrast and shadow/border treatment independently.

### Typography
- **Primary font:** Montserrat, used consistently across the site.
- Use a variable font if available; otherwise use practical weights from 400–800.
- Headings: 600–800, tight line-height, slightly negative tracking for large display text.
- Body: 400–500, comfortable line-height.
- Metadata: 500–600, smaller size, clear contrast.
- Do not introduce decorative display fonts or mix unrelated font families.

### Layout and grid
- Desktop content max-width: approximately 1,200–1,280 px.
- Desktop side padding: 48–64 px depending on viewport.
- Tablet side padding: 28–36 px.
- Mobile side padding: 20–24 px.
- Desktop grid: 12 columns; project cards may use 2-column or asymmetrical featured layouts.
- Tablet: 6-column logic or 2-column cards.
- Mobile: single-column layout with comfortable vertical spacing.
- Use generous section spacing (roughly 88–120 px desktop; 56–72 px mobile).

### Shape, borders, and elevation
- Main card radius: 16–20 px.
- Buttons and inputs: 10–12 px radius.
- Pills/chips: fully rounded.
- Use thin borders and subtle ambient shadows. Avoid heavy shadows on every surface.
- Keep cards visually calm; use accent colour for focus, active, or selected states rather than permanent decoration.

### Avatar and personal identity treatment
- Use Amr's **actual uploaded portrait** as the portfolio avatar. Do not generate, substitute, or materially alter his face.
- Primary placement: a large portrait in the right side of the Home hero, composed as a clean editorial portrait panel (portrait crop, approximately 4:5, 280–360 px wide on desktop). Use a 20–24 px radius, thin border, and restrained background treatment that matches Midnight Editorial.
- Secondary placement: repeat the same portrait on the About page intro at a smaller scale (approximately 168–220 px wide depending on layout).
- Optional compact placement: a 28–32 px circular avatar beside the `AM.` mark in the desktop header only if it does not crowd navigation. On mobile, prioritise the monogram wordmark and use the portrait in the hero instead.
- Preserve the image's natural proportions and appearance. Use `object-fit: cover` and a carefully chosen `object-position`; do not add face filters, synthetic lighting, face reshaping, or strong colour overlays.
- Use a quiet 1 px border and subtle shadow; the avatar must feel integrated, not like a floating social-media profile badge.
- Keep the image prominent but subordinate to the main headline. Do not place text over the face.
- Until Amr uploads the photo, show a labelled `AM` monogram placeholder with the final portrait frame dimensions and crop treatment. The placeholder must be replaceable without changing layout.
- Suggested implementation asset path: `public/images/avatar.webp`. Also accept `.jpg`, `.jpeg`, or `.png`; update the path to match the supplied asset.
- Accessible alt text: `Portrait of Amr Mohamed`. If the avatar is purely decorative because the adjacent text already identifies Amr, use empty alt text instead.

### Motion and transition tokens
Treat motion as part of the design system, not decoration. Every meaningful interactive component must have a designed state and a clear transition. Motion should be subtle, purposeful, consistent, and fast.

| Token | Duration | Easing | Use |
|---|---:|---|---|
| `motion-fast` | 140 ms | `cubic-bezier(0.2, 0, 0, 1)` | Icon, underline, chip, and focus-state transitions |
| `motion-standard` | 200 ms | `cubic-bezier(0.2, 0, 0, 1)` | Buttons, cards, theme colours, borders |
| `motion-panel` | 280 ms | `cubic-bezier(0.22, 1, 0.36, 1)` | Menus, drawers, dialogs, dropdown panels |
| `motion-enter` | 420 ms | `cubic-bezier(0.22, 1, 0.36, 1)` | One-time page and section entrance reveals |

Motion rules:
- Use opacity and small transforms (typically 8–16 px) for entrance transitions. Avoid large travel distances, overshoot, bounce, rotation, or elastic easing.
- Home hero: headline/copy/CTAs enter with a subtle fade-and-rise; avatar enters with a soft fade and 8 px rise or a restrained clip reveal. Play once per page visit, not on a loop.
- Section headings and content: reveal once when entering the viewport. Stagger sibling cards by 40–70 ms, with a maximum stagger window of about 280 ms. Do not delay content so long that the page feels slow.
- Project cards: hover raises by at most 3–4 px, border/accent becomes slightly clearer, and the screenshot scales to no more than 1.02. Keep the full card clickable only if its nested links remain accessible.
- Buttons: subtle colour/border change and 1 px lift on hover; pressed state returns to baseline with no bounce. Focus-visible gets a clear static outline.
- Navigation: animate active underline or pill in 140–180 ms. Mobile drawer fades and slides 8–12 px in 240–280 ms; include a designed closed state and do not rely on an animated full-screen zoom.
- Theme toggle: transition page background, surface, text, and border colours in about 200 ms. Avoid flashing through a third theme.
- Language/route changes: use a brief 160–220 ms opacity transition; preserve layout stability and do not animate every text node independently.
- Filters: use short selected-state colour/border transitions; project grid changes may fade/translate by 6–8 px without a dramatic reflow animation.
- Timeline and metric elements: simple fade/translate reveal only. No count-up numbers unless the final implementation can preserve the exact CV values and respect reduced motion.
- Avatar: a one-time entrance transition is sufficient. Do not continuously float, pulse, rotate, or parallax the portrait.
- Do not use scroll-jacking, autoplaying animations, looping decorative motion, cursor-following effects, heavy parallax, or animated backgrounds.
- Avoid applying `transition: all` globally. Transition only the properties that should change.
- In the implementation handoff, specify Vue `<Transition>` / `<TransitionGroup>`, CSS transitions, and `IntersectionObserver` for reveal-once behaviour before introducing an animation dependency. Keep JavaScript animation libraries optional, not required.
- Provide reduced-motion behaviour: disable reveal transforms/staggers and route/menu travel; render content immediately and retain only essential state changes. Respect `prefers-reduced-motion: reduce`.
- Stitch should show key states or storyboard frames for animations where the design canvas cannot express real motion. Do not mistake a static mockup for a fully implemented animation.

---

## 3. Navigation and site map

### Main navigation
- Home
- Work
- About
- Contact

Persistent utilities:
- Theme toggle (dark/light)
- Language switch (EN/AR)
- Clear primary contact action on desktop

### Routes / screens to design
1. `/` — Home / portfolio landing page
2. `/work` — Complete projects archive with category filters
3. `/work/[slug]` — Reusable project case-study template
4. `/about` — Professional profile, skills, and experience timeline
5. `/contact` — Contact information and contact form

The homepage should contain compact previews of the main sections and link to their full pages. Do not force every CV bullet into the homepage.

### Footer
Include:
- Amr Mohamed wordmark / AM monogram
- Short descriptor: `Frontend Developer · Vue.js · Nuxt.js · TypeScript`
- Navigation links
- GitHub and LinkedIn links
- Email link
- Copyright line with current year generated by the implementation
- Back-to-top control where appropriate

---

## 4. Page requirements

## 4.1 Home page — `/`

### Header
- Sticky or fixed, compact, and visually quiet.
- Left: `AM.` wordmark or simple `AM` monogram.
- Middle/right: Home, Work, About, Contact.
- Utilities: theme switch and EN/AR switch.
- Primary CTA: `Let's talk` / localized equivalent.
- Mobile: compact logo, theme/language controls, and accessible menu trigger.

### Hero
- Eyebrow: `FRONTEND DEVELOPER · CAIRO, EGYPT`
- Main headline (recommended):
  `I build thoughtful web experiences with Vue.js & Nuxt.js.`
- Supporting copy:
  `Frontend Developer with 3+ years of experience building production websites, e-commerce platforms, and admin dashboards. Focused on Vue.js, Nuxt.js, TypeScript, reusable UI, and reliable API integration.`
- Primary CTA: `Explore my work`
- Secondary CTA: `Get in touch`
- Small availability-free location note: `Based in Cairo, Egypt` (do not claim to be open to work unless Amr confirms it).
- Visual: use Amr's supplied real avatar as the right-side hero portrait, in a refined 4:5 editorial frame with rounded corners, subtle border, natural crop, and no face overlay. The same source photo must be reused on the About page. Until the photo is uploaded, use an `AM` monogram placeholder in exactly the final frame dimensions. Do not generate a human portrait or use stock photography. The portrait should enter once with a subtle 420 ms fade-and-rise transition; never loop or float.

### Proof / impact strip
Use a restrained row of verified facts:
- `3+` years of frontend experience
- `30` pages delivered for Marca Store's two-app project
- `46` reusable components for Marca Store
- `100+` dashboard views for the Gym Management Dashboard

Make each metric's context clear in the detail view; do not imply all metrics belong to one project.

### Featured work
Feature 3–4 projects, prioritised as follows:
1. **Lexus Egypt — Official Website** (Professional; In progress)
2. **Marca Store — E-Commerce Platform** (Freelance; Egypt & Saudi Arabia)
3. **Gym Management Dashboard — ASAGTC** (Freelance)
4. **Abdal — Recruitment Services Platform** (Professional; Saudi Arabia)

Each card should include:
- Actual project name
- One-sentence factual description
- Role / project type
- 2–4 technology tags
- Status only when supported (e.g. `In progress` for Lexus)
- Project detail action
- External live link or repository only where the CV provides one
- Real project image/screenshot placeholder labelled for replacement

### Capabilities / what I work on
Use 4–6 concise capability cards, each supported by CV experience:
- Vue.js & Nuxt.js application development
- Reusable component systems and frontend architecture
- E-commerce storefronts and admin dashboards
- REST API integration and backend collaboration
- Arabic/English interfaces and RTL layouts
- Payment integrations and role-based interfaces

Avoid presenting backend engineering as a core service. Emphasise frontend implementation and integration.

### Experience snapshot
Show a compact timeline or two employer blocks:
- Code95 Web Technologies — Frontend Developer — Jul 2025–Present
- Kabret — Frontend Developer — Jan 2024–May 2025
- Freelance frontend projects — Apr 2023–Nov 2025 (individual project dates are available on the Work page)

CTA: `View experience` → `/about`.

### Skills preview
Show grouped skill tags, not progress bars or fake percentages. Link to full skills list on `/about`.

### Contact CTA
A strong, simple section: `Have a project or role in mind? Let's talk.` with email and contact-page CTA.

---

## 4.2 Work page — `/work`

### Intro
- Heading: `Selected work`
- Copy: `A selection of production work, freelance projects, and personal builds across e-commerce, dashboards, content, and web applications.`

### Filters
- All
- Professional
- Freelance
- Personal

Filters must work and be keyboard accessible. Keep the selected filter obvious. Add a clear empty state if a filter has no items.

### Project archive content
Use these projects and details exactly as listed below. Recommended ordering is newest / strongest first.

#### Professional projects

**Lexus Egypt — Official Website**
- Category: Professional / Code95 Web Technologies
- Role: Frontend Developer — Project Owner
- Dates: Jul 2025–Present
- Status: In progress
- Summary: Owns the frontend of the new Lexus Egypt website from project setup and architecture through UI development and API integration.
- Highlights: Created the frontend from scratch; established project structure and workflow; built core pages and reusable component foundations; leads ongoing development and backend integration toward launch.
- Stack: Nuxt.js, TypeScript, REST API, Tailwind CSS
- Live: https://www.lexus.com.eg
- Important: Clearly label the work as **in progress**. Do not claim the new website has launched.

**Abdal — Manpower and Recruitment Services Platform**
- Category: Professional / Code95 Web Technologies
- Role: Frontend Developer
- Dates: Jul 2025–Present
- Summary: Develops and maintains the customer-facing platform for a Saudi recruitment services company.
- Highlights: Integrated Visa, Mada, and STC Pay; fixed UI and frontend bugs; collaborated on feature enhancements based on business requirements.
- Stack: Vue.js, JavaScript, REST API, Payment Gateway Integration, Bootstrap
- Live: https://abdal.sa

**Toyota Egypt — Official Website**
- Category: Professional / Code95 Web Technologies
- Role: Frontend Developer
- Dates: Jul 2025–Present
- Summary: Maintains and improves the official Toyota Egypt website, including online payment flow and existing feature stability.
- Highlights: Resolved payment-related issues; diagnosed and fixed live-site frontend bugs; improved existing features for usability and performance.
- Stack: Nuxt.js, JavaScript, REST API, Payment Gateway Integration, Tailwind CSS
- Live: https://toyota.com.eg

**Attijariwafa Bank Egypt — Banking Website**
- Category: Professional / Code95 Web Technologies
- Role: Frontend Developer
- Dates: Jul 2025–Present
- Summary: Develops new features and maintains the website frontend based on business requirements.
- Highlights: Built new website features; enhanced existing UI components; fixed frontend bugs to support website stability.
- Stack: Nuxt.js, TypeScript, REST API, Payment Gateway Integration, Tailwind CSS
- Live: https://attijariwafabank.com.eg

**Jai Dashboard — Admin Dashboard**
- Category: Professional / Kabret
- Role: Frontend Developer
- Dates: Jan 2024–May 2025
- Summary: Built and maintained admin dashboard features, working with backend developers to connect screens to APIs.
- Highlights: Developed dashboard screens; created reusable UI components; integrated REST APIs and resolved frontend bugs.
- Stack: Vue.js, TypeScript, REST API, Vuetify
- No public demo/repository link supplied in the CV. Do not invent one.

**Treat Dashboard — Admin Dashboard**
- Category: Professional / Kabret
- Role: Frontend Developer
- Dates: Jan 2024–May 2025
- Summary: Built and maintained admin dashboard features and integrated the frontend with backend services.
- Highlights: Developed Nuxt.js dashboard features and reusable components; debugged frontend issues; collaborated on REST API integration.
- Stack: Nuxt.js, TypeScript, REST API, Vuetify
- No public demo/repository link supplied in the CV. Do not invent one.

#### Freelance projects

**Marca Store — E-Commerce Platform**
- Category: Freelance
- Role: Freelance Frontend Developer
- Dates: May 2025–Nov 2025
- Markets: Egypt and Saudi Arabia
- Summary: Built the full frontend for a two-market e-commerce business, including a customer storefront and a separate admin app connected to Firebase for products, orders, and users.
- Highlights: Delivered 2 apps, 30 pages, 46 reusable components, and 21 Pinia stores; implemented Admin, Employee, and Merchant roles with separate permissions; delivered Arabic/English support and RTL layouts across both apps.
- Stack: Vue.js, Vite, Pinia, Tailwind CSS, vue-i18n, VeeValidate, Firebase
- Live: https://marca-store-user.vercel.app
- Storefront code: https://github.com/AMRWERY/Marca-Store---user
- Admin code: https://github.com/AMRWERY/Marca-Store---admin

**Lugar Store — Furniture E-Commerce Website**
- Category: Freelance
- Role: Freelance Frontend Developer
- Dates: Dec 2024–Feb 2025
- Location: Remote — Cairo, Egypt
- Summary: Built a furniture store from scratch, including the customer shopping flow and an admin panel for products, categories, and customer messages.
- Highlights: Delivered in 3 months across 271 commits; 8 pages and 19 reusable components; implemented catalog, wishlist, cart, checkout, order summary, and Arabic/English RTL support.
- Stack: Nuxt.js, Pinia, Tailwind CSS, Nuxt i18n, Firebase
- Live: https://lugar-store-furniture.vercel.app
- Code: https://github.com/AMRWERY/lugar-Store-Furniture-

**Travel Booking Website — O Tech Company**
- Category: Freelance
- Role: Freelance Frontend Developer
- Dates: Oct 2023–Dec 2023
- Location: Remote — Kuwait
- Summary: Developed and maintained frontend features for a travel booking application, collaborating with the client's backend team on REST API integration.
- Highlights: Built booking features and reusable Vue.js components; integrated frontend screens with REST APIs; fixed bugs to stabilise the booking experience.
- Stack: Vue.js, Bootstrap, REST API
- No public demo/repository link supplied in the CV. Do not invent one.

**Gym Management Dashboard — ASAGTC Company**
- Category: Freelance
- Role: Freelance Frontend Developer
- Dates: Apr 2023–Sep 2023
- Location: Remote — Cairo, Egypt
- Summary: Developed and maintained frontend modules for a gym management dashboard, integrated with backend APIs.
- Highlights: Built 100+ views and 38 Vuex store modules; added real-time updates with Pusher and Laravel Echo; supported PDF, Excel, and CSV report export; delivered Arabic/English RTL support and commit standards with Husky and Commitlint.
- Stack: Vue.js, Vite, Vuex, Tailwind CSS, Pusher, Laravel Echo, REST API
- Code: https://github.com/AMRWERY/gym-management

#### Personal projects

**Al-Quran — Quran Reader and Audio App**
- Category: Personal
- Role: Personal Project
- Date: Aug 2026
- Summary: Built a Quran reading and listening app that loads Surahs and recitations from a public REST API.
- Highlights: 22 pages and 18 reusable components; audio streaming for each Surah; Nuxt.js with TypeScript, Tailwind CSS v4, and Pinia.
- Stack: Nuxt.js, TypeScript, Pinia, Tailwind CSS, REST API
- Live: https://al-quran-silk.vercel.app
- Code: https://github.com/AMRWERY/Al-Quran

**Ship-IT — E-Commerce Platform**
- Category: Personal
- Role: Personal Project
- Dates: Jan 2025–Mar 2025
- Summary: Built a complete e-commerce platform with a customer storefront and admin dashboard backed by Firebase.
- Highlights: 15 pages, 33 reusable components, and 14 Pinia stores across 293 commits; cart, wishlist, checkout, and order summary; Arabic/English RTL and light/dark themes.
- Stack: Nuxt.js, Pinia, Tailwind CSS, Nuxt i18n, VeeValidate, Firebase
- Live: https://ship-it-final.vercel.app/en
- Code: https://github.com/AMRWERY/ship-it-final-

**Cospora — E-Commerce Platform**
- Category: Personal
- Role: Personal Project
- Dates: Nov 2024–Dec 2024
- Summary: Built a cosmetics e-commerce platform with separate customer and admin interfaces for products, categories, and users.
- Highlights: 18 pages and 43 reusable components across 262 commits in 2 months; admin data charts with ApexCharts; SEO meta tags with `useHead`; Arabic/English RTL and light/dark themes.
- Stack: Nuxt.js, Pinia, Tailwind CSS, Nuxt i18n, FormKit, ApexCharts, Firebase
- Live: https://cospora.vercel.app
- Code: https://github.com/AMRWERY/Cospora

**Islam App — Islamic Web Application**
- Category: Personal
- Role: Personal Project
- Date: Jan 2024
- Summary: Built an Islamic content web app using data from a public REST API.
- Highlights: 4 pages and 7 reusable components; Pinia state management; Tailwind CSS and Headless UI; deployed on Vercel.
- Stack: Nuxt.js, Pinia, Tailwind CSS, Headless UI, REST API
- Live: https://islam-app-nuxt.vercel.app
- Code: https://github.com/AMRWERY/islam-app-nuxt

**Movie App**
- Category: Personal
- Role: Personal Project
- Date: Oct 2023
- Summary: Built a movie search app that fetches titles, posters, release years, and plot summaries from the OMDb API.
- Highlights: Implemented movie search and results; built with Vue.js, Vite, and Vue Router; deployed on Vercel.
- Stack: Vue.js, Vite, Vue Router, Tailwind CSS, OMDb API
- Live: https://movie-app-delta-ruby.vercel.app
- Code: https://github.com/AMRWERY/movie-app

### Project card behaviour
- Use a consistent card layout, with a featured variant for selected projects.
- Display 2–4 technology tags maximum on archive cards; full stack list belongs on case-study page.
- Include subtle hover/focus state and an explicit link affordance.
- Do not use made-up ratings, client quotes, project health indicators, or performance charts.
- If no screenshot is available, use a labelled `Project screenshot to be added` placeholder block. Do not invent a screenshot of a real brand website.

---

## 4.3 Project detail page — `/work/[slug]`

Create one reusable case-study template that supports all projects. Not every project has the same amount of information, so hide unavailable blocks rather than filling them with invented content.

### Required sections
1. Breadcrumb: Home / Work / Project name
2. Project title, category, role, dates, and status if relevant
3. Short factual overview
4. Hero media area for real screenshots / screen recordings (use a placeholder until provided)
5. `My contribution` — concise bullets sourced from the CV
6. `Highlights` — factual outcomes and available metrics
7. Technology stack — tags or compact icon/name list
8. Links — Live website and GitHub repositories only when available
9. Previous / next project navigation
10. CTA to contact Amr

### Case-study visual direction
- Large screenshot stage, ideally wide 16:10 or 16:9.
- Use one primary screenshot and optional supporting screenshots in a neat gallery.
- Avoid device mockups for every image. Use a clean browser-frame treatment only when it helps.
- Provide captions for screenshot groups once real assets are added.

### Special case: Lexus Egypt
- Display an `In progress` status near the project title.
- Explain that Amr owns the frontend work from initial setup onward.
- Do not imply that the new website is fully launched. The CV lists the brand's live domain, but the described new website is still in progress.

### Special case: Marca Store
- Give prominence to the measurable delivery details: 2 apps, 30 pages, 46 reusable components, 21 Pinia stores, 3 account roles.
- Show storefront and admin as two separate screenshot groups when assets become available.
- Link to both repositories and the live storefront.

---

## 4.4 About page — `/about`

### Intro
- Heading: `A little about how I build.`
- Bio: `I'm Amr Mohamed, a frontend developer based in Cairo, Egypt. I have 3+ years of experience building Vue.js and Nuxt.js applications, from customer-facing websites and e-commerce storefronts to admin dashboards. I focus on maintainable interfaces, reusable components, API integration, and accessible Arabic/English experiences.`

### Working approach
Use four evidence-based steps:
1. Understand the product requirements and user flow.
2. Set up clear frontend structure and reusable components.
3. Build responsive interfaces and connect them to REST APIs.
4. Debug, refine, and collaborate with backend teammates through delivery.

Do not add unsupported claims such as leading large teams, owning backend infrastructure, or managing product strategy.

### Career timeline
- **Code95 Web Technologies** — Frontend Developer — Cairo, Egypt — Jul 2025–Present
  - Projects: Lexus Egypt, Abdal, Toyota Egypt, Attijariwafa Bank Egypt
- **Kabret** — Frontend Developer — Cairo, Egypt — Jan 2024–May 2025
  - Projects: Jai Dashboard, Treat Dashboard
- **Freelance Frontend Developer** — Part-time engagements — Apr 2023–Nov 2025
  - Projects: Gym Management Dashboard, Travel Booking Website, Lugar Store, Marca Store

Use dates as shown in the CV. Do not assign a separate employer to the freelance work.

### Technical skills
Display grouped skills. Avoid proficiency percentages, star ratings, or progress bars.

**Frontend**
- Vue.js, Nuxt.js, Composition API, JavaScript (ES6+), TypeScript, HTML5, CSS3

**UI and Styling**
- Tailwind CSS, Vuetify, Bootstrap, Headless UI, Responsive Design

**State, Routing and Forms**
- Pinia, Vuex, Vue Router, VeeValidate, Vuelidate, VueUse

**APIs and Backend Services**
- REST API Integration, Firebase, Supabase, Pusher, Laravel Echo, Real-Time Updates

**Internationalization**
- vue-i18n, Nuxt i18n, Arabic/English, RTL Layouts

**Tooling and Deployment**
- Vite, Git, GitHub, GitLab, Husky, Commitlint, Vercel

**Additional**
- Payment Gateway Integration, Role-Based Access Control (RBAC), SEO Meta Management, ApexCharts, PDF/Excel Export, Debugging, AI-Assisted Development (Cursor, Claude Code)

### Education
- Bachelor of Law (LL.B.) — Cairo University, Egypt — 2012

### Languages
- Arabic — Native
- English — Professional working proficiency

### Portrait / assets
Use Amr's real uploaded avatar on both Home and About. The Home portrait is the main identity visual; About reuses the same image at a smaller size. Keep the crop and treatment consistent across the site. Do not generate a fake headshot, use a random stock photo, or materially alter the face. Until the photo is supplied, use the final-sized `AM` monogram placeholder. See `AVATAR_ASSET_GUIDE.md` for the asset requirements and replacement path.

---

## 4.5 Contact page — `/contact`

### Content
- Heading: `Let's build something useful.`
- Supporting copy: `Have a role, project, or collaboration in mind? Send me a message.`
- Email: `amrmounir2@gmail.com`
- Phone: `+20 102 265 5742`
- Location: `Cairo, Egypt`
- LinkedIn: `https://www.linkedin.com/in/amr-mohamed-3a714b1a7`
- GitHub: `https://github.com/AMRWERY`

### Contact form fields
- Name (required)
- Email (required; validate format)
- Subject (optional)
- Message (required)
- Submit button: `Send message`

Design and prototype these states:
- Default
- Focused input
- Validation error
- Sending/loading
- Success confirmation
- Server failure / retry

The form is only a UI until a real delivery service or backend endpoint is connected. Do not imply that Stitch has implemented actual email delivery.

---

## 5. Interaction and motion system

### Motion principles
- Subtle, purposeful, and quick; use the exact `Motion and transition tokens` defined in Section 2.
- Design every interactive component in default, hover, focus-visible, pressed, selected, disabled, and open/closed states where relevant.
- Entrances use opacity and a small 8–16 px translate; use one-time reveal, never constant motion.
- Keep page and section content readable immediately, especially on mobile and for returning visitors.
- Avoid scroll-jacking, long intro animations, bouncing elements, parallax, cursor-following effects, animated backgrounds, and looping decorative motion.
- Design the avatar's one-time entrance in harmony with the hero copy; do not animate the portrait continuously.
- Include a reduced-motion version in every motion-related screen/state.

### Global interactions
- Sticky header with clear active/hover/focus states and a subtle background/border transition after scrolling.
- Smooth anchor scrolling on the home page, respecting reduced-motion preference.
- Theme toggle transitions the colour system without a flash; provide a clear icon and accessible label.
- Language switch preserves the current route where possible and uses a brief opacity transition without layout jumping.
- Mobile navigation drawer has designed open/closed states, a 240–280 ms fade/slide transition, correct focus handling, Escape support, and focus return to the trigger.
- Project cards have restrained 3–4 px elevation, image scale no greater than 1.02, border changes, and a visible keyboard focus state.
- Filter changes update the project grid without page reload in the intended implementation; selected chips transition quickly and remain clearly labelled.
- Contact form states transition calmly between idle, validation, sending, success, and failure.
- Home hero copy and avatar use a one-time entrance; visible sections reveal once with a short stagger.
- External links should be visually distinguished and open safely in a new tab where appropriate.
- Avoid global `transition: all`; animate only explicitly selected properties.

### Accessibility
- Target WCAG 2.2 AA contrast for text and interactive controls.
- All interactive controls must be keyboard accessible.
- Visible focus styles; do not remove outlines without a replacement.
- Use semantic heading order and landmarks.
- Provide meaningful alt text for genuine project screenshots; decorative visuals use empty alt text.
- Do not rely on colour alone for project status or filter selection.
- Respect `prefers-reduced-motion`: remove non-essential reveal transforms, stagger delays, smooth scrolling, and route/menu travel; content must remain immediately visible.
- Avatar images must have meaningful alt text unless fully redundant with adjacent identifying text.
- Ensure Arabic RTL reading order is logical, including mobile menus and forms.

---

## 6. Responsive behaviour

### Desktop (≥ 1024 px)
- Full navigation and inline utility controls.
- Hero uses a two-column layout: headline/content plus Amr's portrait in a 4:5 frame (or final-size monogram placeholder until supplied).
- Featured projects use 2-column or asymmetrical editorial grid.
- Work archive uses 2–3 columns depending on card media and content density.
- About page can use a sticky side navigation or simple two-column content layout.

### Tablet (768–1023 px)
- Compact header; allow navigation to wrap or use a menu depending on space.
- Hero becomes 1–2 columns depending on width; preserve the portrait at a readable size and avoid cropping the face.
- Project grid uses 2 columns where readable.
- Reduce section spacing and hero text size without making it cramped.

### Mobile (< 768 px)
- Single-column content.
- Compact header with accessible menu.
- Hero headline wraps naturally; no horizontal overflow. Place the portrait below or beside the copy based on width, never as a tiny thumbnail; keep face and shoulders inside the crop.
- Stack CTAs when necessary; maintain comfortable touch targets (minimum 44 × 44 px).
- Project cards become full-width with media above text.
- Filters become horizontally scrollable or wrapped chips; keep labels visible.
- Timeline becomes a simple vertical timeline.
- Forms use full-width controls.
- Avoid tiny skill tags and overly dense metadata.

---

## 7. Reusable component inventory

Design these consistently across all pages:

### Global
- `SiteHeader`
- `ProfileAvatar` (shared image frame, crop, alt text, and fallback monogram)
- `MobileNavigation`
- `SiteFooter`
- `ThemeToggle`
- `LanguageSwitcher`
- `PrimaryButton`
- `SecondaryButton`
- `SectionHeading`
- `LazyVEyebrowLabel`
- `Tag / TechBadge`
- `Breadcrumbs`
- `BackToTop`

### Home
- `HeroSection`
- `HeroAvatar` (uses the shared `ProfileAvatar`)
- `ImpactMetric`
- `FeaturedProjectCard`
- `CapabilityCard`
- `ExperiencePreview`
- `SkillsPreview`
- `ContactCTA`

### Work
- `ProjectFilterBar`
- `ProjectCard`
- `ProjectGrid`
- `LazyVProjectStatusBadge`
- `ProjectMeta`
- `ProjectLinks`
- `EmptyState`

### Project details
- `ProjectHero`
- `ProjectMediaGallery`
- `ContributionList`
- `ProjectMetricGrid`
- `TechnologyList`
- `ProjectNavigation`

### About
- `ProfileIntro` (reuses the same `ProfileAvatar`)
- `ExperienceTimeline`
- `ExperienceItem`
- `SkillGroup`
- `EducationCard`
- `LanguageList`

### Contact
- `ContactInfoCard`
- `ContactForm`
- `FormField`
- `FormStatusMessage`

Use a small, consistent component family. Do not create a different design language for each page.

---

## 8. Content and data rules

1. Use the CV as the authoritative source for names, dates, roles, technologies, metrics, and project facts.
2. Do not invent a profile photo, project screenshots, brand logos, testimonials, ratings, client quotes, traffic/revenue/conversion metrics, awards, or certifications.
3. Use official project/company names exactly as written in the CV.
4. Keep `Lexus Egypt` visibly marked `In progress`.
5. Do not claim the Lexus website work is fully launched, even though a live brand domain is provided.
6. Do not invent demo links or GitHub repositories for Jai Dashboard, Treat Dashboard, Travel Booking, or any project without a supplied link.
7. Use a placeholder for missing screenshots: `Add real project screenshot`.
8. Keep tech lists accurate. Use only a subset on cards; preserve full lists on detail pages.
9. Do not add a `Download CV` button unless the CV PDF is intentionally added to the deployed site's public assets. If added, label it `Download CV` and link to the actual file.
10. Do not add an `Open to work` badge unless Amr confirms that status.
11. The current year in the copyright should be generated dynamically at implementation time.

---

## 9. Technical implementation handoff (for the developer, not Stitch)

Recommended implementation stack:
- Nuxt 3 or Nuxt 4
- Vue 3 with `<script lang="ts" setup>`
- TypeScript
- Tailwind CSS
- `@nuxtjs/i18n` for English/Arabic and RTL handling
- A lightweight icon set such as Nuxt Icon / Lucide

Implementation notes:
- Keep projects, skills, and experience in typed data files rather than hardcoding repeated card markup.
- Use semantic page components and shared UI components.
- Use Nuxt routing for the pages listed above and a reusable dynamic project detail route.
- Ensure project links are valid and use safe external-link attributes.
- Add SEO title/description per route, Open Graph metadata, sitemap, robots, and canonical URLs after the final domain is known.
- Use optimized local images / Nuxt Image for the supplied avatar and real project screenshots. Keep the avatar in one shared `ProfileAvatar` component so Home, About, and optional compact header usage always use the same source and crop rules.
- Implement motion with CSS transitions, Vue `<Transition>` / `<TransitionGroup>`, and `IntersectionObserver` reveal-once behaviour first. Avoid adding an animation package unless a concrete interaction cannot be handled cleanly without one.
- Provide an app-wide `prefers-reduced-motion` mode and test it on all routes.
- Implement theme persistence and locale switching intentionally; test refresh and direct route loading.
- For a portfolio site, keep dependencies minimal and avoid unnecessary animation libraries.
- Connect the contact form to a real backend or email service only after selecting and configuring one; the Stitch design is not backend functionality.

---

## 10. Asset checklist before implementation

Collect these assets from the owner before replacing placeholders:

- [ ] Amr's professional avatar/profile photo (required for the intended final hero/About treatment; until uploaded, use the `AM` placeholder). Store as `public/images/avatar.webp` or update the path to match the delivered file.
- [ ] Lexus Egypt screenshots that Amr is permitted to publish
- [ ] Abdal screenshots that Amr is permitted to publish
- [ ] Toyota Egypt screenshots that Amr is permitted to publish
- [ ] Attijariwafa Bank Egypt screenshots that Amr is permitted to publish
- [ ] Jai and Treat dashboard screenshots (with private/customer data hidden)
- [ ] Marca Store storefront screenshots
- [ ] Marca Store admin screenshots (with personal/customer data hidden)
- [ ] Lugar Store screenshots
- [ ] Gym Management Dashboard screenshots (with private data hidden)
- [ ] Al-Quran screenshots
- [ ] Ship-IT and Cospora screenshots
- [ ] Islam App and Movie App screenshots
- [ ] Final portfolio domain, if already selected
- [ ] Public CV PDF, only if a download action is desired

**Confidentiality:** Only publish client/project screens that Amr is authorised to share. Hide all personal data, API keys, tokens, customer records, and internal business information.

---

## 11. Acceptance checklist

The design is ready for implementation when:
- [ ] Home page communicates name, role, specialization, location, and primary CTA immediately.
- [ ] All five routes are designed: Home, Work, Project Detail, About, Contact.
- [ ] All 15 named project entries in the CV are represented in the Work archive.
- [ ] The four Code95 client projects are represented accurately.
- [ ] Jai and Treat dashboards are represented under Kabret.
- [ ] Featured cards prioritise meaningful work, not arbitrary visual variety.
- [ ] Project detail pages can hide unavailable content without awkward empty sections.
- [ ] Dark and light themes are both designed.
- [ ] English LTR and Arabic RTL layouts are both considered.
- [ ] Desktop, tablet, and mobile layouts are covered.
- [ ] Hover, focus, active, loading, validation, empty, and success states are specified where needed.
- [ ] No unsupported claims, fake metrics, fake client logos, fake testimonials, or invented links appear.
- [ ] Amr's actual avatar is used in the Home hero and About intro; the same source image and crop rules are reused. Until the photo is provided, the final-size monogram placeholder remains.
- [ ] Motion states are specified for hero/avatar entrance, section reveals, cards, buttons, navigation, theme/language switching, filters, and form feedback.
- [ ] Reduced-motion mode removes non-essential movement without hiding or delaying content.
- [ ] Missing real project images are represented by clearly labelled placeholders.
