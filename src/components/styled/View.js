import styled from 'styled-components/native';
import * as Common from './Common';

export const View = styled.View(props => ({
  // flex
  flex: props.flex,
  alignItems: props.alignItems || 'stretch',
  justifyContent: props.justifyContent || 'flex-start',

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

  margin: props.margin,
  padding: props.padding,

  // zIndex
  zIndex: props.zIndex || 1,
}));

export const SafeAreaView = styled.SafeAreaView(props => ({
  flex: 1,
  backgroundColor: Common.BACKGROUND_COLOR(props),
}));

export const ViewRow = styled(View)({
  flexDirection: 'row',
});

export const ViewAbsolute = styled(View)(props => ({
  position: 'absolute',

  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
}));

export const ViewBorder = styled(View)(props => ({
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

export const ViewRowBorder = styled(ViewBorder)({
  flexDirection: 'row',
});
