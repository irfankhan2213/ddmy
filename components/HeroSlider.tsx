'use client';

import React from 'react';
import Image from 'next/image';

const HeroSlider = () => {
    return (
        <section className="relative w-full overflow-hidden bg-black">
            {/* Desktop Banner Image */}
            <div className="hidden md:block relative w-full h-[550px] lg:h-[650px] xl:h-[750px]">
                <Image
                    src="/banner.webp"
                    alt="Psycho Nutrition Products Banner"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            {/* Mobile Banner Image */}
            <div className="block md:hidden relative w-full aspect-[4/5] max-h-[550px]">
                <Image
                    src="/banner.webp"
                    alt="Psycho Nutrition Products Banner"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>
        </section>
    );
};

export default HeroSlider;
