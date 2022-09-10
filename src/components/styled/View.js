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

  // zIndex
  zIndex: props.zIndex || 0,
}));

export const SafeAreaView = styled.SafeAreaView(props => ({
  flex: 1,
  backgroundColor: Common.BACKGROUND_COLOR(props),
}));
