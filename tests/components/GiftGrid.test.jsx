import {render, screen} from '@testing-library/react';
import { GiftGrid } from '../../src/components/GiftGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas sobre el componente <GriftGrid />', () => { 
    const category =  'One Punch';

    test('debe de mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render( <GiftGrid category={category}/>);
        // screen.debug();
        
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category));
        
    });
    
    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        const gifs = [
            {
                id:'abc',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id:'fds',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GiftGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);

      })
 })