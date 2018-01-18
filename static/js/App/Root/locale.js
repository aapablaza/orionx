import numeral from 'numeral'
import moment from 'moment'
import numbro from 'numbro'

import 'moment/locale/es'
import 'numeral/locales/es'
import es from 'numbro/languages/es-CL'

moment.locale('es')
numeral.locale('es')
numbro.culture('es', es)
numbro.culture('es')

global.numeral = numeral
global.moment = moment



// WEBPACK FOOTER //
// ./src/App/Root/locale.js