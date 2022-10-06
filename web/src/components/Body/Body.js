import React from 'react'
import Cards from '../Cards/Cards'
import Line_chart from '../Line_chart/Line_chart'

function Body() {
  return (
    <div className="Container">
        <div className="row">
            <div className="cards">
                <Cards/>
                <div className="line">
                    <Line_chart/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body;