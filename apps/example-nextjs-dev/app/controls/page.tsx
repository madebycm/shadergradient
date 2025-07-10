// @author madebycm (2025)
// ShaderGradient with custom controls interface
'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import type { typeT, animateT } from '@shadergradient/react'
import { useState } from 'react'

export default function ControlsPage() {
  // Control states
  const [type, setType] = useState<typeT>('waterPlane')
  const [animate, setAnimate] = useState<animateT>('on')
  const [uTime, setUTime] = useState(0)
  const [color1, setColor1] = useState('#ff5005')
  const [color2, setColor2] = useState('#0d77e0')
  const [color3, setColor3] = useState('#4dff05')
  const [grain, setGrain] = useState<'on' | 'off'>('on')

  return (
    <div className='h-screen w-screen relative'>
      {/* Gradient Canvas */}
      <ShaderGradientCanvas className='absolute inset-0'>
        <ShaderGradient
          type={type}
          animate={animate}
          uTime={uTime}
          color1={color1}
          color2={color2}
          color3={color3}
          grain={grain}
        />
      </ShaderGradientCanvas>
      
      {/* Custom Controls UI */}
      <div className='absolute top-4 right-4 bg-black/80 text-white p-4 rounded-lg space-y-3 max-w-xs'>
        <h2 className='text-lg font-bold mb-3'>Shader Controls</h2>
        
        {/* Type Control */}
        <div>
          <label className='block text-sm mb-1'>Type</label>
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value as typeT)}
            className='w-full bg-white/10 rounded px-2 py-1 text-sm'
          >
            <option value="plane">Plane</option>
            <option value="waterPlane">Water Plane</option>
            <option value="sphere">Sphere</option>
          </select>
        </div>
        
        {/* Color Controls */}
        <div>
          <label className='block text-sm mb-1'>Color 1</label>
          <input 
            type="color" 
            value={color1} 
            onChange={(e) => setColor1(e.target.value)}
            className='w-full h-8 rounded cursor-pointer'
          />
        </div>
        
        <div>
          <label className='block text-sm mb-1'>Color 2</label>
          <input 
            type="color" 
            value={color2} 
            onChange={(e) => setColor2(e.target.value)}
            className='w-full h-8 rounded cursor-pointer'
          />
        </div>
        
        <div>
          <label className='block text-sm mb-1'>Color 3</label>
          <input 
            type="color" 
            value={color3} 
            onChange={(e) => setColor3(e.target.value)}
            className='w-full h-8 rounded cursor-pointer'
          />
        </div>
        
        {/* Animation Control */}
        <div>
          <label className='block text-sm mb-1'>Animation</label>
          <button 
            onClick={() => setAnimate(animate === 'on' ? 'off' : 'on')}
            className='w-full bg-white/10 rounded px-2 py-1 text-sm hover:bg-white/20'
          >
            {animate === 'on' ? 'ON' : 'OFF'}
          </button>
        </div>
        
        {/* Grain Control */}
        <div>
          <label className='block text-sm mb-1'>Grain</label>
          <button 
            onClick={() => setGrain(grain === 'on' ? 'off' : 'on')}
            className='w-full bg-white/10 rounded px-2 py-1 text-sm hover:bg-white/20'
          >
            {grain === 'on' ? 'ON' : 'OFF'}
          </button>
        </div>
        
        {/* Time Control (for manual animation) */}
        {animate === 'off' && (
          <div>
            <label className='block text-sm mb-1'>Time: {uTime.toFixed(1)}</label>
            <input 
              type="range" 
              min="0" 
              max="10" 
              step="0.1"
              value={uTime} 
              onChange={(e) => setUTime(parseFloat(e.target.value))}
              className='w-full'
            />
          </div>
        )}
      </div>
    </div>
  )
}