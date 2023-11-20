import { toast } from 'react-toastify';

export default function toastAlert(mensagem: string, tipo: string) {
    switch (tipo) {
            
        case 'sucess':
            toast.success(mensagem, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored' ,
                progress: undefined,
            });
            break;

        case 'info':
            toast.info(mensagem, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored' ,
                progress: undefined,
            });
            break;

        case 'error':
            toast.error(mensagem, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored' ,
                progress: undefined,
            });
            break;

        default:
            toast.info(mensagem, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored' ,
                progress: undefined,
            });
            break;
    }
}