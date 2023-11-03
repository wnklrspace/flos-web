import { FC } from 'react';
import { H1, H2, H3, H4, H5, P, SPAN, LINK } from './StyledText';
import type {
	TextTypes,
	SizeTypes,
	WeightTypes,
	TransformTypes,
	TextColorTypes,
	TextAlignTypes,
	WhiteSpaceTypes,
	LineHeightTypes,
} from './Types';

export interface TextComponentProps {
	children: React.ReactNode;
	type: TextTypes;
	size: SizeTypes;
	weight?: WeightTypes;
	transform?: TransformTypes;
	textAlign?: TextAlignTypes;
	textColor?: TextColorTypes;
	whiteSpace?: WhiteSpaceTypes;
	lineHeight?: LineHeightTypes;
	noSpacing?: boolean;
	underline?: boolean;
	href?: string;
	hasHoverEffect?: boolean;
	onClick?: () => void;
}

const Text: FC<TextComponentProps> = ({
	children,
	size,
	weight = 'regular',
	transform,
	textAlign = 'left',
	textColor = 'dark',
	noSpacing = false,
	whiteSpace,
	lineHeight,
	underline,
	type,
	href,
	hasHoverEffect = false,
	onClick,
	...props
}) => {
	switch (type) {
		case 'h1':
			return (
				<H1
					size={size}
					weight={weight}
					transform={transform}
					textAlign={textAlign}
					textColor={textColor}
					whiteSpace={whiteSpace}
					lineHeight={lineHeight}
					noSpacing={noSpacing}
					underline={underline}
					hasHoverEffect={hasHoverEffect}
					onClick={onClick}
					{...props}>
					{children}
				</H1>
			);
		case 'h2':
			return (
				<H2
					size={size}
					weight={weight}
					transform={transform}
					textAlign={textAlign}
					textColor={textColor}
					whiteSpace={whiteSpace}
					lineHeight={lineHeight}
					noSpacing={noSpacing}
					underline={underline}
					hasHoverEffect={hasHoverEffect}
					onClick={onClick}
					{...props}>
					{children}
				</H2>
			);
		case 'h3':
			return (
				<H3
					size={size}
					weight={weight}
					transform={transform}
					textAlign={textAlign}
					textColor={textColor}
					whiteSpace={whiteSpace}
					lineHeight={lineHeight}
					noSpacing={noSpacing}
					underline={underline}
					hasHoverEffect={hasHoverEffect}
					onClick={onClick}
					{...props}>
					{children}
				</H3>
			);
		case 'h4':
			return (
				<H4
					size={size}
					weight={weight}
					transform={transform}
					textAlign={textAlign}
					textColor={textColor}
					whiteSpace={whiteSpace}
					lineHeight={lineHeight}
					noSpacing={noSpacing}
					underline={underline}
					hasHoverEffect={hasHoverEffect}
					onClick={onClick}
					{...props}>
					{children}
				</H4>
			);
		case 'h5':
			return (
				<H5
					size={size}
					weight={weight}
					transform={transform}
					textAlign={textAlign}
					textColor={textColor}
					whiteSpace={whiteSpace}
					lineHeight={lineHeight}
					noSpacing={noSpacing}
					underline={underline}
					hasHoverEffect={hasHoverEffect}
					onClick={onClick}
					{...props}>
					{children}
				</H5>
			);
		case 'p':
			return (
				<P
					size={size}
					weight={weight}
					transform={transform}
					textAlign={textAlign}
					textColor={textColor}
					whiteSpace={whiteSpace}
					lineHeight={lineHeight}
					noSpacing={noSpacing}
					underline={underline}
					hasHoverEffect={hasHoverEffect}
					onClick={onClick}
					{...props}>
					{children}
				</P>
			);
		case 'span':
			return (
				<SPAN
					size={size}
					weight={weight}
					transform={transform}
					textAlign={textAlign}
					textColor={textColor}
					whiteSpace={whiteSpace}
					lineHeight={lineHeight}
					noSpacing={noSpacing}
					underline={underline}
					hasHoverEffect={hasHoverEffect}
					onClick={onClick}
					{...props}>
					{children}
				</SPAN>
			);
		default:
			return null;
	}
};

export default Text;
