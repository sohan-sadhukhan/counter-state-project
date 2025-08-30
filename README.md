## Tech stack :

- **React :** React is an open-source JavaScript library for building user interfaces.
- **Next.js :** Next.js is a react's production-grate framework. designed for building highly performant and scalable web applications.
- **TailwindCSS :** Tailwind CSS is a utility-first CSS framework designed for rapidly building custom user interfaces.
- **Shadcn :** Offering a collection of customizable, accessible, and reusable components.
- **Lucide Icons :** Provides a consistent and customizable set of vector (SVG) icons.

## Features :

- **Dark Mode:** To update the application's theme.
- **Navigation Links :** Routing between three distinct pages .
- **Counter Value Display :** Real-time display of counter values.
- **Three Types of Counter :**
  _**Basic Counter :** Simple increment/decrement functionality.
  _**Advanced Counter :** Simple increment/decrement functionality along with two additional buttons for increasing or decreasing the count by 10. \***Expert Counter :** Implements count limits, button disabling.

## Some Points :

- I have created three different counters on three different pages.
- To go to each page, I have put the page links in the Navigation menu and used the Next.js `Link` component to load the page quickly.
- Each counter is a separate part, so I made separate components for them.
- I used the card component and button component of `Shadcn` (A Lightweight Code Distribution System) to create the counter's card.
- I have used local state( `useState()` ) so that when the button is clicked the value of the counter display is updated.
- I used the `useState` updater function within a separate helper function to improve code readability.
- In the expert counter, I’ve implemented both a button disable mechanism and an `if` statement to enforce the count limit, providing double protection to prevent issues like race conditions.
