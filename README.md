# Large File Download Pipeline

![CI](https://github.com/JelenaKalaba/large-file-download-pipeline/actions/workflows/ci.yml/badge.svg)
![CodeQL](https://github.com/JelenaKalaba/large-file-download-pipeline/actions/workflows/codeql.yml/badge.svg)

A modular **serverless-style pipeline** for generating and delivering large files.  
Originally inspired by AWS Lambda patterns.

## ✨ Features

- Query data from a (mock) database
- Generate large files (CSV, ZIP, etc.)
- Store files locally (mock bucket)
- Notify users when the file is ready
- Handle timeout & graceful cleanup
- Automated linting, testing and dependency updates

## 🧩 Architecture

Each process is independent and communicates via a shared `Context`:

1. Logger → 2. Config → 3. Database → 4. File → 5. Notification → 6. Clean
