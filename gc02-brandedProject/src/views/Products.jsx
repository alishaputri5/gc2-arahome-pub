import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Pagination from "../components/Pagination";


export default function Products() {
  const [products, setProduct] = useState([]);
  const [productById, setProductById] = useState({});
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("ASC");
  const [pagination, setPagination] = useState({});
  const url = "https://phase2-aio.vercel.app";
  const [search, setSearch] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [loading, setLoading] = useState(false)

  async function fetchProduct() {
    // setLoading(true)
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/products?q=${search}&i=${filter}&limit=8&page=${currentPage}&sort=${sort}`
      );
      setProduct(data.data.query);
      setPagination(data.data.pagination);
      // console.log(data.data);
      // console.log(data.data.query);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchProductById() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/products/` + 50
      );
      setProductById(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchCategories() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/categories`
      );
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    } 

  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProductById();
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [search, filter, sort, currentPage]);

  function searchOnChange(event) {
    setSearch(event.target.value);
  }
  function filterOnChange(event) {
    setFilter(event.target.value);
    // console.log(filter);
    console.log(event.target.value);
  }
  function sortOnChange(event) {
    setSort(event.target.value);
  }
  function nextPage(event) {
    if (currentPage < pagination?.totalPage) {
      setCurrentPage(currentPage + 1);
    }
    console.log(currentPage);
  }
  function previousPage(event) {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    console.log(currentPage);
  }

  return (
    <>
     
      <div className="flex flex-col pt-20 bg-stone-200">
        <div className="flex space-x-4 px-36 py-10 w-full">
          <select
            className=" px-2 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-m"
            onChange={filterOnChange}
            name="filter"
          >
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>

          <select name="sort" className="flex border border-black" onChange={sortOnChange}>
            <option value="ASC">Sort</option>
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>

          <input
            type="text"
            placeholder="Search..."
            className="w-1/3 px-4 border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={searchOnChange}
          />
        </div>
        <p className="flex px-40 py-5 text-xl">Explore New Arrivals</p>

        
        <Cart products={products} />

        <Pagination
          nextPage={nextPage}
          previousPage={previousPage}
          currentPage={currentPage}
          pagination={pagination}
        />
      </div>
{/* 
      <Detail productById={productById} /> */}
    </>
  );
}
