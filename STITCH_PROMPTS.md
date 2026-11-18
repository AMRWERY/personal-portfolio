# Stitch Prompts — Amr Mohamed Personal Portfolio

Use these prompts in order. Start with **Prompt 00** to establish the visual language. Then generate each page separately. Keep the same project and component language across all screens. The full content and factual source of truth are in `design.md`.

## How to use this pack

1. Open Stitch and start a new portfolio project.
2. Paste **Prompt 00 — Global Design System** first.
3. Generate the Home page using Prompt 01.
4. Generate Work, Project Detail, About, and Contact using Prompts 02–05.
5. Generate the Arabic RTL variant using Prompt 06 after the English layouts are approved.
6. For missing project visuals, leave labelled placeholders. Replace them with real screenshots later.
7. If Stitch supports attaching reference files, attach `design.md` alongside the prompt.

---

## Prompt 00 — Global Design System and Art Direction

Design a premium, modern personal portfolio website for **Amr Mohamed**, a Frontend Developer specializing in Vue.js, Nuxt.js, and TypeScript. Follow the attached `design.md` as the source of truth for content, information architecture, design rules, and project facts.

**Art direction: “Midnight Editorial.”** Create a calm, premium engineering portfolio with a deep ink background (`#0B1017`), slightly lighter card surfaces (`#111923` and `#172231`), subtle blue-grey borders (`#263445`), bright warm-white text (`#F3F6FA`), muted secondary text (`#A5B1C0`), and a restrained blue accent (`#56B4F8`). Also define a complete warm off-white light theme with the same accent. Use **Montserrat only** for typography.

The visual experience should feel crafted, confident, precise, and product-minded. Use a strong typographic hierarchy, generous whitespace, editorial grid layouts, clean cards, thin borders, small purposeful accents, and high-quality real-project media placeholders. It must not look like a generic developer template.

Use Amr's actual uploaded avatar as a core brand asset. Place it in the Home hero and About intro using the same shared portrait treatment: 4:5 editorial crop, 20–24 px corners, subtle border, natural photo colour, no face filters or text overlay. If no avatar is attached yet, use a final-sized `AM` monogram placeholder that can be replaced without changing layout. Never invent or source a stock portrait.

Define a complete motion language alongside the visual system: 140 ms micro-interactions, 200 ms standard transitions, 240–280 ms menu/panel transitions, and 420 ms one-time entrance reveals. Use restrained fade + 8–16 px rise, 40–70 ms stagger for sibling cards, small project-card lift, subtle image scale up to 1.02, smooth theme colour transitions, and clear hover/focus/pressed/open/closed states. Include reduced-motion variants. No bounce, constant floating, parallax, scroll-jacking, cursor-following effects, or animated backgrounds.

Create a reusable visual system for:
- Desktop, tablet, and mobile breakpoints
- Main navigation and mobile navigation
- Primary, secondary, and text buttons
- Section headings and eyebrow labels
- Project cards and featured project cards
- Technology tags and status badges
- Timeline items
- Form fields and form states
- Footer, theme switch, and language switch
- Shared `ProfileAvatar` with a real-photo state and a final-size `AM` monogram fallback
- Motion storyboards and state variants for hero/avatar entrance, section reveals, project-card hover, buttons, menus, theme/language controls, filters, and contact-form feedback
- Reduced-motion variants for every non-essential animated state

**Avoid:** neon cyberpunk styling, excessive gradients, glassmorphism everywhere, glowing blobs, code-rain backgrounds, random 3D illustrations, fake client logos, stock developer portraits, fake app screenshots, testimonial cards, star ratings, and decorative charts.

Use a maximum content width around 1200–1280 px. Use a 12-column desktop grid, comfortable tablet spacing, and a single-column mobile layout. Main cards should have approximately 16–20 px corner radii. Buttons and inputs should have approximately 10–12 px radii. Interactive elements need visible focus states and clear contrast.

