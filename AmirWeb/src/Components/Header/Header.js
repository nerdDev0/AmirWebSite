import './Header.css'
import NavBar from './NavBar/NavBar'
import CartHeader from './CartHeader/CartHeader'
import { AiOutlineShop,AiOutlineDatabase,AiOutlineLaptop,AiOutlinePicture,AiOutlineTable } from "react-icons/ai";
let 
shopBack=<AiOutlineShop/>,
database=<AiOutlineDatabase/>,
laptop=<AiOutlineLaptop/>,
Picture=<AiOutlinePicture/>,
Table=<AiOutlineTable/>
export default function Header() {

let valuesCard=[
  {id:1,name:"متن نمایشی",icon:shopBack},
  {id:2,name:"لورم اپسیوم ",icon:Picture},
  {id:3,name:"برگه ها",icon:laptop},
  {id:4,name:"اطلات ذخیره شده",icon:database},
  {id:5,name:"نمودار کیفی",icon:Table}
]

  return (
    <div >
      <NavBar />
     <header className='Header'>
     
        <section className='header-text'>
          <h2  className='header-text-head'>راه حل های قدرتمند دیجیتال با</h2>
          <h2 className='header-text-name-site'>Amir</h2>
         
          <p  className='header-text-des'>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
        </section>
        <section className='container-cartHeader'>
      {
        valuesCard.map((cardItem)=>(
        
          <CartHeader key={cardItem.id} {...cardItem}/>
        
        ))
      }
        </section>
       
      </header>
      
      
     </div>
  )
}
