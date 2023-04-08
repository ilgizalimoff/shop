import Basket from "../components/pages/Basket";
import Catalog from "../components/pages/Catalog";
import ProductIdItem from "../components/pages/ProductIdItem";
import AdminPanel from "../components/pages/AdminPanel";
import AddProduct from "../components/AdminPanel/AddProduct";
import RemoveProduct from "../components/AdminPanel/RemoveProduct";
import UpdateProduct from "../components/AdminPanel/UpdateProduct";
import OneProductUpdate from "../components/AdminPanel/OneProductUpdate";

export const routes = [
    { id: 1, path: '/catalog', element: <Catalog /> },
    { id: 2, path: '/basket', element: <Basket /> },
    { id: 3, path: '/catalog/:id', element: <ProductIdItem /> },
    { id: 4, path: '/admin', element: <AdminPanel /> },
    { id: 5, path: '/admin/add', element: <AddProduct /> },
    { id: 6, path: '/admin/remove', element: <RemoveProduct /> },
    { id: 7, path: '/admin/update', element: <UpdateProduct /> },
    { id: 8, path: '/admin/update/:id', element: <OneProductUpdate /> },
    { id: 9, path: '/*', element: <Catalog /> },
]
