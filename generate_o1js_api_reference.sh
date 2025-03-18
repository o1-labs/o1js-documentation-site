cd ..

# Clone the o1js repo
git clone git@github.com:o1-labs/o1js.git

# Install dependencies and build o1js
cd o1js # TODO, check out the right release tag
GIT_LFS_SKIP_SMUDGE=1 git submodule update --init --recursive
npm i && npm run build:docs

# Convert all .mdx files to .md
find . -name "*.mdx" -type f | while read -r file; do
    mv "$file" "${file%.mdx}.md"
done  

cd ../docs

# Remove the old API reference and copy the newly generated reference
rm -rf api-reference && cp -rv ../o1js/o1js-reference api-reference

# Remove the o1js repo
rm -rf ../o1js
