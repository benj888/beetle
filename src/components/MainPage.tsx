import { Lifeproducts, Product } from "@/components/data";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Fab from "@mui/material/Fab";
import { useSession, signOut, signIn } from "next-auth/react";
import AddIcon from "@mui/icons-material/Add";
import Snackbar from "@mui/material/Snackbar";
// import { useDrawerStore } from "@/store/drawer";
import {  CategoryList } from "@/content/edata"; 

if (typeof window !== "undefined") {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(Lifeproducts));
  }
}



interface Props{
  category : number
}

export const MainPage = (prop:Props) => {
  // const handleSetVisible = useDrawerStore((state) => state.handleSetVisible);
// console.log(prop)

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [filter, setFilter] = useState<Product[]>(
    JSON.parse(localStorage.getItem("data") as string)
  );
  
  const filterCategory =  prop.category ? filter.filter(item=>(item.id === prop.category)): filter
  
  
 
  const [categoryIcon, setCategoryIcon] = useState("");
  // console.log(categoryIcon)
  
  

  const [showImages, setShowImages] = useState(Array(filter.length).fill(0));



  const { data: session } = useSession();
  const user = session?.user;
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

  useEffect(() => {
    setShowImages(Array(filter.length).fill(0));
  }, [filter.length]);

  const handleImageiterator = (index: number) => {
    setShowImages((prevImages) => {
      const newImages = [...prevImages];
      const nextImage = (prevImages[index] + 1) % filter[index].imageUrl.length;
      newImages[index] = nextImage;
      return newImages;
    });
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: any, reason: string) => {
    if (reason === "加入購物車") {
      return;
    }
    setOpen(false);
  };

  const handleAddtoCart = (index: number) => {
    const addtoCart = filter[index];

    // if (!user) {
    //   alert("請先登入帳號");
    // } else {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart") as string)
        : [];

      const checkcartItem = cart.some(
        // (item: { name: string; id: number }) =>
        //   item.name === addtoCart.name && item.id === addtoCart.id
        (item: { index: number }) => item.index === addtoCart.index
      );

      if (checkcartItem) {
        alert("商品已在購物車");
      } else {
        cart.push(addtoCart);
        localStorage.setItem("cart", JSON.stringify(cart));
        setCartCount(cart.length);
        handleClick();
      }
    // }
  };



  return (
    <div className="bg-[#f5f5f5]  flex p-4 h-full ">
      <div className="pt-10 flex flex-col bg-white sm:w-20 md:w-40 gap-6 text-xl rounded-md border items-center ">
        {CategoryList.sort((a,b)=>a.seq-b.seq).map((categoriesItem, index) => (
          <div
            className="hover:scale-110 cursor-pointer "
            key={index}
            onClick={() => {
              router.push(categoriesItem.url)
              setCategoryIcon(categoriesItem.name);
            }}
          >
            {categoryIcon === categoriesItem.name ? (
              <ArrowRightIcon sx={{ fontSize: 30, color: "red" }} />
            ) : null}
            
            {categoriesItem.name}
          </div>
        ))}
      </div>

      <div className="overflow-auto  flex-1 ">
        <div className="border flex justify-end p-2 rounded-md ml-4  items-center gap-4 pr-10">
          {/* {user ? (
            <>
              <div>歡迎:{user.name}</div>
              <Fab
                variant="extended"
                size="medium"
                className="bg-white border text-lg  p-2  hover:bg-gray-200"
                onClick={() => {
                  signOut();
                }}
              >
                登出
              </Fab>
            </>
          )
           : (
            <>
              <Fab
                type="submit"
                variant="extended"
                size="medium"
                className="bg-white border text-lg rounded-lg p-2  hover:bg-gray-200 "
                onClick={() => {
                  signIn("google");
                }}
              >
                登入
              </Fab>
            </>
          )} */}
          <Fab
            size="large"
            sx={{ height: 45, width: 60 }}
            className="cursor-pointer  bg-white"
            onClick={() => {
              // if (!user) {
              //   alert("請先登入帳號");
              // } else {
                router.push("/cart");
                // handleSetVisible(true);
              // }
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 40, color: "#ee4d2d" }} />
            <span className="absolute bottom-6 left-9  w-5 h-5 flex items-end justify-end text-xl">
              {user && cartCount}
            </span>
          </Fab>
        </div>

        <div className=" bg-white rounded-md ml-4 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-4   border  p-8 ">
          {filterCategory.map((item, index) => (
            <div className="w-80 " key={`space_${index}`}>
              <div className="w-80  border  items-center justify-center rounded-md shadow-md p-2">
                <img
                  src={item.imageUrl[showImages[index]]}
                  className="aspect-[1/1] "
                  onClick={() => {
                    {
                      handleImageiterator(index);
                    }
                  }}
                />
                <p>名稱:{item.name}</p>
                <p>學名:{item.ScientificName}</p>
                <p>產地:{item.Origin}</p>
                <p>類別:{item.beetletype}</p>
                <p>累代:{item.generations}</p>
                <p>尺寸/齡數:{item.beetleSize}</p>
                {item.id !== 5 && <p>親代:{item.parent}</p>}
                <p>金額:{item.price}</p>
                <p>剩餘數量:{item.NumberGroups}</p>
                <div className=" w-82 ">
                  <div className="flex justify-center">
                    <Fab
                      variant="extended"
                      className="flex-1"
                      sx={{
                        backgroundColor: "#0dcee6",
                      }}
                      onClick={() => {
                        handleAddtoCart(index);
                      }}
                      disabled={!item.NumberGroups}
                    >
                      <Snackbar
                        open={open}
                        autoHideDuration={1000}
                        onClose={handleClose}
                        message="商品已加入購物車"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClose(e, "加入購物車");
                        }}
                      />
                      <AddIcon /> 加入購物車
                    </Fab>
                  </div>
                  <div className="border border-black h-20 ">
                    備註:{item.note}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
