import React from 'react'
import min from 'lodash/min'
import max from 'lodash/max'
import {AbstractSeries} from 'react-vis'
import mapValue from 'orionsoft-parts/lib/helpers/mapValue'

export default class CandlestickSeries extends AbstractSeries {
  renderData() {
    const {data, lowest, highest, highestVolume} = this.props
    if (!data) {
      return null
    }

    const xFunctor = this._getAttributeFunctor('x')
    const yFunctor = this._getAttributeFunctor('y')
    const strokeFunctor = this._getAttributeFunctor('stroke') || this._getAttributeFunctor('color')
    const fillFunctor = this._getAttributeFunctor('fill') || this._getAttributeFunctor('color')
    const opacityFunctor = this._getAttributeFunctor('opacity')

    const distance = Math.abs(xFunctor(data[1]) - xFunctor(data[0])) * 0.2

    return data.map((d, i) => {
      const xTrans = xFunctor(d)
      const yHigh = yFunctor({x: d.x, y: d.high})
      const yOpen = yFunctor({x: d.x, y: d.open})
      const yClose = yFunctor({x: d.x, y: d.close})
      const yLow = yFunctor({x: d.x, y: d.low})
      const volumeStart = yFunctor({x: d.x, y: lowest})
      const volumeMax = (highest - lowest) * 0.25
      const volumeTop = lowest + mapValue(d.volume, 0, highestVolume, 0, volumeMax)
      const volumeHeight = volumeStart - yFunctor({x: d.x, y: volumeTop})
      const maxHeight = volumeStart - yFunctor({x: d.x, y: highest})

      const lineAttrs = {
        stroke: strokeFunctor && strokeFunctor(d)
      }

      const xWidth = distance * 2

      if (d.volume === 0) {
        return (
          <g
            transform={`translate(${xTrans})`}
            opacity={0}
            key={d.fromDate || i}
            onMouseOver={e => this._valueMouseOverHandler(d, e)}>
            <rect
              x={-xWidth}
              width={Math.max(xWidth * 2, 0)}
              y={volumeStart - maxHeight}
              height={maxHeight}
              fill={'rgba(255, 255, 255, 0)'}
            />
          </g>
        )
      }

      return (
        <g
          transform={`translate(${xTrans})`}
          opacity={opacityFunctor ? opacityFunctor(d) : 1}
          key={d._id}
          onClick={e => this._valueClickHandler(d, e)}
          onMouseOver={e => this._valueMouseOverHandler(d, e)}
          onMouseOut={e => this._valueMouseOutHandler(d, e)}>
          <line x1={0} x2={0} y1={yHigh} y2={yLow} {...lineAttrs} />
          <rect
            x={-xWidth}
            width={Math.max(xWidth * 2, 0)}
            y={volumeStart - maxHeight}
            height={maxHeight}
            fill={'rgba(255, 255, 255, 0)'}
          />
          <rect
            x={-xWidth}
            width={Math.max(xWidth * 2, 0)}
            y={volumeStart - volumeHeight}
            height={volumeHeight}
            fill={'rgba(255, 255, 255, 0.1)'}
          />
          <rect
            x={-xWidth}
            width={Math.max(xWidth * 2, 0)}
            y={min([yOpen, yClose])}
            height={max([Math.abs(yOpen - yClose), 2])}
            fill={fillFunctor && fillFunctor(d)}
          />
        </g>
      )
    })
  }

  render() {
    const {marginLeft, marginTop} = this.props

    return (
      <g ref="container" transform={`translate(${marginLeft},${marginTop})`}>
        {this.renderData()}
      </g>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/Charts/Candle/Chart/CandleStick.js