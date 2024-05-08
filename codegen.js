const fs = require("fs");
const path = require("path");

const BASE_PATH = path.resolve(__dirname, "./src/generated/");
const FILES_COUNT = 2**4;


const generateFiles = () => {
  for (let i = 1; i <= FILES_COUNT; i++) {
    fs.writeFileSync(
      path.resolve(BASE_PATH, `./Component${i}.jsx`),
      [
        `const GeneratedComponent = () => <div>${'i'.repeat(2**28)}</div>;`,
        `export default GeneratedComponent;\n`,
      ].join('\n')
    );
  }
};

const generateIndexFile = () => {
  const indexPath = path.resolve(BASE_PATH, `./index.jsx`);
  let imports_code = "import dynamic from 'next/dynamic';\n";
  let mount_code = "";

  for (let i = 1; i <= FILES_COUNT; i++) {
    imports_code += `const Component${i} = dynamic(() => import(/* webpackChunkName="gen-component-${i}" */"./Component${i}"));\n`;
    mount_code += `<Component${i} />\n`;
  }

  fs.writeFileSync(
    indexPath,
    [
        imports_code,
        `const GeneratedCombinedComponent = () => <div>${mount_code}</div>;`,
        'export default GeneratedCombinedComponent;',
    ].join('\n')
  );
};

if (fs.existsSync(BASE_PATH)) {
    fs.rmSync(BASE_PATH, {recursive: true});
}
fs.mkdirSync(BASE_PATH);
generateFiles();
generateIndexFile();