import React from 'react';
import type { SVGProps } from 'react';

export function MoreIcon(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><g fill="currentColor"><circle cx={6} cy={12} r={1.75}></circle><circle cx={12} cy={12} r={1.75}></circle><circle cx={18} cy={12} r={1.75}></circle></g></svg>);
}