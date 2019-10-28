// src/components/QuoteList.js
import React from "react";
import QuoteCard from './QuoteCard';
// An array of objects
const quotes = [
  {
    quote:
      "My name is Gail",
    character: "Gail Robinson",
    image:
      "https://randomuser.me/api/portraits/women/26.jpg"
  },
  {
    quote: "My name is Kay",
    character: "Kay Mills",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "My name is Gladys",
    character: "Gladys Ferguson",
    image:
      "https://randomuser.me/api/portraits/women/42.jpg"
  },
  {
    quote:
      "My name is Cathy",
    character: "Cathy West",
    image:
      "https://randomuser.me/api/portraits/women/85.jpg"
  },
  {
    quote:
      "My name is Cherly.",
    character: "Cherly Kennedy",
    image:
      "https://randomuser.me/api/portraits/women/46.jpg"
  }
];

const QuoteList = () => (
  <div>
    {quotes.map(item => (
  <QuoteCard quote={item.quote} image={item.image} character={item.character} />
    ))}
  </div>
);

export default QuoteList;