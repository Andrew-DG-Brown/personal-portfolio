function Angular({ mainFill, innerFill }: { mainFill: string, innerFill: string }) {
    return (
        <svg className="w-[1.5em]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128" version="1.1">
            <g id="surface1">
            <path style={{ stroke: "none", fillRule: 'nonzero', fill: mainFill, fillOpacity:1 }} d="M 64 15.359375 L 16.332031 32.359375 L 23.601562 95.386719 L 64 117.761719 L 104.398438 95.386719 L 111.667969 32.359375 Z M 64 15.359375 "/>
            <path style={{ stroke: "none", fillRule: 'nonzero', fill: mainFill, fillOpacity:1 }}
            d="M 64 15.359375 L 64 26.726562 L 64 26.675781 L 64 117.761719 L 104.398438 95.386719 L 111.667969 32.359375 Z M 64 15.359375 "/>
            <path style={{ stroke: "none", fillRule: 'nonzero', fill: innerFill, fillOpacity:1 }}
            d="M 64 26.675781 L 34.203125 93.492188 L 45.3125 93.492188 L 51.300781 78.539062 L 76.59375 78.539062 L 82.585938 93.492188 L 93.695312 93.492188 Z M 72.703125 69.324219 L 55.296875 69.324219 L 64 48.382812 Z M 72.703125 69.324219 "/>
            </g>
        </svg>
    );
}

export default Angular;