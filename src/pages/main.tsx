import { Lifeproducts } from "@/component/data";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Fab from "@mui/material/Fab";
import { signIn, auth, signOut } from "@/auth.ts";

const MainPage = () => {
  const router = useRouter();

  const categories = ["國內成蟲", "國外成蟲", "國內幼蟲", "國外幼蟲", "標本"];

  const [filter, setFilter] = useState(Lifeproducts);
  const ArraySpace = Array.from({ length: filter.length }, () => null);
  const [categoryIcon, setCategoryIcon] = useState("");

  const [showImages, setShowImages] = useState(Array(filter.length).fill(0));

  const handleFilter = (category: string) => {
    if (category === "國內成蟲") {
      setFilter(Lifeproducts.filter((idfilter) => idfilter.id === 2));
    } else if (category === "國外成蟲") {
      setFilter(Lifeproducts.filter((idfilter) => idfilter.id === 1));
    } else if (category === "國內幼蟲") {
      setFilter(Lifeproducts.filter((idfilter) => idfilter.id === 4));
    } else if (category === "國外幼蟲") {
      setFilter(Lifeproducts.filter((idfilter) => idfilter.id === 3));
    } else if (category === "標本") {
      setFilter(Lifeproducts.filter((idfilter) => idfilter.id === 5));
    } else {
      setFilter(Lifeproducts);
    }
  };

  useEffect(() => {
    setShowImages(Array(filter.length).fill(0));
  }, filter);

  const handleImageiterator = (index: number) => {
    setShowImages((prevImages) => {
      const newImages = [...prevImages];
      const nextImage = (prevImages[index] + 1) % filter[index].imageUrl.length;
      newImages[index] = nextImage;
      return newImages;
    });
  };

  return (
    <div className="bg-[#f5f5f5]  flex p-4 h-full ">
      <div className="pt-10 flex flex-col bg-white sm:w-20 md:w-40 gap-6 text-xl rounded-md border items-center ">
        {categories.map((categoriesItem, index) => (
          <div
            className="hover:scale-110 cursor-pointer "
            key={index}
            onClick={() => {
              handleFilter(categoriesItem);
              setCategoryIcon(categoriesItem);
            }}
          >
            {categoryIcon === categoriesItem ? (
              <ArrowRightIcon sx={{ fontSize: 30, color: "red" }} />
            ) : null}
            {categoriesItem}
          </div>
        ))}
      </div>

      <div className="overflow-auto  flex-1 ">
        <div className="border flex justify-end p-2 rounded-md ml-4  items-center gap-4 pr-10">
          <Fab
              type="submit"
              variant="extended"
              size="medium"
              className="bg-white border text-lg rounded-lg p-2 cursor-pointer hover:bg-gray-200 "
              onClick={() => {
                router.push("/profile");
              }}
            >
              登入
            </Fab>


          {/* <Fab
            variant="extended"
            size="medium"
            className="bg-white border text-lg rounded-lg p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => {
              router.push("/register");
            }}
          >
            註冊
          </Fab> */}

          <Fab
            size="large"
            className="cursor-pointer  bg-white rounded-md hover:bg-gray-200"
          >
            <ShoppingCartIcon
              sx={{ fontSize: 60, color: "red" }}
              className="p-1"
            />
          </Fab>
        </div>

        <div className="  bg-white rounded-md ml-4 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-4 gap-x-10  border  p-10 ">
          {ArraySpace.map((_, index) => (
            <div className="w-80 " key={`space_${index}`}>
              <div className="w-80 h-64 border  items-center justify-center">
                <img
                  src={filter[index].imageUrl[showImages[index]]}
                  className=" w-full h-full"
                  onClick={() => {
                    {
                      handleImageiterator(index);
                    }
                  }}
                />
              </div>
              <div className="border w-80 ">
                <p>名稱:{filter[index].name}</p>
                <p>學名:{filter[index].ScientificName}</p>
                <p>產地:{filter[index].Origin}</p>
                <p>類別:{filter[index].beetletype}</p>
                <p>累代:{filter[index].generations}</p>
                <p>尺寸/齡數:{filter[index].beetleSize}</p>
                {filter[index].id !== 5 && <p>親代:{filter[index].parent}</p>}
                <p>金額:{filter[index].price}</p>
                <p>數量:{filter[index].NumberGroups}</p>
                <div className="border  border-black h-20">
                  備註:{filter[index].note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
