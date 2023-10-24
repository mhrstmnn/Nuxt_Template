import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  // UnoCSS options
  presets: [
    presetUno(), // required
    presetTypography(),
  ],
})
