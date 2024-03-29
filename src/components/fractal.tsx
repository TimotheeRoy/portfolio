import { useEffect, useState } from "react";

interface SierpinskiTriangleProps {
    depth: number;
    isDark: boolean;
}

function SierpinskiTriangle({ depth, isDark }: SierpinskiTriangleProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, [depth]);

    const drawTriangle = (
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        depth: number
    ): JSX.Element => {
        if (depth === 0) {
            return (
                <polygon
                    points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
                    fill={isDark ? "white" : "black"}
                    stroke={isDark ? "white" : "black"}
                />
            );
        } else {
            const mid1x = (x1 + x2) / 2;
            const mid1y = (y1 + y2) / 2;
            const mid2x = (x2 + x3) / 2;
            const mid2y = (y2 + y3) / 2;
            const mid3x = (x3 + x1) / 2;
            const mid3y = (y3 + y1) / 2;
            return (
                <>
                    {drawTriangle(
                        x1,
                        y1,
                        mid1x,
                        mid1y,
                        mid3x,
                        mid3y,
                        depth - 1
                    )}
                    {drawTriangle(
                        mid1x,
                        mid1y,
                        x2,
                        y2,
                        mid2x,
                        mid2y,
                        depth - 1
                    )}
                    {drawTriangle(
                        mid3x,
                        mid3y,
                        mid2x,
                        mid2y,
                        x3,
                        y3,
                        depth - 1
                    )}
                </>
            );
        }
    };

    const viewBox = `0 0 500 500`;

    return isVisible ? (
        <svg
            width="100%"
            height="100%"
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 1, transition: "opacity 1s ease-in-out" }}
        >
            {drawTriangle(50, 450, 250, 50, 450, 450, depth)}
        </svg>
    ) : null;
}

export default SierpinskiTriangle;
