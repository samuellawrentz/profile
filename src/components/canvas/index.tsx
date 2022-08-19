import React, { useRef, useEffect } from 'react'

const Canvas = (props: any) => {
  
  const { draw, ...rest } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const getBoundingRects = () => {
    const cards = canvasRef.current?.closest('.blogs')?.querySelectorAll('a') || []
    const rects = Array.from(cards).map(card => card.getBoundingClientRect())
    return rects
  }

  const generateMap = (rects: DOMRect[]) => {
    const commands: (number | string)[][] = []
    rects.forEach((rect, i) => {
        commands.push(['move', rect.x, rect.y])
        commands.push(['line', rect.x + rect.width, rect.y])
        commands.push(['line', rect.x + rect.width, rect.y + rect.height])
        commands.push(['line', rect.x, rect.y + rect.height])
        commands.push(['line', rect.x, rect.y])
    })
    console.log(commands);
    return commands
  }
  
  useEffect(() => {
    
    const canvas: any = canvasRef.current
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')
    let animationFrameId: number
    const rects = getBoundingRects()
    const commands = generateMap(rects)

    const draw = () => {
        ctx.fillStyle = ctx.strokeStyle = '#fff'
        ctx.beginPath()
        commands.forEach((cmd:any) => {

            //@ts-ignore
            ctx[`${cmd[0]}To`](cmd[1], cmd[2])
            console.log(`ctx[${cmd[0]}To](${cmd[1]}, ${cmd[2]})`);
            
        });

        ctx.closePath()
        ctx.stroke()
      }
      draw()
    
    // const render = () => {
    //   draw()
    //   animationFrameId = window.requestAnimationFrame(render)
    // }
    // render()
    
    // return () => {
    //   window.cancelAnimationFrame(animationFrameId)
    // }
  }, [])
  
  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas