import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { vi } from 'vitest';

// Mock the 3D component which causes issues in jsdom environment
vi.mock('@/components/ui/Antigravity', () => ({
    default: () => <div data-testid="antigravity-mock">Antigravity Mock</div>
}));

// ResizeObserver mock is often needed for R3F
window.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

describe('App', () => {
    it('renders without crashing', () => {
        // Note: App contains context providers which are required for children
        // This basic test ensures the root component tree is valid
        render(<App />);
        // We expect the router to render something, usually the index page or not found
        // Since we don't know the exact content of Index page, we'll just check if it didn't throw.
        expect(document.body).toBeInTheDocument();
    });
});
