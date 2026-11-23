# Executive Performance Dashboard | STEP & InnovaBeyond Digital

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)

An executive-level, single-page Power BI-style performance reporting dashboard for **STEP** and **InnovaBeyond Digital**. Features automated live synchronization with online Google Sheets, quarterly and multi-brand slicers, interactive brand logos, responsive Chart.js analytics, and light/dark theme modes.

---

## 🌟 Key Features

- **Automated Live Google Sheet Synchronization**: Seamlessly pulls real-time operating metrics from published Google Sheets across all 39 operating weeks with 1-click on-demand sync and automatic periodic background refresh.
- **Power BI-Style Slicers**:
  - **Brand Switcher**: Instant switching between **STEP Individual View**, **InnovaBeyond Digital View**, and **Executive Side-by-Side Comparison**.
  - **Period / Quarter Slicer**: Filter by **All (39W)**, **Q1**, **Q2**, **Q3**, or **Q4** with instant scorecard and chart updates.
- **Sustainability Nature & Eco Palette**:
  - Eco Forest Green (`#137547`), Deep Emerald (`#0F5132`), Leaf Green (`#2D6A4F`), Mint Green (`#52B788`).
  - Warm Earth-Gold Accents (`#B29A4B`, `#C5A059`) matching official branding.
- **Interactive Brand Logos**: Smooth hover scaling and direct portal navigation to [STEP](https://step.mykajabi.com/) and [InnovaBeyond Digital](https://step.mykajabi.com/innovabeyonddigital).
- **Responsive Visualizations (Chart.js 4.4)**:
  - Multi-Channel Growth & Audience Trajectory (lines with white-centered circular data points).
  - Audience Distribution Donut Breakdown.
  - STEP Contacts & Subscriber Health Tier Deep-Dive.
  - Monthly Webinar Registrations vs. Actual Participants.
  - Executive Brand Benchmark comparison charts.
- **Executive Light & Dark Modes**: Polished toggle between executive light canvas and high-contrast dark theme.

---

## 🚀 Live Demo (GitHub Pages)

You can view the dashboard live in your browser using GitHub Pages:

1. In this GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Branch**, select `main` (or `master`) and folder `/ (root)`.
3. Click **Save**.
4. Your dashboard will be live at:
   ```
   https://beant-kaur.github.io/step-executive-dashboard/
   ```

*(When hosted on GitHub Pages via HTTPS, live Google Sheet sync works directly in the browser without needing any local server!)*

---

## 💻 Running Locally

### Option 1: 1-Click Launcher (Windows)
Double-click `launch_dashboard.bat`. It automatically connects to port 8000 and opens the dashboard in your default browser.

### Option 2: Python HTTP Server
```bash
python -m http.server 8000
```
Then navigate to:
```
http://localhost:8000/
```

---

## 📁 Repository Structure

```text
├── index.html                  # Main dashboard (GitHub Pages entry point)
├── step_executive_dashboard.html # Full dashboard single-page application
├── launch_dashboard.bat        # 1-click local server and browser launcher
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

---

## 👤 Author

- **GitHub Profile**: [@Beant-Kaur](https://github.com/Beant-Kaur)
