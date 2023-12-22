"use client"

import React, {useEffect, useRef, useState} from "react";

interface Object {
    type: string;
    s1: number;
    s2: number;
    x: number;
    y: number;
}

interface FallingObjectsCanvasProps {
    height: number;
}

const FallingObjectsCanvas: React.FC<FallingObjectsCanvasProps> = ({ height }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const objectsRef = useRef<Object[]>([]);
    const spawnLineXRef = useRef<number>(35);
    const spawnRateRef = useRef<number>(20);
    const spawnRateOfDescentRef = useRef<number>(40);
    const lastSpawnRef = useRef<number>(-1);
    // const windowWidth = window?.screen.width || "N/A"
    const [screenWidth, setScreenWidth] = useState<number | string>("N/a");

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (!canvas || !ctx) return;

        if (typeof window != 'undefined'){
            setScreenWidth(window.screen.width);
        }

        ctxRef.current = ctx;

        const animate = (): void => {
            let time: number = Date.now();

            if (time > lastSpawnRef.current + spawnRateRef.current) {
                lastSpawnRef.current = time;
                spawnRandomObject();
            }

            requestAnimationFrame(animate);

            ctxRef.current?.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < objectsRef.current.length; i++) {
                let object = objectsRef.current[i];
                object.x += spawnRateOfDescentRef.current;
                ctxRef.current?.beginPath();
                ctxRef.current?.arc(object.x, object.y, 8, 0, Math.PI * 2);
                ctxRef.current?.closePath();
                ctxRef.current?.fillRect(object.x, object.y, object.s1, object.s2);
                if(ctxRef.current){
                    ctxRef.current.fillStyle = object.type;
                }
            }
        };

        const spawnRandomObject = (): void => {
            let t: string;
            let s1: number;
            let s2: number;

            if (Math.random() < 0.25) {
                t = "#3559E0";
                s1 = 150;
                s2 = 10;
            } else if (Math.random() < 0.50) {
                t = "#FFECD6";
                s1 = 100;
                s2 = 17;
            } else if (Math.random() < 0.75) {
                t = "#4CB9E7";
                s1 = 170;
                s2 = 15;
            } else {
                t = "#0F2167";
                s1 = 75;
                s2 = 20;
            }

            let object: Object = {
                type: t,
                s1: s1,
                s2: s2,
                x: spawnLineXRef.current,
                y: Math.random() * (canvas.width - 30),
            };

            objectsRef.current.push(object);
        };

        animate();
    }, []);

    return <canvas id="canvas" ref={canvasRef} width={screenWidth} height={height} />;
};

export default FallingObjectsCanvas;
