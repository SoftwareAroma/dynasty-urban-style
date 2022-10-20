import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import Link from "next/link";

const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

const contentStyles = {
    minWidth: 220,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 5,
    boxShadow:
        '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',
        '&[data-state="open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade },
        },
    },
};

const StyledContent = styled(DropdownMenuPrimitive.Content, { ...contentStyles });

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
    fill: 'white',
});

function Content({ children, ...props }: any) {
    return (
        <DropdownMenuPrimitive.Portal>
            <StyledContent {...props}>
                {children}
                <StyledArrow />
            </StyledContent>
        </DropdownMenuPrimitive.Portal>
    );
}

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent, { ...contentStyles });

function SubContent(props: any) {
    return (
        <DropdownMenuPrimitive.Portal>
            <StyledSubContent {...props} />
        </DropdownMenuPrimitive.Portal>
    );
}

const itemStyles = {
    all: 'unset',
    fontSize: 13,
    lineHeight: 1,
    color: violet.violet11,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '0 5px',
    position: 'relative',
    paddingLeft: 25,
    userSelect: 'none',

    '&[data-disabled]': {
        color: mauve.mauve8,
        pointerEvents: 'none',
    },

    '&[data-highlighted]': {
        backgroundColor: violet.violet9,
        color: violet.violet1,
    },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles });
const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
    '&[data-state="open"]': {
        backgroundColor: violet.violet4,
        color: violet.violet11,
    },
    ...itemStyles,
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
    paddingLeft: 25,
    fontSize: 12,
    lineHeight: '25px',
    color: mauve.mauve11,
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
    height: 1,
    backgroundColor: violet.violet6,
    margin: 5,
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
    position: 'absolute',
    left: 0,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
});

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = Content;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuSubTrigger = StyledSubTrigger;
export const DropdownMenuSubContent = SubContent;

// Your app...
const Box = styled('div', {});

const RightSlot = styled('div', {
    marginLeft: 'auto',
    paddingLeft: 20,
    color: mauve.mauve11,
    '[data-highlighted] > &': { color: 'white' },
    '[data-disabled] &': { color: mauve.mauve8 },
});

const IconButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 35,
    width: 35,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: violet.violet11,
    backgroundColor: 'white',
    boxShadow: `0 2px 10px ${blackA.blackA7}`,
    '&:hover': { backgroundColor: violet.violet3 },
    '&:focus': { boxShadow: `0 0 0 2px black` },
});

export const MainDropdownMenu = () => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');

    return (
        <Box>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <IconButton aria-label="Customise options">
                        <HamburgerMenuIcon />
                    </IconButton>
                </DropdownMenuTrigger>

                <DropdownMenuContent sideOffset={5}>
                    <DropdownMenuItem>
                        Men
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                        Women
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <Link href='/cart'>
                        <a className="">
                            <DropdownMenuLabel>
                                Cart
                                <RightSlot>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </RightSlot>
                            </DropdownMenuLabel>
                        </a>
                    </Link>
                    <Link href='/login'>
                        <a className="">
                            <DropdownMenuLabel>
                                Login
                                <RightSlot>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </RightSlot>
                            </DropdownMenuLabel>
                        </a>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
        </Box>
    );
};

export default MainDropdownMenu;
