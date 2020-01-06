#!/bin/bash
npx pnpm@3 install -r --store=node_modules/.pnpm-store
npx pnpm@3 recursive run build
