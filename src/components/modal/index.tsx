import { IoIosClose } from "react-icons/io";

interface ModalProps {
  header: string;
  firstAction?: JSX.Element;
  secondAction?: JSX.Element;
  modalBody: JSX.Element;
  allowYScroll: boolean;
  closeModalCallback: (state: boolean) => void;
}

function Modal(props: ModalProps) {
  return (
    <>
      <div className="absolute z-40 l-0 r-0 w-screen h-screen bg-primary-midnightBlack/[0.8]"></div>
      <div
        className={`justify-center items-center bg-primary-black/[0.4] flex overflow-x-hidden ${
          props.allowYScroll ? "overflow-y-auto" : ""
        } fixed inset-0 z-50 outline-none focus:outline-none`}
      >
        <div className="relative w-auto my-6 mx-auto max-w-[95vw] md:max-w-3xl">
          <div className="rounded-lg overflow-hidden shadow-sm relative flex flex-col w-full bg-primary-darkGunmetal border-[0.05rem] border-primary-stormyGray outline-none focus:outline-none">
            <div className="flex items-start justify-between p-0 pl-4 bg-primary-purple">
              <h3 className="font-semibold text-lg text-white mt-[0.7rem]">
                {props.header}
              </h3>
              <button
                className="p-1 ml-auto text-white border-0 float-right text-3xl leading-none font-semibold cursor-pointer"
                onClick={() => props.closeModalCallback(false)}
              >
                <IoIosClose className="w-10 h-10 p-0 text-white decoration-white" />
              </button>
            </div>
            {props.modalBody}
            <div className="container w-full mx-auto pr-6 pl-6 -mt-6 flex justify-around">
              {props.firstAction && <>{props.firstAction}</>}
              <div className="flex-1"></div>
              {props.secondAction && <>{props.secondAction}</>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
