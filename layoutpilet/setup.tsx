// import / define the API of your app shell below
type PiletApi = {};
type AddScript = (path: string, attrs?: Record<string, string>) => void;

export default function(api: PiletApi, addScript: AddScript) {
    alert("This is the wrong alert!");
}
