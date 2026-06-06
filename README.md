# Hawthorne East Village Milton — Lead Generation Site

Static lead-gen site for **Hawthorne East Village by Mattamy Homes** in Milton, Ontario. Independently marketed by authorized VIP real estate professionals.

**Canonical domain:** [hawthorneeastvillagemilton.com](https://hawthorneeastvillagemilton.com)

## Tech Stack

- [Astro](https://astro.build) (static output)
- Tailwind CSS v4
- Minimal client JS (forms, modals, exit-intent)
- Self-hosted fonts via Fontsource (Cormorant Garamond + Montserrat)

## Quick Start

```bash
npm install
cp .env.example .env
# Set PUBLIC_N8N_WEBHOOK_URL in .env
npm run dev
```

Open `http://localhost:4321`

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PUBLIC_N8N_WEBHOOK_URL` | Yes (production) | n8n webhook URL for lead JSON POST |

Example `.env`:

```
PUBLIC_N8N_WEBHOOK_URL=https://your-n8n.example.com/webhook/xxxx
```

## Lead Flow (n8n → Follow Up Boss → Twilio)

The front end **only** POSTs JSON to `PUBLIC_N8N_WEBHOOK_URL` on form submit.

**Expected n8n workflow (configure in n8n, not in this repo):**

1. **Webhook** node receives POST with payload:
   - `firstName`, `lastName`, `email`, `phone`
   - `interest`, `budget`, `timeline` (when provided)
   - `source`: `"hawthorneeastvillagemilton.com"`
   - `page_path`, `form_type`, `timestamp`
   - `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` (when present)
2. **Follow Up Boss** node creates/updates contact with tags (project name, home type, UTM).
3. **Twilio** node sends auto-text to the lead within ~60 seconds confirming registration and that Fahad will follow up.
4. Optional: email notification to Fahad.

On success, the browser redirects to `/thank-you/` and fires `generate_lead` (when GA4 is enabled).

## Build & Deploy

```bash
npm run build    # generates images + static dist/
npm run preview  # serve dist/
```

Deploy `dist/` to **Netlify**, **Vercel**, or **Cloudflare Pages**.

## Secondary Domain 301 Redirects

Consolidate SEO equity on `hawthorneeastvillagemilton.com`:

| Secondary domain | Action |
|------------------|--------|
| `hawthorneeastvillage.com` | 301 → canonical |
| `hawthroneeast-village.com` | 301 → canonical |

### Vercel

`vercel.json` includes host-based 301 rules. Add all domains in the Vercel project settings.

### Netlify

In **Domain management**, set each secondary domain to redirect to the primary site. See comments in `public/_redirects`.

### Cloudflare

Create Page Rules or Redirect Rules: `*hawthorneeastvillage.com/*` → `https://hawthorneeastvillagemilton.com/$1` (301).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Master landing + hero form |
| `/floor-plans/` | Sizes, gallery, gated floor plan download |
| `/prices/` | Price table, deposits, incentives |
| `/townhomes/` | Village & rear lane detail |
| `/detached/` | Detached home detail |
| `/location/` | Milton location & investment story |
| `/faq/` | Full FAQ (AEO) |
| `/register/` | VIP registration (lead scoring fields) |
| `/thank-you/` | Confirmation + conversion event |

## Analytics Placeholders

Edit `src/components/AnalyticsPlaceholder.astro`:

- Google Analytics 4 (`G-XXXXXXXXXX`)
- Google Tag Manager
- Meta Pixel

`/thank-you/` fires `generate_lead` via `gtag` and `fbq` when configured.

## Images

Placeholder hero/OG images are generated at build time (`npm run prebuild`). Replace files in `public/images/` with professional Mattamy/community photography before launch.

## Compliance

Every page includes RECO/TRESA footer disclaimer. This is **not** the official builder website.

## License

Private — Hawthorne East Village VIP Sales
