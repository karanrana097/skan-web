# SKAN PG & Homes — Web & Legal Portal

Official web presence and regulatory compliance portal for **SKAN PG & Homes** (`com.skanpg.app`).

This static web repository is designed for instant deployment to host your mandatory Google Play Console compliance documents, landing page, and user data portals.

---

## 📄 Key Pages for Google Play Console Submission

When submitting your app on the **Google Play Console**, use the corresponding URLs provided by this portal:

| Google Play Console Requirement | Page File | Purpose & Description |
| :--- | :--- | :--- |
| **Privacy Policy URL** *(Mandatory)* | [`privacy.html`](privacy.html) | Fully compliant with Google Play User Data policies, DPDP (India), and GDPR. Covers camera, location, storage permissions, Firebase SDK, payment gateways, and data retention. |
| **App / Developer Website** | [`index.html`](index.html) | Modern landing page showcasing the app, zero-brokerage guarantee, digital tenant passes, and Google Play download CTA. |
| **Account & Data Deletion URL** *(Mandatory)* | [`delete-account.html`](delete-account.html) | Direct web portal allowing users to request permanent deletion of their account, KYC records, and active stay history without keeping the app installed. |
| **Terms of Service** | [`terms.html`](terms.html) | Zero-brokerage marketplace agreement, escrow deposit rules, and tenant code of conduct. |
| **Support / Helpdesk** | [`contact.html`](contact.html) | Official support channels, WhatsApp care, and designated statutory Grievance Officer details. |

---

## 🚀 Quick Deployment Options

### Option 1: GitHub Pages (Free & Instant)
1. Create a repository on GitHub named `skan-web` (or `skanpg-legal`).
2. Push this repo:
   ```bash
   git add .
   git commit -m "feat: initial skan-web portal with privacy policy & play console assets"
   git branch -M main
   git remote add origin https://github.com/<your-username>/skan-web.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings** > **Pages** > Select `main` branch > `/ (root)` > Save.
4. Your live URLs will be:
   - Privacy Policy: `https://<your-username>.github.io/skan-web/privacy.html`
   - Account Deletion: `https://<your-username>.github.io/skan-web/delete-account.html`

---

### Option 2: Firebase Hosting
If your project is already connected to Firebase (`skan-pg-dev`):
```bash
# In the skan-web directory
npx -y firebase-tools deploy --only hosting
```
The pre-configured `firebase.json` will serve all pages with clean URLs.

---

### Option 3: Vercel / Netlify
Drag and drop this directory into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for a free custom domain or `*.vercel.app` subdomain in under 30 seconds.

---

## 🎨 Design Tokens & Visual Language
Built using Vanilla CSS & standard HTML5:
- **Canvas:** `#F8FAFC`
- **Midnight Contrast:** `#0F172A`
- **Emerald Accent (Zero Brokerage / Trust):** `#10B981`
- **Warm Saffron (Highlights):** `#F59E0B`
- **Typography:** Google Fonts Inter
