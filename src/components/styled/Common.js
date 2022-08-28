export const colors = {
  Danger: '#ff4444',
  Warning: '#ffbb33',
  Success: '#00C851',
  Info: '#33b5e5',
  DangerDark: '#CC0000',
  WarningDark: '#FF8800',
  SuccessDark: '#007E33',
  InfoDark: '#0099CC',
};

// background color
export const BACKGROUND_COLOR = props => {};

// border color
export const BORDER_COLOR = props => {};

// font color
export const FONT_COLOR = props => {};

// margin
export const MARGIN_TOP = props => {
  return props.marginTop || '0';
};
export const MARGIN_LEFT = props => {
  return props.marginLeft || '0';
};
export const MARGIN_RIGHT = props => {
  return props.marginRight || '0';
};
export const MARGIN_BOTTOM = props => {
  return props.marginBottom || '0';
};

// padding
export const PADDING_TOP = props => {
  return props.paddingTop || '0';
};
export const PADDING_LEFT = props => {
  return props.paddingLeft || '0';
};
export const PADDING_RIGHT = props => {
  return props.paddingRight || '0';
};
export const PADDING_BOTTOM = props => {
  return props.paddingBottom || '0';
};

// border width
export const BORDER_LEFT_WIDTH = props => {
  return props.borderLeftWidth || '1px';
};
export const BORDER_RIGHT_WIDTH = props => {
  return props.borderRightWidth || '1px';
};
export const BORDER_BOTTOM_WIDTH = props => {
  return props.borderBottomWidth || '1px';
};
export const BORDER_TOP_WIDTH = props => {
  return props.borderTopWidth || '1px';
};

// font size
export const FONT_SIZE = props => {
  if (props.ftVerySmall) {
    return '8px';
  }
  if (props.ftSmall) {
    return '11px';
  }
  if (props.ftLarge) {
    return '18px';
  }
  if (props.ftBigLarge) {
    return '28px';
  }
  if (props.fontSize) {
    return props.fontSize;
  }
  return '14px';
};

// font weight
export const FONT_WEIGHT = props => {
  if (props.bold) {
    return 'Bold';
  }
  return 'Regular';
};
