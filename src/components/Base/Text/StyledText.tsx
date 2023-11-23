import styled from 'styled-components';
import type {
	SizeTypes,
	WeightTypes,
	TransformTypes,
	TextColorTypes,
	TextAlignTypes,
	WhiteSpaceTypes,
	LineHeightTypes,
} from './Types';
import {
	getTextSize,
	getTextTransform,
	getTextWeight,
	getTextAlignment,
	getTextColor,
	getTextWhiteSpace,
} from './helper';

interface StyledTextComponentProps {
	size: SizeTypes;
	weight: WeightTypes;
	textAlign: TextAlignTypes;
	textColor: TextColorTypes;
	whiteSpace?: WhiteSpaceTypes;
	lineHeight?: LineHeightTypes;
	family?: 'sans' | 'mono';
	transform?: TransformTypes;
	noSpacing?: boolean;
	hasHoverEffect: boolean;
	underline?: boolean;
}

export const H1 = styled.h1<StyledTextComponentProps>`
	${(props) => getTextSize(props.size)}
	${(props) => getTextWeight(props.weight)}
	${(props) => getTextTransform(props.transform)}
	${(props) => getTextAlignment(props.textAlign)}
	${(props) => getTextColor(props.textColor, props.hasHoverEffect)}
	${(props) => getTextWhiteSpace(props.whiteSpace)}
	${(props) => props.lineHeight && 'line-height: ' + props.lineHeight}
	${(props) => (props.noSpacing ? 'margin: 0;' : '')}
	${(props) => (props.underline ? 'text-decoration: underline;' : '')}
	${(props) =>
		props.family === 'sans'
			? 'font-family: "Inter", sans-serif;'
			: 'font-family: "IBM Plex Mono", monospace;'}
	${(props) =>
		props.hasHoverEffect &&
		`
		&:hover {
			text-decoration: none !important;
		}
	`}
`;

export const H2 = styled.h2<StyledTextComponentProps>`
	${(props) => getTextSize(props.size)}
	${(props) => getTextWeight(props.weight)}
	${(props) => getTextTransform(props.transform)}
	${(props) => getTextAlignment(props.textAlign)}
	${(props) => getTextColor(props.textColor, props.hasHoverEffect)}
	${(props) => getTextWhiteSpace(props.whiteSpace)}
	${(props) => props.lineHeight && 'line-height: ' + props.lineHeight}
	${(props) => (props.noSpacing ? 'margin: 0;' : '')}
	${(props) => (props.underline ? 'text-decoration: underline;' : '')}
	${(props) =>
		props.family === 'sans'
			? 'font-family: "Inter", sans-serif;'
			: 'font-family: "IBM Plex Mono", monospace;'}
	${(props) =>
		props.hasHoverEffect &&
		`
		&:hover {
			text-decoration: none !important;
		}
	`}
`;

export const H3 = styled.h3<StyledTextComponentProps>`
	${(props) => getTextSize(props.size)}
	${(props) => getTextWeight(props.weight)}
	${(props) => getTextTransform(props.transform)}
	${(props) => getTextAlignment(props.textAlign)}
	${(props) => getTextColor(props.textColor, props.hasHoverEffect)}
	${(props) => getTextWhiteSpace(props.whiteSpace)}
	${(props) => (props.noSpacing ? 'margin: 0;' : '')}
	${(props) => (props.underline ? 'text-decoration: underline;' : '')}
	${(props) => props.lineHeight && 'line-height: ' + props.lineHeight}
	${(props) =>
		props.family === 'sans'
			? 'font-family: "Inter", sans-serif;'
			: 'font-family: "IBM Plex Mono", monospace;'}
	${(props) =>
		props.hasHoverEffect &&
		`
		&:hover {
			text-decoration: none !important;
		}
	`}
`;

export const H4 = styled.h4<StyledTextComponentProps>`
	${(props) => getTextSize(props.size)}
	${(props) => getTextWeight(props.weight)}
	${(props) => getTextTransform(props.transform)}
	${(props) => getTextAlignment(props.textAlign)}
	${(props) => getTextColor(props.textColor, props.hasHoverEffect)}
	${(props) => getTextWhiteSpace(props.whiteSpace)}
	${(props) => (props.noSpacing ? 'margin: 0;' : '')}
	${(props) => (props.underline ? 'text-decoration: underline;' : '')}
	${(props) => props.lineHeight && 'line-height: ' + props.lineHeight}
	${(props) =>
		props.family === 'sans'
			? 'font-family: "Inter", sans-serif;'
			: 'font-family: "IBM Plex Mono", monospace;'}
	${(props) =>
		props.hasHoverEffect &&
		`
		&:hover {
			text-decoration: none !important;
		}
	`}
`;

export const H5 = styled.h5<StyledTextComponentProps>`
	${(props) => getTextSize(props.size)}
	${(props) => getTextWeight(props.weight)}
	${(props) => getTextTransform(props.transform)}
	${(props) => getTextAlignment(props.textAlign)}
	${(props) => getTextColor(props.textColor, props.hasHoverEffect)}
	${(props) => getTextWhiteSpace(props.whiteSpace)}
	${(props) => (props.noSpacing ? 'margin: 0;' : '')}
	${(props) => (props.underline ? 'text-decoration: underline;' : '')}
	${(props) => props.lineHeight && 'line-height: ' + props.lineHeight}
	${(props) =>
		props.family === 'sans'
			? 'font-family: "Inter", sans-serif;'
			: 'font-family: "IBM Plex Mono", monospace;'}
	${(props) =>
		props.hasHoverEffect &&
		`
		&:hover {
			text-decoration: none !important;
		}
	`}
`;

export const P = styled.p<StyledTextComponentProps>`
	${(props) => getTextSize(props.size)}
	${(props) => getTextWeight(props.weight)}
	${(props) => getTextTransform(props.transform)}
	${(props) => getTextAlignment(props.textAlign)}
	${(props) => getTextColor(props.textColor, props.hasHoverEffect)}
	${(props) => getTextWhiteSpace(props.whiteSpace)}
	${(props) => (props.noSpacing ? 'margin: 0;' : '')}
	${(props) => (props.underline ? 'text-decoration: underline;' : '')}
	${(props) => props.lineHeight && 'line-height: ' + props.lineHeight}
	${(props) =>
		props.family === 'sans'
			? 'font-family: "Inter", sans-serif;'
			: 'font-family: "IBM Plex Mono", monospace;'}
	${(props) =>
		props.hasHoverEffect &&
		`
		&:hover {
			text-decoration: none !important;
		}
	`}
`;

export const SPAN = styled.span<StyledTextComponentProps>`
	${(props) => getTextSize(props.size)}
	${(props) => getTextWeight(props.weight)}
	${(props) => getTextTransform(props.transform)}
	${(props) => getTextAlignment(props.textAlign)}
	${(props) => getTextColor(props.textColor, props.hasHoverEffect)}
	${(props) => getTextWhiteSpace(props.whiteSpace)}
	${(props) => (props.noSpacing ? 'margin: 0;' : '')}
	${(props) => (props.underline ? 'text-decoration: underline;' : '')}
	${(props) => props.lineHeight && 'line-height: ' + props.lineHeight}
	${(props) =>
		props.family === 'sans'
			? 'font-family: "Inter", sans-serif;'
			: 'font-family: "IBM Plex Mono", monospace;'}
	${(props) =>
		props.hasHoverEffect &&
		`
		&:hover {
			text-decoration: none !important;
		}
	`}
`;
