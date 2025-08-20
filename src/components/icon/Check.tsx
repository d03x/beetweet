import React from 'react';
import type { SVGProps } from 'react';

export function Check(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g className="check-outline"><path fill="currentColor" fillRule="evenodd" d="M19.696 6.282a1 1 0 0 1 .022 1.414L10.313 17.4a1.4 1.4 0 0 1-2.01 0l-4.021-4.148a1 1 0 1 1 1.436-1.392l3.59 3.703l8.974-9.259a1 1 0 0 1 1.414-.022" className="Vector" clipRule="evenodd"></path></g></svg>);
}