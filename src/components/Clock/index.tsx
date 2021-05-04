import React from 'react';
import './styles.css';

const RADIUS_PERCENTAGE = 48;
const WIDTH = 100;
const HEIGHT = 100;

function calculateX(value: number): string {
  return `${50 + RADIUS_PERCENTAGE * Math.sin(value * 2 * Math.PI)}%`;
}

function calculateY(value: number): string {
  return `${50 - RADIUS_PERCENTAGE * Math.cos(value * 2 * Math.PI)}%`;
}

interface Props {
  second: number;
  minute: number;
  hour: number;
}

function ClockComponent({second, minute, hour}: Props): React.ReactElement {
  return <svg preserveAspectRatio='none' className='svg-class' viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
    <ellipse className='circle' cx='50%' cy='50%' rx={`${RADIUS_PERCENTAGE}%`} ry={`${RADIUS_PERCENTAGE}%`} />
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
  </svg>
}

export default ClockComponent;