Set the global tone and components so every later screen feels like part of one cohesive website. Do not write implementation code. Generate the design system and a representative component/style board first.

---

## Prompt 01 — Home / Landing Page

Create the **desktop Home page** for Amr Mohamed's personal portfolio, following the established Midnight Editorial design system and `design.md`.

### Header
A compact sticky header with an `AM.` monogram wordmark on the left; navigation links `Home`, `Work`, `About`, `Contact`; theme toggle; `EN / AR` language switch; and a restrained `Let's talk` button. Keep it elegant and uncluttered.

### Hero
Use a balanced two-column editorial layout. On the left:
- Eyebrow: `FRONTEND DEVELOPER · CAIRO, EGYPT`
- Large headline: `I build thoughtful web experiences with Vue.js & Nuxt.js.`
- Supporting paragraph: `Frontend Developer with 3+ years of experience building production websites, e-commerce platforms, and admin dashboards. Focused on Vue.js, Nuxt.js, TypeScript, reusable UI, and reliable API integration.`
- Primary CTA: `Explore my work`
- Secondary CTA: `Get in touch`
- Small location line: `Based in Cairo, Egypt`

On the right, place Amr's actual uploaded avatar as the hero identity visual: portrait-oriented 4:5 crop, approx. 300–360 px wide on desktop, 20–24 px corner radius, quiet border and subtle shadow. Preserve the real face and natural photo; do not apply face filters, artificial lighting, or text overlays. If the avatar has not been attached yet, use an oversized `AM` monogram in the exact same frame dimensions as a replaceable placeholder. Never use stock photography or generate a face. Animate the hero text and avatar once on entry using a 420 ms fade-and-rise of only 8–12 px, with the avatar slightly offset in timing; do not loop or float it.

### Impact strip
Show four compact factual metrics with short labels:
- `3+` — Years of frontend experience
- `30` — Pages in Marca Store's two-app project
- `46` — Reusable components in Marca Store
- `100+` — Views in the Gym Management Dashboard

Keep attribution clear; these metrics come from different projects.

### Featured work
Show four premium project cards, with real screenshot placeholders clearly labelled for later replacement:
1. `Lexus Egypt — Official Website` — `In progress`; Frontend Developer — Project Owner; Nuxt.js, TypeScript, Tailwind CSS. Summary: Owns the frontend from initial setup and architecture through UI development and API integration.
2. `Marca Store — E-Commerce Platform` — Freelance; Vue.js, Pinia, Tailwind CSS, Firebase. Summary: Two-app e-commerce frontend for Egypt and Saudi Arabia, with 30 pages and 46 reusable components.
3. `Gym Management Dashboard — ASAGTC` — Freelance; Vue.js, Vuex, Pusher, Laravel Echo. Summary: Dashboard with 100+ views, real-time updates, and report exports.
4. `Abdal — Recruitment Services Platform` — Professional; Vue.js, REST API, Bootstrap. Summary: Saudi recruitment platform with Visa, Mada, and STC Pay integrations.

Each card has a project category, short summary, up to 3 tech tags, and a clear `View case study` link. Do not add fake client logos or fake project imagery.

### Capabilities
Add a clean 3×2 grid of capability cards:
- Vue.js & Nuxt.js Development
- Reusable Components & Frontend Architecture
- E-Commerce & Admin Dashboards
- REST API Integration
- Arabic / English & RTL Interfaces
- Payment Integrations & Role-Based Interfaces

### Experience preview
Show a compact vertical or horizontal career preview:
- Code95 Web Technologies — Frontend Developer — Jul 2025–Present
- Kabret — Frontend Developer — Jan 2024–May 2025
- Freelance Frontend Projects — Apr 2023–Nov 2025
Add `View full experience` linking to About.

