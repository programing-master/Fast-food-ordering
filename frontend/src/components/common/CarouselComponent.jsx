import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Avatar, Rating, Typography } from '@mui/material'
import BasicRating from './BasicRating'

export default function CarouselComponent() {
    const urls = [
        './users/brooke-cagle-oI3xAJga5HY-unsplash.jpg',
        './users/clem-onojeghuo-DoA2duXyzRM-unsplash.jpgF',
        './users/greg-rakozy-oMpAz-DN-9I-unsplash.jpg',
        './users/headway-5QgIuuBxKwM-unsplash.jpg',
        './users/scott-graham-5fNmWej4tAA-unsplash.jpg',
    ]

    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
            interval={4000}
            transitionTime={500}
            emulateTouch
        >
            <div className="bg-gray-600 w-full flex flex-col gap-4 items-center justify-center p-8">
                <Avatar
                    alt="Remy Sharp"
                    src="./users/brooke-cagle-oI3xAJga5HY-unsplash.jpg"
                />
                <span className="text-lg">Juan de la Torre</span>
                <p className='text-sm'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime voluptas aliquam fugit soluta veniam repellat
                    asperiores eius quas amet ipsa. Unde itaque laboriosam
                    deserunt nulla ad quis optio dolorum alias.
                </p>
                <div className='w-full  flex justify-between items-center'>
                    <button className='border text-sm p-1 rounded transition hover:bg-white'>Conocer</button>
                    <BasicRating value={4} />
                </div>
            </div>
            <div className="w-full bg-gray-600  flex flex-col gap-4 items-center justify-center p-8">
                <Avatar
                    alt="Remy Sharp"
                    src="./users/clem-onojeghuo-DoA2duXyzRM-unsplash.jpg"
                />
                <span className="text-lg">Jorge aragon</span>
                <p className='text-sm'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime voluptas aliquam fugit soluta veniam repellat
                    asperiores eius quas amet ipsa. Unde itaque laboriosam
                    deserunt nulla ad quis optio dolorum alias.
                </p>
                <div className='w-full flex  justify-between items-center'>
                    <button className='border text-sm p-1 rounded transition hover:bg-white'>Conocer</button>
                    <BasicRating value={3} />
                </div>
            </div>

            <div className="w-full bg-gray-600  flex flex-col gap-4 items-center justify-center p-8">
                <Avatar
                    alt="Remy Sharp"
                    src="./users/greg-rakozy-oMpAz-DN-9I-unsplash.jpg"
                />
                <span className="text-lg">Lucas pereira</span>
                <p className='text-sm'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime voluptas aliquam fugit soluta veniam repellat
                    asperiores eius quas amet ipsa. Unde itaque laboriosam
                    deserunt nulla ad quis optio dolorum alias.
                </p>
                <div className='w-full flex justify-between items-center'>
                    <button className='border text-sm p-1 rounded transition hover:bg-white'>Conocer</button>
                    <BasicRating value={5} />
                </div>
            </div>
            <div className="w-full bg-gray-600  flex flex-col gap-4 items-center justify-center p-8">
                <Avatar
                    alt="Remy Sharp"
                    src="./users/headway-5QgIuuBxKwM-unsplash.jpg"
                />
                <span className="text-lg">JPepe Portilla</span>
                <p className='text-sm'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime voluptas aliquam fugit soluta veniam repellat
                    asperiores eius quas amet ipsa. Unde itaque laboriosam
                    deserunt nulla ad quis optio dolorum alias.
                </p>
                <div className='w-full flex justify-between items-center'>
                    <button className='border text-sm p-1 rounded transition hover:bg-white'>Conocer</button>
                    <BasicRating value={3} />
                </div>
            </div>
            <div className="w-full bg-gray-600 backdrop  flex flex-col gap-4 items-center justify-center p-8">
                <Avatar
                    alt="Remy Sharp"
                    src="./users/scott-graham-5fNmWej4tAA-unsplash.jpg"
                />
                <span className="text-lg">Ricardo Jimenez</span>
                <p className='text-sm'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime voluptas aliquam fugit soluta veniam repellat
                    asperiores eius quas amet ipsa. Unde itaque laboriosam
                    deserunt nulla ad quis optio dolorum alias.
                </p>
                <div className='w-full flex justify-between items-center'>
                    <button className='border text-sm p-1 rounded transition hover:bg-white'>Conocer</button>
                    <BasicRating value={4} />
                </div>
            </div>
        </Carousel>
    )
}
