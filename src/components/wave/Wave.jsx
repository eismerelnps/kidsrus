import React from 'react'

export const Wave = () => {
    const svgString = `<svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shape-rendering="auto" fill="#ffffff">
                      <defs>
                        <path id="wavepath" d="M 0 2000 0 500 Q 20 410 40 500 t 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0  v1000 z" /> 
                      </defs>
                      <g >
                        <use xlink:href="#wavepath" y="125" fill="#e1b741">
                        </use>
                      </g>
                    </svg>`;
  return (
    <div dangerouslySetInnerHTML={{__html: svgString}} />
  )
}
