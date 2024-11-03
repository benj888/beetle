import { useEffect, useState } from "react";
import { Product } from "@/components/data";
import CloseIcon from "@mui/icons-material/Close";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

const Cart = () => {
  const [sent, setSent] = useState("");

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");

  const [note, setNote] = useState("");

  const FormComplete = sent && name && phone && address;

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

  const handleSelectSent = (event: SelectChangeEvent) => {
    setSent(event.target.value);
  };

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

    if (updateCart[index].quantity === 1) {
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
    <div className="h-full bg-[#f5f5f5] flex">
      <div className="w-2/3 ">
        <div className=" flex bg-white pl-10 pt-2 rounded-lg">
          <div
            onClick={() => {
              router.push("/main");
            }}
          >
            <Fab>
              <HomeIcon sx={{ fontSize: 40, color: "#ee4d2d" }} />
            </Fab>
          </div>
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
      <div className="h-full flex-1 bg-[#f5f5f5] px-4 border p-2 rounded-lg overflow-scroll ">
        <div className=" bg-white rounded-xl shadow-xl flex flex-col">
          <div className=" text-center m-4 text-2xl">總金額</div>

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
          <div className="">
            <div className=" mt-10 w-full h-px  bg-slate-200 "></div>
            <div className=" p-4 text-lg font-bold">總金額:{total}元</div>
            <form className="p-4">
              <div className="p-4 grid gap-y-2">
                <FormControl fullWidth>
                  <InputLabel id="sent_way">寄送選擇</InputLabel>
                  <Select
                    labelId="sent_way"
                    id="select_sent_way"
                    value={sent}
                    label="寄送選擇"
                    onChange={handleSelectSent}
                  >
                    <MenuItem value="店到店">店到店</MenuItem>
                    <MenuItem value="黑貓宅配">黑貓宅配</MenuItem>
                  </Select>
                </FormControl>

                <div className="grid gap-y-2">
                  <TextField
                    id="name"
                    label="姓名"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />

                  <TextField
                    id="phoneNumber"
                    label="電話"
                    variant="outlined"
                    fullWidth
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />

                  <TextField
                    id="address"
                    label="寄送地址"
                    variant="outlined"
                    fullWidth
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="p-4">
                給賣家的備註:
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  size="small"
                  type="text"
                  value={note}
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                />
                <div className="flex justify-center mt-6">
                  <Button
                    className={` text-white p-2 ${
                      FormComplete && cartCheckOutItem.length > 0
                        ? "bg-blue-400"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                    onClick={(e) => {
                      if (!FormComplete && cartCheckOutItem.length === 0)
                        return;
                      localStorage.setItem("sent_method", JSON.stringify(sent));
                      localStorage.setItem("Name", JSON.stringify(name));
                      localStorage.setItem(
                        "Phone_Number",
                        JSON.stringify(phone)
                      );
                      localStorage.setItem("Adress", JSON.stringify(address));
                      localStorage.setItem("Note", JSON.stringify(note));

                      const updateCart = cartCheckOutItem.map(item=>({
                        ...item,
                      NumberGroups:item.NumberGroups- item.quantity
                      }))
                      
                      localStorage.setItem("cart",JSON.stringify(updateCart) )
                      alert("已送單");
                      // localStorage.clear();
                    }}
                    disabled={!FormComplete && cartCheckOutItem.length === 0}
                  >
                    送單給賣家
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
