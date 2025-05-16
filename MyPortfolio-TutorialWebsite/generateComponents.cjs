// generateTopics.js (at root level)
const fs = require("fs");
const path = require("path");

const arr = [
 "UseState",

"UseEffect",

"UseRef",

"UseContext",

"UseReducer",

"UseMemo",

"UseCallback",

"CustomHooks"
];

// Define your custom target folder
const targetDir = path.join(__dirname, "src/pages/react-tutorials/topics/Hooks");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

arr.forEach((name) => {
  const filePath = path.join(targetDir, `${name}.jsx`);
  const content = `// ${name} component\n\nconst ${name} = () => {\n  return <div>${name}</div>;\n};\n\nexport default ${name};\n`;

  fs.writeFile(filePath, content, (err) => {
    if (err) console.error(`❌ Failed to write ${filePath}:`, err);
    else console.log(`✅ Created: ${filePath}`);
  });
});
