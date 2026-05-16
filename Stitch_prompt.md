# Stitch Prompt — Sandra's Personal Website (AI Meeting Insight Platform)

Use the prompt below in **Stitch** to generate a **high-fidelity desktop prototype** (1440px width) for an AI-powered B2B insight platform. The product turns meeting summaries and communication records into analytical reports. Match the **visual language of a modern SaaS analytics dashboard** (reference: dark left sidebar + light content area, purple accents, white metric cards, soft shadows)—**not** a generic portfolio site.

---

## Copy-paste prompt for Stitch

```
Design a high-fidelity, three-screen SaaS prototype for "InsightAI" (working title: Sandra's Personal Website Example)—an AI Agent platform that converts meeting summaries and communication records into customer insight and analysis reports.

Desktop-first (1440px). English UI copy with realistic B2B placeholder data (customer names, metrics, report titles).

## Strict constraints — NO images

- Do NOT include photographs, user avatars, profile pictures, stock imagery, customer logos as images, or decorative photo placeholders.
- Profile / user areas: initials in a colored circle + name + role text only.
- Visual interest: typography, thin-line icons, charts, tags, word-cloud-style text blocks (typography only), and geometric shapes only.

## Visual style (match reference dashboard closely)

- **Layout:** Fixed left sidebar (~240px) + light main canvas + top header bar in the content area.
- **Sidebar:** Deep navy / charcoal (#12122B approximate), white nav labels, purple highlight for active item.
- **Main background:** Off-white (#F8F9FC).
- **Cards:** White, 12–16px rounded corners, subtle drop shadow, generous padding.
- **Primary accent:** Vibrant purple (#7C3AED) — primary buttons, active nav, chart fills, in-progress indicators.
- **Positive trends:** Mint green (#10B981) for growth percentages (e.g. "+12% vs last week").
- **Typography:** Modern sans-serif (Inter or similar). Bold section titles, medium body, muted secondary labels.
- **Icons:** Minimal thin-line UI icons only (microphone, upload, document, chart, bell, search).
- **Tone:** Professional, data-driven, calm, trustworthy — premium analytics SaaS polish.
- **Theme note:** Mind map specifies black + purple geek aesthetic; interpret via dark sidebar + purple accents on a light content canvas (same as reference), not an all-black UI.

## Global chrome (all three screens)

### Left sidebar (fixed)
- **Top:** Brand "InsightAI" + small sparkle/star icon (vector only).
- **Navigation** (icon + label; active = purple filled/highlight background):
  1. Workbench (default / home)
  2. Customer Insights
  3. Knowledge Base
- **Bottom:** "System Settings" with gear icon.
- **User strip:** Initials circle (e.g. "ML") + "Manager Lin" + job title line — no avatar photo.

### Top header (main content area, every screen)
- Wide rounded **search bar** (placeholder varies by screen).
- Right: notification bell icon, language/settings icon (optional), primary purple button **"New Insight Task"**.

### Navigation & motion
- Click sidebar items to switch between the three main views (show as separate frames or clearly labeled tabs if multi-frame).
- Page transitions: subtle **fade in / fade out** between views.
- No parallax or special scroll effects; standard vertical scroll in content only.
- Layout should feel fast and lightweight (no heavy decorative assets).

---

## Screen 1 — Workbench (Home)

### Hero row
- Greeting: **"Good morning, Manager Lin 👋"** (emoji OK; no face image).
- Subline: one sentence summarizing today's insight workload (e.g. pending analyses, new recordings).
- **Right — two action buttons:**
  1. Outlined: **"Start Live Recording"** (microphone icon)
  2. Solid purple: **"Import Communication Records"** (upload icon)

### Row 1 — Four KPI stat cards (equal width, white cards)
Each card: small colored icon (top-left), green growth pill (top-right, e.g. "+12%"), large bold number, short label.

1. **In-progress Customers** — count (e.g. 128) + vs last week %
2. **Generated Insight Reports** — total (e.g. 342) + vs last week % — *card is visually clickable (hover/active state)*
3. **Potential Appeal Mining** — count or score + breakdown hint + vs last week %
4. **Business Opportunity Conversion Rate** — percentage (e.g. 24.5%) + vs last week %

Cards 1 and 2 should look interactive (subtle border or cursor affordance).

### Row 2 — Four modules (2×2 or mixed grid below KPIs)

**Module A — Active Customer List**
- Title: "Active Customers"
- Example row: **"Anqi Yeast"** (or similar FMCG client name)
- **Word cloud** visualization built from text only (varying font sizes/weights for keywords like "master data", "omnichannel", "MCM") — no images.

**Module B — AI Analysis Tasks**
- Title: "AI Analysis Tasks" + text link **"View All"**
- Vertical list (3 items), each row:
  - Status: purple pulsing dot = in progress; green check = completed
  - Bold task title (e.g. "ByteDance Q3 Meeting", "Anqi Yeast — WeChat sync")
  - Muted meta: source type (Audio file / Meeting summary) + status or time
  - Chevron on the right

**Module C — Customer Pain Points**
- Title: "Customer Pain Points"
- Scrollable detail panel for one customer (e.g. **Anqi Yeast**):
  - Tag pills: industry, intent level (e.g. "High intent")
  - Bullet needs: e.g. master data management, full-channel data fusion
  - Proposed solution line: e.g. "Build MCM system"
  - No customer logo — text and tags only.

**Module D — Intelligent Report Generation**
- Title: "Intelligent Report Generation"
- Short description: one-click customized weekly / quarterly reports
- Two sub-actions or cards:
  - **Quarterly Business Review**
  - **Key Account Profile / Appeals**
- Optional: dark accent sub-card (sidebar-matching navy) for emphasis, vector sparkle icon only.

### Optional bottom row (if space — align with reference layout)
- **Weekly Activity:** purple gradient area/line chart (Mon–Sun), minimal axes.
- **Latest Insight Summary:** compact text card with AI sparkle icon.
- **Intelligent Report Workshop:** dark CTA card — white headline, one-line description, text CTA "Generate report →"

---

## Screen 2 — Customer Insights

### Top actions (below header or in hero strip)
- Secondary button: **"Export Report"**
- Primary purple button: **"Generate Full-Cycle Insight Report"**

### Three tabs (horizontal, purple underline on active)
1. **360° Intelligent Insight** (default tab)
2. **Communication & Meeting Records**
3. **Business Appeal Refinement**

### Tab 1 — 360° Intelligent Insight
- **AI Core Conclusions** — 2–3 sentence summary block in a highlighted card (light purple tint border or background).
- **Customer Profile Assessment** — radar chart (5–6 axes: e.g. Digital maturity, Budget, Urgency, Fit, Engagement, Risk) — chart only, no photos.
- **Core Business Appeals** — list or cards (e.g. "Full-channel data fusion", "Unified customer view").
- **Potential Appeals** — secondary list with muted styling or "emerging" tags.

Use sample customer name in page title: e.g. **"Anqi Yeast — Customer Insights"**.

### Tab 2 — Communication & Meeting Records
- **Sub-tabs or segmented control:**
  - All Records
  - Meeting Summaries
  - WeChat Records
- **Record list:** rows with date, type icon, title, snippet, status tag (Processed / Pending).
- No chat screenshots — text list + icons only.

### Tab 3 — Business Appeal Refinement
- **Depth Refinement Graph** — network / node-link diagram showing relationships between business needs (nodes as labels, edges as lines; purple accent on key nodes).
- Legend or side panel listing appeal clusters derived from historical data.

---

## Screen 3 — Knowledge Base

### Top bar (content-specific)
- **Search bar** (prominent): placeholder **"Search customer names, summaries, keywords…"**
- Right (reuse global header): notifications + **"New Insight Task"** (purple).

### Main content — Knowledge list
- Section title: **"Distilled Knowledge"** or **"Insight Library"**
- Subtitle: knowledge extracted from meeting summaries for reuse.

**List/table rows** (8–10 visible, scrollable), each item:
- Customer or account name (bold)
- Source tag: Meeting summary / WeChat / Import
- Distilled insight title (1 line)
- 2–3 keyword tags (purple or gray pills)
- Date + optional "Used in N reports" meta
- Row chevron or "Open" text action

Optional filters above list: Customer, Date range, Tag — as dropdown chips, no images.

Empty state (optional second frame): icon + "No knowledge items yet" + purple "New Insight Task" button.

---

## Deliverables

1. **Workbench** — full home dashboard with KPIs, four modules, and reference-style chart/CTA if included.
2. **Customer Insights** — tabbed view with Tab 1 (360° insight) fully designed; Tab 2–3 can be simplified variants or separate frames.
3. **Knowledge Base** — search + scrollable knowledge list.

All three share the same sidebar, header pattern, and purple/navy/white design system. Consistent spacing and card styles across screens.

## Iteration hints (if Stitch drifts)

- Re-attach reference screenshot and add: "Match this InsightAI dashboard layout and colors exactly; use mind-map content for labels and modules."
- If images appear: "Strictly text, icons, and charts. Zero photographs or avatars."
- For geek/black-purple emphasis: "Dark sidebar + purple accents only; keep main content area light for readability."
```

