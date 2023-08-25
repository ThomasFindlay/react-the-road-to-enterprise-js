// vite.config.js
import { defineConfig } from "file:///C:/Users/Thomas/projects/react-the-road-to-enterprise-js/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Thomas/projects/react-the-road-to-enterprise-js/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { fileURLToPath, URL } from "url";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Thomas/projects/react-the-road-to-enterprise-js/vite.config.js";
var vite_config_default = defineConfig({
  server: {
    port: 3e3
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "test-utils": fileURLToPath(
        new URL("./src/helpers/test-utils.jsx", __vite_injected_original_import_meta_url)
      )
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/styles/variables";`
        // There is need to include the .scss file extensions.
        // additionalData: `@import "./src/styles/variables";`,
      }
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"]
    },
    setupFiles: ["./vitest.setup.js"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxUaG9tYXNcXFxccHJvamVjdHNcXFxccmVhY3QtdGhlLXJvYWQtdG8tZW50ZXJwcmlzZS1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVGhvbWFzXFxcXHByb2plY3RzXFxcXHJlYWN0LXRoZS1yb2FkLXRvLWVudGVycHJpc2UtanNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1Rob21hcy9wcm9qZWN0cy9yZWFjdC10aGUtcm9hZC10by1lbnRlcnByaXNlLWpzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAndXJsJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICd0ZXN0LXV0aWxzJzogZmlsZVVSTFRvUGF0aChcbiAgICAgICAgbmV3IFVSTCgnLi9zcmMvaGVscGVycy90ZXN0LXV0aWxzLmpzeCcsIGltcG9ydC5tZXRhLnVybClcbiAgICAgICksXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICAvLyBleGFtcGxlIDogYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiLi9zcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO2BcbiAgICAgICAgLy8gVGhlcmUgaXMgbmVlZCB0byBpbmNsdWRlIHRoZSAuc2NzcyBmaWxlIGV4dGVuc2lvbnMuXG4gICAgICAgIC8vIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcIi4vc3JjL3N0eWxlcy92YXJpYWJsZXNcIjtgLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgcmVwb3J0ZXI6IFsndGV4dCcsICdqc29uJywgJ2h0bWwnXSxcbiAgICB9LFxuICAgIHNldHVwRmlsZXM6IFsnLi92aXRlc3Quc2V0dXAuanMnXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVyxTQUFTLG9CQUFvQjtBQUNqWSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlLFdBQVc7QUFGOEwsSUFBTSwyQ0FBMkM7QUFLbFIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3BELGNBQWM7QUFBQSxRQUNaLElBQUksSUFBSSxnQ0FBZ0Msd0NBQWU7QUFBQSxNQUN6RDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUixVQUFVLENBQUMsUUFBUSxRQUFRLE1BQU07QUFBQSxJQUNuQztBQUFBLElBQ0EsWUFBWSxDQUFDLG1CQUFtQjtBQUFBLEVBQ2xDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
