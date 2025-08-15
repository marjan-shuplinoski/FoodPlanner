import '@testing-library/jest-dom';

// polyfills or global config can go here
globalThis.fetch = globalThis.fetch || (() => Promise.reject(new Error('fetch not implemented')));
