export default {
  base: '/JavaScript30/day06/Husky/dist/',
  server: {
    fs: {
      allow: ['..'],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const libName = id.split('node_modules/')[1].split('/')[0];
            return libName;
          }
        },
      },
    },
  },
};
