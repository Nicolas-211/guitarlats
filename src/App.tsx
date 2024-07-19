<<<<<<< HEAD
import { useReducer, useEffect } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { cartReducer, initialState } from "./reducers/cart-reducer"

function App() {

  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <>
      <Header 
        cart={state.cart}
        dispatch={dispatch}
      />
      
      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">
              {state.data.map((guitar) => (
                  <Guitar 
                    key={guitar.id}
                    guitar={guitar}
                    dispatch={dispatch}
                  />
              ))}
          </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>
=======

import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { useCart } from './hooks/useCart'


function App() {

  const { data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart,isEmpty,cartTotal } = useCart()


  return (
    <>
    <Header 
      cart={cart}
      removeFromCart={removeFromCart}
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
      clearCart={clearCart}
      isEmpty={isEmpty}
      cartTotal={cartTotal}
    />
    
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar) => (
                <Guitar 
                  key={guitar.id}
                  guitar={guitar}
                  addToCart={addToCart}
                />
            ))}
            
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
>>>>>>> fa5f86207230214e640465f56b2354b43f00d947
    </>
  )
}

export default App
