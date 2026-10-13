# Summit Ridge Roofing — Marketing Website Demo

A responsive, static roofing company website built with **HTML + CSS + JavaScript**. No Node.js, build command, framework, or backend is needed. House photography loads from Unsplash image URLs; an internet connection is required to display these images. The favicon is included locally.

## GitHub Pages deployment (no coding required)

1. Unzip the project.
2. Create a new **public** repository at https://github.com/new (for example, `roofing-sales-demo`).
3. In the repository, click **Add file → Upload files**.
4. Drag **the contents of the unzipped `roofing-sales-demo` folder** into the upload area. Make sure `index.html` is at the repository root alongside `styles.css` and `script.js` (not inside an extra nested folder).
5. Commit the files.
6. Go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
7. Open `https://YOUR-USERNAME.github.io/roofing-sales-demo/` after GitHub completes deployment.

## Personalization checklist

- **Company name:** Search for `Summit Ridge` in `index.html` and replace it with a real company name.
- **Phone:** Replace `(956) 555-0148` and `+19565550148` in `index.html` with a real phone and dialable number.
- **Email:** Replace `hello@summitridgeroofing.example` in both `index.html` and `script.js`.
- **Copy:** Adjust service area, service promises, materials, and estimate availability to match the business.
- **Testimonials:** The example reviews are **fictional and labeled**. Replace with actual, approved testimonials before commercial launch.
- **Photos:** Replace the Unsplash URLs in `styles.css` with actual licensed roofing-project photos if using commercially.
- **SEO:** Update the `<title>` and `<meta name="description">` in `index.html` for your actual target city and services.

## Important: estimate form behavior

GitHub Pages is a static host; it cannot receive form submissions by itself. The demo form uses `mailto:` to open the visitor's default email app with their details prefilled. **It does not transmit any details on its own and may not work for users without a configured email app.** For actual lead capture, connect the form to a service like Formspree, Basin, Netlify Forms (on a compatible host), or a custom endpoint. Test consent, spam protection, privacy policy, and data retention before accepting real customer data.

## Website features

- Fully responsive layout and accessible mobile navigation
- Service pages/sections, clear CTAs, process breakdown, FAQ accordion
- Client-side form validation and email draft preparation
- Semantic headings, meta description, image alt descriptions, skip link, keyboard focus styles
- No external JavaScript dependencies; font uses Google Fonts with system-font fallback
- Demo background photography served from Unsplash; locally included SVG favicon

**This is a fictional business demo, not a representation of an existing licensed contractor.**
