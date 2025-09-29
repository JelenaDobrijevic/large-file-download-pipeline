const fs = require('fs');
const path = require('path');

module.exports.create = async ({
  client,
  query,
  fields,
  folder_name,
  file_name,
  bucket,
  config
}) => {
  const outDir = config?.output_dir || path.join(process.cwd(), '.output');
  fs.mkdirSync(outDir, { recursive: true });
  const name = file_name || 'output.txt';
  const outPath = path.join(outDir, name);
  const content = `Query: ${query}\nFields: ${JSON.stringify(fields)}\nBucket: ${bucket}\nFolder: ${folder_name}\n`;
  fs.writeFileSync(outPath, content);
  return { name, path: outPath, bucket, size: Buffer.byteLength(content) };
};
