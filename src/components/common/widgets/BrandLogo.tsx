import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@assets/static/images';

type Props = {
    width?: number | string, 
    height?: number | string,
    others?: any
}

const BrandLogo = (props: Props) => {
    const {width, height, others} = props;
    return (
        <React.Fragment>
            <div className="flex flex-wrap flex-row justify-center items-center">
                <Link href="/">
                    <a>
                        <Image 
                            src={Logo}
                            alt="Logo"
                            width={width ?? 80}
                            height={height ?? 50}
                            {...others}
                        />
                    </a>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default BrandLogo;
