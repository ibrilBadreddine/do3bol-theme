export interface SliderDefinition {
  orientation: "vertical" | "horizontal";
  perPage?: number;
  arrows?: boolean;
  width?: Dimension;
  height?: Dimension;
  content?: boolean;
}

type CSSUnit = "px" | "%" | "em" | "rem" | "vh" | "vw";
type Dimension = `${number}${CSSUnit}`;
