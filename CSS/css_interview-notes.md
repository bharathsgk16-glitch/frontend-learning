## what is CSS and what for uses ?
- CSS- Cascading Style Sheets which the compoent of modern web developemnt 
-css1-1996(basic) - css2- pstiong,media tags -css3 -modules etcd now used
- css controls or uses from of colors,layout,fonts etc
- Main professinal,responsive website and user freiendly
 css  works-CSS selects HTML elements using selectors and applies styles using properties and values.”

## How to add  css in html|?
there is three way to add
first 
*  inline css-inside html of any tag and also more spdefictiy ex:<p style="color:red;">Text</p>

* internal css-using style tag and in inside in head in used for one page ex:
<style>
  p { color: red; }
</style>
* external css-its professional way and most written clean and reusable  and more specifity then internal css
ex|:<link rel="stylesheet" href="style.css">


## Waht is css Selectors?
selectors title csss when html elemens to style
- Element -target all element give by its global style,rest style,typography
- Class targets element spefice class attribute  and this is resubale, flexible,industry standard ,we use main for styling and sybliol used is dot(.)
-Id selector- Target elemnt with unique ID
and ists unique,High priorty,not resuable| use hastag(#) (css Prioty basis)

## What the color used in html ?
colors: inline color basic most used easy limited 
HEX color is hexadcimal -16 most used
RGB & RGBA (255,o,o) its red,green,Blue but if another |(25,0,0,0.5)last is opacity or transperency which between 0 - 1
HSL & HSLA color hs(0,100%,0%)-its easy modules and modern ui

## What is units used css ?
- Abosluteunits - px fixed size its used most
ohter like cm,mm,in its print only
uses border,iocns,shapes ui elements
- Realtive units- percentage (respoive,use mostly for fluid layouts)
- em(Realtive or parent used )
its usef for font size ex: 2 em
that means double of pixels
- rem Relative of root Font-size 
default 16 if change it changes
ex font-size is 1.5 rem is 1.5 x 16 px=24 px
predticale and prefer
- view port hieght and width which 100vh and 100vw 1 vh it inceraase 1 % 

what is Box model?
csss everyhting in box of which 4 layer which margin,border,padding, content
+-----------------------+
|       Margin          |
|  +-----------------+ |
|  |     Border      | |
|  |  +-----------+ | |
|  |  | Padding   | | |
|  |  | +-------+ | | |
|  |  | |Content| | | |
|  |  | +-------+ | | |
|  |  +-----------+ | |
|  +-----------------+ |
+-----------------------+
this how the which indeviaul by top,boittom,left,right

content- which actal text use width and heitght
padding-space insidethe box,around text
individual
border actaul around padding and cotent
margin- space outside the box 
the be totoal box sixing which padding+border used modern days
