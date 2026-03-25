import '@testing-library/jest-dom'
import { render, screen, act } from '@testing-library/react'
import Page from '@/app/(root)/page'
import 'intersection-observer';

describe('main page', () => {
    it('renders a heading', async () => {
        await act(async () => {
            render(await Page({ searchParams: new URLSearchParams({}) }))
        });
    });
});
