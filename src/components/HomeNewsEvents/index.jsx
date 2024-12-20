import { Accordion, AccordionItem } from '@szhsin/react-accordion';

import React from 'react'

 const NewsEvents = () => {

   
        const accordionStyles = {
          width: "100%",
          maxWidth: "600px",
          margin: "auto",
          padding: "1rem",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        };
      
        const accordionItemHeaderStyles = {
          backgroundColor: "#f0f0f0",
          padding: "1rem",
          textAlign: "left",
          fontWeight: "600",
          cursor: "pointer",
          borderTop: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          transition: "background-color 0.3s",
        };
      
        const accordionItemContentStyles = {
          padding: "1rem",
          backgroundColor: "#fafafa",
          borderLeft: "4px solid #ccc",
          marginTop: "0.5rem",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        };

  return (
    <> 
    <div className="App">
<h1 className='text-3xl md:text-4xl lg:text-5xl text-center my-8 font-bold text-sky-500' style={{fontFamily:"antonioregular"}}>NEWS & EVENTS</h1>

      <div style={accordionStyles}>
        <Accordion>
          <AccordionItem header="What is Lorem Ipsum?" style={accordionItemHeaderStyles}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionItem>

          <AccordionItem header="Where does it come from?" style={accordionItemHeaderStyles}>
            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi.
          </AccordionItem>

          <AccordionItem header="Why do we use it?" style={accordionItemHeaderStyles}>
            Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
    </>
  )
}
export default NewsEvents;