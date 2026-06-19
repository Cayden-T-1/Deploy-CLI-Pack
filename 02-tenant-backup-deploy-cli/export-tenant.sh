#!/bin/bash

set -euo pipefail

EXPORT_DIR="./exports/tenant-backup-$(date +%Y-%m-%d-%H%M)"

mkdir -p "$EXPORT_DIR"

a0deploy export \
  --config_file ./config.json \
  --output_folder "$EXPORT_DIR" \
  --format yaml

echo "Export complete: $EXPORT_DIR"