### Skills preview and final CTA
Show a restrained row of Vue.js, Nuxt.js, TypeScript, JavaScript, Pinia, Tailwind CSS, REST APIs, Firebase, and Vuex tags. End with a strong contact panel: `Have a project or role in mind? Let's talk.` and an email/contact CTA.

Keep the page balanced and not overly long. Do not add an `Open to work` badge. Include a polished footer.

Also generate a **mobile Home page** for the same design: compact header with menu, stacked hero, Amr's avatar below or beside the introduction at a useful size (not a tiny thumbnail), single-column featured projects, compact metric layout, and full-width CTAs. If no photo is attached, retain the `AM` placeholder at the same final dimensions. Prevent horizontal overflow and preserve generous spacing. Specify the mobile menu open/close transition and reduced-motion state.

---

## Prompt 02 — Work / Projects Archive

Create the **Work page** for Amr Mohamed's portfolio using the same established Midnight Editorial design system. Use `design.md` for the complete factual content. This page must look like a curated engineering portfolio, not a dense CV list.

### Page intro
- Breadcrumb or small eyebrow: `PORTFOLIO / WORK`
- Heading: `Selected work`
- Supporting copy: `A selection of production work, freelance projects, and personal builds across e-commerce, dashboards, content, and web applications.`

### Filter bar
Create clear, accessible filter chips:
- All
- Professional
- Freelance
- Personal

The selected state must be visually obvious without relying on colour alone. Design a clear empty state even if the final data currently fills every filter.

### Project grid
Use a responsive editorial grid: 2 columns on desktop, 1 column on mobile. Use featured wider cards for Lexus Egypt and Marca Store, then consistent cards for the rest. Each project card must contain:
- Screenshot/media placeholder labelled `Add real project screenshot` until real media is supplied
- Project title
- Project type/category
- Date or status where appropriate
- Short, factual summary
- A small selection of technology tags
- `View case study` affordance
- Optional live/repository links only when present in the CV

Include **all 15 named project entries** from the CV, organised as follows:

**Professional:** Lexus Egypt, Abdal, Toyota Egypt, Attijariwafa Bank Egypt, Jai Dashboard, Treat Dashboard.

**Freelance:** Marca Store, Lugar Store, Travel Booking Website — O Tech Company, Gym Management Dashboard — ASAGTC Company.

**Personal:** Al-Quran, Ship-IT, Cospora, Islam App, Movie App.

Important: the list above contains 15 project entries when Jai/Treat are counted separately. Include every one of these 15 named entries; do not drop any project. Use exact summaries, dates, tools, and links from `design.md`.

Show the Lexus project with a visible `In progress` badge. Do not invent public links for Jai Dashboard, Treat Dashboard, or Travel Booking. Add a calm footer and contact CTA.

Generate desktop and mobile layouts. On mobile, allow filter chips to wrap or scroll horizontally without hiding their labels. Specify a short filter selected-state transition and a restrained grid update (fade with at most 6–8 px movement); do not animate every card with a long stagger.

---

## Prompt 03 — Reusable Project Case Study Detail

Create a **reusable project detail page template** for Amr Mohamed's portfolio. Use the established Midnight Editorial visual language and the project data in `design.md`.

Design the page with these sections:
1. Breadcrumb: `Home / Work / [Project name]`
2. Project category, title, role, date range, and optional status badge
3. A concise factual project overview
4. Large hero media stage for real screenshots, labelled as a placeholder until images are provided
5. `My contribution` section with clear, scannable factual bullet points
6. `Highlights` section for verified project outcomes and numbers only
7. `Technology stack` section using consistent tech tags
8. Available links: live website, storefront repository, admin repository, or source repository — only when supplied
9. Previous / next project navigation
10. A strong but minimal `Let's talk` CTA and footer

Use a wide 16:9 or 16:10 media area. Add a supporting screenshot gallery pattern below it. Do not make up screenshots, analytics, customer reviews, performance scores, conversion data, or business impact. Hide sections when project data is unavailable.

