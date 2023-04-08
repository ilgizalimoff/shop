import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { getPageCount, changePriceToNumber } from '../utils/utils';
import HeaderTop from '../components/Header/HeaderTop';
import Catalog from '../components/pages/Catalog';
import Basket from '../components/pages/Basket';
import { basketItemsSum } from '../utils/utils';

describe('10 tests', () => {
    it('1. Test getPageCount function', () => {
        expect(getPageCount(17, 15)).toBe(2);
        expect(getPageCount(17, 17)).toBe(1);
        expect(getPageCount(17, 18)).toBe(1);
        expect(getPageCount(17, 0)).toBe(Infinity);
    });

    it('2. Test changePriceToNumber function', () => {
        expect(changePriceToNumber('17,5')).toBe(17.5);
        expect(changePriceToNumber('17.5')).toBe(17.5);
        expect(changePriceToNumber('17 000')).toBe(17000);
    });

    it('3. Test admin-panel link renders', () => {
        render(
            <MemoryRouter>
                <HeaderTop />
            </MemoryRouter>
        );
        const adminPanelLink = screen.getByText(/Админ-панель/i);
        expect(adminPanelLink).toBeInTheDocument();
    });

    it('4. Test type cares item renders', async () => {
        render(
            <MemoryRouter>
                <Catalog />
            </MemoryRouter>
        );
        const items = await screen.findAllByText(/Уход за лицом/i)
        expect(items.length).toBe(2)
    });

    it('5. Go to basket link test', () => {
        render(<App />);
        const ibBasketBtn = screen.getByTestId('basket-link')
        expect(screen.queryByTestId('basket-page')).toBeNull()
        fireEvent.click(ibBasketBtn)
        expect(screen.getByTestId('basket-page')).toBeInTheDocument()
    });

    it('6. Go to admin-panel link test', () => {
        render(<App />);
        const adminLink = screen.getByTestId('admin')
        expect(screen.queryByTestId('admin__wrapper')).toBeNull()
        fireEvent.click(adminLink)
        expect(screen.getByTestId('admin__wrapper')).toBeInTheDocument()
    });

    it('7. Test basket item missing in the document', () => {
        render(
            <MemoryRouter>
                <Basket />
            </MemoryRouter>
        );
        const basketPage = screen.queryByTestId('basket-item')
        expect(basketPage).toBeNull()
    });

    it('8. Test set localStorage initial product items', () => {
        const products = JSON.parse(localStorage.getItem('products') || '[]')
        expect(products.length).toBe(17)
    });

    it('9. Test get localStorage basket items', () => {
        const basketItems = JSON.parse(localStorage.getItem('basketItems') || '[]')
        expect(basketItems.length).not.toBeNull()
    });

    it('10. Test correct calculate basketItemsSum function', () => {
        const testItems = [
            {
                id: 222,
                image_url: "/img/img.png",
                name: "testName",
                size_type: "г",
                size: "15X28.8",
                barcode: 1111,
                producer: "testProducer",
                brand: "testBtrand",
                description: "testDescription",
                price: "750",
                type_care: [{ "title": "Гигиеническая продукция", "number": 1 }],
                count: 6
            }]

        expect(basketItemsSum(testItems)).toBe(4500);
    });
})



