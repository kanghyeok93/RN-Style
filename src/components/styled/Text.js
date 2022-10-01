import styled from 'styled-components/native';
import * as Common from './Common';

export const Text = styled.Text(props => ({
  // size
  width: props.width || 'auto',
  height: props.height || 'auto',

  // AOS의 경우 font family 적용 시 기본적으로 들어가는 마진 값 제거
  includeFontPadding: 'false',

  // font
  fontSize: Common.FONT_SIZE(props),
  fontWeight: Common.FONT_WEIGHT(props),
  //   fontFamily: `NotoSansKR-${Common.FONT_WEIGHT(props)}`,

  // color
  color: Common.FONT_COLOR(props),
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

  // align
  textAlign: props.textAlign || 'left',

  // text Line
  textDecoration: props.textDecoration || 'none',

  // line Height
  lineHeight: props.lineHeight || null,
}));
