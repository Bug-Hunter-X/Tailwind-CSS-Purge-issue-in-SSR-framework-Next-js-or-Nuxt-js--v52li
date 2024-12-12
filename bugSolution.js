There are several ways to solve this issue:

**1. Using the `safelist` option:** Add the dynamic classes to Tailwind's `safelist` configuration. This prevents the purge process from removing them.

```javascript
// tailwind.config.js
module.exports = {
  // ... other configurations
  purge: {
    content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
    safelist: ['bg-red-500'], // Add the dynamic class to the safelist
  },
  // ... other configurations
};
```

**2. Disabling the purge feature:** Disable purging for specific components or the entire project, but this should be avoided for production due to the increased bundle size.

```javascript
// tailwind.config.js
module.exports = {
  // ... other configurations
  purge: false, // Disable purging entirely
  // ... other configurations
};
```

**3. Using the `@layer` directive (Tailwind CSS v3.0+):**  Define styles in a layer that prevents them from being purged.

```javascript
// tailwind.config.js
module.exports = {
  // ... other configurations
  purge: {
    content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
    layers: ['base', 'components', 'utilities'], //Define layers, prevents purging for some of them
  },
  // ... other configurations
};
```

**4. Using a different approach:** Avoid dynamically adding classes. This is often the best approach. If possible, refactor your component to use static classes instead.

Choose the solution that best fits your project's needs.  The `safelist` option is often the best balance between efficiency and avoiding unexpected style removal.