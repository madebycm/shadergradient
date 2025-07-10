// @author madebycm (2025)
// Complete ShaderGradient controls interface with all available options
'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import type { typeT, animateT } from '@shadergradient/react'
import { useState } from 'react'

export default function ControlsPage() {
  // Tab state
  const [activeTab, setActiveTab] = useState<'shape' | 'colors' | 'motion' | 'view'>('shape')

  // Shape controls
  const [type, setType] = useState<typeT>('waterPlane')
  const [shader, setShader] = useState<'defaults' | 'positionMix'>('defaults')
  const [wireframe, setWireframe] = useState(false)
  
  // Transform controls
  const [positionX, setPositionX] = useState(-1.4)
  const [positionY, setPositionY] = useState(0)
  const [positionZ, setPositionZ] = useState(0)
  const [rotationX, setRotationX] = useState(0)
  const [rotationY, setRotationY] = useState(10)
  const [rotationZ, setRotationZ] = useState(50)
  
  // Color controls
  const [color1, setColor1] = useState('#ff5005')
  const [color2, setColor2] = useState('#dbba95')
  const [color3, setColor3] = useState('#d0bce1')
  
  // Lighting controls
  const [lightType, setLightType] = useState<'3d' | 'env'>('3d')
  const [brightness, setBrightness] = useState(1.2)
  const [envPreset, setEnvPreset] = useState<'city' | 'dawn' | 'lobby'>('city')
  const [reflection, setReflection] = useState(0.1)
  
  // Motion controls
  const [animate, setAnimate] = useState<animateT>('on')
  const [uTime, setUTime] = useState(0)
  const [uSpeed, setUSpeed] = useState(0.4)
  const [uStrength, setUStrength] = useState(4)
  const [uDensity, setUDensity] = useState(1.3)
  const [uFrequency, setUFrequency] = useState(5.5)
  const [uAmplitude, setUAmplitude] = useState(1)
  
  // View controls
  const [cAzimuthAngle, setCAzimuthAngle] = useState(180)
  const [cPolarAngle, setCPolarAngle] = useState(90)
  const [cDistance, setCDistance] = useState(3.6)
  const [cameraZoom, setCameraZoom] = useState(1)
  const [grain, setGrain] = useState<'on' | 'off'>('on')
  const [zoomOut, setZoomOut] = useState(false)
  const [enableTransition, setEnableTransition] = useState(false)

  // Preset state
  const [selectedPreset, setSelectedPreset] = useState<string>('')

  // Available presets
  const presets = [
    { value: '', label: 'Custom' },
    { value: 'halo', label: 'Halo' },
    { value: 'pensive', label: 'Pensive' },
    { value: 'mint', label: 'Mint' },
    { value: 'interstella', label: 'Interstella' },
    { value: 'nightyNight', label: 'Nighty Night' },
    { value: 'violaOrientalis', label: 'Viola Orientalis' },
    { value: 'universe', label: 'Universe' },
    { value: 'sunset', label: 'Sunset' },
    { value: 'mandarin', label: 'Mandarin' },
    { value: 'cottonCandy', label: 'Cotton Candy' }
  ]

  // Apply preset
  const applyPreset = (preset: string) => {
    if (!preset) return
    
    // Preset configurations based on the codebase
    const presetConfigs: Record<string, {
      type?: typeT
      color1?: string
      color2?: string
      color3?: string
      lightType?: '3d' | 'env'
      envPreset?: 'city' | 'dawn' | 'lobby'
      uSpeed?: number
    }> = {
      halo: { type: 'waterPlane', color1: '#ff5005', color2: '#dbba95', color3: '#d0bce1' },
      pensive: { type: 'sphere', color1: '#8b00ff', color2: '#ff0097', color3: '#00f2ff', uSpeed: 0.2 },
      mint: { type: 'waterPlane', color1: '#00ff88', color2: '#00d4ff', color3: '#00ffd0' },
      interstella: { type: 'sphere', lightType: 'env', envPreset: 'dawn', color1: '#ff00ff', color2: '#00ffff', color3: '#ff00ff' },
      nightyNight: { type: 'waterPlane', color1: '#1a0033', color2: '#4d0099', color3: '#7700ff' },
      violaOrientalis: { type: 'sphere', color1: '#ffffff', color2: '#ffff00', color3: '#0000ff' },
      universe: { type: 'waterPlane', color1: '#ff00ff', color2: '#ff0099', color3: '#9900ff' },
      sunset: { type: 'sphere', color1: '#ff6600', color2: '#ff0066', color3: '#ffcc00' },
      mandarin: { type: 'waterPlane', color1: '#ff6600', color2: '#ff9900', color3: '#ffcc00' },
      cottonCandy: { type: 'waterPlane', color1: '#ffccff', color2: '#ccffff', color3: '#ffffcc' }
    }
    
    const config = presetConfigs[preset]
    if (config) {
      if (config.type) setType(config.type)
      if (config.color1) setColor1(config.color1)
      if (config.color2) setColor2(config.color2)
      if (config.color3) setColor3(config.color3)
      if (config.lightType) setLightType(config.lightType)
      if (config.envPreset) setEnvPreset(config.envPreset)
      if (config.uSpeed !== undefined) setUSpeed(config.uSpeed)
    }
  }

  return (
    <div className='h-screen w-screen relative bg-black'>
      {/* Gradient Canvas */}
      <ShaderGradientCanvas className='absolute inset-0'>
        <ShaderGradient
          type={type}
          shader={shader}
          wireframe={wireframe}
          positionX={positionX}
          positionY={positionY}
          positionZ={positionZ}
          rotationX={rotationX}
          rotationY={rotationY}
          rotationZ={rotationZ}
          color1={color1}
          color2={color2}
          color3={color3}
          lightType={lightType}
          brightness={brightness}
          envPreset={envPreset}
          reflection={reflection}
          animate={animate}
          uTime={uTime}
          uSpeed={uSpeed}
          uStrength={uStrength}
          uDensity={uDensity}
          uFrequency={uFrequency}
          uAmplitude={uAmplitude}
          cAzimuthAngle={cAzimuthAngle}
          cPolarAngle={cPolarAngle}
          cDistance={type !== 'sphere' ? cDistance : undefined}
          cameraZoom={type === 'sphere' ? cameraZoom : undefined}
          grain={grain}
          zoomOut={zoomOut}
          enableTransition={enableTransition}
        />
      </ShaderGradientCanvas>
      
      {/* Controls Panel */}
      <div className='absolute top-0 right-0 w-96 h-full bg-black/90 backdrop-blur text-white overflow-y-auto'>
        {/* Header with Presets */}
        <div className='p-4 border-b border-white/20'>
          <h1 className='text-2xl font-bold mb-4'>Shader Controls</h1>
          
          {/* Preset Selector */}
          <div className='mb-4'>
            <label className='block text-sm mb-2'>Presets</label>
            <select 
              value={selectedPreset} 
              onChange={(e) => {
                setSelectedPreset(e.target.value)
                applyPreset(e.target.value)
              }}
              className='w-full bg-white/10 rounded px-3 py-2 text-sm'
            >
              {presets.map(preset => (
                <option key={preset.value} value={preset.value}>{preset.label}</option>
              ))}
            </select>
          </div>
          
          {/* Tab Navigation */}
          <div className='flex space-x-1'>
            {(['shape', 'colors', 'motion', 'view'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                  activeTab === tab 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className='p-4 space-y-4'>
          {/* SHAPE TAB */}
          {activeTab === 'shape' && (
            <>
              {/* Type */}
              <div>
                <label className='block text-sm mb-2'>Shape Type</label>
                <select 
                  value={type} 
                  onChange={(e) => setType(e.target.value as typeT)}
                  className='w-full bg-white/10 rounded px-3 py-2 text-sm'
                >
                  <option value="plane">Plane</option>
                  <option value="waterPlane">Water Plane</option>
                  <option value="sphere">Sphere</option>
                </select>
              </div>
              
              {/* Shader */}
              <div>
                <label className='block text-sm mb-2'>Shader</label>
                <select 
                  value={shader} 
                  onChange={(e) => setShader(e.target.value as 'defaults' | 'positionMix')}
                  className='w-full bg-white/10 rounded px-3 py-2 text-sm'
                >
                  <option value="defaults">Default</option>
                  <option value="positionMix">Position Mix</option>
                </select>
              </div>
              
              {/* Wireframe */}
              <div>
                <label className='flex items-center space-x-2'>
                  <input 
                    type="checkbox" 
                    checked={wireframe} 
                    onChange={(e) => setWireframe(e.target.checked)}
                    className='rounded'
                  />
                  <span className='text-sm'>Wireframe</span>
                </label>
              </div>
              
              {/* Position */}
              <div>
                <h3 className='text-sm font-medium mb-2'>Position</h3>
                <div className='space-y-2'>
                  <div>
                    <label className='block text-xs mb-1'>X: {positionX.toFixed(1)}</label>
                    <input 
                      type="range" 
                      min="-10" 
                      max="10" 
                      step="0.1"
                      value={positionX} 
                      onChange={(e) => setPositionX(parseFloat(e.target.value))}
                      className='w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-xs mb-1'>Y: {positionY.toFixed(1)}</label>
                    <input 
                      type="range" 
                      min="-10" 
                      max="10" 
                      step="0.1"
                      value={positionY} 
                      onChange={(e) => setPositionY(parseFloat(e.target.value))}
                      className='w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-xs mb-1'>Z: {positionZ.toFixed(1)}</label>
                    <input 
                      type="range" 
                      min="-10" 
                      max="10" 
                      step="0.1"
                      value={positionZ} 
                      onChange={(e) => setPositionZ(parseFloat(e.target.value))}
                      className='w-full'
                    />
                  </div>
                </div>
              </div>
              
              {/* Rotation */}
              <div>
                <h3 className='text-sm font-medium mb-2'>Rotation</h3>
                <div className='space-y-2'>
                  <div>
                    <label className='block text-xs mb-1'>X: {rotationX}°</label>
                    <input 
                      type="range" 
                      min="-360" 
                      max="360" 
                      step="1"
                      value={rotationX} 
                      onChange={(e) => setRotationX(parseInt(e.target.value))}
                      className='w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-xs mb-1'>Y: {rotationY}°</label>
                    <input 
                      type="range" 
                      min="-360" 
                      max="360" 
                      step="1"
                      value={rotationY} 
                      onChange={(e) => setRotationY(parseInt(e.target.value))}
                      className='w-full'
                    />
                  </div>
                  <div>
                    <label className='block text-xs mb-1'>Z: {rotationZ}°</label>
                    <input 
                      type="range" 
                      min="-360" 
                      max="360" 
                      step="1"
                      value={rotationZ} 
                      onChange={(e) => setRotationZ(parseInt(e.target.value))}
                      className='w-full'
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          
          {/* COLORS TAB */}
          {activeTab === 'colors' && (
            <>
              {/* Color Pickers */}
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm mb-2'>Color 1</label>
                  <div className='flex items-center space-x-2'>
                    <input 
                      type="color" 
                      value={color1} 
                      onChange={(e) => setColor1(e.target.value)}
                      className='h-10 w-20 rounded cursor-pointer'
                    />
                    <input 
                      type="text" 
                      value={color1} 
                      onChange={(e) => setColor1(e.target.value)}
                      className='flex-1 bg-white/10 rounded px-2 py-1 text-sm'
                    />
                  </div>
                </div>
                
                <div>
                  <label className='block text-sm mb-2'>Color 2</label>
                  <div className='flex items-center space-x-2'>
                    <input 
                      type="color" 
                      value={color2} 
                      onChange={(e) => setColor2(e.target.value)}
                      className='h-10 w-20 rounded cursor-pointer'
                    />
                    <input 
                      type="text" 
                      value={color2} 
                      onChange={(e) => setColor2(e.target.value)}
                      className='flex-1 bg-white/10 rounded px-2 py-1 text-sm'
                    />
                  </div>
                </div>
                
                <div>
                  <label className='block text-sm mb-2'>Color 3</label>
                  <div className='flex items-center space-x-2'>
                    <input 
                      type="color" 
                      value={color3} 
                      onChange={(e) => setColor3(e.target.value)}
                      className='h-10 w-20 rounded cursor-pointer'
                    />
                    <input 
                      type="text" 
                      value={color3} 
                      onChange={(e) => setColor3(e.target.value)}
                      className='flex-1 bg-white/10 rounded px-2 py-1 text-sm'
                    />
                  </div>
                </div>
              </div>
              
              {/* Lighting */}
              <div className='pt-4 border-t border-white/10'>
                <h3 className='text-sm font-medium mb-3'>Lighting</h3>
                
                {/* Light Type */}
                <div className='mb-3'>
                  <label className='block text-sm mb-2'>Light Type</label>
                  <select 
                    value={lightType} 
                    onChange={(e) => setLightType(e.target.value as '3d' | 'env')}
                    className='w-full bg-white/10 rounded px-3 py-2 text-sm'
                  >
                    <option value="3d">3D Light</option>
                    <option value="env">Environment</option>
                  </select>
                </div>
                
                {/* 3D Light Controls */}
                {lightType === '3d' && (
                  <div>
                    <label className='block text-xs mb-1'>Brightness: {brightness.toFixed(1)}</label>
                    <input 
                      type="range" 
                      min="0.1" 
                      max="3" 
                      step="0.1"
                      value={brightness} 
                      onChange={(e) => setBrightness(parseFloat(e.target.value))}
                      className='w-full'
                    />
                  </div>
                )}
                
                {/* Environment Light Controls */}
                {lightType === 'env' && (
                  <>
                    <div className='mb-3'>
                      <label className='block text-sm mb-2'>Environment</label>
                      <select 
                        value={envPreset} 
                        onChange={(e) => setEnvPreset(e.target.value as 'city' | 'dawn' | 'lobby')}
                        className='w-full bg-white/10 rounded px-3 py-2 text-sm'
                      >
                        <option value="city">City</option>
                        <option value="dawn">Dawn</option>
                        <option value="lobby">Lobby</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className='block text-xs mb-1'>Reflection: {reflection.toFixed(2)}</label>
                      <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.01"
                        value={reflection} 
                        onChange={(e) => setReflection(parseFloat(e.target.value))}
                        className='w-full'
                      />
                    </div>
                  </>
                )}
              </div>
            </>
          )}
          
          {/* MOTION TAB */}
          {activeTab === 'motion' && (
            <>
              {/* Animation Toggle */}
              <div>
                <label className='block text-sm mb-2'>Animation</label>
                <button 
                  onClick={() => setAnimate(animate === 'on' ? 'off' : 'on')}
                  className='w-full bg-white/10 rounded px-3 py-2 text-sm hover:bg-white/20 transition-colors'
                >
                  {animate === 'on' ? 'ON' : 'OFF'}
                </button>
              </div>
              
              {/* Manual Time Control */}
              {animate === 'off' && (
                <div>
                  <label className='block text-xs mb-1'>Time: {uTime.toFixed(1)}</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="0.1"
                    value={uTime} 
                    onChange={(e) => setUTime(parseFloat(e.target.value))}
                    className='w-full'
                  />
                </div>
              )}
              
              {/* Animation Parameters */}
              <div className='space-y-3'>
                <div>
                  <label className='block text-xs mb-1'>Speed: {uSpeed.toFixed(2)}</label>
                  <input 
                    type="range" 
                    min="0.1" 
                    max="2" 
                    step="0.01"
                    value={uSpeed} 
                    onChange={(e) => setUSpeed(parseFloat(e.target.value))}
                    className='w-full'
                  />
                </div>
                
                <div>
                  <label className='block text-xs mb-1'>Strength: {uStrength.toFixed(1)}</label>
                  <input 
                    type="range" 
                    min="0.1" 
                    max="10" 
                    step="0.1"
                    value={uStrength} 
                    onChange={(e) => setUStrength(parseFloat(e.target.value))}
                    className='w-full'
                  />
                </div>
                
                <div>
                  <label className='block text-xs mb-1'>Density: {uDensity.toFixed(2)}</label>
                  <input 
                    type="range" 
                    min="0.1" 
                    max="5" 
                    step="0.01"
                    value={uDensity} 
                    onChange={(e) => setUDensity(parseFloat(e.target.value))}
                    className='w-full'
                  />
                </div>
                
                <div>
                  <label className='block text-xs mb-1'>Frequency: {uFrequency.toFixed(1)}</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="20" 
                    step="0.1"
                    value={uFrequency} 
                    onChange={(e) => setUFrequency(parseFloat(e.target.value))}
                    className='w-full'
                  />
                </div>
                
                {type === 'sphere' && (
                  <div>
                    <label className='block text-xs mb-1'>Amplitude: {uAmplitude.toFixed(2)}</label>
                    <input 
                      type="range" 
                      min="0.1" 
                      max="5" 
                      step="0.01"
                      value={uAmplitude} 
                      onChange={(e) => setUAmplitude(parseFloat(e.target.value))}
                      className='w-full'
                    />
                  </div>
                )}
              </div>
              
              {/* Transitions */}
              <div className='pt-4 border-t border-white/10'>
                <label className='flex items-center space-x-2'>
                  <input 
                    type="checkbox" 
                    checked={enableTransition} 
                    onChange={(e) => setEnableTransition(e.target.checked)}
                    className='rounded'
                  />
                  <span className='text-sm'>Enable Smooth Transitions</span>
                </label>
              </div>
            </>
          )}
          
          {/* VIEW TAB */}
          {activeTab === 'view' && (
            <>
              {/* Camera Controls */}
              <div>
                <h3 className='text-sm font-medium mb-3'>Camera</h3>
                
                <div className='space-y-3'>
                  <div>
                    <label className='block text-xs mb-1'>Azimuth: {cAzimuthAngle}°</label>
                    <input 
                      type="range" 
                      min="0" 
                      max="360" 
                      step="1"
                      value={cAzimuthAngle} 
                      onChange={(e) => setCAzimuthAngle(parseInt(e.target.value))}
                      className='w-full'
                    />
                  </div>
                  
                  <div>
                    <label className='block text-xs mb-1'>Polar: {cPolarAngle}°</label>
                    <input 
                      type="range" 
                      min="0" 
                      max="180" 
                      step="1"
                      value={cPolarAngle} 
                      onChange={(e) => setCPolarAngle(parseInt(e.target.value))}
                      className='w-full'
                    />
                  </div>
                  
                  {type !== 'sphere' ? (
                    <div>
                      <label className='block text-xs mb-1'>Distance: {cDistance.toFixed(1)}</label>
                      <input 
                        type="range" 
                        min="0.5" 
                        max="20" 
                        step="0.1"
                        value={cDistance} 
                        onChange={(e) => setCDistance(parseFloat(e.target.value))}
                        className='w-full'
                      />
                    </div>
                  ) : (
                    <div>
                      <label className='block text-xs mb-1'>Zoom: {cameraZoom.toFixed(1)}</label>
                      <input 
                        type="range" 
                        min="0.1" 
                        max="30" 
                        step="0.1"
                        value={cameraZoom} 
                        onChange={(e) => setCameraZoom(parseFloat(e.target.value))}
                        className='w-full'
                      />
                    </div>
                  )}
                </div>
              </div>
              
              {/* View Options */}
              <div className='pt-4 border-t border-white/10 space-y-3'>
                <h3 className='text-sm font-medium mb-2'>View Options</h3>
                
                <label className='flex items-center space-x-2'>
                  <input 
                    type="checkbox" 
                    checked={zoomOut} 
                    onChange={(e) => setZoomOut(e.target.checked)}
                    className='rounded'
                  />
                  <span className='text-sm'>Zoom Out (Wide View)</span>
                </label>
                
                <div>
                  <label className='block text-sm mb-2'>Grain Effect</label>
                  <button 
                    onClick={() => setGrain(grain === 'on' ? 'off' : 'on')}
                    className='w-full bg-white/10 rounded px-3 py-2 text-sm hover:bg-white/20 transition-colors'
                  >
                    {grain === 'on' ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}