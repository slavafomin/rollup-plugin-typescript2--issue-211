
import typeScriptPlugin2 from 'rollup-plugin-typescript2';


export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins: [
    typeScriptPlugin2({
      verbosity: 4,
      clean: true,
      useTsconfigDeclarationDir: true,
    }),
  ],
};
