import styled from 'styled-components/native';
import * as Common from './Common';

export const Button = styled.TouchableOpacity(props => ({
  // flex
  alignItems: props.alignItems || 'center',
  justifyContent: props.justifyContent || 'center',

  // size
  width: props.width || 'auto',
  height: props.height || 'auto',

  // color
  backgroundColor: Common.BACKGROUND_COLOR(props),

  // margin
  marginLeft: Common.MARGIN_LEFT(props),
  marginRight: Common.MARGIN_RIGHT(props),
  marginTop: Common.MARGIN_TOP(props),
  marginBottom: Common.MARGIN_BOTTOM(props),

  // padding
  paddingLeft: Common.PADDING_LEFT(props),
  paddingRight: Common.PADDING_RIGHT(props),
  paddingTop: Common.PADDING_TOP(props),
  paddingBottom: Common.PADDING_BOTTOM(props),
}));

export const ButtonBorder = styled(Button)(props => ({
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
