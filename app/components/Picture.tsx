import React from 'react';
import Image from "next/image";

const Picture = ({photoUrl, className}:any) => {
    return (
        <Image
            className={className}
            src={photoUrl}
            alt='Picture card'
            sizes='28vw'
            style={{
                width:'100%',
                height: 'auto'
            }}
            width={150}
            height={200}
        />
    );
};

export default Picture;
