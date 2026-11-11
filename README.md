# Satyajit Mohapatra — AI Engineer Portfolio

A responsive, high-performance portfolio website engineered for **Satyajit Mohapatra (AI Engineer)** using React 19, Vue 3 Architecture Lab, Tailwind CSS v4, Framer Motion, and Locomotive Scroll.

---

## 🚀 Deploying to GitHub Pages

This project is configured with relative base paths (`base: './'`) in `vite.config.ts`, making it deployable on GitHub Pages whether at a root custom domain (`https://yourdomain.com`) or a repository subpath (`https://<username>.github.io/<repo-name>/`).

### Option 1: Automated GitHub Actions (Recommended)
An automated workflow is already configured at `.github/workflows/deploy.yml`:
1. Push this repository to GitHub on branch `main` or `master`.
2. In your repository on GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build and publish your portfolio in seconds.

### Option 2: Deploy from Branch / Root
1. Run `npm run build` locally.
2. The generated production assets will be placed into the `dist/` directory with relative links.
3. In GitHub Settings > Pages, choose **Deploy from a branch** and point to `gh-pages` or your deployment branch.

---

## 🛠️ Development & Build Commands

- `npm run dev`: Launch local development server on `http://localhost:3000`.
- `npm run build`: Compile production-ready bundle into `dist/`.
- `npm run lint`: Run TypeScript type-checking without emitting code.
