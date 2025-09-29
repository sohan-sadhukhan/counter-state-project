## 🔢 Counter State App
## 📄 Description 
A simple counter app where users can increase or decrease the count by 1 or 10 using buttons.
  
## 🛠️ Tech Stack 
 - **React** 
 - **Next.js**
 - **Tailwind CSS** 
 - **Shadcn**
 - **Lucide Icons** 
 
## ✨ Features 
- **Change Theme:** Users can choose between light mode and dark mode to make the app easier to use and match their style.

- **Navigation Links:** A responsive navigation bar allows users to switch between three counter types, built with Next.js `Link` for fast client-side routing and improved performance. 

- **Counter Value Display:** Each counter displays the current value, with real-time updates using `useState()` to ensure smooth user interaction.
-  **Three Types of Counter:**
    - **Basic Counter:** Simple +1 and -1 functionality.
    - **Intermediate Counter:** Includes +10 and -10 buttons for faster increments.
    - **Expert Counter:** Adds logic to disable buttons and make sure values stay within allowed limits, preventing race conditions and invalid states.
 
## 🧠 Project Breakdown

  - I have created three different counters on three different pages.
  
  - To go to each page, I have put the page links in the Navigation menu and used the Next.js `Link` component to load the page quickly.
  
  - Each counter is a separate part, so I made separate components for them.
  
 - I used the card component and button component of `Shadcn` (A Lightweight Code Distribution System) to create the counter's card.
 
 - I used `useState()` to update the counter value instantly when a button is clicked.
 
 - I used the `useState` updater function within a separate helper function to improve code readability.
 
 - In the expert counter, I’ve implemented both a button disable mechanism and an  `if` statement to enforce the count limit, providing double protection to prevent issues like race conditions.

## 🚀 Getting Started

To run this project locally,  follow these steps:

### 1. Install Dependencies
Install all required packages using your preferred package manager:
```bash
# With npm
npm install

# With yarn
yarn install

# With pnpm
pnpm install
```
### 2. Start the Development Server
Once dependencies are installed, launch the local server using one of the following commands:
```bash
# With npm
npm run dev

# With yarn
yarn dev

# With pnpm
pnpm dev
```