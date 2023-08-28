import { useNavigate } from "react-router-dom";
import { IProduct } from "../Product";
import { PAGES } from "../Routes";

const ListOfProducts = ({ products}: {products: IProduct[]}) => {
  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    console.log('handleItemClick', id);
    navigate(`${PAGES.PRODUCT}/${id}`);
  }

  const handleRemoveClick = () => {
    console.log('handleRemoveClick');
  }

  return (<ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => handleItemClick(product.id)}>{product.title} <button onClick={handleRemoveClick}>remove from cart</button></li>
        ))}
      </ul>)
}

export default ListOfProducts;