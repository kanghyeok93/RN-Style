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

  // size mode
  resizeMode: props.resizeMode ? props.resizeMode : 'cover',
}));
