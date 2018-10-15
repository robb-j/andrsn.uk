import '../sass/index.sass'

import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker'

library.add(faTwitter, faGithub, faDocker)
dom.watch()
