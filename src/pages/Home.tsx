import '../App.css'
import Input from '../components/input';
import Popup from'../components/popup';

export default function Home() {
    return (
        <div>
            <h2 className='text-center text-white font-bold text-6xl pt-25'>Weather App</h2>
            <p className='text-center text-white font-bold text-xl pt-3'>The look out for all your plans.</p>

            <div>
                <Input />
                <Popup />
            </div>
        </div>
    )
}