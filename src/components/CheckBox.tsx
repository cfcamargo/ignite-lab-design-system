import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckBoxProps {
}

export function CheckBox(){
  return (
    <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded before:'>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className='w-5 h-5 text-cyan-500'/>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}