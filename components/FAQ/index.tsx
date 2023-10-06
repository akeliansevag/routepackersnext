"use client"
import React, { Fragment, useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

interface FAQProps {
    title: string;
    desc: string;
}

const Icon = ( id: any, open: any ) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

const FAQDropDown: React.FC<FAQProps> = (props) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value: React.SetStateAction<number>) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Fragment>
            <Accordion  open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader style={{color: 'white'}} onClick={() => handleOpen(1)}>
                    {props.title}
                </AccordionHeader>
                <AccordionBody style={{color: 'white'}}>
                    {props.desc}
                </AccordionBody>
            </Accordion>
        </Fragment>
    )
}

export default FAQDropDown
