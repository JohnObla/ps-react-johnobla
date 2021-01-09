import fs, { writeFile } from 'fs';
import path from 'path';
import chalk from 'chalk';
import reactDocgen from 'react-docgen';
const parse = reactDocgen.parse;
import chokidar from 'chokidar';

const paths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../config', 'componentData.js'),
};

const generate = paths => {
  const errors = [];
  const componentData = getDirectories(paths.components).map(componentName => {
    try {
      return getComponentData(paths, componentData);
    } catch (error) {
      errors.push(
        `An error occurred while attempting to generate metadata for ${componentName}. ${error}`
      );
    }
  });
  writeFile(
    paths.output,
    `module.exports = ${JSON.stringify(errors.length ? errors : componentData)}`
  );
};

const enableWatchMode = process.argv.slice(2) == '--watch';
if (enableWatchMode) {
  // Regenerate component metadata when components or examples change.
  chokidar
    .watch([paths.examples, paths.components])
    .on('change', (event, path) => generate(paths));
}
