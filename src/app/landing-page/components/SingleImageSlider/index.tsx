'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

interface Story {
    title: string;
    subtitle: string;
    image: string;
}

interface SingleImageSliderProps {
    stories: Story[];
}

const SingleImageSlider: React.FC<SingleImageSliderProps> = ({ stories }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="storyImageWrapper">
            <Image
                src={stories[currentSlide].image}
                alt="Success Story"
                fill
                className="pos-relative storyImage"
            />
            <div className="storyText">
                <h3>{stories[currentSlide].title}</h3>
                <p>{stories[currentSlide].subtitle}</p>
            </div>
            <div className="storyDots">
                {stories.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
            <div className="storyNavigation">
                <Button
                    type={'icon'}
                    size={'md'}
                    styleType={'outline'}
                    radius={'circle'}
                    onClick={() =>
                        setCurrentSlide(
                            (prev) =>
                                (prev - 1 + stories.length) % stories.length
                        )
                    }
                >
                    <Image src={'/svg/arrow-bold-left.svg'} alt="" fill></Image>
                </Button>
                <Button
                    type={'icon'}
                    size={'md'}
                    styleType={'outline'}
                    radius={'circle'}
                    onClick={() =>
                        setCurrentSlide((prev) => (prev + 1) % stories.length)
                    }
                >
                    <Image
                        src={'/svg/arrow-bold-right.svg'}
                        alt=""
                        fill
                    ></Image>
                </Button>
            </div>
        </div>
    );
};

export default SingleImageSlider;
