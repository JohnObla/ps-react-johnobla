import fs from 'fs';
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
