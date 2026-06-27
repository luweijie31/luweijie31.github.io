import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { LanguageProvider } from '@/lib/i18n'
import { MainContent } from './MainContent'

function renderMainContent(search: string) {
  window.history.replaceState({}, '', search)
  return render(
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>,
  )
}

describe('MainContent', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders the Chinese profile summary for implementation-role positioning', () => {
    renderMainContent('?lang=zh')

    expect(screen.getByRole('heading', { name: '个人总结' })).toBeInTheDocument()
    expect(screen.getByText(/主动了解过 LIMS 系统/i)).toBeInTheDocument()
  })

  it('renders the English profile summary when English is selected', () => {
    renderMainContent('?lang=en')

    expect(screen.getByRole('heading', { name: 'PROFILE' })).toBeInTheDocument()
    expect(screen.getByText(/Familiar with LIMS scenarios/i)).toBeInTheDocument()
  })
})
