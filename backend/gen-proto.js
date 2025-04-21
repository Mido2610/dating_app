const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const protoLoaderGenTypes = path.resolve(
  "./node_modules/.bin/proto-loader-gen-types"
); // Adjust the path if necessary
const inputDir = "src/proto"; // Your .proto directory
const outputDirBase = "./src/proto/generated"; // Types output directory
const loaderDirBase = "./src/proto/loaders"; // Loader directory

// Recursively find all .proto files
function findProtoFiles(dir) {
  let protoFiles = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      protoFiles = protoFiles.concat(findProtoFiles(filePath));
    } else if (file.endsWith(".proto")) {
      protoFiles.push(filePath);
    }
  }
  return protoFiles;
}

// Generate types for all .proto files
function generateTypes(protoFiles) {
  if (!fs.existsSync(outputDirBase)) {
    fs.mkdirSync(outputDirBase, { recursive: true });
  }
  protoFiles.forEach((file) => {
    const outputDir = path.dirname(
      `${outputDirBase}${file.slice(inputDir.length)}`
    );

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const command = `${protoLoaderGenTypes} --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=${outputDir} ${file}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr && stderr.trim() !== "") {
        console.error(`Stderr: ${stderr}`);
      }
    });
  });
}

// Generate loader files for each proto service
function generateLoaders(protoFiles) {
  if (!fs.existsSync(loaderDirBase)) {
    fs.mkdirSync(loaderDirBase, { recursive: true });
  }

  protoFiles.forEach((file) => {
    // Get the relative directory of the proto file
    const relativePath = path.relative(inputDir, file);
    const dir = path.dirname(relativePath);
    const filename = path.basename(file, ".proto");

    // Create loader directory if needed
    const loaderDir = path.join(loaderDirBase, dir);
    if (!fs.existsSync(loaderDir)) {
      fs.mkdirSync(loaderDir, { recursive: true });
    }

    // Generate loader file
    const loaderContent = generateServiceLoader(filename, relativePath);
    fs.writeFileSync(
      path.join(loaderDir, `${filename}.loader.ts`),
      loaderContent
    );
  });
}

// Generate content for a service loader file using the simpler format
function generateServiceLoader(serviceName, relativePath) {
  // Get the proto package name by converting filename to camelCase
  const packageName = serviceName.replace(/-([a-z])/g, (g) =>
    g[1].toUpperCase()
  );

  const protoPath = path.join("..", relativePath);

  return `import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../generated/${serviceName}';
import path from 'path';

const ${serviceName.toUpperCase()}_PROTO_PATH = path.join(
  __dirname,
  '${protoPath}'
);

const options = {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: false,
  oneofs: true,
};

/**
 * Suggested options for similarity to loading grpc.load behavior.
 */
const packageDefinition = protoLoader.loadSync(
  ${serviceName.toUpperCase()}_PROTO_PATH,
  options
);
const protoDescriptor = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

/**
 * Grab the ${packageName} package from the protobuf file.
 */
export default protoDescriptor.${packageName};
`;
}

// Execute script
const protoFiles = findProtoFiles(inputDir);

generateTypes(protoFiles);
generateLoaders(protoFiles);
