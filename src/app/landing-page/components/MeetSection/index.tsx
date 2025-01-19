'use client';

import { Button } from '@/components';
import useResponsive from '@/hooks/useResponsive';
import Image from 'next/image';

interface CardModel {
    imageSrc: string;
    name: string;
    location: string;
}

interface HeroSectionProps {
    cardModels: CardModel[];
}

export default function HeroSection({ cardModels }: HeroSectionProps) {
    const { isMobile } = useResponsive();

    return (
        <div
            id="meet-section"
            className={`${isMobile ? 'p-v-10' : 'p-v-40'} container`}
        >
            <div className="d-flex align-center justify-between">
                <h2 className="title-section">Meet our models</h2>
                {isMobile ? (
                    <Button
                        type={'icon'}
                        size={'md'}
                        styleType={'fill'}
                        radius={'circle'}
                    >
                        <Image
                            src={'/svg/arrow-right.svg'}
                            alt="arrow-right"
                            fill
                        ></Image>
                    </Button>
                ) : (
                    <Button
                        type={'default'}
                        size={'lg'}
                        styleType={'fill'}
                        radius={'square'}
                        iconEnd={
                            <Image
                                src={'/svg/arrow-right.svg'}
                                alt="arrow-right"
                                fill
                            ></Image>
                        }
                    >
                        View all
                    </Button>
                )}
            </div>
            <div className="d-flex align-center g-8 cards-wrapper">
                {cardModels.map((model, index) => (
                    <div
                        key={index}
                        className="card-model d-flex align-start flex-col"
                    >
                        <Image
                            src={model.imageSrc}
                            alt={model.name}
                            fill
                            className="pos-relative"
                        ></Image>
                        <div className="card-modal-info">
                            <p className="card-model-name">{model.name}</p>
                            <p className="card-model-location">
                                {model.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
