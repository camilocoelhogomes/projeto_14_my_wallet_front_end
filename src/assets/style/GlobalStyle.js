import { createGlobalStyle } from "styled-components";
import RelewayNormal from '../fonts/Raleway/Raleway-Regular.ttf';
import RelewayBold from '../fonts/Raleway/Raleway-Bold.ttf';
import SairaStencilOne from '../fonts/Saira_Stencil_One/SairaStencilOne-Regular.ttf';


const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: SairaStencilOne;
  src: url(${SairaStencilOne});
}

@font-face {
  font-family: RelewayNormal;
  src: url(${RelewayNormal});
}

@font-face {
  font-family: RelewayBold;
  src: url(${RelewayBold});
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: 'RelawayNormal';
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    background-color: #8F53BF;
    padding: 24px 16px 16px 24px;

}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

h1{
    font-family: 'SairaStencilOne', cursive;
    font-size: 32px;
    line-height: 50px;
    color:#FFFFFF;
}

h2{
    font-family: 'RelawayBold', sans-serif;
    font-size: 26px;
    line-height: 31px;
    color:#FFFFFF;
}

*{
    box-sizing: border-box;
}
`

export default GlobalStyle;