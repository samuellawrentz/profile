/**
 * Google Icons that are used in the application.
 *
 * Please visit https://fonts.google.com/icons to find different icons and their names
 */

import React, { ReactNode, useState, useEffect,  } from "react"

interface IconProp {
    name?: string,
    className?: string,
    size?: number,
    color?: string,
    style?: React.CSSProperties,
    hoverColor?: string,
    svg?: React.ComponentType,
}
 export const Icon = ({ className = '', name, size, color, style, hoverColor, svg, ...props }: IconProp) => {
    const [iconColor, setIconColor] = useState(color ? `var(--${color})` : undefined)
    let iconEventProps = {}
    const SvgIcon = svg
  
    if (color && hoverColor) {
      iconEventProps = {
        onMouseEnter: () => setIconColor(`var(--${hoverColor})`),
        onMouseLeave: () => setIconColor(`var(--${color})`),
      }
    }
  
    // Effect to update color if the prop chages dynamically
    useEffect(() => {
      setIconColor(`var(--${color})`)
    }, [color])
  
    return (
      <span
        className={[
          'sg contacto-icon',
          !svg ? 'material-icons-round' : 'contacto-icon-custom',
          className,
        ].join(' ')}
        style={{
          ...style,
          color: iconColor,
          fontSize: size,
          cursor: hoverColor && 'pointer',
          overflow: 'hidden',
          lineHeight: 1,
          width: size,
          height: size,
        }}
        {...props}
        {...iconEventProps}
      >
        {SvgIcon ? <SvgIcon /> : name}
      </span>
    )
  }