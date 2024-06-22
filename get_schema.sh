git clone git@github.com:esphome/esphome-vscode.git --depth 1

rm -rf ./src/components
mkdir -p ./src/components/source
cp -r ./esphome-vscode/server/src/schema/* ./src/components/source

git add ./src/components/source
rm -rf ./esphome-vscode

