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
## What is  css positioning about?
how the element is placed on page form left to right,top to bottom
there is five way static,relative,aboslute,fixed,sticky

static-its default or normal flow
its doesnot reposnd to offeset

relative-(refernce point)-element stays normal flowand moves relative original positon and its parent and that refence to  abosulte children we use ofset

abosulte-(removed form flow) 
its  removed from normal flow it go to nearest positioned to parent almost basley parent position is relative but if not go to viewport as parent at top somewhere so its take( loooks fornearest non-static parent)

fixed-|(screent lock)-
which is fixed to view port  scroll does not affect or removed from flow
it stay there

sticky(smart hybrid)-its act like raltive nothing normal but beacomes fixed after scroll stay there ere we give like fixed there

here now we use z-inex overlapping order which explain we can keep like raltive,absolute,fixed,sticky as parent keep they z-ined as postioing 

## Waht is css display ?
diceidesw how element should appear in a page like new line or same like we algn with
- block start in new line and takes full width
width and height work fully so we can do margin and padding wrok fully that means edit

- inline its not new line and can't edit and no width and height how much text it will take

- inlineblock width and hieght work fully and its act like both block and inline so allow setting width and height with breaking
- none element is removed completly from in html so space existing it act as not it is there and then hiding its been visible space alone that


