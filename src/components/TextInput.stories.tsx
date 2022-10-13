import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps } from './TextInput'
import { Envelope } from 'phosphor-react'

export default {
  title : 'Components/TextInput',
  component : TextInput.Root,
  args : {
    children : [
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>,
        <TextInput.Input placeholder='Type your email adress'/>
    ]
  },
  argTypes : {
    children : {
      table : {
        disable : true
      }
    },
  }
  
} as Meta<TextInputInputProps>

export const Default : StoryObj<TextInputInputProps> = {}

export const TithoutIcon : StoryObj<TextInputInputProps> = {
  args : {
    children : (
        <TextInput.Input placeholder='Type your email adress'/>
    )
  },
}
