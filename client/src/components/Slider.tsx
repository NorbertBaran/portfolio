import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Box, Button, Paper } from "@mui/material";
import { useRef } from "react";

const Slider = ({shift, children }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const left = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= shift
            console.log(sliderRef.current.scrollLeft)
        }

    }
    const right = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += shift
            console.log(sliderRef.current.scrollLeft)
        }
    }

    return (
        <Box maxWidth='md' display='flex' alignItems='center'>
            <ArrowCircleLeft
                fontSize="large"
                color="primary"
                cursor='pointer'
                onClick={left}
                sx={{margin: '15px'}}
            />
            <Box
                ref={sliderRef}
                overflow='hidden'
                whiteSpace='nowrap'
            >
                {children.map(child =>
                    <Box display='inline-block' marginRight='20px' whiteSpace='normal'>
                        {child}
                    </Box>)}
            </Box>
            <ArrowCircleRight
                fontSize="large"
                color="primary"
                cursor="pointer"
                onClick={right}
                sx={{margin: '15px'}}
            />
        </Box>
    )
}

export default Slider