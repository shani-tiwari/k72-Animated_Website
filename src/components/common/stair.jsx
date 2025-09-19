import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import { useRef } from "react"
import { useLocation } from "react-router-dom";

function Stair({children}) {

    const currentPath = useLocation().pathname;
     
    const StairParent = useRef(null);
    const Pageref = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(StairParent.current, {
        display: 'block',
        });

        tl.from('.stair', {
        height: 0,
        stagger: {
            amount: -0.3
        }
        });

        tl.to('.stair', {
        y: '100%',
        stagger:{
            amount: -0.3,
        }
        });

        tl.to(StairParent.current, {
        display: 'none',
        });

        gsap.from(Pageref.current, {
            scale: 1.2,
            opacity: 0,
            delay: 1,
        });

    }, [currentPath]);

  return (
    <div>

        <div ref={StairParent} className="min-h-screen w-full z-20 fixed" >
            <div className="h-full w-full fixed flex ">
                <div className=" stair h-full w-1/5 bg-black "></div>
                <div className=" stair h-full w-1/5 bg-black "></div>
                <div className=" stair h-full w-1/5 bg-black "></div>
                <div className=" stair h-full w-1/5 bg-black "></div>
                <div className=" stair h-full w-1/5 bg-black "></div>
            </div>
        </div>
 
        <div ref={Pageref}>
            {children}
        </div>

    </div>
  )
}

export default Stair
