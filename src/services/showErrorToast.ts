import { toast } from "react-toastify";

function notifyError(errorMessage: string) {
  toast.error(errorMessage, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

export default notifyError;
