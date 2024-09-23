import React from 'react';
import id from "./assets/my-acetrack-qrcode.jpeg";
import { CardBody, CardContainer, CardItem, MouseEnterProvider } from './components/ui/3d-card';

export function ThreeDCardDemo() {
  return (
    <MouseEnterProvider>
      <CardContainer className="inter-var">
        <CardBody
          
          style={{ height: '5in', width: '4.5in' }} // Height and width in inches
        >
          
          {/* Title */}
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            
          </CardItem>

          {/* Description */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            
          </CardItem>

          {/* Image */}
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={id}
              className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          {/* Footer Section */}
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="a"
              href="https://twitter.com/mannupaaji" 
              target="_blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>

        </CardBody>
      </CardContainer>
    </MouseEnterProvider>
  );
}
