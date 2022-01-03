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
        const itemWidth = progressiveClampProcessed(140, 190)
        const widthSection = section?.current?.slider?.parentElement?.clientWidth
        const totalItems = Math.floor(widthSection / itemWidth)  - 1

        if (widthSection < 510) return 2
        else  if (widthSection < 650) return 3
        return totalItems 
    }

    const breakPoints = [
        
        { width: 400, itemsToShow: 2,},
        
      ]

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
                ref={section}
                itemsToShow={totalItems}
                itemsToScroll={1}
                isRTL={false}
                showArrows={false}
                pagination={false}
                
                initialFirstItem={1}
                itemPadding={[0, 5, 0, 5]}
                /* breakPoints={breakPoints} */
                

            >
                {data.map((itemData, index) => {
                    return <SectionItem data={ itemData} key={ itemData.id} />
                })}
            </Carousel>

        </section>
    )
}