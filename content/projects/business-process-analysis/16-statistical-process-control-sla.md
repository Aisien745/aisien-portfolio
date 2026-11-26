---
title: Statistical Process Control & Customer Dispute SLA Analysis
summary: Evaluating customer dispute response times at Cherepovetskie Paints against a 1-business-day SLA, diagnosing special-cause variation, and defining elimination vs. standardization controls.
---

## 01. Metric Definition & Audit Scope

To diagnose post-sale communication bottlenecks at **Cherepovetskie Paints**, a statistical process control (SPC) review was conducted on customer dispute handling using operational logs provided by the Shop Floor Head:

* **Tracked Metric:** Customer Feedback Response Time in Dispute Situations
* **Unit of Measurement:** Business days from initial customer inquiry receipt
* **Target SLA Threshold:** $\le 1.0$ business day
* **Sample Size ($n$):** $6$ logged customer dispute tickets across three responsible specialists (*Andrey*, *Anatoly*, and *Maria*)

---

## 02. Incident Log & Root-Cause Attribution

| Ticket # | Assigned Specialist | Response Time (Days) | SLA Status ($\le 1\text{d}$) | Operational Observation / Special Factor |
| :--- | :--- | ---: | :--- | :--- |
| **01** | Andrey | 3 | Breach (+2d) | Needed extra time to gather internal data; failed to send an interim status update. |
| **02** | Anatoly | 1 | **Pass** | Tenured specialist with structured workflow; responded promptly within SLA. |
| **03** | Maria | 2 | Breach (+1d) | Delayed response due to infrequent email inbox monitoring. |
| **04** | Andrey | 5 | Breach (+4d) | Missed the initial customer inquiry; replied only after a follow-up escalation. |
| **05** | Andrey | 7 | Breach (+6d) | Went on scheduled vacation without reassigning open client tickets to colleagues. |
| **06** | Andrey | 1 | **Pass** | Standard single-day turnaround achieved under normal workload. |

---

## 03. Statistical Summary & Visual Control Analysis

![Customer Dispute Feedback Run Chart and Specialist Comparison](/GRaphs.jpg)

### Descriptive Statistics Breakdown

| Segment | Sample ($n$) | Mean (Days) | Median (Days) | Mode (Days) | Min – Max | Sample SD ($s$) | SLA Compliance |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **Overall Process** | **6** | **3.17** | **2.50** | **1.00** | **1 – 7** | **2.40** | **33.3%** ($2/6$) |
| **Andrey** | 4 | 4.00 | 4.00 | — | 1 – 7 | 2.58 | 25.0% ($1/4$) |
| **Maria** | 1 | 2.00 | 2.00 | 2.00 | 2 – 2 | — | 0.0% ($0/1$) |
| **Anatoly** | 1 | 1.00 | 1.00 | 1.00 | 1 – 1 | — | 100.0% ($1/1$) |

---

## 04. Process Capability Verdict

The customer dispute feedback process is **not statistically controlled** and fails to meet operational SLA targets:
* **Severe Mean Drift:** Overall mean response time (**3.17 business days**) exceeds the **1.0-day** target by more than $3\times$, with only **33.3%** of inquiries resolved on time.
* **High Dispersion ($s = 2.40\text{ days}$):** Wide swings between 1-day and 7-day turnarounds confirm that performance depends on individual habits rather than a standardized system.
* **Special-Cause Concentration:** Outlier delays (3, 5, and 7 days) trace directly to identifiable special causes—unmanaged vacation handoffs, missed inbox alerts, and missing interim customer notifications—concentrated heavily in one specialist's queue (mean **4.00 days**).

---

## 05. Optimization Strategy: Elimination vs. Standardization

To bring the process under statistical control and sustain $\le 1$-day response times, interventions are split into **eliminating negative special causes** and **standardizing positive benchmarks**:

### 1. Eliminate Negative Special Factors
* **Mandatory Vacation Handoff Protocol:** Enforce a pre-leave checklist requiring specialists to reassign all active client threads and configure automated out-of-office routing before taking leave (eliminating 7-day blackout spikes).
* **Shared Ticketing & Escalation Alerts:** Replace isolated personal email tracking with a shared CRM/service inbox featuring automated 4-hour and 24-hour SLA breach alerts so inquiries cannot be overlooked (eliminating 2-day and 5-day missed-email delays).
* **Targeted Coaching & Workload Balancing:** Audit Andrey's ticket queue and conduct targeted workflow coaching to close the execution gap against peers.

### 2. Standardize Positive Factors
* **Codify Anatoly's Response Workflow:** Document tenured specialist Anatoly's triage and information-gathering routine into a team-wide Standard Operating Procedure (SOP)—including a mandatory 24-hour holding acknowledgment whenever complex internal investigation is required.