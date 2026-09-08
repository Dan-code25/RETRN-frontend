import type { Meta, StoryObj } from '@storybook/react-vite'
import HomeNavbar from './HomeNavbar'

const meta = {
  title: 'Components/features/HomeNavbar',
  component: HomeNavbar,
  tags: ['autodocs'],
} satisfies Meta<typeof HomeNavbar>

export default meta

type Story = StoryObj<typeof HomeNavbar>

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => <HomeNavbar />,
}