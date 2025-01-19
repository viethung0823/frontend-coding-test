'use client';

import { Button } from '@/components';
import useResponsive from '@/hooks/useResponsive';
import SingleImageSlider from '../SingleImageSlider';

const stories = [
    {
        title: "Uliana's Story",
        subtitle: 'From Local to \nInternational',
        image: '/images/stories.png',
    },
    {
        title: "Uliana's Story 2",
        subtitle: 'Hello world',
        image: '/images/stories.png',
    },
    {
        title: "Uliana's Story 3",
        subtitle: 'Hello world',
        image: '/images/stories.png',
    },
    {
        title: "Uliana's Story 4",
        subtitle: 'Hello world',
        image: '/images/stories.png',
    },
];

export default function StoriesSection() {
    const { isMobile } = useResponsive();

    return (
        <div
            id="story-section"
            className={`${isMobile ? 'p-v-10' : 'p-v-40'} container`}
        >
            <div
                className={`w-100 d-flex align-center ${isMobile ? 'flex-col' : ''}`}
            >
                <div
                    className={`d-flex flex-col w-100 flex-1 ${isMobile ? 'g-6' : 'g-20'}`}
                >
                    <h2 className="title-section">Our Success Stories</h2>
                    {isMobile ? (
                        <SingleImageSlider
                            stories={stories}
                        ></SingleImageSlider>
                    ) : (
                        <></>
                    )}
                    <div className="d-flex align-center g-6">
                        <Button
                            type={'primary'}
                            size={isMobile ? 'md' : 'lg'}
                            styleType={'fill'}
                            radius={'square'}
                        >
                            Apply now
                        </Button>
                        <p>to Start Your Journey!</p>
                    </div>
                </div>
                {isMobile ? (
                    <></>
                ) : (
                    <div className="flex-1 ">
                        <SingleImageSlider
                            stories={stories}
                        ></SingleImageSlider>
                    </div>
                )}
            </div>
        </div>
    );
}
