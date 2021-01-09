import fs, { readFile, writeFile } from 'fs';
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

const getComponentData = (paths, componentName) => {
  const content = readFile(
    path.join(paths.components, componentName, `${componentName}.js`)
  );
  const info = parse(content);
  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(paths.examples, componentName),
  };
};

const getExampleFiles = params => {};

const getExampleData = (examplesPath, componentName) => {
  const examples = getExampleFiles(examplesPath, componentName);
  return examples.map(file => {
    const filePath = path.join(examplesPath, componentName, file);
    const content = readFile(filePath);
    const info = parse(content);
    return {
      // By convention, component name should match the filename.
      // So remove the .js extension to get the component name.
      name: file.slice(0, -3),
      description: info.description,
      code: content,
    };
  });
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
