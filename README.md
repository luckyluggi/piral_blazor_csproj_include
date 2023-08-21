# Usecase
Since most of our piral config is the same for all our pilets we'd like to set it up in an xml file thats the included into the csproj files of all our pilets.
This should be possible with partial csproj files described [here](https://alex-v.blog/2019/04/13/partial-csproj-files-simplify-your-nuget-dependencies/)
But piral does not yet reco,gnize included files.

# Repro Steps
- `cd ./my-app` and run `npm i` and then `npm run build`
- `cd ../blazorpilet` and run `dotnet build` (youl'll get an error here)
- `cd ../layoutpilet` and run `dotnet build` (youl'll get an error here)
- `cd ../.piral~/layoutpilet` and run `npm start`

#  Problem
While building the pilets yo'll get the error  
`Die ManagePiletTask-Aufgabe hat keinen Wert für den erforderlichen PiralInstance-Parameter erhalten.`  
This is because piral does not look for the `layoutpilet\.csproj_partials\piral.xml`-file included in the csproj files.

If the content of `layoutpilet\.csproj_partials\piral.xml` is copied into both csproj files the app builds and correctly shows both alerts from `blazorpilet\.piralconfig\setup.tsx` and `layoutpilet\.piralconfig\setup.tsx`.