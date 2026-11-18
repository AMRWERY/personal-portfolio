# Avatar Asset Guide — Amr Mohamed Portfolio

## What to upload
Provide one clear, recent portrait photo of yourself. A chest-up or head-and-shoulders photo works best. Face the camera or turn slightly (three-quarter view), use good even lighting, and keep the face unobstructed. A simple background is ideal but not required.

Preferred file formats: WEBP, JPG/JPEG, or PNG. A portrait-oriented image is recommended. Avoid screenshots, collages, group photos, filters, heavy retouching, and images with text or watermarks.

## Where it appears
1. **Home hero:** primary portrait, approximately 4:5 crop and 300–360 px wide on desktop. Keep face and shoulders visible.
2. **About intro:** the same photo at approximately 168–220 px wide, with the same crop/treatment.
3. **Header:** optional compact 28–32 px avatar on desktop only if it does not make the navigation crowded. Do not force it into the mobile header.

## Visual treatment
- Use the actual photo; do not generate or replace the face.
- Do not apply beauty filters, reshape features, alter skin tone, synthesize lighting, or place text across the face.
- Use `object-fit: cover` with a deliberate `object-position` so the head is not clipped.
- Use a 20–24 px rounded rectangle for the main portrait, a quiet 1 px border, and a subtle shadow.
- Keep the portrait calm and editorial. No neon ring, glowing orb, spinning frame, or constant floating animation.
- Animate the avatar only once on entry with a subtle 420 ms fade + 8–12 px rise. Respect reduced motion.

## File placement for the coded site
Save the final optimised asset as:

`public/images/avatar.webp`

Then reference it through one shared `ProfileAvatar` component so Home and About use the same source and crop. If you keep a `.jpg` or `.png` extension, update the source path consistently.

## Temporary placeholder
Until the real photo is available, use an `AM` monogram placeholder with the exact final frame dimensions and crop area. Do not use a stock portrait or invent a human face.

## Alt text
Use `Portrait of Amr Mohamed` when the image conveys identifying information. If it is purely decorative and the nearby heading already identifies Amr, an empty alt attribute is acceptable.
