import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import { themeStore } from "../../common/Store";
import { useStore } from "zustand";

const Products = () => {
  const [pageSize, setPageSize] = useState(10);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
const {theme,toggle}=useStore(themeStore)
  const getProductData = async () => {
    try
    {
      const baseUrl = `http://localhost:3000/api/products?pageSize=${pageSize}`;
    const url = searchTerm ? baseUrl + `&searchTerm=${searchTerm}` : baseUrl;
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data.products);
    }
    catch(error){
      console.error(error)
    }
   };

  useEffect(() => {
    getProductData();
  }, [searchTerm, pageSize]);

  return (
    <>
      {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
    <div  className={`w-full h-full ${theme === "light" ? "bg-white" : "bg-gray-600"}`}>
    <Navbar  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className="grid grid-cols-3 gap-5 p-7">
        {products?.map((product) => (
          <ProductCard  key={product.id} product={product} />
        ))}
        
      </div>
     <div className="justify-center flex">
     <button
          onClick={() => {
            setPageSize(prevState => prevState + 5);
          }}
          className="text-white  bg-purple-700 px-5 py-4 scale-100  border-b-zinc-400 border rounded-lg   "
        >
          View more
        </button>
     </div>
    </div>
    </>
  );
};

export default Products;
