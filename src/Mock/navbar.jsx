import Determinant from "../Components/Determinant";

export const NavbarMock = [
    {
        id: 1,
        title: 'Determinant',
        child: [
            { id: 1, title: '2x2', path: 'determinant2', element: <Determinant type={'2x2'} /> },
            { id: 2, title: '3x3', path: 'determinant3', element: <Determinant type={'3x3'} /> },
            { id: 3, title: '4x4', path: 'determinant4', element: <Determinant type={'4x4'} /> },
        ]
    },
]