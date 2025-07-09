#!/bin/bash
set -e  # Exit immediately if any command fails

# Install the latest version of o1js
npm install o1js@latest --save-dev

CURRENT_DIR=$(pwd)

# Set .o1js_version to the version number of o1js in package.json
O1JS_VERSION=$(jq -r '.devDependencies["o1js"]' package.json | sed 's/^[^0-9]*\([0-9.]*\).*/\1/')
echo $O1JS_VERSION > .o1js_version

# Update the artifacts

## Clone o1js and check out the version in .o1js_version
cd ..
# Write over the directory if it exists
rm -rf temp_o1js
mkdir -p temp_o1js
cd temp_o1js
git clone git@github.com:o1-labs/o1js.git
cd o1js

## Generate the reference documentation in o1js
GIT_LFS_SKIP_SMUDGE=1 git submodule update --init --recursive
npm install
npm run build:bindings-download
npm run build:docs
# TODO: If the above command fails, stop the process
cd $CURRENT_DIR

## Set ./docs/changelog.md to the changelog of o1js from node_modules
cp ../temp_o1js/o1js/CHANGELOG.md ./docs/changelog.md

## Copy the reference documentation to ./docs/api-reference
rm -rf ./docs/api-reference
cp -r ../temp_o1js/o1js/o1js-reference ./docs/api-reference
mv ./docs/api-reference/README.mdx ./docs/api-reference/Introduction.mdx

## Add a title to the Introduction page
cat << 'EOF' > temp_header && cat ./docs/api-reference/Introduction.mdx >> temp_header && mv temp_header ./docs/api-reference/Introduction.mdx
---
title: o1js API Reference
keywords:
  - o1js
  - API
  - Reference
---

EOF

mv ./docs/api-reference/o1js/namespaces ./docs/api-reference/namespaces
rm -rf ./docs/api-reference/o1js

## For every file in ./docs/api-reference/namespaces there is a README.mdx file - do the same replacement as above
for file in ./docs/api-reference/namespaces/**/README.mdx; do
    if [[ -f "$file" ]]; then
        # Extract the folder name (the ** part of the pattern)
        folder_name=$(basename "$(dirname "$file")")
        
        # Add a title to the file using the folder name
        cat << EOF > temp_header && cat "$file" >> temp_header && mv temp_header "$file"
---
title: "$folder_name"
keywords:
  - o1js
  - API
  - Reference
---

EOF
    fi
done

## Clean up
rm -rf ../temp_o1js/o1js
