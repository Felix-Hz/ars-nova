// INDEX TO SAVE IMPORT LINES IN APP FROM COMPONENTS
export { default as Navbar } from "./Navbar/Navbar";
export { default as Landing } from "./Landing/Landing";
export { default as Footer } from "./Footer/Footer";
export { default as CartWidget } from "./Navbar/CartWidget/CartWidget";

// ITEMS
export { default as Item } from "./Items/Item/Item";
export { default as ItemList } from "./Items/ItemList/ItemList";
export { default as ItemListContainer } from "./Items/ItemListContainer/ItemListContainer";
export { default as ItemCount } from "./Items/ItemCount/ItemCount";
export { default as ItemDetailContainer } from "./Items/ItemDetailContainer/ItemDetailContainer";
export { default as ItemDetail } from "./Items/ItemDetail/ItemDetail";

// ITEM GALLERY
export { default as LeftNav } from "./Items/ItemList/LeftNav/LeftNav";
export { default as RightNav } from "./Items/ItemList/RightNav/RightNav";

// DATA
export { listProducts, getProduct, productType } from "../data/ProductsDB";

// CART
export { default as Cart } from "./Cart/Cart"