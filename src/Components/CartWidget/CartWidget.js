import './CartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
 
function CartWidget() {
  let navigate = useNavigate();
  const {totalProd} = useContext(CartContext)

  return (
    <>
      <IconButton onClick={() => navigate(`/cart`, {replace: true})} sx={{ p: 0 }}>
        <ShoppingCartIcon fontSize='large'/>
        <span>{totalProd()}</span>
      </IconButton>
    </>
  )
}

export default CartWidget;