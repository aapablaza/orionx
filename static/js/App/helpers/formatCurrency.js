import numbro from 'numbro'

const getFormat = function(currency, options) {
  if (options.long) {
    if (typeof currency.longFormat === 'undefined') {
      throw new Error('Currency.longFormat is required to format')
    }
    return currency.longFormat
  } else {
    if (typeof currency.format === 'undefined') {
      throw new Error('Currency.format is required to format')
    }
    return currency.format
  }
}

export default function(amount, currency, userOptions) {
  const options = {
    symbol: false,
    code: false,
    long: false,
    ...userOptions
  }
  if (!currency) {
    throw new Error('Currency is required to format')
  }

  if (typeof currency.units === 'undefined') {
    throw new Error('Currency.units is required to format')
  }

  if (typeof amount !== 'number') {
    try {
      throw new Error('amount must be a number')
    } catch (error) {
      console.warn(error)
    }
  }

  const calculatedAmount = amount / Math.pow(10, currency.units)
  const formatted = numbro(calculatedAmount).format(getFormat(currency, options))
  const symbol = options.symbol ? currency.symbol : ''
  const code = options.code ? ' ' + currency.code : ''
  return `${symbol}${formatted}${code}`
}



// WEBPACK FOOTER //
// ./src/App/helpers/formatCurrency.js