For the example visual content, use **Marca Store** because it has rich verified information:
- Built two production frontend apps: customer storefront and admin app
- 30 pages, 46 reusable components, 21 Pinia stores
- Three account types: Admin, Employee, Merchant, with separate permissions
- Arabic/English support and RTL layouts for Egypt and Saudi Arabia
- Stack: Vue.js, Vite, Pinia, Tailwind CSS, vue-i18n, VeeValidate, Firebase
- Live: `https://marca-store-user.vercel.app`
- Storefront code: `https://github.com/AMRWERY/Marca-Store---user`
- Admin code: `https://github.com/AMRWERY/Marca-Store---admin`

Also provide an alternate compact header treatment for **Lexus Egypt** with a visible `In progress` status and role `Frontend Developer — Project Owner`. State that the work covers frontend setup, architecture, UI development, and API integration and remains in progress. Do not imply the new site has launched.

Generate desktop and mobile layouts. Show image-gallery selected states and previous/next project navigation states. Use short opacity transitions for gallery changes and subtle entrance reveals for the case-study sections; respect reduced motion.

---

## Prompt 04 — About / Experience / Skills

Create the **About page** for Amr Mohamed's personal portfolio. Follow the established Midnight Editorial design system and all content in `design.md`.

### Intro
- Eyebrow: `ABOUT`
- Heading: `A little about how I build.`
- Bio: `I'm Amr Mohamed, a frontend developer based in Cairo, Egypt. I have 3+ years of experience building Vue.js and Nuxt.js applications, from customer-facing websites and e-commerce storefronts to admin dashboards. I focus on maintainable interfaces, reusable components, API integration, and accessible Arabic/English experiences.`
- Reuse Amr's actual uploaded avatar in a refined portrait frame, consistent with the Home hero. If no photo is attached, use the final-size `AM` monogram placeholder. Never use stock photos or synthesize a face. Preserve the crop, natural appearance, and contrast; do not place text over the face.

### Working approach
Create four clear steps as cards or a horizontal process:
1. Understand product requirements and user flows.
2. Set up clear frontend structure and reusable components.
3. Build responsive interfaces and connect them to REST APIs.
4. Debug, refine, and collaborate with backend teammates through delivery.

### Experience timeline
Create a readable timeline with exact dates:
- `Code95 Web Technologies` — Frontend Developer — Cairo, Egypt — `Jul 2025–Present`. Associated projects: Lexus Egypt, Abdal, Toyota Egypt, Attijariwafa Bank Egypt.
- `Kabret` — Frontend Developer — Cairo, Egypt — `Jan 2024–May 2025`. Associated projects: Jai Dashboard and Treat Dashboard.
- `Freelance Frontend Developer` — Part-time engagements — `Apr 2023–Nov 2025`. Projects include Gym Management Dashboard, Travel Booking Website, Lugar Store, and Marca Store.

### Technical skills
Display grouped tags with no progress bars, percentages, or star ratings:
- Frontend: Vue.js, Nuxt.js, Composition API, JavaScript (ES6+), TypeScript, HTML5, CSS3
- UI and Styling: Tailwind CSS, Vuetify, Bootstrap, Headless UI, Responsive Design
- State, Routing and Forms: Pinia, Vuex, Vue Router, VeeValidate, Vuelidate, VueUse
- APIs and Backend Services: REST API Integration, Firebase, Supabase, Pusher, Laravel Echo, Real-Time Updates
- Internationalization: vue-i18n, Nuxt i18n, Arabic/English, RTL Layouts
- Tooling and Deployment: Vite, Git, GitHub, GitLab, Husky, Commitlint, Vercel
- Additional: Payment Gateway Integration, RBAC, SEO Meta Management, ApexCharts, PDF/Excel Export, Debugging, Cursor, Claude Code

### Education and languages
- Bachelor of Law (LL.B.) — Cairo University, Egypt — 2012
- Arabic — Native
- English — Professional working proficiency

