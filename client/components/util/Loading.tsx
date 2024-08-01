import { useState, useEffect } from 'react';
import '../../styles/wolf.css'; // External CSS file for styles

const LoadingAnimation: React.FC = () => {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLeaving(true);
    }, 6000); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`contenedor ${isLeaving ? 'animate-reverseCreateWolf' : ''}`}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="-132 160.8 346.8 472.2"
        xmlSpace="preserve"
        enableBackground="new -132 160.8 346.8 472.2"
      >
        <defs>
          <filter id="edgeClean" colorInterpolationFilters="sRGB">
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 .5 1 1" />
            </feComponentTransfer>
          </filter>
        </defs>
        <defs>
          <filter id="edgeClean" colorInterpolationFilters="sRGB">
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 .5 1 1" />
            </feComponentTransfer>
          </filter>
        </defs>
        <g id="Izquierda" filter="url(#edgeClean)">
          <polygon id="poligono-146-izq" className="st0" points="-21.4,268.1 5.4,241.1 14.8,255.2" />
          <polygon id="poligono-147-izq" className="st1" points="5.4,241.1 -11.9,241.8 -21.4,268.1" />
          <polygon id="poligono-189-izq" className="st2" points="-11.9,241.8 -3.2,231.8 5.4,241.1" />
          <polygon id="poligono-188-izq" className="st3" points="-11.9,241.8 -19.1,231.8 -3.2,231.8" />
          <polygon id="poligono-174-izq" className="st4" points="-19.1,231.8 -20.4,213.4 -3.2,231.8" />
          <polygon id="poligono-173-izq" className="st5" points="-19.1,231.8 -38.3,209.5 -20.4,213.4" />
          <polygon id="poligono-175-izq" className="st6" points="-38.3,209.5 -38.8,193.8 -20.4,213.4" />
          <polygon id="poligono-178-izq" className="st2" points="-38.3,209.5 -57.2,192.4 -38.8,193.8" />
          <polygon id="poligono-176-izq" className="st1" points="-57.2,192.4 -47.1,181.5 -38.8,193.8" />
          <polygon id="poligono-177-izq" className="st6" points="-57.2,192.4 -56.1,177.6 -47.1,181.5" />
          <polygon id="poligono-169-izq" className="st0" points="-57.2,192.4 -74.4,193.9 -56.1,177.6" />
          <polygon id="poligono-168-izq" className="st1" points="-74.4,193.9 -67.2,200.4 -57.2,192.4" />
          <polygon id="poligono-168-izq_1_" className="st5" points="-74.4,193.9 -79.3,213.6 -67.2,200.4" />
          <polygon id="poligono-165-izq" className="st2" points="-67.2,245.4 -53.7,248.7 -38.3,231.8" />
          <polygon id="poligono-152-izq" className="st6" points="-53.7,248.7 -53.8,276.4 -41.1,287.3" />
          <polygon id="poligono-151-izq" className="st7" points="-53.7,248.7 -21.4,268.1 -41.1,287.3" />
          <polygon id="poligono-150-izq" className="st8" points="-53.7,248.7 -38.3,231.8 -21.4,268.1" />
          <polygon id="poligono-148-izq" className="st9" points="-38.3,231.8 -19.1,231.8 -21.4,268.1" />
          <polygon id="poligono-149-izq" className="st10" points="-19.1,231.8 -11.9,241.8 -21.4,268.1" />
          <polygon id="poligono-157-izq" className="st11" points="-67.2,245.4 -85.3,237.7 -69.6,271.7" />
          <polygon id="poligono-164-izq" className="st8" points="-85.3,237.7 -79.3,213.6 -67.2,245.4" />
          <polygon id="poligono-155-izq" className="st12" points="-67.2,245.4 -53.8,276.4 -69.6,271.7" />
          <polygon id="poligono-156-izq" className="st13" points="-67.2,245.4 -53.8,276.4 -53.7,248.7" />
          <polygon id="poligono-154-izq" className="st14" points="-69.6,271.7 -58.3,299.8 -53.8,276.4" />
          <polygon id="poligono-153-izq" className="st15" points="-53.8,276.4 -41.1,287.3 -58.3,299.8" />
          <polygon id="poligono-161-izq" className="st16" points="-58.3,299.8 -90.6,279.6 -64.9,283.4" />
          <polygon id="poligono-160-izq" className="st17" points="-90.6,279.6 -69.6,271.7 -64.9,283.4" />
          <polygon id="poligono-158-izq" className="st18" points="-69.6,271.7 -88,260.9 -85.3,237.7" />
          <polygon id="poligono-159-izq" className="st19" points="-88,260.9 -84.3,277.2 -69.6,271.7" />
          <polygon id="poligono-171-izq" className="st20" points="-57.2,192.4 -38.3,231.8 -38.3,209.5" />
          <polygon id="poligono-172-izq" className="st21" points="-38.3,209.5 -19.1,231.8 -38.3,231.8" />
          <polygon id="poligono-170-izq" className="st22" points="-57.2,192.4 -67.2,200.4 -38.3,231.8" />
          <polygon id="poligono-167-izq" className="st23" points="-67.2,200.4 -79.3,213.6 -38.3,231.8" />
          <polygon id="poligono-136-izq" className="st24" points="-16.7,336.1 -33.6,340.3 0.7,350.1" />
          <polygon id="poligono-135-izq" className="st25" points="-33.6,340.3 -23.9,354.3 -2.7,348.7" />
          <polygon id="poligono-166-izq" className="st26" points="-79.3,213.6 -67.2,245.4 -38.3,231.8" />
          <polygon id="poligono-121-izq" className="st27" points="-23.9,354.3 -35.4,360.5 -13.9,367.7" />
          <polygon id="poligono-18-izq" className="st4" points="8.2,361.7 13.2,378.8 -3.3,370.7" />
          <polygon id="poligono-17-izq" className="st2" points="8.2,361.7 16.1,361.9 13.2,378.8" />
          <polygon id="poligono-140-izq" className="st20" points="-33.6,340.3 -2.7,332.7 -21.6,307.5" />
          <polygon id="poligono-142-izq_1_" className="st20" points="15.1,315.3 -58.3,299.8 -41.1,287.3" />
          <polygon id="poligono-137-izq" className="st12" points="-2.7,332.7 3.8,352.5 -16.7,336.1" />
          <polygon id="poligono-138-izq" className="st28" points="-2.7,332.7 15.9,331.9 8.2,361.7 3.8,352.5" />
          <polygon id="poligono-139-izq" className="st29" points="15.1,315.3 15.9,331.9 -2.7,332.7" />
          <polygon id="poligono-13-izq" className="st11" points="15.1,315.3 27.8,332.7 15.9,331.9" />
          <polygon id="poligono-15-izq" className="st30" points="15.9,331.9 27.2,362.2 8.2,361.7" />
          <polygon id="poligono-14-izq" className="st24" points="15.9,331.9 27.8,332.7 27.2,362.2" />
          <polygon id="poligono-4-izq" className="st22" points="27.8,332.7 45.6,342.6 27.2,362.2" />
          <polygon id="poligono-3-izq" className="st31" points="27.2,362.2 45.6,386.8 45.6,342.6" />
          <polygon id="poligono-2-izq" className="st32" points="27.2,362.2 28.7,401.3 45.6,386.8" />
          <polygon id="poligono-1-izq" className="st33" points="28.7,401.3 45.6,437.1 45.6,386.8" />
          <polygon id="poligono-23-izq" className="st16" points="28.7,401.3 17.9,447.4 45.6,437.1" />
          <polygon id="poligono-16-izq" className="st18" points="13.2,378.8 27.2,362.2 16.1,361.9" />
          <polygon id="poligono-6-izq" className="st21" points="15.1,315.3 45.6,307.1 27.8,332.7" />
          <polygon id="poligono-5-izq" className="st23" points="27.8,332.7 45.6,307.1 45.6,342.6" />
          <polygon id="poligono-7-izq" className="st34" points="15.1,315.3 45.6,256.1 45.6,307.1" />
          <polygon id="poligono-12-izq" className="st35" points="15.1,315.3 14.8,255.2 33.7,279.1" />
          <polygon id="poligono-142-izq" className="st36" points="14.8,255.2 -21.4,268.1 15.1,315.3" />
          <polygon id="poligono-11-izq" className="st36" points="14.8,255.2 32.8,254.2 33.7,279.1" />
          <polygon id="poligono-10-izq" className="st37" points="14.8,255.2 22.3,236.5 32.8,254.2" />
          <polygon id="poligono-8-izq" className="st38" points="32.8,254.2 45.6,256.1 33.7,279.1" />
          <polygon id="poligono-9-izq" className="st1" points="32.8,254.2 39.2,235 45.6,256.1" />
          <polygon id="poligono-145-izq" className="st39" points="22.3,236.5 5.4,241.1 14.8,255.2" />
          <polygon id="poligono-143-izq" className="st21" points="-21.4,268.1 -41.1,287.3 15.1,315.3" />
          <polygon id="poligono-187-izq" className="st32" points="-2.7,332.7 15.1,315.3 -21.6,307.5" />
          <polygon id="poligono-112-izq" className="st26" points="-35.4,360.5 -46.5,389.2 -89.4,398.1" />
          <polygon id="poligono-134-izq" className="st32" points="-35.4,360.5 -24.8,379.4 -41.1,375.4" />
          <polygon id="poligono-180-izq" className="st40" points="-24.8,379.4 -25.5,400.4 -14.8,403.5" />
          <polygon id="poligono-133-izq" className="st15" points="-24.8,379.4 -41.1,375.4 -25.5,400.4" />
          <polygon id="poligono-111-izq" className="st15" points="-46.5,389.2 -49.7,411.3 -89.4,398.1" />
          <polygon id="poligono-183-izq" className="st41" points="-46.5,389.2 -36.8,424.4 -49.7,411.3" />
          <polygon id="poligono-132-izq" className="st41" points="-46.5,389.2 -41.1,375.4 -25.5,400.4" />
          <polygon id="poligono-186-izq" className="st42" points="17.9,447.4 18.2,459.9 35.2,440.9" />
          <polygon id="poligono-76-izq" className="st43" points="17.9,447.4 -7.9,467.6 20.2,475.7" />
          <polygon id="poligono-75-izq" className="st44" points="-7.9,467.6 -0.9,491.9 20.2,475.7" />
          <polygon id="poligono-77-izq" className="st27" points="17.9,447.4 -6.7,440.5 -7.9,467.6" />
          <polygon id="poligono-22-izq" className="st42" points="-6.7,440.5 28.7,401.3 17.9,447.4" />
          <polygon id="poligono-78-izq" className="st10" points="-7.9,467.6 -15.4,458.5 -6.7,440.5" />
          <polygon id="poligono-25-izq" className="st10" points="35.2,440.9 45.6,447.4 28.7,447.9" />
          <polygon id="poligono-24-izq" className="st45" points="35.2,440.9 45.6,437.1 45.6,447.4" />
          <polygon id="poligono-79-izq" className="st38" points="-15.4,458.5 -17.2,466.9 -7.9,467.6" />
          <polygon id="poligono-80-izq" className="st21" points="-17.2,466.9 -0.9,491.9 -7.9,467.6" />
          <polygon id="poligono-179-izq" className="st14" points="20.2,475.7 32.7,492.5 21.8,489.7" />
          <polygon id="poligono-124-izq" className="st11" points="-12.4,382.7 -3.2,370.7 -13.9,367.7" />
          <polygon id="poligono-74-izq" className="st18" points="20.2,475.7 21.8,489.7 -0.9,491.9" />
          <polygon id="poligono-36-izq" className="st46" points="45.6,495.8 21.8,489.7 25.6,498.7" />
          <polygon id="poligono-37-izq" className="st39" points="25.6,498.7 14.3,503 45.6,500.9 45.6,495.8" />
          <polygon id="poligono-38-izq" className="st0" points="14.3,503 31.1,509.5 45.6,508.9 45.6,500.9" />
          <polygon id="poligono-73-izq" className="st16" points="21.8,489.7 14.3,503 25.6,498.7" />
          <polygon id="poligono-72-izq" className="st14" points="21.8,489.7 -0.9,491.9 14.3,503" />
          <polygon id="poligono-122-izq" className="st44" points="-35.4,360.5 -13.9,367.7 -24.8,379.4" />
          <polygon id="poligono-123-izq" className="st27" points="-13.9,367.7 -12.4,382.7 -24.8,379.4" />
          <polygon id="poligono-125-izq" className="st42" points="-12.4,382.7 -14.8,403.5 -24.8,379.4" />
          <polygon id="poligono-190-izq" className="st7" points="-12.4,382.7 -7.6,408 -14.8,403.5" />
          <polygon id="poligono-126-izq" className="st14" points="-12.4,382.7 1.2,393.6 -7.6,408" />
          <g id="Ojo-izquierdo">
            <path
              className="st5"
              d="M-23.9,354.3c0,0,19.7-11.2,27.7-1.7l4.4,9.2c0,0-6.4,15.4-22.1,5.9C-13.9,367.7-18.9,363.6-23.9,354.3z"
            />
            <g>
              <path
                className="st23"
                d="M-5.3,355c3,0,5.6,2,6.4,4.7c0.2-0.6,0.3-1.3,0.3-2c0-3.7-3-6.7-6.7-6.7s-6.7,3-6.7,6.7
                    c0,0.7,0.1,1.4,0.3,2C-10.9,357-8.3,355-5.3,355z"
              />
              <path
                className="st42"
                d="M-5.3,364.4c3,0,5.6-2,6.4-4.7C0.2,357-2.3,355-5.3,355c-3,0-5.6,2-6.4,4.7
                    C-10.9,362.5-8.3,364.4-5.3,364.4z"
              />
            </g>
            <circle className="st6" cx="-4.1" cy="356.4" r="1.9" />
          </g>
          <polygon id="poligono-127-izq" className="st30" points="-12.4,382.7 1.2,393.6 -3.2,370.7" />
          <polygon id="poligono-128-izq_1_" className="st25" points="-3.2,370.7 13.2,378.8 1.2,393.6" />
          <polygon id="poligono-19-izq" className="st8" points="13.2,378.8 27.2,362.2 28.7,401.3" />
          <polygon id="poligono-20-izq" className="st9" points="13.2,378.8 1.2,393.6 28.7,401.3" />
          <polygon id="poligono-181-izq" className="st12" points="1.2,393.6 -7.6,408 28.7,401.3" />
          <polygon id="poligono-21-izq" className="st13" points="-7.6,408 -6.7,440.5 28.7,401.3" />
          <polygon id="poligono-92-izq" className="st18" points="-36.8,424.4 -7.6,408 -6.7,440.5" />
          <polygon id="poligono-131-izq" className="st9" points="-25.5,400.4 -36.8,424.4 -46.5,389.2" />
          <polygon id="poligono-128-izq" className="st11" points="-25.5,400.4 -18.6,414.2 -36.8,424.4" />
          <polygon id="poligono-94-izq" className="st11" points="-49.7,411.3 -73.7,437.1 -36.8,424.4" />
          <polygon id="poligono-95-izq" className="st44" points="-49.7,411.3 -73,413.9 -73.7,437.1" />
          <polygon id="poligono-96-izq" className="st29" points="-73,413.9 -69.5,404.7 -49.7,411.3" />
          <polygon id="poligono-129-izq" className="st29" points="-14.8,403.5 -18.6,414.2 -25.5,400.4" />
          <polygon id="poligono-130-izq" className="st10" points="-14.8,403.5 -7.6,408 -18.6,414.2" />
          <polygon id="poligono-91-izq" className="st45" points="-15.4,458.5 -36.8,424.4 -6.7,440.5" />
          <polygon id="poligono-93-izq" className="st18" points="-36.8,424.4 -45.5,452.7 -73.7,437.1" />
          <polygon id="poligono-90-izq" className="st9" points="-36.8,424.4 -15.4,458.5 -45.5,452.7" />
          <polygon id="poligono-88-izq" className="st9" points="-17.2,466.9 -47.7,476.3 -45.5,452.7" />
          <polygon id="poligono-35-izq" className="st47" points="32.7,492.5 45.6,480.5 45.6,495.8" />
          <polygon id="poligono-33-izq" className="st5" points="39.8,485.9 30.7,477.5 31.2,469.4 39.1,469.4" />
          <polygon id="poligono-31-izq" className="st48" points="20.2,475.7 30.7,477.5 18.9,459.2" />
          <polygon id="poligono-29-izq" className="st6" points="31.2,469.4 28.7,447.9 18.9,459.2" />
          <polygon id="poligono-26-izq" className="st5" points="28.7,447.9 45.6,462.1 45.6,447.4" />
          <polygon id="poligono-34-izq" className="st2" points="45.6,462.1 39.1,469.4 39.8,485.9 45.6,480.5" />
          <polygon id="poligono-27-izq" className="st3" points="39.1,469.4 28.7,447.9 45.6,462.1" />
          <polygon id="poligono-28-izq" className="st2" points="31.2,469.4 28.7,447.9 39.1,469.4" />
          <polygon id="poligono-30-izq" className="st0" points="31.2,469.4 30.7,477.5 18.9,459.2" />
          <polygon id="poligono-32-izq" className="st2" points="20.2,475.7 32.7,492.5 39.8,485.9 30.7,477.5" />
          <polygon id="poligono-105-izq" className="st21" points="-45.5,452.7 -73.7,437.1 -78.1,471.5" />
          <polygon id="poligono-104-izq" className="st26" points="-73.7,437.1 -89,448 -78.1,471.5" />
          <polygon id="poligono-101-izq" className="st22" points="-89,448 -95.6,421.6 -73.7,437.1" />
          <polygon id="poligono-100-izq" className="st31" points="-95.6,421.6 -73,413.9 -73.7,437.1" />
          <polygon id="poligono-98-izq" className="st49" points="-95.6,421.6 -89.4,398.1 -73,413.9" />
          <polygon id="poligono-97-izq" className="st50" points="-89.4,398.1 -73,413.9 -69.5,404.7" />
          <polygon id="poligono-102-izq" className="st51" points="-95.6,421.6 -109.3,488 -89,448" />
          <polygon id="poligono-103-izq" className="st50" points="-89,448 -78.1,471.5 -109.3,488" />
          <polygon id="poligono-99-izq" className="st41" points="-95.6,421.6 -118.1,424.9 -89.4,398.1" />
          <polygon id="poligono-113-izq" className="st21" points="-35.4,360.5 -89.9,379.1 -89.4,398.1" />
          <polygon id="poligono-114-izq" className="st52" points="-89.9,379.1 -88.7,357.6 -35.4,360.5" />
          <polygon id="poligono-120-izq" className="st53" points="-35.4,360.5 -33.6,340.3 -23.9,354.3" />
          <polygon id="poligono-106-izq" className="st53" points="-89.9,379.1 -115.7,392 -89.4,398.1" />
          <polygon id="poligono-107-izq" className="st54" points="-89.9,379.1 -112.9,378.6 -88.7,357.6" />
          <polygon id="poligono-115-izq" className="st31" points="-88.7,357.6 -85,343.1 -35.4,360.5" />
          <polygon id="poligono-141-izq" className="st22" points="-58.3,299.8 -33.6,340.3 -21.6,307.5" />
          <polygon id="poligono-184-izq" className="st20" points="-58.3,299.8 -70,314.8 -49.2,314.8" />
          <polygon id="poligono-119-izq" className="st26" points="-70,314.8 -74.6,330 -49.2,314.8" />
          <polygon id="poligono-116-izq" className="st55" points="-74.6,330 -35.4,360.5 -85,343.1" />
          <polygon id="poligono-117-izq" className="st22" points="-74.6,330 -33.6,340.3 -35.4,360.5" />
          <polygon id="poligono-118-izq" className="st55" points="-74.6,330 -49.2,314.8 -33.6,340.3" />
          <polygon id="poligono-110-izq" className="st34" points="-74.6,330 -98.5,317.5 -70,314.8" />
          <polygon id="poligono-109-izq" className="st23" points="-74.6,330 -103.1,331.6 -85,343.1" />
          <polygon id="poligono-108-izq" className="st20" points="-85,343.1 -107.4,363 -88.7,357.6" />
          <polygon id="poligono-163-izq" className="st56" points="-58.3,299.8 -70,314.8 -92.8,298.8" />
          <polygon id="poligono-162-izq" className="st57" points="-92.8,298.8 -81.1,285.5 -58.3,299.8" />
          <polygon id="poligono-86-izq" className="st14" points="-78.1,471.5 -50.9,506.4 -47.7,476.3" />
          <polygon id="poligono-87-izq" className="st45" points="-45.5,452.7 -47.7,476.3 -78.1,471.5" />
          <polygon id="poligono-85-izq" className="st30" points="-50.9,506.4 -17.2,466.9 -47.7,476.3" />
          <polygon id="poligono-84-izq" className="st8" points="-17.2,466.9 -33.7,500.1 -50.9,506.4" />
          <polygon id="poligono-81-izq" className="st18" points="-17.2,466.9 -0.9,491.9 -33.7,500.1" />
          <polygon id="poligono-83-izq" className="st18" points="-50.9,506.4 -36.9,518.7 -33.7,500.1" />
          <polygon id="poligono-67-izq" className="st49" points="-50.9,506.4 -98.9,501.6 -66.1,486.9" />
          <polygon id="poligono-68-izq" className="st58" points="-78.1,471.5 -98.9,501.6 -66.1,486.9" />
          <polygon id="poligono-66-izq" className="st22" points="-50.9,506.4 -83,526.7 -78.1,503.7" />
          <polygon id="poligono-65-izq" className="st32" points="-50.9,506.4 -36.9,518.7 -83,526.7" />
          <polygon id="poligono-82-izq" className="st13" points="-36.9,518.7 -0.9,491.9 -33.7,500.1" />
          <polygon id="poligono-64-izq" className="st15" points="-36.9,518.7 -76.9,548.5 -67.8,524.1" />
          <polygon id="poligono-63-izq" className="st53" points="-36.9,518.7 -47.7,548 -77.4,548.7" />
          <polygon id="poligono-69-izq" className="st19" points="-36.9,518.7 -15.5,537.1 -6.1,511.6" />
          <polygon id="poligono-182-izq" className="st14" points="-0.9,491.9 -6.1,511.6 -36.9,518.7" />
          <polygon id="poligono-41-izq" className="st11" points="14.3,503 29.3,516.6 31.1,509.5" />
          <polygon id="poligono-40-izq" className="st28" points="31.1,509.5 45.6,508.9 29.3,516.6" />
          <polygon id="poligono-39-izq" className="st27" points="29.3,516.6 45.6,518 45.6,508.9" />
          <polygon id="poligono-42-izq" className="st42" points="29.3,516.6 45.6,528.4 45.6,518" />
          <polygon id="poligono-54-izq" className="st45" points="7,526.4 -15.5,537.1 -4.2,549.9" />
          <polygon id="poligono-53-izq" className="st10" points="7,526.4 12.8,559.2 -4.2,549.9" />
          <polygon id="poligono-45-izq" className="st25" points="12.8,559.2 45.6,575.4 10.2,544.7" />
          <polygon id="poligono-46-izq" className="st42" points="12.8,559.2 28,605 45.6,575.4" />
          <polygon id="poligono-51-izq" className="st18" points="12.8,559.2 -7.9,589.2 -4.2,549.9" />
          <polygon id="poligono-50-izq" className="st11" points="12.8,559.2 1.1,576.2 28,605" />
          <polygon id="poligono-47-izq" className="st8" points="45.6,575.4 35.4,592.6 45.6,603" />
          <polygon id="poligono-48-izq" className="st44" points="35.4,592.6 45.6,616.9 45.6,603" />
          <polygon id="poligono-44-izq" className="st10" points="10.2,544.7 28.7,536.6 45.6,575.4" />
          <polygon id="poligono-43-izq" className="st18" points="28.7,536.6 45.6,528.4 45.6,575.4" />
          <polygon id="poligono-60-izq" className="st41" points="29.3,516.6 28.7,536.6 45.6,528.4" />
          <polygon id="poligono-59-izq" className="st45" points="29.3,516.6 10.2,544.7 28.7,536.6" />
          <polygon id="poligono-57-izq" className="st16" points="14.3,503 7,526.4 29.3,516.6" />
          <polygon id="poligono-58-izq" className="st41" points="29.3,516.6 10.2,544.7 7,526.4" />
          <polygon id="poligono-71-izq" className="st59" points="-0.9,491.9 14.3,503 -6.1,511.6" />
          <polygon id="poligono-61-izq" className="st40" points="-15.5,537.1 -34,572.5 -48.5,548" />
          <polygon id="poligono-52-izq" className="st14" points="-15.5,537.1 -7.9,589.2 -4.2,549.9" />
          <polygon id="poligono-185-izq" className="st15" points="-15.5,537.1 -27.5,560 -7.9,589.2" />
          <polygon id="poligono-62-izq" className="st33" points="-36.9,518.7 -15.5,537.1 -48.5,548" />
          <polygon id="poligono-55-izq" className="st13" points="-6.1,511.6 7,526.4 -15.5,537.1" />
          <polygon id="poligono-56-izq" className="st14" points="-6.1,511.6 14.3,503 7,526.4" />
          <polygon id="poligono-89-izq" className="st14" points="-15.4,458.5 -17.2,466.9 -45.5,452.7" />
        </g>
        <g id="Derecha" filter="url(#edgeClean)">
          <polygon id="poligono-146-der" className="st0" points="112.3,267.8 85.5,240.7 76.1,254.8" />
          <polygon id="poligono-147-der" className="st1" points="85.5,240.7 102.8,241.4 112.3,267.8" />
          <polygon id="poligono-189-der" className="st2" points="102.8,241.4 94.1,231.4 85.5,240.7" />
          <polygon id="poligono-100-der_1_" className="st3" points="102.8,241.4 110,231.4 94.1,231.4" />
          <polygon id="poligono-174-der" className="st4" points="110,231.4 111.3,213 94.1,231.4" />
          <polygon id="poligono-173-der" className="st5" points="110,231.4 129.2,209.1 111.3,213" />
          <polygon id="poligono-175-der" className="st6" points="129.2,209.1 129.8,193.4 111.3,213" />
          <polygon id="poligono-178-der" className="st2" points="129.2,209.1 148.1,192 129.8,193.4" />
          <polygon id="poligono-176-der" className="st1" points="148.1,192 138,181.1 129.8,193.4" />
          <polygon id="poligono-177-der" className="st6" points="148.1,192 147,177.2 138,181.1" />
          <polygon id="poligono-169-der" className="st0" points="148.1,192 165.3,193.5 147,177.2" />
          <polygon id="poligono-168-der_1_" className="st1" points="165.3,193.5 158.2,200 148.1,192" />
          <polygon id="poligono-168-der" className="st5" points="165.3,193.5 170.2,213.2 158.2,200" />
          <polygon id="poligono-165-der" className="st2" points="158.2,245.1 144.6,248.3 129.2,231.4" />
          <polygon id="poligono-152-der" className="st6" points="144.6,248.3 144.8,276.1 132,286.9" />
          <polygon id="poligono-151-der" className="st7" points="144.6,248.3 112.3,267.8 132,286.9" />
          <polygon id="poligono-150-der" className="st8" points="144.6,248.3 129.2,231.4 112.3,267.8" />
          <polygon id="poligono-148-der" className="st9" points="129.2,231.4 110,231.4 112.3,267.8" />
          <polygon id="poligono-149-der" className="st10" points="110,231.4 102.8,241.4 112.3,267.8" />
          <polygon id="poligono-157-der" className="st11" points="158.2,245.1 176.3,237.3 160.5,271.4" />
          <polygon id="poligono-164-der" className="st8" points="176.3,237.3 170.2,213.2 158.2,245.1" />
          <polygon id="poligono-155-der" className="st12" points="158.2,245.1 144.8,276.1 160.5,271.4" />
          <polygon id="poligono-156-der" className="st13" points="158.2,245.1 144.8,276.1 144.6,248.3" />
          <polygon id="poligono-154-der" className="st14" points="160.5,271.4 149.2,299.4 144.8,276.1" />
          <polygon id="poligono-161-der" className="st16" points="149.2,299.4 181.5,279.2 155.8,283.1" />
          <polygon id="poligono-153-der" className="st15" points="144.8,276.1 132,286.9 149.2,299.4" />
          <polygon id="poligono-160-der" className="st17" points="181.5,279.2 160.5,271.4 155.8,283.1" />
          <polygon id="poligono-158-der" className="st18" points="160.5,271.4 178.9,260.5 176.3,237.3" />
          <polygon id="poligono-159-der" className="st19" points="178.9,260.5 175.2,276.9 160.5,271.4" />
          <polygon id="poligono-171-der" className="st20" points="148.1,192 129.2,231.4 129.2,209.1" />
          <polygon id="poligono-172-der" className="st21" points="129.2,209.1 110,231.4 129.2,231.4" />
          <polygon id="poligono-170-der" className="st22" points="148.1,192 158.2,200 129.2,231.4" />
          <polygon id="poligono-167-der" className="st23" points="158.2,200 170.2,213.2 129.2,231.4" />
          <polygon id="poligono-136-der" className="st24" points="107.6,335.8 124.5,339.9 90.2,349.7" />
          <polygon id="poligono-135-der" className="st25" points="124.5,339.9 114.8,353.9 93.6,348.4" />
          <polygon id="poligono-166-der" className="st26" points="170.2,213.2 158.2,245.1 129.2,231.4" />
          <polygon id="poligono-121-der" className="st27" points="114.8,353.9 126.3,360.2 104.9,367.3" />
          <polygon id="poligono-18-der" className="st4" points="82.8,361.4 77.7,378.4 94.2,370.3" />
          <polygon id="poligono-17-der" className="st2" points="82.8,361.4 74.8,361.5 77.7,378.4" />
          <polygon id="poligono-140-der" className="st20" points="124.5,339.9 93.6,332.3 112.5,307.2" />
          <polygon id="poligono-142-der" className="st20" points="75.8,314.9 149.2,299.4 132,286.9" />
          <polygon id="poligono-137-der" className="st12" points="93.6,332.3 87.1,352.2 107.6,335.8" />
          <polygon id="poligono-138-der" className="st28" points="93.6,332.3 75.1,331.5 82.8,361.4 87.1,352.2" />
          <polygon id="poligono-139-der" className="st29" points="75.8,314.9 75.1,331.5 93.6,332.3" />
          <polygon id="poligono-13-der" className="st11" points="75.8,314.9 63.1,332.3 75.1,331.5" />
          <polygon id="poligono-15-der" className="st30" points="75.1,331.5 63.7,361.8 82.8,361.4" />
          <polygon id="poligono-14-der" className="st24" points="75.1,331.5 63.1,332.3 63.7,361.8" />
          <polygon id="poligono-4-der" className="st22" points="63.1,332.3 45.3,342.2 63.7,361.8" />
          <polygon id="poligono-3-der" className="st31" points="63.7,361.8 45.3,386.4 45.3,342.2" />
          <polygon id="poligono-2-der" className="st32" points="63.7,361.8 62.2,401 45.3,386.4" />
          <polygon id="poligono-1-der" className="st33" points="62.2,401 45.3,436.7 45.3,386.4" />
          <polygon id="poligono-23-der" className="st16" points="62.2,401 73,447 45.3,436.7" />
          <polygon id="poligono-16-der" className="st18" points="77.7,378.4 63.7,361.8 74.8,361.5" />
          <polygon id="poligono-6-der" className="st21" points="75.8,314.9 45.3,306.7 63.1,332.3" />
          <polygon id="poligono-5-der" className="st23" points="63.1,332.3 45.3,306.7 45.3,342.2" />
          <polygon id="poligono-7-der" className="st34" points="75.8,314.9 45.3,255.7 45.3,306.7" />
          <polygon id="poligono-12-der" className="st35" points="75.8,314.9 76.1,254.8 57.2,278.8" />
          <polygon id="poligono-144-der" className="st36" points="76.1,254.8 112.3,267.8 75.8,314.9" />
          <polygon id="poligono-11-der" className="st36" points="76.1,254.8 58.1,253.9 57.2,278.8" />
          <polygon id="poligono-10-der" className="st37" points="76.1,254.8 68.7,236.1 58.1,253.9" />
          <polygon id="poligono-8-der" className="st38" points="58.1,253.9 45.3,255.7 57.2,278.8" />
          <polygon id="poligono-9-der" className="st1" points="58.1,253.9 51.7,234.6 45.3,255.7" />
          <polygon id="poligono-145-der" className="st39" points="68.7,236.1 85.5,240.7 76.1,254.8" />
          <polygon id="poligono-143-der" className="st21" points="112.3,267.8 132,286.9 75.8,314.9" />
          <polygon id="poligono-187-der" className="st32" points="93.6,332.3 75.8,314.9 112.5,307.2" />
          <polygon id="poligono-112-der" className="st26" points="126.3,360.2 137.4,388.9 180.3,397.8" />
          <polygon id="poligono-134-der" className="st32" points="126.3,360.2 115.8,379.1 132,375" />
          <polygon id="poligono-180-der" className="st40" points="115.8,379.1 116.4,400 105.7,403.2" />
          <polygon id="poligono-133-der" className="st15" points="115.8,379.1 132,375 116.4,400" />
          <polygon id="poligono-111-der" className="st15" points="137.4,388.9 140.6,410.9 180.3,397.8" />
          <polygon id="poligono-183-der" className="st41" points="137.4,388.9 127.8,424 140.6,410.9" />
          <polygon id="poligono-132-der" className="st41" points="137.4,388.9 132,375 116.4,400" />
          <polygon id="poligono-186-der" className="st42" points="73,447 72.7,459.6 55.7,440.5" />
          <polygon id="poligono-76-der" className="st43" points="73,447 98.8,467.3 70.7,475.3" />
          <polygon id="poligono-75-der" className="st44" points="98.8,467.3 91.8,491.5 70.7,475.3" />
          <polygon id="poligono-77-der" className="st27" points="73,447 97.7,440.1 98.8,467.3" />
          <polygon id="poligono-22-der" className="st42" points="97.7,440.1 62.2,401 73,447" />
          <polygon id="poligono-78-der" className="st10" points="98.8,467.3 106.3,458.1 97.7,440.1" />
          <polygon id="poligono-25-der" className="st10" points="55.7,440.5 45.3,447 62.2,447.6" />
          <polygon id="poligono-24-der" className="st45" points="55.7,440.5 45.3,436.7 45.3,447" />
          <polygon id="poligono-79-der" className="st38" points="106.3,458.1 108.1,466.5 98.8,467.3" />
          <polygon id="poligono-80-der" className="st21" points="108.1,466.5 91.8,491.5 98.8,467.3" />
          <polygon id="poligono-179-der" className="st14" points="70.7,475.3 58.2,492.1 69.1,489.3" />
          <polygon id="poligono-124-der" className="st11" points="103.3,382.4 94.1,370.4 104.9,367.3" />
          <polygon id="poligono-74-der" className="st18" points="70.7,475.3 69.1,489.3 91.8,491.5" />
          <polygon id="poligono-36-der" className="st46" points="45.3,495.5 69.1,489.3 65.3,498.4" />
          <polygon id="poligono-37-der" className="st39" points="65.3,498.4 76.6,502.6 45.3,500.5 45.3,495.5" />
          <polygon id="poligono-38-der" className="st0" points="76.6,502.6 59.9,509.2 45.3,508.6 45.3,500.5" />
          <polygon id="poligono-73-der" className="st16" points="69.1,489.3 76.6,502.6 65.3,498.4" />
          <polygon id="poligono-72-der" className="st14" points="69.1,489.3 91.8,491.5 76.6,502.6" />
          <polygon id="poligono-122-der" className="st44" points="126.3,360.2 104.9,367.3 115.8,379.1" />
          <polygon id="poligono-123-der" className="st27" points="104.9,367.3 103.3,382.4 115.8,379.1" />
          <polygon id="poligono-125-der" className="st42" points="103.3,382.4 105.7,403.2 115.8,379.1" />
          <polygon id="poligono-190-der" className="st7" points="103.3,382.4 98.5,407.6 105.7,403.2" />
          <polygon id="poligono-126-der" className="st14" points="103.3,382.4 89.7,393.2 98.5,407.6" />
          <g id="Ojo-derecho">
            <path
              className="st5"
              d="M114.8,353.9c0,0-19.7-11.2-27.7-1.7l-4.4,9.2c0,0,6.4,15.4,22.1,5.9C104.9,367.3,109.8,363.2,114.8,353.9z"
            />
            <g>
              <path
                className="st23"
                d="M96.2,354.6c-3,0-5.6,2-6.4,4.7c-0.2-0.6-0.3-1.3-0.3-2c0-3.7,3-6.7,6.7-6.7s6.7,3,6.7,6.7
                    c0,0.7-0.1,1.4-0.3,2C101.8,356.6,99.3,354.6,96.2,354.6z"
              />
              <path
                className="st42"
                d="M96.2,364.1c-3,0-5.6-2-6.4-4.7c0.9-2.7,3.4-4.7,6.4-4.7s5.6,2,6.4,4.7C101.8,362.1,99.3,364.1,96.2,364.1z
                    "
              />
            </g>
            <circle className="st6" cx="95" cy="356.1" r="1.9" />
          </g>
          <polygon id="poligono-127-der" className="st30" points="103.3,382.4 89.7,393.2 94.1,370.4" />
          <polygon id="poligono-128-der_1_" className="st25" points="94.1,370.4 77.7,378.4 89.7,393.2" />
          <polygon id="poligono-19-der" className="st8" points="77.7,378.4 63.7,361.8 62.2,401" />
          <polygon id="poligono-20-der" className="st9" points="77.7,378.4 89.7,393.2 62.2,401" />
          <polygon id="poligono-181-der" className="st12" points="89.7,393.2 98.5,407.6 62.2,401" />
          <polygon id="poligono-21-der" className="st13" points="98.5,407.6 97.7,440.1 62.2,401" />
          <polygon id="poligono-92-der" className="st18" points="127.8,424 98.5,407.6 97.7,440.1" />
          <polygon id="poligono-131-der" className="st9" points="116.4,400 127.8,424 137.4,388.9" />
          <polygon id="poligono-128-der" className="st11" points="116.4,400 109.5,413.8 127.8,424" />
          <polygon id="poligono-94-der" className="st11" points="140.6,410.9 164.6,436.7 127.8,424" />
          <polygon id="poligono-95-der" className="st44" points="140.6,410.9 163.9,413.5 164.6,436.7" />
          <polygon id="poligono-96-der" className="st29" points="163.9,413.5 160.4,404.4 140.6,410.9" />
          <polygon id="poligono-129-der" className="st29" points="105.7,403.2 109.5,413.8 116.4,400" />
          <polygon id="poligono-130-der" className="st10" points="105.7,403.2 98.5,407.6 109.5,413.8" />
          <polygon id="poligono-91-der" className="st45" points="106.3,458.1 127.8,424 97.7,440.1" />
          <polygon id="poligono-93-der" className="st18" points="127.8,424 136.4,452.3 164.6,436.7" />
          <polygon id="poligono-90-der" className="st9" points="127.8,424 106.3,458.1 136.4,452.3" />
          <polygon id="poligono-88-der" className="st9" points="108.1,466.5 138.6,475.9 136.4,452.3" />
          <polygon id="poligono-35-der" className="st47" points="58.2,492.1 45.3,480.1 45.3,495.5" />
          <polygon id="poligono-33-der" className="st5" points="51.1,485.5 60.2,477.1 59.7,469.1 51.8,469.1" />
          <polygon id="poligono-31-der" className="st48" points="70.7,475.3 60.2,477.1 72.1,458.9" />
          <polygon id="poligono-29-der" className="st6" points="59.7,469.1 62.2,447.6 72.1,458.9" />
          <polygon id="poligono-26-der" className="st5" points="62.2,447.6 45.3,461.7 45.3,447" />
          <polygon id="poligono-34-der" className="st2" points="45.3,461.7 51.8,469.1 51.1,485.5 45.3,480.1" />
          <polygon id="poligono-27-der" className="st3" points="51.8,469.1 62.2,447.6 45.3,461.7" />
          <polygon id="poligono-28-der" className="st2" points="59.7,469.1 62.2,447.6 51.8,469.1" />
          <polygon id="poligono-30-der" className="st0" points="59.7,469.1 60.2,477.1 72.1,458.9" />
          <polygon id="poligono-32-der" className="st2" points="70.7,475.3 58.2,492.1 51.1,485.5 60.2,477.1" />
          <polygon id="poligono-105-der" className="st21" points="136.4,452.3 164.6,436.7 169,471.1" />
          <polygon id="poligono-104-der" className="st26" points="164.6,436.7 179.9,447.6 169,471.1" />
          <polygon id="poligono-101-der" className="st22" points="179.9,447.6 186.5,421.3 164.6,436.7" />
          <polygon id="poligono-100-der" className="st31" points="186.5,421.3 163.9,413.5 164.6,436.7" />
          <polygon id="poligono-98-der" className="st49" points="186.5,421.3 180.3,397.8 163.9,413.5" />
          <polygon id="poligono-97-der" className="st50" points="180.3,397.8 163.9,413.5 160.4,404.4" />
          <polygon id="poligono-102-der" className="st51" points="186.5,421.3 200.2,487.7 179.9,447.6" />
          <polygon id="poligono-103-der" className="st50" points="179.9,447.6 169,471.1 200.2,487.7" />
          <polygon id="poligono-99-der" className="st41" points="186.5,421.3 209,424.5 180.3,397.8" />
          <polygon id="poligono-113-der" className="st21" points="126.3,360.2 180.8,378.7 180.3,397.8" />
          <polygon id="poligono-114-der" className="st52" points="180.8,378.7 179.6,357.2 126.3,360.2" />
          <polygon id="poligono-120-der" className="st53" points="126.3,360.2 124.5,339.9 114.8,353.9" />
          <polygon id="poligono-106-der" className="st53" points="180.8,378.7 206.6,391.6 180.3,397.8" />
          <polygon id="poligono-107-der" className="st54" points="180.8,378.7 203.8,378.3 179.6,357.2" />
          <polygon id="poligono-115-der" className="st31" points="179.6,357.2 175.9,342.7 126.3,360.2" />
          <polygon id="poligono-141-der" className="st22" points="149.2,299.4 124.5,339.9 112.5,307.2" />
          <polygon id="poligono-184-der" className="st20" points="149.2,299.4 161,314.4 140.1,314.4" />
          <polygon id="poligono-119-der" className="st26" points="161,314.4 165.5,329.6 140.1,314.4" />
          <polygon id="poligono-116-der" className="st55" points="165.5,329.6 126.3,360.2 175.9,342.7" />
          <polygon id="poligono-117-der" className="st22" points="165.5,329.6 124.5,339.9 126.3,360.2" />
          <polygon id="poligono-118-der" className="st55" points="165.5,329.6 140.1,314.4 124.5,339.9" />
          <polygon id="poligono-110-der" className="st34" points="165.5,329.6 189.4,317.1 161,314.4" />
          <polygon id="poligono-109-der" className="st23" points="165.5,329.6 194,331.2 175.9,342.7" />
          <polygon id="poligono-108-der" className="st20" points="175.9,342.7 198.4,362.6 179.6,357.2" />
          <polygon id="poligono-163-der" className="st56" points="149.2,299.4 161,314.4 183.7,298.4" />
          <polygon id="poligono-162-der" className="st57" points="183.7,298.4 172,285.2 149.2,299.4" />
          <polygon id="poligono-86-der" className="st14" points="169,471.1 141.8,506.1 138.6,475.9" />
          <polygon id="poligono-87-der" className="st45" points="136.4,452.3 138.6,475.9 169,471.1" />
          <polygon id="poligono-85-der" className="st30" points="141.8,506.1 108.1,466.5 138.6,475.9" />
          <polygon id="poligono-84-der" className="st8" points="108.1,466.5 124.7,499.7 141.8,506.1" />
          <polygon id="poligono-81-der" className="st18" points="108.1,466.5 91.8,491.5 124.7,499.7" />
          <polygon id="poligono-83-der" className="st18" points="141.8,506.1 127.8,518.3 124.7,499.7" />
          <polygon id="poligono-67-der" className="st49" points="141.8,506.1 189.8,501.2 157,486.5" />
          <polygon id="poligono-68-der" className="st58" points="169,471.1 189.8,501.2 157,486.5" />
          <polygon id="poligono-66-der" className="st22" points="141.8,506.1 174,526.3 169,503.3" />
          <polygon id="poligono-65-der" className="st32" points="141.8,506.1 127.8,518.3 174,526.3" />
          <polygon id="poligono-82-der" className="st13" points="127.8,518.3 91.8,491.5 124.7,499.7" />
          <polygon id="poligono-64-der" className="st15" points="127.8,518.3 167.9,548.1 158.7,523.7" />
          <polygon id="poligono-63-der" className="st53" points="127.8,518.3 138.6,547.6 168.3,548.3" />
          <polygon id="poligono-69-der" className="st19" points="127.8,518.3 106.4,536.8 97,511.2" />
          <polygon id="poligono-182-der" className="st14" points="91.8,491.5 97,511.2 127.8,518.3" />
          <polygon id="poligono-41-der" className="st11" points="76.6,502.6 61.6,516.2 59.9,509.2" />
          <polygon id="poligono-40-der" className="st28" points="59.9,509.2 45.3,508.6 61.6,516.2" />
          <polygon id="poligono-39-der" className="st27" points="61.6,516.2 45.3,517.6 45.3,508.6" />
          <polygon id="poligono-42-der" className="st42" points="61.6,516.2 45.3,528 45.3,517.6" />
          <polygon id="poligono-54-der" className="st45" points="83.9,526 106.4,536.8 95.1,549.5" />
          <polygon id="poligono-53-der" className="st10" points="83.9,526 78.1,558.8 95.1,549.5" />
          <polygon id="poligono-45-der" className="st25" points="78.1,558.8 45.3,575 80.7,544.3" />
          <polygon id="poligono-46-der" className="st42" points="78.1,558.8 62.9,604.7 45.3,575" />
          <polygon id="poligono-50-der" className="st18" points="78.1,558.8 98.8,588.9 95.1,549.5" />
          <polygon id="poligono-49-der" className="st11" points="78.1,558.8 89.8,575.8 62.9,604.7" />
          <polygon id="poligono-47-der" className="st8" points="45.3,575 55.5,592.2 45.3,602.6" />
          <polygon id="poligono-48-der" className="st44" points="55.5,592.2 45.3,616.5 45.3,602.6" />
          <polygon id="poligono-44-der" className="st10" points="80.7,544.3 62.2,536.2 45.3,575" />
          <polygon id="poligono-43-der" className="st18" points="62.2,536.2 45.3,528 45.3,575" />
          <polygon id="poligono-60-der" className="st41" points="61.6,516.2 62.2,536.2 45.3,528" />
          <polygon id="poligono-59-der" className="st45" points="61.6,516.2 80.7,544.3 62.2,536.2" />
          <polygon id="poligono-57-der" className="st16" points="76.6,502.6 83.9,526 61.6,516.2" />
          <polygon id="poligono-58-der" className="st41" points="61.6,516.2 80.7,544.3 83.9,526" />
          <polygon id="poligono-71-der" className="st59" points="91.8,491.5 76.6,502.6 97,511.2" />
          <polygon id="poligono-61-der" className="st40" points="106.4,536.8 125,572.2 139.4,547.6" />
          <polygon id="poligono-51-der" className="st14" points="106.4,536.8 98.8,588.9 95.1,549.5" />
          <polygon id="poligono-185-der" className="st15" points="106.4,536.8 118.4,559.7 98.8,588.9" />
          <polygon id="poligono-62-der" className="st33" points="127.8,518.3 106.4,536.8 139.4,547.6" />
          <polygon id="poligono-55-der" className="st13" points="97,511.2 83.9,526 106.4,536.8" />
          <polygon id="poligono-56-der" className="st14" points="97,511.2 76.6,502.6 83.9,526" />
          <polygon id="poligono-89-der" className="st14" points="106.3,458.1 108.1,466.5 136.4,452.3" />
        </g>
      </svg>
    </div>
  );
};

export default LoadingAnimation;
