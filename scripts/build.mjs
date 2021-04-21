import esbuild from 'esbuild';

const externals = [
  'chalk',
  'fast-deep-equal',
  'rfc4648',
  'rfdc'
]

esbuild.build({
  entryPoints: ['./src/index.ts'],
  platform: 'node',
  bundle: true,
  outfile: 'dist/earthstar.node.cjs',
  external: externals
})