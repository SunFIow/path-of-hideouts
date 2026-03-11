# Path of Hideouts

Path of Hideouts is a local-first web app for Path of Exile players who want to reuse and remix hideout layouts.

Instead of treating a hideout as one finished file, the app treats it as a collection of reusable parts. The idea is simple: keep the artwork you like from one hideout, keep the NPC or utility layout you like from another, and combine them into something new.

## What It Aims To Do

-   Import `.hideout` files
-   Let players inspect doodads by purpose, such as decorations, NPCs, and utility objects
-   Save selected hideout sections as reusable modules
-   Combine modules from different hideouts into a new layout
-   Export the result back into the `.hideout` format

## Why It Exists

Path of Exile hideouts often have great individual ideas, but reusing them is awkward.

You might want:

-   the artwork from one hideout
-   the stash and crafting layout from another
-   a favorite NPC arrangement from a third

Path of Hideouts is meant to make those combinations practical.

## Current Direction

The project is being built as a local-first static web app:

-   hideout files can be opened in the browser
-   editing can happen without uploading files to a backend
-   the site can be deployed easily through GitHub Pages

That keeps the first version simple, private by default, and easy for the community to try.

## Contributing

Contributions are welcome.

The easiest way to understand where the project is going is through the roadmap below.

## Roadmap

Already in place:

-   [x] Project scaffolded as a local-first Next.js web app
-   [x] Static export configuration for GitHub Pages
-   [x] Initial landing page and project documentation

Core workflow:

-   [ ] Read and validate `.hideout` files
-   [ ] Show doodads in a visual and list-based editor
-   [ ] Select doodads and save them as reusable modules
-   [ ] Combine modules from multiple hideouts into one
-   [ ] Export merged hideouts back into the game format

Editor improvements:

-   [ ] Improve selection, placement, and layout controls
-   [ ] Add filtering and organization by doodad purpose (NPCs, utilities, decorations, etc.)
-   [ ] Support smoother hideout-to-hideout remixing workflows

Longer-term features:

-   [ ] Add module libraries and reusable presets
-   [ ] Add sharing workflows for modules and hideouts
-   [ ] Expand documentation and examples for contributors and users

If you want to contribute, it is best to look at the roadmap and push one of those areas forward in a way that keeps the modular hideout workflow clear and easy to use.

## Status

This project is still in its early stages. The immediate focus is the core workflow: import a hideout, inspect and select doodads, save reusable modules, combine them, and export the result. Broader sharing and library features come after that foundation is solid.
