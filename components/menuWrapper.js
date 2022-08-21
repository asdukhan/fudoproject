import { useEffect, useState } from "react";
import MenuRow from "./menuRow";
import { Tabs } from "flowbite-react";

function MenuWrapper() {
    const [menuWrapper, setMenuWrapper] = useState()
    const [activeMenu, setActiveMenu] = useState('fries');
    const [isMenuWrapperLoading, setIsMenuWrapperLoading] = useState(false)
    useEffect(() => {
        setIsMenuWrapperLoading(true)
        fetch('http://54.169.31.224:3000/category')
            .then(response => response.json())
            .then(data => {
                setMenuWrapper(data)
                setIsMenuWrapperLoading(false)
            })
    }, [])
    if (isMenuWrapperLoading) {
        return <p>Loading....</p>
    }
    if (!menuWrapper) {
        return <p>No menu found</p>
    } 
    return (
        <div className="max-w-7xl mx-auto" id="menu">
        <div className="w-full px-2 pt-4 pb-16 sm:px-0">
        <h1 className="text-2xl py-4">Our Popular Menu</h1>
        <p className="text-md pb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
     
            <Tabs.Group 
                aria-label="Tabs with icons"
                style="default"
            >
                {menuWrapper['data'].map(item =>
                    <Tabs.Item
                        key={item.slug}
                        active={true}
                        title={item.name} 
                        
                    >
                        <MenuRow slug={item.slug} ></MenuRow>
                    </Tabs.Item>
                )}
            </Tabs.Group>

        </div></div>
    )
}


export default MenuWrapper