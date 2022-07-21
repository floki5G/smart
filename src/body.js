import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
export const Body = () => {

    const [data, setData] = useState([])
    const [click, setClick] = useState("false")
    const [srtext, setSrtext] = useState()

    // Api call 
    useEffect(() => {
        axios.get('https://myqa.fleksa.com/pyapi/26/menu')
            .then(response => setData(response.data));
    }, [])


    const [cartItems, setCartItems] = useState([]);
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, {
                name: product.name_json.english,
                id: product.id,
                price: product.price, qty: 1
            }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };


    return (
        <>
            <div style={{ "width": "100%" }}>

                <div className="" style={{ "display": "grid", "gridTemplateColumns": "25% 40% 30%", "position": "relative", "paddingTop": "70vh" }} >
                    <div className="d-flex flex-column align-items-end flex-top" style={{ "height": "80vh", "overflow-y": "scroll", }}>
                        <div className='d-flex '>
                        <button style={{"border":"none"}} type="search">  <i class="fa-solid fa-magnifying-glass"></i></button>
                        <input type="text" value={srtext} onChange={(e) => setSrtext(e.target.value)} />
                        </div>

                        {(data.categories) ? data.categories.map((e, key) => {

                            return (
                                <>
                                    <div className="my-3" >
                                        <a href={`#category${e.id}`}  ><span className="px-4 py-1 b2" style={{ "color": (click === key) ? "white" : null, "borderRadius": (click === key) ? "50px" : null, "background": (click === key) ? "black" : "white" }} onClick={() => setClick(key)}>{e.name_json.english}</span></a>

                                    </div>

                                </>
                            )
                        }) : null}
                    </div>


                    <div className="mx-2 my-2">
                        {(data.categories) ? data.categories.map((e, catkey) => {

                            return (
                                <>
                                    <div style={{ "background": (click === catkey) ? "yellow" : null, }}>
                                        <div className="b2catehory my-4 " id={`category${e.id}`}>{e.name_json.english}</div>
                                        {e.products.map((p) => <div className="b2p d-flex justify-content-between  align-items-center py-4 sm-px-4">
                                            <div className="d-flex justify-content-start align-items-start  flex-column mx-3 my-2" style={{}}>

                                                <div className="b2product">  {p.name_json.english} </div>
                                                <div className="b2pdesc"> {p.description_json.english}  </div>
                                                <div className="b2pprice"> {p.price}  </div>
                                            </div>
                                            {
                                                cartItems.find((x) => x.id == p.id) ? <div className='d-flex justify-content-center align-items-center '>
                                                    <div className='d-flex'>
                                                        <div className='px-2 py-1' style={{ "background": "yellow", "color": "black" }} onClick={() => onRemove(p)}>-</div>
                                                        <div className='px-3' style={{"background":"yellow" ,"color":"black"}}> {p.qty} </div>
                                                        <div className='px-2 py-1' style={{ "background": "yellow", "color": "black" }} onClick={() => onAdd(p)}>+</div>
                                                    </div>
                                                </div> : <div className="b2pdivb">
                                                    <button className="b2pdivb-button px-4 py-2" style={{"borderRadius":"10px"}} onClick={() => onAdd(p)}>ADD </button>
                                                </div>}
                                        </div>)}
                                    </div>
                                </>
                            )
                        }) : null}
                    </div>

                    <div className="d-flex flex-column align-items-betweeen my-2">

                        <h3 className="b3h"  >
                            YOUR CARTS
                        </h3>
                        {(cartItems.length > 0) ? <div>
                            <div >
                                {cartItems.map((p, key) => <div className='d-flex justify-content-between mt-3'>
                                    <div className="b3pname">{p.name}</div>
                                    <div className='d-flex justify-content-center align-items-center '>
                                        <div className='d-flex'>
                                            <div className='px-2 py-1' style={{ "background": "black", "color": "white" }} onClick={() => onRemove(p)}>-</div>
                                            <div className='px-3'>{p.qty}</div>
                                            <div className='px-2 py-1' style={{ "background": "black", "color": "white" }} onClick={() => onAdd(p)}>+</div>
                                        </div>
                                    </div>
                                    <div>{p.price * p.qty}</div>

                                </div>
                                )}
                            </div>
                            <div className='d-flex justify-content-between my-4'>
                                <div className="total">Total</div>
                                <div>{itemsPrice}</div>
                            </div>
                            <div className='d-flex justify-content-center py-3' style={{ "background": "black", "color": "white" }}>CHECKOUT</div>
                        </div> : <div> <img src="https://roma.fleksa.com/assets/svg/cart-empty.svg" /> </div>}
                    </div>
                </div>
            </div>



        </>
    )
}