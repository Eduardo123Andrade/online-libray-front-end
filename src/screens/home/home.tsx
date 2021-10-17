import React from 'react'
import { Card } from '../../components/card/card'
import { ListItem } from '../../components/list-item/list-item'
import './home.css'

interface Book {
    id: number
    title: string
    page: number
    frontCover: string
    description: string
}

const DATA: Book[] = [
    { id: 1, title: "Title1", page: 300, frontCover: 'https://i.pinimg.com/736x/ad/b5/83/adb5834ebc6f2612bf71e39909dcc496.jpg', description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque finibus mauris, non tincidunt urna varius vitae. Donec egestas eleifend ultricies. Pellentesque tristique diam eu condimentum consequat. Vestibulum dapibus tempor lacus, vel bibendum nunc pretium non. Duis tempus dui nec urna finibus vehicula. Fusce sit amet sem sapien. Integer semper, tellus sed ullamcorper dapibus, orci lacus scelerisque odio, ac blandit nisi leo a sapien. Donec malesuada vel lectus vitae aliquet. Donec consectetur convallis sem, vel eleifend orci faucibus ac. Ut eget odio nulla. Aenean lacus ipsum, hendrerit ut egestas ut, aliquet eu tellus. Nam in enim sapien." },
    { id: 2, title: "Title2", page: 300, frontCover: 'https://i.pinimg.com/736x/ad/b5/83/adb5834ebc6f2612bf71e39909dcc496.jpg', description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque finibus mauris, non tincidunt urna varius vitae. Donec egestas eleifend ultricies. Pellentesque tristique diam eu condimentum consequat. Vestibulum dapibus tempor lacus, vel bibendum nunc pretium non. Duis tempus dui nec urna finibus vehicula. Fusce sit amet sem sapien. Integer semper, tellus sed ullamcorper dapibus, orci lacus scelerisque odio, ac blandit nisi leo a sapien. Donec malesuada vel lectus vitae aliquet. Donec consectetur convallis sem, vel eleifend orci faucibus ac. Ut eget odio nulla. Aenean lacus ipsum, hendrerit ut egestas ut, aliquet eu tellus. Nam in enim sapien." },
    { id: 3, title: "Title3", page: 300, frontCover: 'https://i.pinimg.com/736x/ad/b5/83/adb5834ebc6f2612bf71e39909dcc496.jpg', description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque finibus mauris, non tincidunt urna varius vitae. Donec egestas eleifend ultricies. Pellentesque tristique diam eu condimentum consequat. Vestibulum dapibus tempor lacus, vel bibendum nunc pretium non. Duis tempus dui nec urna finibus vehicula. Fusce sit amet sem sapien. Integer semper, tellus sed ullamcorper dapibus, orci lacus scelerisque odio, ac blandit nisi leo a sapien. Donec malesuada vel lectus vitae aliquet. Donec consectetur convallis sem, vel eleifend orci faucibus ac. Ut eget odio nulla. Aenean lacus ipsum, hendrerit ut egestas ut, aliquet eu tellus. Nam in enim sapien." },
    { id: 4, title: "Title4", page: 300, frontCover: 'https://i.pinimg.com/736x/ad/b5/83/adb5834ebc6f2612bf71e39909dcc496.jpg', description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque finibus mauris, non tincidunt urna varius vitae. Donec egestas eleifend ultricies. Pellentesque tristique diam eu condimentum consequat. Vestibulum dapibus tempor lacus, vel bibendum nunc pretium non. Duis tempus dui nec urna finibus vehicula. Fusce sit amet sem sapien. Integer semper, tellus sed ullamcorper dapibus, orci lacus scelerisque odio, ac blandit nisi leo a sapien. Donec malesuada vel lectus vitae aliquet. Donec consectetur convallis sem, vel eleifend orci faucibus ac. Ut eget odio nulla. Aenean lacus ipsum, hendrerit ut egestas ut, aliquet eu tellus. Nam in enim sapien." },
    { id: 5, title: "Title5", page: 300, frontCover: 'https://i.pinimg.com/736x/ad/b5/83/adb5834ebc6f2612bf71e39909dcc496.jpg', description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque finibus mauris, non tincidunt urna varius vitae. Donec egestas eleifend ultricies. Pellentesque tristique diam eu condimentum consequat. Vestibulum dapibus tempor lacus, vel bibendum nunc pretium non. Duis tempus dui nec urna finibus vehicula. Fusce sit amet sem sapien. Integer semper, tellus sed ullamcorper dapibus, orci lacus scelerisque odio, ac blandit nisi leo a sapien. Donec malesuada vel lectus vitae aliquet. Donec consectetur convallis sem, vel eleifend orci faucibus ac. Ut eget odio nulla. Aenean lacus ipsum, hendrerit ut egestas ut, aliquet eu tellus. Nam in enim sapien." },
]

export const Home = () => {

    const renderItem = (item: Book) => {
        const {id} = item
        return <ListItem key={id} book={item}/>
    }

    return (
        <div className="Home">
            <Card>
                {DATA.map(renderItem)}
            </Card>
        </div>
    )
}