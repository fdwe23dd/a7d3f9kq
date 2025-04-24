import './App.css'
import {useState} from 'react';
import HeatingModal from './components/heating-modal';
import Button from './components/ui/button';


function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <Button onClick={() => setIsOpen(true)}  >
                Open Heating Modal
            </Button>

            {isOpen && <HeatingModal onClose={() => setIsOpen(false)}/>}
        </div>
    )
}

export default App
