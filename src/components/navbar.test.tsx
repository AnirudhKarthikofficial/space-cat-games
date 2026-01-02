import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './navbar'

// Helper to render component with router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Navbar', () => {
  it('renders all navigation links', () => {
    renderWithRouter(<Navbar />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Games')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Source Code')).toBeInTheDocument()
    expect(screen.getByText('Credits')).toBeInTheDocument()
    expect(screen.getByText('Changelog')).toBeInTheDocument()
    expect(screen.getByText('Archive')).toBeInTheDocument()
    expect(screen.getByText('Help')).toBeInTheDocument()
  })

  it('has correct internal route links', () => {
    renderWithRouter(<Navbar />)
    
    const homeLink = screen.getByText('Home').closest('a')
    const gamesLink = screen.getByText('Games').closest('a')
    const sourceCodeLink = screen.getByText('Source Code').closest('a')
    const creditsLink = screen.getByText('Credits').closest('a')
    const changelogLink = screen.getByText('Changelog').closest('a')
    const archiveLink = screen.getByText('Archive').closest('a')
    
    expect(homeLink).toHaveAttribute('href', '/')
    expect(gamesLink).toHaveAttribute('href', '/games')
    expect(sourceCodeLink).toHaveAttribute('href', '/opensource')
    expect(creditsLink).toHaveAttribute('href', '/credits')
    expect(changelogLink).toHaveAttribute('href', '/changelog')
    expect(archiveLink).toHaveAttribute('href', '/archive')
  })

  it('has correct external links', () => {
    renderWithRouter(<Navbar />)
    
    const newsLink = screen.getByText('News').closest('a')
    const helpLink = screen.getByText('Help').closest('a')
    
    expect(newsLink).toHaveAttribute('href', 'https://nijikasoftworks.meowcat.site/')
    expect(helpLink).toHaveAttribute('href', 'https://neurontechnologies.flarum.cloud/d/3-space-cat-games-general')
  })

  it('renders with topnav class', () => {
    renderWithRouter(<Navbar />)
    const navElement = screen.getByText('Home').closest('.topnav')
    expect(navElement).toBeInTheDocument()
  })
})

