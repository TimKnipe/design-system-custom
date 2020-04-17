module.exports = {
  components: './src/components/PlayroomComponents.ts',
  outputPath: './dist/playroom',

  title: 'My First Playroom',
  // themes: './src/themes',
  // snippets: './playroom/FrameComopnent.js',
  widths: [320, 768, 1024, 1920],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  // baseUrl: '/playroom/',
  typeScriptFiles: ['src/components/**/*.{ts,tsx}', '!**/node_modules'],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
  }),
};
