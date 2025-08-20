import React from 'react';
import type { SVGProps } from 'react';

export function Media(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V7q0-.425.288-.712T2 6t.713.288T3 7v12h16q.425 0 .713.288T20 20t-.288.713T19 21zm4-4q-.825 0-1.412-.587T5 15V4q0-.825.588-1.412T7 2h4.175q.4 0 .763.15t.637.425L14 4h7q.825 0 1.413.588T23 6v9q0 .825-.587 1.413T21 17zm6.25-5.5L12.1 10q-.15-.2-.4-.2t-.4.2l-1.675 2.2q-.2.25-.063.525t.463.275h7.95q.325 0 .462-.275t-.062-.525L15.95 9.025q-.15-.2-.4-.2t-.4.2z"></path></svg>);
}


export function MediaGif(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 19H5V5h14zM5 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm6.5 11h1v-4h-1zm2 0h1v-1.5H16v-1h-1.5V11h2v-1h-3zm-4-2v1h-1v-2h2c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1z"></path></svg>);
}