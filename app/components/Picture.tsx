import Image from "next/image";
import {FC} from "react";

interface IPicture {
    photoUrl: string;
    className: string;
}

const Picture: FC<IPicture> = ({photoUrl, className}) => {
    return (
        <Image
            className={className}
            src={photoUrl}
            alt='Picture card'
            sizes='30vw'
            style={{
                width:'100%',
                height: 'auto'
            }}
            width={150}
            height={400}
        />
    );
};

export default Picture;
