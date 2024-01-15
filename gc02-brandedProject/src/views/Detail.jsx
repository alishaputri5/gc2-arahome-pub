import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [productById, setProductById] = useState({});
  const url = "https://phase2-aio.vercel.app";

  async function fetchProductById() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/products/${id}`
      );
      setProductById(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <div className="flex h-screen flex-col-2 gap-10 px-20 py-36">
      <div className="flex">
        <div className="flex px-20">
          <img src={productById.imgUrl} alt="" className="w-[20vw] h-[40vh]" />
        </div>
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-center text-2xl font-bold">
              {productById.name}
            </h1>
          </div>
          <div className="whitespace-normal">
            <p>Price: {productById.price}</p>
            <p>Stock: {productById.stock}</p>
            <p>
              Description:{" "}
              <span className="whitespace-normal">
                {productById.description}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
