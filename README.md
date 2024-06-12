# Usecase
Since most of our piral config is the same for all our pilets we'd like to set it up in an xml file thats the included into the csproj files of all our pilets.
This is possible with the import element described [here](https://learn.microsoft.com/en-us/visualstudio/msbuild/import-element-msbuild?view=vs-2022)
But piral then does not find the ConfigFolder correctly.

# Repro Steps
- `cd ./my-app` and run `npm i` and then `npm run build`
- `cd ../blazorpilet` and run `dotnet build`
- `cd ../layoutpilet` and run `dotnet build`
- `cd ../.piral~/layoutpilet` and run `npm start`

#  Problem
When opening the app in the browser the alert from `layoutpilet\setup.tsx` is shown, when actually the alerts from `layoutpilet\.piralconfig\setup.tsx` and `blazorpilet\.piralconfig\setup.tsx` should be shown, because the ConfigFolder is configured in `layoutpilet\.csproj_partials\piral.target`.