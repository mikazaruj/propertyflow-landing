# Still Kettle Web

Landing pages for Still Kettle and its products.

## Structure

```
/
├── index.html          # stillkettle.com
├── privacy.html        # stillkettle.com/privacy
├── terms.html          # stillkettle.com/terms
└── stella/
    ├── index.html      # stella.stillkettle.com
    ├── privacy.html    # stella.stillkettle.com/privacy
    ├── terms.html      # stella.stillkettle.com/terms
    ├── success.html    # Stripe success page
    ├── js/
    └── images/
```

## Deployment (Vercel)

This repo uses a monorepo setup with separate Vercel projects:

| Vercel Project | Domain | Root Directory |
|----------------|--------|----------------|
| stillkettle | stillkettle.com | `/` |
| stella | stella.stillkettle.com | `/stella` |

### Setup Instructions

1. Create Vercel project for main site:
   - Import repo, set Root Directory to `/`
   - Add domain: `stillkettle.com`

2. Create Vercel project for Stella:
   - Import same repo, set Root Directory to `/stella`
   - Add domain: `stella.stillkettle.com`

## Local Development

```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

## Adding New Products

1. Create folder: `/product-name/`
2. Add `index.html`, `privacy.html`, `terms.html`
3. Create new Vercel project pointing to `/product-name/`
4. Add product card to main `index.html`

## TODO Before Launch

### Still Kettle (main site)
- [ ] Update legal pages with actual entity information
- [ ] Add OG image
- [ ] Set up stillkettle.com domain in Vercel

### Stella
- [ ] Replace hero screenshot placeholder with actual screenshot
- [ ] Add real Chrome Web Store link to all "Install" buttons
- [ ] Configure Paddle with production keys
- [ ] Add OG image (`stella/images/og-image.png`)
- [ ] Set up stella.stillkettle.com domain in Vercel

## Paddle Integration (Stella)

The Pro checkout button is configured in `stella/js/main.js`. To enable:

1. Get your Paddle client token
2. Add Paddle.js script to `stella/index.html`
3. Update the checkout button handler with your price ID
