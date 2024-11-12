import { JSXElementConstructor } from "react";
import { createPortal } from "react-dom";

const Draw = ({
  children,
  visible,
  handleSetVisible,
}: {
  children: JSX.Element;
  visible: boolean;
  handleSetVisible: (visible: boolean) => void;
}) => {
  return createPortal(
    <>
      <div
        className={`fixed top-0 right-0 min-w-60 bg-white h-full z-[1051] duration-200 shadow-md flex
         ${visible ? "translate-x-0" : "translate-x-full"}`}
      >
        {children}
      </div>
      {visible && (
        <div
          className="fixed top-0 left-0 bg-black h-full z-[1050] w-full opacity-30"
          onClick={() => {
            handleSetVisible(false);
          }}
        ></div>
      )}
    </>,
    document.body
  );
};

export default Draw