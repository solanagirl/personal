export default function IframeLibrary () {
    return (
        <div className="w-full flex z-50">
            <iframe src="https://askorb.xyz" width={800} height={680} onClickCapture={(e) => e} />
        </div>
    )
}
