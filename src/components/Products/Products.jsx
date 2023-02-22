import React from 'react'
import css from '../Products/Products.module.css'
import Plane from '../../assets/plane.png'
import {ProductsData} from '../../data/products'
import  { useState } from 'react';




const Products = () => {
       const [MenuProducts, setMenuProdutcs] = useState(ProductsData);

    const filter=(type)=>{
        setMenuProdutcs(ProductsData.filter((product)=>product.type===type
        ))}


  return (
   <div className={css.container}>
    <img  src={Plane} alt="" />
    <h1>ÖNE ÇIKAN ÜRÜNLERİMİZ</h1>

    <div className={css.products}>
        <ul className={css.menu}>
            <li onClick={()=>setMenuProdutcs(ProductsData)}>TÜM ÜRÜNLER</li>
            <li onClick={()=>filter("skin care")}>KADIN GİYİM</li>
            <li onClick={()=>filter("conditioner")}>ERKEK GİYİM</li>
            <li onClick={()=>filter("foundation")}>ÇOCUK GİYİM</li>
        </ul>

        <div className={css.list }>

            
        {MenuProducts.map((product,i)=>(
                    <div className={css.product}>
                        <div className="left-s">
                            <div className="name">
                            <span>{ product.name}</span>
                            <span> {product.detail}</span>
                            
                            </div>
                            <span>{product.price}₺</span>
                            <div className="Shop"> Shop Now </div>
                            
                        </div>
                        
                        
                        <img src={product.img} alt="" className="img-p" />
                    </div>
                ))}
        </div>

    </div>
   </div>
  )
}

export default Products