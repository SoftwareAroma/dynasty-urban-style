import React from 'react';
import Link from 'next/link';

type Props = {
    url?: string;
    icon: any;
    onClick?: any;
}

const IconMenuItem = (props: Props) => {
    const {icon, url, onClick} = props;
    return (
        <React.Fragment>
            <li className='cursor-pointer' onClick={onClick} >
                {
                    url ? (
                        <Link href={url}>
                            <a>
                                {icon}
                            </a>
                        </Link>
                        ) : icon
                }
            </li>
        </React.Fragment>
    );
}

export default IconMenuItem;
