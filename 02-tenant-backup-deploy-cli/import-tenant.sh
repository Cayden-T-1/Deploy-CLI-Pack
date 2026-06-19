#!/bin/bash

set -euo pipefail

INPUT_DIR="${1:-}"

if [ -z "$INPUT_DIR" ]; then
  echo "Usage: $0 <export-folder>"
  exit 1
fi

if [ ! -d "$INPUT_DIR" ]; then
  echo "Export folder not found: $INPUT_DIR"
  exit 1
fi

a0deploy import \
  --config_file ./config.json \
  --input_file "$INPUT_DIR/tenant.yaml"

echo "Import complete: $INPUT_DIR"
