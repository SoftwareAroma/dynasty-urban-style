import React from 'react';
import Link from 'next/link';


type Props = {
    title: string;
    url: string;
}

const MenuItem = (props: Props) => {
    const {title, url} = props;
    return (
        <React.Fragment>
            <li>
                <Link href={url}>
                    <a className="capitalize text-gray-900 font-semibold tracking-wider lg:text-xl hover:text-gray-400">
                        {title}
                    </a>
                </Link>
            </li>
        </React.Fragment>
    )
}

export default MenuItem;
