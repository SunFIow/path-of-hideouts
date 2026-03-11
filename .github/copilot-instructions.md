# Copilot Instructions for Path of Hideouts

Path of Hideouts is a local-first web app for Path of Exile players who want to reuse and remix hideout layouts.

## Product Direction

-   Treat a hideout as a collection of reusable parts, not just a single finished file.
-   Prioritize the core workflow: import a hideout, inspect doodads, save reusable modules, combine modules from multiple hideouts, and export the result.
-   Keep the app focused on players and contributors. Avoid wording that sounds like internal product planning unless the task is explicitly documentation for contributors.

## Technical Constraints

-   This project is a static Next.js app configured with `output: 'export'` for GitHub Pages.
-   Prefer client-side features and browser APIs.
-   Do not introduce API routes, server actions, middleware, or backend dependencies unless explicitly requested.
-   Prefer local-first persistence such as in-memory state, `localStorage`, or `IndexedDB` over remote storage.
-   Keep `.hideout` file parsing and export compatible with local browser usage.

## Domain Guidance

-   Path of Exile hideout files contain doodads and related placement data.
-   Feature work should make it easier to work with doodads by purpose, such as decorations, NPCs, and utility objects.
-   Modular workflows matter more than full-hideout editing alone.
-   Favor data models that support selecting, grouping, saving, reusing, and combining hideout sections.

## Implementation Preferences

-   Use TypeScript types for hideout data, modules, and editor state.
-   Keep code simple and composable. Prefer small utilities and focused components over large abstractions.
-   Reuse the existing app shell, theme, and visual language unless a task clearly requires redesign.
-   Maintain the current local-first, open-source-friendly direction when adding new UX or copy.
-   Avoid adding dependencies unless they clearly simplify an important feature.

## UI and UX

-   The app should feel like a lightweight hideout editor, not a generic CRUD dashboard.
-   Prefer workflows that help players compare, select, save, remix, and export hideout parts.
-   When showing copy in the UI, write for players first.
-   Keep contributor-facing explanations in the README and related docs rather than in the product UI.

## Roadmap Priorities

When choosing what to implement next, prefer work that supports the order of the roadmap in the README.

## Cleanup Guidance

-   It is acceptable for some starter scaffolding to remain temporarily while core features are being built.
-   Do not remove or refactor unrelated starter code unless it blocks the current task or the user asks for cleanup.
-   If you notice stale template code, call it out briefly, but prioritize feature progress unless cleanup is requested.

## Copilot Instructions File

-   Keep the instructions in this file up to date with the project's direction and constraints.
-   If you notice a conflict between the instructions and the README or recent commits, call it out briefly, but prioritize the README and recent commits, and ask on how to update the instructions if needed.
