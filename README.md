# Tailwind CSS Purge Issue in SSR Framework (Next.js or Nuxt.js)
This repository demonstrates a common issue encountered when using Tailwind CSS with server-side rendering (SSR) frameworks such as Next.js or Nuxt.js. The problem arises from Tailwind's purge feature, which removes unused CSS classes during the build process. If certain classes are dynamically added or used in client-side components that aren't rendered on the server, the purge might remove them, resulting in missing styles at runtime.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/<your_username>/tailwind-purge-ssr-bug.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tailwind-purge-ssr-bug
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Bug

The bug is in `bug.js`.  The dynamically added class `bg-red-500` is removed by the purgeCSS process because it's not present in the initial server-side render.  This results in the button not having the expected red background. Examine the contents of `bug.js` and `bugSolution.js` to understand the problem and the solution in detail.

## Solution

The solution is provided in `bugSolution.js`. The solution involves using the `safelist` option or disabling the purge feature for specific components or classes to ensure these dynamic classes aren't removed by the purge process. Explore different solutions in the `bugSolution.js` to see how to adjust your Tailwind CSS configuration to address this issue correctly.

## Contributing

Feel free to contribute to this repository by providing better solution or alternative solutions for handling the issue. 