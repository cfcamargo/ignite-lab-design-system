import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx'



export interface TextInputRootProps {
  children: ReactNode
}

function TextInpuRoot(props : TextInputRootProps){
  return (
    <div className='h-12 flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {props.children}
    </div>
  )
}

TextInpuRoot.displayName = 'TextInput.Root'


export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputIconProps){
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder : string
}


function TextInputInput(props : TextInputInputProps){
  return (
      <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
        {...props}
      />
  )
}

TextInputInput.displayName = 'TextInput.Input'


export const TextInput = {
  Root: TextInpuRoot,
  Input : TextInputInput,
  Icon: TextInputIcon
}