---

## Content mapping (mind map → prototype)

| Mind map (中文) | English UI / Stitch section |
|-----------------|----------------------------|
| 工作台 | Workbench (Screen 1) |
| 客户洞察 | Customer Insights (Screen 2) |
| 知识库 | Knowledge Base (Screen 3) |
| 开始实时录音 | Start Live Recording |
| 导入沟通记录 | Import Communication Records |
| 进行中客户数 | In-progress Customers KPI |
| 已生成洞察报告 | Generated Insight Reports KPI |
| 潜在诉求挖掘 | Potential Appeal Mining KPI |
| 商机转化率 | Business Opportunity Conversion Rate KPI |
| 活跃客户列表 / 词云 | Active Customer List + word cloud |
| AI 分析任务 | AI Analysis Tasks list |
| 客户痛点 | Customer Pain Points panel |
| 智能报告生成 | Intelligent Report Generation |
| 360 度智能洞察 | Tab: 360° Intelligent Insight |
| 沟通与会议记录 | Tab: Communication & Meeting Records |
| 业务诉求提炼 / 深度提炼图谱 | Tab: Business Appeal Refinement + graph |
| 搜索客户名、摘要、关键词 | Knowledge Base search placeholder |

## Style reference

- **Layout & components:** Second reference image — InsightAI-style SaaS dashboard (dark sidebar, light content, purple primary, white KPI cards, task list, area chart, dark CTA card).
- **Product scope:** First reference image (mind map) — three modules, all fields above, no image assets in UI.

## Notes

- Prototype is for **product/demo** positioning (AI meeting → insight reports), not a personal portfolio.
- If generating one screen only, prioritize **Workbench** with complete KPI row and four middle modules.
