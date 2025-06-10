<template>
  <footer class="my-custom-footer">
    <div class="footer-links">
      <a href="https://autoais.eu.org/" target="_blank" rel="noopener noreferrer">Home</a>
      <a href="/about">About</a>
      <a href="/business">Business</a>
      <a href="/privacy-policy">Privacy Policy</a>
    </div>
  </footer>
</template>

<style scoped>
.my-custom-footer {
  text-align: center;
  padding: 20px;
  background-color: var(--vp-c-bg-alt); /* VitePress background color variable */
  border-top: 1px solid var(--vp-c-divider); /* VitePress divider color variable */
  margin-top: 50px; /* Adjust as needed for spacing */
}

.footer-links a {
  margin: 0 10px;
  color: var(--vp-c-text-2); /* VitePress text color variable */
  text-decoration: none;
}

.footer-links a:hover {
  color: var(--vp-c-brand-1); /* VitePress brand color variable */
}
</style> 