Use strong hierarchy and spacious sections. The portrait may enter once with a 200–280 ms subtle fade/slide; timeline and skill groups reveal once with a restrained stagger. Do not animate the avatar continuously. Do not invent soft skills, awards, certifications, or educational details beyond the CV. Generate desktop and mobile layouts and reduced-motion states.

---

## Prompt 05 — Contact Page

Create the **Contact page** for Amr Mohamed's portfolio, using the same Midnight Editorial design system.

### Intro
- Eyebrow: `CONTACT`
- Heading: `Let's build something useful.`
- Supporting text: `Have a role, project, or collaboration in mind? Send me a message.`

### Two-column desktop layout
Left column: contact information in simple, elegant cards or rows:
- Email: `amrmounir2@gmail.com`
- Phone: `+20 102 265 5742`
- Location: `Cairo, Egypt`
- LinkedIn: `https://www.linkedin.com/in/amr-mohamed-3a714b1a7`
- GitHub: `https://github.com/AMRWERY`

Right column: a refined contact form with:
- Name (required)
- Email (required)
- Subject (optional)
- Message (required)
- Submit button: `Send message`

Design all form states: default, focused, validation error, sending/loading, success, and server failure/retry. Use clear labels, accessible error messages, and comfortable input sizes. Do not add fake CAPTCHA or pretend the form is connected to email delivery; this is a UI design until a backend/email service is configured.

On mobile, stack contact information and form vertically. Add a minimal footer and avoid excessive decorative graphics. Show the transition between validation, sending, success, and error states without large movement or layout jumps.

---

## Prompt 06 — Arabic RTL Version

Create the **Arabic version of the portfolio screens** while preserving the exact Midnight Editorial design system, component shapes, spacing rhythm, and visual hierarchy from the approved English screens.

This is a true RTL adaptation, not simply right-aligned English content:
- Set the page direction to RTL.
- Mirror navigation order and layout where appropriate.
- Align headings, body text, metadata, project cards, filters, timelines, and form labels correctly for Arabic reading.
- Keep familiar Latin technology names and official company/product names in Latin script.
- Mirror directional icons such as arrows and breadcrumbs, but do not mirror non-directional brand marks or technology logos.
- Keep language and theme controls accessible and correctly positioned.
- Check mobile menu direction, form field alignment, chip order, and horizontal overflow. Mirror directional motion cues appropriately for RTL, but do not mirror the portrait or AM brand mark. Preserve the same motion durations and reduced-motion behaviour.
- Use a suitable Arabic font only for Arabic glyphs if Montserrat does not support the needed glyph coverage; preserve Montserrat for Latin text. The English version must continue to use Montserrat.

Use concise, natural Arabic copy equivalent to the English content. Do not use awkward literal translations or leave mixed-direction punctuation broken. Preserve all CV facts and project metrics. Do not add new claims.

Generate RTL variants of Home, Work, Project Detail, About, and Contact in both desktop and mobile layouts.

---

## Prompt 07 — Global States and Responsive Polish

Review all generated portfolio screens as one cohesive product. Do not redesign the visual identity. Refine consistency and generate missing system states.

Check and design:
- Desktop, tablet, and mobile header states
- Open/closed mobile navigation
- Dark and light themes
- EN/LTR and AR/RTL layouts
- Hover, pressed, selected, disabled, and keyboard-focus states for links, buttons, chips, and cards
- Project archive filter selected state and empty state
- Project card with and without screenshot media
- Project detail page with and without GitHub/live links
- Lexus `In progress` status treatment
- Contact form validation errors, submitting, success, and error/retry states
- Footer at desktop and mobile widths
- Avatar present in Home hero and About intro, using the same supplied source image and consistent crop; header mini-avatar only when it fits cleanly
- Avatar placeholder state if the actual photo is not available
- Hero/avatar entrance, section reveals, project-card hover, button states, mobile menu, theme/language switch, filters, and form feedback transitions
- Reduced-motion mode with all content immediately visible

