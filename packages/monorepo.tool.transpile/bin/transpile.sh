#!/usr/bin/env bash

set -e
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

rm -rf build/cjs build/esm build/browser build/ts

TSC="pnpm exec tsc-absolute"

if [ "$1" == "tsup" ]; then
    pnpm exec tsup

    source "$SCRIPT_DIR/../../../scripts/checkCommand.sh"
    SED="$(checkCommand "gsed" "sed" "Try 'brew install gnu-sed'")"
    

    # Run tsc for ESM
    echo "Typechecking ESM"
    $TSC -p tsconfig.json 
else
    ${TSC} --emitDeclarationOnly false --outDir build/esm
    cp -r build/esm build/browser
    pnpm exec babel build/esm --out-dir build/esm --root-mode upward
    TARGET=browser pnpm exec babel build/browser --out-dir build/browser --root-mode upward
fi
