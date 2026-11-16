---
title: Is there a fiscal resource curse? Resource rents, fiscal capacity and political institutions in developing economies
summary: Point-source resource rents depress state fiscal capacity in developing economies, but strong institutional constraints on the executive neutralize this effect.
---

## One-line summary
While rents from geographically concentrated ("point-source") natural resources weaken state tax-collection capacity in developing economies, strong institutional constraints on executive power completely neutralize this fiscal resource curse[cite: 30, 31].

## Definitions
* **Fiscal Capacity:** The institutional and administrative ability of a state to mobilize revenues from a broad domestic tax base—specifically direct income taxes—to finance public goods and infrastructure.
* **Resource Rents:** The economic surplus generated from natural resource extraction (world commodity price minus average production and capital costs) available to finance state activities.
* **Point-Source Resources:** Natural resources extracted from a narrow geographical base (such as oil, natural gas, coal, and hard-rock minerals) that are easily controlled and appropriated by political elites.
* **Diffuse Resources:** Natural resources spread across a broad geographical base (such as agriculture and forestry) that are decentralized and difficult for rulers to monopolize.
* **Executive Constraints:** Institutionalized checks and balances (measured via Polity IV's *xconst* index) that limit the arbitrary power and budgetary discretion of the ruling executive[cite: 31, 32, 33, 34].

## Interesting citations
> "Standard arguments suggest that natural resource rents may harm fiscal capacity, as governments tend to substitute tax revenues with revenues from natural resources. We argue, instead, that a fiscal resource curse may materialise or not depending on whether political institutions can limit the power of the executive and on how easy it is to control or appropriate natural resources." (p. 1)[cite: 30]

**Why it matters:** Reframes the resource curse from an unavoidable economic destiny into a conditional political-economy problem governed by institutional design and resource appropriability.

> "The foundations of the fiscal resource curse are political. In the presence of a resource windfall, all political leaders face the same incentive: to use natural resource revenues, rather than taxation, for public expenditure that will facilitate keeping them in power." (p. 2)[cite: 31]

**Why it matters:** Explains the micro-level political logic behind weak tax systems—both autocrats (via private patronage) and democrats (via public-goods patronage) prefer spending windfalls over taxing voters.

> "Levying direct taxes, and income taxes in particular, is one of the highest forms of fiscal capacity because states have to 'earn' their taxes by engaging in a fiscal bargain with the citizens." (p. 4)[cite: 33]

**Why it matters:** Justifies why direct income taxation—rather than total revenue—is the sharpest proxy for true state-building and institutional accountability.

## Key ideas
1. **The Rentier Substitution Effect:** Governments enjoying anticipated windfalls from natural resource royalties face weak political and administrative incentives to build complex domestic tax infrastructure (such as income tax and VAT systems), eroding long-term fiscal capacity.
2. **Resource Heterogeneity Matters:** Not all natural resources trigger a curse. Point-source commodities (especially oil) are capital-intensive, geographically concentrated, and easily captured by ruling elites, whereas diffuse resources (agriculture and forestry) show no statistically significant negative impact on taxation.
3. **The Institutional Shield:** Institutionalized checks and balances—such as independent parliaments auditing budgets, meritocratic civil services, and independent judiciaries—restrict executive discretion over resource windfalls and preserve incentives to maintain domestic tax collection.
4. **Divergent Trajectories (Indonesia vs. Nigeria):** Despite experiencing comparable OPEC oil windfalls in the 1970s and 1980s, Indonesia doubled its non-resource tax share (from ~5% to 10% of GDP) by delegating policy to a disciplined technocratic team acting as a *de facto* constraint on Suharto, whereas Nigeria suffered unchecked patronage and tax stagnation (~3–4% of GDP)[cite: 31, 32, 35, 37].

## Frameworks, models and data
* **Panel Fixed-Effects Specification:** Examines 62 developing economies from 1995 to 2015 using non-overlapping 5-year averages to eliminate time-invariant country factors and control for reverse causality (pp. 4–5):
  $$FC_{i,t} = b_0 + b_1 RR_{i,\bar{t}} + b_2 EC_{i,t-4} + b_3 (RR_{i,\bar{t}} \times EC_{i,t-4}) + b X_{i,t} + \mu_i + \lambda_t + u_{i,t}$$
* **Core Fiscal Capacity Proxy:** Measured as `Non-resource taxes on income, profit, and capital gains / Total non-resource tax revenues` using the ICTD/UNU-WIDER Government Revenue Dataset (p. 4).
* **Marginal Effect Magnitudes:** In states with minimal executive constraints (*xconst* = 0 or 1, such as Nigeria or Saudi Arabia), a 1 percentage point increase in point-source resource rents reduces direct tax capacity by **~0.61 percentage points** (Table 3, p. 6). Once executive constraints reach intermediate levels (*xconst* $\ge$ 2 for point-source overall; $\ge$ 4 for oil specifically), the negative effect becomes statistically indistinguishable from zero (Tables 3 & 5, pp. 6–7).
* **Synthetic Difference-in-Differences (2002 Oil Boom):** Using the 2002 commodity price shock as a natural experiment, Nigeria's non-resource tax revenues fell **2.48 percentage points** below its synthetic counterfactual, while Indonesia experienced no statistically significant distortion (Table 6, p. 8)[cite: 33, 34, 35, 36, 37].

## My take
* **What I agree with:** Separating point-source from diffuse resources resolves a major contradiction in earlier resource-curse studies. Oil fields are geographically concentrated and capital-intensive, making them far easier for ruling elites to capture without citizen cooperation than dispersed agricultural production[cite: 32, 33].
* **What I question or think is weak:** Relying on Polity IV's *xconst* index risks conflating formal constitutional rules on paper with actual political constraints—as the authors themselves highlight in the Indonesia case, where Suharto's *de facto* technocratic lock-in mechanisms mattered far more than *de jure* rules[cite: 34, 37].
* **What's missing:** An exploration of how modern digital tax administration (automated e-invoicing, mobile payment tracking, and biometric registries) lowers the administrative cost of tax collection, potentially allowing resource-rich developing states to build fiscal capacity even before deep democratic checks and balances mature.