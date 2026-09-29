import { cloneElement, isValidElement, type ReactElement } from "react";
import { Slide } from "./Slide";

/** Give every running <Slide> its page number from its position in the document. */
export function numberSlides(slides: ReactElement[]) {
  return slides.map((el, i) =>
    isValidElement(el) && el.type === Slide ? cloneElement(el as ReactElement<{ number?: number }>, { number: i + 1 }) : el,
  );
}
