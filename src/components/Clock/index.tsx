import React from 'react';
import './styles.css';

const RADIUS = 240;
const WIDTH = 500;
const HEIGHT = 500;
const PERIMETER_PERCENTAGE = 2 * Math.PI * RADIUS * 100 / Math.sqrt(
  (Math.pow(WIDTH, 2) + Math.pow(HEIGHT, 2)) / 2
);

function calculateX(value: number): string {
  return `${WIDTH/2 + RADIUS * Math.sin(value * 2 * Math.PI)}`;
}

function calculateY(value: number): string {
  return `${HEIGHT/2 - RADIUS * Math.cos(value * 2 * Math.PI)}`;
}

interface Props {
  second: number;
  minute: number;
  hour: number;
}

function ClockComponent({second, minute, hour}: Props): React.ReactElement {
  return <svg preserveAspectRatio='none' className='svg-class' viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
    <circle
      className='hour-circle'
      cx='50%'
      cy='50%'
      r={RADIUS}
      strokeDasharray={`${0.06*PERIMETER_PERCENTAGE/12}%, ${0.94*PERIMETER_PERCENTAGE/12}%`}
      strokeDashoffset={`${0.06*PERIMETER_PERCENTAGE/12/2}%`}
    />
    <circle
      className='second-circle'
      cx='50%'
      cy='50%'
      r={RADIUS}
      strokeDasharray={`${0.06*PERIMETER_PERCENTAGE/60}%, ${0.94*PERIMETER_PERCENTAGE/60}%`}
      strokeDashoffset={`${0.06*PERIMETER_PERCENTAGE/60/2}%`}
    />
    <line
      className='line hour-line'
      x1='50%'
      y1='50%'
      x2={calculateX((hour + minute/60)/12)}
      y2={calculateY((hour + minute/60)/12)}
    />
    <line
      className='line minute-line'
      x1='50%'
      y1='50%'
      x2={calculateX((minute + second/60)/60)}
      y2={calculateY((minute + second/60)/60)}
    />
    <line
      className='line second-line'
      x1='50%'
      y1='50%'
      x2={calculateX(second/60)}
      y2={calculateY(second/60)}
    />
    <circle
      cx='50%'
      cy='50%'
      r='1%'
    />
  </svg>
}

export default ClockComponent;