Check visual consistency in typography, card radius, border colour, spacing, button sizing, tag style, and icon weight. Ensure readable contrast and minimum 44 × 44 px mobile touch targets. Respect reduced-motion preferences. Remove any fabricated content or fake assets introduced during generation.

The result should look like one carefully art-directed developer portfolio, not a set of unrelated generated pages.


---

## Prompt 08 — Apply the Motion System and Integrate Amr's Avatar

Review and update **all previously generated screens** in this portfolio. Preserve the approved Midnight Editorial visual identity, layouts, typography, spacing, colour tokens, and CV-based content. Do not redesign the website.

### Avatar integration
- Use the actual portrait image attached by Amr as the single source for his avatar.
- Place it prominently in the Home hero as a refined 4:5 editorial portrait (roughly 300–360 px wide on desktop), with 20–24 px rounded corners, subtle border, and natural crop.
- Reuse the same photo in the About intro at a smaller size. Do not introduce a different image for each page.
- Add a compact header avatar only if it does not crowd the `AM.` wordmark or navigation; omit it on narrow mobile headers.
- Preserve the real face and natural appearance. Do not generate, retouch, reshape, apply filters to, or replace the person's face. No stock portrait and no text overlay across the face.
- If the portrait has not yet been supplied, keep an `AM` monogram placeholder in the exact final frame dimensions and crop area so the real asset can replace it without layout changes.

### Motion storyboard and states
Create before/after or state frames, and prototype transitions where the tool supports them, for:
1. Home hero copy and avatar: one-time opacity + 8–12 px rise, about 420 ms, with a restrained 40–70 ms sequence between text groups and portrait.
2. Section reveal: fade + 8–12 px rise once on entry; sibling cards stagger by 40–70 ms, with total delay capped around 280 ms.
3. Project cards: hover elevation 3–4 px, subtle border emphasis, screenshot scale no more than 1.02; return smoothly to rest on pointer exit.
4. Buttons and links: 140–200 ms colour/border/underline changes; a 1 px lift on hover; clear pressed and keyboard-focus states.
5. Header: subtle background/border transition on scroll; active navigation underline transition.
6. Mobile navigation: open/closed states with 240–280 ms fade + 8–12 px slide; clear close button and focus state.
7. Theme toggle: background, surface, text, and border colours transition together in approximately 200 ms.
8. Language switch: brief 160–220 ms opacity transition while preserving layout and current page where possible.
9. Work filters and project grid: selected chip changes in 140–180 ms; grid updates use only a small fade/translate, not a large cascade.
10. Contact form: restrained status transitions for validation, sending, success, and failure; avoid layout jumps.

### Easing and constraints
Use these shared values everywhere: 140 ms micro, 200 ms standard, 280 ms panel, 420 ms entrance. Use `cubic-bezier(0.2, 0, 0, 1)` for micro/standard and `cubic-bezier(0.22, 1, 0.36, 1)` for panels/entrances. Animate opacity and small transforms; do not use bounce, elastic motion, large rotation, parallax, scroll-jacking, cursor-following effects, constant floating, or animated backgrounds. Do not use `transition: all`.

### Accessibility and reduced motion
Create a reduced-motion state for the site. When `prefers-reduced-motion: reduce` is active, remove non-essential movement, reveals, stagger delays, and smooth scrolling. Content must be visible immediately. Preserve clear state changes, focus visibility, and usable menu/form behaviour.

Deliver a consistent motion storyboard for desktop, tablet, mobile, English LTR, and Arabic RTL. In RTL, mirror directional movement where appropriate but never mirror the portrait or monogram. Ensure the avatar never obscures text and never becomes so small that it is meaningless.

Do not add invented testimonials, client logos, project screenshots, performance data, or unsupported CV claims. The result must remain a credible portfolio for Amr Mohamed.
