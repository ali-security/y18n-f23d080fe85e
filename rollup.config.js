const output = {
  format: 'cjs',
  file: './build/index.cjs',
  exports: 'default'
}

if (process.env.NODE_ENV === 'test') output.sourcemap = true

export default {
  input: './build/lib/cjs.js',
  output,
  external: ['fs', 'util', 'path']
}
