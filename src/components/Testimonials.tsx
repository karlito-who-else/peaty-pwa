import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { v4 } from "uuid";

const Testimonials = ({
  testimonials
}: InferProps<typeof Testimonials.propTypes>): ReactElement => (
  <div>
    {testimonials.map(testimonial => (
      <article key={v4()} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string
    })
  )
};

export default Testimonials;
