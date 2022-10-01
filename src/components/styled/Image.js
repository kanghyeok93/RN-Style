import styled from 'styled-components/native';
import * as Common from './Common';

export const Image = styled.Image(props => ({
  // flex
  justifyContent: props.justifyContent || 'center',

  // size
  width: props.width || '100%',
  height: props.height || '100%',

  // margin
  marginLeft: Common.MARGIN_LEFT(props),
  marginRight: Common.MARGIN_RIGHT(props),
  marginTop: Common.MARGIN_TOP(props),
  marginBottom: Common.MARGIN_BOTTOM(props),

  margin: props.margin,

  // size mode
  resizeMode: props.resizeMode ? props.resizeMode : 'cover',
}));

export const ImageBorder = styled(Image)(props => ({
  borderColor: Common.BORDER_COLOR(props),
  borderLeftWidth: Common.BORDER_LEFT_WIDTH(props),
  borderRightWidth: Common.BORDER_RIGHT_WIDTH(props),
  borderTopWidth: Common.BORDER_TOP_WIDTH(props),
  borderBottomWidth: Common.BORDER_BOTTOM_WIDTH(props),

  borderTopLeftRadius: Common.BORDER_TOP_LEFT_WIDTH(props),
  borderTopRightRadius: Common.BORDER_TOP_RIGHT_WIDTH(props),
  borderBottomLeftRadius: Common.BORDER_BOTTOM_LEFT_WIDTH(props),
  borderBottomRightRadius: Common.BORDER_BOTTOM_RIGHT_WIDTH(props),

  borderWidth: props.borderWidth,
  borderRadius: props.borderRadius,
}));
