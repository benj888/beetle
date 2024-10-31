import { useEffect, useState } from "react";
import { Product } from "@/components/data";
import CloseIcon from "@mui/icons-material/Close";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  const router = useRouter();

  const [cartCheckOutItem, setCartCheckOutItem] = useState<Product[]>([]);

  const [total, settotal] = useState(0);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCartCheckOutItem(JSON.parse(localStorage.getItem("cart") as string));
      const currenttotal = calculateTotalPrice(
        JSON.parse(localStorage.getItem("cart") as string)
      );
      settotal(currenttotal);
      localStorage.setItem("totalPrice", JSON.stringify(currenttotal));
    }
  }, []);

  const calculateTotalPrice = (price: Product[]) => {
    return price.reduce(
      (currentPrice, index) => currentPrice + index.price * index.quantity,
      0
    );
  };

  const handleDeleteItem = (index: number) => {
    const updateCart = [...cartCheckOutItem];
    updateCart.splice(index, 1);
    setCartCheckOutItem(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    const currentDeletePrice = calculateTotalPrice(updateCart);
    settotal(currentDeletePrice);
    localStorage.setItem("totalPrice", JSON.stringify(currentDeletePrice));
  };

  const handleAddItem = (index: number) => {
    const updateCart = [...cartCheckOutItem];

    if (updateCart[index].quantity === updateCart[index].NumberGroups) {
      alert("超過商品數量");
    } else {
      updateCart[index].quantity += 1;
      setCartCheckOutItem(updateCart);
      localStorage.setItem("cart", JSON.stringify(updateCart));
      const currentDeletePrice = calculateTotalPrice(updateCart);
      settotal(currentDeletePrice);
      localStorage.setItem("totalPrice", JSON.stringify(currentDeletePrice));
    }
  };

  const handleMinusItem = (index: number) => {
    const updateCart = [...cartCheckOutItem];

    if ( updateCart[index].quantity === 1 ) {
      handleDeleteItem(index);
    } else {
      updateCart[index].quantity -= 1;
      setCartCheckOutItem(updateCart);
      localStorage.setItem("cart", JSON.stringify(updateCart));
      const currentDeletePrice = calculateTotalPrice(updateCart);
      settotal(currentDeletePrice);
      localStorage.setItem("totalPrice", JSON.stringify(currentDeletePrice));
    }
  };

  return (
    <div className="h-full bg-[#f5f5f5] flex overflow-auto ">
      <div className=" w-2/3 ">
        <div
          className="flex bg-white pl-10 pt-2 rounded-lg"
          onClick={() => {
            router.push("/main");
          }}
        >
          <Fab>
            <HomeIcon sx={{ fontSize: 40, color: "red" }} />
          </Fab>
          <div className="flex-1 text-center p-4 text-2xl bg-white  text-[#ee4d2d]">
            購物車
          </div>
        </div>
        {cartCheckOutItem.length === 0 ? (
          <div className="text-center p-10">目前購物車是空的</div>
        ) : (
          <div className="grid grid-cols-4 p-4 gap-2 bg-[#f5f5f5]">
            {cartCheckOutItem.map((item, index) => (
              <div
                key={`space_${index}`}
                className="border p-4 rounded-md shadow-md bg-white"
              >
                <div
                  className="flex justify-center pb-2"
                  onClick={() => {
                    handleDeleteItem(index);
                  }}
                >
                  <Fab size="medium">
                    <CloseIcon sx={{ fontSize: 40, color: "red" }} />
                  </Fab>
                </div>
                <img className="aspect-[1/1]" src={item.imageUrl[0]} />
                <div className="border">
                  <p>名稱:{item.name}</p>
                  <p>學名:{item.ScientificName}</p>
                  <p>產地:{item.Origin}</p>
                  <p>類別:{item.beetletype}</p>
                  <p>累代:{item.generations}</p>
                  <p>尺寸/齡數:{item.beetleSize}</p>
                  {item.id !== 5 && <p>親代:{item.parent}</p>}
                  <p>金額:{item.price}</p>
                  <p>購買數量:{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="h-full w-full flex-1 bg-[#f5f5f5] px-4 border p-2 rounded-lg">
        <div className="h-full bg-white rounded-xl shadow-xl flex flex-col">
          <div className="text-center m-4 text-2xl ">總金額</div>

          <div className="">
            <div className="grid grid-cols-5 gap-6 ">
              <div className="font-bold">名稱</div>
              <div className="font-bold">類別</div>
              <div className="font-bold">數量</div>
              <div className="font-bold">金額</div>
              <div className="font-bold">項目總金額</div>
            </div>
            {cartCheckOutItem.map((item, index) => (
              <div
                key={`checkout_${index}`}
                className="grid grid-cols-5 gap-6 items-center mt-4"
              >
                <p>{item.name}</p>
                <p>{item.beetletype}</p>

                <div className="flex cursor-pointer hover text-lg">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMinusItem(index);
                    }}
                  >
                    <RemoveIcon className="hover:bg-gray-200 rounded-md" />
                  </div>
                  {item.quantity}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddItem(index);
                    }}
                  >
                    <AddIcon className="hover:bg-gray-200 rounded-md" />
                  </div>
                </div>

                <p>{item.price}</p>
                <p>{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="mt-40 w-full h-px  bg-slate-200">
            <div className="p-4">總金額:{total}元</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
