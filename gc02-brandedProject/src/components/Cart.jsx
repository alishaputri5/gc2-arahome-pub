import { Link } from "react-router-dom";

export default function Cart({ products }) {
  return (
    <>
      <div id="products" className="bg-stone-200">
        <div className="grid grid-cols-4 max-md:items-center max-md:flex-col-reverse justify-between max-md:py-10 px-32 py-10 ">
          {products.map((product) => {
            return (
              <div
                className="max-md:text-center max-md:w-[90%] max-md:gap-3 flex flex-col"
                key={product.id}
              >
                <Link to={`/${product.id}`}>
                  <div className="flex justify-center">
                    <img src={product.imgUrl} className="w-[20vw] h-[40vh]" />
                  </div>
                  <div className="py-3 grid grid-cols-2">
                    <p className="text-center first-letter:uppercase text-xl font-bold">
                      {product.name}
                    </p>
                    <p className="text-center text-xl">Rp.{product.price}</p>
                    <p className="text-center font-[300] text-lg ">
                      {product.Category?.name}
                    </p>
                  </div>
                  <p className="text-center">{product.description}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
