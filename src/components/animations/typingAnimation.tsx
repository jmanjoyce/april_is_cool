import React from 'react'
import { TypeAnimation } from 'react-type-animation'

type BaseTypingProps = {
  className?: string
  speedMs?: number
  startDelayMs?: number
  wrapper?: 'span' | 'p' | 'div' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  cursor?: boolean
  repeat?: number
  preRenderFirstString?: boolean
}

type FromTextProps = BaseTypingProps & {
  text: string
  onComplete?: () => void
}

type FromSequenceProps = BaseTypingProps & {
  sequence: Array<string | number | ((element: HTMLElement | null) => void | Promise<void>)>
}

type TypingAnimationProps = FromTextProps | FromSequenceProps

export function TypingAnimation(props: TypingAnimationProps) {
  const {
    className,
    speedMs = 300,
    startDelayMs = 0,
    wrapper = 'span',
    cursor = true,
    repeat = 0,
    preRenderFirstString,
  } = props

  let sequenceToUse: Array<string | number | ((element: HTMLElement | null) => void | Promise<void>)>

  if ('text' in props) {
    // Build from text + optional start delay + onComplete
    sequenceToUse = []
    if (startDelayMs > 0) sequenceToUse.push(startDelayMs)
    sequenceToUse.push(props.text)
    if (props.onComplete) sequenceToUse.push(() => props.onComplete && props.onComplete())
  } else {
    // Use provided sequence directly
    sequenceToUse = []
    // Respect optional start delay even with custom sequence
    if (startDelayMs > 0) sequenceToUse.push(startDelayMs)
    sequenceToUse.push(...props.sequence)
  }

  const speed = { type: 'keyStrokeDelayInMs' as const, value: speedMs }

  return (
    <TypeAnimation
      sequence={sequenceToUse}
      wrapper={wrapper}
      speed={speed}
      cursor={cursor}
      repeat={repeat}
      className={className}
      preRenderFirstString={preRenderFirstString}
    />
  )
}