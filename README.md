# Amr Mohamed — Portfolio Stitch Kit

This package contains the design brief and ready-to-paste prompts for generating Amr's personal portfolio in Stitch.

## Files
- `design.md` — source of truth for the portfolio: visual design, site map, exact CV-based content, responsive behaviour, interaction and motion rules, avatar placement, accessibility, and implementation handoff.
- `STITCH_PROMPTS.md` — sequential prompts for the global system, Home, Work archive, project detail, About, Contact, Arabic RTL, final QA, and a dedicated motion/avatar integration pass.
- `AVATAR_ASSET_GUIDE.md` — portrait recommendations, exact asset placement, crop rules, and avatar fallback behaviour.

## Recommended Stitch workflow
1. Start a new Stitch project.
2. Add `design.md` as a reference if file attachments are supported.
3. If you have your portrait ready, attach it as a reference image and follow `AVATAR_ASSET_GUIDE.md`.
4. Paste Prompt 00 to establish the visual and motion system.
5. Generate the Home, Work, Project Detail, About, and Contact pages using Prompts 01–05.
6. Generate Arabic RTL using Prompt 06 after the English layouts are approved.
7. Run Prompt 07 to review global states and Prompt 08 to apply the avatar and motion consistently across all pages.
8. Replace all labelled project media placeholders with real screenshots you are permitted to publish.

## Avatar status
The current package is ready for your avatar but does not contain your personal photo yet. Until you upload it, Stitch should use the final-sized `AM` monogram placeholder. For implementation, place the supplied image at `public/images/avatar.webp` (or update the path to the actual filename) and use it through one shared `ProfileAvatar` component.

## Motion implementation note
Stitch can establish visual states and prototype transitions where supported. For the coded Nuxt/Vue website, implement the specified movement with CSS transitions, Vue `<Transition>` / `<TransitionGroup>`, and `IntersectionObserver` reveal-once behaviour first. Keep an accessible `prefers-reduced-motion` mode. Avoid adding an animation library unless a specific interaction requires it.

## Important
The CV contains no profile photo or project screenshots. Do not use stock/fabricated portraits or fake project imagery. The CV also does not provide public links for Jai Dashboard, Treat Dashboard, or the O Tech Travel Booking project, so no links should be invented. Only publish client/project screens that Amr is authorised to share, with private data removed.
