import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Box } from "@mui/material";
import { FC, useRef } from "react";

interface ISlider {
    shift: number
    children: React.ReactElement[]
}

const Slider: FC<ISlider> = ({ shift, children }) => {
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
        <>
            <Box maxWidth='md' display='flex' justifyContent='center'>
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
            </Box>
            <Box maxWidth='md' display='flex' justifyContent='center'>
                <ArrowCircleLeft
                    color="primary"
                    cursor='pointer'
                    onClick={left}
                    sx={{padding: '15px', margin: '15px', fontSize: '46px' }}
                />
                <ArrowCircleRight
                    color="primary"
                    cursor="pointer"
                    onClick={right}
                    sx={{padding: '15px', margin: '15px', fontSize: '46px' }}
                />
            </Box>
        </>
    )
}

export default Slider