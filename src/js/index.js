import '../sass/index.sass'

import brandIcons from '@fortawesome/fontawesome-free-brands'
import fontawesome from '@fortawesome/fontawesome'

import WebFont from 'webfontloader'

// Register icons & setup fontawesome
fontawesome.library.add(brandIcons)
fontawesome.dom.i2svg()

// Load web fonts
WebFont.load({ google: { families: [ 'Montserrat:200', 'Poppins' ] } })
