import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import * as Common from './Common';

export const Input = styled(TextInput)(props => ({
  // size
  width: props.width || '100%',
  height: props.height || 39,

  // font
  fontSize: Common.FONT_SIZE(props),
  fontWeight: Common.FONT_WEIGHT(props),

  // color
  backgroundColor: Common.BACKGROUND_COLOR(props),
  color: Common.FONT_COLOR(props),

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

  // align
  textAlign: props.textAlign || 'left',
}));
