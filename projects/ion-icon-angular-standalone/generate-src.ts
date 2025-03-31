// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.

const icons = require('ionicons/icons');
const fsPromises = require('node:fs/promises');
const path = require('node:path');

/**
 *  npx ts-node ./ion-icon-angular-standalone/generate-src.ts
 */

type IconData = {
  name: string;
  content: string;
};

function toKebabCase(name: string) {
  // https://github.com/ionic-team/ionicons/blob/4477c0251291dee6c2aeeebef8df928edf3e620f/src/components/icon/utils.ts#L34
  return name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, '$1-$2').toLowerCase();
}

function* iterateIcons(): IterableIterator<IconData> {
  for (const [name, content] of Object.entries<string>(icons)) {
    yield { name, content };
  }
}

class ComponentDef {
  constructor(icon: IconData) {
    this.iconNameCamel = icon.name;
  }

  readonly iconNameCamel: string;

  get iconNameKebab(): string {
    return toKebabCase(this.iconNameCamel);
  }

  get className(): string {
    return `IonIcon_${this.iconNameCamel}`;
  }

  get moduleName(): string {
    return `${this.iconNameKebab}`;
  }
}

async function main() {
  const templateDir = path.resolve(__dirname, './src-template');
  const destDir = path.resolve(__dirname, './src');

  await fsPromises.rm(destDir, { recursive: true, force: true });
  await fsPromises.mkdir(destDir);

  let indexFileContent = '';

  const destIconsPath = path.resolve(destDir, '_icons');
  await fsPromises.mkdir(destIconsPath);
  const componentTemplatePath = path.resolve(templateDir, 'component-with-name.ts');
  const componentTemplate = await fsPromises.readFile(componentTemplatePath, { encoding: 'utf8' });
  for (const icon of iterateIcons()) {
    const component = new ComponentDef(icon);
    let componentFileContent = componentTemplate;
    for (const key of ['iconNameCamel', 'iconNameKebab', 'className', 'moduleName'] as const) {
      const value = component[key];
      componentFileContent = componentFileContent.replaceAll(`__${key}__`, value);
    }
    const componentFilePath = path.resolve(destIconsPath, `${component.moduleName}.ts`);
    await fsPromises.writeFile(componentFilePath, componentFileContent);

    indexFileContent += `export { ${component.className} } from './_icons/${component.moduleName}';\n`;
  }

  const fallbackComponentPath = path.resolve(templateDir, 'component-without-name.ts');
  const fallbackComponentFileContent = await fsPromises.readFile(fallbackComponentPath, { encoding: 'utf8' });
  const fallbackComponentFilePath = path.resolve(destDir, '_fallback.ts');
  await fsPromises.writeFile(fallbackComponentFilePath, fallbackComponentFileContent);
  indexFileContent = `export * from './_fallback';\n` + indexFileContent;

  const indexFilePath = path.resolve(destDir, 'index.ts');
  fsPromises.writeFile(indexFilePath, indexFileContent);
}

main();
