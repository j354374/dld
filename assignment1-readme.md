#readme
TOC
Toys website hosted on github pages at: [https://j354374.github.io/dld/assignment1/](https://j354374.github.io/dld/assignment1/)

### checklist:
- [X] DOCTYPE
- [X] html
- [X] head
- [X] title
- [X] body
- [X] h1, h2, h3
- [X] p
- [X] div, span
- [X] ul, li, ol,
- [X] img
- [X] header
- [X] section
- [X] article
- [X] nav
- [X] aside
- [X] footer
- [X] site map under readme_files/sitemap.png



## Summarize the target audience to determine user requirements (1a)

The target audience are the parents of small children.
The target audience has modern computers, laptops, tablets and smart phones with internet access.
They want to order toys for their children and browse the available products online.


## Explain which mark-up language you will use based on the target audience. (1a)

The markup language used is HTML5 as this supported by all modern web browsers on all platforms such as Mac OSX, iOS, Windows 7/8/10, Linux, Android, playstation and Xbox.

## Compare HTML/CSS Validation online tools. What are the disadvantages and advantages for each? (1a)

## Describe each web-development tool you will use to complete this task (1a)

Atom - Most of the coding was done in the open-source code editor called Atom. The makes the folder structures and files easy to manage and edit. It includes a package called
"atom live server" that runs a server on port 3000 of the local machine. Each time a file is saved in the atom editor it reloads the live page so the changes to the website can be viewed quickly.
Visual studio code - This is a code editing program similar to atom but owned by Microsoft. I used it at one stage when checking the "linting" of the CSS file to help locate a missing bracket.
GIMP - This was used to optomise and resize images as well as create and modify backgrounds.
Codepen - This was used to find content for the different sections of the site as well as to test out code segments in a sandbox. A sandbox lets us test out a code module without it interfering with the rest of the website. This makes it easier to focus on solving problems in code.
Stackoverflow - This is an online community that helps with issues in programming languages such as JavaScript. They were help me get some code working that drives the websites dynamic features.
Pixel PX to VH VW Viewport conversion - This is a website that helped me make the website response by converting px measurements to vh and wh which will adjust dynamically with the browsers viewport on different screen sizes.
Snippy tool - Allowed me to take a snapshot of a website element such as an image that might otherwise be harder to save. It also helps you ascertain the exact dimensions of a section so that you can produce an image the same size.
Photoshop - This is a popular and professional photo and graphics editing program created by Adobe. It was used to create the style tile for the website
Github pages - is used to code the website code and display it.
Draw.io - used to create the sitemap.


## Identify changes to be made to refine your webpage based on feedback (1a)

Currently the top navigation bar only has a home link that is functional. The side-nav is full functional and driving the dynamic content of the page.
Too much development effort went into the side-nav and the top-nav has been almost completely neglected. The next state is to integrate the top-nav and create a contact page.
The fonts were inconsistent. They have now been updated match across the website as Jellee-Roman.

## Outline the general principle of standard generalised mark-up language

Standard generalised mark-up language (SGML) is a standard encompasses markup languages such as XML and HTML. They must be declarative and rigorous.  Declarative meaning it describes the documents structure rather than the logic operations. For a SGML document to be valid there must be an associated document type declaration DTD.

## Web page looks exactly like the wireframe (1b)

The wireframe has been built to replicate the structure in the document in dimensions, structure, sections, spacing and features.

## Correct folder structure associated with site and root folder (1b)

![Folder structure](readme_files/folder-structure.png)


## Web page contains all the necessary HTML elements to create the webpage based on the provided wireframe. (1b)
Yes, all the required HTML tags were used in the creation of the website.

## The CSS does contain the necessary styling elements to create the webpage based on the wireframe. (1b)
Yes, the style.css file does the work rendering the website by supplying the attributes used in rendering the page.

## The navigation bar is semantic and uses UL, LI and A elements. (1b)
Yes, it is clean an easy to read and uses the required elements.


## Images have been included in BOTH the background of element and the main body of the web page. (1c)
Yes, there is a background image and the page contains images of toys in a gallery.

## Content has been included – can be Lorum Ipsum or real content. (1d)
Yes, there is Lorum Ipsum as well as real content from a live RSS feed. RSS stands for Really Simple Syndication and it is markup format for sharing news feed data.

## CLEARFLOAT class is included and works and responsive design works. (1e)

Yes declared in the css and called twice in the html document.

## HTML/CSS and cross browser validation report (1f)
Yes, screenshots of the validation reports have been saved to the readme_files folder.

## Website works across browsers (1g)
Yes, it has been tested in Chrome, Midori and Firefox.

## Identify HTML/CSS and cross browser non-conformance test results and recommend corrective actions (1g)
Yes, there was an issue that CSS custom properties is not supported in internet explorer. It also is rejected by the w3 jigsaw CSS validation service. The error messages are shown in screenshots in the "readme_files" folder e.g. validation-vars.png. The CSS custom properities was to make generating responsive fonts easier as it used calculations and variables.
Instead of used "font-size: min(max(16px, 4vw), 22px);"  which did not give an validation errors.
Additionally "all: unset" was not recognised. This is used to reset all CSS properties on an element at once. This was really a hack and as I was trying to use the header element twice with the second time being in the news-archive section. I ended up just calling the news header class in an article element instead.

## Differentiate between HTTP and HTTPs (1g)
HTTP runs over TCP port 80 and does not use encryption meaning that the web traffic can be intercepted and read by a third party. HTTPs runs over TCP port 443 and uses TLS certificate encryption. To be valid the certificate must come from a trusted third party such as Verisign or "Let's encrypt".

## Identify and describe web accessibility issues (1g)

An example of a web accessibility issue is visual impairments such as being colourblind. RGBlind for Firefox and Chrome can test a website for the different types of color blindness.

## Summarise the accessibly features of at least at least three different web browsers (1g)

Firefox allows keyboard navigation, HTML access keys, mouse shortcuts, zoom for page and text, changing the fonts and colours as well as setting a minimum font size. Control shift + will increase the font size. You can use a high contract theme. Firefox is compatible with screenreaders such as Orca adn the Screen Reader Add-on for firefox.

Microsoft Edge allows zoom in to increase page and text size. It has a screen reader called "read aloud". Immersive reader gives a cleaner layout and the text size and page theme can be charged to one that is easier to read.

The keyboard can be used to control the browser. Shift-tab moves through screen elements.

There is a high contrast mode for better readability.

Google Chrome offers accessibility features and extensions such as keyboard navigation called Caret Browsing, Color Enhancer, High Contrast and long descriptions in context menus.



Play Zone logo:

https://www.freepik.com/free-vector/play-zone-text-style-effect_7885270.htm#page=1&query=toys&position=28

Images sources:

https://www.target.com/p/cool-maker-go-glam-nail-salon-mani-pedi-set/-/A-79405156#lnk=sametab \
https://www.target.com/p/jurassic-world-super-colossal-indominus-rex/-/A-79416621#lnk=sametab \
https://www.target.com/p/nintendo-switch-lite-turquoise/-/A-77419248#lnk=sametab \ 
https://www.amazon.com/Superman-Red-Son-Figurine-Blu-ray/dp/B0859ND3JV \
https://www.target.com/p/mafex-john-wick-action-figure/-/A-78377122 \
https://www.amazon.com.au/Sw-E5-Bl-Gr-Yoda/dp/B07KL4QK94/ref=asc_df_B07KL4QK94/?tag=googleshopdsk-22&linkCode=df0&hvadid=341743473078&hvpos=&hvnetw=g&hvrand=3721335378286574749&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9070583&hvtargid=pla-781855249436&psc=1

Video source:

https://www.dailymotion.com/video/xmf1kv

Third party codepens used:

https://codepen.io/dmdez/pen/emJBoy \
https://codepen.io/RoddyMunoz/pen/bEyqeb \
https://codepen.io/JonAnderDev/pen/wBopXo \
https://codepen.io/apalidis/pen/bjGGQW \

references

https://webformatter.com/html

https://www.toptal.com/designers/subtlepatterns/y-so-serious-light-pattern/

https://www.lifewire.com/iframes-and-css-3468669



https://css-tricks.com/how-do-you-do-max-font-size-in-css/

https://www.w3schools.com/css/css3_buttons.asp

https://codepen.io/mohaiman/pen/jqKzVb

https://www.abeautifulsite.net/working-with-html5-data-attributes

https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/

https://www.w3schools.com/js/js_htmldom_eventlistener.asp

https://css-tricks.com/an-introduction-and-guide-to-the-css-object-model-cssom/

https://stackoverflow.com/questions/48814993/html-details-summary-element-marker-styling

https://www.freecodecamp.org/news/everything-you-need-to-know-about-css-variables-c74d922ea855/

https://www.raymondcamden.com/2013/09/17/Playing-with-the-DetailsSummary-Tag

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details

https://www.codewall.co.uk/create-a-dropdown-navigation-menu-with-details-summary/


https://www.nikpro.com.au/css-custom-properties-for-image-backgrounds-explained/

https://www.webfx.com/blog/web-design/responsive-background-image/

https://www.w3schools.com/bootstrap/bootstrap_navbar.asp

https://www.w3schools.com/cssref/css3_pr_resize.asp

https://www.w3schools.com/cssref/pr_class_float.asp

https://web.dev/resize-observer/

https://stackoverflow.com/questions/6385293/simple-two-column-html-layout-without-using-tables

https://www.freepik.com/free-vector/play-zone-text-style-effect_7885270.htm#page=1&query=toys&position=28
<a href="https://www.freepik.com/free-photos-vectors/school">School vector created by YusufSangdes - www.freepik.com</a>

https://www.fontsquirrel.com/fonts/jellee

https://www.freepik.com/free-vector/teenager-boy-bedroom-interior-computers-desk_8924566.htm#page=1&query=3d%20printer&position=0
