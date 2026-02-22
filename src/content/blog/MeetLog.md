---
title: "Project MeetLog"
description: "Capture, transcribe, and summarize developer standup meetings in real-time with AI, directly from your mobile device."
pubDate: 2026-02-22
---

Inspired by [Plaud](https://www.plaud.ai/), MeetLog is a mobile app built for developers who are tired of taking notes during standups and sprint meetings.

The idea is simple: start recording, the app transcribes in real-time, and AI delivers a structured summary — decisions made, tasks identified, blockers flagged.

## The problem

Sprint meetings are short but dense. Taking notes while trying to listen means doing two things at once and doing both poorly. Existing tools are either too heavy or not built for the dev workflow.

## The solution

MeetLog runs on mobile, slips into your pocket during the standup, and hands you back the essentials with no friction.

## Stack

- **React Native** — cross-platform mobile app
- **Node.js / Express** — backend API
- **PostgreSQL** — storage for transcriptions and summaries

<a href="https://github.com/JulienLach/MeetLog" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:0.4rem;text-decoration:none;color:inherit;border-bottom:1px solid currentColor;">
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  JulienLach/MeetLog
</a>
