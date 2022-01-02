import { SectionItem } from "../SectionItem/SectionItem";
import { Title, Carousel } from "./styled";
import { progressiveClampProcessed } from "progressive-size"
import { useEffect, useRef, useState, useLayoutEffect } from "react";

interface CategorySectionProps { 
    category: string,
    data: Array<{
        id: string,
        link: string
        title?: string,
        name?: string,
        

    }>
}

export function CategorySection({ category, data }: CategorySectionProps) { 
    
    const section = useRef<any>(null)
    const [totalItems, setTotalItems] = useState(4)

    function totalItemsCreen() { 
        const itemWidth = progressiveClampProcessed(86, 190)
        const widthSection = section.current.slider.parentElement.clientWidth
        const totalItems = Math.floor(widthSection / itemWidth) -1 

        return totalItems 
    }

    useEffect(() => { 

        setTotalItems(totalItemsCreen())

        window.addEventListener('resize', () => { 
            setTotalItems(totalItemsCreen())
        })
    }, [])


    return (

        
        <section>
            <Title>{category}</Title>
            <Carousel
                ref={section }
                itemsToShow={totalItems}
                itemsToScroll={1}
                isRTL={false}
                showArrows={false}
                pagination={false}
                
                
                

            >
                {data.map((itemData, index) => {
                    return <SectionItem data={ itemData} key={ itemData.id} />
                })}
            </Carousel>

        </section>
    )
}