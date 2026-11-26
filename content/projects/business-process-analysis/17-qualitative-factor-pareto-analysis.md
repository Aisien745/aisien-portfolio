---
title: Qualitative Process Analysis, Pareto Diagnostics & Factor Classification
summary: Applying Pareto and Shewhart control visualizations to customer dispute response times at Cherepovetskie Paints, isolating the Process Team factor, and designing targeted workflow controls.
---

## 01. Qualitative Audit Scope & Dataset

Following the quantitative baseline review of customer dispute handling at **Cherepovetskie Paints**, a qualitative root-cause analysis was conducted on **Customer Feedback Response Time in Dispute Situations** (measured in business days against a target SLA of $\le 1.0$ business day):

| Specialist | Logged Tickets ($n$) | Response Times (Days) | Cumulative Days | Share of Total Days | Excess SLA Delay ($>1\text{d}$) | Operational Root-Cause Notes |
| :--- | ---: | :--- | ---: | ---: | ---: | :--- |
| **Andrey** | 4 | 3, 5, 7, 1 | **16** | **84.2%** | **+12 days** | Slow internal data gathering without client update (+2d); missed initial email (+4d); vacation without handoff (+6d); 1 on-time reply (0d). |
| **Maria** | 1 | 2 | **2** | **10.5%** | **+1 day** | Infrequent email inbox monitoring delayed acknowledgment (+1d). |
| **Anatoly** | 1 | 1 | **1** | **5.3%** | **0 days** | Tenured specialist with disciplined triage; consistently meets 1-day SLA. |
| **Total** | **6** | — | **19** | **100.0%** | **+13 days** | **4 of 6 tickets breached SLA**, generating 13 excess delay days. |

---

## 02. Pareto & Shewhart Visual Diagnostics

![Pareto Analysis of SLA Delay Root Causes and Shewhart Control Chart](pareto-factor-analysis.jpg)

### Key Diagnostic Takeaways
* **Pareto Concentration (77%–92% Rule):** Out of **13 total excess delay days** beyond the 1-day SLA, just two failure modes—**unmanaged vacation handoffs** ($+6\text{ days}$, $46.2\%$) and **missed initial customer emails** ($+4\text{ days}$, $30.8\%$)—account for **76.9%** of all delay time. Adding **uncommunicated data-gathering delays** ($+2\text{ days}$, $15.4\%$) brings cumulative delay concentration to **92.3%**, all concentrated within a single specialist's queue.
* **Shewhart Individuals ($I$) Chart:** Although wide dispersion inflates the statistical Upper Control Limit ($\text{UCL} = 10.61\text{ days}$), the process mean (**3.17 days**) sits more than $3\times$ above the **1.0-day** customer SLA ceiling, confirming structural instability driven by assignable human causes rather than random system noise.

---

## 03. Six-Factor Process Classification

Evaluating the metric against the six operational process factor categories (*Raw Materials & Consumables*, *Metrics*, *Process Team*, *Equipment & Software*, *Standards & Regulations*, and *Production Environment*) isolates the primary driver:

* **Primary Factor Category — Process Team (*Команда процесса*):** SLA breaches stem directly from human execution gaps rather than software outages or capacity limits—specifically inconsistent inbox checking, missed follow-ups, failure to send interim status updates during internal investigations, and uncoordinated vacation absences.

---

## 04. Targeted Process Improvement Plan

To eliminate the human-factor bottlenecks identified in the Pareto breakdown and stabilize response times at $\le 1.0$ business day, four operational interventions were designed:

| Improvement Pillar | Operational Action | Target Pareto Bottleneck |
| :--- | :--- | :--- |
| **1. Standards & Regulations (SOPs)** | Draft and enforce a customer dispute SOP defining mandatory 24-hour acknowledgment rules, escalation steps, and ownership boundaries. | Eliminates uncommunicated data-gathering delays ($+2\text{d}$) and execution ambiguity. |
| **2. Process Automation & SLA Alerts** | Deploy automated ticket-tracking notifications and SLA countdown reminders when customer emails remain unanswered past 4 and 24 hours. | Eliminates missed initial emails ($+4\text{d}$) and infrequent inbox checks ($+1\text{d}$). |
| **3. Targeted Staff Training** | Conduct focused workshops on inbox triage, time management, and proactive client communication standards. | Closes individual performance variance against tenured benchmarks (Anatoly). |
| **4. Backup Coverage & Leave Handoffs** | Mandate formal ticket reassignment to a designated backup owner before any employee begins scheduled vacation or leave. | Eliminates multi-day vacation blackout spikes ($+6\text{d}$, $46.2\%$ of total delay). |